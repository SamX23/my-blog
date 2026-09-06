"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useAuraTheme } from "../../lib/themeContext";

// 5x5 font bitmaps
const LETTER_S = [
  [0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0],
];

const LETTER_A = [
  [0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
];

const LETTER_M = [
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
];

const LETTER_I = [
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
];

// ROG Eye Glyph (5x5)
const ROG_EYE = [
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0],
];

type MatrixMode = "sami" | "audio" | "flame" | "matrix" | "draw";

export function AniMeMatrix() {
  const { theme } = useAuraTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<MatrixMode>("sami");
  const [isDrawing, setIsDrawing] = useState(false);
  const userDrawingRef = useRef<boolean[][]>([]);

  // Expanded Panoramic AniMe Matrix dimensions: 44 cols x 13 rows
  const cols = 44;
  const rows = 13;
  const dotSize = 3;
  const gap = 3.5;

  useEffect(() => {
    userDrawingRef.current = Array.from({ length: rows }, () => Array(cols).fill(false));
  }, [rows, cols]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (mode !== "draw") return;
    setIsDrawing(true);
    paintDot(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || mode !== "draw") return;
    paintDot(e);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  const paintDot = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const c = Math.floor(x / (dotSize + gap));
    const r = Math.floor(y / (dotSize + gap));

    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      userDrawingRef.current[r][c] = true;
    }
  };

  const clearCanvasDrawing = () => {
    userDrawingRef.current = Array.from({ length: rows }, () => Array(cols).fill(false));
  };

  // Build centered panoramic SAMI + ROG letter grid
  const buildSamiGrid = useCallback(() => {
    const grid: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));
    const startRow = 4; // Center vertically in 13 rows

    // S at col 7
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_S[r][c]) grid[startRow + r][c + 7] = 1;
      }
    }
    // A at col 14
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_A[r][c]) grid[startRow + r][c + 14] = 1;
      }
    }
    // M at col 21
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_M[r][c]) grid[startRow + r][c + 21] = 1;
      }
    }
    // I at col 28
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_I[r][c]) grid[startRow + r][c + 28] = 1;
      }
    }
    // ROG Eye at col 35
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (ROG_EYE[r][c]) grid[startRow + r][c + 35] = 2;
      }
    }

    return grid;
  }, [cols, rows]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let tick = 0;

    canvas.width = cols * (dotSize + gap);
    canvas.height = rows * (dotSize + gap);

    const samiGrid = buildSamiGrid();
    const rainDrops = Array.from({ length: cols }, () => Math.floor(Math.random() * -rows));

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const primaryNeon = theme === "cyan" ? "#00f0ff" : theme === "flame" ? "#ff7700" : "#00ff66";
      const secondaryNeon = theme === "cyan" ? "#ff0055" : theme === "flame" ? "#ff0055" : "#00f0ff";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * (dotSize + gap) + dotSize / 2;
          const y = r * (dotSize + gap) + dotSize / 2;

          let isLit = false;
          let color = "rgba(30, 36, 51, 0.08)";
          let shadow = "transparent";

          if (mode === "sami") {
            const cell = samiGrid[r][c];
            if (cell === 1) {
              isLit = true;
              const wave = Math.sin(tick * 0.07 - c * 0.2);
              const bright = 0.75 + 0.25 * wave;
              color = primaryNeon;
              ctx.globalAlpha = bright;
              shadow = primaryNeon;
            } else if (cell === 2) {
              isLit = true;
              const wave = Math.cos(tick * 0.1);
              const bright = 0.8 + 0.2 * wave;
              color = secondaryNeon;
              ctx.globalAlpha = bright;
              shadow = secondaryNeon;
            }
          } else if (mode === "audio") {
            const height = Math.floor(
              (Math.sin(tick * 0.09 + c * 0.35) * 0.5 + 0.5) * rows
            );
            if (r >= rows - height) {
              isLit = true;
              const hueColor = r < 4 ? "#ff0055" : r < 8 ? "#ff7700" : primaryNeon;
              color = hueColor;
              shadow = hueColor;
            }
          } else if (mode === "flame") {
            const flameIntensity = Math.sin(tick * 0.12 + c * 0.3 + r * 0.45);
            if (flameIntensity > 0.1) {
              isLit = true;
              color = flameIntensity > 0.55 ? "#ff0055" : "#ff7700";
              shadow = color;
            }
          } else if (mode === "matrix") {
            if (rainDrops[c] === r) {
              isLit = true;
              color = primaryNeon;
              shadow = primaryNeon;
            } else if (rainDrops[c] - 1 === r || rainDrops[c] - 2 === r) {
              isLit = true;
              color = primaryNeon;
              ctx.globalAlpha = 0.45;
            }
          } else if (mode === "draw") {
            if (userDrawingRef.current[r]?.[c]) {
              isLit = true;
              color = primaryNeon;
              shadow = primaryNeon;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);

          if (isLit) {
            ctx.fillStyle = color;
            ctx.shadowColor = shadow;
            ctx.shadowBlur = 7;
          } else {
            ctx.globalAlpha = 1;
            const idleWave = 0.05 + 0.03 * Math.sin(tick * 0.02 + r + c * 0.1);
            ctx.fillStyle = `rgba(30, 36, 51, ${idleWave.toFixed(2)})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      if (mode === "matrix" && tick % 2 === 0) {
        for (let i = 0; i < cols; i++) {
          rainDrops[i]++;
          if (rainDrops[i] > rows + 4) {
            rainDrops[i] = Math.floor(Math.random() * -8);
          }
        }
      }

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animFrame);
  }, [mode, buildSamiGrid, theme]);

  return (
    <div className="flex flex-col items-end gap-1.5 font-mono select-none">
      <div className="flex flex-wrap items-center justify-between w-full gap-2 text-[10px] text-on-surface-variant tracking-wider">
        <span className="text-solar-amber font-bold">[ AniMe Matrix // PANORAMIC ROG LED ]</span>
        <div className="flex items-center gap-1 bg-obsidian-deep p-0.5 rounded border border-wireframe-steel text-[9px]">
          <button
            type="button"
            onClick={() => setMode("sami")}
            className={`px-2 py-0.5 rounded transition-all ${
              mode === "sami" ? "bg-neon-cyan/20 text-neon-cyan font-bold border border-neon-cyan/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            SAMI
          </button>
          <button
            type="button"
            onClick={() => setMode("audio")}
            className={`px-2 py-0.5 rounded transition-all ${
              mode === "audio" ? "bg-rog-crimson/20 text-rog-crimson font-bold border border-rog-crimson/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            AUDIO
          </button>
          <button
            type="button"
            onClick={() => setMode("flame")}
            className={`px-2 py-0.5 rounded transition-all ${
              mode === "flame" ? "bg-solar-amber/20 text-solar-amber font-bold border border-solar-amber/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            FLAME 🔥
          </button>
          <button
            type="button"
            onClick={() => setMode("matrix")}
            className={`px-2 py-0.5 rounded transition-all ${
              mode === "matrix" ? "bg-neon-cyan/20 text-neon-cyan font-bold border border-neon-cyan/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            RAIN
          </button>
          <button
            type="button"
            onClick={() => setMode("draw")}
            className={`px-2 py-0.5 rounded transition-all ${
              mode === "draw" ? "bg-neon-cyan text-obsidian-deep font-bold" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            DRAW ✎
          </button>
        </div>
      </div>

      <div className="relative p-2.5 rounded border border-neon-cyan/40 bg-obsidian-deep/95 shadow-[0_0_24px_rgba(0,240,255,0.2)] max-w-full overflow-x-auto">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`block ${mode === "draw" ? "cursor-crosshair" : "cursor-pointer"}`}
          title={mode === "draw" ? "Click and drag to draw on LED matrix!" : "Click canvas or modes to switch preset"}
          onClick={() => {
            if (mode === "sami") setMode("audio");
            else if (mode === "audio") setMode("flame");
            else if (mode === "flame") setMode("matrix");
            else if (mode === "matrix") setMode("sami");
          }}
        />

        {mode === "draw" && (
          <button
            type="button"
            onClick={clearCanvasDrawing}
            className="absolute bottom-2 right-2 text-[9px] font-mono text-rog-crimson bg-obsidian-deep px-1.5 py-0.5 border border-rog-crimson/40 hover:bg-rog-crimson/10 rounded"
          >
            CLEAR
          </button>
        )}
      </div>

      {mode === "draw" && (
        <span className="text-[9px] font-mono text-neon-cyan animate-pulse">
          DRAW MODE: Click &amp; drag across 44x13 pixels to paint LED canvas
        </span>
      )}
    </div>
  );
}
