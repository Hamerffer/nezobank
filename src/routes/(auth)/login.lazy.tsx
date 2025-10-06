import { createLazyFileRoute } from "@tanstack/react-router";
import Login from "../../pages/login";
export const Route = createLazyFileRoute("/(auth)/login")({
  component: login,
});

function login() {
  return <Login />;
}
