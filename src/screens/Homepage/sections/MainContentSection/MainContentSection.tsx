import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import {
  AnimatedSection,
  AnimatedCard,
  StaggeredGrid,
} from "../../../../components/animations";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  cardVariants,
  durations,
  easings,
  createSynchronizedDelay,
} from "../../../../utils/animations";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { useResponsiveCardSlice } from "../../../../hooks/useResponsiveCardSlice";
import { useGlobalAnimationOrchestrator } from "../../../../hooks/useGlobalAnimationOrchestrator";

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
    title: "Customer Loyalty",
    description: "Build stickiness",
  },
];

// Data for the "For Cardholding Enterprises" section
const enterpriseFeatures = [
  {
    title: "Bill Discounting",
    description: "Offer early payments",
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
    title: "Cash Flow Boost",
    description: "Bill discounting benefits",
  },
];

export const MainContentSection = (): JSX.Element => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
    threshold: 0.2,
  });

  // Synchronized animation orchestrator for main content section
  const { createElementDelay } = useGlobalAnimationOrchestrator({
    sectionKey: "mainContent",
    threshold: 0.1,
  });

  // Use mobile responsive hook
  const isMobile = useResponsiveCardSlice();

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] w-full">
      <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] w-full">
        <motion.div
          ref={headerRef}
          className="flex flex-col w-full max-w-4xl items-center gap-4 sm:gap-5"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="w-full font-h3-h3-semibold text-[#1a3c34] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]"
            variants={fadeInUpVariants}
          >
            Tailored for Your Success
          </motion.h2>

          <motion.p
            className="w-full px-4 sm:px-6 lg:px-10 font-h6-h6-regular text-[#4a8b7b] text-base sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]"
            variants={fadeInUpVariants}
          >
            Unlock smarter payments for banks and enterprises with RedGirraffe.
          </motion.p>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 sm:gap-10 lg:gap-10">
        {/* For Banks Column */}
        <motion.div
          className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: durations.normal,
            ease: easings.smooth,
            delay: createElementDelay(0, 0.1)
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4 sm:gap-5 w-full"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="w-full font-h6-h6-semibold text-[#1a3c34] text-xl sm:text-xl lg:text-2xl xl:text-[length:var(--h6-h6-semibold-font-size)] text-center tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]"
              variants={fadeInUpVariants}
            >
              For Banks
            </motion.h3>
            {/* <motion.div variants={fadeInUpVariants}> */}
            <Separator
              orientation="horizontal"
              className="w-full max-w-[540px] h-[1px] bg-[#ebebeb]"
            />
            {/* </motion.div> */}
          </motion.div>

          <StaggeredGrid
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full"
            speed="normal"
            threshold={0.1}
          >
            {bankFeatures.slice(0, isMobile ? 7 : 6).map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: durations.fast,
                    ease: easings.smooth,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-abu-bg border-[#ebebeb] rounded-[10px] touch-manipulation h-full group hover:bg-[#1a3c34] hover:border-[#1a3c34]  hover:cursor-pointer transition-all duration-300 ease-in-out">
                  <CardContent className="flex flex-col gap-2.5 p-6 sm:p-6 lg:p-10">
                    <h4 className="font-h6-h6-semibold text-black text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                      {feature.title}
                    </h4>
                    <p className="font-h6-h6-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredGrid>

          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: createElementDelay(1, 0.25),
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: durations.fast, ease: easings.smooth },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`${isMobile ? "hidden" : "w-[550px] sm:w-[290px]"} bg-abu-bg border-[#ebebeb] rounded-[10px] touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34]  hover:cursor-pointer transition-all duration-300 ease-in-out`}>
                <CardContent className="flex flex-col gap-2.5 p-6 sm:p-6 lg:p-10">
                  <h4 className="font-h6-h6-semibold text-black text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                    {bankFeatures[6].title}
                  </h4>
                  <p className="font-h6-h6-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                    {bankFeatures[6].description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Separator - Hidden on mobile */}
        <Separator
          orientation="vertical"
          className="hidden lg:block h-auto bg-[#00d959] w-[1px]"
        />

        {/* For Cardholding Enterprises Column */}
        <motion.div
          className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: durations.normal,
            ease: easings.smooth,
            delay: createElementDelay(1, 0.1),
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4 sm:gap-5 w-full"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="w-full font-h6-h6-semibold text-[#1a3c34] text-xl sm:text-xl lg:text-2xl xl:text-[length:var(--h6-h6-semibold-font-size)] text-center tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]"
              variants={fadeInUpVariants}
            >
              For Cardholding Enterprises
            </motion.h3>
            <Separator
              orientation="horizontal"
              className="w-full max-w-[540px] h-[1px] bg-[#ebebeb]"
            />
          </motion.div>

          <StaggeredGrid
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full"
            speed="normal"
            threshold={0.1}
            delay={0.1}
          >
            {enterpriseFeatures.slice(0, isMobile ? 7 : 6).map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: durations.fast,
                    ease: easings.smooth,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-abu-bg border-[#ebebeb] rounded-[10px] touch-manipulation h-full group hover:bg-[#1a3c34] hover:border-[#1a3c34]  hover:cursor-pointer transition-all duration-300 ease-in-out">
                  <CardContent className="flex flex-col gap-2.5 p-6 sm:p-6 lg:p-10">
                    <h4 className="font-h6-h6-semibold text-black text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                      {feature.title}
                    </h4>
                    <p className="font-h6-h6-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredGrid>

          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: createElementDelay(1, 0.25),
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: durations.fast, ease: easings.smooth },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`${isMobile ? "hidden" : "w-[550px] sm:w-[290px]"} bg-abu-bg border-[#ebebeb] rounded-[10px] touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34]  hover:cursor-pointer transition-all duration-300 ease-in-out`}>
                <CardContent className="flex flex-col gap-2.5 p-6 sm:p-6 lg:p-10">
                  <h4 className="font-h6-h6-semibold text-black text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                    {enterpriseFeatures[6].title}
                  </h4>
                  <p className="font-h6-h6-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                    {enterpriseFeatures[6].description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center gap-2.5 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: durations.normal,
          ease: easings.smooth,
          delay: createElementDelay(2, 0.2),
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -4,
            transition: { duration: durations.fast, ease: easings.smooth },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="flex items-center justify-center gap-3 px-8 sm:px-8 lg:px-10 py-4 sm:py-4 lg:py-8 bg-[#4a8b7b] rounded-[48px] text-white w-full max-w-[280px] sm:max-w-[330px] h-14 sm:h-14 lg:h-auto touch-manipulation">
            <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-h6-h6-semibold text-white text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap">
              Request a Demo
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
