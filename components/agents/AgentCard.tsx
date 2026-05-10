import React from "react";

interface AgentCardProps {
  name: string;
  role: string;
  status?: "online" | "offline" | "busy";
  lastAction: string;
  activeTime: string;
}

export function AgentCard({ name, role, status = "offline", lastAction, activeTime }: AgentCardProps) {
  const statusColor = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-yellow-500",
  }[status];

  return (
    <div className="rounded-2xl border border-green-500/40 bg-[#02110c] p-6 shadow-[0_24px_80px_-50px_rgba(16,185,129,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_-60px_rgba(16,185,129,0.8)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-green-100">{name}</h3>
          <p className="text-sm text-green-300">{role}</p>
        </div>
        <span className={`inline-flex h-3 w-3 rounded-full ${statusColor} shadow-[0_0_12px_rgba(16,185,129,0.55)]`} aria-label={status} />
      </div>

      <div className="space-y-3 text-sm text-green-300">
        <div>
          <span className="font-medium text-green-100">Última ação:</span> {lastAction}
        </div>
        <div>
          <span className="font-medium text-green-100">Tempo ativo:</span> {activeTime}
        </div>
      </div>
    </div>
  );
}
