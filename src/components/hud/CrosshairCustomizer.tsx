"use client";

import React, { useState, useEffect } from "react";
import { useAuraTheme } from "../../lib/themeContext";

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function CrosshairCustomizer() {
  const { crosshairColor, setCrosshairColor, crosshairSize, setCrosshairSize } = useAuraTheme();
  const [score, setScore] = useState(0);
  const [shotsFired, setShotsFired] = useState(0);
  const [targets, setTargets] = useState<Target[]>([]);

  const colorPalette = [
    { label: "Cyan", hex: "#00f0ff" },
    { label: "Solar Flame", hex: "#ff7700" },
    { label: "Toxic", hex: "#00ff66" },
    { label: "Electric Pink", hex: "#ff007f" },
    { label: "Hyper Yellow", hex: "#ffe600" },
    { label: "Pure White", hex: "#ffffff" },
  ];

  // Spawn new target inside range box
  const spawnTarget = () => {
    const newTarget: Target = {
      id: Date.now() + Math.random(),
      x: Math.floor(Math.random() * 70) + 15, // 15% - 85%
      y: Math.floor(Math.random() * 60) + 20, // 20% - 80%
      size: Math.floor(Math.random() * 12) + 24, // 24px - 36px
    };
    setTargets([newTarget]);
  };

  useEffect(() => {
    spawnTarget();
  }, []);

  const handleShootRange = async () => {
    setShotsFired((prev) => prev + 1);
    const { cyberAudio } = await import("../../lib/audio");
    cyberAudio.playSwitchClick();
  };

  const handleHitTarget = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setScore((prev) => prev + 1);
    setShotsFired((prev) => prev + 1);
    const { cyberAudio } = await import("../../lib/audio");
    cyberAudio.playHudBeep(900, 0.08);
    setTargets((prev) => prev.filter((t) => t.id !== id));
    setTimeout(spawnTarget, 200);
  };

  const accuracy = shotsFired > 0 ? Math.round((score / shotsFired) * 100) : 100;

  return (
    <div className="bg-obsidian-surface border border-wireframe-steel p-6 rounded relative chamfer-card space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-wireframe-steel font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
          <span className="font-bold text-high-volt-white">TACTICAL CROSSHAIR CALIBRATION & TARGET RANGE</span>
        </div>
        <span className="text-solar-amber text-[10px]">[HUD_SYSTEM // LIVE_SYNC]</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controls Column */}
        <div className="space-y-4 font-mono text-xs">
          {/* Color Selector */}
          <div>
            <span className="text-[11px] text-on-surface-variant block mb-2 font-bold">
              RETICLE COLOR FREQUENCY:
            </span>
            <div className="flex flex-wrap gap-2">
              {colorPalette.map((c) => (
                <button
                  key={c.hex}
                  type="button"
                  onClick={() => setCrosshairColor(c.hex)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] transition-all ${
                    crosshairColor.toLowerCase() === c.hex.toLowerCase()
                      ? "border-high-volt-white bg-white/10 font-bold shadow-[0_0_10px_currentColor]"
                      : "border-wireframe-steel hover:border-on-surface text-on-surface-variant"
                  }`}
                  style={{ color: c.hex }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: c.hex, boxShadow: `0 0 6px ${c.hex}` }}
                  />
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <span className="text-[11px] text-on-surface-variant block mb-2 font-bold">
              CROSSHAIR SPREAD / SCALE:
            </span>
            <div className="flex gap-2">
              {(["small", "medium", "large"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setCrosshairSize(s)}
                  className={`px-3 py-1 rounded border text-[11px] uppercase transition-all ${
                    crosshairSize === s
                      ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan font-bold shadow-[0_0_8px_#00f0ff]"
                      : "border-wireframe-steel text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="p-2.5 bg-obsidian-deep border border-wireframe-steel rounded">
              <span className="text-[10px] text-on-surface-variant block">TARGETS HIT</span>
              <span className="text-neon-cyan font-bold text-base">{score}</span>
            </div>
            <div className="p-2.5 bg-obsidian-deep border border-wireframe-steel rounded">
              <span className="text-[10px] text-on-surface-variant block">SHOTS FIRED</span>
              <span className="text-high-volt-white font-bold text-base">{shotsFired}</span>
            </div>
            <div className="p-2.5 bg-obsidian-deep border border-wireframe-steel rounded">
              <span className="text-[10px] text-on-surface-variant block">ACCURACY</span>
              <span className="text-solar-amber font-bold text-base">{accuracy}%</span>
            </div>
          </div>
        </div>

        {/* Live Target Practice Gallery */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] text-on-surface-variant">
            <span>TARGET PRACTICE RANGE // CLICK TARGET TO ENGAGE</span>
            <button
              type="button"
              onClick={() => {
                setScore(0);
                setShotsFired(0);
                spawnTarget();
              }}
              className="text-rog-crimson hover:underline"
            >
              RESET
            </button>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={handleShootRange}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleShootRange();
            }}
            className="relative w-full h-48 bg-obsidian-deep border border-wireframe-steel rounded overflow-hidden cursor-crosshair select-none group"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            {/* Crosshair grid overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
              <div className="w-full h-px bg-neon-cyan"></div>
              <div className="h-full w-px bg-neon-cyan absolute"></div>
            </div>

            {/* Target Bots */}
            {targets.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={(e) => handleHitTarget(e, t.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 animate-pulse transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
                style={{
                  left: `${t.x}%`,
                  top: `${t.y}%`,
                  width: `${t.size}px`,
                  height: `${t.size}px`,
                  borderColor: crosshairColor,
                  backgroundColor: `${crosshairColor}22`,
                  boxShadow: `0 0 16px ${crosshairColor}`,
                }}
                title="Click to destroy target"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: crosshairColor }}
                />
              </button>
            ))}

            <div className="absolute bottom-2 right-2 font-mono text-[9px] text-tactical-slate pointer-events-none">
              CS2 SUB-TICK RANGE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
