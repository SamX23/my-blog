"use client";

import React, { useState, useRef, useEffect } from "react";

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
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
            <p><span className="text-neon-cyan font-bold">specs</span> — Hardware battlestation and peripheral telemetry</p>
            <p><span className="text-neon-cyan font-bold">games</span> — Competitive arena disciplines and records</p>
            <p><span className="text-neon-cyan font-bold">age</span> — Telemetry origin cycle</p>
            <p><span className="text-neon-cyan font-bold">socials</span> — Direct uplink transmission channels</p>
            <p><span className="text-neon-cyan font-bold">clear</span> — Purge tactical console buffer</p>
          </div>
        );
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
