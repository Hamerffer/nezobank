
import TradingViewEmbed from "../ui/TradingViewEmbedd";
import StockChart from "./chart";
import MobileHeader from "./mobile-header";




interface CenterPanelProps {
  isMobile: boolean;
  activeMobileTab: string;
  setActiveMobileTab: (tab: string) => void;
  activeBottomTab: string;
  setActiveBottomTab: (tab: string) => void;
}

const orderBookData = [
  { price: "112,348.71", amount: "0.65960", volume: "74.10K" },
  { price: "112,349.70", amount: "0.58869", volume: "66.13K" },
  { price: "112,349.69", amount: "0.00010", volume: "11.23456" },
  { price: "112,349.95", amount: "0.21690", volume: "24.28K" },
  { price: "112,349.35", amount: "0.00010", volume: "11.23493" },
];

const marketTrades = [
  { price: "112,344.75", amount: "0.00010", time: "14:54:12" },
  { price: "112,344.75", amount: "0.00006", time: "14:54:12" },
  { price: "112,344.01", amount: "0.00010", time: "14:54:12" },
  { price: "112,344.00", amount: "0.00020", time: "14:54:12" },
  { price: "112,343.99", amount: "0.00010", time: "14:54:12" },
];

const activeOrders = [
  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "BUY",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },
  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "BUY",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },
  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },
  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },
    {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },
    {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },  {
    date: "2020-06-30",
    time: "22:35:59",
    pair: "BTC/USD",
    type: "SELL",
    price: "0.00056",
    amount: "0.003456",
    fee: "5.3424984",
    profit: "5.3424984 USD",
  },
];

// const mockData = [
//   { time: "2025-09-30", open: 95, high: 100, low: 93, close: 98 },
//   { time: "2025-10-01", open: 98, high: 102, low: 97, close: 101 },
//   { time: "2025-10-02", open: 101, high: 104, low: 100, close: 102 },
//   { time: "2025-10-03", open: 102, high: 106, low: 101, close: 103 },
//   { time: "2025-10-04", open: 103, high: 105, low: 99, close: 100 },
// ];

const CenterPanel: React.FC<CenterPanelProps> = ({
  isMobile,
  activeMobileTab,
  setActiveMobileTab,
  activeBottomTab,
  setActiveBottomTab,
}) => {



  return (
    <div className="flex-1 flex flex-col min-h-0">
      {!isMobile && <MobileHeader />}

      {/* Center content: mobile tabs or desktop chart */}
      {isMobile ? (
        <>
          {/* Mobile tabs */}
          <div className="bg-[#181f2a] border-b border-gray-700 overflow-x-auto">
            <div className="flex text-sm min-w-max ">
              {["Chart", "Order Book", "Trades", "Info", "Trading Data"].map(
                (t) => (
                  <button
                    key={t}
                    className={`px-4 py-3 whitespace-nowrap flex-shrink-0 ${
                      activeMobileTab === t
                        ? "border-b-2 border-emerald-400 text-white"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveMobileTab(t)}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mobile tab panels */}
          <div className="flex-1 min-h-[400px] bg-[#0f1419] overflow-hidden">
            {activeMobileTab === "Chart" && (
              <div className="max-w-screen h-full bg-[#181f2a]">
                {/* <TradingViewEmbed /> */}
                
                <StockChart/>
                
              </div>
            )}

            {activeMobileTab === "Order Book" && (
              <div className="w-full h-full bg-[#181f2a] p-3 overflow-auto">
                <div className="space-y-1">
                  <div className="grid grid-cols-3 text-xs text-gray-400 mb-2 font-medium gap-2">
                    <span className="truncate">Price (USDT)</span>
                    <span className="text-right truncate">Amount (BTC)</span>
                    <span className="text-right truncate">Total</span>
                  </div>
                  <div className="space-y-1">
                    {orderBookData
                      .slice()
                      .reverse()
                      .map((item, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-3 text-xs hover:bg-red-500/10 transition p-1 rounded gap-2"
                        >
                          <span className="text-red-400 font-mono truncate text-xs">
                            {item.price}
                          </span>
                          <span className="text-right font-mono text-gray-300 truncate text-xs">
                            {item.amount}
                          </span>
                          <span className="text-right font-mono text-gray-400 truncate text-xs">
                            {item.volume}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="text-center font-mono text-base font-bold text-red-400 py-2 border-y border-gray-700 my-2">
                    112,344.75 ↓
                  </div>
                  <div className="space-y-1">
                    {orderBookData.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3 text-xs hover:bg-emerald-500/10 transition p-1 rounded gap-2"
                      >
                        <span className="text-emerald-400 font-mono truncate text-xs">
                          {item.price}
                        </span>
                        <span className="text-right font-mono text-gray-300 truncate text-xs">
                          {item.amount}
                        </span>
                        <span className="text-right font-mono text-gray-400 truncate text-xs">
                          {item.volume}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeMobileTab === "Trades" && (
              <div className="w-full h-full bg-[#181f2a] p-3 overflow-auto">
                <div className="grid grid-cols-3 text-xs text-gray-400 mb-2 gap-2">
                  <span className="truncate">Price (USDT)</span>
                  <span className="text-right truncate">Amount (BTC)</span>
                  <span className="text-right truncate">Time</span>
                </div>
                <div className="space-y-1">
                  {marketTrades.map((trade, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 text-xs hover:bg-[#222c3c] transition p-1 rounded gap-2"
                    >
                      <span className="text-emerald-400 font-mono truncate text-xs">
                        {trade.price}
                      </span>
                      <span className="text-right font-mono truncate text-xs">
                        {trade.amount}
                      </span>
                      <span className="text-right text-gray-400 truncate text-xs">
                        {trade.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeMobileTab === "Info" ||
              activeMobileTab === "Trading Data") && (
              <div className="w-full h-full bg-[#181f2a] flex items-center justify-center p-4">
                <div className="text-sm text-gray-400 text-center">
                  Coming soon
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
       
         
            <StockChart  />
         
      )}

      {/* Bottom panel - Orders */}
      <div className="bg-[#181f2a] border-t border-gray-700 flex-1 w-full min-w-full overflow-auto scroll-hidden">
        <div className="flex border-b border-gray-700 overflow-x-auto  ">
          {[
            "active-orders",
            "order-history",
            "trade-history",
            "funds",
            "bots",
          ].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm whitespace-nowrap flex-shrink-0 ${
                activeBottomTab === tab
                  ? "border-b-2 border-emerald-400 text-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveBottomTab(tab)}
            >
              {tab.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>

        <div className="h-full overflow-auto  ">
          {activeBottomTab === "active-orders" && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs ">
                <thead className="sticky top-0 bg-[#181f2a]">
                  <tr className="text-gray-400">
                    <th className="py-2 px-2 text-left text-xs">Date</th>
                    <th className="py-2 px-2 text-left text-xs">Pair</th>
                    <th className="py-2 px-2 text-left text-xs">Type</th>
                    <th className="py-2 px-2 text-left text-xs">Side</th>
                    <th className="py-2 px-2 text-right text-xs">Price</th>
                    <th className="py-2 px-2 text-right text-xs">Amount</th>
                    <th className="py-2 px-2 text-right text-xs">Filled</th>
                    <th className="py-2 px-2 text-right text-xs">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {activeOrders.map((order, i) => (
                    <tr
                      key={i}
                      className="hover:bg-[#222c3c] transition border-b border-gray-800 "
                    >
                      <td className="py-2 px-2 text-xs">{order.date}</td>
                      <td className="py-2 px-2 text-xs">{order.pair}</td>
                      <td className="py-2 px-2 text-xs">Limit</td>
                      <td className="py-2 px-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            order.type === "BUY"
                              ? "bg-emerald-700/20 text-emerald-400"
                              : "bg-red-700/20 text-red-400"
                          }`}
                        >
                          {order.type}
                        </span>
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        {order.price}
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        {order.amount}
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        -
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        {order.profit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeBottomTab === "order-history" && (
            <div className="p-4 text-gray-400 text-sm ">
              Order history content
            </div>
          )}

          {activeBottomTab === "trade-history" && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs ">
                <thead className="sticky top-0 bg-[#181f2a]">
                  <tr className="text-gray-400">
                    <th className="py-2 px-2 text-left text-xs">Date</th>
                    <th className="py-2 px-2 text-left text-xs">Pair</th>
                    <th className="py-2 px-2 text-left text-xs">Type</th>
                    <th className="py-2 px-2 text-left text-xs">Side</th>
                    <th className="py-2 px-2 text-right text-xs">Price</th>
                    <th className="py-2 px-2 text-right text-xs">Amount</th>
                    <th className="py-2 px-2 text-right text-xs">Filled</th>
                    <th className="py-2 px-2 text-right text-xs">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {activeOrders.map((order, i) => (
                    <tr
                      key={i}
                      className="hover:bg-[#222c3c] transition border-b border-gray-800"
                    >
                      <td className="py-2 px-2 text-xs">{order.date}</td>
                      <td className="py-2 px-2 text-xs">{order.pair}</td>
                      <td className="py-2 px-2 text-xs">Limit</td>
                      <td className="py-2 px-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            order.type === "BUY"
                              ? "bg-emerald-700/20 text-emerald-400"
                              : "bg-red-700/20 text-red-400"
                          }`}
                        >
                          {order.type}
                        </span>
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        {order.price}
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        {order.amount}
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        -
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-xs">
                        {order.profit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;
