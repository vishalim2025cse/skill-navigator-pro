import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { BarChart3 } from "lucide-react";
export const Route = createFileRoute("/app/analytics")({
  component: () => <ComingSoon icon={BarChart3} eyebrow="See your growth" title="Analytics"
    description="Beautiful dashboards that turn your study data into insights."
    items={["Radar chart of skills","Study hours trend","Monthly & weekly growth","Heatmaps","Completion rates","Productivity insights"]} />,
});
