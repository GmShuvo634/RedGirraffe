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
    <section className="flex flex-col items-start gap-10 lg:gap-[60px] px-4 sm:px-8 lg:px-20 py-20 lg:py-[120px] w-full bg-[#e0eae8]">
      <div className="flex flex-col items-center gap-10 lg:gap-[60px] w-full max-w-7xl mx-auto">
        <div className="flex flex-col max-w-[800px] items-start gap-4 lg:gap-5">
          <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-2xl sm:text-3xl lg:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight lg:leading-[var(--h3-h3-semibold-line-height)]">
            Pay Everything That Matters. At the Speed of Now
          </h2>
        </div>

        <div className="flex flex-col items-start gap-10 lg:gap-[60px] w-full">
          <Tabs defaultValue="vendor" className="w-full">
            <TabsList className="flex w-full h-auto bg-transparent p-0 gap-4 lg:gap-10 flex-col sm:flex-row">
              <TabsTrigger
                value="vendor"
                className="flex-1 p-5 border-b-2 border-[#105447] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none font-h5-h5-semibold text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent "
              >
                Vendor & Payments
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="flex-1 p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none font-h5-h5-semibold text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent"
              >
                Business Operations
              </TabsTrigger>
              <TabsTrigger
                value="global"
                className="flex-1 p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none bg-transparent font-h5-h5-semibold text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)] data-[state=active]:bg-transparent"
              >
                Global Expense & Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vendor" className="mt-8 lg:mt-[60px]">
              <div className="flex flex-col gap-8 lg:gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {serviceCategories.slice(0, 6).map((category, index) => (
                    <Card
                      key={index}
                      className="bg-textwhite rounded-[10px] border-none hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="flex flex-col items-start gap-10 p-10">
                        <img
                          className="w-18 h-18 aspect-square"
                          alt="Category icon"
                          src={category.icon}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-lg lg:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight lg:leading-[var(--h5-h5-semibold-line-height)]">
                            {category.title}
                          </h3>
                          <p className="font-body-large-body-large-regular text-text text-sm lg:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed lg:leading-[var(--body-large-body-large-regular-line-height)]">
                            {category.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="w-[400px] bg-textwhite rounded-[10px] border-none">
                  <CardContent className="flex flex-col items-start gap-10 p-10">
                    <img
                      className="w-18 h-18"
                      alt="Category icon"
                      src={serviceCategories[6].icon}
                    />
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <h3 className="h-16 font-h5-h5-semibold text-[#1b1b1b] text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                        {serviceCategories[6].title}
                      </h3>
                      <p className="h-12 font-body-large-body-large-regular text-text text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)]">
                        {serviceCategories[6].description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="business" className="mt-[60px]">
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-3 gap-10">
                  {serviceCategories.slice(0, 6).map((category, index) => (
                    <Card
                      key={index}
                      className="bg-textwhite rounded-[10px] border-none hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="flex flex-col items-start gap-10 p-10">
                        <img
                          className="w-18 h-18 aspect-square"
                          alt="Category icon"
                          src={category.icon}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="font-h5-h5-semibold text-[#1b1b1b] text-lg lg:text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-tight lg:leading-[var(--h5-h5-semibold-line-height)]">
                            {category.title}
                          </h3>
                          <p className="font-body-large-body-large-regular text-text text-sm lg:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed lg:leading-[var(--body-large-body-large-regular-line-height)]">
                            {category.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="w-[400px] bg-textwhite rounded-[10px] border-none">
                  <CardContent className="flex flex-col items-start gap-10 p-10">
                    <img
                      className="w-18 h-18"
                      alt="Category icon"
                      src={serviceCategories[6].icon}
                    />
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <h3 className="h-16 font-h5-h5-semibold text-[#1b1b1b] text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                        {serviceCategories[6].title}
                      </h3>
                      <p className="h-12 font-body-large-body-large-regular text-text text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)]">
                        {serviceCategories[6].description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="global" className="mt-[60px]">
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-3 gap-10">
                  {serviceCategories.slice(0, 6).map((category, index) => (
                    <Card
                      key={index}
                      className="bg-textwhite rounded-[10px] border-none"
                    >
                      <CardContent className="flex flex-col items-start gap-10 p-10">
                        <img
                          className="w-18 h-18 aspect-square"
                          alt="Category icon"
                          src={category.icon}
                        />
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="h-16 font-h5-h5-semibold text-[#1b1b1b] text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                            {category.title}
                          </h3>
                          <p className="h-12 font-body-large-body-large-regular text-text text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)]">
                            {category.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="w-[400px] bg-textwhite rounded-[10px] border-none">
                  <CardContent className="flex flex-col items-start gap-10 p-10">
                    <img
                      className="w-18 h-18"
                      alt="Category icon"
                      src={serviceCategories[6].icon}
                    />
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <h3 className="h-16 font-h5-h5-semibold text-[#1b1b1b] text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]">
                        {serviceCategories[6].title}
                      </h3>
                      <p className="h-12 font-body-large-body-large-regular text-text text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)]">
                        {serviceCategories[6].description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5 w-full">
        <Button className="flex items-center justify-center gap-3 px-10 py-8 bg-[#4a8b7b] rounded-[48px] text-white">
          <ArrowRightIcon className="w-6 h-6" />
          <span className="font-h6-h6-semibold text-white text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap">
            Request a Demo
          </span>
        </Button>
      </div>
    </section>
  );
};