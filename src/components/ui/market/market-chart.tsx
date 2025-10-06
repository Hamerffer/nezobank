// TradingViewWidget.tsx
import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderWidget = () => {
      if (!container.current) return;

      // clear old widget before re-rendering
      container.current.innerHTML = "";

      const isDark = document.documentElement.classList.contains("dark");
      const theme = isDark ? "dark" : "light";

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "defaultColumn": "overview",
          "screener_type": "crypto_mkt",
          "displayCurrency": "USD",
          "colorTheme": "${theme}",
          "isTransparent": false,
          "locale": "en",
          "width": "100%",
          "height": 550
        }`;

      container.current.appendChild(script);
    };

    renderWidget(); // initial render

    // watch for changes in the <html> class (for theme toggle)
    const observer = new MutationObserver(renderWidget);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(TradingViewWidget);
