import { createLazyFileRoute } from "@tanstack/react-router";
import Signup from "../../pages/Signup";

export const Route = createLazyFileRoute("/(auth)/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Signup />;
}
