"use client";

import { useEffect, useState } from "react";
import { useAuraTheme } from "../../lib/themeContext";

export function CyberCursor() {
  const { crosshairColor, crosshairSize } = useAuraTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

  const sizeMultiplier = crosshairSize === "small" ? 0.75 : crosshairSize === "large" ? 1.3 : 1;

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
          className="rounded-full transition-all duration-150"
          style={{
            width: isClicking ? `${12 * sizeMultiplier}px` : `${6 * sizeMultiplier}px`,
            height: isClicking ? `${12 * sizeMultiplier}px` : `${6 * sizeMultiplier}px`,
            backgroundColor: isClicking ? "#ff0055" : crosshairColor,
            boxShadow: `0 0 10px ${isClicking ? "#ff0055" : crosshairColor}`,
          }}
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
              ? "scale-75 rotate-45 border-rog-crimson shadow-[0_0_15px_#ff0055]"
              : isPointer
              ? "scale-115 rotate-12 border-dashed shadow-[0_0_14px_rgba(255,119,0,0.5)]"
              : "shadow-[0_0_10px_rgba(0,240,255,0.25)]"
          }`}
          style={{
            width: `${32 * sizeMultiplier}px`,
            height: `${32 * sizeMultiplier}px`,
            borderColor: isClicking ? "#ff0055" : crosshairColor,
          }}
        >
          {/* Target Reticle Crosshair Ticks */}
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-1.5"
            style={{ backgroundColor: crosshairColor }}
          />
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0.5 h-1.5"
            style={{ backgroundColor: crosshairColor }}
          />
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-0.5 w-1.5"
            style={{ backgroundColor: crosshairColor }}
          />
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-0.5 w-1.5"
            style={{ backgroundColor: crosshairColor }}
          />

          {isPointer && (
            <span
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[8px] font-bold tracking-widest uppercase"
              style={{ color: crosshairColor }}
            >
              LOCK
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
