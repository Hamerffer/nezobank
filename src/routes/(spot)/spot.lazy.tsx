import Navbar from "@/components/Navbar";
import OrderBookPage from "@/components/Order-book";
import { createLazyFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";

// --- Mock Order Book Data ---

const TradingChart: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    if (!container.current) return;

    // Clean container before injecting widget
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window as any).TradingView.widget({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "15",
        timezone: "Etc/UTC",
        theme: theme, // 🔑 dynamic theme
        style: "1",
        locale: "en",
        toolbar_bg: theme === "dark" ? "#0f172a" : "#ffffff",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_side_toolbar: false,
        container_id: "tradingview_chart",
        studies_overrides: {},
        overrides: {
          "mainSeriesProperties.candleStyle.upColor": "#16a34a",
          "mainSeriesProperties.candleStyle.downColor": "#dc2626",
          "mainSeriesProperties.candleStyle.wickUpColor": "#16a34a",
          "mainSeriesProperties.candleStyle.wickDownColor": "#dc2626",
        },
      });
    };

    container.current.appendChild(script);
  }, [theme]);

  useEffect(() => {
    // Watch Tailwind's dark class
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
    <div
      id="tradingview_chart"
      ref={container}
      className="w-full h-full rounded-lg overflow-hidden bg-slate-900/80 backdrop-blur-sm border border-slate-700/50"
    />
  );
};

export default TradingChart  
function RouteComponent() {
  return (
    <>
     
      <div className=" mb-39       paragraph-variable flex flex-col items-center mt-20">
     
        <Navbar/>
        <OrderBookPage />
      </div>
    </>
  );
}

export const Route = createLazyFileRoute("/(spot)/spot")({
  component: RouteComponent,
});
