export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

export interface GitHubActivityData {
  username: string;
  totalContributions: number;
  weeks: ContributionWeek[];
  recentEvents: {
    type: string;
    repo: string;
    created_at: string;
  }[];
}

export async function fetchGitHubActivity(username: string = "SamX23"): Promise<GitHubActivityData> {
  try {
    // 1. Fetch live contributions via public mirror or GitHub API
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 3600 },
    });

    let totalContributions = 3234;
    const weeks: ContributionWeek[] = [];

    if (res.ok) {
      const data = await res.json();
      totalContributions = data.total?.lastYear || totalContributions;
      
      // Group days into weeks of 7
      const rawDays: { date: string; count: number; level: number }[] = data.contributions || [];
      // Take last 35 weeks (245 days) for compact cyber stream view
      const sliceDays = rawDays.slice(-245);
      
      for (let i = 0; i < sliceDays.length; i += 7) {
        weeks.push({
          days: sliceDays.slice(i, i + 7),
        });
      }
    }

    // 2. Fetch public events
    let recentEvents: { type: string; repo: string; created_at: string }[] = [];
    try {
      const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=6`, {
        headers: { "User-Agent": "SamX23-Portfolio" },
        next: { revalidate: 1800 },
      });
      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        recentEvents = (eventsData || []).map((ev: any) => ({
          type: ev.type,
          repo: ev.repo?.name || "SamX23/repo",
          created_at: ev.created_at,
        }));
      }
    } catch {
      // Fallback
      recentEvents = [
        { type: "PushEvent", repo: "SamX23/my-blog", created_at: new Date().toISOString() },
        { type: "WatchEvent", repo: "OpenWhispr/openwhispr", created_at: new Date().toISOString() },
      ];
    }

    return {
      username,
      totalContributions,
      weeks,
      recentEvents,
    };
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return {
      username,
      totalContributions: 3234,
      weeks: [],
      recentEvents: [],
    };
  }
}
