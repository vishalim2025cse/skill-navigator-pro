import type { ReactNode } from "react";

export function PageHeader({
  eyebrow, title, description, actions,
}: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
      <div className="min-w-0">
        {eyebrow && (
          <div className="text-[11px] uppercase tracking-[0.16em] text-primary/80 mb-2 font-medium">{eyebrow}</div>
        )}
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient">{title}</h1>
        {description && <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}
