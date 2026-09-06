"use client";

import React from "react";

export function FooterDiagnostics() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-40 bg-obsidian-deep/95 backdrop-blur-md border-t border-neon-cyan/20 shadow-[0_-4px_20px_rgba(0,0,0,0.7)]">
      <div className="h-10 max-w-[88rem] mx-auto px-4 md:px-8 flex items-center justify-between font-mono text-[11px] text-on-surface-variant">
        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap">
          <span className="text-neon-cyan font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping"></span>
            [SYS_DIAG_OK]
          </span>
          <span className="text-high-volt-white font-bold">PILOT: SAMI KALAMMALLAH</span>
          <span className="text-wireframe-steel">//</span>
          <span className="text-solar-amber">GITHUB: SamX23</span>
          <span className="text-wireframe-steel">//</span>
          <span className="text-solar-amber font-bold">ALIVE SINCE &apos;95 (AGE 31)</span>
          <span className="text-wireframe-steel">//</span>
          <span className="text-rog-crimson">ARENA: DOTA 2 &amp; CS2 READY</span>
          <span className="text-wireframe-steel">//</span>
          <span className="text-neon-cyan">EXP: 7+ YRS SOFT_ENG</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-solar-amber font-bold">RENGOKU FLAME ACTIVE</span>
          <span className="text-neon-cyan">LATENCY: 0.14ms</span>
        </div>
      </div>
    </footer>
  );
}
