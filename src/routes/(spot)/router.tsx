import Navbar from "@/components/Navbar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(spot)/router")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="bg-amber-800">hkjh</div>
      <Navbar />
      <Outlet />
    </>
  );
}
