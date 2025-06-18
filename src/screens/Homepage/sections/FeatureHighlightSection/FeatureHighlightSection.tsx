import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Data for the advantage cards
const advantageCards = [
  {
    title: "Bank Partnership Advantages",
    points: [
      "Capture low-risk B2B card spend, reduce fraud with PSP-backed security, and scale globally.",
      "Increase Revenue Streams: Earn higher transaction fees with secure, high-volume B2B payments.",
      "Enhanced Reporting: Access detailed analytics to optimize operations and compliance.",
    ],
    buttonText: "Book a Demo",
    buttonClass: "bg-app-primary",
  },
  {
    title: "Authorized PSPs Advantages",
    points: [
      "Leverage our platform to offer secure, scalable payment solutions to enterprises worldwide.",
      "Expand Market Reach: Tap into RedGirraffe's global network of 97+ countries.",
      "Reduce Operational Costs: Streamline payment processing with integrated APIs.",
    ],
    buttonText: "Contact Sales",
    buttonClass: "bg-[#4a8b7b]",
  },
];

// Data for the feature cards
const featureRows = [
  [
    {
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption for all transactions.",
    },
    {
      title: "Fraud Detection by PSPs",
      description:
        "Leverages top-grade security from payment service providers to prevent fraud.",
    },
    {
      title: "Unified Dashboards Live Analytics",
      description: "Real-time analytics for spend control.",
    },
    {
      title: "ISO 27001 Certified",
      description:
        "Globally recognized framework for data security management.",
    },
  ],
  [
    {
      title: "PCI DSS Compliance",
      description:
        "Adheres to the highest standards for secure card transactions.",
    },
    {
      title: "AI-Powered Smart AI",
      description: "Smart fraud detection and spend optimization.",
    },
    {
      title: "ERP & API Ready",
      description: "Seamless integration with 50+ business tools.",
    },
    {
      title: "Mobile First",
      description: "Full platform access on your phone.",
    },
  ],
];

export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] pt-20 pb-[120px] px-20 w-full">
      <div className="flex flex-col items-center gap-[60px] w-full">
        {/* Header Section */}
        <div className="flex flex-col w-full max-w-[800px] items-center gap-5">
          <h2 className="w-full font-h3-h3-semibold font-[number:var(--h3-h3-semibold-font-weight)] text-[#1a3c34] text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-[var(--h3-h3-semibold-line-height)] [font-style:var(--h3-h3-semibold-font-style)]">
            Powered by Smart Infrastructure
          </h2>
          <p className="w-full px-10 font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-[#4a8b7b] text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
            More than a card—an intelligent spend management platform.
          </p>
        </div>

        {/* Advantage Cards Section */}
        <div className="flex gap-10 w-full">
          {advantageCards.map((card, index) => (
            <Card
              key={index}
              className="flex-1 p-10 rounded-[20px] border border-[#ebebeb]"
            >
              <CardHeader className="p-0 flex flex-col items-center gap-5">
                <CardTitle className="w-[440px] font-h5-h5-semibold font-[number:var(--h5-h5-semibold-font-weight)] text-[#1a3c34] text-[length:var(--h5-h5-semibold-font-size)] text-center tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] [font-style:var(--h5-h5-semibold-font-style)]">
                  {card.title}
                </CardTitle>
                <Separator className="w-[540px] h-px" />
              </CardHeader>
              <CardContent className="p-0 mt-[60px] flex flex-col gap-[60px]">
                <div className="flex flex-col items-start gap-5 w-full">
                  {card.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <img className="w-6 h-6" alt="Label" src="/label.svg" />
                      <p className="flex-1 mt-[-1.00px] font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-text text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-[330px] h-auto px-10 py-4 rounded-[48px] ${card.buttonClass} mx-auto`}
                >
                  <ArrowRightIcon className="w-6 h-6 mr-3" />
                  <span className="font-h6-h6-semibold font-[number:var(--h6-h6-semibold-font-weight)] text-white text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
                    {card.buttonText}
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-col gap-10 w-full">
          {featureRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-5 w-full">
              {row.map((feature, featureIndex) => (
                <Card
                  key={featureIndex}
                  className="flex-1 bg-abu-bg rounded-[10px] border border-[#ebebeb]"
                >
                  <CardContent className="flex flex-col gap-2.5 pt-10 pb-5 px-10">
                    <CardTitle className="h-16 font-h5-h5-semibold font-[number:var(--h5-h5-semibold-font-weight)] text-black text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] [font-style:var(--h5-h5-semibold-font-style)]">
                      {feature.title}
                    </CardTitle>
                    <p className="h-[84px] font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-text text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
