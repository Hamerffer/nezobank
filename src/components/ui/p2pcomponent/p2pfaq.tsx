import { useState } from "react";

const P2pFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const p2pFaqs = [
    {
      question: "Are there any transaction fees on the P2P platform?",
      answer:
        "Nezobank P2P trading has minimal fees. Sellers pay a small transaction fee (typically 0.1% - 0.3%) only after a successful trade. Buyers trade with zero fees, making it one of the most cost-effective ways to buy and sell cryptocurrencies.",
    },
    {
      question: "Do I need Identity Verification (KYC) to perform P2P trading?",
      answer:
        "Yes, Identity Verification (KYC) is required for P2P trading on Nezobank. This ensures a secure trading environment for all users and complies with financial regulations. The verification process is quick and can be completed in just a few minutes.",
    },
    {
      question: "Can I trade with users in other countries or regions?",
      answer:
        "Currently, Nezobank P2P trading is limited to users within the same country. This ensures payment method compatibility and reduces transaction complexities. We're working to expand our cross-border P2P capabilities in the future.",
    },
    {
      question: "What payment methods are supported for P2P trade?",
      answer:
        "Nezobank supports a wide range of payment methods including bank transfers, UPI, IMPS, PayPal, and popular e-wallets. The available options vary by region, and you can filter ads by your preferred payment method.",
    },
  ];

  return (
    <section className="border-t border-gray-700 ">
      <div className=" text-white py-16 px-4 md:px-8 rounded-xl shadow-2xl max-w-7xl mx-auto my-8 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-greenish">
          Crypto & Payment Gateway FAQs
        </h2>

        <div className="space-y-4">
          {p2pFaqs.map((faq, index) => (
            <div
              key={index}
              className="faq-question--card backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center py-5 px-6 text-left font-medium text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="pr-4">{faq.question}</span>
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
                <p className="paragraph-variable">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">
          Still have questions about our crypto services or payment gateway?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              Contact Support
            </button>
          </Link>
          <button className="border border-blue-600 text-blue-400 hover:bg-blue-800 hover:bg-opacity-20 font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Explore Crypto Services
          </button>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default P2pFAQ;
