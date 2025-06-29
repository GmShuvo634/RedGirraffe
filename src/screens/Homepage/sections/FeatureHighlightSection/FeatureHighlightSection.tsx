import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { SectionHeader } from "../../../../components/ui";
import { AnimatedCard, StaggeredGrid } from "../../../../components/animations";
import { durations, easings } from "../../../../utils/animations";
import {
  PrimaryActionButton,
  SecondaryActionButton,
} from "../../../../components/buttons";

// Data for the advantage cards
const advantageCards = [
  {
    title: "Bank Partnership Advantages",
    points: [
      "Capture low-risk B2B card spend, reduce fraud with PSP-backed security, and scale globally.",
      "Increase Revenue Streams: Earn higher transaction fees with secure, high-volume B2B payments.",
      "Enhanced Reporting: Access detailed analytics to optimize operations and compliance.",
    ],
    buttonText: "Book a Demo",
    buttonClass: "bg-[#1a3c34]",
  },
  {
    title: "Authorized PSPs Advantages",
    points: [
      "Leverage our platform to offer secure, scalable payment solutions to enterprises worldwide.",
      "Expand Market Reach: Tap into RedGirraffe's global network of 97+ countries.",
      "Reduce Operational Costs: Streamline payment processing with integrated APIs.",
    ],
    buttonText: "Contact Sales",
    buttonClass: "bg-[#4a8b7b]",
  },
];

// Data for the feature cards
const featureRows = [
  [
    {
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption for all transactions.",
    },
    {
      title: "Fraud Detection by PSPs",
      description:
        "Leverages top-grade security from payment service providers to prevent fraud.",
    },
    {
      title: "Unified Dashboards Live Analytics",
      description: "Real-time analytics for spend control.",
    },
    {
      title: "ISO 27001 Certified",
      description:
        "Globally recognized framework for data security management.",
    },
  ],
  [
    {
      title: "PCI DSS Compliance",
      description:
        "Adheres to the highest standards for secure card transactions.",
    },
    {
      title: "AI-Powered Smarts",
      description: "Smart fraud detection and spend optimization.",
    },
    {
      title: "ERP & API Ready",
      description: "Seamless integration with 50+ business tools.",
    },
    {
      title: "Mobile First",
      description: "Full platform access on your phone.",
    },
  ],
];

export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full pt-2">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full">
        {/* Header Section */}
        <SectionHeader
          title="Powered by smart"
          highlightedText="infrastructure."
          subtitle="More than a card—an intelligent spend management platform."
          delay={0.05}
          threshold={0.3}
        />

        {/* Advantage Cards Section */}
        <StaggeredGrid
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full"
          speed="fast"
          threshold={0.2}
          delay={0.3}
        >
          {advantageCards.map((card, index) => (
            <AnimatedCard
              key={index}
              hoverEffect="lift"
              index={index}
              threshold={0.2}
              className="h-full"
            >
              <Card className="p-6 sm:p-8 lg:p-10 rounded-[20px] border border-[#ebebeb] touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out h-full">
                <CardHeader className="p-0 flex flex-col items-center gap-4 sm:gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 0.4 + index * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <CardTitle className="w-full font-h5-h5-semibold text-[#1a3c34] group-hover:text-white text-md sm:text-md lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] text-center tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)]">
                      {card.title}
                    </CardTitle>
                  </motion.div>

                  <Separator className="w-full h-[1px] bg-[#1a3c34] group-hover:bg-white/30" />
                </CardHeader>
                <CardContent className="p-0 mt-8 sm:mt-10 lg:mt-[60px] flex flex-col gap-8 sm:gap-10 lg:gap-[60px]">
                  <div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
                    {card.points.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        className="flex items-start gap-2.5 w-full"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: durations.fast,
                          ease: easings.smooth,
                          delay: 0.6 + index * 0.05 + pointIndex * 0.03,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ x: 5 }}
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
                            delay: 0.65 + index * 0.05 + pointIndex * 0.03,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                          whileHover={{
                            rotate: 15,
                            scale: 1.1,
                            transition: {
                              duration: durations.fast,
                              ease: easings.smooth,
                            },
                          }}
                        />
                        <p className="font-h6-h6-regular text-text group-hover:text-gray-300 text-sm sm:text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="flex justify-center w-full"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 0.8 + index * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {card.buttonText === "Book a Demo" ? (
                      <PrimaryActionButton
                        size="mobile-lg"
                        className="w-full max-w-[280px]"
                      >
                        {card.buttonText}
                      </PrimaryActionButton>
                    ) : (
                      <SecondaryActionButton
                        size="mobile-lg"
                        className="w-full max-w-[280px] mt-12"
                      >
                        {card.buttonText}
                      </SecondaryActionButton>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </StaggeredGrid>

        {/* Feature Cards Grid not scale in hover*/}
        <motion.div
          className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: durations.fast,
            ease: easings.smooth,
            delay: 1.0,
          }}
          viewport={{ once: true, amount: 0.1 }}
          whileTap={{ scale: 0.98 }}
        >
          {featureRows.map((row, rowIndex) => (
            <StaggeredGrid
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full"
              speed="fast"
              threshold={0.1}
              delay={1.1 + rowIndex * 0.1}
            >
              {row.map((feature, featureIndex) => (
                <AnimatedCard
                  key={featureIndex}
                  hoverEffect="lift"
                  index={featureIndex}
                  threshold={0.1}
                  className="h-full"
                >
                  <Card className="bg-[#f5f5f5] rounded-[10px] border border-[#ebebeb] pb-4 touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out h-full">
                    <CardContent className="flex flex-col gap-2.5 pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-5 px-6 sm:px-8 lg:px-10 h-full">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: durations.fast,
                          ease: easings.smooth,
                          delay: 1.2 + rowIndex * 0.1 + featureIndex * 0.02,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <CardTitle className="font-h6-h6-semibold text-black text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                          {feature.title}
                        </CardTitle>
                      </motion.div>
                      <motion.p
                        className="font-h6-h6-regular text-text text-sm sm:text-sm lg:text-base group-hover:text-gray-300 xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)] min-h-[4rem] sm:min-h-[5rem] lg:min-h-[84px] flex-1"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: durations.fast,
                          ease: easings.smooth,
                          delay: 1.25 + rowIndex * 0.1 + featureIndex * 0.02,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </StaggeredGrid>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
