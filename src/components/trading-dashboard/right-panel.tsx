import React from "react";

interface RightPanelProps {
  orderType: string;
  setOrderType: (type: string) => void;
  buyPrice: string;
  setBuyPrice: (price: string) => void;
  sellPrice: string;
  setSellPrice: (price: string) => void;
  buyAmount: string;
  setBuyAmount: (amount: string) => void;
  sellAmount: string;
  setSellAmount: (amount: string) => void;
  tpslEnabled: boolean;
  setTpslEnabled: (enabled: boolean) => void;
}

const orderBookData = [
  { price: "112,348.71", amount: "0.65960", volume: "74.10K" },
  { price: "112,349.70", amount: "0.58869", volume: "66.13K" },
  { price: "112,349.69", amount: "0.00010", volume: "11.23456" },
  { price: "112,349.95", amount: "0.21690", volume: "24.28K" },
  { price: "112,349.35", amount: "0.00010", volume: "11.23493" },
  { price: "112,348.71", amount: "0.65960", volume: "74.10K" },
  { price: "112,349.70", amount: "0.58869", volume: "66.13K" },
  { price: "112,349.69", amount: "0.00010", volume: "11.23456" },
  { price: "112,349.95", amount: "0.21690", volume: "24.28K" },
  { price: "112,349.35", amount: "0.00010", volume: "11.23493" },
];

const RightPanel: React.FC<RightPanelProps> = ({
  orderType,
  setOrderType,
  buyPrice,
  setBuyPrice,
  sellPrice,
  setSellPrice,
  buyAmount,
  setBuyAmount,
  sellAmount,
  setSellAmount,
  tpslEnabled,
  setTpslEnabled,
}) => {
  return (
    <div className="w-full lg:w-1/3 xl:w-1/4  bg-[#181f2a] border-l border-gray-700 flex flex-col   ">
      {/* Order Book Section */}
      <div className="flex-1 flex flex-col min-h-0 border-b border-gray-700">
        <div className="p-4 flex flex-col flex-1 min-h-0 overflow-y-auto">
          <h3 className="text-sm font-medium mb-3 flex items-center justify-between">
            Order Book
            <span className="text-xs text-gray-400">⚙️</span>
          </h3>

          {/* Header */}
          <div className="grid grid-cols-3 text-xs text-gray-400 mb-2 font-medium">
            <span>Price (USDT)</span>
            <span className="text-right">Amount (BTC)</span>
            <span className="text-right">Total</span>
          </div>

          {/* Sell Orders */}
          <div className="flex-1 overflow-y-auto space-y-1 scroll-hidden">
            {orderBookData
              .slice()
              .reverse()
              .map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-xs hover:bg-red-500/10 transition p-1 rounded"
                >
                  <span className="text-red-400 font-mono">{item.price}</span>
                  <span className="text-right font-mono text-gray-300">
                    {item.amount}
                  </span>
                  <span className="text-right font-mono text-gray-400">
                    {item.volume}
                  </span>
                </div>
              ))}
          </div>

          {/* Mid Price */}
          <div className="text-center font-mono text-lg font-bold text-red-400 py-2 border-y border-gray-700 my-2">
            112,344.75 ↓ $112,344.75
          </div>

          {/* Buy Orders */}
          <div className="flex-1 overflow-y-auto space-y-1 scroll-hidden">
            {orderBookData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 text-xs hover:bg-emerald-500/10 transition p-1 rounded  "
              >
                <span className="text-emerald-400 font-mono">{item.price}</span>
                <span className="text-right font-mono text-gray-300">
                  {item.amount}
                </span>
                <span className="text-right font-mono text-gray-400">
                  {item.volume}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trading Form Section */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto p-4">
        {/* Order Type Tabs */}
        <div className="flex mb-4 text-sm">
          {["Spot", "Cross", "Isolated", "Grid"].map((type) => (
            <button
              key={type}
              className={`px-3 py-1 ${type === "Spot" ? "text-white" : "text-gray-400"}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Order Type Selector */}
        <div className="flex mb-4 bg-[#222c3c] rounded p-1">
          {["Limit", "Market", "Stop Limit"].map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`flex-1 py-2 px-3 text-xs rounded ${
                orderType === type ? "bg-[#181f2a] text-white" : "text-gray-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Buy/Sell Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto ">
          {/* Buy Form */}
          <div className="flex flex-col h-full justify-between space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Price
                </label>
                <input
                  type="text"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                  className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
                  placeholder="112,793.68 USDT"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Amount
                </label>
                <input
                  type="text"
                  value={buyAmount}
                  onChange={(e) => setBuyAmount(e.target.value)}
                  className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
                  placeholder="BTC"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="tpsl-buy"
                  checked={tpslEnabled}
                  onChange={(e) => setTpslEnabled(e.target.checked)}
                  className="accent-emerald-500"
                />
                <label htmlFor="tpsl-buy" className="text-xs text-gray-400">
                  TPSL
                </label>
              </div>

              <div className="space-y-1 text-xs text-gray-400">
                <div>Avbl: 0.00000000 USDT ⓘ</div>
                <div>Max Buy: 0 BTC</div>
                <div>Est. Fee: -</div>
              </div>

              <div className="border-t border-gray-700 pt-2">
                <div className="text-xs text-gray-400 mb-1">Total</div>
                <div className="text-sm">Minimum 5 USDT</div>
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded font-medium transition mt-2">
              Buy BTC
            </button>
          </div>

          {/* Sell Form */}
          <div className="flex flex-col h-full justify-between space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Price
                </label>
                <input
                  type="text"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                  className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
                  placeholder="112,793.68 USDT"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Amount
                </label>
                <input
                  type="text"
                  value={sellAmount}
                  onChange={(e) => setSellAmount(e.target.value)}
                  className="w-full bg-[#222c3c] border border-gray-600 rounded px-3 py-2 text-sm"
                  placeholder="BTC"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="tpsl-sell"
                  checked={tpslEnabled}
                  onChange={(e) => setTpslEnabled(e.target.checked)}
                  className="accent-emerald-500"
                />
                <label htmlFor="tpsl-sell" className="text-xs text-gray-400">
                  TPSL
                </label>
              </div>

              <div className="space-y-1 text-xs text-gray-400">
                <div>Avbl: 0.0 USDT ⓘ</div>
                <div>Max Sell: 0 BTC</div>
                <div>Est. Fee: -</div>
              </div>

              <div className="border-t border-gray-700 pt-2">
                <div className="text-xs text-gray-400 mb-1">Total</div>
                <div className="text-sm">Minimum 5 USDT</div>
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition ">
              Sell BTC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
