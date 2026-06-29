import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { Briefcase } from "lucide-react";
export const Route = createFileRoute("/app/career")({
  component: () => <ComingSoon icon={Briefcase} eyebrow="Get hired" title="Career Readiness"
    description="Your readiness score across the dimensions recruiters care about."
    items={["Career readiness score","Technical & soft skills","Resume score","Interview readiness","Portfolio strength","Communication score"]} />,
});
