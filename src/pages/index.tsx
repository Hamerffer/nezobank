import CTASection from "../components/cta-section";
import FeaturesSection from "../components/Feature";
import { Herosection } from "../components/Hero";
import HowItWorksSection from "../components/How-It-Works";
import NezobankCryptoFAQ from "../components/Nezobank-Crypto-FAQ";
import ServicesSection from "../components/Services";

import Bitcoinabout from "../components/ui/bitcoinabout";
// import Tradingchart from "../components/ui/tradingchart";

const Index = () => {
  return (
    <>
      <Herosection />
      <FeaturesSection />
      <ServicesSection />

      <Bitcoinabout />
      <HowItWorksSection />
      <NezobankCryptoFAQ />
      <CTASection />
    </>
  );
};

export default Index;
