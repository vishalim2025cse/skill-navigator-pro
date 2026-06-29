import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Play, Pause, RotateCcw, Flame, Clock, Target } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/app/study")({
  component: StudyTracker,
});

function StudyTracker() {
  const [running, setRunning] = useState(false);
  const [sec, setSec] = useState(25 * 60);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSec(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");
  const pct = 1 - sec / (25 * 60);

  return (
    <>
      <PageHeader
        eyebrow="Stay consistent"
        title="Study Tracker"
        description="Pomodoro, focus mode, and a heatmap of your hard work."
      />

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2 card-premium p-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col items-center py-10">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-6">Focus session · Pomodoro</div>
            <div className="relative">
              <svg width="240" height="240" className="-rotate-90">
                <circle cx="120" cy="120" r="100" stroke="rgba(255,255,255,0.06)" strokeWidth="10" fill="none" />
                <circle cx="120" cy="120" r="100" stroke="url(#g2)" strokeWidth="10" fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 100}
                  strokeDashoffset={2 * Math.PI * 100 * (1 - pct)}
                />
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-5xl font-semibold tracking-tight tabular-nums">{mm}:{ss}</div>
                  <div className="text-xs text-muted-foreground mt-1">React · Suspense deep dive</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <button onClick={() => setRunning(r => !r)} className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium shadow-[0_10px_30px_-12px_var(--color-primary)]">
                {running ? <><Pause className="h-4 w-4"/>Pause</> : <><Play className="h-4 w-4"/>Start</>}
              </button>
              <button onClick={() => { setSec(25*60); setRunning(false); }} className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm hover:bg-card transition">
                <RotateCcw className="h-4 w-4" /> Reset
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Tile icon={Flame} label="Current streak" value="12 days" tone="warning" />
          <Tile icon={Clock} label="This week" value="14h 28m" tone="primary" />
          <Tile icon={Target} label="Consistency" value="92%" tone="success" />
        </div>
      </div>

      <div className="card-premium p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-sm font-semibold">Study heatmap</div>
            <div className="text-xs text-muted-foreground">Last 24 weeks</div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            Less
            {[0.1,0.3,0.55,0.8,1].map((o,i)=> <span key={i} className="h-3 w-3 rounded-sm" style={{background:`color-mix(in oklab, var(--color-primary) ${o*100}%, transparent)`}}/>)}
            More
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[700px]">
            {Array.from({ length: 7 * 24 }).map((_, i) => {
              const v = Math.max(0, Math.min(1, (Math.sin(i * 0.7) + Math.cos(i * 0.3) + 1.6) / 3.2));
              return (
                <div key={i} className="h-3.5 w-3.5 rounded-[3px] hover:ring-2 hover:ring-primary/40 transition"
                  style={{ background: `color-mix(in oklab, var(--color-primary) ${Math.round(v * 90)}%, rgba(255,255,255,0.04))` }} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function Tile({ icon: Icon, label, value, tone }: { icon: any; label: string; value: string; tone: "primary"|"warning"|"success" }) {
  const tones: Record<string,string> = {
    primary: "from-primary/30 to-primary/5 text-primary",
    warning: "from-warning/30 to-warning/5 text-warning",
    success: "from-success/30 to-success/5 text-success",
  };
  return (
    <div className="card-premium hover-lift p-5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className={`h-8 w-8 rounded-lg bg-gradient-to-br grid place-items-center ${tones[tone]}`}>
          <Icon className="h-4 w-4"/>
        </span>
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}
