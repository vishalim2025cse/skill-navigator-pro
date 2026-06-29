import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { FolderKanban } from "lucide-react";
export const Route = createFileRoute("/app/projects")({
  component: () => <ComingSoon icon={FolderKanban} eyebrow="Build to learn" title="Projects"
    description="Track every project you ship — tech stack, status, demo, and docs."
    items={["Kanban board","Tech stack tags","GitHub & demo links","Difficulty + progress","Timeline & documentation","AI-suggested next projects"]} />,
});
