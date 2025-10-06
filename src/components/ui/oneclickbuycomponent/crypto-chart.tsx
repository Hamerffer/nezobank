import { useEffect, useRef, memo } from "react";

type TradingViewWidgetProps = {
  value: string;
};

function TradingViewWidget({ value }: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbol": "${value}",
          "chartOnly": false,
          "dateRange": "12M",
          "noTimeScale": false,
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "width": "100%",
          "autosize": true,
          "height": "100%"
        }`;
    if (container.current) {
      container.current.innerHTML = ""; // clear previous script
      container.current.appendChild(script);
    }
  }, [value]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href={`https://www.tradingview.com/symbols/${value}/?exchange=BINANCE`}
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">{value} chart by TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
