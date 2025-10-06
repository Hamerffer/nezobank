// TradingViewWidget2.tsx
import React, { useEffect, useRef, useState, memo } from "react";

const TradingViewWidget2: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    if (!container.current) return;

    // Clear previous widget before adding a new one
    container.current.innerHTML = `<div class="tradingview-widget-container__widget"></div>`;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "${theme}",
        "dateRange": "12M",
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showFloatingTooltip": false,
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "#DBDBDB",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              {"s": "COINBASE:BTCUSD"},
              {"s": "COINBASE:ETHUSD"},
              {"s": "COINBASE:SOLUSD"},
              {"s": "BITSTAMP:XRPUSD"},
              {"s": "BYBIT:SOLUSDT.P"}
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Futures",
            "symbols": [
              {"s": "BITSTAMP:BTCUSD"},
              {"s": "BINANCE:SOLUSDT"},
              {"s": "CRYPTO:ETHUSD"},
              {"s": "BINANCE:SOLUSDT"},
              {"s": "BITSTAMP:ETHUSD"}
            ],
            "originalTitle": "Futures"
          }
        ],
        "support_host": "https://www.tradingview.com",
        "backgroundColor": "${theme === "dark" ? "#0f0f0f" : "#ffffff"}",
        "width": "100%",
        "height": "100%",
        "showSymbolLogo": true,
        "showChart": true
      }`;

    container.current.appendChild(script);
  }, [theme]);

  useEffect(() => {
    // MutationObserver to watch for dark/light class changes
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Market data by TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget2);
