import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import TradingViewEmbed from "../components/ui/TradingViewEmbedd";
import { useFavicon } from "../components/ui/titleimage";
import CTASection from "@/components/cta-section";

// Lazy loaded TradingView component
const LazyTradingViewEmbed = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tradingview-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="tradingview-section">
      {isVisible ? (
        <TradingViewEmbed />
      ) : (
        <div className="h-96 bg-gray-800 animate-pulse rounded-lg"></div>
      )}
    </div>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [activeFeature, setActiveFeature] = useState(0);
  useFavicon("/images/logo1.png");
  const features = [
    {
      title: "Advanced Trading Platform",
      description:
        "Trade with precision using our professional-grade trading interface with real-time charts, order books, and advanced order types. Access 100+ technical indicators, drawing tools, and customizable layouts tailored for both beginners and expert traders.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2563eb" />
              <stop offset="100%" stop-color="#7c3aed" />
            </linearGradient>
          </defs>

          {/* <!-- Background circle --> */}
          <circle cx="50" cy="50" r="45" fill="url(#gradient)" opacity="0.2" />

          {/* <!-- Monitor --> */}
          <rect
            x="25"
            y="30"
            width="50"
            height="30"
            rx="2"
            fill="none"
            stroke="#2563eb"
            stroke-width="2"
          />

          {/* <!-- Screen content --> */}
          <line
            x1="30"
            y1="40"
            x2="45"
            y2="40"
            stroke="#7c3aed"
            stroke-width="1.5"
          />
          <line
            x1="30"
            y1="45"
            x2="70"
            y2="45"
            stroke="#7c3aed"
            stroke-width="1.5"
          />
          <line
            x1="30"
            y1="50"
            x2="40"
            y2="50"
            stroke="#7c3aed"
            stroke-width="1.5"
          />
          <line
            x1="30"
            y1="55"
            x2="65"
            y2="55"
            stroke="#7c3aed"
            stroke-width="1.5"
          />

          {/* <!-- Chart lines --> */}
          <polyline
            points="45,40 48,38 51,42 54,40 57,45 60,43 63,47"
            fill="none"
            stroke="#10b981"
            stroke-width="1.5"
          />
          <polyline
            points="55,50 58,48 61,52 64,50 67,55 70,53 73,57"
            fill="none"
            stroke="#10b981"
            stroke-width="1.5"
          />

          {/* <!-- Monitor stand --> */}
          <rect
            x="45"
            y="60"
            width="10"
            height="5"
            fill="#374151"
            stroke="#374151"
            stroke-width="1"
          />
          <rect
            x="40"
            y="65"
            width="20"
            height="3"
            fill="#374151"
            stroke="#374151"
            stroke-width="1"
          />

          {/* <!-- Indicators --> */}
          <circle cx="70" cy="35" r="2" fill="#10b981" />
          <circle cx="75" cy="35" r="2" fill="#ef4444" />

          {/* <!-- Connection lines --> */}
          <line
            x1="20"
            y1="25"
            x2="30"
            y2="35"
            stroke="#9ca3af"
            stroke-width="1"
            stroke-dasharray="2"
          />
          <line
            x1="80"
            y1="25"
            x2="70"
            y2="35"
            stroke="#9ca3af"
            stroke-width="1"
            stroke-dasharray="2"
          />
        </svg>
      ),
    },
    {
      title: "150+ Trading Pairs",
      description:
        "Access a wide range of cryptocurrencies with BTC, ETH, USDT, and other major trading pairs with deep liquidity. Trade everything from Bitcoin and Ethereum to emerging altcoins and DeFi tokens with competitive spreads and minimal slippage.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="pairGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                flood-color="#3b82f6"
                flood-opacity="0.3"
              />
            </filter>
          </defs>

          {/* <!-- Background circle --> */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#pairGradient)"
            opacity="0.15"
          />

          {/* <!-- Main interconnected circles --> */}
          <circle
            cx="35"
            cy="35"
            r="15"
            fill="#3b82f6"
            filter="url(#shadow)"
            opacity="0.8"
          />
          <circle
            cx="65"
            cy="35"
            r="15"
            fill="#8b5cf6"
            filter="url(#shadow)"
            opacity="0.8"
          />
          <circle
            cx="50"
            cy="65"
            r="15"
            fill="#10b981"
            filter="url(#shadow)"
            opacity="0.8"
          />

          {/* <!-- Currency symbols --> */}
          <text
            x="35"
            y="39"
            text-anchor="middle"
            fill="white"
            font-size="12"
            font-weight="bold"
          >
            BTC
          </text>
          <text
            x="65"
            y="39"
            text-anchor="middle"
            fill="white"
            font-size="12"
            font-weight="bold"
          >
            ETH
          </text>
          <text
            x="50"
            y="69"
            text-anchor="middle"
            fill="white"
            font-size="12"
            font-weight="bold"
          >
            USD
          </text>

          {/* <!-- Connection lines --> */}
          <line
            x1="35"
            y1="35"
            x2="65"
            y2="35"
            stroke="#9ca3af"
            stroke-width="1.5"
          />
          <line
            x1="35"
            y1="35"
            x2="50"
            y2="65"
            stroke="#9ca3af"
            stroke-width="1.5"
          />
          <line
            x1="65"
            y1="35"
            x2="50"
            y2="65"
            stroke="#9ca3af"
            stroke-width="1.5"
          />

          {/* <!-- Small surrounding circles representing additional pairs --> */}
          <circle cx="20" cy="30" r="5" fill="#f59e0b" opacity="0.7" />
          <circle cx="25" cy="60" r="5" fill="#ef4444" opacity="0.7" />
          <circle cx="50" cy="20" r="5" fill="#06b6d4" opacity="0.7" />
          <circle cx="75" cy="60" r="5" fill="#ec4899" opacity="0.7" />
          <circle cx="80" cy="30" r="5" fill="#84cc16" opacity="0.7" />

          {/* <!-- Plus symbol and text --> */}
          <text
            x="50"
            y="90"
            text-anchor="middle"
            fill="#4b5563"
            font-size="10"
            font-weight="bold"
          >
            150+ PAIRS
          </text>
          <path
            d="M48 15h4M50 13v4"
            stroke="#6b7280"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Bank-Grade Security",
      description:
        "Your assets are protected with multi-signature wallets, cold storage, and 2FA authentication. We store 98% of funds offline in geographically distributed vaults with institutional-grade security protocols, regular audits, and insurance coverage.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="securityGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#059669" />
              <stop offset="100%" stop-color="#047857" />
            </linearGradient>
            <filter
              id="securityShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="3"
                flood-color="#059669"
                flood-opacity="0.3"
              />
            </filter>
          </defs>

          {/* <!-- Shield background --> */}
          <path
            d="M50,15 L20,30 L20,45 C20,60 35,75 50,80 C65,75 80,60 80,45 L80,30 Z"
            fill="url(#securityGradient)"
            filter="url(#securityShadow)"
            opacity="0.9"
          />

          {/* <!-- Shield outline --> */}
          <path
            d="M50,15 L20,30 L20,45 C20,60 35,75 50,80 C65,75 80,60 80,45 L80,30 Z"
            fill="none"
            stroke="#065f46"
            stroke-width="1.5"
          />

          {/* <!-- Lock body --> */}
          <rect
            x="40"
            y="45"
            width="20"
            height="15"
            rx="2"
            fill="#fbbf24"
            stroke="#065f46"
            stroke-width="1.5"
          />

          {/* <!-- Lock shackle --> */}
          <path
            d="M45,45 L45,35 C45,32 47,30 50,30 C53,30 55,32 55,35 L55,45"
            fill="none"
            stroke="#065f46"
            stroke-width="1.5"
          />

          {/* <!-- Keyhole --> */}
          <circle cx="50" cy="52" r="2" fill="#065f46" />
          <rect x="49" y="54" width="2" height="3" fill="#065f46" rx="1" />

          {/* <!-- Checkmark --> */}
          <path
            d="M44,60 L48,64 L56,56"
            fill="none"
            stroke="#065f46"
            stroke-width="2"
            stroke-linecap="round"
          />

          {/* <!-- Security rays --> */}
          <g
            stroke="#10b981"
            stroke-width="1.5"
            stroke-linecap="round"
            opacity="0.7"
          >
            <line x1="50" y1="15" x2="50" y2="5" />
            <line x1="60" y1="20" x2="68" y2="12" />
            <line x1="70" y1="30" x2="80" y2="25" />
            <line x1="30" y1="20" x2="22" y2="12" />
            <line x1="20" y1="35" x2="10" y2="35" />
          </g>

          {/* <!-- Text label --> */}
          <text
            x="50"
            y="95"
            text-anchor="middle"
            fill="#374151"
            font-size="8"
            font-weight="bold"
          >
            BANK SECURITY
          </text>
        </svg>
      ),
    },
  ];

  const securityFeatures = [
    {
      title: "Cold Storage",
      description: "98% of digital assets stored offline in secure vaults",
      icon: "❄️",
    },
    {
      title: "2FA Authentication",
      description: "Two-factor authentication for all account activities",
      icon: "🔒",
    },
    {
      title: "Insurance Protection",
      description: "Digital assets insured against theft and hacking",
      icon: "🛡️",
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and threat detection",
      icon: "👁️",
    },
  ];

  const tradingTools = [
    {
      title: "Advanced Charting",
      description: "Professional TradingView integration with 100+ indicators",
    },
    {
      title: "API Access",
      description: "REST and WebSocket APIs for automated trading strategies",
    },
    {
      title: "Mobile Trading",
      description: "Full-featured mobile app for trading on the go",
    },
    {
      title: "Portfolio Tracking",
      description:
        "Comprehensive portfolio management with performance analytics",
    },
  ];

  const faqItems = [
    {
      question: "How do I create an account?",
      answer:
        "Creating an account is simple. Click on the 'Sign Up' button, provide your email address, create a secure password, and complete the verification process to get started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, credit/debit cards, and various cryptocurrency deposits. Specific options vary by region.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we employ bank-level security measures including encryption, 2FA, and strict data protection protocols to keep your information safe.",
    },
    {
      question: "What fees do you charge for trading?",
      answer:
        "Our fee structure is competitive and transparent. Maker fees start at 0.10% and taker fees at 0.20%, with discounts available for high-volume traders.",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-[#010203] paragraph-variable">
      <title>
        Nezobank | About Us - Secure Global Crypto Exchange Platform
      </title>
      <meta
        name="keywords"
        content="Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, digital currency exchange, The 10 Top Cryptocurrency Exchanges"
      />

      {/* Optimized Hero Section */}
      <section className="relative py-10 md:py-20 px-4 text-center flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster="/images/video-poster.jpg"
          >
            <source src="/images/herobanner-1732092714.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6  textwhite">
            Advanced Crypto Trading Platform
          </h1>
          <p className="text-responsive text-start textwhite mb-10 max-w-3xl mx-auto">
            Nezobank is a secure and user-friendly cryptocurrency exchange built
            for traders, investors, and crypto enthusiasts. We provide a fast,
            reliable platform for buying, selling, and storing digital assets
            with industry-grade security, competitive fees, and 24/7 customer
            support.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <Link to="/signup">
              <button className="button-variable hover:to-green-800 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                Start Trading
              </button>
            </Link>
            <button className="border border-blue-500 text-blue-300 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              View Markets
            </button>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                Mission
              </span>
            </h2>
            <div className="h-1 w-24 bg-green-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Democratizing Crypto Trading
              </h3>
              <p className="paragraph-variable mb-6 text-justify md:text-base text-sm">
                To empower individuals and institutions with secure, seamless
                access to the world of digital assets — enabling financial
                freedom, innovation, and trust through a next-generation
                cryptocurrency exchange.
              </p>
              <p className="paragraph-variable text-justify">
                We are committed to simplifying crypto trading for everyone —
                from first-time users to professional investors — with intuitive
                tools, industry-grade security, and global access.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/trading-screen.png"
                alt="Nezobank mission"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Lazy Loading */}
      <section className="py-16 dark:bg-[#1e293b]/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold capitalize paragraph-variable">
              Crypto Trading
            </h1>
            <p className="mt-4 paragraph-variable max-w-2xl mx-auto  text-responsive ">
              Trade Bitcoin, Ethereum, and other top cryptocurrencies with
              confidence. Choose from spot, futures, margin, or P2P trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Spot Trading",
                desc: "Buy and sell cryptocurrencies instantly at market prices with low fees and fast execution.",
              },
              {
                title: "Futures Trading",
                desc: "Trade crypto futures with leverage up to 100x and manage your risk with advanced tools.",
              },
              {
                title: "Margin Trading",
                desc: "Borrow funds to maximize your trading positions and increase potential profits with flexible leverage options.",
              },
              {
                title: "P2P Trading",
                desc: "Trade directly with other users securely using our escrow protection system with no transaction fees.",
              },
              {
                title: "Staking & Earn",
                desc: "Earn passive income by staking your cryptocurrencies with up to 15% annual returns.",
              },
              {
                title: "TradingView Charts",
                desc: "Analyze markets with advanced TradingView charts integrated directly into our platform.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold paragraph-variable mb-2">
                  {item.title}
                </h3>
                <p className="paragraph-variable text-sm text-responsive ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <LazyTradingViewEmbed />
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 px-4 dark:bg-[#0d1a2d]/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                Security
              </span>{" "}
              Measures
            </h2>
            <p className="paragraph-variable max-w-3xl mx-auto text-responsive">
              Your security is our top priority. We employ multiple layers of
              protection to safeguard your assets and personal information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="dark:bg-[#162336] p-6 rounded-2xl border border-gray-800 text-center"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="paragraph-variable text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 dark:bg-[#0d1a2d]/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Trade With{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
              Nezobank
            </span>
            ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? "hover:shadow-2xl shadow-xl transform -translate-y-2"
                    : "dark:bg-[#162336] border-gray-800 hover:border-blue-600"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={` ${activeFeature === index ? " " : " "}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="paragraph-variable text-responsive">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Tools Section */}
      <section className="py-16 px-4 dark:bg-[#1e293b]/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                Trading Tools
              </span>
            </h2>
            <p className="paragraph-variable max-w-3xl mx-auto text-responsive">
              Access a suite of advanced trading tools designed to help you make
              informed decisions and execute strategies with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingTools.map((tool, index) => (
              <div
                key={index}
                className="dark:bg-[#162336] p-6 rounded-2xl border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {tool.title}
                </h3>
                <p className="paragraph-variable">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6  relative overflow-hidden">
        <div className="absolute inset-0 bg-smoke-900 pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative border-b border-amber-50">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 paragraph-variable border-b border-amber-50 p-4">
            Getting Started Is{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
              Simple
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Steps List */}
            <div className="space-y-10">
              {[
                {
                  step: "1",
                  title: "Create Your Free Account",
                  desc: "Sign up within minutes and verify your identity securely to unlock all features.",
                  icon: "👤",
                },
                {
                  step: "2",
                  title: "Deposit & Secure Your Funds",
                  desc: "Add crypto or fiat instantly with multiple payment methods. Your assets stay safe with bank-level security.",
                  icon: "💳",
                },
                {
                  step: "3",
                  title: "Trade Like a Pro",
                  desc: "Access spot, futures, and margin trading with advanced charts and tools powered by TradingView.",
                  icon: "📈",
                },
                {
                  step: "4",
                  title: "Withdraw Anytime",
                  desc: "Enjoy fast withdrawals 24/7 with global coverage and ultra-low fees.",
                  icon: "💸",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="text-3xl mb-4 ">{item.icon}</div>
                  <div>
                    <h3 className="text-responsive  font-semibold paragraph-variable mb-2">
                      {item.title}
                    </h3>
                    <p className="paragraph-variable leading-relaxed text-responsive">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Card */}
            <div className="flex justify-center">
              <div className="dark:bg-gradient-to-br from-blue-600 to-green-600 p-1 rounded-3xl shadow-2xl max-w-md w-full">
                <div className="dark:bg-[#1e293b] rounded-3xl p-10 border border-gray-800">
                  <div className="flex justify-center mb-6">
                    <div className="bg-blue-900/50 p-5 rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-14 w-14 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 8h6m-5 0a3 3 0 110 6H9l3 3极速3D彩票开奖网m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4 paragraph-variable">
                    Try Demo Trading
                  </h3>
                  <p className="paragraph-variable text-center leading-relaxed">
                    New to crypto? Test our platform with virtual funds,
                    risk-free. Learn how trading works before investing real
                    money.
                  </p>
                  <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 py-4 rounded-xl font-medium transition-all duration-300 text-lg textwhite">
                    Start Demo Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className=" backdrop-blur-xl paragraph-variable py-16 px-4 md:px-8 rounded-xl shadow-2xl max-w-7xl mx-auto my-8 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className=" border-2 backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center py-5 px-6 text-left font-medium text-lg focus:outline-none "
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="pr-4 ">{faq.question}</span>
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
                  <p className="paragraph-variable border-t-black">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
