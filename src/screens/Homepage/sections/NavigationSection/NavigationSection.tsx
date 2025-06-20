import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Industry data for mapping
const industries = [
  {
    title: "Data Centres",
    description: "Optimize infrastructure payments.",
  },
  {
    title: "Logistics",
    description: "Fund shipping and contractor payments.",
  },
  {
    title: "Manufacturing",
    description: "Support supply chain payments.",
  },
  {
    title: "Technology",
    description: "Streamline hardware payments.",
  },
  {
    title: "Construction",
    description: "Fund materials and contractors.",
  },
  {
    title: "SaaS Companies",
    description: "Automate subscription payments.",
  },
  {
    title: "Insurance",
    description: "Optimize infrastructure payments.",
  },
  {
    title: "Healthcare",
    description: "Settle equipment payments securely.",
  },
  {
    title: "Hospitality",
    description: "Manage hotel supplier payments.",
  },
  {
    title: "Education",
    description: "Support facility payments.",
  },
  {
    title: "Media & Entertainment",
    description: "Settle event payments.",
  },
  {
    title: "Professional Services",
    description: "Automate consulting fees.",
  },
  {
    title: "Real Estate Funds",
    description: "Simplify property payments.",
  },
  {
    title: "Retail Chains",
    description: "Streamline multi-location vendor payments.",
  },
  {
    title: "Energy & Utilities",
    description: "Cover infrastructure payments.",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] py-12 sm:py-16 lg:py-20 xl:py-[120px] px-4 sm:px-6 lg:px-8 xl:px-20 w-full">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] max-w-7xl">
        <header className="flex flex-col items-center gap-4 sm:gap-5 max-w-4xl">
          <h2 className="w-full font-h4-h4-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h4-h4-semibold-font-size)] text-center tracking-[var(--h4-h4-semibold-letter-spacing)] leading-tight xl:leading-[var(--h4-h4-semibold-line-height)]">
            Industries We Serve
          </h2>
          <p className="font-h6-h6-regular text-[#4a8b7b] text-center px-4 sm:px-6 lg:px-10 text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
            Tailored solutions for diverse business sectors.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full">
          {industries.map((industry, index) => (
            <Card
              key={`${industry.title}-${index}`}
              className="w-full h-auto min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] bg-[#f5f5f5] rounded-[20px] border border-[#ebebeb] touch-manipulation hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5 lg:p-6 h-full">
                <h3 className="font-h6-h6-semibold text-black text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)] min-h-[3rem] sm:min-h-[4rem]">
                  {industry.title}
                </h3>
                <p className="font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)] flex-1">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full">
        <Button className="flex items-center justify-center gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 bg-[#4a8b7b] rounded-[48px] text-white w-full max-w-[330px] touch-manipulation">
          <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
            Request a Demo
          </span>
        </Button>
      </div>
    </section>
  );
};