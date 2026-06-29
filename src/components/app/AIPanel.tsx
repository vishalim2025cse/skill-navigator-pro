import { Bot, Sparkles, Send } from "lucide-react";

export function AIPanel() {
  return (
    <aside className="hidden xl:flex sticky top-16 h-[calc(100vh-4rem)] w-80 shrink-0 flex-col border-l border-border bg-sidebar/60 backdrop-blur-xl">
      <div className="px-5 py-4 border-b border-border flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold">AI Mentor</div>
          <div className="text-[11px] text-muted-foreground">Always here to guide you</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <Bubble role="ai">
          Hi Aarav — you're on a <b className="text-white">12-day streak</b>. Want to continue with{" "}
          <span className="text-primary">Advanced React Patterns</span> today?
        </Bubble>
        <Bubble role="ai">
          You're 68% through your <b className="text-white">Frontend roadmap</b>. Two topics left this week: <i>Suspense</i> and <i>Server Components</i>.
        </Bubble>
        <div className="space-y-1.5 pt-2">
          <Suggestion>Generate a 30-min study plan</Suggestion>
          <Suggestion>Quiz me on TypeScript generics</Suggestion>
          <Suggestion>Review my weak areas</Suggestion>
        </div>
      </div>

      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-2 h-11 px-3 rounded-xl bg-card border border-border focus-within:border-primary/40 transition">
          <Sparkles className="h-4 w-4 text-primary" />
          <input placeholder="Ask anything…" className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground" />
          <button className="h-7 w-7 grid place-items-center rounded-lg bg-primary text-white hover:bg-primary-hover transition">
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

function Bubble({ role, children }: { role: "ai" | "me"; children: React.ReactNode }) {
  return (
    <div className={role === "ai" ? "bg-card border border-border rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-[13px] leading-relaxed text-foreground/90" : "bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-[13px] ml-6"}>
      {children}
    </div>
  );
}

function Suggestion({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full text-left text-[12.5px] px-3 py-2 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/[0.06] text-muted-foreground hover:text-white transition">
      {children}
    </button>
  );
}
