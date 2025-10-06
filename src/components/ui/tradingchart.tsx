import { memo } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

const MarketChart = () => {
  return (
    <div className="bg-transparent">
    <TickerTape
      symbols={[
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100 Cash CFD",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          proName: "OANDA:AUDUSD",
          title: "",
        },
        {
          proName: "FX_IDC:INRUSD",
          title: "",
        },
        {
          proName: "BINANCE:DOGEUSDT",
          title: "",
        },
        {
          proName: "BINANCE:SOLUSDT",
          title: "",
        },
        {
          proName: "NASDAQ:TSLA",
          title: "",
        },
        {
          proName: "NASDAQ:NVDA",
          title: "",
        },
        {
          proName: "NASDAQ:AAPL",
          title: "",
        },
        {
          proName: "NASDAQ:AMZN",
          title: "",
        },
        {
          proName: "NASDAQ:GOOGL",
          title: "",
        },
        {
          proName: "OANDA:XAUUSD",
          title: "",
        },
      ]}
      showSymbolLogo={true}
      isTransparent={false}
      displayMode="compact"
      colorTheme="dark"
      locale="en"
      copyrightStyles={{
        parent: {
          display: "none",
        },
      }}
      
      
    />
    </div>
  );
};

export default memo(MarketChart);
