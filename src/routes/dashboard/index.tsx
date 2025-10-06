
import UserDashboard from "@/components/DashboardComponent/User-Info-Card";
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex h-full w-full">
      <UserDashboard/>
    </section>
  );
}
