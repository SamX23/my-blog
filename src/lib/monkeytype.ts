export interface MonkeytypeStats {
  username: string;
  wpm: number;
  accuracy: number;
  rawWpm: number;
  consistency: number;
  testsCompleted: number;
  timeTyping: string;
  profileUrl: string;
  keyboard: string;
}

export async function fetchMonkeytypeStats(): Promise<MonkeytypeStats> {
  const defaultStats: MonkeytypeStats = {
    username: "samx23",
    wpm: 108,
    accuracy: 98,
    rawWpm: 114,
    consistency: 84,
    testsCompleted: 420,
    timeTyping: "5h 12m",
    profileUrl: "https://monkeytype.com/profile/samx23",
    keyboard: "Pressplay Essential75 Rengoku Edition",
  };

  const apiKey = process.env.MONKEYTYPE_API_KEY;

  if (!apiKey) return defaultStats;

  try {
    const res = await fetch("https://api.monkeytype.com/users/stats", {
      headers: {
        Authorization: `ApeKey ${apiKey}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return defaultStats;
    }

    const json = await res.json();
    if (json?.data) {
      const data = json.data;
      const completed = data.completedTests || defaultStats.testsCompleted;
      const timeSecs = data.timeTyping || 0;
      const hours = Math.floor(timeSecs / 3600);
      const mins = Math.floor((timeSecs % 3600) / 60);

      return {
        username: "samx23",
        wpm: Math.round(data.highestWpm || data.wpm || defaultStats.wpm),
        accuracy: Math.round(data.highestAccuracy || data.acc || defaultStats.accuracy),
        rawWpm: Math.round(data.highestRaw || data.raw || defaultStats.rawWpm),
        consistency: Math.round(data.consistency || defaultStats.consistency),
        testsCompleted: completed,
        timeTyping: hours > 0 ? `${hours}h ${mins}m` : `${mins}m`,
        profileUrl: "https://monkeytype.com/profile/samx23",
        keyboard: "Pressplay Essential75 Rengoku Edition",
      };
    }
  } catch (err) {
    console.error("Monkeytype fetch error:", err);
  }

  return defaultStats;
}
