import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { ArrowRightIcon } from "lucide-react";

export const ContentSection = (): JSX.Element => {
  // Service category data
  const serviceCategories = [
    {
      icon: "/src/public/equalizer.svg",
      title: "Data Centres & SaaS Tools",
      description: "Streamline hosting and software costs",
    },
    {
      icon: "/src/public/equalizer.svg",
      title: "Cleaning, Security & Facility Services",
      description: "Fund premises upkeep",
    },
    {
      icon: "/src/public/equalizer.svg",
      title: "Event & Sponsorship Payments",
      description: "Support events, sponsorships, and promotional activities",
    },
    {
      icon: "/src/public/equalizer.svg",
      title: "Marketing & Advertising",
      description: "Settle bills for campaigns and creative services",
    },
    {
      icon: "/src/public/equalizer.svg",
      title: "Logistics & Shipping",
      description: "Fund freight and transportation services",
    },
    {
      icon: "/src/public/equalizer.svg",
      title: "Professional Services",
      description: "Pay consultants, auditors, and advisors efficiently",
    },
    {
      icon: "/src/public/equalizer.svg",
      title: "Vendor/Contractor Payouts",
      description: "Pay freelancers and service partners",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-8 sm:gap-10 lg:gap-[60px] px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-[120px] w-full bg-[#e0eae8]">
      <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-[60px] w-full max-w-7xl mx-auto">
        <div className="flex flex-col max-w-4xl items-start gap-4 lg:gap-5">
          <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]">
            Pay Everything That Matters. At the Speed of Now
          </h2>
        </div>

        <div className="flex flex-col items-start gap-8 sm:gap-10 lg:gap-[60px] w-full">
          <Tabs defaultValue="vendor" className="w-full">
            <TabsList className="flex w-full h-auto bg-transparent p-0 gap-2 sm:gap-4 lg:gap-10 flex-col sm:flex-row">
              <TabsTrigger
                value="vendor"
                className="flex-1 p-3 sm:p-4 lg:p-5 border-b-2 border-[#105447] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none font-h5-h5-semibold text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent touch-manipulation"
              >
                Vendor & Payments
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="flex-1 p-3 sm:p-4 lg:p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none font-h5-h5-semibold text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent touch-manipulation"
              >
                Business Operations
              </TabsTrigger>
              <TabsTrigger
                value="global"
                className="flex-1 p-3 sm:p-4 lg:p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none bg-transparent font-h5-h5-semibold text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent touch-manipulation"
              >
                Global Expense & Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vendor" className="mt-6 sm:mt-8 lg:mt-[60px]">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
                  {serviceCategories.slice(0, 6).map((category, index) => (
                    <Card
                      key={index}
                      className="bg-textwhite rounded-[10px] border-none hover:shadow-lg transition-shadow touch-manipulation"
                    >
                      <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
                        <img
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 aspect-square"
                          alt="Category icon"
                          src={category.icon}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)]">
                            {category.title}
                          </h3>
                          <p className="font-body-large-body-large-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                            {category.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Card className="w-full max-w-[400px] bg-textwhite rounded-[10px] border-none touch-manipulation">
                    <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
                      <img
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
                        alt="Category icon"
                        src={serviceCategories[6].icon}
                      />
                      <div className="flex flex-col items-start gap-2.5 w-full">
                        <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)]">
                          {serviceCategories[6].title}
                        </h3>
                        <p className="font-body-large-body-large-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                          {serviceCategories[6].description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business" className="mt-6 sm:mt-8 lg:mt-[60px]">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
                  {serviceCategories.slice(0, 6).map((category, index) => (
                    <Card
                      key={index}
                      className="bg-textwhite rounded-[10px] border-none hover:shadow-lg transition-shadow touch-manipulation"
                    >
                      <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
                        <img
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 aspect-square"
                          alt="Category icon"
                          src={category.icon}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)]">
                            {category.title}
                          </h3>
                          <p className="font-body-large-body-large-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                            {category.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Card className="w-full max-w-[400px] bg-textwhite rounded-[10px] border-none touch-manipulation">
                    <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
                      <img
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
                        alt="Category icon"
                        src={serviceCategories[6].icon}
                      />
                      <div className="flex flex-col items-start gap-2.5 w-full">
                        <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)]">
                          {serviceCategories[6].title}
                        </h3>
                        <p className="font-body-large-body-large-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                          {serviceCategories[6].description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="global" className="mt-6 sm:mt-8 lg:mt-[60px]">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
                  {serviceCategories.slice(0, 6).map((category, index) => (
                    <Card
                      key={index}
                      className="bg-textwhite rounded-[10px] border-none touch-manipulation"
                    >
                      <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
                        <img
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 aspect-square"
                          alt="Category icon"
                          src={category.icon}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)]">
                            {category.title}
                          </h3>
                          <p className="font-body-large-body-large-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                            {category.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Card className="w-full max-w-[400px] bg-textwhite rounded-[10px] border-none touch-manipulation">
                    <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
                      <img
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
                        alt="Category icon"
                        src={serviceCategories[6].icon}
                      />
                      <div className="flex flex-col items-start gap-2.5 w-full">
                        <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)]">
                          {serviceCategories[6].title}
                        </h3>
                        <p className="font-body-large-body-large-regular text-text text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                          {serviceCategories[6].description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5 w-full">
        <Button className="flex items-center justify-center gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 bg-[#4a8b7b] rounded-[48px] text-white w-full max-w-[330px] touch-manipulation">
          <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-h6-h6-semibold text-white text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap">
            Request a Demo
          </span>
        </Button>
      </div>
    </section>
  );
};