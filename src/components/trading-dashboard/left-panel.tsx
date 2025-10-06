import { useState } from "react";

interface LeftPanelProps {
  isMobile: boolean;
  leftPanelVisible: boolean;
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
}

const markets = [
  {
    symbol: "BTC/USD",
    price: "94,415.42",
    change: "+1.77%",
    volume: "4,345,600",
  },
  {
    symbol: "ETH/USD",
    price: "3,245.67",
    change: "-2.15%",
    volume: "2,156,700",
  },
  { symbol: "XRP/USD", price: "0.6234", change: "+5.23%", volume: "8,567,890" },
  { symbol: "ADA/USD", price: "0.4567", change: "-1.45%", volume: "1,234,560" },
  { symbol: "DOT/USD", price: "8.9012", change: "+3.78%", volume: "567,890" },
  {
    symbol: "BTC/USD",
    price: "94,415.42",
    change: "+1.77%",
    volume: "4,345,600",
  },
  {
    symbol: "ETH/USD",
    price: "3,245.67",
    change: "-2.15%",
    volume: "2,156,700",
  },
  { symbol: "XRP/USD", price: "0.6234", change: "+5.23%", volume: "8,567,890" },
  { symbol: "ADA/USD", price: "0.4567", change: "-1.45%", volume: "1,234,560" },
  { symbol: "DOT/USD", price: "8.9012", change: "+3.78%", volume: "567,890" },
  {
    symbol: "BTC/USD",
    price: "94,415.42",
    change: "+1.77%",
    volume: "4,345,600",
  },
  {
    symbol: "ETH/USD",
    price: "3,245.67",
    change: "-2.15%",
    volume: "2,156,700",
  },
  { symbol: "XRP/USD", price: "0.6234", change: "+5.23%", volume: "8,567,890" },
  { symbol: "ADA/USD", price: "0.4567", change: "-1.45%", volume: "1,234,560" },
  { symbol: "DOT/USD", price: "8.9012", change: "+3.78%", volume: "567,890" },
];

const recentTrades = [
  { price: "94,415.42", amount: "0.00056", time: "22:35:59" },
  { price: "94,412.15", amount: "0.00234", time: "22:35:58" },
  { price: "94,408.90", amount: "0.00145", time: "22:35:57" },
  { price: "94,405.67", amount: "0.00089", time: "22:35:56" },
  { price: "94,402.34", amount: "0.00167", time: "22:35:55" },
  { price: "94,415.42", amount: "0.00056", time: "22:35:59" },
  { price: "94,412.15", amount: "0.00234", time: "22:35:58" },
  { price: "94,408.90", amount: "0.00145", time: "22:35:57" },
  { price: "94,405.67", amount: "0.00089", time: "22:35:56" },
  { price: "94,402.34", amount: "0.00167", time: "22:35:55" },
  { price: "94,415.42", amount: "0.00056", time: "22:35:59" },
  { price: "94,412.15", amount: "0.00234", time: "22:35:58" },
  { price: "94,408.90", amount: "0.00145", time: "22:35:57" },
  { price: "94,405.67", amount: "0.00089", time: "22:35:56" },
  { price: "94,402.34", amount: "0.00167", time: "22:35:55" },
  { price: "94,415.42", amount: "0.00056", time: "22:35:59" },
  { price: "94,412.15", amount: "0.00234", time: "22:35:58" },
  { price: "94,408.90", amount: "0.00145", time: "22:35:57" },
  { price: "94,405.67", amount: "0.00089", time: "22:35:56" },
  { price: "94,402.34", amount: "0.00167", time: "22:35:55" },
];

const LeftPanel: React.FC<LeftPanelProps> = ({
  isMobile,
  leftPanelVisible,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [activeLeftTab, setActiveLeftTab] = useState("recent-trades");

  return (
    <div
      className={`w-full  lg:w-1/4 h-full bg-[#181f2a] border-r border-gray-700 transition-all overflow-hidden ${
        isMobile ? (leftPanelVisible ? "max-h-full" : "max-h-0") : ""
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Currency filters */}
        <div className="p-3 border-b border-gray-700">
          <div className="flex gap-1 text-xs mb-2 flex-wrap">
            <button className="px-2 py-1 rounded bg-emerald-700/20 text-xs">
              ★
            </button>
            {["USD", "BTC", "XRP", "EUR"].map((currency) => (
              <button
                key={currency}
                onClick={() => setSelectedCurrency(currency)}
                className={`px-2 py-1 rounded text-xs ${
                  selectedCurrency === currency
                    ? "bg-emerald-700/20"
                    : "hover:bg-emerald-700/10"
                }`}
              >
                {currency}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-[#222c3c] rounded px-2 py-1.5 mb-2">
            <span className="mr-1 text-gray-400 text-xs">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent text-xs text-gray-100 w-full placeholder:text-xs"
            />
          </div>

          <div className="flex items-center gap-3 text-xs">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="viewType"
                defaultChecked
                className="accent-emerald-500 w-3 h-3"
              />
              Change
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="viewType"
                className="accent-emerald-500 w-3 h-3"
              />
              24h Vol
            </label>
          </div>
        </div>

        {/* Top Half: Markets table */}
        <div className="flex-1 h-1/2 overflow-y-auto scroll-hidden">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-[#181f2a] z-10">
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-2 px-2 text-left">Coin</th>
                <th className="py-2 px-2 text-right">Price</th>
                <th className="py-2 px-2 text-right">Change</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((market, i) => (
                <tr
                  key={i}
                  className="hover:bg-[#222c3c] transition border-b border-gray-800"
                >
                  <td className="py-2 px-2">
                    <div className="flex items-center gap-1">
                      <span className="text-xs">★</span>
                      <span className="font-medium truncate text-xs">
                        {market.symbol}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-right font-mono text-xs">
                    {market.price}
                  </td>
                  <td
                    className={`py-2 px-2 text-right font-mono text-xs ${
                      market.change.startsWith("+")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {market.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Half: Recent Trades / Market Depth */}
        <div className="flex-1 h-1/2 flex flex-col border-t border-gray-700">
          {/* Tabs */}
          <div className="flex">
            <button
              className={`w-1/2 py-2 px-2 text-xs ${
                activeLeftTab === "recent-trades"
                  ? "border-b-2 border-emerald-400 text-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveLeftTab("recent-trades")}
            >
              Recent Trades
            </button>
            <button
              className={`w-1/2 py-2 px-2 text-xs ${
                activeLeftTab === "market-depth"
                  ? "border-b-2 border-emerald-400 text-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveLeftTab("market-depth")}
            >
              Market Depth
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto scroll-hidden">
            {activeLeftTab === "recent-trades" && (
              <table className="w-full text-xs">
                <thead className="sticky top-0 bg-[#181f2a]">
                  <tr className="text-gray-400">
                    <th className="py-1 px-1 text-left text-xs">Price(BTC)</th>
                    <th className="py-1 px-1 text-right text-xs">
                      Amount(USD)
                    </th>
                    <th className="py-1 px-1 text-right text-xs">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrades.map((trade, i) => (
                    <tr key={i} className="hover:bg-[#222c3c] transition">
                      <td className="py-1 px-1 text-emerald-400 font-mono text-xs">
                        {trade.price}
                      </td>
                      <td className="py-1 px-1 text-right font-mono text-xs">
                        {trade.amount}
                      </td>
                      <td className="py-1 px-1 text-right text-gray-400 text-xs">
                        {trade.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

         {activeLeftTab === "market-depth" && (
              <table className="w-full text-xs">
                <thead className="sticky top-0 bg-[#181f2a]">
                  <tr className="text-gray-400">
                    <th className="py-1 px-1 text-left text-xs">Price(BTC)</th>
                    <th className="py-1 px-1 text-right text-xs">
                      Amount(USD)
                    </th>
                    <th className="py-1 px-1 text-right text-xs">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrades.map((trade, i) => (
                    <tr key={i} className="hover:bg-[#222c3c] transition">
                      <td className="py-1 px-1 text-red-400 font-mono text-xs">
                        {trade.price}
                      </td>
                      <td className="py-1 px-1 text-right font-mono text-xs">
                        {trade.amount}
                      </td>
                      <td className="py-1 px-1 text-right text-gray-400 text-xs">
                        {trade.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
