"use client";

import { useEffect, useState } from "react";
import { io, type Socket } from "socket.io-client";
import { AgentCard } from "./AgentCard";

interface Agent {
  name: string;
  role: string;
  status?: "online" | "offline" | "busy";
  lastAction: string;
  activeTime: string;
}

export function AgentSocketClient() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket: Socket = io("/", {
      path: "/api/socket",
    });

    socket.on("connect", () => {
      console.log("Socket conectado:", socket.id);
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Socket desconectado");
      setConnected(false);
    });

    socket.on("agent-update", (update) => {
      console.log("agent-update recebido:", update);
      setAgents(update as Agent[]);
    });

    return () => {
      socket.off("agent-update");
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="space-y-6 p-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Socket Agent Update</h2>
        <p className="text-sm text-slate-500">
          Status: {connected ? "Conectado" : "Desconectado"}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agents.length > 0 ? (
          agents.map((agent) => (
            <AgentCard
              key={agent.name}
              name={agent.name}
              role={agent.role}
              status={agent.status}
              lastAction={agent.lastAction}
              activeTime={agent.activeTime}
            />
          ))
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-500 shadow-sm">
            Nenhum agente disponível. Aguarde uma atualização de socket.
          </div>
        )}
      </div>
    </div>
  );
}
