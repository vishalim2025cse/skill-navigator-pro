import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Plus, Filter, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/skills")({
  component: Skills,
});

const categories = [
  "All","Programming","Web Development","Database","Cloud","AI","Cybersecurity","Communication","Leadership","Soft Skills","Aptitude",
];

const skills = [
  { name: "React & Next.js", cat: "Web Development", level: "Advanced", progress: 82, confidence: 88, projects: 7, last: "2h ago", diff: "Hard", eta: "3 weeks", rec: "Try Server Components" },
  { name: "TypeScript", cat: "Programming", level: "Intermediate", progress: 64, confidence: 70, projects: 5, last: "Yesterday", diff: "Medium", eta: "5 weeks", rec: "Master generics" },
  { name: "PostgreSQL", cat: "Database", level: "Intermediate", progress: 58, confidence: 62, projects: 3, last: "3d ago", diff: "Medium", eta: "6 weeks", rec: "Indexing & joins" },
  { name: "System Design", cat: "Programming", level: "Beginner", progress: 28, confidence: 35, projects: 1, last: "1w ago", diff: "Hard", eta: "12 weeks", rec: "Start with primitives" },
  { name: "Python & ML", cat: "AI", level: "Intermediate", progress: 55, confidence: 60, projects: 4, last: "Today", diff: "Hard", eta: "8 weeks", rec: "Build a classifier" },
  { name: "AWS Cloud", cat: "Cloud", level: "Beginner", progress: 22, confidence: 30, projects: 0, last: "—", diff: "Medium", eta: "10 weeks", rec: "Try the free tier" },
];

function Skills() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? skills : skills.filter(s => s.cat === cat);

  return (
    <>
      <PageHeader
        eyebrow="Your toolkit"
        title="Skills"
        description="A living portfolio of what you know, how confident you are, and what's next."
        actions={
          <>
            <button className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/60 px-3.5 py-2.5 text-sm hover:bg-card transition">
              <Filter className="h-3.5 w-3.5" /> Filters
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-medium shadow-[0_8px_28px_-12px_var(--color-primary)] hover:opacity-95 transition">
              <Plus className="h-4 w-4" /> Add skill
            </button>
          </>
        }
      />

      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-6 -mx-1 px-1">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              cat === c
                ? "bg-primary text-white shadow-[0_8px_24px_-10px_var(--color-primary)]"
                : "border border-border bg-card/60 text-muted-foreground hover:text-white hover:border-white/10"
            }`}
          >{c}</button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => <SkillCard key={s.name} s={s} />)}
      </div>
    </>
  );
}

function SkillCard({ s }: { s: typeof skills[number] }) {
  const r = 28, c = 2 * Math.PI * r, off = c - (s.progress / 100) * c;
  return (
    <div className="card-premium hover-lift p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs text-muted-foreground">{s.cat}</div>
          <h3 className="mt-1 text-base font-semibold tracking-tight truncate">{s.name}</h3>
          <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-primary bg-primary/10 ring-1 ring-primary/20 rounded-full px-2 py-0.5">
            {s.level}
          </div>
        </div>
        <svg width="72" height="72" className="shrink-0">
          <circle cx="36" cy="36" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
          <circle
            cx="36" cy="36" r={r} stroke="url(#g)" strokeWidth="6" fill="none"
            strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
            transform="rotate(-90 36 36)"
          />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <text x="36" y="40" textAnchor="middle" fontSize="13" fontWeight="600" fill="white">{s.progress}%</text>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <Mini label="Confidence" value={`${s.confidence}%`} />
        <Mini label="Projects" value={`${s.projects}`} />
        <Mini label="Last" value={s.last} />
      </div>

      <div className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.06] p-3 flex items-start gap-2">
        <Sparkles className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
        <div className="text-[12px] text-foreground/90"><span className="text-muted-foreground">AI: </span>{s.rec}</div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Difficulty · {s.diff}</span>
        <span>Mastery · {s.eta}</span>
      </div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-card-2/60 border border-border py-2">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-xs font-medium mt-0.5">{value}</div>
    </div>
  );
}
