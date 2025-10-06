import CTASection from "@/components/cta-section";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(app)/future")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  console.log(isAuthModalOpen);
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Placeholder for AuthModal & InfoPanel if needed */}

      <main className="min-h-screen ">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden ">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/future.png")' }}
          >
            <div className="absolute inset-0 "></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl px-6 py-16">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight textwhite">
              Unlock Your Potential with{" "}
              <span className="text-emerald-variable">Futures Trading</span>
            </h1>
            <p className="text-responsive max-w-2xl mx-auto mb-8 leading-relaxed textwhite">
              Take advantage of market volatility with precision, leverage, and
              sophisticated risk management on NezoBank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="button-variable  text-white font-semibold rounded-lg px-8 py-4 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Now
              </button>
              <button className="border border-emerald-500 text-emerald-variable hover:bg-emerald-500/10 font-semibold rounded-lg px-8 py-4 transition-all duration-300 textwhite">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className=" py-8 border-y border-slate-700">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100x", label: "Maximum Leverage" },
              { value: "24/7", label: "Market Access" },
              { value: "0.02%", label: "Low Fees" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-variable">
                  {stat.value}
                </div>
                <div className="text-sm mt-1 paragraph-variable">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-5 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 paragraph-variable">
                Advanced Trading Features
              </h2>
              <p className="max-w-2xl mx-auto text-responsive paragraph-variable">
                Professional tools designed for serious traders seeking market
                advantage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <div className="w-14 h-14 rounded-lg bg-emerald-900/50 flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-emerald-variable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  ),
                  title: "Real-Time Execution",
                  desc: "Experience lightning-fast order matching and execution with low latency infrastructure.",
                },
                {
                  icon: (
                    <div className="w-14 h-14 rounded-lg bg-emerald-900/50 flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-emerald-variable"
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
                  ),
                  title: "Up to 100x Leverage",
                  desc: "Maximize your trading power with flexible leverage options tailored to your strategy.",
                },
                {
                  icon: (
                    <div className="w-14 h-14 rounded-lg bg-emerald-900/50 flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-emerald-variable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                    </div>
                  ),
                  title: "Industry-Grade Security",
                  desc: "Protect assets with multi-layer encryption, cold wallets, and continuous monitoring.",
                },
              ].map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className=" p-2 rounded-xl shadow-2xl hover:border-emerald-500/30 transition-all duration-300"
                >
                  {icon}
                  <h3 className="text-xl font-semibold mb-3 text-emerald-variable">
                    {title}
                  </h3>
                  <p className="leading-relaxed paragraph-variable text-responsive">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Futures Info */}
        <section className="py-5 px-6 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-emerald-variable flex items-center">
                  <span className="w-2 h-8  mr-3 rounded-full"></span>
                  What Are Futures Contracts?
                </h2>
                <p className="text-responsive leading-relaxed paragraph-variable mb-8">
                  Futures contracts are agreements to buy or sell an asset at a
                  predetermined price and date. They allow traders to speculate
                  on future price movements or hedge existing positions,
                  providing flexibility and opportunities to profit in both
                  rising and falling markets.
                </p>

                <h2 className="text-3xl font-bold mb-6 text-emerald-variable flex items-center mt-12">
                  <span className="w-2 h-8 mr-3 rounded-full"></span>
                  Risk Management Strategies
                </h2>
                <p className="text-lg paragraph-variable mb-4 text-responsive">
                  Futures trading inherently involves higher risk due to
                  leverage. Implement disciplined risk management with:
                </p>
                <ul className="space-y-3">
                  {[
                    "Stop-Loss Orders: Automatically exit trades to limit losses.",
                    "Position Sizing: Restrict trade size relative to account balance.",
                    "Regular Portfolio Rebalancing: Adjust based on market conditions.",
                    "Use of Take-Profit Levels: Lock in gains with predefined exits.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start paragraph-variable">
                      <span className="text-emerald-variable mr-2">•</span>
                      <span className="text-small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-emerald-variable flex items-center">
                  <span className="w-2 h-8  mr-3 rounded-full"></span>
                  Key Benefits of Futures Trading
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Leverage",
                      desc: "Amplify exposure with margin trading, unlocking greater potential returns (and risks) on invested capital.",
                      icon: "📈",
                    },
                    {
                      title: "24/7 Market Access",
                      desc: "Trade anytime with liquidity around the clock, capitalizing on global market movements.",
                      icon: "🌐",
                    },
                    {
                      title: "Hedging",
                      desc: "Protect existing holdings from adverse price swings, effectively managing portfolio risk.",
                      icon: "🛡️",
                    },
                    {
                      title: "Diverse Instruments",
                      desc: "Futures are offered on numerous assets including cryptos, indices, and commodities.",
                      icon: "💼",
                    },
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-2xl mr-4 mt-1">{benefit.icon}</span>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-emerald-variable">
                          {benefit.title}
                        </h3>
                        <p className="paragraph-variable text-responsive ">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6  rounded-xl border border-emerald-500/20">
                  <h3 className="font-semibold text-lg mb-2 text-emerald-variable">
                    Professional Tip
                  </h3>
                  <p className="paragraph-variable text-responsive">
                    Successful futures trading requires a solid strategy, risk
                    management, and continuous market analysis. Start with a
                    demo account to practice before trading with real funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-5 px-6">
          <div className="max-w-7xl mx-auto bg-gradient-to-tr from-emerald-900/30 to-emerald-700/30 p-10 rounded-2xl border border-emerald-500/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-emerald-variable">
                  Market Insights & Analytics
                </h2>
                <p className="text-responsive leading-relaxed mb-6 paragraph-variable">
                  Stay ahead with in-depth futures market analysis, real-time
                  volume data, and volatility indicators to optimize your
                  trading decisions.
                </p>
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="button-variable  text-white font-semibold rounded-lg px-8 py-3 shadow-lg transition-all duration-300"
                >
                  Access Analytics
                </button>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold paragraph-variable">
                    Market Overview
                  </h3>
                  <span className="text-xs text-emerald-variable /10 px-2 py-1 rounded">
                    LIVE
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "BTC/USD", price: "$42,150.20", change: "+2.4%" },
                    { name: "ETH/USD", price: "$2,250.75", change: "+1.2%" },
                    { name: "NASDAQ", price: "14,896.85", change: "-0.3%" },
                    { name: "GOLD", price: "$1,950.40", change: "+0.8%" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-slate-700/50 paragraph-variable"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span>{item.price}</span>
                      <span
                        className={
                          item.change.startsWith("+")
                            ? "text-emerald-variable"
                            : "text-rose-400"
                        }
                      >
                        {item.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trade Futures Section */}
        <section className="py-5 px-6 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-emerald-variable">
                  Why Trade Futures?
                </h2>
                <p className="text-responsive leading-relaxed mb-6 paragraph-variable">
                  Futures trading unlocks advanced opportunities for investors
                  to leverage their capital, hedge existing holdings, and
                  capitalize on price movements in various markets.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Capital Efficiency: Use margin to control a large position with less capital up front.",
                    "Hedging Protection: Lock in prices or offset risk from other investments.",
                    "Diversification: Access multiple asset classes and markets beyond traditional stocks.",
                    "Speculation: Take directional bets to profit from expected market trends.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start paragraph-variable">
                      <span className="text-emerald-variable mr-2">•</span>
                      <span className="text-small">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="button-variable  text-white font-semibold rounded-lg px-8 py-3 shadow-lg transition-all duration-300"
                >
                  Start Trading
                </button>
              </div>
              <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                <img
                  src="/images/future_trading.jpg"
                  alt="Futures trading chart visualization"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="mt-6 text-center text-sm paragraph-variable">
                  Advanced charting tools and analytics for professional futures
                  trading
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-variable">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What margin is required for futures trading?",
                  a: "NezoBank offers flexible margin requirements that vary by contract and leverage. Minimum margin is clearly specified on the trading interface before order confirmation.",
                },
                {
                  q: "How do I manage liquidation risk?",
                  a: "Use stop-loss orders and conservative position sizing. Our platform also provides margin call alerts to help you avoid forced liquidations.",
                },
                {
                  q: "What coins and contracts are available?",
                  a: "We support futures contracts on major cryptocurrencies including Bitcoin, Ethereum, and select altcoins; with perpetual and fixed expiry options.",
                },
                {
                  q: "Can I trade futures on mobile?",
                  a: "Yes, our fully responsive platform supports futures trading on all modern devices, preserving full functionality and performance.",
                },
              ].map(({ q, a }, i) => (
                <div
                  key={i}
                  className=" rounded-lg border border-slate-700 overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-6 text-left font-semibold paragraph-variable"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="text-responsive">{q}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-700">
                      <p className="paragraph-variable text-small">{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
