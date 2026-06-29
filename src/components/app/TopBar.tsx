import { Bell, Calendar, Command, Plus, Search, Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="h-full px-4 sm:px-6 flex items-center gap-3">
        <div className="flex-1 max-w-xl">
          <div className="group flex items-center gap-2 h-10 px-3 rounded-xl bg-card/70 border border-border hover:border-white/10 transition">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search skills, projects, resources…"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-white/[0.04] border border-border rounded px-1.5 py-0.5">
              <Command className="h-3 w-3" /> K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="hidden md:inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-[13px] font-medium bg-primary/15 text-primary hover:bg-primary/20 ring-1 ring-primary/25 transition">
            <Sparkles className="h-3.5 w-3.5" /> AI Search
          </button>
          <IconBtn><Plus className="h-4 w-4" /></IconBtn>
          <IconBtn><Calendar className="h-4 w-4" /></IconBtn>
          <IconBtn>
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
          </IconBtn>
          <div className="ml-2 h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-xs font-semibold ring-1 ring-white/10">
            AK
          </div>
        </div>
      </div>
    </header>
  );
}

function IconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative h-9 w-9 grid place-items-center rounded-lg text-muted-foreground hover:text-white hover:bg-white/[0.05] transition">
      {children}
    </button>
  );
}
