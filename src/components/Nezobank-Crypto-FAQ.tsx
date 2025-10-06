import { useState } from "react";

const NezobankCryptoFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cryptoFaqs = [
    {
      question: "Which cryptocurrencies can I trade on Nezobank Exchange?",
      answer:
        "Nezobank supports all major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Binance Coin (BNB), Solana (SOL), and many more. We regularly list trending tokens and DeFi coins to give traders access to the most popular markets.",
    },
    {
      question: "Is Nezobank a secure crypto exchange?",
      answer:
        "Yes. Nezobank uses advanced security protocols such as multi-signature cold wallets, 2FA authentication, encrypted transactions, and AI-powered fraud detection. Over 95% of customer funds are stored offline, making your crypto assets safe from hacks.",
    },
    {
      question: "What are the trading fees on Nezobank?",
      answer:
        "Nezobank offers some of the lowest fees in the market. Spot trading fees start at 0.1%, and withdrawal fees vary by coin. High-volume traders and premium users get even lower rates, similar to Binance and other leading exchanges.",
    },
    {
      question: "How fast are deposits and withdrawals on Nezobank?",
      answer:
        "Crypto deposits are usually credited instantly after network confirmation. Withdrawals typically take 5–30 minutes depending on blockchain traffic. For fiat withdrawals, bank transfer times may vary by region but are generally processed within 24 hours.",
    },
    {
      question: "Can I buy crypto with INR, USD, or other fiat currencies?",
      answer:
        "Absolutely. Nezobank allows you to buy crypto using multiple fiat currencies including INR, USD, EUR, and GBP. We support bank transfers, UPI, debit/credit cards, and popular wallets like Google Pay and Apple Pay for seamless crypto purchases.",
    },
    {
      question: "Does Nezobank have a crypto trading app?",
      answer:
        "Yes. The Nezobank mobile app is available for both iOS and Android. You can trade Bitcoin, Ethereum, and altcoins on the go with advanced charting tools, real-time price alerts, and secure biometric login.",
    },
    {
      question: "Can I stake or earn rewards on Nezobank?",
      answer:
        "Yes, Nezobank offers staking services and savings accounts for popular cryptocurrencies like ETH, USDT, and ADA. Users can earn passive income with annual yields up to 12%, depending on the crypto asset and staking period.",
    },
  ];

  return (
    <section className=" ">
      <div className=" paragraph-variable py-5 px-4 md:px-8 rounded-xl shadow-2xl max-w-7xl mx-auto my-8 ">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Crypto FAQs
        </h2>

        <div className="space-y-4">
          {cryptoFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-[#1c2b44]/30 backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center py-5 px-6 text-left font-medium text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="pr-4 text-sm md:text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${activeIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`px-6 pb-5 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="paragraph-variable border-t border-black p-4 text-sm md:text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NezobankCryptoFAQ;
