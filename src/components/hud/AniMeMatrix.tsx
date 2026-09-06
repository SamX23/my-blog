"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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

// ROG Eye Glyph (simplified 5x5)
const ROG_EYE = [
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0],
];

type MatrixMode = "sami" | "audio" | "flame" | "matrix" | "draw";

export function AniMeMatrix() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<MatrixMode>("sami");
  const [isDrawing, setIsDrawing] = useState(false);
  const userDrawingRef = useRef<boolean[][]>([]);

  const cols = 29;
  const rows = 9;
  const dotSize = 3;
  const gap = 3.5;

  // Initialize custom user drawing grid
  useEffect(() => {
    userDrawingRef.current = Array.from({ length: rows }, () => Array(cols).fill(false));
  }, []);

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

  // Build static SAMI letter grid
  const buildSamiGrid = useCallback(() => {
    const grid: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));
    // Offset letters by row index 2
    const startRow = 2;
    // S at col 2
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_S[r][c]) grid[startRow + r][c + 2] = 1;
      }
    }
    // A at col 8
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_A[r][c]) grid[startRow + r][c + 8] = 1;
      }
    }
    // M at col 14
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_M[r][c]) grid[startRow + r][c + 14] = 1;
      }
    }
    // I at col 20
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_I[r][c]) grid[startRow + r][c + 20] = 1;
      }
    }
    // ROG Eye accent at col 24
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (ROG_EYE[r][c]) grid[startRow + r][c + 24] = 2;
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

    // Matrix rain particles
    const rainDrops = Array.from({ length: cols }, () => Math.floor(Math.random() * -rows));

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
              const wave = Math.sin(tick * 0.08 - c * 0.25);
              const bright = 0.7 + 0.3 * wave;
              color = `rgba(0, 240, 255, ${bright.toFixed(2)})`;
              shadow = "#00f0ff";
            } else if (cell === 2) {
              isLit = true;
              const wave = Math.cos(tick * 0.1);
              const bright = 0.8 + 0.2 * wave;
              color = `rgba(255, 0, 85, ${bright.toFixed(2)})`;
              shadow = "#ff0055";
            }
          } else if (mode === "audio") {
            // Audio visualizer equalizer bars
            const height = Math.floor(
              (Math.sin(tick * 0.1 + c * 0.5) * 0.5 + 0.5) * rows
            );
            if (r >= rows - height) {
              isLit = true;
              const hueColor = r < 3 ? "#ff0055" : r < 6 ? "#ff7700" : "#00f0ff";
              color = hueColor;
              shadow = hueColor;
            }
          } else if (mode === "flame") {
            // Flame breathing wave (Rengoku mode)
            const flameIntensity = Math.sin(tick * 0.15 + c * 0.4 + r * 0.6);
            if (flameIntensity > 0.15) {
              isLit = true;
              color = flameIntensity > 0.6 ? "#ff0055" : "#ff7700";
              shadow = color;
            }
          } else if (mode === "matrix") {
            // Matrix digital code rain
            if (rainDrops[c] === r) {
              isLit = true;
              color = "#00f0ff";
              shadow = "#00f0ff";
            } else if (rainDrops[c] - 1 === r || rainDrops[c] - 2 === r) {
              isLit = true;
              color = "rgba(0, 240, 255, 0.4)";
            }
          } else if (mode === "draw") {
            // Interactive user draw mode
            if (userDrawingRef.current[r]?.[c]) {
              isLit = true;
              color = "#00f0ff";
              shadow = "#00f0ff";
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);

          if (isLit) {
            ctx.fillStyle = color;
            ctx.shadowColor = shadow;
            ctx.shadowBlur = 6;
          } else {
            // Idle backdrop dot
            const idleWave = 0.05 + 0.03 * Math.sin(tick * 0.02 + r + c * 0.1);
            ctx.fillStyle = `rgba(30, 36, 51, ${idleWave.toFixed(2)})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      // Update rain drops
      if (mode === "matrix" && tick % 2 === 0) {
        for (let i = 0; i < cols; i++) {
          rainDrops[i]++;
          if (rainDrops[i] > rows + 4) {
            rainDrops[i] = Math.floor(Math.random() * -6);
          }
        }
      }

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [mode, buildSamiGrid]);

  return (
    <div className="flex flex-col items-end gap-1.5 font-mono select-none">
      {/* HUD Bar with Interactive Mode Controls */}
      <div className="flex items-center gap-2 text-[10px] text-on-surface-variant tracking-wider">
        <span className="text-solar-amber font-bold">[ AniMe Matrix // ROG LED ]</span>
        <div className="flex items-center gap-1 bg-obsidian-deep p-0.5 rounded border border-wireframe-steel text-[9px]">
          <button
            type="button"
            onClick={() => setMode("sami")}
            className={`px-1.5 py-0.5 rounded transition-all ${
              mode === "sami" ? "bg-neon-cyan/20 text-neon-cyan font-bold border border-neon-cyan/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            SAMI
          </button>
          <button
            type="button"
            onClick={() => setMode("audio")}
            className={`px-1.5 py-0.5 rounded transition-all ${
              mode === "audio" ? "bg-rog-crimson/20 text-rog-crimson font-bold border border-rog-crimson/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            AUDIO
          </button>
          <button
            type="button"
            onClick={() => setMode("flame")}
            className={`px-1.5 py-0.5 rounded transition-all ${
              mode === "flame" ? "bg-solar-amber/20 text-solar-amber font-bold border border-solar-amber/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            FLAME 🔥
          </button>
          <button
            type="button"
            onClick={() => setMode("matrix")}
            className={`px-1.5 py-0.5 rounded transition-all ${
              mode === "matrix" ? "bg-neon-cyan/20 text-neon-cyan font-bold border border-neon-cyan/40" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            RAIN
          </button>
          <button
            type="button"
            onClick={() => setMode("draw")}
            className={`px-1.5 py-0.5 rounded transition-all ${
              mode === "draw" ? "bg-neon-cyan text-obsidian-deep font-bold" : "text-tactical-slate hover:text-on-surface"
            }`}
          >
            DRAW ✎
          </button>
        </div>
      </div>

      {/* Canvas Display with glow & draw handlers */}
      <div className="relative p-2.5 rounded border border-neon-cyan/40 bg-obsidian-deep/95 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`block ${mode === "draw" ? "cursor-crosshair" : "cursor-pointer"}`}
          title={mode === "draw" ? "Click and drag to draw on LED matrix!" : "Click modes above to switch animated presets"}
          onClick={() => {
            if (mode === "sami") setMode("audio");
            else if (mode === "audio") setMode("flame");
            else if (mode === "flame") setMode("matrix");
            else if (mode === "matrix") setMode("sami");
          }}
        />

        {/* Clear button when in Draw mode */}
        {mode === "draw" && (
          <button
            type="button"
            onClick={clearCanvasDrawing}
            className="absolute bottom-1.5 right-2 text-[9px] font-mono text-rog-crimson bg-obsidian-deep px-1.5 py-0.5 border border-rog-crimson/40 hover:bg-rog-crimson/10 rounded"
          >
            CLEAR
          </button>
        )}
      </div>
      {mode === "draw" && (
        <span className="text-[9px] font-mono text-neon-cyan animate-pulse">
          DRAW MODE: Click &amp; drag across pixels to paint LED
        </span>
      )}
    </div>
  );
}
