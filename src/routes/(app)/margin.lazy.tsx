import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import TradingDropdown from "../../components/ui/margintrading/crypto-chart1";
import Tradingwidget2 from "../../components/ui/margintrading/market-chart";

export const Route = createLazyFileRoute("/(app)/margin")({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeTab, setActiveTab] = useState("market");
  const [leverage, setLeverage] = useState(5);

  const [amount, setAmount] = useState("");
  const [amount2, setAmount2] = useState("");
  const [price, setPrice] = useState("");
  const [price2, setPrice2] = useState("");

  return (
    <div className="min-h-screen  text-white">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {/* Left Column - Market Data */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border h-[650px]">
              <Tradingwidget2 />
            </div>
          </div>

          {/* Center Column - Trading Interface and Chart */}
          <div className="lg:col-span-2 space-y-6">
            <div className="  backdrop-blur-md rounded-xl p-5 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-xl font-bold">Margin Trading</h2>
                <div className="flex items-center space-x-2">
                  <span className="paragraph-variable">Leverage:</span>
                  <div className="flex items-center space-x-2 button-variable rounded-lg px-3 py-1">
                    <button
                      onClick={() => setLeverage(Math.max(1, leverage - 1))}
                      className="hover:text-blue-400 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-semibold">{leverage}x</span>
                    <button
                      onClick={() => setLeverage(Math.min(100, leverage + 1))}
                      className="hover:text-blue-400 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="button-variable/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-400">
                    $42,563.82
                  </p>
                  <p className="paragraph-variable">BTC/USD</p>
                </div>
                <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="paragraph-variable">24h Change</span>
                    <span className="text-green-400">+2.34%</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="paragraph-variable">24h Volume</span>
                    <span>$42.5B</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="paragraph-variable">
                      Liquidation Price
                    </span>
                    <span>$38,245.12</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveTab("market")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "market"
                      ? "button-variable"
                      : "button-variable"
                  }`}
                >
                  Market
                </button>
                <button
                  onClick={() => setActiveTab("limit")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "limit"
                      ? "button-variable"
                      : "button-variable"
                  }`}
                >
                  Limit
                </button>
                <button
                  onClick={() => setActiveTab("stop")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "stop" ? "button-variable" : "button-variable"
                  }`}
                >
                  Stop-Limit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sell Form */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">
                    Sell
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-responsive paragraph-variable mb-1">
                        Amount
                      </label>
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-responsive paragraph-variable mb-1">
                        Price
                      </label>
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full paragraph-variableborder border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="pt-2">
                      <p className="text-responsive paragraph-variable">
                        Estimated Liquidation:{" "}
                        <span className="text-red-400">$38,245.12</span>
                      </p>
                    </div>
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors">
                      Sell BTC
                    </button>
                  </div>
                </div>

                {/* Buy Form */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-greenishmb-4">
                    Buy
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-responsive paragraph-variable mb-1">
                        Amount
                      </label>
                      <input
                        type="text"
                        value={amount2}
                        onChange={(e) => setAmount2(e.target.value)}
                        className="w-full paragraph-variableborder border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-responsive paragraph-variable mb-1">
                        Price
                      </label>
                      <input
                        type="text"
                        value={price2}
                        onChange={(e) => setPrice2(e.target.value)}
                        className="w-full paragraph-variable rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="pt-2">
                      <p className="text-responsive paragraph-variable">
                        Estimated Liquidation:{" "}
                        <span className="text-emerald-variable">$38,245.12</span>
                      </p>
                    </div>
                    <button className="w-full  text-white py-3 rounded-lg font-semibold transition-colors">
                      Buy BTC
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Chart Section */}
          </div>
        </div>
        <section className="mt-16">
          <div className=" rounded-xl p-5  w-full">
            <div className="h-96">
              {" "}
              {/* Fixed height for chart container */}
              <TradingDropdown />
            </div>
          </div>
        </section>

        {/* Margin Trading Information Section */}
        <section className="mt-16">
          <div className=" rounded-xl p-6 border faq-question--card border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center">
              About Margin Trading
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  What is Margin Trading?
                </h3>
                <p className="paragraph-variable mb-4 text-responsive ">
                  Margin trading allows you to trade with borrowed funds,
                  amplifying both potential profits and losses. With Nezobank's
                  margin trading platform, you can open positions larger than
                  your account balance by using leverage.
                </p>
                <p className="paragraph-variable text-responsive ">
                  When you trade on margin, you're essentially borrowing money
                  to increase your buying power. This enables you to take
                  advantage of market opportunities even with limited capital.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Key Concepts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-greenishmr-2">•</span>
                    <span className="paragraph-variable text-responsive ">
                      <strong>Leverage:</strong> The ratio of borrowed funds to
                      your own capital (e.g., 5x, 10x, 20x)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-greenishmr-2">•</span>
                    <span className="paragraph-variable text-responsive ">
                      <strong>Margin:</strong> The amount of your own funds used
                      to open a position
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-greenishmr-2">•</span>
                    <span className="paragraph-variable text-responsive ">
                      <strong>Liquidation:</strong> When your position is
                      automatically closed due to insufficient margin
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-greenishmr-2">•</span>
                    <span className="paragraph-variable text-responsive ">
                      <strong>Long/Short:</strong> Profit from both rising
                      (long) and falling (short) markets
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Risk Management Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Use Stop-Loss Orders</h4>
                  <p className="text-responsive paragraph-variable">
                    Set automatic orders to limit potential losses on each
                    trade.
                  </p>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Monitor Margin Level</h4>
                  <p className="text-responsive paragraph-variable">
                    Keep your margin level above 100% to avoid liquidation.
                  </p>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Start Small</h4>
                  <p className="text-responsive paragraph-variable">
                    Begin with lower leverage until you're comfortable with
                    margin trading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 ">
          <div className="container mx-auto max-w-8xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-emerald-400 bg-clip-text text-transparent">
              Advanced Margin Trading with Nezobank
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              {/* What is Margin Trading */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="text-greenish p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-16 0 9 9 0 0116 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    What is Margin Trading?
                  </h3>
                </div>
                <p className="paragraph-variable mb-4 text-responsive ">
                  Margin trading allows you to borrow funds to amplify your
                  trading position, potentially increasing both profits and
                  losses. With Nezobank's advanced margin trading platform, you
                  can access up to 100x leverage on various cryptocurrency
                  pairs.
                </p>
                <p className="paragraph-variable text-responsive ">
                  This sophisticated trading approach enables you to open larger
                  positions than your account balance would normally allow,
                  giving you enhanced exposure to market movements with less
                  capital requirement.
                </p>
              </div>

              {/* How It Works */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="text-greenish p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">How It Works</h3>
                </div>
                <ol className="list-decimal pl-5 space-y-3 paragraph-variable text-responsive ">
                  <li>Deposit collateral into your margin account</li>
                  <li>Select your desired leverage level (from 2x to 100x)</li>
                  <li>Open long or short positions on supported assets</li>
                  <li>Monitor your margin ratio to avoid liquidation</li>
                  <li>Close positions to realize profits or losses</li>
                </ol>
              </div>

              {/* Benefits */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="text-greenish p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Benefits of Margin Trading
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-greenishmt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Amplified Profits</h4>
                      <p className="paragraph-variable text-responsive">
                        Multiply gains with leveraged positions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-greenishmt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Short Selling</h4>
                      <p className="paragraph-variable text-responsive">
                        Profit from declining markets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-greenishmt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold">
                        Portfolio Diversification
                      </h4>
                      <p className="paragraph-variable text-responsive">
                        Access more markets with less capital
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-greenishmt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Hedging Strategies</h4>
                      <p className="paragraph-variable text-responsive">
                        Protect investments from market downturns
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Management */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-5">
                  <div className="text-greenish p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Risk Management</h3>
                </div>
                <p className="paragraph-variable mb-4 text-responsive">
                  While margin trading can amplify profits, it also increases
                  potential losses. Nezobank provides advanced risk management
                  tools to help you trade responsibly:
                </p>
                <ul className="space-y-3 paragraph-variable">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-400 mt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Liquidation Protection:</strong> Set stop-loss
                      orders to automatically close positions at predetermined
                      prices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-400 mt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Margin Calls:</strong> Receive alerts when your
                      margin level approaches dangerous thresholds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-400 mt-1 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Isolated Margin:</strong> Limit your risk by
                      allocating specific amounts to each position
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-semibold mb-6 ">
                Ready to Start Margin Trading?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="button-variable hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                  Open Margin Account
                </button>
                <button className="bg-transparent hover:paragraph-variabletext-white font-semibold py-3 px-8 rounded-lg border border-gray-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
