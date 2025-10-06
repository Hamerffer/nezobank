import { createLazyFileRoute } from "@tanstack/react-router";
import Contact from "../../pages/Contact";
import LoadingSpinner from "@/components/DashboardComponent/user/Loadingspinner";

export const Route = createLazyFileRoute("/(app)/contact")({
  component: RouteComponent,
  pendingComponent: () => <LoadingSpinner />,
});

function RouteComponent() {
  return <Contact />;
}
