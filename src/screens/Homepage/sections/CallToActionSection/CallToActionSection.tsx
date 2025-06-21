import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Data for the cards
const pricingCards = [
  {
    title: "Bank Partnership",
    description:
      "Reach out to RedGirraffe to engage in the B2B high-value global product partnership",
    features: [
      "Existing banking relationship",
      "Negotiated commercial rates",
      "Regulatory compliance",
    ],
    buttonText: "Request a Demo",
    variant: "white",
  },
  {
    title: "Pay-pulse Commercial",
    description:
      "High-value recurring payment capability across all major global payment networks",
    features: [
      "Partnered with leading global payment rails",
      "Compliance managed by world-class PSPs",
      "Alternative Payment Methods",
      "97+ Country Coverage",
    ],
    buttonText: "Request a Demo",
    variant: "green",
  },
  {
    title: "Authorised PSPs",
    description:
      "Partner with RedGirraffe to unlock large-scale high-value recurring product across geographies where you operate",
    features: [
      "Tier 1 PSPs only",
      "Competitive interchange",
      "Local market expertise",
    ],
    buttonText: "Request a Demo",
    variant: "white",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-[120px] px-4 sm:px-6 lg:px-8 xl:px-20 bg-[#e0eae8] w-full">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full max-w-7xl mx-auto">
        {/* Heading and description */}
        <div className="flex flex-col w-full max-w-4xl items-center gap-4 sm:gap-5">
          <h2 className="font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]">
            RedGirraffe Global Commercial Card Pricing
          </h2>

          <p className="text-[#4a8b7b] text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 lg:px-10 font-normal leading-relaxed">
            <span>
              Pricing is subject to a commercial arrangement between your bank
              and RedGirraffe or its authorised PSPs. Please contact your
              commercial bank to confirm your{" "}
            </span>

            <span className="font-semibold">
              RedGirraffe Pay-Pulse Commercial Credit Card
            </span>

            <span>
              {" "}
              high value recurring rates on Visa, MasterCard & other leading
              global Payment Networks.
            </span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full max-w-[600px]">
          <Button className="w-full sm:flex-1 max-w-[270px] gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-[48px] bg-app-primary text-white touch-manipulation">
            <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
              Request a Demo
            </span>
          </Button>

          <Button className="w-full sm:flex-1 max-w-[270px] gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-[48px] bg-[#4a8b7b] text-white touch-manipulation">
            <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
              Contact Sales
            </span>
          </Button>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-5 w-full">
          {pricingCards.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 rounded-xl border ${
                card.variant === "white"
                  ? "bg-white border-[#ebebeb]"
                  : "[background:url(..//frame-1455.png)_50%_50%_/_cover,linear-gradient(30deg,rgba(8,43,36,1)_0%,rgba(16,84,71,0.7)_100%)]"
              } shadow-[8px_12px_20px_#00000014] touch-manipulation`}
            >
              <CardHeader className="p-0">
                <CardTitle
                  className={`font-h4-h4-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[length:var(--h4-h4-semibold-font-size)] tracking-[var(--h4-h4-semibold-letter-spacing)] leading-tight xl:leading-[var(--h4-h4-semibold-line-height)] ${
                    card.variant === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {card.title}
                </CardTitle>
                <p
                  className={`mt-4 sm:mt-5 font-body-large-body-large-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)] ${
                    card.variant === "white" ? "text-text" : "text-[#dbf0e4]"
                  }`}
                >
                  {card.description}
                </p>
              </CardHeader>

              <Separator className="h-px w-full" />

              <CardContent className="p-0 flex flex-col gap-3">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="inline-flex items-center gap-3">
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          card.variant === "white"
                            ? "bg-[#4a8b7b]"
                            : "bg-white"
                        }`}>
                      <CheckIcon
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          card.variant === "white"
                            ? "text-white"
                            : "text-[#4a8b7b]"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-body-medium-body-medium-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)] ${
                        card.variant === "white" ? "text-black" : "text-white"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="p-0">
                <Button
                  className={`w-full px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-[48px] touch-manipulation ${
                    card.variant === "white"
                      ? "bg-[#4a8b7b] text-white"
                      : "bg-textwhite text-[#4a8b7b]"
                  }`}
                >
                  <span className={`font-h6-h6-semibold text-sm sm:text-base  lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] ${card.variant === "white" ? "hover:text-white" : "hover:text-app-primary"}`}>
                    {card.buttonText}
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};