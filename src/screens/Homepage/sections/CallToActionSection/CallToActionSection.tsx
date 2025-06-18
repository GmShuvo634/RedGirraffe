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
      "Work directly with your existing commercial bank for seamless integration and competitive rates",
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
      "Visa Global Network",
      "MasterCard Worldwide",
      "Alternative Payment Methods",
      "97+ Country Coverage",
    ],
    buttonText: "Request a Demo",
    variant: "green",
  },
  {
    title: "Authorised PSPs",
    description:
      "Connect through RedGirraffe's network of certified Payment Service Providers globally",
    features: [
      "Tier-I PSP network",
      "Competitive interchange",
      "Local market expertise",
    ],
    buttonText: "Request a Demo",
    variant: "white",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="py-[120px] px-20 bg-[#e0eae8] w-full">
      <div className="flex flex-col items-center gap-[60px] w-full">
        {/* Heading and description */}
        <div className="flex flex-col w-full max-w-[800px] items-center gap-5">
          <h2 className="font-h3-h3-semibold font-[number:var(--h3-h3-semibold-font-weight)] text-[#1a3c34] text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-[var(--h3-h3-semibold-line-height)] [font-style:var(--h3-h3-semibold-font-style)]">
            RedGirraffe Global Commercial Card Pricing
          </h2>

          <p className="text-[#4a8b7b] text-lg text-center px-10 [font-family:'Inter',Helvetica] font-normal leading-[26px]">
            <span>
              Pricing is subject to a commercial arrangement between your bank
              and RedGirraffe or its authorised PSPs. Please contact your
              commercial bank to confirm your{" "}
            </span>

            <span className="font-[number:var(--h6-h6-semibold-font-weight)] leading-[var(--h6-h6-semibold-line-height)] font-h6-h6-semibold [font-style:var(--h6-h6-semibold-font-style)] tracking-[var(--h6-h6-semibold-letter-spacing)] text-[length:var(--h6-h6-semibold-font-size)]">
              RedGirraffe Pay-Pulse Commercial Credit Card
            </span>

            <span>
              {" "}
              high value recurring rates on Visa, MasterCard &amp; other leading
              global Payment Networks.
            </span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-5">
          <Button className="w-[270px] gap-3 px-10 py-4 rounded-[48px] bg-app-primary text-white">
            <ArrowRightIcon className="w-6 h-6" />
            <span className="font-h6-h6-semibold font-[number:var(--h6-h6-semibold-font-weight)] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
              Request a Demo
            </span>
          </Button>

          <Button className="w-[270px] gap-3 px-10 py-4 rounded-[48px] bg-[#4a8b7b] text-white">
            <ArrowRightIcon className="w-6 h-6" />
            <span className="font-h6-h6-semibold font-[number:var(--h6-h6-semibold-font-weight)] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
              Contact Sales
            </span>
          </Button>
        </div>

        {/* Pricing cards */}
        <div className="flex items-center gap-5 w-full">
          {pricingCards.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col ${index === 1 ? "w-[420px]" : "w-[410px]"} gap-10 p-10 rounded-xl border ${
                card.variant === "white"
                  ? "bg-white border-[#ebebeb]"
                  : "[background:url(..//frame-1455.png)_50%_50%_/_cover,linear-gradient(30deg,rgba(8,43,36,1)_0%,rgba(16,84,71,0.7)_100%)]"
              } shadow-[8px_12px_20px_#00000014]`}
            >
              <CardHeader className="p-0">
                <CardTitle
                  className={`font-h4-h4-semibold font-[number:var(--h4-h4-semibold-font-weight)] text-[length:var(--h4-h4-semibold-font-size)] tracking-[var(--h4-h4-semibold-letter-spacing)] leading-[var(--h4-h4-semibold-line-height)] [font-style:var(--h4-h4-semibold-font-style)] ${
                    card.variant === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {card.title}
                </CardTitle>
                <p
                  className={`mt-5 font-body-large-body-large-regular font-[number:var(--body-large-body-large-regular-font-weight)] text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] [font-style:var(--body-large-body-large-regular-font-style)] ${
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
                    <CheckIcon
                      className={`w-6 h-6 ${card.variant === "white" ? "text-app-secondary" : "text-white"}`}
                    />
                    <span
                      className={`font-body-medium-body-medium-regular font-[number:var(--body-medium-body-medium-regular-font-weight)] text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)] [font-style:var(--body-medium-body-medium-regular-font-style)] ${
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
                  className={`w-[330px] px-10 py-4 rounded-[48px] ${
                    card.variant === "white"
                      ? "bg-[#4a8b7b] text-white"
                      : "bg-textwhite text-app-primary"
                  }`}
                >
                  <span className="font-h6-h6-semibold font-[number:var(--h6-h6-semibold-font-weight)] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
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
