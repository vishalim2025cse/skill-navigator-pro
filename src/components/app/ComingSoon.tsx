import { PageHeader } from "@/components/app/PageHeader";
import { Sparkles, type LucideIcon } from "lucide-react";

export function ComingSoon({
  icon: Icon = Sparkles, eyebrow, title, description, items,
}: {
  icon?: LucideIcon; eyebrow: string; title: string; description: string; items: string[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="card-premium p-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center mb-5 shadow-[0_8px_30px_-8px_var(--color-primary)]">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-gradient">In the works</h2>
          <p className="mt-2 text-sm text-muted-foreground">A premium experience is being crafted here. Preview of what's coming:</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2">
            {items.map(i => (
              <li key={i} className="flex items-center gap-2.5 rounded-xl border border-border bg-card-2/40 px-3.5 py-2.5 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
