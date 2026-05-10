import React from "react";
import { AgentCard } from "./AgentCard";

interface Agent {
  name: string;
  role: string;
  status?: "online" | "offline" | "busy";
  lastAction: string;
  activeTime: string;
}

interface SquadPanelProps {
  title: string;
  agents: Agent[];
}

export function SquadPanel({ title, agents }: SquadPanelProps) {
  return (
    <section className="space-y-6 rounded-3xl border border-green-500/40 bg-slate-950/90 p-6 shadow-[0_20px_80px_-45px_rgba(16,185,129,0.75)] backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-green-100">{title}</h2>
          <p className="text-sm text-green-300">Equipe e status dos agentes</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard
            key={agent.name}
            name={agent.name}
            role={agent.role}
            status={agent.status}
            lastAction={agent.lastAction}
            activeTime={agent.activeTime}
          />
        ))}
      </div>
    </section>
  );
}
