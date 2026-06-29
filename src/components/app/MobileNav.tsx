import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Sparkles, Timer, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/app/dashboard", icon: LayoutDashboard, label: "Home" },
  { to: "/app/skills", icon: Sparkles, label: "Skills" },
  { to: "/app/study", icon: Timer, label: "Study" },
  { to: "/app/mentor", icon: Bot, label: "AI" },
  { to: "/app/profile", icon: User, label: "Me" },
];

export function MobileNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="lg:hidden fixed bottom-3 left-3 right-3 z-40 glass rounded-2xl px-2 py-2 flex justify-between">
      {items.map((i) => {
        const active = pathname === i.to;
        const Icon = i.icon;
        return (
          <Link key={i.to} to={i.to} className={cn(
            "flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl text-[10px] font-medium transition",
            active ? "text-white bg-primary/15" : "text-muted-foreground"
          )}>
            <Icon className={cn("h-4 w-4", active && "text-primary")} />
            {i.label}
          </Link>
        );
      })}
    </nav>
  );
}
