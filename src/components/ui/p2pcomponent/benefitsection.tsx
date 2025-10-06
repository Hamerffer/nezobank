import React from "react";
import p2pImage from "/images/NB (3).png";

const BenefitsP2P: React.FC = () => {
  return (
    <section className="w-full  bg-transparent mb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center border-amber-400">
        {/* Left Illustration */}
        <div className="flex justify-center h-fit">
          <img src={p2pImage} alt="P2P Benefits" className="w-full max-w-md h-auto" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 paragraph-variable">
            Benefits of P2P
          </h2>
          <h3 className="text-xl font-semibold mb-4 paragraph-variable">
            Why Choose P2P?
          </h3>
          <ul className="space-y-3 paragraph-variable">
            <li>
              <span className="font-bold">Lower Fees:</span> Save on transaction
              fees compared to traditional exchanges.
            </li>
            <li>
              <span className="font-bold">Global Accessibility:</span> Trade
              anytime, anywhere, 24/7.
            </li>
            <li>
              <span className="font-bold">Customizable Trading:</span> Filter
              ads by price, payment method, and other preferences.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsP2P;
