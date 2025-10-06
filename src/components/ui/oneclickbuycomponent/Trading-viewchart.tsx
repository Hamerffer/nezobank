// TradingViewWidget.tsx (TypeScript friendly)
import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;

    // JSON configuration as string
    script.textContent = JSON.stringify({
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
       width: "100%",
    height: "550px", // ya responsive height
    overflow: "hidden", // scroll avoid karne ke liye
    position: "relative",
    });

    container.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container.current) container.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/crypto-coins-screener/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
