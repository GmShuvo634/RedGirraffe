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
    title: "Insurance",
    description: "Optimize infrastructure payments.",
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
    title: "Logistics",
    description: "Fund shipping and contractor payments.",
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

// Group industries into rows of 5
const industryRows = [
  industries.slice(0, 5),
  industries.slice(5, 10),
  industries.slice(10, 15),
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] py-[120px] px-5 md:px-20 w-full">
      <div className="flex flex-col items-center gap-[60px] max-w-[1280px]">
        <header className="flex flex-col items-center gap-5 max-w-[800px]">
          <h2 className="font-h3-h3-semibold text-[#1a3c34] text-center">
            Industries We Serve
          </h2>
          <p className="font-h6-h6-regular text-[#4a8b7b] text-center px-10">
            Tailored solutions for diverse business sectors.
          </p>
        </header>

        <div className="flex flex-col gap-5">
          {industryRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-wrap justify-center gap-5"
            >
              {row.map((industry, index) => (
                <Card
                  key={`${industry.title}-${index}`}
                  className="w-60 h-[280px] bg-[#f5f5f5] rounded-[20px] border border-[#ebebeb]"
                >
                  <CardContent className="flex flex-col items-start gap-5 p-5 pt-10 h-full">
                    <h3 className="font-h5-h5-semibold text-black h-16">
                      {industry.title}
                    </h3>
                    <p className="font-h6-h6-regular text-text">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full max-w-[1280px]">
        <Button className="flex items-center justify-center gap-3 px-10 py-4 bg-[#4a8b7b] rounded-[48px] text-white w-[330px]">
          <ArrowRightIcon className="w-6 h-6" />
          <span className="font-h6-h6-semibold">Request a Demo</span>
        </Button>
      </div>
    </section>
  );
};
