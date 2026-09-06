"use client";

import React, { useState } from "react";

interface SkillNode {
  id: string;
  name: string;
  tier: number; // 1 - 5
  tierName: string;
  manaCost: string;
  cooldown: string;
  desc: string;
  status: "MAXED" | "ACTIVE" | "SPECIALIZED";
}

interface SkillBranch {
  id: string;
  branchName: string;
  badge: string;
  color: string;
  borderColor: string;
  bgBadge: string;
  skills: SkillNode[];
}

export function SkillTree() {
  const [selectedBranch, setSelectedBranch] = useState<string>("frontend");

  const branches: SkillBranch[] = [
    {
      id: "frontend",
      branchName: "BRANCH_01: FRONTEND & CLIENT ARCHITECTURE",
      badge: "HYPER_SPEED",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan/40",
      bgBadge: "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan",
      skills: [
        {
          id: "nextjs",
          name: "Next.js 16 (App Router / Turbopack)",
          tier: 5,
          tierName: "TIER V: ARCHITECT",
          manaCost: "15 MP",
          cooldown: "0.2s",
          desc: "Streaming SSR, Server Actions, granular caching strategies, zero-bundle-bloat route segments.",
          status: "MAXED",
        },
        {
          id: "typescript",
          name: "TypeScript Strict Mode",
          tier: 5,
          tierName: "TIER V: MASTERY",
          manaCost: "20 MP",
          cooldown: "Instant",
          desc: "Single source of truth typing, branded types, discriminated unions, zero 'any' policy.",
          status: "MAXED",
        },
        {
          id: "tailwind",
          name: "Tailwind CSS & HeroUI",
          tier: 5,
          tierName: "TIER V: PIXEL_PERFECT",
          manaCost: "10 MP",
          cooldown: "Instant",
          desc: "Custom tactical HUD theme tokens, responsive layouts, high-contrast accessible UI/UX patterns.",
          status: "MAXED",
        },
        {
          id: "cwv",
          name: "Core Web Vitals & Web Audio API",
          tier: 5,
          tierName: "TIER V: OPTIMIZER",
          manaCost: "25 MP",
          cooldown: "Passive",
          desc: "Sub-second INP, zero layout shift (CLS), synthesized Web Audio mechanical sound synthesis.",
          status: "MAXED",
        },
      ],
    },
    {
      id: "backend",
      branchName: "BRANCH_02: BACKEND & DISTRIBUTED DATA",
      badge: "ENTERPRISE_CORE",
      color: "text-solar-amber",
      borderColor: "border-solar-amber/40",
      bgBadge: "bg-solar-amber/10 border-solar-amber/30 text-solar-amber",
      skills: [
        {
          id: "graphql",
          name: "GraphQL Schema Orchestration",
          tier: 5,
          tierName: "TIER V: ORCHESTRATOR",
          manaCost: "30 MP",
          cooldown: "1.0s",
          desc: "Multi-service schema stitching, Apollo Server, typed resolvers, high-concurrency query batches.",
          status: "MAXED",
        },
        {
          id: "microservices",
          name: "Microservices & REST APIs",
          tier: 4,
          tierName: "TIER IV: SPECIALIST",
          manaCost: "25 MP",
          cooldown: "2.5s",
          desc: "Decoupled domain services, resilient inter-service communication, payload validation.",
          status: "SPECIALIZED",
        },
        {
          id: "databases",
          name: "PostgreSQL & Prisma ORM",
          tier: 4,
          tierName: "TIER IV: DATA_KEEPER",
          manaCost: "20 MP",
          cooldown: "1.5s",
          desc: "Relational schema indexing, transaction isolation, migrations, zero-downtime schema upgrades.",
          status: "SPECIALIZED",
        },
        {
          id: "redis",
          name: "Redis Caching & In-Memory Queues",
          tier: 4,
          tierName: "TIER IV: ACCELERATOR",
          manaCost: "15 MP",
          cooldown: "0.5s",
          desc: "Distributed rate-limiting, session stores, low-latency key-value read caches.",
          status: "ACTIVE",
        },
      ],
    },
    {
      id: "devops",
      branchName: "BRANCH_03: DEVOPS, RUNTIMES & CLOUD",
      badge: "BATTLE_HARDENED",
      color: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      bgBadge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      skills: [
        {
          id: "docker",
          name: "Docker Containerization",
          tier: 4,
          tierName: "TIER IV: PACKAGER",
          manaCost: "20 MP",
          cooldown: "5.0s",
          desc: "Multi-stage lean production builds, isolated dev environments, container clustering.",
          status: "SPECIALIZED",
        },
        {
          id: "cicd",
          name: "GitHub Actions & Jenkins CI/CD",
          tier: 4,
          tierName: "TIER IV: AUTOMATOR",
          manaCost: "15 MP",
          cooldown: "Triggered",
          desc: "Automated linting pipelines (oxlint), automated testing runs, automated production releases.",
          status: "SPECIALIZED",
        },
        {
          id: "edge",
          name: "Cloudflare Workers & Vercel Edge",
          tier: 5,
          tierName: "TIER V: EDGE_RUNNER",
          manaCost: "25 MP",
          cooldown: "Instant",
          desc: "Global edge CDN routing, serverless executions, zero-cold-start compute distribution.",
          status: "MAXED",
        },
        {
          id: "bun",
          name: "Bun Runtime & Tooling",
          tier: 5,
          tierName: "TIER V: VELOCITY",
          manaCost: "10 MP",
          cooldown: "Instant",
          desc: "High-speed package management, instant local script execution, native TypeScript engine.",
          status: "MAXED",
        },
      ],
    },
  ];

  const currentBranch = branches.find((b) => b.id === selectedBranch) || branches[0];

  return (
    <section id="skill-tree" className="w-full max-w-[88rem] mx-auto px-4 md:px-8 py-12 border-t border-wireframe-steel">
      <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-wireframe-steel gap-4">
        <div>
          <span className="font-mono text-xs text-solar-amber block">// SUBSYSTEM_02.1 // SENIOR SYSTEM ARCHITECT TALENT MATRIX</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-high-volt-white uppercase">
            [02.1] TALENT_TREE // RPG SOFTWARE ENGINEERING LOADOUT
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="text-high-volt-white bg-surface-container px-2.5 py-1 border border-wireframe-steel rounded">
            PILOT LEVEL: <strong className="text-solar-amber">LVL 31</strong>
          </span>
          <span className="text-high-volt-white bg-surface-container px-2.5 py-1 border border-wireframe-steel rounded">
            EXPERIENCE: <strong className="text-neon-cyan">5+ YEARS PROD</strong>
          </span>
          <span className="text-high-volt-white bg-surface-container px-2.5 py-1 border border-wireframe-steel rounded">
            CLASS: <strong className="text-rog-crimson">TECH-COMMANDO</strong>
          </span>
        </div>
      </div>

      {/* Branch Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
        {branches.map((b) => {
          const isSelected = b.id === selectedBranch;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => setSelectedBranch(b.id)}
              className={`px-4 py-2 rounded border font-bold transition-all ${
                isSelected
                  ? `${b.bgBadge} ${b.borderColor} shadow-[0_0_15px_currentColor]`
                  : "bg-obsidian-surface border-wireframe-steel text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {b.branchName}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {currentBranch.skills.map((skill) => (
          <div
            key={skill.id}
            className={`p-4 bg-obsidian-surface border rounded relative chamfer-card transition-all hover:border-high-volt-white ${currentBranch.borderColor}`}
          >
            {/* Tier Header */}
            <div className="flex items-center justify-between font-mono text-[11px] pb-2 mb-3 border-b border-wireframe-steel">
              <span className={`font-bold ${currentBranch.color}`}>{skill.tierName}</span>
              <span className="px-1.5 py-0.5 bg-obsidian-deep border border-wireframe-steel rounded text-[10px] text-high-volt-white">
                {skill.status}
              </span>
            </div>

            {/* Skill Name */}
            <h3 className="font-bold text-high-volt-white text-sm mb-2">{skill.name}</h3>

            {/* Description */}
            <p className="text-xs text-on-surface-variant leading-relaxed mb-4 min-h-[48px]">
              {skill.desc}
            </p>

            {/* Tier Star Bars */}
            <div className="space-y-2 pt-2 border-t border-wireframe-steel font-mono text-[10px]">
              <div className="flex items-center justify-between">
                <span className="text-tactical-slate">MASTERY LEVEL:</span>
                <span className={currentBranch.color}>
                  {"★".repeat(skill.tier)}
                  {"☆".repeat(5 - skill.tier)}
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>MANA: {skill.manaCost}</span>
                <span>CD: {skill.cooldown}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Equipped Perks */}
      <div className="p-5 bg-obsidian-surface border border-wireframe-steel rounded relative">
        <div className="flex items-center justify-between font-mono text-xs pb-3 mb-4 border-b border-wireframe-steel">
          <span className="text-solar-amber font-bold">EQUIPPED COMBAT PERKS &amp; PASSIVE BUFFS</span>
          <span className="text-on-surface-variant text-[10px]">[4 SLOTS SLOTTED]</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 bg-obsidian-deep border border-neon-cyan/40 rounded">
            <span className="text-neon-cyan font-bold block text-[11px]">⚡ SUB-TICK APM (285+)</span>
            <p className="text-[11px] text-on-surface-variant mt-1">
              +30% sprint velocity during critical production releases and high-concurrency incident mitigations.
            </p>
          </div>
          <div className="p-3 bg-obsidian-deep border border-solar-amber/40 rounded">
            <span className="text-solar-amber font-bold block text-[11px]">🔥 RENGOKU FLAME FOCUS</span>
            <p className="text-[11px] text-on-surface-variant mt-1">
              Unwavering endurance across massive legacy purges, complex schema refactors, and multi-tenant pipelines.
            </p>
          </div>
          <div className="p-3 bg-obsidian-deep border border-rog-crimson/40 rounded">
            <span className="text-rog-crimson font-bold block text-[11px]">🎯 FRAME-PERFECT REACTION</span>
            <p className="text-[11px] text-on-surface-variant mt-1">
              Instant sub-150ms triage of hydration mismatches, memory leaks, and distributed database bottlenecks.
            </p>
          </div>
          <div className="p-3 bg-obsidian-deep border border-emerald-500/40 rounded">
            <span className="text-emerald-400 font-bold block text-[11px]">🛡️ 5+ YEARS RESILIENCE</span>
            <p className="text-[11px] text-on-surface-variant mt-1">
              Target 99.99% system uptime through defensive architectural typing, fallback tiers, and fault tolerance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
