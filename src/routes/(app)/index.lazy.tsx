import { createLazyFileRoute } from "@tanstack/react-router";
import Index from "../../pages/index";
import LoadingSpinner from "@/components/DashboardComponent/user/Loadingspinner";
export const Route = createLazyFileRoute("/(app)/")({
  component: RouteComponent,
  pendingComponent: () => <LoadingSpinner />,
});

function RouteComponent() {
  return <Index />;
}
