import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
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
import { useGlobalAnimationOrchestrator } from "../../../../hooks/useGlobalAnimationOrchestrator";

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
  // Synchronized animation orchestrator for layout section
  const { createElementDelay } = useGlobalAnimationOrchestrator({
    sectionKey: "layout",
    threshold: 0.1,
  });

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-12 lg:py-16 xl:py-[120px] w-full bg-[#e0eae8]">
      <motion.div
        className="flex flex-col max-w-4xl items-start gap-4 sm:gap-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: durations.normal,
          ease: easings.smooth,
          delay: createElementDelay(0, 0.05),
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AnimatedText
          as="h2"
          variant="fadeUp"
          className="w-full font-h3-h3-semibold text-[#1a3c34] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]"
          delay={createElementDelay(1, 0.05)}
          threshold={0.3}
        >
          Traditional B2B Payouts Fail—And What We Fix
        </AnimatedText>
      </motion.div>

      <div className="flex flex-col items-start gap-12 sm:gap-16 lg:gap-20 xl:gap-[120px] w-full max-w-7xl">
        {/* Problem Section */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 w-full rounded-[20px]">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20 w-full">
            {/* Left Column - Problem Title and Visual */}
            <motion.div
              className="flex flex-col gap-6 sm:gap-8 lg:gap-[60px] items-center w-full lg:w-auto order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="w-full max-w-[400px] flex flex-col items-center gap-4 sm:gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.normal,
                  ease: easings.smooth,
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-start gap-3 w-full">
                  <AnimatedText
                    as="h3"
                    variant="fadeUp"
                    className="w-full font-h4-h4-semibold text-[#c42027] text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-[length:var(--h4-h4-semibold-font-size)] text-center leading-tight xl:leading-[var(--h4-h4-semibold-line-height)]"
                    delay={0.7}
                    threshold={0.3}
                  >
                    The Problem
                  </AnimatedText>
                </div>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{
                    duration: durations.normal,
                    ease: easings.smooth,
                    delay: 0.9,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Separator className="w-full max-w-[400px] bg-[#1a3c34]" />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex w-full max-w-[400px] items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: durations.slow,
                  ease: easings.smooth,
                  delay: 1.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex flex-1 items-center justify-center relative">
                  <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[404px] aspect-square">
                    <img
                      className="w-full h-full object-contain"
                      alt="Problem visualization"
                      src="/chart-container.png"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Problem Cards */}
            <motion.div
              className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5 flex-1 w-full order-2 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StaggeredGrid
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full"
                speed="fast"
                threshold={0.2}
                delay={1.3}
              >
                {problemCards.slice(0, 2).map((card, index) => (
                  <AnimatedCard
                    key={`top-card-${index}`}
                    hoverEffect="lift"
                    index={index}
                    threshold={0.2}
                    className="h-full"
                  >
                    <Card
                      className={`${card.bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden touch-manipulation h-full hover:shadow-lg transition-shadow duration-300`}
                    >
                      <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                        <motion.h4
                          className={`font-h6-h6-semibold ${card.titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 1.5 + index * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {card.title}
                        </motion.h4>
                        <motion.p
                          className={`font-h6-h6-regular ${card.descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 1.6 + index * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {card.description}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </StaggeredGrid>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.normal,
                  ease: easings.smooth,
                  delay: 1.8,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card
                  className={`w-full ${problemCards[2].bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                >
                  <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                    <motion.h4
                      className={`font-h6-h6-semibold ${problemCards[2].titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 2.0,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {problemCards[2].title}
                    </motion.h4>
                    <motion.p
                      className={`font-h6-h6-regular ${problemCards[2].descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 2.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {problemCards[2].description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>

              <StaggeredGrid
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full"
                speed="fast"
                threshold={0.2}
                delay={2.3}
              >
                {problemCards.slice(3, 5).map((card, index) => (
                  <AnimatedCard
                    key={`middle-card-${index}`}
                    hoverEffect="lift"
                    index={index}
                    threshold={0.2}
                    className="h-full"
                  >
                    <Card
                      className={`${card.bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden touch-manipulation h-full hover:shadow-lg transition-shadow duration-300`}
                    >
                      <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                        <motion.h4
                          className={`font-h6-h6-semibold ${card.titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 2.5 + index * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {card.title}
                        </motion.h4>
                        <motion.p
                          className={`font-h6-h6-regular ${card.descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 2.6 + index * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {card.description}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </StaggeredGrid>

              <StaggeredGrid
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full"
                speed="fast"
                threshold={0.2}
                delay={2.8}
              >
                {problemCards.slice(5, 7).map((card, index) => (
                  <AnimatedCard
                    key={`bottom-card-${index}`}
                    hoverEffect="lift"
                    index={index}
                    threshold={0.2}
                    className="h-full"
                  >
                    <Card
                      className={`${card.bgColor} rounded-[10px] border-[#ebebeb] overflow-hidden touch-manipulation h-full hover:shadow-lg transition-shadow duration-300`}
                    >
                      <CardContent className="flex flex-col gap-2.5 p-4 sm:p-5">
                        <motion.h4
                          className={`font-h6-h6-semibold ${card.titleColor} text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 3.0 + index * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {card.title}
                        </motion.h4>
                        <motion.p
                          className={`font-h6-h6-regular ${card.descriptionColor} text-sm sm:text-sm lg:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 3.1 + index * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {card.description}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </StaggeredGrid>
            </motion.div>
          </div>
        </div>

        {/* Solutions Section */}
        <motion.div
          className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-[60px] w-full rounded-[20px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: durations.normal,
            ease: easings.smooth,
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="max-w-4xl flex flex-col items-center gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.normal,
              ease: easings.smooth,
              delay: 0.7,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex w-full max-w-[440px] items-center gap-3">
              <AnimatedText
                as="h3"
                variant="fadeUp"
                className="w-full font-h3-h3-semibold text-[#4a8b7b] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]"
                delay={0.8}
                threshold={0.3}
              >
                Our Solutions
              </AnimatedText>
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.9,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Separator className="w-full max-w-[540px] bg-[#4a8b7b]" />
            </motion.div>
          </motion.div>

          <StaggeredGrid
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-5 w-full"
            speed="normal"
            threshold={0.2}
            delay={1.0}
          >
            {solutionsData.map((solution, index) => (
              <AnimatedCard
                key={`solution-${index}`}
                hoverEffect="lift"
                index={index}
                threshold={0.2}
                className="h-full"
              >
                <Card
                  className={`flex flex-col h-auto lg:h-[733px] ${solution.bgColor} rounded-[20px] ${solution.hasBorder ? "border border-solid border-[#4a8b7b]" : ""} touch-manipulation h-full hover:shadow-xl transition-shadow duration-300`}
                >
                  <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 h-full">
                    <motion.h4
                      className="w-full font-h5-h5-semibold text-black text-lg sm:text-lg lg:text-xl xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: durations.normal,
                        ease: easings.smooth,
                        delay: 1.4 + index * 0.2,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {solution.title}
                    </motion.h4>
                    <motion.div
                      className="flex flex-col items-start gap-4 sm:gap-5 w-full flex-1"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: durations.normal,
                        ease: easings.smooth,
                        delay: 1.6 + index * 0.2,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {solution.items.map((item, itemIndex) => (
                        <motion.div
                          key={`solution-item-${index}-${itemIndex}`}
                          className="flex items-start gap-2.5 w-full"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 1.8 + index * 0.2 + itemIndex * 0.05,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <motion.img
                            className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0"
                            alt="Label"
                            src="/thin-arrow.svg"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: durations.fast,
                              ease: easings.bouncy,
                              delay: 1.9 + index * 0.2 + itemIndex * 0.05,
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                          />
                          <p className="flex-1 font-h6-h6-regular text-text text-sm sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </StaggeredGrid>

          <motion.div
            className="flex flex-col items-center gap-2.5 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.normal,
              ease: easings.smooth,
              delay: 1.5,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatedButton
              variant="default"
              className="flex items-center justify-center gap-3 px-8 sm:px-8 lg:px-10 py-4 sm:py-4 lg:py-8 bg-[#4a8b7b] rounded-[48px] text-white w-full max-w-[280px] sm:max-w-[330px] h-14 sm:h-14 lg:h-auto touch-manipulation hover:bg-[#3d7a6a] transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <motion.div
                initial={{ x: -5, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.7,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.span
                className="font-h6-h6-semibold text-white text-base sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap"
                initial={{ x: 5, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.8,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Request a Demo
              </motion.span>
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};