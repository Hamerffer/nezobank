import React from "react";
import p2pImage from "/images/NB (9).png";

const BenefitsP2P: React.FC = () => {
  return (
    <section className="w-full  md:py-16 bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="text-start md:text-left ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 paragraph-variable">
            Why Choose Nezobank P2P?
          </h2>

          <ul className="space-y-2 sm:space-y-3 paragraph-variable ">
            <li>
              <span className="font-bold">Zero Fees:</span> Enjoy zero fees on
              crypto transactions.
            </li>
            <li>
              <span className="font-bold">Diverse Payment Options:</span> Choose
              from over 600 payment options.
            </li>
            <li>
              <span className="font-bold">24/7 Customer Support:</span> Access
              multilingual support anytime and find instant solutions in our
              Help Center.
            </li>
            <li>
              <span className="font-bold">Secure Escrow System:</span> Trade
              with confidence — your assets will only be released upon your
              confirmation.
            </li>
          </ul>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={p2pImage}
            alt="P2P Benefits"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsP2P;
