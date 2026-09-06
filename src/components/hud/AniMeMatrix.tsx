"use client";

import { useEffect, useRef, useState } from "react";

// 5x5 font bitmaps for S, A, M, I
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

export function AniMeMatrix() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activePattern, setActivePattern] = useState<"name" | "pulse">("name");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let tick = 0;

    const cols = 27;
    const rows = 7;
    const dotSize = 3;
    const gap = 3.5;

    canvas.width = cols * (dotSize + gap);
    canvas.height = rows * (dotSize + gap);

    // Build SAMI grid in 27x7 space
    // Letters start at row index 1
    const grid: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Place S at col 2
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_S[r][c]) grid[r + 1][c + 2] = 1;
      }
    }
    // Place A at col 8
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_A[r][c]) grid[r + 1][c + 8] = 1;
      }
    }
    // Place M at col 14
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_M[r][c]) grid[r + 1][c + 14] = 1;
      }
    }
    // Place I at col 20
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (LETTER_I[r][c]) grid[r + 1][c + 20] = 1;
      }
    }

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const isLetter = grid[r][c] === 1;
          const x = c * (dotSize + gap) + dotSize / 2;
          const y = r * (dotSize + gap) + dotSize / 2;

          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);

          if (isLetter) {
            // Pulse wave across columns
            const wave = Math.sin((tick * 0.08) - (c * 0.3));
            const brightness = 0.7 + 0.3 * wave;
            ctx.fillStyle = `rgba(0, 240, 255, ${brightness.toFixed(2)})`;
            ctx.shadowColor = "#00f0ff";
            ctx.shadowBlur = 6;
          } else {
            // Background idle LED
            const faint = 0.06 + 0.04 * Math.sin(tick * 0.03 + r);
            ctx.fillStyle = `rgba(30, 36, 51, ${faint.toFixed(2)})`;
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [activePattern]);

  return (
    <div className="flex flex-col items-end gap-1 font-mono">
      <div className="flex items-center gap-2 text-[10px] text-on-surface-variant tracking-wider">
        <span className="text-solar-amber">[ AniMe Matrix // ROG LED ]</span>
        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></span>
      </div>
      <div className="p-2 rounded border border-neon-cyan/40 bg-obsidian-deep/90 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
        <canvas ref={canvasRef} className="block cursor-pointer" onClick={() => setActivePattern((p) => (p === "name" ? "pulse" : "name"))} />
      </div>
    </div>
  );
}
