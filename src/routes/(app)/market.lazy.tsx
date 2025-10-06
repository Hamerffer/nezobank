import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import TradingViewEmbed from "../../components/ui/market/market-chart";

export const Route = createLazyFileRoute("/(app)/market")({
  component: RouteComponent,
});

function RouteComponent() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 12,
              page: 1,
              price_change_percentage: "24h",
            },
          }
        );
        setCoins(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-greenish mb-4 sm:mb-6">
            Crypto Market
          </h1>
          <p className="paragraph-variable text-small leading-relaxed">
            Stay ahead in the ever-changing world of cryptocurrencies. Track
            real-time prices, market trends, and gain insights to make smarter
            trading decisions.
          </p>
        </div>
      </section>

      {/* Coins Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 headingwhite">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Top Coins</h2>
        {loading ? (
          <p className="text-gray-400">Loading live data...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {coins.map((coin) => (
              <div
                key={coin.id}
                className="p-4 rounded-2xl bg-white dark:bg-[#1e293b] shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <h3 className="font-semibold text-sm sm:text-base">
                  {coin.symbol.toUpperCase()}
                </h3>
                <p className="paragraph-variable text-xs sm:text-sm">
                  ${coin.current_price.toLocaleString()}
                </p>
                <p
                  className={`text-xs sm:text-sm font-semibold ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-greenish"
                      : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Chart Section */}
      <section className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] h-full">
          <TradingViewEmbed />
        </div>
      </section>
    </>
  );
}
