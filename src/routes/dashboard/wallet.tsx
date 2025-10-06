
import WalletTabs from "@/components/DashboardComponent/wallet/wallettab";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/wallet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full  p-4 md:p-6 w-full">
      <WalletTabs />  
    </div>
  );
}
