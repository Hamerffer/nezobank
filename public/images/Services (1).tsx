const ServicesSection = () => {
  const services = [
    {
      title: "Spot Trading",
      description:
        "Buy and sell Bitcoin, Ethereum, and 200+ cryptocurrencies instantly with low fees.",
      icon: "",
    },
    {
      title: "Futures & Derivatives",
      description:
        "Trade crypto futures with leverage and advanced trading tools for professionals.",
      icon: "",
    },
    {
      title: "Staking & Earn",
      description:
        "Stake your crypto and earn passive income securely with flexible reward plans.",
      icon: "",
    },
    {
      title: "Fiat On/Off Ramp",
      description:
        "Deposit and withdraw in your local currency with secure payment gateways.",
      icon: "",
    },
  ];

  return (
    <section
      className="py-20 bg-[#1e293b]/40 backdrop-blur-xl text-white border-t border-gray-700"
      style={{
        backgroundImage: `url('/images/video-bg.png')`,
        backgroundRepeat: "no-repeat",
      }}
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Exchange Services
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A secure and global crypto exchange platform designed for traders, 
            investors, and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1c2b44]/30 backdrop-blur-lg rounded-xl p-6 
              hover:scale-105 transition-all duration-300 shadow-lg border border-white/10"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <button className="mt-4 text-blue-400 hover:text-blue-300 font-medium flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
