import { MissionControlDashboard } from "@/components/agents/MissionControlDashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-green-400 font-sans">
      <main className="w-full max-w-6xl p-6 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_35%),_linear-gradient(180deg,_rgba(0,0,0,0.95),_rgba(0,0,0,1))]">
        <MissionControlDashboard />
      </main>
    </div>
  );
}
