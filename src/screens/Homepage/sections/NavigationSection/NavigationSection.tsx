import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { SectionHeader } from "../../../../components/ui";
import {
  AnimatedCard,
  StaggeredGrid,
} from "../../../../components/animations";
import { durations, easings } from "../../../../utils/animations";
import { SecondaryActionButton } from "../../../../components/buttons";

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

export const IndustriesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full">
        <SectionHeader
          title="Industries we"
          highlightedText="serve."
          subtitle="Tailored solutions for diverse business sectors."
          delay={0.1}
          threshold={0.3}
        />

        <StaggeredGrid
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full"
          speed="normal"
          threshold={0.1}
          delay={0.6}
        >
          {industries.map((industry, index) => (
            <AnimatedCard
              key={`${industry.title}-${index}`}
              hoverEffect="lift"
              index={index}
              threshold={0.1}
              className="h-full"
            >
              <Card className="w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] bg-[#f5f5f5] rounded-[20px] pt-4 border border-[#ebebeb] touch-manipulation hover:shadow-lg group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out h-full">
                <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5 lg:p-6 h-full">
                  <motion.h3
                    className="font-h6-h6-semibold text-[#1b1b1b] text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)]"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: durations.fast,
                        ease: easings.smooth,
                      },
                    }}
                  >
                    {industry.title}
                  </motion.h3>
                  <motion.p
                    className="font-body-large-body-large-regular text-text text-sm sm:text-sm lg:text-base group-hover:text-gray-300 xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]"
                    whileHover={{
                      y: -2,
                      transition: {
                        duration: durations.fast,
                        ease: easings.smooth,
                      },
                    }}
                  >
                    {industry.description}
                  </motion.p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </StaggeredGrid>
      </div>

      <motion.div
        className="flex justify-center w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: durations.normal,
          ease: easings.smooth,
          delay: 1.0,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SecondaryActionButton
          size="mobile-lg"
          className="w-full max-w-[280px]"
        >
          Request a Demo
        </SecondaryActionButton>
      </motion.div>
    </section>
  );
};
