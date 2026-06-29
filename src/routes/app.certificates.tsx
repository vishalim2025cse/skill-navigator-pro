import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { BadgeCheck } from "lucide-react";
export const Route = createFileRoute("/app/certificates")({
  component: () => <ComingSoon icon={BadgeCheck} eyebrow="Show proof" title="Certificates"
    description="A polished wall for everything you've completed."
    items={["Issuer & date","Skill tags","Verification links","PDF previews","Share to LinkedIn","Group by track"]} />,
});
