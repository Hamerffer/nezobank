import React, { useState } from "react";

const currencies = [
  { code: "INR", symbol: "₹", inrValue: 1 },
  { code: "USD", symbol: "$", inrValue: 83 },
  { code: "USDT", symbol: "₮", inrValue: 83 },
  { code: "BTC", symbol: "₿", inrValue: 5700000 },
];

const paymentMethods = [
  "UPI",
  "IMPS",
  "Bank Transfer",
  "PhonePe",
  "Google Pay",
  "Paytm Wallet",
];

const TradeBox: React.FC = () => {
  const [tab, setTab] = useState<"buy" | "sell">("buy");
  const [spend, setSpend] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const getConversion = () => {
    const from = currencies.find((c) => c.code === fromCurrency);
    const to = currencies.find((c) => c.code === toCurrency);
    if (!from || !to || !spend) return "";
    const result = (parseFloat(spend) * (from.inrValue / to.inrValue)).toFixed(
      6
    );
    return result;
  };

  return (
    <div className="w-full py-6 px-4 sm:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">
        {/* Left Side */}
        <div className="bg-white/5 backdrop-blur-lg border rounded-2xl p-4 sm:p-6 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold paragraph-variable mb-3">
            One-Click {tab === "buy" ? "Buy" : "Sell"} {toCurrency} with{" "}
            {fromCurrency}
          </h2>
          <p className="paragraph-variable  text-responsive">
            Trade seamlessly with P2P and multiple payment options.
          </p>
          <div className=" h-fit mt-5 ">
            <img
              src="/images/oneclickbuy.jpg"
              alt="Multiple payment options"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Side - Trade Box */}
        <div className="bg-white/5 backdrop-blur-lg border rounded-2xl p-4 sm:p-6 shadow-lg">
          {/* Tabs */}
          <div className="flex mb-4 sm:mb-6 border-b border-gray-600">
            <button
              onClick={() => setTab("buy")}
              className={`flex-1 py-2 text-base sm:text-lg font-semibold ${
                tab === "buy"
                  ? "text-greenish border-b-2 border-emerald-400"
                  : "paragraph-variable"
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setTab("sell")}
              className={`flex-1 py-2 text-base sm:text-lg font-semibold  ${
                tab === "sell"
                  ? "text-rose-600 border-b-2 border-rose-600"
                  : "paragraph-variable"
              }`}
            >
              Sell
            </button>
          </div>

          {/* Spend */}
          <div className="mb-3 sm:mb-4">
            <label className="block paragraph-variable mb-1 sm:mb-2 text-responsive sm:text-base">
              Spend
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-600 rounded-lg bg-white/10">
              <input
                type="number"
                value={spend}
                onChange={(e) => setSpend(e.target.value)}
                placeholder="Enter amount"
                className="flex-1 p-2 sm:p-3 bg-transparent paragraph-variable placeholder-gray-400 outline-none rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="p-2 sm:p-3 bg-white/20 paragraph-variable outline-none rounded-b-lg sm:rounded-b-none sm:rounded-r-lg mt-2 sm:mt-0"
              >
                {currencies.map((c) => (
                  <option
                    key={c.code}
                    value={c.code}
                    className="dark:bg-gray-900 paragraph-variable"
                  >
                    {c.symbol} {c.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Receive */}
          <div className="mb-3 sm:mb-4">
            <label className="block paragraph-variable mb-1 sm:mb-2 text-responsive sm:text-base">
              Receive ≈
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-600 rounded-lg bg-white/10">
              <input
                type="text"
                value={getConversion()}
                readOnly
                placeholder="0.00"
                className="flex-1 p-2 sm:p-3 bg-transparent paragraph-variable placeholder-gray-400 outline-none rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
              />
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="p-2 sm:p-3 bg-white/20 paragraph-variable outline-none rounded-b-lg sm:rounded-b-none sm:rounded-r-lg mt-2 sm:mt-0"
              >
                {currencies.map((c) => (
                  <option
                    key={c.code}
                    value={c.code}
                    className="dark:bg-gray-900 paragraph-variable"
                  >
                    {c.symbol} {c.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label className="block paragraph-variable mb-1 sm:mb-2 text-responsive sm:text-base">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-white/20 paragraph-variable outline-none"
            >
              {paymentMethods.map((method) => (
                <option
                  key={method}
                  value={method}
                  className="dark:bg-gray-900 paragraph-variable"
                >
                  {method}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            className={`w-full py-2 sm:py-3 rounded-lg   text-black font-semibold shadow text-responsive sm:text-base ${tab === "buy" ? "bg-emerald-400" : "bg-rose-700"}`}
          >
            {tab === "buy" ? `Buy ${toCurrency}` : `Sell ${fromCurrency}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeBox;
