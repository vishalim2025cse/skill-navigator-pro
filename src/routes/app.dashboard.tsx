import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Flame, Trophy, Brain, Target, ArrowUpRight, Plus, Zap, CheckCircle2, Clock } from "lucide-react";

export const Route = createFileRoute("/app/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Welcome back"
        title="Hi Aarav, ready for today?"
        description="You're on a 12-day streak. Two focused sessions left to hit your weekly goal."
        actions={
          <button className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-medium shadow-[0_8px_28px_-12px_var(--color-primary)] hover:opacity-95 transition">
            <Plus className="h-4 w-4" /> Quick Add
          </button>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <Stat icon={Flame} label="Daily Streak" value="12" suffix="days" tone="warning" />
        <Stat icon={Brain} label="Study Score" value="86" tone="primary" />
        <Stat icon={Trophy} label="Skill Score" value="74" tone="accent" />
        <Stat icon={Target} label="Career Readiness" value="68%" tone="success" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2 card-premium p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">This week</div>
              <div className="text-lg font-semibold mt-1">Weekly progress</div>
            </div>
            <button className="text-xs text-primary hover:text-white transition inline-flex items-center gap-1">
              See report <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 h-40 items-end">
            {[40,68,52,84,76,92,58].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-full rounded-md bg-gradient-to-t from-primary/40 to-accent/80 hover:from-primary hover:to-accent transition" style={{ height: `${h}%` }} />
                <span className="text-[10px] text-muted-foreground">{["M","T","W","T","F","S","S"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-premium p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Today's goal</div>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-4xl font-semibold tracking-tight">2.5</span>
            <span className="text-sm text-muted-foreground mb-1">/ 4 hours</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: "62%" }} />
          </div>
          <button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 transition px-3 py-2.5 text-sm font-medium">
            <Zap className="h-4 w-4" /> Start focus session
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold">Upcoming tasks</div>
            <button className="text-xs text-muted-foreground hover:text-white">View all</button>
          </div>
          <ul className="space-y-2">
            {[
              { t: "Finish React Suspense module", d: "Today · 5:30 PM" },
              { t: "Complete TypeScript quiz #4", d: "Tomorrow" },
              { t: "Submit DBMS lab project", d: "Fri · 11:59 PM" },
              { t: "Mock interview — Frontend", d: "Sat · 10:00 AM" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3 rounded-xl border border-border bg-card-2/40 px-3.5 py-3 hover:border-primary/30 transition">
                <button className="h-5 w-5 rounded-md border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40">
                  <CheckCircle2 className="h-3.5 w-3.5 opacity-0 hover:opacity-100" />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate">{x.t}</div>
                  <div className="text-[11px] text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{x.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              AI Recommendations
            </div>
          </div>
          <div className="space-y-2.5">
            {[
              { t: "Strengthen TypeScript generics", w: "Detected weak area · 18% lower than peers" },
              { t: "Try building a CRUD with Server Components", w: "Matches your roadmap & goals" },
              { t: "Take a 5-min DSA warm-up", w: "Keeps streak + boosts pattern recall" },
            ].map((r) => (
              <button key={r.t} className="w-full text-left rounded-xl border border-border bg-gradient-to-br from-primary/[0.06] to-transparent hover:border-primary/30 px-4 py-3 transition group">
                <div className="text-sm font-medium group-hover:text-white">{r.t}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{r.w}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ icon: Icon, label, value, suffix, tone }: { icon: any; label: string; value: string; suffix?: string; tone: "primary"|"accent"|"success"|"warning" }) {
  const tones: Record<string, string> = {
    primary: "from-primary/30 to-primary/5 text-primary",
    accent: "from-accent/30 to-accent/5 text-accent",
    success: "from-success/30 to-success/5 text-success",
    warning: "from-warning/30 to-warning/5 text-warning",
  };
  return (
    <div className="card-premium hover-lift p-5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className={`h-8 w-8 rounded-lg bg-gradient-to-br grid place-items-center ${tones[tone]}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold tracking-tight">{value}</span>
        {suffix && <span className="text-xs text-muted-foreground">{suffix}</span>}
      </div>
    </div>
  );
}
