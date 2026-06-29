import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { Users } from "lucide-react";
export const Route = createFileRoute("/app/community")({
  component: () => <ComingSoon icon={Users} eyebrow="Learn together" title="Community"
    description="Forums, study groups, leaderboards, and mentorship — all in one place."
    items={["Discussion forums","Study groups","Coding clubs","Leaderboard","Events","Mentorship"]} />,
});
