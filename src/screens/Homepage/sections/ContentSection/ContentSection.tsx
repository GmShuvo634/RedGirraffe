import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const ContentSection = (): JSX.Element => {
  // Service category data
  const serviceCategories = [
    {
      icon: "/technology-globe-3d.svg",
      title: "Data Centres & SaaS Tools",
      description: "Streamline hosting and software costs",
    },
    {
      icon: "/technology-globe-3d.svg",
      title: "Cleaning, Security & Facility Services",
      description: "Fund premises upkeep",
    },
    {
      icon: "/technology-globe-3d.svg",
      title: "Event & Sponsorship Payments",
      description: "Support events, sponsorships, and promotional activities",
    },
    {
      icon: "/technology-globe-3d.svg",
      title: "Marketing & Advertising",
      description: "Settle bills for campaigns and creative services",
    },
    {
      icon: "/technology-globe-3d.svg",
      title: "Logistics & Shipping",
      description: "Fund freight and transportation services",
    },
    {
      icon: "/technology-globe-3d.svg",
      title: "Professional Services",
      description: "Pay consultants, auditors, and advisors efficiently",
    },
    {
      icon: "/technology-globe-3d.svg",
      title: "Vendor/Contractor Payouts",
      description: "Pay freelancers and service partners",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[60px] px-20 py-[120px] w-full bg-[#e0eae8]">
      <div className="flex flex-col items-center gap-[60px] w-full">
        <div className="flex flex-col max-w-[800px] items-start gap-5">
          <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-[var(--h3-h3-semibold-line-height)]">
            Pay Everything That Matters. At the Speed of Now
          </h2>
        </div>

        <div className="flex flex-col items-start gap-[60px] w-full">
          <Tabs defaultValue="vendor" className="w-full">
            <TabsList className="flex w-full h-auto bg-transparent p-0 gap-10">
              <TabsTrigger
                value="vendor"
                className="flex-1 p-5 border-b-2 border-[#105447] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none bg-transparent font-h5-h5-semibold text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]"
              >
                Vendor &amp; Payments
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="flex-1 p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none bg-transparent font-h5-h5-semibold text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]"
              >
                Business Operations
              </TabsTrigger>
              <TabsTrigger
                value="global"
                className="flex-1 p-5 border-b-2 border-[#00d959] data-[state=active]:border-[#105447] data-[state=inactive]:border-[#00d959] data-[state=active]:text-textblack data-[state=inactive]:text-[#4a8b7b] rounded-none bg-transparent font-h5-h5-semibold text-[length:var(--h5-h5-semibold-font-size)] tracking-[var(--h5-h5-semibold-letter-spacing)] leading-[var(--h5-h5-semibold-line-height)]"
              >
                Global Expense &amp; Compliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vendor" className="mt-[60px]">
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-3 gap-10">
                  {serviceCategories.slice(0, 6).map((category, index) => (
                    <Card
                      key={index}
                      className="bg-textwhite rounded-[10px] border-none"
                    >
                      <CardContent className="flex flex-col items-start gap-10 p-10">
                        <div className="flex w-12 h-12 items-center justify-center p-[7px] bg-white rounded-[48px] overflow-hidden border-[0.5px] border-solid border-[#ebebeb] shadow-[0px_0px_4px_4px_#5757570a]">
                          <img
                            className="w-6 h-6"
                            alt="Category icon"
                            src={category.icon}
                          />
                        </div>
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
                    <div className="flex w-12 h-12 items-center justify-center p-[7px] bg-white rounded-[48px] overflow-hidden border-[0.5px] border-solid border-[#ebebeb] shadow-[0px_0px_4px_4px_#5757570a]">
                      <img
                        className="w-6 h-6"
                        alt="Category icon"
                        src={serviceCategories[6].icon}
                      />
                    </div>
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

            <TabsContent value="business">
              {/* Content for Business Operations tab */}
            </TabsContent>

            <TabsContent value="global">
              {/* Content for Global Expense & Compliance tab */}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <Button className="flex items-center justify-center gap-3 px-10 py-4 bg-[#4a8b7b] rounded-[48px] text-white font-h6-h6-semibold text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
          <img
            className="w-6 h-6"
            alt="Arrow right"
            src="/arrow-right-alt-4.png"
          />
          Request a Demo
        </Button>
      </div>
    </section>
  );
};
