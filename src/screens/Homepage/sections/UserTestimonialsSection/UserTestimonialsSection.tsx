
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { SectionHeader } from "../../../../components/ui";
import {
  AnimatedCard,
  StaggeredGrid,
  CountUpText,
} from "../../../../components/animations";
import {
  durations,
  easings,
} from "../../../../utils/animations";

// Data for testimonial cards with countup configuration
const testimonialData = [
  {
    metric: "97+",
    countUpValue: 97,
    suffix: "+",
    label: "Countries Covered",
    description: "Global payments made simple",
  },
  {
    metric: "99.9%",
    countUpValue: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime SLA",
    description: "Ensures uninterrupted payments",
  },
  {
    metric: "150+",
    countUpValue: 150,
    suffix: "+",
    label: "Currencies Supported",
    description: "Pay in any currency, anywhere",
  },
];

export const UserTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full bg-[#e0eae8] pt-16 lg:pt-20 pb-16 lg:pb-20 px-6 sm:px-6 lg:px-[60px] rounded-md">
      <SectionHeader
        title="Scale globally with unmatched"
        highlightedText="reliability."
        subtitle="Serving 97+ countries with 99.9% uptime and support for 150+ currencies—RedGirraffe processes $20B+ annually with top-tier security."
        delay={0.1}
        threshold={0.3}
      />

      <div className="relative max-w-7xl w-full">
        {/* Desktop Separators - Positioned Absolutely */}
        <div className="hidden xl:block absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-[#00d959] transform -translate-x-1/2"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{
              duration: durations.normal,
              ease: easings.smooth,
              delay: 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <motion.div
            className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-[#00d959] transform -translate-x-1/2"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{
              duration: durations.normal,
              ease: easings.smooth,
              delay: 0.9,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        {/* Cards Grid */}
        <StaggeredGrid
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-1 sm:gap-4 lg:gap-6 w-full"
          speed="normal"
          threshold={0.2}
          delay={0.6}
        >
          {testimonialData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <AnimatedCard
                hoverEffect="lift"
                index={index}
                threshold={0.2}
                className="h-full"
              >
                <Card className="flex flex-col w-full items-start p-6 sm:p-8 lg:p-10 bg-white rounded-[10px] border-none touch-manipulation h-full hover:shadow-lg transition-shadow duration-300 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
                  <CardContent className="flex flex-col items-start gap-4 sm:gap-5 p-0 w-full h-full justify-between">
                    <div className="flex flex-col items-start justify-center gap-2.5 w-full">
                      <div className="flex items-start gap-2.5 w-full">
                        <div className="inline-flex items-start justify-center">
                          <CountUpText
                            end={item.countUpValue}
                            start={0}
                            duration={5000}
                            delay={500}
                            decimals={item.decimals || 0}
                            suffix={item.suffix || ""}
                            className="font-bold text-dark-green text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[length:var(--h2-h2-bold-font-size)] tracking-[var(--h2-h2-bold-letter-spacing)] leading-tight xl:leading-[var(--h2-h2-bold-line-height)] whitespace-nowrap"
                            threshold={0.2}
                            animationDelay={1.0 + index * 0.2}
                          />
                        </div>

                        <div className="flex items-end gap-2.5 pt-0 pb-2 flex-1 self-stretch">
                          <motion.span
                            className="font-h6-h6-regular text-app-secondary text-xl sm:text-xl lg:text-xl xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)] whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: durations.normal,
                              ease: easings.smooth,
                              delay: 1.2 + index * 0.3,
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            {item.label}
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center justify-center gap-2.5 w-full px-4 sm:px-6 lg:px-10"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: durations.normal,
                        ease: easings.smooth,
                        delay: 1.4 + index * 0.3,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <p className="w-full font-h6-h6-regular text-base sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)] whitespace-nowrap">
                        {item.description}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Mobile Horizontal Separators */}
              {index < testimonialData.length - 1 && (
                <motion.div
                  className="block lg:hidden my-4 py-2"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{
                    duration: durations.normal,
                    ease: easings.smooth,
                    delay: 1.3 + index * 0.3,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Separator orientation="horizontal" className="h-[1px] bg-[#00d959] w-full" />
                </motion.div>
              )}
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};