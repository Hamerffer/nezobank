import { createLazyFileRoute } from "@tanstack/react-router";
import About from "../../pages/about";
import LoadingSpinner from "@/components/DashboardComponent/user/Loadingspinner";

export const Route = createLazyFileRoute("/(app)/about")({
  component: RouteComponent,
  pendingComponent: () => <LoadingSpinner />,
});

function RouteComponent() {
  return <About />;
}
