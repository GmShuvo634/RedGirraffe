import { ArrowRightIcon } from "lucide-react";
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
      title: "AI-Powered Smarts",
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
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] pt-8 sm:pt-12 lg:pt-15 pb-12 sm:pb-16 lg:pb-20 xl:pb-[120px] px-4 sm:px-6 lg:px-8 xl:px-20 w-full">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col w-full max-w-4xl items-center gap-4 sm:gap-5">
          <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]">
            Powered by Smart Infrastructure
          </h2>
          <p className="w-full px-4 sm:px-6 lg:px-10 font-h6-h6-regular text-[#4a8b7b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
            More than a card—an intelligent spend management platform.
          </p>
        </div>

        {/* Advantage Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
          {advantageCards.map((card, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 lg:p-10 rounded-[20px] border border-[#ebebeb] touch-manipulation"
            >
              <CardHeader className="p-0 flex flex-col items-center gap-4 sm:gap-5">
                <CardTitle className="w-full font-h6-h6-semibold text-[#1a3c34] text-base sm:text-lg lg:text-xl xl:text-[length:var(--h6-h6-semibold-font-size)] text-center tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)]">
                  {card.title}
                </CardTitle>
                <Separator className="w-full h-px" />
              </CardHeader>
              <CardContent className="p-0 mt-8 sm:mt-10 lg:mt-[60px] flex flex-col gap-8 sm:gap-10 lg:gap-[60px]">
                <div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
                  {card.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <img className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" alt="Label" src="/src/public/thin-arrow.svg" />
                      <p className="flex-1 font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button
                    className={`w-full max-w-[330px] h-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-[48px] ${card.buttonClass} touch-manipulation`}
                  >
                    <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    <span className="font-h6-h6-semibold text-white text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                      {card.buttonText}
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full">
          {featureRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
              {row.map((feature, featureIndex) => (
                <Card
                  key={featureIndex}
                  className="bg-abu-bg rounded-[10px] border border-[#ebebeb] pb-4 touch-manipulation"
                >
                  <CardContent className="flex flex-col gap-2.5 pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-5 px-6 sm:px-8 lg:px-10">
                    <CardTitle className="font-h6-h6-semibold text-black text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)] min-h-[3rem] sm:min-h-[4rem]">
                      {feature.title}
                    </CardTitle>
                    <p className="font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)] min-h-[4rem] sm:min-h-[5rem] lg:min-h-[84px]">
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