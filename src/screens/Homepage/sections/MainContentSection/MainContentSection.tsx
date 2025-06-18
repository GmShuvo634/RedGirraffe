import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Data for the "For Banks" section
const bankFeatures = [
  {
    title: "Low-Risk Growth",
    description: "Capture B2B card spend",
  },
  {
    title: "Fraud Prevention",
    description: "Enterprise-grade security",
  },
  {
    title: "Global Expansion",
    description: "Pay in 97+ countries",
  },
  {
    title: "Real-Time Insights",
    description: "Monitor transactions",
  },
  {
    title: "Scalable Solutions",
    description: "Support growth",
  },
  {
    title: "Cost Efficiency",
    description: "Reduce fees",
  },
  {
    title: "Cash Flow Boost",
    description: "Bill discounting benefits",
  },
];

// Data for the "For Cardholding Enterprises" section
const enterpriseFeatures = [
  {
    title: "Bill Discounting",
    description: "Offer early payments with MDR fully absorbed—zero-cost",
  },
  {
    title: "Enhanced Control",
    description: "Maker Checker workflows",
  },
  {
    title: "Cost Savings",
    description: "Lower fees",
  },
  {
    title: "Global Reach",
    description: "97+ countries",
  },
  {
    title: "Real-Time Analytics",
    description: "Support growth",
  },
  {
    title: "Compliance Ease",
    description: "Embedded tax data",
  },
  {
    title: "Customer Loyalty",
    description: "Build stickiness",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] px-20 py-[120px] w-full">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex flex-col w-full max-w-[800px] items-center gap-5">
          <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-[var(--h3-h3-semibold-line-height)]">
            Tailored for Your Success
          </h2>

          <p className="w-full px-10 font-h6-h6-regular text-[#4a8b7b] text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]">
            Unlock smarter payments for banks and enterprises with RedGirraffe.
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-[1280px] gap-10">
        {/* For Banks Column */}
        <div className="flex flex-col items-center gap-10 flex-1">
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="w-full max-w-[440px] font-h5-h5-semibold text-[#1a3c34] text-[length:var(--h5-h5-semibold-font-size)] text-center tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
              For Banks
            </h3>
            <img
              className="w-full max-w-[540px] h-px"
              alt="Line"
              src="/line-717.svg"
            />
          </div>

          <div className="grid grid-cols-2 gap-5 w-full">
            {bankFeatures.slice(0, 6).map((feature, index) => (
              <Card
                key={index}
                className="bg-abu-bg border-[#ebebeb] rounded-[10px]"
              >
                <CardContent className="flex flex-col gap-2.5 pl-10 pr-5 pt-10 pb-5">
                  <h4 className="font-h5-h5-semibold text-black text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                    {feature.title}
                  </h4>
                  <p className="h-[78px] font-h6-h6-regular text-text text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end w-full">
            <Card className="bg-abu-bg border-[#ebebeb] rounded-[10px] w-[290px]">
              <CardContent className="flex flex-col gap-2.5 pl-10 pr-5 pt-10 pb-5">
                <h4 className="font-h5-h5-semibold text-black text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                  {bankFeatures[6].title}
                </h4>
                <p className="h-[78px] font-h6-h6-regular text-text text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]">
                  {bankFeatures[6].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separator */}
        <Separator orientation="vertical" className="h-auto" />

        {/* For Cardholding Enterprises Column */}
        <div className="flex flex-col items-center gap-10 flex-1">
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="w-full max-w-[440px] font-h5-h5-semibold text-[#1a3c34] text-[length:var(--h5-h5-semibold-font-size)] text-center tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
              For Cardholding Enterprises
            </h3>
            <img
              className="w-full max-w-[540px] h-px"
              alt="Line"
              src="/line-717.svg"
            />
          </div>

          <div className="grid grid-cols-2 gap-5 w-full">
            {enterpriseFeatures.slice(0, 6).map((feature, index) => (
              <Card
                key={index}
                className="bg-abu-bg border-[#ebebeb] rounded-[10px]"
              >
                <CardContent className="flex flex-col gap-2.5 pl-10 pr-5 pt-10 pb-5">
                  <h4 className="font-h5-h5-semibold text-black text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                    {feature.title}
                  </h4>
                  <p className="h-[78px] font-h6-h6-regular text-text text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex w-full">
            <Card className="bg-abu-bg border-[#ebebeb] rounded-[10px] w-[290px]">
              <CardContent className="flex flex-col gap-2.5 pl-10 pr-5 pt-10 pb-5">
                <h4 className="font-h5-h5-semibold text-black text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                  {enterpriseFeatures[6].title}
                </h4>
                <p className="h-[78px] font-h6-h6-regular text-text text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]">
                  {enterpriseFeatures[6].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[1280px] justify-center">
        <Button className="flex items-center justify-center gap-3 px-10 py-4 bg-[#4a8b7b] rounded-[48px] w-[330px]">
          <img
            className="w-6 h-6"
            alt="Arrow right alt"
            src="/arrow-right-alt-3.png"
          />
          <span className="font-h6-h6-semibold text-white text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
            Request a Demo
          </span>
        </Button>
      </div>
    </section>
  );
};
