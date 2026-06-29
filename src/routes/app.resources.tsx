import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { BookOpen } from "lucide-react";
export const Route = createFileRoute("/app/resources")({
  component: () => <ComingSoon icon={BookOpen} eyebrow="Curated for you" title="Resources"
    description="The best courses, books, videos, and articles — matched to your level."
    items={["Curated by skill","AI recommendations","Save for later","Notes & highlights","Difficulty filters","Track progress"]} />,
});
