import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ArrowRightIcon } from "lucide-react";

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
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-[120px] w-full">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] max-w-7xl">
        <div className="flex flex-col w-full max-w-4xl items-center gap-4 sm:gap-5">
          <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]">
            Tailored for Your Success
          </h2>

          <p className="w-full px-4 sm:px-6 lg:px-10 font-h6-h6-regular text-[#4a8b7b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
            Unlock smarter payments for banks and enterprises with RedGirraffe.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 sm:gap-10 lg:gap-10">
        {/* For Banks Column */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 flex-1">
          <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
            <h3 className="w-full font-h5-h5-semibold text-[#1a3c34] text-lg sm:text-xl lg:text-2xl xl:text-[length:var(--h5-h5-semibold-font-size)] text-center tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
              For Banks
            </h3>
            <Separator className="w-full max-w-[540px] h-px bg-[#4a8b7b]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
            {bankFeatures.slice(0, 6).map((feature, index) => (
              <Card
                key={index}
                className="bg-abu-bg border-[#ebebeb] rounded-[10px] touch-manipulation"
              >
                <CardContent className="flex flex-col gap-2.5 p-6 sm:p-8 lg:p-10">
                  <h4 className="font-h5-h5-semibold text-black text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                    {feature.title}
                  </h4>
                  <p className="font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center sm:justify-end w-full">
            <Card className="bg-abu-bg border-[#ebebeb] rounded-[10px] w-full sm:w-[290px] touch-manipulation">
              <CardContent className="flex flex-col gap-2.5 p-6 sm:p-8 lg:p-10">
                <h4 className="font-h5-h5-semibold text-black text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                  {bankFeatures[6].title}
                </h4>
                <p className="font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                  {bankFeatures[6].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separator - Hidden on mobile */}
        <Separator orientation="vertical" className="hidden lg:block h-auto" />

        {/* For Cardholding Enterprises Column */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 flex-1">
          <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
            <h3 className="w-full font-h5-h5-semibold text-[#1a3c34] text-lg sm:text-xl lg:text-2xl xl:text-[length:var(--h5-h5-semibold-font-size)] text-center tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
              For Cardholding Enterprises
            </h3>
            <Separator className="w-full max-w-[540px] h-px bg-[#4a8b7b]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
            {enterpriseFeatures.slice(0, 6).map((feature, index) => (
              <Card
                key={index}
                className="bg-abu-bg border-[#ebebeb] rounded-[10px] touch-manipulation"
              >
                <CardContent className="flex flex-col gap-2.5 p-6 sm:p-8 lg:p-10">
                  <h4 className="font-h5-h5-semibold text-black text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                    {feature.title}
                  </h4>
                  <p className="font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center sm:justify-start w-full">
            <Card className="bg-abu-bg border-[#ebebeb] rounded-[10px] w-full sm:w-[290px] touch-manipulation">
              <CardContent className="flex flex-col gap-2.5 p-6 sm:p-8 lg:p-10">
                <h4 className="font-h5-h5-semibold text-black text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                  {enterpriseFeatures[6].title}
                </h4>
                <p className="font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                  {enterpriseFeatures[6].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5 w-full">
        <Button className="flex items-center justify-center gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 bg-[#4a8b7b] rounded-[48px] text-white w-full max-w-[330px] touch-manipulation">
          <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-h6-h6-semibold text-white text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap">
            Request a Demo
          </span>
        </Button>
      </div>
    </section>
  );
};