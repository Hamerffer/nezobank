import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "/images/logo1.png";
import TradingDropdown, { BuyCryptoDropdown } from "./ui/Trading-Dropdown";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<{
    trade: boolean;
    buy: boolean;
  }>({ trade: false, buy: false });

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // auto-close on desktop
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#1e293b] dark:bg-[#1e293b]/40 backdrop-blur-xl text-white shadow-lg border-b border-gray-700 h-16 md:h-20 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 md:h-16 pt-2 md:pt-3">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-12 md:h-16 w-12 md:w-16 flex items-center justify-center mr-4 md:mr-32">
                <img
                  src={logo}
                  alt="NezoBank Logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1 gap-2">
              <Link
                to="/"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 textwhite"
              >
                Home
              </Link>

              <Link
                to="/market"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 textwhite"
              >
                Market
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 textwhite"
              >
                Contact
              </Link>
              <TradingDropdown setISMenuOpen={setIsMenuOpen} />
              <BuyCryptoDropdown setISMenuOpen={setIsMenuOpen} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 gap-2">
            <div className="h-6 w-px bg-gray-700 mx-2"></div>
            <ModeToggle />
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium button-variable transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg text-sm font-medium button-variable transition-all duration-200 shadow-lg hover:scale-105"
            >
              Sign Up
            </Link>
            {/* <Link
              to="/dashboard"
              className="px-4 py-2 rounded-lg text-sm font-medium button-variable transition-all duration-200 shadow-lg hover:scale-105"
            >
              Dashboard
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="mr-3">
              <ModeToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md textwhite focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Fixed to right side */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 h-screen ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop with click to close */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu panel sliding in from right */}
        <div
          className={`absolute top-0 right-0 h-[100vh] w-full max-w-sm bg-[#131822] shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="px-5 pt-5 pb-6 flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-md flex items-center justify-center overflow-hidden">
                  <Link to={"/"}>
                    <img
                      src={logo}
                      alt="NezoBank Logo"
                      className="h-full w-full object-contain"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md p-2 inline-flex items-center justify-center textwhite focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 textwhite"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/market"
                  className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-[#2a3a56] transition-colors duration-200 textwhite"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Market
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-[#2a3a56] transition-colors duration-200 textwhite"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Accordion: Trade */}
                <div className="border border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() =>
                      setMobileOpen({ trade: !mobileOpen.trade, buy: false })
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="text-base font-medium textwhite">
                      Trade
                    </span>
                    <svg
                      className={`h-4 w-4 transition-transform textwhite ${mobileOpen.trade ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${mobileOpen.trade ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-2">
                        {[
                          { title: "Spot", href: "/spot" },
                          { title: "Futures", href: "/future" },
                          { title: "Options", href: "/option" },
                         
                     
                         
                        ].map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg hover:bg-[#222d43] text-white text-sm"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accordion: Buy Crypto */}
                <div className="border border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() =>
                      setMobileOpen({ trade: false, buy: !mobileOpen.buy })
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="text-base font-medium textwhite">
                      Buy Crypto
                    </span>
                    <svg
                      className={`h-4 w-4 transition-transform textwhite ${mobileOpen.buy ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${mobileOpen.buy ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-2">
                        {[
                          { title: "Spot Trading", href: "/spot" },
                          { title: "Futures Trading", href: "/future" },
                          { title: "Margin Trading", href: "/margin" },
                          { title: "P2P Trading", href: "/p2p" },
                          { title: "One-Click Buy", href: "/oneclickbuy" },
                        ].map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg hover:bg-[#222d43] text-white text-sm"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="block px-4 py-2 mt-6 rounded-lg text-base font-medium text-center button-variable transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-center button-variable transition-colors duration-200 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="px-5  border-t border-gray-700"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
