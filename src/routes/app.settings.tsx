import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { Settings } from "lucide-react";
export const Route = createFileRoute("/app/settings")({
  component: () => <ComingSoon icon={Settings} eyebrow="Make it yours" title="Settings"
    description="Tune notifications, privacy, AI preferences, and accessibility."
    items={["Profile","Notifications","Privacy","AI Preferences","Accessibility","Export data"]} />,
});
