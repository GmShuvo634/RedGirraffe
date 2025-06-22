import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  AnimatedText,
  AnimatedCard,
  StaggeredGrid,
  AnimatedButton,
} from "../../../../components/animations";
import {
  durations,
  easings,
} from "../../../../utils/animations";

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
      "Authorized checkers release payouts. API triggers and card executes. Instant payout. Global FX support. Fully auditable.",
    tags: ["Full Audit Trail", "Global FX", "Instant Execution"],
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-[120px] w-full bg-white">
      <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-[120px] w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] flex-1">
          {/* Section Header */}
          <motion.div
            className="flex flex-col w-full max-w-4xl items-start gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: 0.05,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2.5 w-full">
              <AnimatedText
                as="h2"
                variant="fadeUp"
                className="flex-1 font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]"
                delay={0.1}
                threshold={0.3}
              >
                How RedGirraffe Works
              </AnimatedText>
            </div>

            <div className="flex items-center justify-center gap-2.5 px-4 sm:px-6 lg:px-10 py-0 w-full">
              <AnimatedText
                as="p"
                variant="fadeUp"
                className="flex-1 font-h6-h6-regular text-[#4a8b7b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]"
                delay={0.2}
                threshold={0.3}
              >
                Simplify your payments in three seamless steps.
              </AnimatedText>
            </div>
          </motion.div>

          {/* Progress Indicator - Hidden on mobile */}
          <motion.div
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {[1, 2, 3].map((step, index) => (
              <div
                key={step}
                className={`relative w-[430px] h-5 ${index > 0 ? "ml-[-5px]" : ""}`}
              >
                <div className="relative h-5">
                  {Array.from({ length: 21 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-[10px] h-[.8px] bg-[#4a8b7b] top-2 border-dashed border-[1px] border-[#4a8b7b]"
                      style={{ left: `${i * 20}px` }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 0.4 + index * 0.05 + i * 0.01,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    />
                  ))}
                  <motion.div
                    className="absolute w-5 h-5 top-0 bg-[#1a3c34] rounded-[10px]"
                    style={{ left: index === 0 ? "200px" : "210px" }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.bouncy,
                      delay: 0.6 + index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Process Cards */}
          <StaggeredGrid
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full"
            speed="fast"
            threshold={0.2}
            delay={0.9}
          >
            {processSteps.map((step, index) => (
              <AnimatedCard
                key={index}
                hoverEffect="lift"
                index={index}
                threshold={0.2}
                className="h-full"
              >
                <Card className="w-full lg:h-[400px] rounded-[20px] border-[#ebebeb] shadow-[16px_8px_20px_#1b1b1b05] touch-manipulation h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 h-full">
                    <motion.div
                      className="flex flex-col items-start gap-4 sm:gap-5 w-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 1.0 + index * 0.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <h3 className="w-fit font-h5-h5-semibold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)] whitespace-nowrap">
                        {step.title}
                      </h3>
                      <p className="self-stretch font-h6-h6-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                        {step.description}
                      </p>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-start gap-2.5 w-full"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 1.1 + index * 0.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        {step.tags.slice(0, 2).map((tag, tagIndex) => (
                          <motion.div
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: durations.fast,
                              ease: easings.bouncy,
                              delay: 1.2 + index * 0.1 + tagIndex * 0.05,
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <Badge className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 bg-[#f5f5f5] text-[#1a3c34] rounded-[40px] hover:text-[#f5f5f5] font-body-large-body-large-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)] touch-manipulation">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      {step.tags[2] && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.bouncy,
                            delay: 1.3 + index * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <Badge className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 bg-[#f5f5f5] text-[#1a3c34] hover:text-[#f5f5f5] rounded-[40px] font-body-large-body-large-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)] touch-manipulation">
                            {step.tags[2]}
                          </Badge>
                        </motion.div>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </StaggeredGrid>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col w-full items-center gap-2.5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: 1.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatedButton
              variant="default"
              className="flex w-full max-w-[330px] items-center justify-center gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 bg-[#4a8b7b] rounded-[48px] text-white touch-manipulation hover:bg-[#3d7a6a] transition-colors duration-300"
            >
              <motion.div
                initial={{ x: -5, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.5,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.span
                className="font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]"
                initial={{ x: 5, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.55,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Request a Demo
              </motion.span>
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};