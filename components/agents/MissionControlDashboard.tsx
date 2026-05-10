import { SquadPanel } from "./SquadPanel";
import { LogTerminal } from "@/components/logs/LogTerminal";

interface Agent {
  name: string;
  role: string;
  status: "online" | "offline" | "busy";
  lastAction: string;
  activeTime: string;
}

const squads: { title: string; agents: Agent[] }[] = [
  {
    title: "AIOS CORE",
    agents: [
      {
        name: "Orion",
        role: "Coordinator",
        status: "online",
        lastAction: "Roteiro de fluxo atualizado",
        activeTime: "2h 14m",
      },
      {
        name: "Dev Agent",
        role: "Infrastructure",
        status: "busy",
        lastAction: "Deploy de ambiente iniciado",
        activeTime: "1h 03m",
      },
      {
        name: "Media Agent",
        role: "Creative",
        status: "online",
        lastAction: "Nova arte de campanha gerada",
        activeTime: "55m",
      },
    ],
  },
  {
    title: "SALES SQUAD",
    agents: [
      {
        name: "Closer",
        role: "Deal Closer",
        status: "online",
        lastAction: "Proposta fechada com cliente A",
        activeTime: "3h 21m",
      },
      {
        name: "SDR",
        role: "Lead Generator",
        status: "busy",
        lastAction: "Contato com lead qualificado",
        activeTime: "2h 46m",
      },
      {
        name: "Follow-up",
        role: "Pipeline",
        status: "offline",
        lastAction: "Aguardando retorno do cliente",
        activeTime: "30m",
      },
    ],
  },
  {
    title: "DOC GENERATION",
    agents: [
      {
        name: "PDF Agent",
        role: "Document Builder",
        status: "online",
        lastAction: "PDF de contrato gerado",
        activeTime: "1h 12m",
      },
      {
        name: "Proposal Agent",
        role: "Proposal Writer",
        status: "busy",
        lastAction: "Proposta personalizada em revisão",
        activeTime: "47m",
      },
    ],
  },
];

const activityLogs = [
  "[09:12] Orion atualizou o fluxo de operações.",
  "[09:27] Dev Agent iniciou deploy no ambiente staging.",
  "[09:38] Media Agent publicou nova capa para a landing page.",
  "[09:45] Closer fechou negociação com cliente Beta.",
  "[09:52] SDR enviou proposta para lead com alto potencial.",
  "[09:58] PDF Agent gerou contrato pronto para assinatura.",
  "[10:04] Proposal Agent concluiu rascunho de proposta.",
];

export function MissionControlDashboard() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-green-500/40 bg-black/95 p-8 shadow-[0_35px_120px_-80px_rgba(16,185,129,0.7)] backdrop-blur-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-300">AIOS Control</p>
            <h1 className="text-4xl font-semibold text-green-100">Mission Control</h1>
            <p className="mt-2 max-w-2xl text-green-300">
              Painel operacional com squads, agentes, status em tempo real, logs de atividade e tempo ativo.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          {squads.map((squad) => (
            <SquadPanel key={squad.title} title={squad.title} agents={squad.agents} />
          ))}
        </div>

        <LogTerminal title="Activity Logs" logs={activityLogs} />
      </div>
    </div>
  );
}
