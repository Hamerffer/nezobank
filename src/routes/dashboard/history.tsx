import HistoryTab from "@/components/DashboardComponent/History/HistoryTab";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/history")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full  p-4 md:p-6 w-full">
      <HistoryTab />
    </div>
  );
}
