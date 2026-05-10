import React from "react";

interface LogTerminalProps {
  logs: string[];
  title?: string;
}

export function LogTerminal({ logs, title = "Terminal de Logs" }: LogTerminalProps) {
  return (
    <div className="rounded-3xl border border-green-500/40 bg-[#03110d] p-6 text-green-400 shadow-[0_35px_120px_-85px_rgba(16,185,129,0.7)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-green-100">{title}</h2>
        <span className="rounded-full bg-green-950/90 px-3 py-1 text-sm text-green-200">
          {logs.length} entradas
        </span>
      </div>
      <div className="max-h-[560px] overflow-y-auto rounded-3xl bg-[#04130f] p-4 font-mono text-sm leading-6 text-green-200 shadow-inner">
        {logs.length === 0 ? (
          <div className="text-green-300">Nenhum log disponível.</div>
        ) : (
          logs.map((line, index) => (
            <div key={index} className="mb-3 whitespace-pre-wrap">
              <span className="text-green-300">{line.split("]")[0] + "]"}</span>
              <span className="ml-2 text-green-200">{line.split("]").slice(1).join("]")}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
