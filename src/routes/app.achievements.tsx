import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { Trophy } from "lucide-react";
export const Route = createFileRoute("/app/achievements")({
  component: () => <ComingSoon icon={Trophy} eyebrow="Earn it" title="Achievements"
    description="XP, levels, badges, and animated unlocks for staying consistent."
    items={["XP & Levels","Badges & medals","Daily / weekly / monthly streaks","Challenge completion","Animated unlock effects","Shareable highlights"]} />,
});
