import { AdvancedChart } from "react-tradingview-embed";

export default function TradingViewEmbed() {
  return (
    <div className="w-full ">
      <AdvancedChart widgetProps={{ theme: "dark", symbol: "BINANCE:BTCUSDT" }} />
    </div>
  );
}
