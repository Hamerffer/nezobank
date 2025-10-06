import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import img1 from "/images/stock.png";
import img2 from "/images/margin.png";
import img3 from "/images/p2p.png";
import img4 from "/images/forex.png";
import img5 from "/images/checkout.png";
import img6 from "/images/web3.png";
import img7 from "/images/forecasting.png";
import img9 from "/images/trader (1).png";
import img10 from "/images/answer.png";
const arr = [img1, img4, img2, img3, img5];
const arr2 = [img9, img7, img10, img2, img6];
// Types for dropdown items
interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
  isNew?: boolean;
}

// Trading Dropdown Component
type TradingDropdownProps = {
  setISMenuOpen: (value: boolean) => void;
};

export default function TradingDropdown({
  setISMenuOpen,
}: TradingDropdownProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Trading options from your image
  const tradingOptions: DropdownItem[] = [
    {
      title: "Spot",
      description: "Trade the Spot market with up to 10x leverage",
      href: "/spot",
    },
    {
      title: "Futures",
      description:
        "Trade Perpetual and Futures contracts settled in USDT, USDC, or other cryptos",
      href: "/future",
    },
    {
      title: "Options",
      description: "Trade Options contracts, settled in USDT or USDC",
      href: "/option",
    },
  
    
  ];

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hover handlers (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setOpen(false), 200);
    }
  };

  const handleClick = () => {
    if (isMobile) setOpen(!open);
  };

  return (
    <div
      className="relative w-full md:w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle Button */}
      <button
        onClick={handleClick}
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium  transition-all duration-200 hover:scale-105 flex items-center textwhite"
      >
        Trade
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown with animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        } ${
          isMobile
            ? "relative w-full mt-2 bg-[#1a2332] border border-gray-700 rounded-xl"
            : "absolute left-0 mt-3 w-80 bg-[#1a2332]/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl"
        }`}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold paragraph-variable flex items-center textwhite">
              Trading
            </h3>
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm paragraph-variable mb-5 textwhite">
            Access the latest trading opportunities
          </p>

          <div className="max-h-80 overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid gap-3 textwhite">
              {tradingOptions.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setISMenuOpen(false)}
                  className="block p-3 rounded-xl hover:bg-[#222d43] transition-all duration-200 group border border-transparent hover:border-blue-500/20 textwhite"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-2 rounded-lg mr-3 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                        <div className="h-5 w-5  rounded-md">
                          {" "}
                          <img src={arr2[index]} className="h-5 w-5" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium paragraph-variable textwhite">
                            {item.title}
                          </h4>
                          {item.isNew && (
                            <span className="ml-2 text-xs bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded-md">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-xs paragraph-variable mt-1 leading-relaxed textwhite">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="h-4 w-4 paragraph-variable group-hover:text-blue-400 transition-colors mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-700/50">
            <Link
              to="."
              className=" flex items-center justify-center w-full py-3 text-black-400 button-variable rounded-xl transition-all duration-200 text-sm font-medium group textwhite"
              onClick={() => setISMenuOpen(false)}
            >
              Explore All Products
              <svg
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(30, 41, 59, 0.5);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(99, 102, 241, 0.6);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(99, 102, 241, 0.8);
          }
        `}
      </style>
    </div>
  );
}

// Buy Crypto Dropdown Component (Improved)
export function BuyCryptoDropdown({ setISMenuOpen }: TradingDropdownProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cryptoOptions: DropdownItem[] = [
    {
      title: "Spot Trading",
      description: "Trade popular cryptocurrencies with advanced tools",
      href: "/spot",
    },
    {
      title: "Futures Trading",
      description: "Long or short with up to 125x leverage",
      href: "/future",
    },
    {
      title: "Margin Trading",
      description: "Borrow funds to amplify your trading positions",
      href: "/margin",
    },
    {
      title: "P2P Trading",
      description: "Trade directly with other users",
      href: "/p2p",
    },
    {
      title: "One-Click Buy",
      description: "Instant cryptocurrency purchases",
      href: "/oneclickbuy",
      isNew: true,
    },
  ];

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hover handlers (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setOpen(false), 200);
    }
  };

  const handleClick = () => {
    if (isMobile) setOpen(!open);
  };

  return (
    <div
      className="relative w-full md:w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle Button */}
      <button
        onClick={handleClick}
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium  transition-all duration-200 hover:scale-105 flex items-center textwhite"
      >
        Buy Crypto
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown with animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        } ${
          isMobile
            ? "relative w-full mt-2 bg-[#1a2332] border border-gray-700 rounded-xl"
            : "absolute left-0 mt-3 w-72 bg-[#1a2332]/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl"
        }`}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold textwhite">Crypto Services</h3>
            <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm textwhite mb-5">
            Multiple ways to buy and trade cryptocurrencies
          </p>

          <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid gap-3">
              {cryptoOptions.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setISMenuOpen(false)}
                  className="block p-3 rounded-xl hover:bg-[#222d43] transition-all duration-200 group border border-transparent hover:border-purple-500/20 textwhite"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-2 rounded-lg mr-3 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors">
                        <div className="h-5 w-5 rounded-md">
                          <img src={arr[index]} className="h-5 w-5" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium textwhite">
                            {item.title}
                          </h4>
                          {item.isNew && (
                            <span className="ml-2 text-xs bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded-md">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-xs paragraph-variable mt-1 leading-relaxed textwhite">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="h-4 w-4 paragraph-variable group-hover:text-purple-400 transition-colors mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-700/50">
            <Link
              to="."
              className="flex items-center justify-center w-full py-3 text-black-400 button-variable rounded-xl transition-all duration-200 text-sm font-medium group"
              onClick={() => setISMenuOpen(false)}
            >
              View All Options
              <svg
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Finance Dropdown Component
export function FinanceDropdown({ setISMenuOpen }: TradingDropdownProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const financeOptions: DropdownItem[] = [
    {
      title: "Earn",
      description: "Grow your assets with high-yield products",
      href: "/earn",
    },
    {
      title: "Staking",
      description: "Earn rewards by staking your cryptocurrencies",
      href: "/staking",
    },
    {
      title: "Lending",
      description: "Lend your assets and earn interest",
      href: "/lending",
    },
    {
      title: "VIP Services",
      description: "Exclusive benefits for high-volume traders",
      href: "/vip",
    },
    {
      title: "Savings",
      description: "Flexible and fixed savings options",
      href: "/savings",
      isNew: true,
    },
  ];

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hover handlers (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setOpen(false), 200);
    }
  };

  const handleClick = () => {
    if (isMobile) setOpen(!open);
  };

  return (
    <div
      className="relative w-full md:w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle Button */}
      <button
        onClick={handleClick}
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2a3a56] transition-all duration-200 hover:scale-105 flex items-center"
      >
        Finance
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown with animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        } ${
          isMobile
            ? "relative w-full mt-2 bg-[#1a2332] border border-gray-700 rounded-xl"
            : "absolute left-0 mt-3 w-72 bg-[#1a2332]/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl"
        }`}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold paragraph-variable">
              Financial Services
            </h3>
            <div className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm paragraph-variable mb-5">
            Grow your wealth with our financial products
          </p>

          <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid gap-3">
              {financeOptions.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setISMenuOpen(false)}
                  className="block p-3 rounded-xl hover:bg-[#222d43] transition-all duration-200 group border border-transparent hover:border-yellow-500/20"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-2 rounded-lg mr-3 group-hover:from-yellow-500/20 group-hover:to-orange-500/20 transition-colors">
                        <div className="h-5 w-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-md"></div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium paragraph-variable">
                            {item.title}
                          </h4>
                          {item.isNew && (
                            <span className="ml-2 text-xs bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded-md">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-xs paragraph-variable mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="h-4 w-4 paragraph-variable group-hover:text-yellow-400 transition-colors mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-700/50">
            <Link
              to="."
              className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 hover:from-yellow-600/30 hover:to-orange-600/30 text-yellow-300 rounded-xl transition-all duration-200 text-sm font-medium group"
              onClick={() => setISMenuOpen(false)}
            >
              Explore Financial Products
              <svg
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
