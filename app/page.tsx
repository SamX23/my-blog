import React from "react";
import Image from "next/image";
import { Navigation } from "../src/components/sections/Navigation";
import { FooterDiagnostics } from "../src/components/sections/FooterDiagnostics";
import { AniMeMatrix } from "../src/components/hud/AniMeMatrix";
import { TacticalTerminal } from "../src/components/terminal/TacticalTerminal";
import { fetchGitHubActivity } from "../src/lib/github";
import { fetchSteamProfile } from "../src/lib/steam";
import { fetchMonkeytypeStats } from "../src/lib/monkeytype";

export const revalidate = 3600;

export default async function PortfolioPage() {
  const githubData = await fetchGitHubActivity("SamX23");
  const steamData = await fetchSteamProfile();
  const monkeytypeData = await fetchMonkeytypeStats();

  return (
    <div className="min-h-screen bg-obsidian-deep text-on-surface font-sans selection:bg-neon-cyan selection:text-obsidian-deep relative overflow-x-hidden pb-16">
      <Navigation />

      <main className="w-full pt-20">
        {/* TOP HUD STATUS BAR */}
        <div className="w-full bg-surface-container-lowest border-b border-neon-cyan/20 py-2 px-4 md:px-8 shadow-[inset_0_-1px_6px_rgba(0,240,255,0.05)]">
          <div className="max-w-[88rem] mx-auto flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-on-surface-variant">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-neon-cyan font-bold">
                <span className="inline-block w-2 h-2 bg-neon-cyan animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
                PILOT: SAMI KALAMMALLAH // RUNTIME_ACTIVE
              </span>
              <span className="hidden sm:inline text-solar-amber font-mono">CALLSIGN: SamX23</span>
              <span className="text-wireframe-steel">//</span>
              <span className="text-high-volt-white">CLASS: 5+ YRS SYSTEM ARCHITECT // PC GAMER</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-rog-crimson font-bold">DISCIPLINE: DOTA 2 &amp; CS2 COMPETITIVE</span>
              <span className="text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 border border-neon-cyan/30">
                ORIGIN: 1995 (31 YRS)
              </span>
            </div>
          </div>
        </div>

        {/* [01] TERMINAL HERO */}
        <section id="terminal-hero" className="w-full max-w-[88rem] mx-auto px-4 md:px-8 py-10 md:py-16">
          {/* Top Telemetry strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-wireframe-steel mb-8">
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center p-1 rounded border border-neon-cyan/40 bg-surface-container shadow-[0_0_16px_rgba(0,240,255,0.25)]">
                <Image
                  src="/images/profile.jpg"
                  alt="Sami Kalammallah"
                  width={56}
                  height={56}
                  className="rounded object-cover w-14 h-14"
                  unoptimized
                />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-solar-amber ring-2 ring-obsidian-deep animate-pulse shadow-[0_0_8px_#ff7700]"></span>
              </div>
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-neon-cyan mb-1.5">
                  <span>PROTOCOL_ENGAGED // SAMI KALAMMALLAH [SamX23]</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-solar-amber bg-solar-amber/10 px-2 py-0.5 border border-solar-amber/30">
                    5+ YEARS PRODUCTION SOFTWARE
                  </span>
                  <span className="text-rog-crimson bg-rog-crimson/10 px-2 py-0.5 border border-rog-crimson/30">
                    ELITE PC GAMER
                  </span>
                  <span className="text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 border border-neon-cyan/30">
                    ORIGIN: 1995 (31 YRS)
                  </span>
                </div>
              </div>
            </div>
            <AniMeMatrix />
          </div>

          {/* Hero Main Headline */}
          <div className="space-y-6">
            <div className="inline-block font-mono text-xs text-solar-amber tracking-wider">
              // HUD_MILLIDECIMAL PRECISION
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-high-volt-white uppercase leading-none">
              ARCHITECTING RELIABLE SYSTEMS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-solar-amber to-rog-crimson">
                CONQUERING THE ARENA.
              </span>
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-on-surface leading-relaxed">
              Senior Software Engineer (Age 31, born 1995) with over{" "}
              <span className="text-neon-cyan font-bold">5+ years of hands-on production engineering</span> designing
              fault-tolerant backends, high-throughput microservices, clinical workflows, and distributed data pipelines.
              Concurrently a hardcore PC gamer dominating competitive tactical lobbies across{" "}
              <span className="text-rog-crimson font-bold">Dota 2</span> and{" "}
              <span className="text-solar-amber font-bold">Counter-Strike 2</span>, alongside deep technical immersion in{" "}
              <span className="text-neon-cyan font-bold">Cyberpunk 2077</span>,{" "}
              <span className="text-solar-amber font-bold">Elden Ring</span>, and{" "}
              <span className="text-rog-crimson font-bold">Forza Horizon</span>.
            </p>

            {/* Dual Spec Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {/* Software Engineering Core */}
              <div className="bg-obsidian-surface border border-neon-cyan/40 p-5 rounded relative chamfer-card shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <div className="flex items-center justify-between font-mono text-xs text-neon-cyan pb-3 border-b border-wireframe-steel">
                  <span className="font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                    SOFTWARE_ENGINEERING_CORE
                  </span>
                  <span className="text-[10px] text-on-surface-variant">[DEV_SPEC // 5+ YRS]</span>
                </div>
                <div className="grid grid-cols-2 gap-3 py-3 font-mono text-xs">
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">TECH STACK</span>
                    <span className="text-high-volt-white font-bold">Next.js, TypeScript, GraphQL, Docker</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">SYSTEM ARCHITECTURE</span>
                    <span className="text-high-volt-white font-bold">Microservices, Distributed Data</span>
                  </div>
                </div>
                <div className="bg-obsidian-deep p-3 border border-wireframe-steel text-[11px] font-mono space-y-1">
                  <p className="text-neon-cyan">[DEPLOY] Production Mazecare HealthTech System // Healthy</p>
                  <p className="text-solar-amber">[GRAPHQL] Schema orchestration &amp; cross-platform release pipeline</p>
                  <p className="text-on-surface-variant">[VERIFIED] 5+ Years engineering resilience: 99.99% uptime target</p>
                </div>
              </div>

              {/* Hardcore PC Gaming Spec */}
              <div className="bg-obsidian-surface border border-rog-crimson/40 p-5 rounded relative chamfer-card shadow-[0_0_15px_rgba(255,0,85,0.1)]">
                <div className="flex items-center justify-between font-mono text-xs text-rog-crimson pb-3 border-b border-wireframe-steel">
                  <span className="font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rog-crimson animate-pulse"></span>
                    HARDCORE_PC_GAMING_SPEC
                  </span>
                  <span className="text-[10px] text-on-surface-variant">[BATTLE_SPEC // COMPETITIVE]</span>
                </div>
                <div className="grid grid-cols-2 gap-3 py-3 font-mono text-xs">
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">PRIMARY ESPORTS</span>
                    <span className="text-high-volt-white font-bold">Dota 2 &amp; Counter-Strike 2</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">DISCIPLINE APM</span>
                    <span className="text-high-volt-white font-bold">285+ Pos 1/2 Carry APM</span>
                  </div>
                </div>
                <div className="bg-obsidian-deep p-3 border border-wireframe-steel text-[11px] font-mono space-y-1">
                  <p className="text-rog-crimson">[CS2] &lt;150ms Reaction Time // Headshot Focus 64.8%</p>
                  <p className="text-solar-amber">[RIG] Acer Nitro 5 Gaming Laptop + Demon Slayer Rengoku Mech</p>
                  <p className="text-neon-cyan">[IMMERSION] Cyberpunk 2077 Ray Tracing &amp; Elden Ring Boss Timing</p>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#repo-projects"
                className="px-5 py-2.5 bg-neon-cyan text-obsidian-deep font-bold text-xs uppercase font-mono chamfer-btn hover:bg-white transition-all shadow-[0_0_16px_rgba(0,240,255,0.4)]"
              >
                [ VIEW_CODE_REPOSITORIES ]
              </a>
              <a
                href="#battlestation"
                className="px-5 py-2.5 bg-obsidian-surface border border-solar-amber text-solar-amber font-bold text-xs uppercase font-mono chamfer-btn hover:bg-solar-amber/10 transition-all shadow-[0_0_12px_rgba(255,119,0,0.2)]"
              >
                [ GAMING_ARENA_TELEMETRY ]
              </a>
              <a
                href="#hardware-specs"
                className="px-5 py-2.5 bg-obsidian-surface border border-rog-crimson text-rog-crimson font-bold text-xs uppercase font-mono chamfer-btn hover:bg-rog-crimson/10 transition-all shadow-[0_0_12px_rgba(255,0,85,0.2)]"
              >
                [ ACER NITRO 5 RIG SPECS ]
              </a>
            </div>
          </div>
        </section>

        {/* [02] REPOSITORIES & ENGINEERING MATRIX */}
        <section id="repo-projects" className="w-full max-w-[88rem] mx-auto px-4 md:px-8 py-12 border-t border-wireframe-steel">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-wireframe-steel">
            <div>
              <span className="font-mono text-xs text-solar-amber block">// SUBSYSTEM_02 // 5+ YEARS SOFTWARE ENGINEERING</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-high-volt-white uppercase">
                [02] REPOSITORIES // CORE ENGINEERING BUILDS
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
              <span className="text-on-surface-variant">GITHUB: <span className="text-neon-cyan">@SamX23</span></span>
              <span className="text-on-surface-variant">EXPERIENCE: <span className="text-solar-amber">5+ YRS</span></span>
              <span className="text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 border border-neon-cyan/30">STATUS: PRODUCTION_TESTED</span>
            </div>
          </div>

          {/* Project Dossier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-obsidian-surface border border-wireframe-steel hover:border-neon-cyan/50 transition-all p-5 rounded relative group">
              <div className="flex items-center justify-between font-mono text-[11px] pb-2 mb-3 border-b border-wireframe-steel">
                <span className="text-neon-cyan">PROJ_01 // MAZECARE_CORE</span>
                <span className="text-on-surface-variant">[HEALTH_TECH]</span>
              </div>
              <h3 className="font-bold text-high-volt-white text-base mb-2">
                Cross-Platform Clinical Workflows &amp; Telehealth
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Mission-critical enterprise healthcare applications, interactive questionnaire builders, and real-time medical dashboards integrated with microservices and GraphQL.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-neon-cyan">Next.js</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-solar-amber">TypeScript</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-high-volt-white">GraphQL</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-on-surface-variant">Docker</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-obsidian-surface border border-wireframe-steel hover:border-solar-amber/50 transition-all p-5 rounded relative group">
              <div className="flex items-center justify-between font-mono text-[11px] pb-2 mb-3 border-b border-wireframe-steel">
                <span className="text-solar-amber">PROJ_02 // UTAS_ECOMMERCE</span>
                <span className="text-on-surface-variant">[SCALE_PROD]</span>
              </div>
              <h3 className="font-bold text-high-volt-white text-base mb-2">
                Creator Commerce &amp; High-Converting Checkouts
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Frontend architecture and conversion optimization for creator economy platform, handling high-volume transaction funnels and modular design systems.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-solar-amber">Vue 3</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-neon-cyan">Nuxt.js</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-high-volt-white">Tailwind</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-on-surface-variant">CI/CD</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-obsidian-surface border border-wireframe-steel hover:border-rog-crimson/50 transition-all p-5 rounded relative group">
              <div className="flex items-center justify-between font-mono text-[11px] pb-2 mb-3 border-b border-wireframe-steel">
                <span className="text-rog-crimson">PROJ_03 // CYBER_PORTFOLIO</span>
                <span className="text-on-surface-variant">[ROG_BATTLE]</span>
              </div>
              <h3 className="font-bold text-high-volt-white text-base mb-2">
                Next.js 16 + Bun ROG Cyberpunk Battlestation
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Aggressive tactical HUD portfolio with AniMe Matrix canvas, live GitHub activity stream, interactive CLI terminal emulator, and Steam discipline telemetry.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-neon-cyan">Next.js 16</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-solar-amber">Bun</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-rog-crimson">Tailwind v4</span>
                <span className="px-2 py-0.5 bg-obsidian-deep border border-wireframe-steel text-high-volt-white">Oxlint</span>
              </div>
            </div>
          </div>

          {/* GitHub Activity & Commit Cadence Stream */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Core Matrix */}
            <div className="bg-obsidian-surface border border-wireframe-steel p-5 rounded space-y-4">
              <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-wireframe-steel">
                <span className="font-bold text-high-volt-white">5+ YEARS ENGINEERING MATRIX</span>
                <span className="text-neon-cyan">[SENIOR_LEVEL]</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-on-surface-variant block mb-1">LANGUAGES &amp; RUNTIMES</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">TypeScript</span>
                    <span className="px-2 py-0.5 bg-obsidian-deep text-high-volt-white border border-wireframe-steel">JavaScript</span>
                    <span className="px-2 py-0.5 bg-solar-amber/10 text-solar-amber border border-solar-amber/30">Node.js / Bun</span>
                    <span className="px-2 py-0.5 bg-obsidian-deep text-high-volt-white border border-wireframe-steel">SQL / GraphQL</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant block mb-1">ARCHITECTURE &amp; CLOUD INFRASTRUCTURE</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-obsidian-deep text-high-volt-white border border-wireframe-steel">Docker Containers</span>
                    <span className="px-2 py-0.5 bg-obsidian-deep text-high-volt-white border border-wireframe-steel">Jenkins CI/CD</span>
                    <span className="px-2 py-0.5 bg-obsidian-deep text-high-volt-white border border-wireframe-steel">Microservices</span>
                    <span className="px-2 py-0.5 bg-obsidian-deep text-high-volt-white border border-wireframe-steel">Firebase Suite</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live GitHub Stream */}
            <div className="lg:col-span-2 bg-obsidian-surface border border-wireframe-steel p-5 rounded space-y-4">
              <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-wireframe-steel">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-high-volt-white">GITHUB.COM/SAMX23 STREAM</span>
                  <span className="text-solar-amber">[{githubData.totalContributions.toLocaleString()} CONTRIBUTIONS]</span>
                </div>
                <span className="text-neon-cyan font-mono text-[10px]">LIVE CADENCE</span>
              </div>

              {/* Dynamic Contribution Heatmap Grid */}
              <div className="overflow-x-auto py-2">
                <div className="flex gap-1 min-w-[500px]">
                  {githubData.weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.days.map((day, dIdx) => {
                        let bg = "bg-wireframe-steel/40";
                        if (day.count > 0 && day.count < 3) bg = "bg-neon-cyan/40";
                        else if (day.count >= 3 && day.count < 6) bg = "bg-neon-cyan/75";
                        else if (day.count >= 6 && day.count < 10) bg = "bg-solar-amber";
                        else if (day.count >= 10) bg = "bg-rog-crimson shadow-[0_0_6px_#ff0055]";

                        return (
                          <div
                            key={dIdx}
                            title={`${day.date}: ${day.count} commits`}
                            className={`w-2.5 h-2.5 rounded-[1px] transition-all hover:scale-125 ${bg}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Public Push Events */}
              <div className="border-t border-wireframe-steel pt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-on-surface-variant">
                <span>AUTHOR: <strong className="text-high-volt-white">Sami Kalammallah</strong></span>
                <span className="text-neon-cyan">git push origin main [OK]</span>
              </div>
            </div>
          </div>
        </section>

        {/* [03] ARENA & HARDCORE GAMING DISCIPLINE */}
        <section id="battlestation" className="w-full max-w-[88rem] mx-auto px-4 md:px-8 py-12 border-t border-wireframe-steel">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-wireframe-steel">
            <div>
              <span className="font-mono text-xs text-rog-crimson block">// SUBSYSTEM_03 // SAMI&apos;S COMBAT ROSTER &amp; ARENA TELEMETRY</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-high-volt-white uppercase">
                [03] ARENA // HARDCORE PC GAMING DISCIPLINE
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-solar-amber">
              <span className="w-2 h-2 rounded-full bg-rog-crimson animate-ping"></span>
              <span>STEAM: {steamData.personaName} (LVL {steamData.level})</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Dota 2 Card */}
            <div className="bg-obsidian-surface border border-rog-crimson/30 p-5 rounded relative chamfer-card">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-wireframe-steel">
                <span className="text-rog-crimson font-bold">TACTICAL TITLE // 01: DOTA 2</span>
                <span className="text-solar-amber bg-solar-amber/10 px-2 py-0.5 border border-solar-amber/30 text-[10px]">
                  POS 1 / CARRY
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4 font-mono text-xs">
                <div>
                  <span className="text-on-surface-variant text-[10px] block">COMBAT APM</span>
                  <span className="text-high-volt-white font-bold text-lg">285+ APM</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[10px] block">ROLE PREF</span>
                  <span className="text-neon-cyan font-bold text-base">Carry / Mid</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[10px] block">SYNERGY</span>
                  <span className="text-solar-amber font-bold text-base">Teamfight</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant font-mono">
                Micro-efficiency, tactical positioning under tempo, drafting, and high-concurrency execution.
              </p>
            </div>

            {/* CS2 Card */}
            <div className="bg-obsidian-surface border border-solar-amber/30 p-5 rounded relative chamfer-card">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-wireframe-steel">
                <span className="text-solar-amber font-bold">TACTICAL TITLE // 02: CS2</span>
                <span className="text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 border border-neon-cyan/30 text-[10px]">
                  ENTRY &amp; RIFLE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4 font-mono text-xs">
                <div>
                  <span className="text-on-surface-variant text-[10px] block">HEADSHOT</span>
                  <span className="text-high-volt-white font-bold text-lg">64.8%</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[10px] block">REACTION</span>
                  <span className="text-rog-crimson font-bold text-base">&lt;150ms</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[10px] block">UTILITY</span>
                  <span className="text-neon-cyan font-bold text-base">Lineups</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant font-mono">
                Sub-tick counter-strafing, first-bullet headshot precision, and crosshair clutch discipline.
              </p>
            </div>

            {/* Monkeytype Speed Discipline Card */}
            <div className="bg-obsidian-surface border border-neon-cyan/40 p-5 rounded relative chamfer-card shadow-[0_0_12px_rgba(0,240,255,0.08)]">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-wireframe-steel">
                <span className="text-neon-cyan font-bold">TACTICAL TITLE // 03: MONKEYTYPE</span>
                <a
                  href={monkeytypeData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-solar-amber bg-solar-amber/10 px-2 py-0.5 border border-solar-amber/30 text-[10px] hover:bg-solar-amber/20 transition-colors"
                >
                  SPEED: {monkeytypeData.wpm} WPM ↗
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4 font-mono text-xs">
                <div>
                  <span className="text-on-surface-variant text-[10px] block">PEAK SPEED</span>
                  <span className="text-neon-cyan font-bold text-lg">{monkeytypeData.wpm} WPM</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[10px] block">ACCURACY</span>
                  <span className="text-high-volt-white font-bold text-base">{monkeytypeData.accuracy}%</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[10px] block">CONSISTENCY</span>
                  <span className="text-solar-amber font-bold text-base">{monkeytypeData.consistency}%</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant font-mono flex items-center justify-between">
                <span>Rengoku Flame Keycaps</span>
                <span className="text-neon-cyan font-bold">{monkeytypeData.testsCompleted}+ Tests</span>
              </p>
            </div>
          </div>

          {/* Philosophy Banner */}
          <div className="p-6 bg-obsidian-deep border-l-4 border-solar-amber border-y border-r border-wireframe-steel font-mono text-xs md:text-sm text-high-volt-white leading-relaxed">
            <span className="text-solar-amber font-bold block mb-1">// DUAL DISCIPLINE PHILOSOPHY [AGE 31 • ALIVE SINCE &apos;95]</span>
            &ldquo;Five years of architecting scalable software taught me system resilience; competitive Dota 2 and CS2 lobbies taught me rapid execution under fire. Precision in code, dominance in the arena.&rdquo;
          </div>
        </section>

        {/* [04] RIG SPECS // BATTLESTATION */}
        <section id="hardware-specs" className="w-full max-w-[88rem] mx-auto px-4 md:px-8 py-12 border-t border-wireframe-steel">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-wireframe-steel">
            <div>
              <span className="font-mono text-xs text-solar-amber block">// SUBSYSTEM_04 // SAMI KALAMMALLAH BATTLESTATION RIG</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-high-volt-white uppercase">
                [04] RIG_SPECS // ACER NITRO 5 AN-515-58 &amp; TACTICAL LOADOUT
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-neon-cyan">
              <span>CORE: INTEL I5-12500H</span>
              <span className="text-wireframe-steel">//</span>
              <span>VGA: RTX 3050 4GB</span>
              <span className="text-wireframe-steel">//</span>
              <span className="text-solar-amber">RAM: 16GB 3200MHZ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Main Weapon */}
            <div className="bg-obsidian-surface border border-neon-cyan/40 p-5 rounded space-y-2 relative chamfer-card shadow-[0_0_12px_rgba(0,240,255,0.08)]">
              <span className="text-[10px] font-mono text-neon-cyan font-bold block">MAIN WEAPON // CHASSIS</span>
              <h3 className="font-bold text-high-volt-white text-base">Acer Nitro 5 AN-515-58</h3>
              <p className="text-xs text-on-surface-variant font-mono">
                Dedicated gaming battlestation driving high-throughput local microservice builds, containerized clusters, and competitive gaming lobbies.
              </p>
            </div>

            {/* Compute */}
            <div className="bg-obsidian-surface border border-wireframe-steel p-5 rounded space-y-2">
              <span className="text-[10px] font-mono text-solar-amber block">COMPUTE ENGINE</span>
              <h3 className="font-bold text-high-volt-white text-base">Intel Core i5-12500H</h3>
              <p className="text-xs text-on-surface-variant font-mono">
                12 Cores (4 Performance + 8 Efficient Cores) / 16 Threads, up to 4.50 GHz turbo clock for concurrent compilation.
              </p>
            </div>

            {/* VGA & RAM */}
            <div className="bg-obsidian-surface border border-wireframe-steel p-5 rounded space-y-2">
              <span className="text-[10px] font-mono text-rog-crimson block">GRAPHICS &amp; MEMORY</span>
              <h3 className="font-bold text-high-volt-white text-base">RTX 3050 4GB + 16GB RAM</h3>
              <p className="text-xs text-on-surface-variant font-mono">
                NVIDIA Ampere RTX 3050 4GB VRAM paired with 2x8GB DDR4 3200MHz dual-channel high-frequency memory.
              </p>
            </div>

            {/* Display */}
            <div className="bg-obsidian-surface border border-wireframe-steel p-5 rounded space-y-2">
              <span className="text-[10px] font-mono text-neon-cyan block">BATTLE VIEWPORT</span>
              <h3 className="font-bold text-high-volt-white text-base">Lenovo Legion 24in</h3>
              <p className="text-xs text-on-surface-variant font-mono">
                Dedicated high-refresh 24-inch gaming monitor tuned for sub-tick tactical clarity and instant target acquisition.
              </p>
            </div>
          </div>

          {/* Tactical Accessories Roster */}
          <div className="bg-obsidian-surface border border-wireframe-steel p-6 rounded relative">
            <div className="flex items-center justify-between font-mono text-xs pb-3 mb-4 border-b border-wireframe-steel">
              <span className="text-solar-amber font-bold">TACTICAL ACCESSORIES &amp; PERIPHERAL ARSENAL</span>
              <span className="text-on-surface-variant text-[10px]">[HARDWARE_DEPLOYED]</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
              <div className="p-3 bg-obsidian-deep border border-solar-amber/30 rounded">
                <span className="text-[10px] text-solar-amber block">PRIMARY KEYBOARD</span>
                <span className="text-high-volt-white font-bold text-xs block mt-1">Pressplay Essential75</span>
                <span className="text-[10px] text-solar-amber/80">Rengoku Version 🔥</span>
              </div>
              <div className="p-3 bg-obsidian-deep border border-wireframe-steel rounded">
                <span className="text-[10px] text-neon-cyan block">TACTICAL KEYBOARD</span>
                <span className="text-high-volt-white font-bold text-xs block mt-1">Fantech Maxfit 61</span>
                <span className="text-[10px] text-on-surface-variant">Compact 60%</span>
              </div>
              <div className="p-3 bg-obsidian-deep border border-wireframe-steel rounded">
                <span className="text-[10px] text-rog-crimson block">TARGETING MOUSE</span>
                <span className="text-high-volt-white font-bold text-xs block mt-1">Logitech G102</span>
                <span className="text-[10px] text-on-surface-variant">Prodigy Optical</span>
              </div>
              <div className="p-3 bg-obsidian-deep border border-wireframe-steel rounded">
                <span className="text-[10px] text-neon-cyan block">DESK SURFACE</span>
                <span className="text-high-volt-white font-bold text-xs block mt-1">Fantech Vigil MP902</span>
                <span className="text-[10px] text-on-surface-variant">Speed Mat</span>
              </div>
              <div className="p-3 bg-obsidian-deep border border-wireframe-steel rounded">
                <span className="text-[10px] text-solar-amber block">PRO AUDIO</span>
                <span className="text-high-volt-white font-bold text-xs block mt-1">Logitech G Pro</span>
                <span className="text-[10px] text-on-surface-variant">Spatial Headphone</span>
              </div>
              <div className="p-3 bg-obsidian-deep border border-wireframe-steel rounded">
                <span className="text-[10px] text-on-surface-variant block">MONITOR AUDIO</span>
                <span className="text-high-volt-white font-bold text-xs block mt-1">dbE DJ80</span>
                <span className="text-[10px] text-on-surface-variant">Studio Monitor</span>
              </div>
            </div>
          </div>
        </section>

        {/* [05] UPLINK // INTERACTIVE TERMINAL & CONTACT */}
        <section id="uplink-contact" className="w-full max-w-[88rem] mx-auto px-4 md:px-8 py-12 border-t border-wireframe-steel">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-wireframe-steel">
            <div>
              <span className="font-mono text-xs text-neon-cyan block">// SUBSYSTEM_05 // DIRECT SECURE COMMS &amp; CLI TERMINAL</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-high-volt-white uppercase">
                [05] UPLINK // TRANSMIT TO SAMI KALAMMALLAH
              </h2>
            </div>
            <span className="font-mono text-xs text-solar-amber">[ PILOT ID: SamX23 // ENCRYPTED ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Terminal CLI */}
            <div>
              <span className="font-mono text-xs text-on-surface-variant block mb-2">// COMMAND_LINE_INTERFACE</span>
              <TacticalTerminal />
            </div>

            {/* Direct Contact Dispatch Card */}
            <div className="bg-obsidian-surface border border-wireframe-steel p-6 rounded space-y-5">
              <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-wireframe-steel">
                <span className="text-solar-amber font-bold">DIRECT_DISPATCH_UPLINK</span>
                <span className="text-neon-cyan">[PRIORITY_CHANNEL]</span>
              </div>
              <p className="text-xs text-on-surface-variant font-mono">
                Reach out for high-impact software engineering roles, technical architecture consultation, or competitive gaming lobbies.
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-obsidian-deep border border-wireframe-steel">
                  <span className="text-[10px] text-on-surface-variant block">DIRECT EMAIL</span>
                  <a href="mailto:skalexsong@gmail.com" className="text-neon-cyan font-bold hover:underline">
                    skalexsong@gmail.com
                  </a>
                </div>
                <div className="p-3 bg-obsidian-deep border border-wireframe-steel">
                  <span className="text-[10px] text-on-surface-variant block">LOCATION BASE</span>
                  <span className="text-high-volt-white font-bold">Indonesia (UTC+7)</span>
                </div>
              </div>

              {/* Social Channels grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
                <a
                  href="https://github.com/SamX23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-obsidian-deep border border-wireframe-steel hover:border-neon-cyan transition-all text-center"
                >
                  <span className="text-[10px] text-on-surface-variant block">NODE_01</span>
                  <span className="text-neon-cyan font-bold">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/samikalammallah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-obsidian-deep border border-wireframe-steel hover:border-neon-cyan transition-all text-center"
                >
                  <span className="text-[10px] text-on-surface-variant block">NODE_02</span>
                  <span className="text-high-volt-white font-bold">LinkedIn</span>
                </a>
                <a
                  href="https://steamcommunity.com/id/kangaiti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-obsidian-deep border border-wireframe-steel hover:border-solar-amber transition-all text-center"
                >
                  <span className="text-[10px] text-on-surface-variant block">NODE_03</span>
                  <span className="text-solar-amber font-bold">Steam</span>
                </a>
                <a
                  href="https://monkeytype.com/profile/samx23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-obsidian-deep border border-wireframe-steel hover:border-neon-cyan transition-all text-center"
                >
                  <span className="text-[10px] text-on-surface-variant block">NODE_04</span>
                  <span className="text-neon-cyan font-bold">Monkeytype</span>
                </a>
                <a
                  href="https://kalammallah.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-obsidian-deep border border-wireframe-steel hover:border-rog-crimson transition-all text-center"
                >
                  <span className="text-[10px] text-on-surface-variant block">NODE_05</span>
                  <span className="text-rog-crimson font-bold">Domain</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterDiagnostics />
    </div>
  );
}
