import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { Target } from "lucide-react";
export const Route = createFileRoute("/app/goals")({
  component: () => <ComingSoon icon={Target} eyebrow="Aim higher" title="Goals"
    description="Short-term sprints and long-term missions, with countdowns and milestones."
    items={["Short & long-term goals","Milestones with deadlines","Priority levels","Completion %","Countdown timers","Linked skills & projects"]} />,
});
