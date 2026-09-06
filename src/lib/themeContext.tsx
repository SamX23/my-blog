"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type AuraTheme = "cyan" | "flame" | "toxic";

interface ThemeContextType {
  theme: AuraTheme;
  setTheme: (t: AuraTheme) => void;
  crosshairColor: string;
  setCrosshairColor: (c: string) => void;
  crosshairSize: "small" | "medium" | "large";
  setCrosshairSize: (s: "small" | "medium" | "large") => void;
  audioEnabled: boolean;
  toggleAudio: () => void;
  switchProfile: "rengoku" | "tactile";
  setSwitchProfile: (p: "rengoku" | "tactile") => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<AuraTheme>("cyan");
  const [crosshairColor, setCrosshairColor] = useState<string>("#00f0ff");
  const [crosshairSize, setCrosshairSize] = useState<"small" | "medium" | "large">("medium");
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [switchProfile, setSwitchProfileState] = useState<"rengoku" | "tactile">("rengoku");

  const setTheme = (newTheme: AuraTheme) => {
    setThemeState(newTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-aura-theme", newTheme);
      if (newTheme === "cyan") setCrosshairColor("#00f0ff");
      else if (newTheme === "flame") setCrosshairColor("#ff7700");
      else if (newTheme === "toxic") setCrosshairColor("#00ff66");
    }
  };

  const toggleAudio = async () => {
    const { cyberAudio } = await import("./audio");
    const newState = cyberAudio.toggleAudio();
    setAudioEnabled(newState);
  };

  const setSwitchProfile = async (p: "rengoku" | "tactile") => {
    setSwitchProfileState(p);
    const { cyberAudio } = await import("./audio");
    cyberAudio.setSwitch(p);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-aura-theme", "cyan");

    // Global mechanical keyboard typing sound listener
    const handleKeyDown = async () => {
      const { cyberAudio } = await import("./audio");
      cyberAudio.playSwitchClick();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        crosshairColor,
        setCrosshairColor,
        crosshairSize,
        setCrosshairSize,
        audioEnabled,
        toggleAudio,
        switchProfile,
        setSwitchProfile,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAuraTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useAuraTheme must be used within ThemeProvider");
  return ctx;
}
