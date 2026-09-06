"use client";

import React, { useState, useRef, useEffect } from "react";

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
}

function ReactionGame() {
  const [gameState, setGameState] = useState<"idle" | "waiting" | "ready" | "early" | "finished">("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const startTest = async () => {
    setGameState("waiting");
    setReactionTime(null);

    const { cyberAudio } = await import("../../lib/audio");
    cyberAudio.playHudBeep(440, 0.05);

    const delay = Math.floor(Math.random() * 2500) + 1500; // 1.5s - 4s
    timerRef.current = setTimeout(() => {
      startTimeRef.current = performance.now();
      setGameState("ready");
      cyberAudio.playHudBeep(880, 0.1);
    }, delay);
  };

  const handleClick = async () => {
    const { cyberAudio } = await import("../../lib/audio");
    cyberAudio.playSwitchClick();

    if (gameState === "waiting") {
      if (timerRef.current) clearTimeout(timerRef.current);
      setGameState("early");
      cyberAudio.playHudBeep(220, 0.2);
    } else if (gameState === "ready") {
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setReactionTime(elapsed);
      setGameState("finished");
      if (elapsed < 160) {
        cyberAudio.playHudBeep(1046, 0.15);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="p-3 bg-obsidian-surface border border-wireframe-steel rounded space-y-2.5 my-1 font-mono text-xs">
      <div className="flex items-center justify-between text-on-surface-variant text-[11px] pb-1 border-b border-wireframe-steel">
        <span className="text-solar-amber font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rog-crimson animate-ping"></span>
          CS2 REFLEX BENCHMARK // SUB-TICK REACTION TEST
        </span>
        <span className="text-neon-cyan text-[10px]">TARGET: &lt;150MS</span>
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={gameState === "waiting" || gameState === "ready" ? handleClick : undefined}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            if (gameState === "waiting" || gameState === "ready") handleClick();
          }
        }}
        className={`w-full py-8 px-4 rounded border text-center cursor-pointer transition-all select-none ${
          gameState === "idle"
            ? "bg-obsidian-deep border-wireframe-steel text-on-surface hover:border-neon-cyan/50"
            : gameState === "waiting"
            ? "bg-rog-crimson/20 border-rog-crimson text-rog-crimson animate-pulse"
            : gameState === "ready"
            ? "bg-emerald-500/30 border-emerald-400 text-emerald-300 shadow-[0_0_20px_#00ff66]"
            : gameState === "early"
            ? "bg-rog-crimson/30 border-rog-crimson text-rog-crimson"
            : "bg-surface-container border-neon-cyan/40 text-high-volt-white"
        }`}
      >
        {gameState === "idle" && (
          <div className="space-y-1">
            <p className="text-high-volt-white font-bold">CLICK &quot;INITIALIZE&quot; TO BEGIN REFLEX TEST</p>
            <p className="text-on-surface-variant text-[10px]">When display turns GREEN, click as fast as possible.</p>
          </div>
        )}

        {gameState === "waiting" && (
          <div className="space-y-1">
            <p className="text-rog-crimson font-black text-sm tracking-widest">HOLD FIRE... WAIT FOR GREEN...</p>
            <p className="text-on-surface-variant text-[10px]">Pre-firing will trigger a false-start penalty.</p>
          </div>
        )}

        {gameState === "ready" && (
          <div className="space-y-1">
            <p className="text-emerald-300 font-black text-base tracking-widest animate-bounce">
              ⚡ FIRE! CLICK NOW! ⚡
            </p>
            <p className="text-emerald-200 text-[10px]">SUB-TICK TIMING ACTIVE</p>
          </div>
        )}

        {gameState === "early" && (
          <div className="space-y-1">
            <p className="text-rog-crimson font-bold">FALSE START! TRIGGER DISCIPLINE FAILED.</p>
            <p className="text-on-surface-variant text-[10px]">You clicked before the target acquisition flash.</p>
          </div>
        )}

        {gameState === "finished" && reactionTime !== null && (
          <div className="space-y-1">
            <p className="text-2xl font-black text-high-volt-white">
              <span className={reactionTime < 160 ? "text-neon-cyan" : reactionTime < 220 ? "text-solar-amber" : "text-rog-crimson"}>
                {reactionTime} ms
              </span>
            </p>
            <p className="text-xs font-bold text-neon-cyan">
              {reactionTime < 160
                ? "⚡ S1MPLE TIER REFLEX! Elite sub-160ms reaction!"
                : reactionTime < 200
                ? "🎯 PRO FRAGGER REFLEX! Matches competitive CS2 benchmark."
                : reactionTime < 250
                ? "👍 SOLID ESPORTS SPEED. Good sub-tick awareness."
                : "🐢 SLOW REFLEX. Warm up your fingers with Monkeytype!"}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-1">
        <span className="text-[10px] text-on-surface-variant">
          Benchmark: Sami Kalammallah CS2 reaction = &lt;150ms
        </span>
        {gameState !== "waiting" && gameState !== "ready" && (
          <button
            type="button"
            onClick={startTest}
            className="px-3 py-1 bg-neon-cyan text-obsidian-deep font-bold text-[11px] rounded hover:bg-white transition-all shadow-[0_0_10px_rgba(0,240,255,0.4)]"
          >
            {gameState === "idle" ? "INITIALIZE TEST" : "TRY AGAIN"}
          </button>
        )}
      </div>
    </div>
  );
}

export function TacticalTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: "init",
      command: "whoami",
      response: (
        <div className="space-y-1 text-on-surface">
          <p className="text-neon-cyan font-bold">
            Sami Kalammallah // @SamX23: 5+ Years Software Engineer & Hardcore PC Gamer.
          </p>
          <p className="text-on-surface-variant">
            Specializing in performant web architectures, cross-platform apps, GraphQL pipelines, and microservices at Mazecare.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode;

    switch (cmd) {
      case "help":
        response = (
          <div className="text-xs space-y-1 text-on-surface-variant">
            <p><span className="text-neon-cyan font-bold">whoami</span> — Display pilot identity and engineering profile</p>
            <p><span className="text-neon-cyan font-bold">reaction</span> / <span className="text-neon-cyan font-bold">play</span> — Launch CS2 sub-tick reaction & reflex benchmark mini-game</p>
            <p><span className="text-neon-cyan font-bold">specs</span> — Hardware battlestation and peripheral telemetry</p>
            <p><span className="text-neon-cyan font-bold">games</span> — Competitive arena disciplines and records</p>
            <p><span className="text-neon-cyan font-bold">typing</span> — Monkeytype speed telemetry and mechanical stats</p>
            <p><span className="text-neon-cyan font-bold">age</span> — Telemetry origin cycle</p>
            <p><span className="text-neon-cyan font-bold">socials</span> — Direct uplink transmission channels</p>
            <p><span className="text-neon-cyan font-bold">clear</span> — Purge tactical console buffer</p>
          </div>
        );
        break;
      case "reaction":
      case "play":
      case "game":
        response = <ReactionGame />;
        break;
      case "whoami":
        response = (
          <p className="text-high-volt-white">
            <span className="text-neon-cyan font-bold">Sami Kalammallah</span> — Senior Software Engineer (Mazecare, Remote HK). Focus: Next.js, TypeScript, GraphQL, Docker, Cross-Platform Architecture. 5+ Years Production Experience.
          </p>
        );
        break;
      case "specs":
        response = (
          <div className="space-y-0.5 text-xs text-on-surface">
            <p>💻 <span className="text-solar-amber font-bold">MAIN WEAPON:</span> Acer Nitro 5 AN-515-58</p>
            <p>⚡ <span className="text-neon-cyan font-bold">CPU:</span> Intel Core i5-12500H (12 Cores / 16 Threads)</p>
            <p>🎮 <span className="text-rog-crimson font-bold">VGA:</span> NVIDIA GeForce RTX 3050 4GB</p>
            <p>🧠 <span className="text-high-volt-white font-bold">RAM:</span> 2x8GB DDR4 3200MHz</p>
            <p>🖥️ <span className="text-neon-cyan font-bold">MONITOR:</span> Lenovo Legion 24in</p>
            <p>⌨️ <span className="text-solar-amber font-bold">ACCESSORIES:</span> Pressplay Essential75 Rengoku Version, Fantech Maxfit 61, Fantech Vigil MP902, Logitech G102 Prodigy, Logitech G Pro Headphone, dbE DJ80</p>
          </div>
        );
        break;
      case "games":
        response = (
          <div className="space-y-0.5 text-xs text-on-surface">
            <p>⚔️ <span className="text-rog-crimson font-bold">Dota 2:</span> Pos 1 / Pos 2 (Carry / Mid) — 285+ APM</p>
            <p>🎯 <span className="text-solar-amber font-bold">Counter-Strike 2:</span> Entry Fragger & Rifler (&lt;150ms Reaction)</p>
            <p>🌆 <span className="text-neon-cyan font-bold">Cyberpunk 2077:</span> Full Ray Tracing Overdrive</p>
            <p>🗡️ <span className="text-solar-amber font-bold">Elden Ring:</span> Frame-perfect boss dodges</p>
          </div>
        );
        break;
      case "typing":
      case "monkeytype":
        response = (
          <div className="space-y-0.5 text-xs text-on-surface">
            <p>⚡ <span className="text-neon-cyan font-bold">MONKEYTYPE PROFILE:</span> <a href="https://monkeytype.com/profile/samx23" target="_blank" rel="noreferrer" className="underline">monkeytype.com/profile/samx23</a></p>
            <p>🔥 <span className="text-solar-amber font-bold">KEYBOARD:</span> Pressplay Essential75 (Rengoku Flame Edition)</p>
            <p>🎯 <span className="text-high-volt-white font-bold">SPEED:</span> 108+ WPM // Accuracy: 98% // Consistency: 84%</p>
          </div>
        );
        break;
      case "age":
        response = (
          <p className="text-high-volt-white">
            ALIVE SINCE 1995 // Current Cycle: <span className="text-solar-amber font-bold">31 Years Old</span> // 5+ Years Production Engineering.
          </p>
        );
        break;
      case "socials":
        response = (
          <div className="text-xs space-y-1">
            <p>GitHub: <a href="https://github.com/SamX23" target="_blank" rel="noreferrer" className="text-neon-cyan underline">github.com/SamX23</a></p>
            <p>Steam: <a href="https://steamcommunity.com/id/kangaiti" target="_blank" rel="noreferrer" className="text-solar-amber underline">steamcommunity.com/id/kangaiti</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/samikalammallah" target="_blank" rel="noreferrer" className="text-neon-cyan underline">linkedin.com/in/samikalammallah</a></p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = (
          <p className="text-rog-crimson text-xs">
            ERR: Directive &apos;{cmd}&apos; unverified. Type &apos;help&apos; for tactical directive index.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: input,
        response,
      },
    ]);
    setInput("");
  };

  return (
    <div className="w-full bg-obsidian-deep/95 border border-neon-cyan/30 rounded-lg p-4 font-mono text-sm shadow-[0_0_25px_rgba(0,240,255,0.08)]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-wireframe-steel text-xs text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rog-crimson"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-solar-amber"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan"></span>
          <span className="ml-2 font-bold text-high-volt-white">SAMX23_CLI v7.2</span>
        </div>
        <span className="text-[11px] text-neon-cyan">TTY: /dev/pts/sami</span>
      </div>

      {/* Terminal Output */}
      <div className="py-3 max-h-64 overflow-y-auto space-y-3 scrollbar-none text-xs">
        <p className="text-on-surface-variant">
          Type &apos;<span className="text-neon-cyan font-bold">help</span>&apos; for directives index.
        </p>
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-neon-cyan font-bold">
              <span>samx23:~$</span>
              <span className="text-high-volt-white">{item.command}</span>
            </div>
            <div className="pl-4">{item.response}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-wireframe-steel">
        <span className="text-neon-cyan font-bold">samx23:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command (whoami, specs, games, socials, clear)..."
          className="flex-1 bg-transparent border-none outline-none text-high-volt-white text-xs font-mono placeholder:text-tactical-slate"
          autoFocus
        />
        <span className="w-2 h-4 bg-solar-amber animate-pulse"></span>
      </form>
    </div>
  );
}
