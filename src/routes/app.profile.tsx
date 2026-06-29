import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/app/ComingSoon";
import { User } from "lucide-react";
export const Route = createFileRoute("/app/profile")({
  component: () => <ComingSoon icon={User} eyebrow="Your story" title="Profile"
    description="A professional profile recruiters will actually want to read."
    items={["Photo & bio","Skills & projects","Certificates","Achievements","Activity timeline","GitHub / LinkedIn / Resume"]} />,
});
