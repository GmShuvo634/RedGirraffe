import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { ArrowRightIcon } from "lucide-react";
import { SectionHeader } from "../../../../components/ui";
import {
  AnimatedCard,
  StaggeredGrid,
} from "../../../../components/animations";
import { durations, easings } from "../../../../utils/animations";
import { SecondaryActionButton } from "../../../../components/buttons";

export const ContentSection = (): JSX.Element => {
  // Service category data for Vendor & Payments tab
  const vendorCategories = [
    {
      icon: "/equalizer.svg",
      title: "Vendor Payments",
      description: "Pay vendors on time and avail cash discounts on bills",
    },
    {
      icon: "/equalizer.svg",
      title: "Cleaning, Security & Facility Services",
      description: "Fund premises upkeep",
    },
    {
      icon: "/equalizer.svg",
      title: "Event & Sponsorship Payments",
      description: "Support events, sponsorships, and promotional activities",
    },
    {
      icon: "/equalizer.svg",
      title: "Marketing & Advertising",
      description: "Settle bills for campaigns and creative services",
    },
    {
      icon: "/equalizer.svg",
      title: "Logistics & Shipping",
      description: "Fund freight and transportation services",
    },
    {
      icon: "/equalizer.svg",
      title: "Professional Services",
      description: "Pay consultants, auditors, and advisors efficiently",
    },
    {
      icon: "/equalizer.svg",
      title: "Contractor Payouts",
      description: "Pay freelancers and service partners",
    },
  ];

  // Service category data for Business Operations tab
  const businessCategories = [
    {
      icon: "/equalizer.svg",
      title: "Data Centres & SaaS Tools",
      description: "Streamline hosting and software costs",
    },
    {
      icon: "/equalizer.svg",
      title: "Cleaning, Security & Facility Services",
      description: "Fund premises upkeep",
    },
    {
      icon: "/equalizer.svg",
      title: "Event & Sponsorship Payments",
      description: "Support events, sponsorships, and promotional activities",
    },
    {
      icon: "/equalizer.svg",
      title: "Marketing & Advertising",
      description: "Settle bills for campaigns and creative services",
    },
    {
      icon: "/equalizer.svg",
      title: "Logistics & Shipping",
      description: "Fund freight and transportation services",
    },
    {
      icon: "/equalizer.svg",
      title: "Professional Services",
      description: "Pay consultants, auditors, and advisors efficiently",
    },
    {
      icon: "/equalizer.svg",
      title: "Vendor/Contractor Payouts",
      description: "Pay freelancers and service partners",
    },
  ];

  // Service category data for Global tab (same as original)
  const globalCategories = [
    {
      icon: "/equalizer.svg",
      title: "Cleaning, Security & Facility Services",
      description: "Fund premises upkeep",
    },
    {
      icon: "/equalizer.svg",
      title: "Event & Sponsorship Payments",
      description: "Support events, sponsorships, and promotional activities",
    },
    {
      icon: "/equalizer.svg",
      title: "Marketing & Advertising",
      description: "Settle bills for campaigns and creative services",
    },
    {
      icon: "/equalizer.svg",
      title: "Logistics & Shipping",
      description: "Fund freight and transportation services",
    },
    {
      icon: "/equalizer.svg",
      title: "Professional Services",
      description: "Pay consultants, auditors, and advisors efficiently",
    },
    {
      icon: "/equalizer.svg",
      title: "Vendor/Contractor Payouts",
      description: "Pay freelancers and service partners",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[60px] w-full bg-[#e0eae8] pt-16 lg:pt-20 pb-16 lg:pb-20 px-6 sm:px-6 lg:px-[60px]">
      <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[60px] w-full">
        <SectionHeader
          title="Pay everything that matters."
          highlightedText="At the speed of now."
          delay={0.2}
          threshold={0.3}
        />

        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[60px] w-full px-6 sm:px-6 lg:px-[60px]">
          <Tabs defaultValue="vendor" className="w-full">
            <TabsList className="flex w-full h-auto bg-transparent p-0 gap-1 sm:gap-2 lg:gap-10 flex-col sm:flex-row">
              <TabsTrigger
                value="vendor"
                className="flex-1 p-4 sm:p-4 lg:p-5 border-b-2 border-[#105447] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none font-h5-h5-semibold text-base sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent touch-manipulation"
              >
                Vendor & Payments
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="flex-1 p-4 sm:p-4 lg:p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none font-h5-h5-semibold text-base sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent touch-manipulation"
              >
                Business Operations
              </TabsTrigger>
              <TabsTrigger
                value="global"
                className="flex-1 p-4 sm:p-4 lg:p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none bg-transparent font-h5-h5-semibold text-base sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent touch-manipulation"
              >
                Global Expense & Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vendor" className="mt-6 sm:mt-8 lg:mt-[60px]">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <StaggeredGrid
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10"
                  speed="normal"
                  threshold={0.1}
                  delay={0.3}
                >
                  {vendorCategories.slice(0, 7).map((category, index) => (
                    <AnimatedCard
                      key={index}
                      hoverEffect="lift"
                      index={index}
                      threshold={0.1}
                      className="h-full"
                    >
                      <Card className="bg-textwhite rounded-[10px] border-none hover:shadow-lg touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out h-full">
                        <CardContent className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-10 p-6 sm:p-6 lg:p-10 h-full">
                          <motion.img
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 aspect-square"
                            alt="Category icon"
                            src={category.icon}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: {
                                duration: durations.fast,
                                ease: easings.smooth,
                              },
                            }}
                          />
                          <div className="flex flex-col items-start gap-2.5 w-full">
                            <h3 className="font-h6-h6-semibold text-[#1b1b1b] text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)]">
                              {category.title}
                            </h3>
                            <p className="font-body-large-body-large-regular text-text text-sm sm:text-sm lg:text-base group-hover:text-gray-300 xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                              {category.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </StaggeredGrid>
              </div>
            </TabsContent>

            <TabsContent value="business" className="mt-6 sm:mt-8 lg:mt-[60px]">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <StaggeredGrid
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10"
                  speed="normal"
                  threshold={0.1}
                  delay={0.3}
                >
                  {businessCategories.slice(0, 7).map((category, index) => (
                    <AnimatedCard
                      key={index}
                      hoverEffect="lift"
                      index={index}
                      threshold={0.1}
                      className="h-full"
                    >
                      <Card className="bg-textwhite rounded-[10px] border-none hover:shadow-lg touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out h-full">
                        <CardContent className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-10 p-6 sm:p-6 lg:p-10 h-full">
                          <motion.img
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 aspect-square"
                            alt="Category icon"
                            src={category.icon}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: {
                                duration: durations.fast,
                                ease: easings.smooth,
                              },
                            }}
                          />
                          <div className="flex flex-col items-start gap-2.5 w-full">
                            <h3 className="font-h6-h6-semibold text-[#1b1b1b] text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)]">
                              {category.title}
                            </h3>
                            <p className="font-body-large-body-large-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                              {category.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </StaggeredGrid>

                {/* <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: durations.normal,
                    ease: easings.smooth,
                    delay: 0.8,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <AnimatedCard hoverEffect="lift" threshold={0.1}>
                    <Card className="w-full max-w-[400px] bg-textwhite rounded-[10px] border-none touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out">
                      <CardContent className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-10 p-6 sm:p-6 lg:p-10">
                        <motion.img
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18"
                          alt="Category icon"
                          src={businessCategories[6].icon}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: durations.fast, ease: easings.smooth }
                          }}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="font-h6-h6-semibold text-[#1b1b1b] text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)]">
                            {businessCategories[6].title}
                          </h3>
                          <p className="font-body-large-body-large-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                            {businessCategories[6].description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </motion.div> */}
              </div>
            </TabsContent>

            <TabsContent value="global" className="mt-6 sm:mt-8 lg:mt-[60px]">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <StaggeredGrid
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10"
                  speed="normal"
                  threshold={0.1}
                  delay={0.3}
                >
                  {globalCategories.slice(0, 7).map((category, index) => (
                    <AnimatedCard
                      key={index}
                      hoverEffect="lift"
                      index={index}
                      threshold={0.1}
                      className="h-full"
                    >
                      <Card className="bg-textwhite rounded-[10px] border-none hover:shadow-lg touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out h-full">
                        <CardContent className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-10 p-6 sm:p-6 lg:p-10 h-full">
                          <motion.img
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 aspect-square"
                            alt="Category icon"
                            src={category.icon}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: {
                                duration: durations.fast,
                                ease: easings.smooth,
                              },
                            }}
                          />
                          <div className="flex flex-col items-start gap-2.5 w-full">
                            <h3 className="font-h6-h6-semibold text-[#1b1b1b] text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)]">
                              {category.title}
                            </h3>
                            <p className="font-body-large-body-large-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                              {category.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </StaggeredGrid>

                {/* <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: durations.normal,
                    ease: easings.smooth,
                    delay: 0.8,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <AnimatedCard hoverEffect="lift" threshold={0.1}>
                    <Card className="w-full max-w-[400px] bg-textwhite rounded-[10px] border-none touch-manipulation group hover:bg-[#1a3c34] hover:border-[#1a3c34] hover:cursor-pointer transition-all duration-300 ease-in-out">
                      <CardContent className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-10 p-6 sm:p-6 lg:p-10">
                        <motion.img
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18"
                          alt="Category icon"
                          src={globalCategories[5].icon}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: durations.fast, ease: easings.smooth }
                          }}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="font-h6-h6-semibold text-[#1b1b1b] text-base sm:text-base group-hover:text-white lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-tight xl:leading-[var(--h6-h6-semibold-line-height)]">
                            {globalCategories[5].title}
                          </h3>
                          <p className="font-body-large-body-large-regular text-text text-sm sm:text-sm group-hover:text-gray-300 lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                            {globalCategories[5].description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </motion.div> */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <motion.div
        className="flex flex-col items-center gap-2.5 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: durations.normal,
          ease: easings.smooth,
          delay: 0.4,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SecondaryActionButton
          // onClick={() => scrollToSection("contact")}
          size="mobile-lg"
          className="w-full max-w-[280px]"
        >
          Request a Demo
        </SecondaryActionButton>
      </motion.div>
    </section>
  );
};
