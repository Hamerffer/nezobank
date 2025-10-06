import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/(app)/option")({
  component: RouteComponent,
});

function RouteComponent() {
  const [optionType, setOptionType] = useState<"call" | "put">("call");
  const [strikePrice, setStrikePrice] = useState("");
  const [expiration, setExpiration] = useState("");
  const [contracts, setContracts] = useState("1");
  const [orderType, setOrderType] = useState<"market" | "limit">("market");
  const [limitPrice, setLimitPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log({
      optionType,
      strikePrice,
      expiration,
      contracts,
      orderType,
      limitPrice,
    });
  };

  return (
    <div className="min-h-screen textwhite overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Advanced Options Trading <br />
              <span className="text-greenish">Powered by Real-Time Data</span>
            </h1>
            <p className="paragraph-variable text-responsive mb-8 max-w-xl mx-auto lg:mx-0">
              Execute sophisticated options strategies with institutional-grade
              tools, real-time analytics, and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 button-variable  rounded-lg font-medium transition-colors shadow-lg shadow-emerald-500/20">
                Start Trading
              </button>
              <button className="px-6 py-3 shadow-2xl rounded-lg font-medium transition-colors">
                Explore Features
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-responsive">
                    AAPL Options Chain
                  </h3>
                  <span className="text-greenish font-medium text-sm">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className=" p-3 sm:p-4 rounded-lg">
                    <p className="paragraph-variable text-xs sm:text-sm">
                      Current Price
                    </p>
                    <p className="text-lg sm:text-xl font-bold">$178.72</p>
                    <p className="text-greenish text-xs sm:text-sm">+1.24%</p>
                  </div>
                  <div className=" p-3 sm:p-4 rounded-lg">
                    <p className="paragraph-variable text-xs sm:text-sm">
                      IV Rank
                    </p>
                    <p className="text-lg sm:text-xl font-bold">42.6%</p>
                    <p className="paragraph-variable text-xs sm:text-sm">
                      30-day avg
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="grid md:grid-cols-3">
              {/* Left Panel - Option Details */}
              <div className="md:col-span-2 p-4 sm:p-6 md:p-8 border-b md:border-r border-gray-700">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Trade Options
                  </h2>
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm rounded-lg">
                      AAPL
                    </button>
                    <button className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm rounded-lg">
                      TSLA
                    </button>
                    <button className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm rounded-lg">
                      NVDA
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Option Type Selection */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Option Type</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className={`py-3 sm:py-4 rounded-xl font-medium transition-all ${
                          optionType === "call"
                            ? "button-variable shadow-lg shadow-emerald-500/25"
                            : "bg-gray-400 hover:bg-gray-600"
                        }`}
                        onClick={() => setOptionType("call")}
                      >
                        Call
                      </button>
                      <button
                        type="button"
                        className={`py-3 sm:py-4 rounded-xl font-medium transition-all ${
                          optionType === "put"
                            ? "bg-rose-500 shadow-lg shadow-rose-500/25"
                            : "bg-gray-400 hover:bg-gray-400"
                        }`}
                        onClick={() => setOptionType("put")}
                      >
                        Put
                      </button>
                    </div>
                  </div>

                  {/* Strike Price and Expiration */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Strike Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 paragraph-variable">
                          $
                        </span>
                        <input
                          type="number"
                          className="w-full border border-gray-600 rounded-lg pl-9 pr-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none"
                          value={strikePrice}
                          onChange={(e) => setStrikePrice(e.target.value)}
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Expiration Date
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Contracts and Order Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Contracts
                      </label>
                      <select
                        className="w-full border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none appearance-none dark:bg-gray-800"
                        value={contracts}
                        onChange={(e) => setContracts(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 10, 25, 50, 100].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Order Type
                      </label>
                      <select
                        className="w-full border b border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none appearance-none dark:bg-gray-800"
                        value={orderType}
                        onChange={(e) =>
                          setOrderType(e.target.value as "market" | "limit")
                        }
                      >
                        <option value="market">Market</option>
                        <option value="limit">Limit</option>
                        <option value="stop">Stop</option>
                        <option value="stop_limit">Stop Limit</option>
                      </select>
                    </div>
                  </div>

                  {/* Limit Price (conditionally shown) */}
                  {orderType === "limit" && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Limit Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 paragraph-variable">
                          $
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          className="w-full border border-gray-600 rounded-lg pl-9 pr-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none"
                          value={limitPrice}
                          onChange={(e) => setLimitPrice(e.target.value)}
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Order Summary */}
                  <div className=" rounded-xl p-4 border border-gray-700">
                    <h4 className="font-medium mb-3">Order Summary</h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <p className="text-sm paragraph-variable">
                          Buy {contracts} {optionType} contract
                          {contracts !== "1" ? "s" : ""}
                        </p>
                        <p className="text-sm">
                          Strike: ${strikePrice || "0.00"}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-sm paragraph-variable">
                          Estimated Cost
                        </p>
                        <p className="font-medium">
                          $
                          {strikePrice
                            ? (
                                parseFloat(strikePrice) *
                                100 *
                                parseInt(contracts)
                              ).toFixed(2)
                            : "0.00"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full button-variable py-3 sm:py-4 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20 "
                  >
                    Review Order
                  </button>
                </form>
              </div>

              {/* Right Panel - Market Data */}
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8">
                  Market Data
                </h2>

                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">AAPL - Apple Inc.</h3>
                    <span className="text-greenish text-sm font-medium">
                      +1.24%
                    </span>
                  </div>
                  <div className=" rounded-xl p-4 mb-4">
                    <div className="text-2xl sm:text-3xl font-bold mb-2 paragraph-variable">
                      $178.72
                    </div>
                    <div className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-3"></div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <p className="text-xs sm:text-sm paragraph-variable">
                          Open
                        </p>
                        <p className="font-medium text-responsive">$176.54</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm paragraph-variable">
                          Volume
                        </p>
                        <p className="font-medium text-responsive">62.1M</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm paragraph-variable">
                          High
                        </p>
                        <p className="font-medium text-responsive">$179.21</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm paragraph-variable">
                          Low
                        </p>
                        <p className="font-medium text-responsive">$175.88</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Options Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="paragraph-variable text-sm">
                        IV Rank
                      </span>
                      <span className="font-medium text-sm">42.6%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="paragraph-variable text-sm">HV 30</span>
                      <span className="font-medium text-sm">38.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="paragraph-variable text-sm">
                        Put/Call Ratio
                      </span>
                      <span className="font-medium text-sm">0.72</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="paragraph-variable text-sm">Delta</span>
                      <span className="font-medium text-sm">0.45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="paragraph-variable text-sm">Gamma</span>
                      <span className="font-medium text-sm">0.08</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Professional Trading Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className=" rounded-2xl p-4 sm:p-6 border border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-greenish"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Real-Time Analytics
              </h3>
              <p className="paragraph-variable text-responsive">
                Access advanced charting tools, technical indicators, and
                real-time market data to inform your trading decisions.
              </p>
            </div>
            <div className=" rounded-2xl p-4 sm:p-6 border border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12  rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-greenish"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Lightning Execution
              </h3>
              <p className="paragraph-variable text-responsive">
                Execute trades with millisecond latency and enjoy best-in-class
                order routing for optimal fill prices.
              </p>
            </div>
            <div className=" rounded-2xl p-4 sm:p-6 border border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12  rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-greenish"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Advanced Security
              </h3>
              <p className="paragraph-variable text-responsive">
                Bank-level security protocols, encryption, and account
                protection ensure your assets and data remain safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mt-7 mb-7 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 bg-transparent rounded-xl p-6 sm:p-10">
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105 w-full md:w-auto">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Stock market data visualization"
            className="rounded-lg shadow-xl border border-emerald-200 w-full md:w-56 lg:w-72"
          />
        </div>

        <div className="text-center md:text-left max-w-xl font-sans mt-6 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-emerald-500 tracking-wide drop-shadow-md">
            Option Trading Basics
          </h1>
          <div className="w-16 h-1 bg-emerald-400 mx-auto md:mx-0 rounded-full mb-4 sm:mb-6"></div>
          <p className=" leading-relaxed mb-4 tracking-wide text-responsive ">
            Options are financial contracts giving you the right, but not the
            obligation, to buy or sell an underlying asset at a set price before
            a certain date. They allow strategic investment choices including
            hedging and speculation.
          </p>
          <p className="text-responsive leading-relaxed tracking-wide">
            Two main types are calls (buy options) and puts (sell options).
            Options trading involves risk but can provide enhanced returns with
            limited capital.
          </p>
        </div>

        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105 w-full md:w-auto mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Person analyzing financial data"
            className="rounded-lg shadow-xl border border-emerald-200 w-full md:w-56 lg:w-72"
          />
        </div>
      </section>

      <section className="w-full max-w-7xl mt-7 mb-7 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 bg-transparent rounded-xl p-6 sm:p-10">
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105 w-full md:w-auto">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
            alt="Financial chart analysis"
            className="rounded-lg shadow-xl border border-emerald-200 w-full md:w-56 lg:w-72"
          />
        </div>
        <div className="text-center md:text-left max-w-xl font-sans mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-emerald-500 tracking-wide drop-shadow-md">
            Understanding Calls and Puts
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto md:mx-0 rounded-full mb-4 sm:mb-6"></div>
          <p className="text-responsive leading-relaxed mb-4 tracking-wide">
            Calls give you the right to buy the underlying asset, while puts
            give you the right to sell it. Choosing the right option depends on
            your market outlook and risk tolerance.
          </p>
          <p className="text-responsive leading-relaxed tracking-wide">
            Use calls when you expect the asset's price to rise, and puts when
            you anticipate a decline. These tools offer strategic flexibility in
            trading.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mt-7 mb-7 mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-6 sm:gap-10 bg-transparent rounded-xl p-6 sm:p-10">
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105 w-full md:w-auto">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80"
            alt="Investor analyzing market trends"
            className="rounded-lg shadow-xl border border-emerald-200 w-full md:w-56 lg:w-72"
          />
        </div>
        <div className="text-center md:text-left max-w-xl font-sans mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-emerald-500 tracking-wide drop-shadow-md">
            Risk Management in Options
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto md:mx-0 rounded-full mb-4 sm:mb-6"></div>
          <p className="text-responsive leading-relaxed mb-4 tracking-wide">
            Options can limit your financial risk by setting defined losses with
            premium costs. Hedging with options helps protect portfolios from
            adverse market moves.
          </p>
          <p className="text-responsive leading-relaxed tracking-wide">
            Use stop-loss orders and monitor your positions regularly to manage
            potential trade risks effectively.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mt-7 mb-7 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 bg-transparent rounded-xl p-6 sm:p-10">
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105 w-full md:w-auto">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80"
            alt="Trader using laptop for options trading"
            className="rounded-lg shadow-xl border border-emerald-200 w-full md:w-56 lg:w-72"
          />
        </div>
        <div className="text-center md:text-left max-w-xl font-sans mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-emerald-500 tracking-wide drop-shadow-md">
            Strategies for Beginners
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto md:mx-0 rounded-full mb-4 sm:mb-6"></div>
          <p className="text-responsive leading-relaxed mb-4 tracking-wide">
            Start with basic strategies like covered calls and protective puts
            to understand option mechanics. These limit risk and provide steady
            returns.
          </p>
          <p className="text-responsive leading-relaxed tracking-wide">
            Gradually explore spreads and combinations as you gain confidence
            and market knowledge.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mt-7 mb-7 mx-auto bg-transparent rounded-xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-4 sm:p-6 border border-emerald-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-4 text-emerald-500">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C17.523 2 22 6.477 22 12s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-emerald-600">
            Why Trade Options?
          </h3>
          <p className="paragraph-variable leading-relaxed text-xs sm:text-sm md:text-base">
            Options provide leverage and greater flexibility compared to stocks.
            They empower you to hedge risk or speculate strategically with
            limited capital.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 sm:p-6 border border-emerald-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-4 text-emerald-500">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94" />
              <path d="M9.69 8h11.48" />
              <path d="M7.38 12l5.74-9.94" />
              <path d="M9.69 16L3.95 6.06" />
              <path d="M14.31 16H2.83" />
              <path d="M16.62 12l-5.74 9.94" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-emerald-600">
            Key Terms to Know
          </h3>
          <p className="paragraph-variable leading-relaxed text-xs sm:text-sm md:text-base">
            Learn the lingo: strike price, expiration date, premiums, and
            intrinsic value. Knowing these is essential for smart trading moves.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 sm:p-6 border border-emerald-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-4 text-emerald-500">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 12a4 4 0 0 1-8 0 4 4 0 0 1 8 0z" />
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M4.93 19.07l2.83-2.83" />
              <path d="M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-emerald-600">
            Trading Platforms
          </h3>
          <p className="paragraph-variable leading-relaxed text-xs sm:text-sm md:text-base">
            Choose the right platform with real-time charts, low fees, and
            user-friendly interfaces. A good platform enhances your trading
            efficiency.
          </p>
        </div>
      </section>

      <section className=" mt-12 mb-7 max-w-7xl mx-auto bg-transparent rounded-xl p-1 sm:p-5 flex flex-col md:flex-row gap-10 sm:gap-16 items-center justify-center">
        <div className="flex flex-col w-full space-y-4 sm:space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-500 tracking-wide drop-shadow-md">
            Option Trading Tips
          </h2>
          <ul className="list-disc list-inside paragraph-variable space-y-2 sm:space-y-3 text-responsive">
            <li>
              Start small and learn the mechanics before committing large
              capital.
            </li>
            <li>
              Diversify trades to avoid high risks from any single position.
            </li>
            <li>
              Keep up to date with market news and trends to make informed
              decisions.
            </li>
            <li>
              Use risk management techniques like stop-losses and position
              sizing.
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105 w-full md:w-auto ">
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=400&q=80"
            alt="Trader working on options strategy"
            className="rounded-lg shadow-xl border border-emerald-300 w-full max-w-7xl  sm:max-w-sm"
          />
        </div>
      </section>

      <section className="max-w-7xl mt-12 mb-7 mx-auto bg-transparent rounded-xl p-8 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-emerald-600 tracking-wide drop-shadow-lg w-full">
          Get Started with Confidence
        </h2>
        <p className="w-full mx-auto paragraph-variable text-responsive leading-relaxed tracking-wide mb-6 sm:mb-10">
          Options trading opens many doors but requires knowledge and
          discipline. Start with a solid education, use proven strategies, and
          always keep risk in check.
        </p>
        <button className="button-variable  text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition-colors duration-300 text-responsive">
          Learn More
        </button>
      </section>
    </div>
  );
}
