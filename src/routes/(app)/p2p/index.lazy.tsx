import { createLazyFileRoute } from "@tanstack/react-router";

import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import BenefitsP2P from "../../../components/ui/p2pcomponent/benefitsection";
import Whychoose from "../../../components/ui/p2pcomponent/whychoose";
import LearnP2P from "../../../components/ui/p2pcomponent/Learnp2p";
import PaymentMethods from "../../../components/ui/p2pcomponent/payment";
import P2pFAQ from "../../../components/ui/p2pcomponent/p2pfaq";
import CTASection from "../../../components/cta-section";
import P2P_buy_sell from "../../../components/ui/p2pcomponent/p2p_buy_sell";
import DepositSection from "../../../components/ui/Deposit/deposit";
export const Route = createLazyFileRoute("/(app)/p2p/")({
  component: RouteComponent,
});

function RouteComponent() {
  const steps = [
    {
      id: 1,
      title: "Step 1: Select an Ad",
      description: "Browse the ads, choose your preferred one, and click Buy.",
      icon: "📄",
    },
    {
      id: 2,
      title: "Step 2: Confirm Payment",
      description:
        "Click Payment Completed after making the transfer to the seller's bank account.",
      icon: "💰",
    },
    {
      id: 3,
      title: "Step 3: Receive Coins",
      description:
        "Once the seller confirms receipt of payment, the coins will be released to your account.",
      icon: "⚡",
    },
  ];
  return (
    <>
      <section>
        <P2P_buy_sell />

        <DepositSection />
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold paragraph-variable">
              How to Get Started With P2P
            </h2>
            <p className="mt-3 paragraph-variable max-w-2xl">
              Ready to begin your P2P trading journey? Follow this step-by-step
              guide to complete your first transaction.
            </p>
          </div>
          <div className="space-x-3 hidden md:flex">
            <Button variant="outline">Buy Coins</Button>
            <Button
              variant="outline"
              className="paragraph-variable hover:bg-gray-700"
            >
              Sell Coins
            </Button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 items-stretch shadow-2xl">
          {steps.map((step) => (
            <Card
              key={step.id}
              className="flex flex-col justify-center text-center rounded-xl  hover:shadow-lg transition-all shadow-xl"
            >
              <CardContent className="p-6 ">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg paragraph-variable">
                  {step.title}
                </h3>
                <p className="paragraph-variable text-sm mt-2">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Video / Image */}
          <Card className="rounded-xl overflow-hidden shadow-md">
            <CardContent className="p-0">
              <iframe
                className="w-full h-56 md:h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Guide Video"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      <BenefitsP2P />
      <Whychoose />
      <LearnP2P />
      <PaymentMethods />
      <P2pFAQ />
      <CTASection />
    </>
  );
}
