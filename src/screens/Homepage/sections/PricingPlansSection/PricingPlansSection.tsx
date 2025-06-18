import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the process steps
const processSteps = [
  {
    title: "Setup & Approval",
    description:
      "Bank carries out KYC, due diligence and approves card limit. Use ERP or our interface. No code required.",
    tags: ["KYC Verification", "Instant Setup", "Credit Assessment"],
  },
  {
    title: "Configuration",
    description:
      "Vendors are onboarded, payout types defined, caps configured. Al validates payees, documents and flow logic.",
    tags: ["AI Validation", "Smart Rules", "Vendor Onboarding"],
  },
  {
    title: "Execute & Monitor",
    description:
      "Authorized makers release payouts. API triggers and card executes. Instant payout. Global FX support. Fully auditable.",
    tags: ["Full Audit Trail", "Global FX", "Instant Execution"],
  },
];

export const PricingPlansSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 px-20 py-[120px] w-full bg-white">
      <div className="flex items-center gap-[120px] w-full">
        <div className="flex flex-col items-center gap-[60px] flex-1">
          {/* Section Header */}
          <div className="flex flex-col w-[800px] items-start gap-5">
            <div className="flex items-center justify-center gap-2.5 w-full">
              <h2 className="flex-1 mt-[-1.00px] font-h3-h3-semibold font-[number:var(--h3-h3-semibold-font-weight)] text-[#1a3c34] text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-[var(--h3-h3-semibold-line-height)] [font-style:var(--h3-h3-semibold-font-style)]">
                How RedGirraffe Works
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2.5 px-10 py-0 w-full">
              <p className="flex-1 mt-[-1.00px] font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-[#4a8b7b] text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
                Simplify your payments in three seamless steps.
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center">
            {[1, 2, 3].map((step, index) => (
              <div
                key={step}
                className={`relative w-[430px] h-5 ${index > 0 ? "ml-[-5px]" : ""}`}
              >
                <div className="relative h-5">
                  <img
                    className="absolute w-[215px] h-1 top-2 left-0"
                    alt="Line"
                    src={index === 0 ? "/line-723-1.svg" : "/line-723.svg"}
                  />
                  <img
                    className="absolute w-[215px] h-1 top-2 left-[215px]"
                    alt="Line"
                    src="/line-723.svg"
                  />
                  <div
                    className="absolute w-5 h-5 top-0 bg-[#1a3c34] rounded-[10px]"
                    style={{ left: index === 0 ? "200px" : "210px" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Process Cards */}
          <div className="flex items-start gap-10">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="w-[400px] h-[400px] rounded-[20px] border-[#ebebeb] shadow-[16px_8px_20px_#1b1b1b05]"
              >
                <CardContent className="flex flex-col items-start gap-10 p-10 h-full">
                  <div className="flex flex-col items-start gap-5 w-full">
                    <h3 className="w-fit mt-[-1.00px] font-h4-h4-semibold font-[number:var(--h4-h4-semibold-font-weight)] text-black text-[length:var(--h4-h4-semibold-font-size)] tracking-[var(--h4-h4-semibold-letter-spacing)] leading-[var(--h4-h4-semibold-line-height)] whitespace-nowrap [font-style:var(--h4-h4-semibold-font-style)]">
                      {step.title}
                    </h3>
                    <p className="self-stretch h-[104px] font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-text text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {step.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="px-5 py-2 bg-[#f5f5f5] text-[#1a3c34] rounded-[40px] font-body-large-body-large-regular font-[number:var(--body-large-body-large-regular-font-weight)] text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] [font-style:var(--body-large-body-large-regular-font-style)]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {step.tags[2] && (
                      <Badge className="px-5 py-2 bg-[#f5f5f5] text-[#1a3c34] rounded-[40px] font-body-large-body-large-regular font-[number:var(--body-large-body-large-regular-font-weight)] text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] [font-style:var(--body-large-body-large-regular-font-style)]">
                        {step.tags[2]}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col w-full items-center gap-2.5">
            <Button className="flex w-[330px] items-center justify-center gap-3 px-10 py-4 bg-[#4a8b7b] rounded-[48px] text-white">
              <ArrowRightIcon className="w-6 h-6" />
              <span className="font-h6-h6-semibold font-[number:var(--h6-h6-semibold-font-weight)] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
                Request a Demo
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
