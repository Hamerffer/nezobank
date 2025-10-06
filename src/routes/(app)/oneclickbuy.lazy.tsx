import { createLazyFileRoute } from "@tanstack/react-router";
import CryptoTradingPlatform from "../../components/ui/oneclickbuycomponent/crypto-trading-section";
import TradeBox from "../../components/ui/oneclickbuycomponent/buy-sell";
// import CryptoTable from '../components/ui/oneclickbuycomponent/cryptotable'

export const Route = createLazyFileRoute("/(app)/oneclickbuy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
    <TradeBox/>
      <CryptoTradingPlatform />
      {/* <section className='max-w-7xl mx-auto' style={{ minHeight: '600px' }}>
    <CryptoTable/>
  </section> */}
    </>
  );
}
