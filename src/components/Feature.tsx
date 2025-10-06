import { useState } from "react";

const FeaturesSection = () => {
  const [active, setactive] = useState("1");
  return (
    <section className="about-us py-10 ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white text-start md:text-center">
            About <span className="text-emerald-variable">NezoBank</span>
          </h2>
          <p className="mt-4  text-gray-600 dark:text-gray-300 text-start max-w-7xl text-responsive ">
            NezoBank is a crypto exchange app that makes buying, selling, and
            trading crypto seamless and secure. Your gateway to powerful
            <span className="text-emerald-variable ">DeFi</span>. With
            NezoBank, you gain access to real-time market insights, advanced
            trading tools, and a{" "}
            <span className="text-emerald-variable font-semibold">
              secure wallet
            </span>{" "}
            for all your digital assets. Whether you're a beginner or a seasoned
            trader, our platform ensures you can manage your portfolio with
            confidence and ease.
            <br />
            Experience instant deposits and withdrawals, robust security
            protocols, and intuitive interfaces designed to simplify your crypto
            journey. NezoBank empowers you to{" "}
            <span className=" font-semibold">
              trade smarter
            </span>{" "}
            and unlock the full potential of decentralized finance.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 leading-snug">
              We are{" "}
              <span className="text-emerald-variable"> changing the way</span>{" "}
              people trade crypto
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-start text-responsive">
              A decentralized app for everyone who wants to trade instantly and
              securely. Connect your wallet and start swapping tokens at fair
              market prices with no intermediaries. Join thousands of users
              already trading on NezoBank.
            </p>

            {/* Tabs */}
            <div>
              {/* Tab Buttons */}
              <div className="flex overflow-x-auto md:overflow-x-visible gap-4 border-b border-gray-300 dark:border-gray-700 mb-6 max-w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                <button
                  className={`whitespace-nowrap py-2 px-4 ${
                    active === "1"
                      ? "text-emerald-variable border-b-2 border-emerald-500 font-medium"
                      : "text-gray-600 dark:text-gray-300"
                  } font-medium`}
                  onClick={() => setactive("1")}
                >
                  Our Mission
                </button>
                <button
                  className={`whitespace-nowrap py-2 px-4 ${
                    active === "2"
                      ? "text-emerald-variable border-b-2 border-emerald-500 font-medium"
                      : "text-gray-600 dark:text-gray-300"
                  } font-medium`}
                  onClick={() => setactive("2")}
                >
                  Advantages
                </button>
                <button
                  className={`whitespace-nowrap py-2 px-4 ${
                    active === "3"
                      ? "text-emerald-variable border-b-2 border-emerald-500 font-medium"
                      : "text-gray-600 dark:text-gray-300"
                  } font-medium`}
                  onClick={() => setactive("3")}
                >
                  Guarantees
                </button>
              </div>

              {/* Tab Content */}
              <div className="text-gray-600 dark:text-gray-300">
                {active === "1" && (
                  <p className="text-responsive">
                    Our mission is to empower users with decentralized finance,
                    giving full control of assets without third-party
                    interference. NezoBank makes DeFi simple and accessible.
                  </p>
                )}
                {active === "2" && (
                  <p className="text-responsive">
                    Full control of assets: Users manage their funds without
                    third-party interference. Decentralized finance: Access
                    modern, trustless financial tools. Simplicity: Easy-to-use
                    interface makes DeFi accessible for everyone.
                  </p>
                )}
                {active === "3" && (
                  <p className="text-responsive">
                    Guaranteed full control of assets: No third-party
                    interference. Guaranteed access to decentralized finance:
                    Trustless, transparent, and modern. Guaranteed simplicity:
                    User-friendly platform for everyone. Guaranteed security:
                    Advanced protocols to protect your crypto.
                  </p>
                )}
              </div>
            </div>

            <a
              href="/about"
              className="inline-block mt-8 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition"
            >
              Read More
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <img
              src="/images/about-us-icon.png"
              alt="about nezobank"
              className="rounded-xl shadow-2xl max-w-md relative z-10"
            />
            {/* Floating Card Effect */}
            <div className="absolute -bottom-10 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg px-6 py-4 w-60">
              <p className="text-gray-900 dark:text-white font-semibold mb-1">
                Trusted Worldwide
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                50,000+ active traders every day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
