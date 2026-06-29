import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app/Sidebar";
import { TopBar } from "@/components/app/TopBar";
import { MobileNav } from "@/components/app/MobileNav";
import { AIPanel } from "@/components/app/AIPanel";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="min-h-screen bg-ambient">
      <div className="flex">
        <AppSidebar />
        <div className="flex-1 min-w-0 flex flex-col">
          <TopBar />
          <main className="flex-1 px-4 sm:px-8 py-8 pb-28 lg:pb-12 min-w-0">
            <div className="mx-auto w-full max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
        <AIPanel />
      </div>
      <MobileNav />
    </div>
  );
}
