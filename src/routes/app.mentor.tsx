import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Bot, Send, Sparkles, BookOpen, FileQuestion, Wrench } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/mentor")({
  component: Mentor,
});

const quick = [
  { icon: BookOpen, t: "Explain a concept", d: "Get a clear breakdown of any topic" },
  { icon: FileQuestion, t: "Quiz me", d: "Adaptive questions on a chosen skill" },
  { icon: Wrench, t: "Suggest a project", d: "Matched to your level & goals" },
  { icon: Sparkles, t: "Review weak areas", d: "AI scans your stats & reports" },
];

function Mentor() {
  const [msg, setMsg] = useState("");
  return (
    <>
      <PageHeader eyebrow="Always-on coach" title="AI Mentor"
        description="Your private learning partner. Ask anything — from concepts to career strategy." />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {quick.map(q => (
          <button key={q.t} className="card-premium hover-lift p-4 text-left">
            <q.icon className="h-4 w-4 text-primary mb-2" />
            <div className="text-sm font-medium">{q.t}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{q.d}</div>
          </button>
        ))}
      </div>

      <div className="card-premium p-6 min-h-[420px] flex flex-col">
        <div className="flex-1 space-y-3">
          <Msg role="ai">
            Hey Aarav 👋 — Let's make today count. Based on your roadmap, the next best step is{" "}
            <span className="text-primary">Server Components in Next.js</span>. Want me to start a 20-min focused walkthrough?
          </Msg>
          <Msg role="me">Quiz me on TypeScript generics first.</Msg>
          <Msg role="ai">
            Great pick. Starting an adaptive 5-question set on <b>generics, constraints, and inference</b>. Difficulty will adjust as you go.
          </Msg>
        </div>

        <div className="mt-4 flex items-center gap-2 h-12 px-3 rounded-xl bg-card border border-border focus-within:border-primary/40 transition">
          <Sparkles className="h-4 w-4 text-primary" />
          <input
            value={msg}
            onChange={e => setMsg(e.target.value)}
            placeholder="Ask anything — concepts, plans, projects, careers…"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
          />
          <button className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-r from-primary to-accent">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}

function Msg({ role, children }: { role: "ai" | "me"; children: React.ReactNode }) {
  if (role === "me") {
    return (
      <div className="flex justify-end">
        <div className="max-w-xl rounded-2xl rounded-tr-sm bg-primary/20 border border-primary/30 px-4 py-2.5 text-sm">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-3">
      <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
        <Bot className="h-4 w-4" />
      </div>
      <div className="max-w-2xl rounded-2xl rounded-tl-sm bg-card-2/70 border border-border px-4 py-2.5 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
