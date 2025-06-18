import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Data for testimonial cards
const testimonialData = [
  {
    metric: "97+",
    label: "Countries Covered",
    description: "Global payments made simple",
  },
  {
    metric: "99.9%",
    label: "Uptime SLA",
    description: "Ensures uninterrupted payments",
  },
  {
    metric: "150+",
    label: "Currencies Supported",
    description: "Pay in any currency, anywhere",
  },
];

export const UserTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] px-20 py-[120px] w-full bg-[#e0eae8]">
      <div className="max-w-[800px] flex flex-col items-start gap-5">
        <div className="flex items-center justify-center w-full">
          <h2 className="font-h3-h3-semibold font-[number:var(--h3-h3-semibold-font-weight)] text-[#1a3c34] text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-[var(--h3-h3-semibold-line-height)] [font-style:var(--h3-h3-semibold-font-style)]">
            Scale Globally with Unmatched Reliability
          </h2>
        </div>

        <div className="flex items-center justify-center px-10 w-full">
          <p className="font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-[#4a8b7b] text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
            Serving 97+ countries with 99.9% uptime and support for 150+
            currencies—RedGirraffe processes $20B+ annually with top-tier
            security.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5 max-w-[1280px] w-full justify-center">
        {testimonialData.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <Separator orientation="vertical" className="h-[184px]" />
            )}
            <Card className="flex flex-col w-[400px] items-start p-10 bg-white rounded-[10px] border-none">
              <CardContent className="flex flex-col items-start gap-5 p-0 w-full">
                <div className="flex flex-col items-start justify-center gap-2.5 w-full">
                  <div className="flex items-start gap-2.5 w-full">
                    <div className="inline-flex items-start justify-center">
                      <span className="font-h2-h2-bold font-[number:var(--h2-h2-bold-font-weight)] text-dark-green text-[length:var(--h2-h2-bold-font-size)] tracking-[var(--h2-h2-bold-letter-spacing)] leading-[var(--h2-h2-bold-line-height)] whitespace-nowrap [font-style:var(--h2-h2-bold-font-style)]">
                        {item.metric}
                      </span>
                    </div>

                    <div className="flex items-end gap-2.5 pt-0 pb-2 flex-1 self-stretch">
                      <span className="font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-app-secondary text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] whitespace-nowrap [font-style:var(--h6-h6-regular-font-style)]">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2.5 w-full">
                  <p className="font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-textblack text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
