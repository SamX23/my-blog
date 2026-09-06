export interface SteamProfileData {
  personaName: string;
  avatarUrl: string;
  profileUrl: string;
  status: string;
  level: number;
  recentGames: {
    name: string;
    hours: string;
    lastPlayed: string;
    appId: string;
    imageUrl: string;
  }[];
}

export async function fetchSteamProfile(): Promise<SteamProfileData> {
  // Direct profile scraping fallback / cache for kangaiti (eyjafjallajökull™)
  const defaultProfile: SteamProfileData = {
    personaName: "eyjafjallajökull™",
    avatarUrl: "https://avatars.steamstatic.com/b9560dcde18b6255dca029707261d77cb3ef0aa7_full.jpg",
    profileUrl: "https://steamcommunity.com/id/kangaiti",
    status: "ONLINE",
    level: 24,
    recentGames: [
      {
        name: "Counter-Strike 2",
        hours: "156 hrs",
        lastPlayed: "Recent",
        appId: "730",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/capsule_184x69.jpg",
      },
      {
        name: "Black Myth: Wukong",
        hours: "10.5 hrs",
        lastPlayed: "Recent",
        appId: "2358720",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/capsule_184x69.jpg",
      },
      {
        name: "Dota 2",
        hours: "1,200+ hrs",
        lastPlayed: "Competitive",
        appId: "570",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/capsule_184x69.jpg",
      },
    ],
  };

  try {
    const res = await fetch("https://steamcommunity.com/id/kangaiti", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return defaultProfile;

    const html = await res.text();
    const nameMatch = html.match(/class="actual_persona_name">([^<]+)<\/span>/);
    const levelMatch = html.match(/friendPlayerLevelNum">(\d+)<\/span>/);

    if (nameMatch && nameMatch[1]) {
      defaultProfile.personaName = nameMatch[1].trim();
    }
    if (levelMatch && levelMatch[1]) {
      defaultProfile.level = parseInt(levelMatch[1], 10);
    }

    return defaultProfile;
  } catch (error) {
    console.error("Steam profile fetch error:", error);
    return defaultProfile;
  }
}
