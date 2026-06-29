import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { Map } from "lucide-react";
export const Route = createFileRoute("/app/roadmap")({
  component: () => <ComingSoon icon={Map} eyebrow="Visualize your path" title="Learning Roadmap"
    description="An interactive, AI-curated path from where you are to where you want to be."
    items={["Node-based visual roadmap","Completed / current / locked states","AI-generated next step","Estimated completion","Per-skill mini-roadmaps","Sync with Goals"]} />,
});
