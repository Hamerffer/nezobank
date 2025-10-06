import React, { useState } from "react";
type SpotOrderFormProps = {
  side: "buy" | "sell"
  setSide: (side: "buy" | "sell") => void
}
const SpotOrderForm: React.FC<SpotOrderFormProps> = ({ side, setSide }) => {
  // const [side, setSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState("Limit");

  return (
    <div className="max-w-screen bg-[#181a20] text-gray-300 rounded-lg shadow-lg border border-gray-700">
      {/* Tabs - Spot / Cross / Isolated */}
      <div className="flex text-sm border-b border-gray-700">
        {["Spot", "Cross", "Isolated"].map((tab) => (
          <button
            key={tab}
            className="flex-1 px-3 py-2 text-center hover:text-white"
          >
            {tab}
          </button>
        ))}
        <button className="px-3">×</button>
      </div>

      {/* Buy / Sell Toggle */}
      <div className="flex text-sm border-b border-gray-700">
        <button
          onClick={() => setSide("buy")}
          className={`flex-1 px-4 py-2 text-center ${
            side === "buy"
              ? "bg-[#0ecb81] text-black font-semibold"
              : "hover:text-white"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSide("sell")}
          className={`flex-1 px-4 py-2 text-center ${
            side === "sell"
              ? "bg-[#f6465d] text-black font-semibold"
              : "hover:text-white"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Order Types */}
      <div className="flex gap-4 px-4 py-2 border-b border-gray-700 text-sm">
        {["Limit", "Market", "Stop Limit"].map((type) => (
          <button
            key={type}
            onClick={() => setOrderType(type)}
            className={`${orderType === type ? "text-white" : "text-gray-400"} hover:text-white`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="px-4 py-3 space-y-3 text-sm">
        {/* Price */}
        <div>
          <label className="flex justify-between mb-1">
            <span>Price</span>
            <span>USDT</span>
          </label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full bg-[#0b0e11] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="flex justify-between mb-1">
            <span>Amount</span>
            <span>NEAR</span>
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-full bg-[#0b0e11] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        {/* Total */}
        <div>
          <label className="flex justify-between mb-1">
            <span>Total</span>
            <span>USDT</span>
          </label>
          <input
            type="text"
            placeholder="Minimum 5"
            disabled
            className="w-full bg-[#0b0e11] border border-gray-700 rounded-md px-3 py-2 text-gray-500"
          />
        </div>

        {/* Options */}
        <div className="space-y-1">
          {["TP/SL", "Post Only", "Iceberg"].map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        {/* Balance Info */}
        <div className="flex justify-between text-xs text-gray-500">
          <span>Avbl</span>
          <span>0.00000000 USDT · 0 NEAR</span>
        </div>

        {/* Submit */}
        <button
          className={`w-full py-2 rounded-md font-semibold text-black ${
            side === "buy" ? "bg-[#0ecb81]" : "bg-[#f6465d]"
          }`}
        >
          {side === "buy" ? "Buy NEAR" : "Sell NEAR"}
        </button>

        {/* Footer */}
        <div className="text-xs text-gray-500 mt-2">
          <p>% Fee Level</p>
          <div className="flex gap-4 justify-center mt-2">
            <a href="#" className="hover:text-white">
              Announcements
            </a>
            <a href="#" className="hover:text-white">
              Cookie Preference
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotOrderForm;
