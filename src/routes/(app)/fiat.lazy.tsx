import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/fiat")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-emerald-600 bg-clip-text text-transparent">
              Fiat Currency Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Seamlessly deposit and withdraw local currencies to trade
              cryptocurrencies with ease on Nezobank.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/logo3.png"
              alt="Nezobank"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Deposit Section */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Deposit Local Fiat Currencies to Buy Crypto
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Easily fund your account with local currency and start trading
              cryptocurrencies in minutes. Our secure payment processing ensures
              your transactions are safe and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bank Transfer</h3>
              <p className="text-gray-400">
                Secure bank transfers with low fees and fast processing times.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Credit/Debit Card</h3>
              <p className="text-gray-400">
                Instant deposits using your credit or debit card with top-tier
                security.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-Wallets</h3>
              <p className="text-gray-400">
                Connect your favorite e-wallets for quick and easy transactions.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cash Payments</h3>
              <p className="text-gray-400">
                Deposit cash at thousands of locations worldwide for your
                convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Leading Crypto Trading Platform
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Nezobank offers industry-leading features for both beginners and
              advanced traders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start mb-8">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                  <p className="text-gray-400">
                    98% of customer funds are stored in cold storage with
                    multi-signature protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Lightning Fast Transactions
                  </h3>
                  <p className="text-gray-400">
                    Process transactions in seconds, not days, with our advanced
                    trading engine.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    24/7 Customer Support
                  </h3>
                  <p className="text-gray-400">
                    Our support team is available around the clock to assist you
                    with any issues.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">
                    Supported Currencies
                  </h3>
                  <span className="bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full">
                    30+
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                    <span className="text-2xl mr-3">🇺🇸</span>
                    <span>USD</span>
                  </div>
                  <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                    <span className="text-2xl mr-3">🇪🇺</span>
                    <span>EUR</span>
                  </div>
                  <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                    <span className="text-2xl mr-3">🇬🇧</span>
                    <span>GBP</span>
                  </div>
                  <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                    <span className="text-2xl mr-3">🇯🇵</span>
                    <span>JPY</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">
                  We support over 30 fiat currencies with more being added
                  regularly.
                </p>

                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  View all supported currencies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-400">
              Find answers to common questions about our fiat services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                How long do deposits take to process?
              </h3>
              <p className="text-gray-400">
                Bank transfers typically take 1-3 business days. Credit/debit
                card deposits are usually instant. E-wallet deposits are
                processed within minutes during business hours.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Are there any fees for depositing fiat currency?
              </h3>
              <p className="text-gray-400">
                Bank transfers have minimal fees (0.1% with a minimum of $10).
                Credit/debit card deposits have a 2.5% fee. E-wallet deposits
                vary by provider but are typically between 1-2%. Nezobank does
                not charge any additional fees for deposits.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Is there a minimum deposit amount?
              </h3>
              <p className="text-gray-400">
                The minimum deposit amount varies by currency and method. For
                USD, the minimum is $10 for bank transfers and $20 for
                credit/debit cards. There is no minimum for e-wallet deposits.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                How do I withdraw my funds to my bank account?
              </h3>
              <p className="text-gray-400">
                Withdrawing funds is simple. Go to the 'Withdraw' section,
                select 'Bank Transfer', enter the amount and your bank details.
                Withdrawals are typically processed within 1-2 business days.
                There may be a small fee depending on your currency and bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join millions of users who trust Nezobank for their cryptocurrency
            trading needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Create Account
            </button>
            <button className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg border border-gray-700 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
