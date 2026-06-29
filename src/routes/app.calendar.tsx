import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { Calendar } from "lucide-react";
export const Route = createFileRoute("/app/calendar")({
  component: () => <ComingSoon icon={Calendar} eyebrow="Plan your week" title="Calendar"
    description="See sessions, deadlines, and events at a glance."
    items={["Week & month view","Drag to schedule","Deadline reminders","Sync with Goals","Color tags","Quick add"]} />,
});
