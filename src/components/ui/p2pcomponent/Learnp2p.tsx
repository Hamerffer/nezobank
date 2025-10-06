import React from "react";
import p2p1 from "/images/p2ponnezobank.png";
import p2p2 from "/images/p2pscam.png";
import p2p3 from "/images/earnp2p.png";
import { Link } from "@tanstack/react-router";

const LearnP2P: React.FC = () => {
  const cards = [
    {
      image: p2p1,
      title: "P2P on Nezobank Trading",
      desc: "Everything you need to know for a seamless and secure peer-to-peer trading experience.",
      link: "1",
    },
    {
      image: p2p2,
      title: "Avoid P2P Crypto Scams and Fraud",
      desc: "Learn about common tactics like fake escrow services, chargebacks, phishing, and non-payment schemes to stay safe in P2P trading.",
      link: "2",
    },
    {
      image: p2p3,
      title: "Earn Money With P2P Trading",
      desc: "Discover 5 essential tips to help you earn money safely on Bybit P2P.",
      link: "3",
    },
  ];

  return (
    <section className="w-full py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Learn About P2P</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="dark:bg-gray-900  shadow-md hover:shadow-xl transition   border-2"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 sm:h-52 md:h-52  mb-4 dark:bg-gray-800 shadow rounded-lg"
              />

              <h3 className="text-lg font-semibold mb-2 paragraph-variable">
                {card.title}
              </h3>
              <p className="paragraph-variable text-sm mb-3">{card.desc}</p>
              <Link
                to={card.link}
                className="text-orange-500 text-sm font-medium hover:underline"
              >
                Read More &gt;&gt;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnP2P;
