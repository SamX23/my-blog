"use client";

import React from "react";
import Image from "next/image";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-obsidian-deep/90 backdrop-blur-md border-b border-neon-cyan/20 shadow-[0_4px_24px_rgba(0,240,255,0.06)]">
      <div className="h-20 max-w-[88rem] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand & Callsign */}
        <div className="flex items-center gap-3">
          <div className="relative p-1 rounded border border-neon-cyan/40 bg-surface-container shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            <span className="text-rog-crimson font-black text-xl tracking-tighter">ROG</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-high-volt-white uppercase tracking-tight text-sm md:text-base">
                SAMI KALAMMALLAH
              </span>
              <span className="text-[11px] font-mono text-neon-cyan font-bold bg-neon-cyan/10 px-1.5 py-0.5 border border-neon-cyan/30">
                [// SamX23]
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-on-surface-variant">
              <span className="inline-block w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
              <span>EXP: 7+ YRS SOFT_ENG</span>
              <span className="text-tactical-slate">//</span>
              <span className="text-solar-amber">HARDCORE PC GAMER</span>
              <span className="text-tactical-slate">//</span>
              <span className="text-rog-crimson font-bold">BATTLE_READY</span>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          <a
            href="#terminal-hero"
            className="px-2.5 py-1 text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/40 shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:bg-neon-cyan/20 transition-all"
          >
            [01] TERMINAL_HERO
          </a>
          <a
            href="#repo-projects"
            className="px-2.5 py-1 text-on-surface-variant hover:text-neon-cyan hover:border hover:border-neon-cyan/30 transition-colors"
          >
            [02] REPO_PROJECTS
          </a>
          <a
            href="#battlestation"
            className="px-2.5 py-1 text-on-surface-variant hover:text-rog-crimson hover:border hover:border-rog-crimson/30 transition-colors"
          >
            [03] BATTLE_ARENA
          </a>
          <a
            href="#hardware-specs"
            className="px-2.5 py-1 text-on-surface-variant hover:text-solar-amber hover:border hover:border-solar-amber/30 transition-colors"
          >
            [04] RIG_SPECS
          </a>
          <a
            href="#uplink-contact"
            className="px-2.5 py-1 text-on-surface-variant hover:text-neon-cyan transition-colors"
          >
            [05] UPLINK_CONTACT
          </a>
        </nav>

        {/* Right CTA / Profile Avatar */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SamX23"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 bg-gradient-to-r from-neon-cyan to-rog-crimson text-obsidian-deep font-bold text-xs uppercase hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all border border-white/20 chamfer-btn"
          >
            GITHUB // @SamX23
          </a>
          <div className="relative flex items-center justify-center p-0.5 rounded-full bg-gradient-to-br from-neon-cyan via-solar-amber to-rog-crimson shadow-[0_0_16px_rgba(255,0,85,0.4)]">
            <Image
              src="https://avatars.githubusercontent.com/u/48549774?v=4"
              alt="Sami Kalammallah"
              width={32}
              height={32}
              className="rounded-full object-cover"
              unoptimized
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-solar-amber ring-2 ring-obsidian-deep animate-pulse shadow-[0_0_8px_#ff7700]"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
