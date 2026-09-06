"use client";

import { useEffect, useState } from "react";

export function CyberCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest("a, button, input, [role='button'], canvas, .cursor-pointer");
        setIsPointer(!!clickable);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Smooth trailing reticle ring animation
  useEffect(() => {
    let animFrame: number;

    const follow = () => {
      setTrailingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animFrame = requestAnimationFrame(follow);
    };

    animFrame = requestAnimationFrame(follow);

    return () => cancelAnimationFrame(animFrame);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Core Crosshair Point */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isClicking
              ? "w-3 h-3 bg-rog-crimson shadow-[0_0_12px_#ff0055]"
              : isPointer
              ? "w-2 h-2 bg-solar-amber shadow-[0_0_10px_#ff7700]"
              : "w-1.5 h-1.5 bg-neon-cyan shadow-[0_0_8px_#00f0ff]"
          }`}
        />
      </div>

      {/* Trailing Cybernetic Reticle Target Ring */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        <div
          className={`relative rounded-full border transition-all duration-200 ${
            isClicking
              ? "w-7 h-7 border-rog-crimson scale-75 rotate-45 shadow-[0_0_15px_rgba(255,0,85,0.6)]"
              : isPointer
              ? "w-10 h-10 border-solar-amber/80 scale-110 rotate-12 shadow-[0_0_14px_rgba(255,119,0,0.5)] border-dashed"
              : "w-8 h-8 border-neon-cyan/50 shadow-[0_0_10px_rgba(0,240,255,0.25)]"
          }`}
        >
          {/* Target Reticle Crosshair Ticks */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-neon-cyan/80"></span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0.5 h-1.5 bg-neon-cyan/80"></span>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-0.5 w-1.5 bg-neon-cyan/80"></span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-0.5 w-1.5 bg-neon-cyan/80"></span>

          {isPointer && (
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[8px] text-solar-amber font-bold tracking-widest uppercase">
              LOCK
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
