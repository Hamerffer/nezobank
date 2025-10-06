import CTASection from "../../cta-section";
import Tradingviewchart from "./crypto-chart";

const CryptoTradingPlatform = () => {
  const benefits = [
    {
      icon: "🏺",
      title: "Lower Fees",
      description:
        "Save on transaction fees compared to traditional exchanges.",
    },
    {
      icon: "🌳",
      title: "Global Accessibility",
      description: "Trade anytime, anywhere, 24/7.",
    },
    {
      icon: "🍳",
      title: "Customizable Trading",
      description: "Filter ads by price, payment method, and preferences.",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Enter amount and select payment method",
      description:
        "Choose how much crypto you want to buy and how you'd like to pay.",
    },
    {
      number: 2,
      title: "Confirm order",
      description: "Review your order details and confirm the transaction.",
    },
    {
      number: 3,
      title: "Receive crypto",
      description:
        "Your cryptocurrency will be delivered to your wallet instantly.",
    },
  ];

  const features = [
    {
      icon: "fas fa-money-bill-transfer",
      title: "Deposit Local Fiat Currencies to Buy Crypto",
      description:
        "Convert cash into crypto. Deposit over 65+ fiat currencies to get started with crypto trading.",
    },
    {
      icon: "fas fa-building-columns",
      title: "Transact Seamlessly Through Bank Transfers",
      description:
        "Transact effortlessly with an extensive selection of banks and payments networks, including SEPA, PPS, Visa and Mastercard.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Swift Transactions With Robust Security",
      description:
        "Experience major transactions and rest easy knowing your funds are secure.",
    },
    {
      icon: "fas fa-coins",
      title: "Zero Fees & Competitive Rates",
      description:
        "Maximize your investment with zero fees and competitive currency rates.",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 bg-transparent ">
        <div className="max-w-7xl w-full bg-transparent rounded-2xl shadow-xl overflow-hidden border ">
          {/* Header */}
          <div className="container mx-auto py-5">
            <div className="bg-gray-400/30 backdrop-blur-md paragraph-variable/40 p-8 border-b border-slate-700 rounded-2xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="text-3xl font-bold mb-2 text-greenish">
                    Crypto Trading Platform
                  </h1>
                  <p className="paragraph-variable">
                    Trade{" "}
                    <span className="text-greenish ">cryptocurrencies</span>{" "}
                    with ease and security
                  </p>
                </div>
                <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 mt-4 md:mt-0 border border-slate-700">
                  <Tradingviewchart value="BINANCE:BNBUSDT" />
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-slate-700">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="feature-icon mr-4">
                    <span className="object-fill text-3xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400">
                      {benefit.title}
                    </h3>
                    <p className="paragraph-variable mt-1 text-">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* How to Buy Section */}
            <div className="p-8">
              <h2 className="text-lg font-bold paragraph-variable/40 mb-6">
                How to Buy Crypto Instantly?
              </h2>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-gray-400/30 p-6 rounded-xl text-center card-hover border border-slate-600"
                  >
                    <div className="w-12 h-12 button-variable rounded-full flex items-center justify-center paragraph-variable/40 font-bold text-lg mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold paragraph-variable/40 mb-2 text-responsive">
                      {step.title}
                    </h3>
                    <p className="paragraph-variable text-small">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Video Section */}
              <div className="dark:bg-slate-900 rounded-xl overflow-hidden mb-10 border border-slate-700">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 paragraph-variable/40">
                    <h3 className="text-2xl font-bold mb-4 text-greenish">
                      Watch How It Works
                    </h3>
                    <p className="paragraph-variable mb-6">
                      See how easy it is to buy cryptocurrency on our platform
                      in less than 2 minutes.
                    </p>
                    <button className="button-variable paragraph-variable/40 font-medium py-3 px-6 rounded-lg flex items-center">
                      <i className="fas fa-play-circle mr-2"></i> Play Video
                    </button>
                  </div>
                  <div className="md:w-1/2 bg-slate-800 flex items-center justify-center min-h-[250px]">
                    <i className="fas fa-play-circle text-5xl text-slate-500 w-full h-full">
                      <Tradingviewchart value="BINANCE:suiUSDT" />
                    </i>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-400/30 border border-slate-600 rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-start">
                      <div className="text-blue-400 mr-4">
                        <i className={`${feature.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="font-semibold paragraph-variable/40 mb-2 ">
                          {feature.title}
                        </h3>
                        <p className="paragraph-variable">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Large Transactions */}
              <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6 mt-6 text-center">
                <div className="max-w-2xl mx-auto">
                  <i className="fas fa-chart-line text-4xl text-blue-400 mb-4"></i>
                  <h3 className="text-xl font-bold paragraph-variable/40 mb-2">
                    Tailored for Large Transactions
                  </h3>
                  <p className="paragraph-variable">
                    Our platform is optimized to handle and support fast
                    transaction sizes.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
          </div>
        </div>

        <style>{`
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(59, 130, 246, 0.1);
        }
      `}</style>
      </div>
      <CTASection />
    </>
  );
};

export default CryptoTradingPlatform;
