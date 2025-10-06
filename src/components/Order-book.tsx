import { useState, useEffect } from "react";
import TradingView from "./trading-dashboard/Tradingview";
import LeftPanel from "./trading-dashboard/left-panel";
import CenterPanel from "./trading-dashboard/centralpanel";
import RightPanel from "./trading-dashboard/right-panel";
import MobileHeader from "./trading-dashboard/mobile-header";
import MobileOrderForm from "./trading-dashboard/mobile-order-form";

const TradingDashboard = () => {
  const [side, setSide] = useState<"buy" | "sell" | "">("");
  const [activeBottomTab, setActiveBottomTab] = useState("active-orders");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [leftPanelVisible, setLeftPanelVisible] = useState(!isMobile);
  const [orderType, setOrderType] = useState("Limit");
  const [activeMobileTab, setActiveMobileTab] = useState("Chart");
  const [buyPrice, setBuyPrice] = useState("112,793.68");
  const [sellPrice, setSellPrice] = useState("112,793.68");
  const [buyAmount, setBuyAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [tpslEnabled, setTpslEnabled] = useState(false);
  const [showBuyForm, setShowBuyForm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setLeftPanelVisible(true);
      } else {
        setLeftPanelVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-screen h-fit    bg-[#0f1419] text-white lg:pb-0">
      <TradingView />

      {isMobile && <MobileHeader />}

      <div
        className={`flex flex-col lg:flex-row ${isMobile ? "min-h-screen" : "h-screen"}`}
      >
        <LeftPanel
          isMobile={isMobile}
          leftPanelVisible={leftPanelVisible}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />

        <CenterPanel
          isMobile={isMobile}
          activeMobileTab={activeMobileTab}
          setActiveMobileTab={setActiveMobileTab}
          activeBottomTab={activeBottomTab}
          setActiveBottomTab={setActiveBottomTab}
        />

        {!isMobile && (
          <RightPanel
            orderType={orderType}
            setOrderType={setOrderType}
            buyPrice={buyPrice}
            setBuyPrice={setBuyPrice}
            sellPrice={sellPrice}
            setSellPrice={setSellPrice}
            buyAmount={buyAmount}
            setBuyAmount={setBuyAmount}
            sellAmount={sellAmount}
            setSellAmount={setSellAmount}
            tpslEnabled={tpslEnabled}
            setTpslEnabled={setTpslEnabled}
          />
        )}
      </div>

      {isMobile && (
        <MobileOrderForm
          side={side}
          setSide={setSide}
          showBuyForm={showBuyForm}
          setShowBuyForm={setShowBuyForm}
        />
      )}
    </div>
  );
};

export default TradingDashboard;

// import { useState, useEffect } from "react";
// import TradingViewEmbed from "./ui/TradingViewEmbedd";
// import Tradingview from "./trading-dashboard/Tradingview";
// import SpotOrderForm from "./trading-dashboard/Order-form";

// // Dummy data (same as before)
// const markets = [
//   {
//     symbol: "BTC/USD",
//     price: "94,415.42",
//     change: "+1.77%",
//     volume: "4,345,600",
//   },
//   {
//     symbol: "ETH/USD",
//     price: "3,245.67",
//     change: "-2.15%",
//     volume: "2,156,700",
//   },
//   { symbol: "XRP/USD", price: "0.6234", change: "+5.23%", volume: "8,567,890" },
//   { symbol: "ADA/USD", price: "0.4567", change: "-1.45%", volume: "1,234,560" },
//   { symbol: "DOT/USD", price: "8.9012", change: "+3.78%", volume: "567,890" },
// ];

// const recentTrades = [
//   { price: "94,415.42", amount: "0.00056", time: "22:35:59" },
//   { price: "94,412.15", amount: "0.00234", time: "22:35:58" },
//   { price: "94,408.90", amount: "0.00145", time: "22:35:57" },
//   { price: "94,405.67", amount: "0.00089", time: "22:35:56" },
//   { price: "94,402.34", amount: "0.00167", time: "22:35:55" },
// ];

// const orderBookData = [
//   { price: "112,348.71", amount: "0.65960", volume: "74.10K" },
//   { price: "112,349.70", amount: "0.58869", volume: "66.13K" },
//   { price: "112,349.69", amount: "0.00010", volume: "11.23456" },
//   { price: "112,349.95", amount: "0.21690", volume: "24.28K" },
//   { price: "112,349.35", amount: "0.00010", volume: "11.23493" },
// ];

// const marketTrades = [
//   { price: "112,344.75", amount: "0.00010", time: "14:54:12" },
//   { price: "112,344.75", amount: "0.00006", time: "14:54:12" },
//   { price: "112,344.01", amount: "0.00010", time: "14:54:12" },
//   { price: "112,344.00", amount: "0.00020", time: "14:54:12" },
//   { price: "112,343.99", amount: "0.00010", time: "14:54:12" },
// ];

// const activeOrders = [
//   {
//     date: "2020-06-30",
//     time: "22:35:59",
//     pair: "BTC/USD",
//     type: "BUY",
//     price: "0.00056",
//     amount: "0.003456",
//     fee: "5.3424984",
//     profit: "5.3424984 USD",
//   },
//   {
//     date: "2020-06-30",
//     time: "22:35:59",
//     pair: "BTC/USD",
//     type: "SELL",
//     price: "0.00056",
//     amount: "0.003456",
//     fee: "5.3424984",
//     profit: "5.3424984 USD",
//   },
// ];

// const TradingDashboard = () => {
//   const [side, setSide] = useState<"buy" | "sell" | "">("");
//   const [activeLeftTab, setActiveLeftTab] = useState("recent-trades");
//   const [activeBottomTab, setActiveBottomTab] = useState("active-orders");
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [leftPanelVisible, setLeftPanelVisible] = useState(!isMobile);
//   const [orderType, setOrderType] = useState("Limit");
//   const [activeMobileTab, setActiveMobileTab] = useState("Chart");
//   const [buyPrice, setBuyPrice] = useState("112,793.68");
//   const [sellPrice, setSellPrice] = useState("112,793.68");
//   const [buyAmount, setBuyAmount] = useState("");
//   const [sellAmount, setSellAmount] = useState("");
//   const [tpslEnabled, setTpslEnabled] = useState(false);
//   const [form, setShowBuyForm] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 1024;
//       setIsMobile(mobile);
//       if (!mobile) {
//         setLeftPanelVisible(true);
//       } else {
//         setLeftPanelVisible(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="h-full max-w-screen bg-[#0f1419] text-white pb-24 lg:pb-0">
//       {/* Top ticker bar */}
//       <Tradingview />

//       {/* Mobile header with pair + quick stats - IMPROVED */}
//       {isMobile && (
//         <div className="bg-[#181f2a] border-b border-gray-700 px-3 py-3 sticky top-0 z-30">
//           <div className="flex items-start justify-between gap-2">
//             <div className="min-w-0 flex-1">
//               <div className="text-sm text-gray-300 truncate">BTC/USDT</div>
//               <div className="text-xl font-bold text-red-400 leading-tight">
//                 112,305.16
//               </div>
//               <div className="text-xs text-red-400">-2.64%</div>
//             </div>
//             <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-300 min-w-[120px]">
//               <div className="text-gray-400 truncate">24h High</div>
//               <div className="text-right truncate">115,747.23</div>
//               <div className="text-gray-400 truncate">24h Low</div>
//               <div className="text-right truncate">111,800.00</div>
//               <div className="text-gray-400 truncate">24h Vol(BTC)</div>
//               <div className="text-right truncate">14,406.88</div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div
//         className={`flex flex-col lg:flex-row ${isMobile ? "min-h-screen" : "h-screen"}`}
//       >
//         {/* Left Panel - Markets - IMPROVED MOBILE LAYOUT */}
//         <div
//           className={`w-full lg:w-1/4 bg-[#181f2a] border-r border-gray-700 transition-all overflow-hidden ${
//             isMobile ? (leftPanelVisible ? "max-h-full" : "max-h-0") : ""
//           }`}
//         >
//           <div className="h-full flex flex-col">
//             {/* Currency filters - IMPROVED FOR MOBILE */}
//             <div className="p-3 border-b border-gray-700">
//               <div className="flex gap-1 text-xs mb-2 flex-wrap">
//                 <button className="px-2 py-1 rounded bg-emerald-700/20 text-xs">
//                   ★
//                 </button>
//                 {["USD", "BTC", "XRP", "EUR"].map((currency) => (
//                   <button
//                     key={currency}
//                     onClick={() => setSelectedCurrency(currency)}
//                     className={`px-2 py-1 rounded text-xs ${
//                       selectedCurrency === currency
//                         ? "bg-emerald-700/20"
//                         : "hover:bg-emerald-700/10"
//                     }`}
//                   >
//                     {currency}
//                   </button>
//                 ))}
//               </div>

//               {/* Search - IMPROVED */}
//               <div className="flex items-center bg-[#222c3c] rounded px-2 py-1.5 mb-2">
//                 <span className="mr-1 text-gray-400 text-xs">🔍</span>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="outline-none bg-transparent text-xs text-gray-100 w-full placeholder:text-xs"
//                 />
//               </div>

//               {/* Toggle options */}
//               <div className="flex items-center gap-3 text-xs">
//                 <label className="flex items-center gap-1 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="viewType"
//                     defaultChecked
//                     className="accent-emerald-500 w-3 h-3"
//                   />
//                   Change
//                 </label>
//                 <label className="flex items-center gap-1 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="viewType"
//                     className="accent-emerald-500 w-3 h-3"
//                   />
//                   24h Vol
//                 </label>
//               </div>
//             </div>

//             {/* Markets table - IMPROVED SCROLLING */}
//             <div className="overflow-y-auto flex-1">
//               <table className="w-full text-xs">
//                 <thead className="sticky top-0 bg-[#181f2a] z-10">
//                   <tr className="text-gray-400 border-b border-gray-700">
//                     <th className="py-2 px-2 text-left">Coin</th>
//                     <th className="py-2 px-2 text-right">Price</th>
//                     <th className="py-2 px-2 text-right">Change</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {markets.map((market, i) => (
//                     <tr
//                       key={i}
//                       className="hover:bg-[#222c3c] transition border-b border-gray-800"
//                     >
//                       <td className="py-2 px-2">
//                         <div className="flex items-center gap-1">
//                           <span className="text-xs">★</span>
//                           <span className="font-medium truncate text-xs">
//                             {market.symbol}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="py-2 px-2 text-right font-mono text-xs">
//                         {market.price}
//                       </td>
//                       <td
//                         className={`py-2 px-2 text-right font-mono text-xs ${
//                           market.change.startsWith("+")
//                             ? "text-emerald-400"
//                             : "text-red-400"
//                         }`}
//                       >
//                         {market.change}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Recent Trades / Market Depth tabs - IMPROVED */}
//             <div className="border-t border-gray-700">
//               <div className="flex">
//                 <button
//                   className={`flex-1 py-2 px-2 text-xs ${
//                     activeLeftTab === "recent-trades"
//                       ? "border-b-2 border-emerald-400 text-white"
//                       : "text-gray-400"
//                   }`}
//                   onClick={() => setActiveLeftTab("recent-trades")}
//                 >
//                   Recent Trades
//                 </button>
//                 <button
//                   className={`flex-1 py-2 px-2 text-xs ${
//                     activeLeftTab === "market-depth"
//                       ? "border-b-2 border-emerald-400 text-white"
//                       : "text-gray-400"
//                   }`}
//                   onClick={() => setActiveLeftTab("market-depth")}
//                 >
//                   Market Depth
//                 </button>
//               </div>

//               <div className="h-40 overflow-y-auto">
//                 {activeLeftTab === "recent-trades" && (
//                   <table className="w-full text-xs">
//                     <thead className="sticky top-0 bg-[#181f2a]">
//                       <tr className="text-gray-400">
//                         <th className="py-1 px-1 text-left text-xs">
//                           Price(BTC)
//                         </th>
//                         <th className="py-1 px-1 text-right text-xs">
//                           Amount(USD)
//                         </th>
//                         <th className="py-1 px-1 text-right text-xs">Time</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {recentTrades.map((trade, i) => (
//                         <tr key={i} className="hover:bg-[#222c3c] transition">
//                           <td className="py-1 px-1 text-emerald-400 font-mono text-xs">
//                             {trade.price}
//                           </td>
//                           <td className="py-1 px-1 text-right font-mono text-xs">
//                             {trade.amount}
//                           </td>
//                           <td className="py-1 px-1 text-right text-gray-400 text-xs">
//                             {trade.time}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 )}

//                 {activeLeftTab === "market-depth" && (
//                   <div className="p-3 text-gray-400 text-xs text-center">
//                     Market depth content here
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Center Panel - Chart and Price Info - SIGNIFICANTLY IMPROVED */}
//         <div className="flex-1 flex flex-col min-h-0">
//           {/* Price info header - DESKTOP ONLY */}
//           {!isMobile && (
//             <div className="bg-[#181f2a] p-4 border-b border-gray-700">
//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div className="flex items-center gap-6">
//                   <div>
//                     <h1 className="text-2xl font-bold text-emerald-400">
//                       BTC 94,415.42
//                     </h1>
//                     <div className="flex items-center gap-2 text-sm">
//                       <span className="text-emerald-400">
//                         ↗ +1.77% (168.36)
//                       </span>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-sm">
//                     <div>
//                       <p className="text-gray-400 text-xs">24H HIGH</p>
//                       <p className="font-mono">9,191.00</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-xs">24H LOW</p>
//                       <p className="font-mono">9,024.67</p>
//                     </div>
//                     <div className="col-span-2 lg:col-span-1">
//                       <p className="text-gray-400 text-xs">24H VOLUME</p>
//                       <p className="font-mono text-red-400">
//                         353,743,185.29 USD
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Center content: mobile tabs or desktop chart - IMPROVED */}
//           {isMobile ? (
//             <>
//               {/* Mobile tabs - IMPROVED SCROLLING */}
//               <div className="bg-[#181f2a] border-b border-gray-700 overflow-x-auto">
//                 <div className="flex text-sm min-w-max">
//                   {[
//                     "Chart",
//                     "Order Book",
//                     "Trades",
//                     "Info",
//                     "Trading Data",
//                   ].map((t) => (
//                     <button
//                       key={t}
//                       className={`px-4 py-3 whitespace-nowrap flex-shrink-0 ${
//                         activeMobileTab === t
//                           ? "border-b-2 border-emerald-400 text-white"
//                           : "text-gray-400"
//                       }`}
//                       onClick={() => setActiveMobileTab(t)}
//                     >
//                       {t}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Mobile tab panels - IMPROVED LAYOUT */}
//               <div className="flex-1 min-h-[300px] bg-[#0f1419] overflow-hidden">
//                 {activeMobileTab === "Chart" && (
//                   <div className="w-full h-full bg-[#181f2a]">
//                     <TradingViewEmbed />
//                   </div>
//                 )}

//                 {activeMobileTab === "Order Book" && (
//                   <div className="w-full h-full bg-[#181f2a] p-3 overflow-auto">
//                     <div className="space-y-1">
//                       <div className="grid grid-cols-3 text-xs text-gray-400 mb-2 font-medium gap-2">
//                         <span className="truncate">Price (USDT)</span>
//                         <span className="text-right truncate">
//                           Amount (BTC)
//                         </span>
//                         <span className="text-right truncate">Total</span>
//                       </div>
//                       <div className="space-y-1">
//                         {orderBookData
//                           .slice()
//                           .reverse()
//                           .map((item, i) => (
//                             <div
//                               key={i}
//                               className="grid grid-cols-3 text-xs hover:bg-red-500/10 transition p-1 rounded gap-2"
//                             >
//                               <span className="text-red-400 font-mono truncate text-xs">
//                                 {item.price}
//                               </span>
//                               <span className="text-right font-mono text-gray-300 truncate text-xs">
//                                 {item.amount}
//                               </span>
//                               <span className="text-right font-mono text-gray-400 truncate text-xs">
//                                 {item.volume}
//                               </span>
//                             </div>
//                           ))}
//                       </div>
//                       <div className="text-center font-mono text-base font-bold text-red-400 py-2 border-y border-gray-700 my-2">
//                         112,344.75 ↓
//                       </div>
//                       <div className="space-y-1">
//                         {orderBookData.map((item, i) => (
//                           <div
//                             key={i}
//                             className="grid grid-cols-3 text-xs hover:bg-emerald-500/10 transition p-1 rounded gap-2"
//                           >
//                             <span className="text-emerald-400 font-mono truncate text-xs">
//                               {item.price}
//                             </span>
//                             <span className="text-right font-mono text-gray-300 truncate text-xs">
//                               {item.amount}
//                             </span>
//                             <span className="text-right font-mono text-gray-400 truncate text-xs">
//                               {item.volume}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {activeMobileTab === "Trades" && (
//                   <div className="w-full h-full bg-[#181f2a] p-3 overflow-auto">
//                     <div className="grid grid-cols-3 text-xs text-gray-400 mb-2 gap-2">
//                       <span className="truncate">Price (USDT)</span>
//                       <span className="text-right truncate">Amount (BTC)</span>
//                       <span className="text-right truncate">Time</span>
//                     </div>
//                     <div className="space-y-1">
//                       {marketTrades.map((trade, i) => (
//                         <div
//                           key={i}
//                           className="grid grid-cols-3 text-xs hover:bg-[#222c3c] transition p-1 rounded gap-2"
//                         >
//                           <span className="text-emerald-400 font-mono truncate text-xs">
//                             {trade.price}
//                           </span>
//                           <span className="text-right font-mono truncate text-xs">
//                             {trade.amount}
//                           </span>
//                           <span className="text-right text-gray-400 truncate text-xs">
//                             {trade.time}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {(activeMobileTab === "Info" ||
//                   activeMobileTab === "Trading Data") && (
//                   <div className="w-full h-full bg-[#181f2a] flex items-center justify-center p-4">
//                     <div className="text-sm text-gray-400 text-center">
//                       Coming soon
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </>
//           ) : (
//             <div className="flex-1 min-h-0 p-2 lg:p-4 bg-[#0f1419]">
//               <div className="w-full h-full bg-[#181f2a] rounded overflow-hidden">
//                 <TradingViewEmbed />
//               </div>
//             </div>
//           )}

//           {/* Bottom panel - Orders - IMPROVED FOR MOBILE */}
//           <div className="bg-[#181f2a] border-t border-gray-700 flex-1 lg:flex-none lg:h-48">
//             <div className="flex border-b border-gray-700 overflow-x-auto">
//               {[
//                 "active-orders",
//                 "order-history",
//                 "trade-history",
//                 "funds",
//                 "bots",
//               ].map((tab) => (
//                 <button
//                   key={tab}
//                   className={`px-4 py-3 text-sm whitespace-nowrap flex-shrink-0 ${
//                     activeBottomTab === tab
//                       ? "border-b-2 border-emerald-400 text-white"
//                       : "text-gray-400"
//                   }`}
//                   onClick={() => setActiveBottomTab(tab)}
//                 >
//                   {tab.replace("-", " ").toUpperCase()}
//                 </button>
//               ))}
//             </div>

//             <div className="h-full overflow-auto">
//               {activeBottomTab === "active-orders" && (
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs min-w-[600px]">
//                     <thead className="sticky top-0 bg-[#181f2a]">
//                       <tr className="text-gray-400">
//                         <th className="py-2 px-2 text-left text-xs">Date</th>
//                         <th className="py-2 px-2 text-left text-xs">Pair</th>
//                         <th className="py-2 px-2 text-left text-xs">Type</th>
//                         <th className="py-2 px-2 text-left text-xs">Side</th>
//                         <th className="py-2 px-2 text-right text-xs">Price</th>
//                         <th className="py-2 px-2 text-right text-xs">Amount</th>
//                         <th className="py-2 px-2 text-right text-xs">Filled</th>
//                         <th className="py-2 px-2 text-right text-xs">Total</th>
//                         <th className="py-2 px-2 text-right text-xs">
//                           Trigger
//                         </th>
//                         <th className="py-2 px-2 text-right text-xs">SOR</th>
//                         <th className="py-2 px-2 text-right text-xs">TPSL</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {activeOrders.map((order, i) => (
//                         <tr
//                           key={i}
//                           className="hover:bg-[#222c3c] transition border-b border-gray-800"
//                         >
//                           <td className="py-2 px-2 text-xs">{order.date}</td>
//                           <td className="py-2 px-2 text-xs">{order.pair}</td>
//                           <td className="py-2 px-2 text-xs">Limit</td>
//                           <td className="py-2 px-2">
//                             <span
//                               className={`px-2 py-1 rounded text-xs ${
//                                 order.type === "BUY"
//                                   ? "bg-emerald-700/20 text-emerald-400"
//                                   : "bg-red-700/20 text-red-400"
//                               }`}
//                             >
//                               {order.type}
//                             </span>
//                           </td>
//                           <td className="py-2 px-2 text-right font-mono text-xs">
//                             {order.price}
//                           </td>
//                           <td className="py-2 px-2 text-right font-mono text-xs">
//                             {order.amount}
//                           </td>
//                           <td className="py-2 px-2 text-right font-mono text-xs">
//                             -
//                           </td>
//                           <td className="py-2 px-2 text-right font-mono text-xs">
//                             {order.profit}
//                           </td>
//                           <td className="py-2 px-2 text-right text-xs">-</td>
//                           <td className="py-2 px-2 text-right text-xs">-</td>
//                           <td className="py-2 px-2 text-right text-xs">-</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}

//               {activeBottomTab === "order-history" && (
//                 <div className="p-4 text-gray-400 text-sm">
//                   Order history content
//                 </div>
//               )}

//               {activeBottomTab === "trade-history" && (
//                 <div className="p-4 text-gray-400 text-sm">
//                   Trade history content
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Panel - Order Book + Trading Form - DESKTOP ONLY */}
//         {!isMobile && (
//           <div className="w-full lg:w-1/3 xl:w-1/4 bg-[#181f2a] border-l border-gray-700 overflow-hidden">
//             <div className="h-full flex flex-col">
//               {/* Order Book Section */}
//               <div className="flex-shrink-0 border-b border-gray-700">
//                 <div className="p-4 border-b border-gray-700">
//                   <h3 className="text-sm font-medium mb-3 flex items-center justify-between">
//                     Order Book
//                     <span className="text-xs text-gray-400">⚙️</span>
//                   </h3>

//                   <div className="space-y-1">
//                     <div className="grid grid-cols-3 text-xs text-gray-400 mb-2 font-medium">
//                       <span>Price (USDT)</span>
//                       <span className="text-right">Amount (BTC)</span>
//                       <span className="text-right">Total</span>
//                     </div>

//                     <div className="space-y-1 max-h-32 overflow-y-auto">
//                       {orderBookData
//                         .slice()
//                         .reverse()
//                         .map((item, i) => (
//                           <div
//                             key={i}
//                             className="grid grid-cols-3 text-xs hover:bg-red-500/10 transition p-1 rounded"
//                           >
//                             <span className="text-red-400 font-mono text-xs">
//                               {item.price}
//                             </span>
//                             <span className="text-right font-mono text-gray-300 text-xs">
//                               {item.amount}
//                             </span>
//                             <span className="text-right font-mono text-gray-400 text-xs">
//                               {item.volume}
//                             </span>
//                           </div>
//                         ))}
//                     </div>

//                     <div className="text-center font-mono text-lg font-bold text-red-400 py-2 border-y border-gray-700">
//                       112,344.75 ↓ $112,344.75
//                     </div>

//                     <div className="space-y-1 max-h-28 overflow-y-auto">
//                       {orderBookData.map((item, i) => (
//                         <div
//                           key={i}
//                           className="grid grid-cols-3 text-xs hover:bg-emerald-500/10 transition p-1 rounded"
//                         >
//                           <span className="text-emerald-400 font-mono text-xs">
//                             {item.price}
//                           </span>
//                           <span className="text-right font-mono text-gray-300 text-xs">
//                             {item.amount}
//                           </span>
//                           <span className="text-right font-mono text-gray-400 text-xs">
//                             {item.volume}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Trading Form Section */}
//               <div className="flex-1 overflow-y-auto p-4">
//                 {/* Order type tabs */}
//                 <div className="flex mb-4 text-sm">
//                   {["Spot", "Cross", "Isolated", "Grid"].map((type) => (
//                     <button
//                       key={type}
//                       className={`px-3 py-1 ${type === "Spot" ? "text-white" : "text-gray-400"}`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Order type selector */}
//                 <div className="flex mb-4 bg-[#222c3c] rounded p-1">
//                   {["Limit", "Market", "Stop Limit"].map((type) => (
//                     <button
//                       key={type}
//                       onClick={() => setOrderType(type)}
//                       className={`flex-1 py-2 px-3 text-xs rounded ${
//                         orderType === type
//                           ? "bg-[#181f2a] text-white"
//                           : "text-gray-400"
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Buy/Sell Forms */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {/* Buy Form */}
//                   <div className="space-y-3">
//                     <div>
//                       <label className="block text-xs text-gray-400 mb-1">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         value={buyPrice}
//                         onChange={(e) => setBuyPrice(e.target.value)}
//                         className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
//                         placeholder="112,793.68 USDT"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs text-gray-400 mb-1">
//                         Amount
//                       </label>
//                       <input
//                         type="text"
//                         value={buyAmount}
//                         onChange={(e) => setBuyAmount(e.target.value)}
//                         className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
//                         placeholder="BTC"
//                       />
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         id="tpsl-buy"
//                         checked={tpslEnabled}
//                         onChange={(e) => setTpslEnabled(e.target.checked)}
//                         className="accent-emerald-500"
//                       />
//                       <label
//                         htmlFor="tpsl-buy"
//                         className="text-xs text-gray-400"
//                       >
//                         TPSL
//                       </label>
//                     </div>

//                     <div className="space-y-1 text-xs text-gray-400">
//                       <div>Avbl: 0.00000000 USDT ⓘ</div>
//                       <div>Max Buy: 0 BTC</div>
//                       <div>Est. Fee: -</div>
//                     </div>

//                     <div className="border-t border-gray-700 pt-2">
//                       <div className="text-xs text-gray-400 mb-1">Total</div>
//                       <div className="text-sm">Minimum 5 USDT</div>
//                     </div>

//                     <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded font-medium transition">
//                       Buy BTC
//                     </button>
//                   </div>

//                   {/* Sell Form */}
//                   <div className="space-y-3">
//                     <div>
//                       <label className="block text-xs text-gray-400 mb-1">
//                         Price
//                       </label>
//                       <input
//                         type="text"
//                         value={sellPrice}
//                         onChange={(e) => setSellPrice(e.target.value)}
//                         className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
//                         placeholder="112,793.68 USDT"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs text-gray-400 mb-1">
//                         Amount
//                       </label>
//                       <input
//                         type="text"
//                         value={sellAmount}
//                         onChange={(e) => setSellAmount(e.target.value)}
//                         className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
//                         placeholder="BTC"
//                       />
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         id="tpsl-sell"
//                         checked={tpslEnabled}
//                         onChange={(e) => setTpslEnabled(e.target.checked)}
//                         className="accent-red-500"
//                       />
//                       <label
//                         htmlFor="tpsl-sell"
//                         className="text-xs text-gray-400"
//                       >
//                         TPSL
//                       </label>
//                     </div>

//                     <div className="space-y-1 text-xs text-gray-400">
//                       <div>Avbl: 0 BTC ⓘ</div>
//                       <div>Max Sell: 0 USDT</div>
//                       <div>Est. Fee: -</div>
//                     </div>

//                     <div className="border-t border-gray-700 pt-2">
//                       <div className="text-xs text-gray-400 mb-1">Total</div>
//                       <div className="text-sm">Minimum 5 USDT</div>
//                     </div>

//                     <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition">
//                       Sell BTC
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-4 p-3 bg-[#222c3c] rounded">
//                   <div className="text-xs text-gray-400 space-y-1">
//                     <div>Amount per Iceberg Order: -</div>
//                     <div>Recurring: ✓ Buy with INR</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {isMobile && (
//         <>
//           {side != "" && (
//             <>
//               {/* Background Overlay */}
//               <div
//                 className="fixed inset-0 bg-black/60 z-40"
//                 onClick={() => setShowBuyForm(false)}
//               />

//               {/* Sliding Drawer */}
//               <div
//                 className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
//                   form ? "translate-y-0" : "translate-y-full"
//                 }`}
//               >
//                 <div className="bg-[#181a20] border-t border-gray-700 rounded-t-2xl p-4 shadow-2xl max-h-[85vh] overflow-y-auto">
//                   {/* Header with Close */}
//                   <div className="flex justify-between items-center mb-3">
//                     <h2 className="text-lg font-semibold">{side.toUpperCase()} Order </h2>
//                     <button
//                       onClick={() => {
//                         setShowBuyForm(false);
//                         setSide("");
//                       }}
//                     >
//                       ✕
//                     </button>
//                   </div>

//                   {/* Actual Form */}
//                   <SpotOrderForm side={side} setSide={setSide} />
//                 </div>
//               </div>
//             </>
//           )}

//           {/* Fixed Bottom Buttons */}
//           <div className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-3 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/95">
//             <div className="flex gap-3">
//               <button
//                 className="flex-1 bg-emerald-600 hover:bg-emerald-700 py-3 rounded font-medium transition shadow-lg text-sm"
//                 onClick={() => {
//                   setSide("buy");
//                   setShowBuyForm(true);
//                 }}
//               >
//                 Buy
//               </button>
//               <button
//                 className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded font-medium transition shadow-lg text-sm"
//                 onClick={() => {
//                   setSide("sell");
//                   setShowBuyForm(true);
//                 }}
//               >
//                 SELL
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TradingDashboard;
