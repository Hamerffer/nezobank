// TradingViewWidget1.tsx
import { useEffect, useRef, memo } from "react";

type TradingViewSymbol = {
  proName: string;
  title?: string;
};

type TradingViewWidgetProps = {
  symbols?: TradingViewSymbol[];
  colorTheme?: "light" | "dark";
  locale?: string;
  transparent?: boolean;
  displayMode?: "adaptive" | "regular";
};

const TradingViewWidget1 = ({
  symbols = [
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
    { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
    { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
    { proName: "COINBASE:SOLUSD", title: "Solana" },
  ],
  colorTheme = "dark",
  locale = "in",
  transparent = true,
  displayMode = "adaptive",
}: TradingViewWidgetProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;

    const config = {
      symbols,
      colorTheme,
      locale,
      largeChartUrl: "",
      isTransparent: transparent,
      showSymbolLogo: true,
      displayMode,
    };

    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [symbols, colorTheme, locale, transparent, displayMode]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export default memo(TradingViewWidget1);
