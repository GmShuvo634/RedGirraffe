import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Problem cards data
const problemCards = [
  {
    title: "Payment Delays",
    description: "40% of transactions take 30+ days, stalling operations.",
    bgColor: "bg-[#1a3c34]",
    titleColor: "text-textwhite",
    descriptionColor: "text-[#dbf0e4]",
  },
  {
    title: "Manual Processes",
    description: "Lack of automation leads to errors and inefficiencies.",
    bgColor: "bg-[#b8ebd0]",
    titleColor: "text-app-primary",
    descriptionColor: "text-[#1b1b1b]",
  },
  {
    title: "High Costs",
    description:
      "Traditional methods (e.g., checks, wire transfers) incur high fees.",
    bgColor: "bg-[#ff968a]",
    titleColor: "text-app-primary",
    descriptionColor: "text-[#1b1b1b]",
  },
  {
    title: "Cash Flow Bottlenecks",
    description: "Delayed payouts tie up working capital.",
    bgColor: "bg-[#fce3a4]",
    titleColor: "text-app-primary",
    descriptionColor: "text-[#1b1b1b]",
  },
  {
    title: "Lack of Integration",
    description: "Disconnected systems create inefficiencies.",
    bgColor: "bg-[#a8d9f0]",
    titleColor: "text-app-primary",
    descriptionColor: "text-[#1b1b1b]",
  },
  {
    title: "Fraud Risks",
    description: "Limited security controls expose all entities to fraud.",
    bgColor: "bg-[#f4c2c2]",
    titleColor: "text-app-primary",
    descriptionColor: "text-[#1b1b1b]",
  },
  {
    title: "Inflexible Terms",
    description: "Rigid payment terms hinder cash flow predictability.",
    bgColor: "bg-[#d6ccf4]",
    titleColor: "text-app-primary",
    descriptionColor: "text-[#1b1b1b]",
  },
];

// Solutions data
const solutionsData = [
  {
    title: "Banks",
    hasBorder: true,
    bgColor: "bg-transparent",
    items: [
      "Low-Risk Card Spend: Capture high-volume, low-risk B2B transactions.",
      "Maker Checker: Reduce fraud risks with robust approvals.",
      "Customer Stickiness: Build enterprise loyalty with reliable payments.",
      "Real-Time Monitoring: Lower risk exposure with live tracking.",
      "Scalable Infrastructure: Support growing transaction volumes.",
      "Cost Efficiency: Lower processing costs compared to traditional methods.",
      "Global Reach: Facilitate payments in 97+ countries.",
    ],
  },
  {
    title: "Cardholding Enterprises",
    hasBorder: false,
    bgColor: "bg-[#f5f5f5]",
    items: [
      "Bill Discounting: Offer early payments to vendors with MDR fully absorbed—zero-cost for you, faster cash flow for them.",
      "Maker Checker: Secure, multi-approval workflows for error-free transactions.",
      "Pre-Approved Limits: Set spend caps for vendors, rent, and utilities.",
      "ERP Integration: Seamlessly sync with 50+ business tools for efficiency.",
      "Real-Time Analytics: Unified dashboards provide spend visibility.",
      "Tax Metadata: Embedded tax data simplifies compliance.",
      "Customer Stickiness: Streamlined payments enhance vendor relationships.",
    ],
  },
  {
    title: "Vendors",
    hasBorder: true,
    bgColor: "bg-transparent",
    items: [
      "Instant Settlements: Receive payments in real time, no waiting.",
      "Global Support: Access funds in 150+ currencies.",
      "Auto Receipts: Generate receipts and tax mappings automatically.",
      "Zero Delays: Eliminate payment holds, improving cash flow.",
      "Cost Savings: Choose cost-effective payment methods.",
      "Self-Service Portal: Easily manage payment preferences.",
      "Customer Stickiness: Faster payments strengthen enterprise ties.",
    ],
  },
];

export const LayoutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-12 lg:py-16 xl:py-[120px] w-full bg-[#e0eae8]">
      <div className="flex flex-col max-w-4xl items-start gap-4 sm:gap-5">
        <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]">
          Traditional B2B Payouts Fail—And What We Fix
        </h2>
      </div>

      <div className="flex flex-col items-start gap-12 sm:gap-16 lg:gap-20 xl:gap-[120px] w-full max-w-7xl">
        {/* Problem Section */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 w-full rounded-[20px]">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20 w-full">
            {/* Left Column - Problem Title and Visual */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[60px] items-center w-full lg:w-auto order-1 lg:order-1">
              <div className="w-full max-w-[400px] flex flex-col items-center gap-4 sm:gap-5">
                <div className="flex items-start gap-3 w-full">
                  <h3 className="w-full font-h4-h4-semibold text-[#c42027] text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-[length:var(--h4-h4-semibold-font-size)] text-center leading-tight xl:leading-[var(--h4-h4-semibold-line-height)]">
                    The Problem
                  </h3>
                </div>
                <Separator className="w-full max-w-[400px] bg-[#1a3c34]" />
              </div>

              <div className="flex w-full max-w-[400px] items-center justify-center relative">
                <div className="flex flex-1 items-center justify-center relative">
                  <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[404px] aspect-square">
                    <img
                      className="w-full h-full object-contain"
                      alt="Problem visualization"
                      src="/chart-container.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Problem Cards */}
            <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5 flex-1 w-full order-2 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full">
                {problemCards.slice(0, 2).map((card, index) => (
                  <Card
                    key={`top-card-${index}`}
                    className={`${card.bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden touch-manipulation`}
                  >
                    <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                      <h4
                        className={`font-h6-h6-semibold ${card.titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                      >
                        {card.title}
                      </h4>
                      <p
                        className={`font-h6-h6-regular ${card.descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                      >
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card
                className={`w-full ${problemCards[2].bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden`}
              >
                <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                  <h4
                    className={`font-h6-h6-semibold ${problemCards[2].titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                  >
                    {problemCards[2].title}
                  </h4>
                  <p
                    className={`font-h6-h6-regular ${problemCards[2].descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                  >
                    {problemCards[2].description}
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full">
                {problemCards.slice(3, 5).map((card, index) => (
                  <Card
                    key={`middle-card-${index}`}
                    className={`${card.bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden touch-manipulation`}
                  >
                    <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                      <h4
                        className={`font-h6-h6-semibold ${card.titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                      >
                        {card.title}
                      </h4>
                      <p
                        className={`font-h6-h6-regular ${card.descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                      >
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full">
                {problemCards.slice(5, 7).map((card, index) => (
                  <Card
                    key={`bottom-card-${index}`}
                    className={`${card.bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden touch-manipulation`}
                  >
                    <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                      <h4
                        className={`font-h6-h6-semibold ${card.titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                      >
                        {card.title}
                      </h4>
                      <p
                        className={`font-h6-h6-regular ${card.descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                      >
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] w-full rounded-[20px]">
          <div className="max-w-4xl flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex w-full max-w-[440px] items-center gap-3">
              <h3 className="w-full font-h3-h3-semibold text-[#4a8b7b] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]">
                Our Solutions
              </h3>
            </div>
            <Separator className="w-full max-w-[540px] bg-[#4a8b7b]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-5 w-full">
            {solutionsData.map((solution, index) => (
              <Card
                key={`solution-${index}`}
                className={`flex flex-col h-auto lg:h-[733px] ${solution.bgColor} rounded-[20px] ${solution.hasBorder ? "border border-solid border-[#4a8b7b]" : ""} touch-manipulation`}
              >
                <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 h-full">
                  <h4 className="w-full font-h5-h5-semibold text-black text-lg sm:text-lg lg:text-xl xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                    {solution.title}
                  </h4>
                  <div className="flex flex-col items-start gap-4 sm:gap-5 w-full flex-1">
                    {solution.items.map((item, itemIndex) => (
                      <div
                        key={`solution-item-${index}-${itemIndex}`}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <img className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" alt="Label" src="/thin-arrow.svg" />
                        <p className="flex-1 font-h6-h6-regular text-text text-sm sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2.5 w-full">
            <Button className="flex items-center justify-center gap-3 px-8 sm:px-8 lg:px-10 py-4 sm:py-4 lg:py-8 bg-[#4a8b7b] rounded-[48px] text-white w-full max-w-[280px] sm:max-w-[330px] h-14 sm:h-14 lg:h-auto touch-manipulation">
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-h6-h6-semibold text-white text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap">
                Request a Demo
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};