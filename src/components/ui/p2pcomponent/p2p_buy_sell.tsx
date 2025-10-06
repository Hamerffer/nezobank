import React, { useState, useEffect } from "react";

interface Ad {
  advertiser: string;
  orders: string;
  time: string;
  price: number;
  available: string;
  limits: string;
  payment: string;
  currency: string;
  crypto: string;
}

const P2P_buy_sell: React.FC = () => {
  const [, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("buy");
  const [filterAmount, setFilterAmount] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [crypto, setCrypto] = useState("USDT");
  const [filteredAds, setFilteredAds] = useState<Ad[]>([]);

  const currencies = ["INR", "HKD", "MYR", "VND", "PHP", "RUB", "UAH", "AUD"];
  const cryptos = [
    "USDT",
    "BTC",
    "ETH",
    "USDC",
    "TRUMP",
    "SOL",
    "SUI",
    "MNT",
    "XRP",
  ];

  const paymentMethods = [
    "Google Pay",
    "PhonePe",
    "Bank Transfer",
    "Paytm",
    "FPS",
    "Opay",
    "Canara Bank",
    "Airtel Payments Bank",
    "MobiKwik",
    "Bank transfer (Local)",
    "IMPS",
    "UPI",
    "Digital eRupee",
    "Cash Deposit to Bank",
  ];

  const ads: Ad[] = [
    {
      advertiser: "S, sonu990",
      orders: "133 Order(s) | 95%",
      time: "Ø30Min(s)",
      price: 93.65,
      available: "27,466.5780 USDT",
      limits: "9,000.00 ~ 50,000.00 INR",
      payment: "Digital eRupee",
      currency: "INR",
      crypto: "USDT",
    },
    {
      advertiser: "A, ADITYA",
      orders: "585 Order(s) | 99%",
      time: "Ø30Min(s)",
      price: 93.6,
      available: "30.6593 USDT",
      limits: "100.00 ~ 2,728.98 INR",
      payment: "PhonePe",
      currency: "INR",
      crypto: "USDT",
    },
    {
      advertiser: "R. Rupall_9575",
      orders: "180 Order(s) | 92%",
      time: "Ø15Min(s)",
      price: 93.55,
      available: "2.00000000 BTC",
      limits: "3,500.00 – 90,000.00 INR",
      payment: "IMPS",
      currency: "INR",
      crypto: "BTC",
    },
    {
      advertiser: "P. plyush1855",
      orders: "88 Order(s) | 91%",
      time: "Ø15Min(s)",
      price: 93.5,
      available: "0.99625568 BTC",
      limits: "500.00 – 50,000.00 INR",
      payment: "IMPS | UPI | Google Pay",
      currency: "INR",
      crypto: "BTC",
    },
    {
      advertiser: "A. Anshu",
      orders: "3 Order(s) | 100%",
      time: "Ø30Min(s)",
      price: 93.45,
      available: "0.03500000 BTC",
      limits: "1,600.00 – 300,000.00 INR",
      payment: "IMPS | Cash Deposit to Bank",
      currency: "INR",
      crypto: "BTC",
    },
    {
      advertiser: "S. Safi all khan",
      orders: "384 Order(s) | 90%",
      time: "Ø15Min(s)",
      price: 93.4,
      available: "2.00000000 BTC",
      limits: "4,000.00 – 2,000,000.00 INR",
      payment: "UPI",
      currency: "INR",
      crypto: "BTC",
    },
    // HKD examples
    {
      advertiser: "HKD Trader",
      orders: "45 Order(s) | 98%",
      time: "Ø20Min(s)",
      price: 7.8,
      available: "5,000.0000 USDT",
      limits: "1,000.00 ~ 10,000.00 HKD",
      payment: "FPS",
      currency: "HKD",
      crypto: "USDT",
    },
    {
      advertiser: "HK Bitcoin Seller",
      orders: "120 Order(s) | 97%",
      time: "Ø25Min(s)",
      price: 285000,
      available: "0.50000000 BTC",
      limits: "10,000.00 – 100,000.00 HKD",
      payment: "Bank transfer (Local)",
      currency: "HKD",
      crypto: "BTC",
    },
    // AUD examples
    {
      advertiser: "AUS Crypto",
      orders: "200 Order(s) | 99%",
      time: "Ø15Min(s)",
      price: 1.5,
      available: "10,000.0000 USDT",
      limits: "100.00 ~ 5,000.00 AUD",
      payment: "Bank Transfer",
      currency: "AUD",
      crypto: "USDT",
    },
    // Other crypto examples
    {
      advertiser: "ETH Master",
      orders: "75 Order(s) | 96%",
      time: "Ø20Min(s)",
      price: 5800,
      available: "50.00000000 ETH",
      limits: "1,000.00 – 50,000.00 INR",
      payment: "IMPS",
      currency: "INR",
      crypto: "ETH",
    },
    {
      advertiser: "SOL Trader",
      orders: "32 Order(s) | 94%",
      time: "Ø30Min(s)",
      price: 120,
      available: "500.00000000 SOL",
      limits: "500.00 – 10,000.00 INR",
      payment: "UPI",
      currency: "INR",
      crypto: "SOL",
    },
  ];

  useEffect(() => {
    const filtered = ads.filter((ad) => {
      const currencyOk = ad.currency === currency;
      const cryptoOk = ad.crypto === crypto;
      const amountOk = filterAmount
        ? parseFloat(ad.price.toString()) <= parseFloat(filterAmount)
        : true;
      const paymentOk = paymentFilter
        ? ad.payment.toLowerCase().includes(paymentFilter.toLowerCase())
        : true;
      return currencyOk && cryptoOk && amountOk && paymentOk;
    });

    setFilteredAds(filtered);
  }, [currency, crypto, filterAmount, paymentFilter]);

  return (
    <section className="h-full shadow-xl max-w-7xl p-4 sm:p-6 lg:w-11/12 xl:w-10/12 mx-auto">
      {/* Header with Login */}
      <div className=" paragraph-variable p-4 rounded-t-lg mb-4 text-center sm:text-left">
        <h1 className="text-lg sm:text-xl font-bold text-greenish">
          Nezobank P2P
        </h1>
        <p className="text-sm sm:text-base">
          Complete tasks and win from 20,000 USDT!
        </p>
      </div>

      {/* Login Prompt */}
      <div className="dark:bg-gray-800/50 backdrop-blur-lg rounded-lg shadow-lg p-4 sm:p-6 text-center mb-6 border border-gray-700">
        <p className="text-base sm:text-lg font-semibold mb-4 paragraph-variable">
          Log in to check your eligibility for the discount of 10 USDT.
        </p>
        <button
          className="button-variable px-4 sm:px-6 py-2 rounded-lg text-black font-medium"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      </div>

      {/* Filters & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 flex-wrap">
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center dark:bg-gray-800/50 backdrop-blur-lg p-2 sm:p-4 rounded-lg shadow-lg border border-gray-700 w-full sm:w-auto">
          <div className="flex items-center">
            <span className="mr-1 sm:mr-2 font-medium paragraph-variable">
              {activeTab === "buy" ? "Buy" : "Sell"}
            </span>
            <select
              className="border dark:bg-black/80  paragraph-variable p-1 sm:p-2 rounded"
              value={crypto}
              onChange={(e) => setCrypto(e.target.value)}
            >
              {cryptos.map((curr) => (
                <option key={curr} value={curr} className="paragraph-variable">
                  {curr}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center ">
            <span className="mr-1 sm:mr-2 font-medium paragraph-variable">
              with
            </span>
            <select
              className="border dark:bg-black/80  paragraph-variable p-1 sm:p-2 rounded"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <span className="mr-1 sm:mr-2 font-medium paragraph-variable">
              Payment
            </span>
            <select
              className="border paragraph-variable dark:bg-black/80 p-1 sm:p-2 rounded w-36 sm:w-48"
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
            >
              <option value="">All</option>
              {paymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>

          <button
            className=" px-3 sm:px-4 py-1 sm:py-2 rounded paragraph-variable button-variable transition-colors"
            onClick={() => {
              setFilterAmount("");
              setPaymentFilter("");
            }}
          >
            Clear
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0 flex-wrap">
          <button
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "buy"
                ? "button-variable paragraph-variable shadow-lg"
                : " paragraph-variable hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("buy")}
          >
            Buy {crypto}
          </button>
          <button
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "sell"
                ? "bg-gradient-to-r from-red-400 to-red-600 paragraph-variable shadow-lg"
                : "paragraph-variable hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("sell")}
          >
            Sell {crypto}
          </button>
        </div>
      </div>

      {/* Ads Table */}
      <div className="dark:bg-gray-800/50 backdrop-blur-lg rounded-lg shadow-lg overflow-x-auto border border-gray-700">
        {filteredAds.length === 0 ? (
          <div className="p-4 sm:p-8 text-center">
            <p className="paragraph-variable text-sm sm:text-base">
              No ads found matching your criteria.
            </p>
            <button
              className="mt-2 button-variable sm:mt-4 -700 paragraph-variable px-3 sm:px-4 py-1 sm:py-2 rounded transition-all"
              onClick={() => {
                setFilterAmount("");
                setPaymentFilter("");
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[700px] sm:min-w-full">
            <thead>
              <tr className="faq-question--card">
                <th className="p-2 sm:p-4 font-semibold paragraph-variable">
                  Advertiser
                </th>
                <th className="p-2 sm:p-4 font-semibold paragraph-variable">
                  Price
                </th>
                <th className="p-2 sm:p-4 font-semibold paragraph-variable">
                  Available
                </th>
                <th className="p-2 sm:p-4 font-semibold paragraph-variable">
                  Limits
                </th>
                <th className="p-2 sm:p-4 font-semibold paragraph-variable">
                  Payment
                </th>
                <th className="p-2 sm:p-4 font-semibold paragraph-variable">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAds.map((ad, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-700 hover:bg-gray-700/30 transition-colors"
                >
                  <td className="p-2 sm:p-4">
                    <div className="font-medium paragraph-variable">
                      {ad.advertiser}
                    </div>
                    <div className="text-xs sm:text-sm paragraph-variable">
                      {ad.orders}
                    </div>
                    <div className="text-xs sm:text-sm paragraph-variable">
                      {ad.time}
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 font-medium paragraph-variable">
                    {ad.price} {ad.currency}
                  </td>
                  <td className="p-2 sm:p-4 paragraph-variable">
                    {ad.available}
                  </td>
                  <td className="p-2 sm:p-4 paragraph-variable">{ad.limits}</td>
                  <td className="p-2 sm:p-4 paragraph-variable">
                    {ad.payment}
                  </td>
                  <td className="p-2 sm:p-4">
                    <button
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded paragraph-variable font-medium transition-all ${
                        activeTab === "buy"
                          ? "button-variable "
                          : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                      }`}
                    >
                      {activeTab === "buy" ? `Buy ${crypto}` : `Sell ${crypto}`}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default P2P_buy_sell;
