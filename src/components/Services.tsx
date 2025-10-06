import { Link } from "@tanstack/react-router";

const ServicesSection = () => {
  const services = [
    {
      title: "Spot Trading",
      href: "/spot",
      description:
        "Buy and sell Bitcoin, Ethereum, and 200+ cryptocurrencies instantly with low fees.",
      image: "/images/trader.png",
    },
    {
      title: "Futures Trading",
      href: "/future",
      description:
        "Trade crypto futures with leverage and advanced trading tools for professionals.",
      image: "/images/forecasting.png",
    },
    {
      title: "Margin Trading",
      href: "/margin",
      description:
        "Stake your crypto and earn passive income securely with flexible reward plans.",
      image: "/images/margin.png",
    },
    {
      title: "Option Trading",
      href: "/option",
      description:
        "Deposit and withdraw in your local currency with secure payment gateways.",
      image: "/images/Portfolio.png",
    },
  ];

  return (
    <section
      className="text-black dark:text-white"
      style={{
        backgroundImage: `url('/images/video-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="services"
    >
      <title>
        nezobank.com | NezoBank Services - Crypto Exchange, Payments & Blockchain Solutions
      </title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-6xl font-bold">
            Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--text-gradientbackground)" }}
            >
              Exchange Services
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-xl paragraph-variable max-w-3xl mx-auto">
            A secure and global crypto exchange platform designed for traders, investors, and institutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link to={service.href} key={index}>
              <div
                className="rounded-2xl p-6 flex flex-col justify-between h-80 
                transition-all duration-300 hover:scale-105 shadow-xl"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div>
                  <div className="w-14 h-14 mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base paragraph-variable leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <button
                  className="mt-4 font-medium flex items-center"
                  style={{ color: "var(--link-color)" }}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
