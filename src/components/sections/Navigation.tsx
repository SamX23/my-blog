"use client";

import Image from "next/image";
import { useAuraTheme } from "../../lib/themeContext";

export function Navigation() {
  const { audioEnabled, toggleAudio } = useAuraTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-obsidian-deep/90 backdrop-blur-md border-b border-neon-cyan/20 shadow-[0_4px_24px_rgba(0,240,255,0.06)]">
      <div className="h-20 max-w-[88rem] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand & Callsign */}
        <a href="#terminal-hero" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative flex items-center justify-center w-7 h-7 rounded border border-neon-cyan/40 bg-surface-container shadow-[0_0_10px_rgba(0,240,255,0.25)] group-hover:border-neon-cyan transition-all">
            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
          </div>
          <span className="font-bold text-high-volt-white tracking-tight text-sm uppercase group-hover:text-neon-cyan transition-colors">
            SAMI KALAMMALLAH
          </span>
          <span className="text-[10px] font-mono text-neon-cyan bg-neon-cyan/10 px-1.5 py-0.5 border border-neon-cyan/30 rounded">
            SamX23
          </span>
        </a>

        {/* Minimalist Navigation links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-on-surface-variant">
          <a href="#terminal-hero" className="hover:text-neon-cyan transition-colors">
            Terminal
          </a>
          <a href="#repo-projects" className="hover:text-neon-cyan transition-colors">
            Projects
          </a>
          <a href="#skill-tree" className="hover:text-solar-amber transition-colors">
            Skills
          </a>
          <a href="#battlestation" className="hover:text-rog-crimson transition-colors">
            Arena
          </a>
          <a href="#hardware-specs" className="hover:text-solar-amber transition-colors">
            Rig
          </a>
          <a href="#uplink-contact" className="hover:text-neon-cyan transition-colors">
            Contact
          </a>
        </nav>

        {/* Tactical Controls: SFX Toggle + GitHub + Profile */}
        <div className="flex items-center gap-3">
          {/* Mechanical Keyboard Tactile Sound Toggle */}
          <button
            type="button"
            onClick={toggleAudio}
            className={`px-2.5 py-1 rounded font-mono text-[10px] border transition-all flex items-center gap-1.5 ${
              audioEnabled
                ? "bg-neon-cyan/15 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                : "border-wireframe-steel text-tactical-slate hover:text-on-surface"
            }`}
            title="Toggle tactile keyboard click sound effects"
          >
            <span>{audioEnabled ? "🔊" : "🔇"}</span>
            <span className="hidden sm:inline">{audioEnabled ? "SFX ON" : "SFX MUTE"}</span>
          </button>

          {/* GitHub CTA */}
          <a
            href="https://github.com/SamX23"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-neon-cyan to-rog-crimson text-obsidian-deep font-bold text-xs uppercase hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all border border-white/20 chamfer-btn"
          >
            GitHub
          </a>

          {/* User Avatar */}
          <div className="relative flex items-center justify-center p-0.5 rounded-full bg-gradient-to-br from-neon-cyan via-solar-amber to-rog-crimson shadow-[0_0_16px_rgba(255,0,85,0.4)]">
            <Image
              src="/images/profile.jpg"
              alt="Sami Kalammallah"
              width={34}
              height={34}
              className="rounded-full object-cover w-8 h-8"
              unoptimized
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-solar-amber ring-2 ring-obsidian-deep animate-pulse shadow-[0_0_8px_#ff7700]"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
