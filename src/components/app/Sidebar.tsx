import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Sparkles, Map, Timer, BarChart3, Bot, Target,
  FolderKanban, Trophy, Briefcase, BadgeCheck, Users, Calendar,
  BookOpen, User, Settings, Crown, LifeBuoy,
} from "lucide-react";
import { cn } from "@/lib/utils";

const groups = [
  {
    label: "Overview",
    items: [
      { to: "/app/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/app/skills", icon: Sparkles, label: "Skills" },
      { to: "/app/roadmap", icon: Map, label: "Learning Roadmap" },
      { to: "/app/study", icon: Timer, label: "Study Tracker" },
      { to: "/app/analytics", icon: BarChart3, label: "Analytics" },
    ],
  },
  {
    label: "Grow",
    items: [
      { to: "/app/mentor", icon: Bot, label: "AI Mentor" },
      { to: "/app/goals", icon: Target, label: "Goals" },
      { to: "/app/projects", icon: FolderKanban, label: "Projects" },
      { to: "/app/achievements", icon: Trophy, label: "Achievements" },
      { to: "/app/career", icon: Briefcase, label: "Career Readiness" },
      { to: "/app/certificates", icon: BadgeCheck, label: "Certificates" },
    ],
  },
  {
    label: "Connect",
    items: [
      { to: "/app/community", icon: Users, label: "Community" },
      { to: "/app/calendar", icon: Calendar, label: "Calendar" },
      { to: "/app/resources", icon: BookOpen, label: "Resources" },
    ],
  },
  {
    label: "Account",
    items: [
      { to: "/app/profile", icon: User, label: "Profile" },
      { to: "/app/settings", icon: Settings, label: "Settings" },
    ],
  },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex h-screen sticky top-0 w-64 shrink-0 flex-col border-r border-border bg-sidebar/80 backdrop-blur-xl">
      <Link to="/app/dashboard" className="flex items-center gap-2.5 px-5 h-16 border-b border-border">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_24px_-6px_var(--color-primary)]">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">Skill Tracker</span>
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Student OS</span>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="px-2 mb-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground/80">
              {g.label}
            </div>
            <ul className="space-y-0.5">
              {g.items.map((item) => {
                const active = pathname === item.to;
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-all",
                        active
                          ? "bg-primary/15 text-white ring-1 ring-primary/30 shadow-[0_0_24px_-12px_var(--color-primary)]"
                          : "text-sidebar-foreground/80 hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      <Icon className={cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-muted-foreground group-hover:text-white")} />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-3 border-t border-border space-y-2">
        <button className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-accent text-white hover:opacity-95 transition shadow-[0_8px_28px_-12px_var(--color-primary)]">
          <Crown className="h-4 w-4" />
          Upgrade to Premium
        </button>
        <button className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-muted-foreground hover:text-white hover:bg-white/[0.04] transition">
          <LifeBuoy className="h-4 w-4" />
          Help Center
        </button>
      </div>
    </aside>
  );
}
