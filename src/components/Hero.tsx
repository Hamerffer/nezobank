import { Link } from "@tanstack/react-router";
export function Herosection() {
  return (
    <section
      className="bg-transparent  headingwhite py-5 md:py-24"
      style={{
        backgroundImage: `url('/images/data-bg.png')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <meta
        name="keywords"
        content="nezobank, Best crypto exchange in India, crypto exchange, buy crypto, sell crypto, Bitcoin, Ethereum, crypto trading platform"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-black dark:text-white">
              Trade, Invest & Grow with{" "}
              <span
                className="bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                style={{ backgroundImage: "var(--text-gradientbackground)" }}
              >
                Nezobank
              </span>
              <span className="block mt-3 text-lg md:text-xl lg:text-2xl text-variable italic">
                — The Future of Crypto Exchange
              </span>
            </h1>

            <p className=" text-sm md:text-[17px] dark:text-white  max-w-lg text-black">
              Join the fastest-growing <strong>cryptocurrency exchange</strong>{" "}
              to{" "}
              <strong>
                buy Bitcoin, trade Ethereum, and swap 100+ digital assets
              </strong>{" "}
              securely. Experience <strong>low-fee crypto trading</strong> with
              advanced tools built for beginners and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/signup">
                <button className="paragraphColour border w-full  button-variable  font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Start Trading
                </button>
              </Link>
              <button className="border border-blue-500 text-blue-300 hover:bg-blue-800 hover:headingwhite font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="images/Hero.png"
                alt="Crypto exchange, Top 10 crypto exchanges 2025"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-16 w-16 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
