import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />

      <SidebarProvider>
        <AppSidebar />
        <main className="mt-20 flex flex-row w-full">
          <SidebarTrigger />
          <section className="w-full flex items-center justify-center h-fit">
            <Outlet />
          </section>
        </main>
      </SidebarProvider>
    </>
  );
}
