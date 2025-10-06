import { Link } from "@tanstack/react-router";
import { useState } from "react";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      title: "Create Your Crypto Account",
      description:
        "Register in minutes with Nezobank’s simple onboarding. Complete secure KYC verification and unlock instant access to our global cryptocurrency exchange platform.",
      image: "/images/createaccount.png",
      features: [
        "Fast signup with email or mobile",
        "Regulated KYC verification",
        "2FA & multi-layered security",
        "Customizable trading dashboard",
      ],
    },
    {
      title: "Connect Your Payment Methods",
      description:
        "Easily link your bank account, debit/credit cards, or e-wallets. Nezobank supports multi-currency deposits and withdrawals for seamless crypto trading.",
      image: "/images/connectpayment.png",
      features: [
        "Instant bank transfers",
        "Visa/MasterCard integration",
        "Multiple fiat currency support",
        "Lightning-fast deposits & withdrawals",
      ],
    },
    {
      title: "Buy & Sell Cryptocurrencies",
      description:
        "Trade Bitcoin, Ethereum, and 200+ digital assets instantly. Enjoy competitive exchange rates, low trading fees, and advanced order options on Nezobank.",
      image: "/images/buyandsell.png",
      features: [
        "Instant crypto-to-fiat swaps",
        "Low trading & withdrawal fees",
        "Real-time market prices",
        "Recurring buy/sell options",
      ],
    },
    {
      title: "Manage Your Crypto Portfolio",
      description:
        "Track and grow your digital assets with our professional portfolio management tools. Get real-time insights, set alerts, and optimize your investments.",
      image: "/images/manageprofile.png",
      features: [
        "Smart portfolio tracking",
        "Custom price alerts",
        "In-depth market analytics",
        "Tax & compliance reports",
      ],
    },
    {
      title: "Trade Securely 24/7",
      description:
        "Nezobank protects your assets with industry-leading blockchain security. All transactions are encrypted, stored in cold wallets, and insured against threats.",
      image: "/images/Trade247 (2).png",
      features: [
        "Bank-grade encryption",

        "98% assets in cold storage",
        "Insurance-backed protection",
      ],
    },
  ];

  return (
    <section className="  text-white ">
      <div className="container mx-auto px-4 max-w-7xl ">
        {/* Header */}
        <div className="md:text-center mb-16  p-2">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            How{" "}
            <span
              className=" bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]"
              style={{ backgroundImage: "var(--text-gradientbackground)" }}
            >
              Nezobank
            </span>{" "}
            Works
          </h2>
          <p className="text-start text-responsive paragraph-variable  max-w-7xl mx-auto">
            Discover how Nezobank makes crypto trading simple, secure, and
            accessible. From account setup to managing your portfolio, our
            exchange is built for beginners and pro traders alike.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center mb-8 gap-3">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`px-3 py-3 w-full md:w-auto text-responsive   rounded-lg font-medium transition-all flex items-center ${
                  activeTab === index
                    ? " text-black shadow-lg"
                    : "bg-[#1e293b] text-white hover:bg-[#2d3748]"
                }`}
                onClick={() => setActiveTab(index)}
                style={
                  activeTab === index
                    ? { backgroundImage: "var(--text-gradientbackground)" }
                    : undefined
                }
              >
                <span className="flex items-center justify-center w-6 h-6 bg-gray-300 bg-opacity-20 rounded-full mr-2 text-black">
                  {index + 1}
                </span>
                {step.title}
              </button>
            ))}
          </div>

          <div
            className="rounded-2xl p-6 md:p-8 
border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
                <h3 className="text-lg font-bold mb-4">
                  {steps[activeTab].title}
                </h3>
                <p className="paragraph-variablemb-6 text-responsive">
                  {steps[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {steps[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0 ">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-responsive ">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-fit h-64 md:h-80 overflow-hidden rounded-xl shadow-lg bg-gray-100">
                  
                  <img
                    src={steps[activeTab].image}
                    alt={steps[activeTab].title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6 md:text-center text-start">
            Start  Trading on <span className="text-emerald-variable">Nezobank </span> Today
          </h3>
          <p className="text-sm  md:text-xl paragraph-variable mb-8 max-w-7xl mx-auto">
            Join millions of users who trust Nezobank for secure, fast, and
            low-fee cryptocurrency trading. Buy Bitcoin, Ethereum, and more in
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup">
              <button
                className="bg-transparent border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-medium transition button-variable w-full"
                
              >
                Create Account
              </button>
            </Link>
            <button className="bg-transparent border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-medium transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
