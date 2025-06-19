import { SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Data for company links
const companyLinks = [
  "The Journey",
  "Founding Team",
  "Board of Advisors",
  "Our Values",
  "Higher Purpose",
  "Media & Press",
  "Blog",
  "Reviews",
  "About Us",
];

// Data for offerings links
const offeringsLinks = [
  "RentPay™",
  "Corporate Rental ERP",
  "SME Loans",
  "List Your Property",
  "Register as Agent",
  "Post Your Requirement",
  "Fixed Deposit",
  "Refer & Earn",
];

// Data for support links
const supportLinks = [
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
  "Refund/Cancellation Policy",
  "Anti corruption & Brbery Policy",
  "Anti-Fraud & AML Policy",
  "INDIA - S A & I Team",
  "Code of Conduct",
  "Grievance Redressal",
];

// Data for office locations
const officeLocations = [
  {
    country: "Singapore",
    company: "RedGirraffe Holdings",
    address: "3 Temasek Avenue, Centennial Tower, #17-01, Singapore 039190.",
  },
  {
    country: "United Kingdom",
    company: "RedGirraffe Inc.",
    address: "Harben House, Harben Parade, Finchley Road, London, NW3 6LH.",
  },
  {
    country: "India",
    company: "RedGirraffe.com",
    addresses: [
      "904, Galleria Towers, DLF Phase IV, Gurgaon, Haryana - 122002.",
      "507, Tulsiani Chambers, Nariman Point, Mumbai - 400021.",
    ],
  },
];

// Data for social media links
const socialMediaLinks = [
  { name: "YouTube", icon: "📺" },
  { name: "TikTok", icon: "🎵" },
  { name: "LinkedIn", icon: "💼" },
  { name: "Instagram", icon: "📷" },
  { name: "Facebook", icon: "📘" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full pt-20 lg:pt-[120px] pb-6 lg:pb-10 px-4 sm:px-8 lg:px-20 bg-[#1a3c34] flex flex-col">
      <div className="flex flex-col w-full items-start gap-10 lg:gap-[60px] max-w-7xl mx-auto">
        {/* Top section with company info and navigation */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[120px] w-full">
          {/* Company info, subscription and payment methods */}
          <div className="flex flex-col items-start gap-8 lg:gap-10 w-full lg:w-auto">
            <div className="flex flex-col items-start gap-4 lg:gap-5">
              <div className="flex flex-col items-start gap-4 lg:gap-5">
                {/* Logo and company name */}
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6 lg:w-8 lg:h-8 bg-[#00d959] rounded overflow-hidden">
                    <div className="absolute inset-0 bg-[#00d959] rounded flex items-center justify-center">
                      <div className="w-3 h-3 lg:w-5 lg:h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <div className="font-h5-h5-bold text-white text-lg lg:text-xl whitespace-nowrap">
                    RedGirraffe
                  </div>
                </div>

                {/* Service categories */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="font-h6-h6-semibold text-[#ffffff] text-sm lg:text-base whitespace-nowrap">
                    Payments
                  </div>
                  <div className="w-px h-4 lg:h-5 bg-white/30"></div>
                  <div className="font-h6-h6-semibold text-[#ffffff] text-sm lg:text-base whitespace-nowrap">
                    B2B SaaS
                  </div>
                  <div className="w-px h-4 lg:h-5 bg-white/30"></div>
                  <div className="font-h6-h6-semibold text-[#ffffff] text-sm lg:text-base whitespace-nowrap">
                    Real Estate
                  </div>
                </div>
              </div>

              {/* Company description */}
              <p className="max-w-[350px] font-h6-h6-regular text-texthighlight text-sm lg:text-base leading-relaxed">
                See your whole financial picture in one place, alongside a
                smarter approach to investing and real human.
              </p>
            </div>

            {/* Email subscription */}
            <div className="flex flex-col items-start gap-2.5 w-full max-w-[350px]">
              <div className="flex w-full items-center justify-between pl-4 lg:pl-6 pr-1 py-1 bg-white rounded-[64px]">
                <Input
                  className="border-0 bg-transparent text-[#9f9f9f] font-body-large-body-large-regular placeholder:text-[#9f9f9f] text-sm lg:text-base"
                  placeholder="Enter Email Address"
                />
                <Button className="bg-[#00d959] rounded-[48px] p-1.5 h-auto hover:bg-[#00d959]/90">
                  <SendIcon className="w-4 h-4 lg:w-6 lg:h-6" />
                </Button>
              </div>
              <p className="max-w-[350px] font-h6-h6-regular text-textwhite text-xs lg:text-sm">
                Stay connected — no spam, just updates.
              </p>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-3 lg:gap-[13.33px]">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex items-center justify-center p-[2.67px] bg-[#ffffff] rounded">
                  <div className="w-8 h-6 lg:w-10 lg:h-[26.67px] bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs">💳</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start gap-8 lg:gap-20 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row flex-wrap items-start gap-8 lg:gap-[60px]">
              {/* Company links */}
              <div className="flex flex-col w-full sm:w-[230px] items-start gap-4 lg:gap-5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <h3 className="font-h5-h5-semibold text-[#ffffff] text-base lg:text-lg whitespace-nowrap">
                      Company
                    </h3>
                    <p className="font-h6-h6-regular text-texthighlight text-sm whitespace-nowrap">
                      Learn who we are
                    </p>
                  </div>
                  <Separator className="bg-transparent h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
                <div className="flex flex-col items-start gap-3 lg:gap-5 w-full">
                  {companyLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-h6-h6-regular text-highlight-c1 text-sm whitespace-nowrap hover:text-texthighlight transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Offerings links */}
              <div className="flex flex-col w-full sm:w-[230px] items-start gap-4 lg:gap-5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <h3 className="font-h5-h5-semibold text-[#ffffff] text-base lg:text-lg whitespace-nowrap">
                      Offerings
                    </h3>
                    <p className="font-h6-h6-regular text-texthighlight text-sm whitespace-nowrap">
                      Explore our services
                    </p>
                  </div>
                  <Separator className="bg-transparent h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
                <div className="flex flex-col items-start gap-3 lg:gap-5">
                  {offeringsLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-h6-h6-regular text-highlight-c1 text-sm whitespace-nowrap hover:text-texthighlight transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Support & Legal links */}
              <div className="flex flex-col w-full sm:w-[230px] items-start gap-4 lg:gap-5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <h3 className="font-h5-h5-semibold text-[#ffffff] text-base lg:text-lg whitespace-nowrap">
                      Support & Legal
                    </h3>
                    <p className="font-h6-h6-regular text-texthighlight text-sm whitespace-nowrap">
                      Help, policy & protection
                    </p>
                  </div>
                  <Separator className="bg-transparent h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
                <div className="flex flex-col items-start gap-3 lg:gap-5">
                  {supportLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-h6-h6-regular text-highlight-c1 text-sm whitespace-nowrap hover:text-texthighlight transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office locations section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[60px] w-full">
          <div className="flex-1 flex flex-col gap-2.5">
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="font-h5-h5-semibold text-[#ffffff] text-base lg:text-lg">
                Our Offices
              </h3>
              <p className="font-h6-h6-regular text-highlight-c1 text-sm">
                Global presence, local impact
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-[60px] w-full lg:w-auto">
            {/* Singapore office */}
            <div className="flex flex-col w-full sm:w-[230px] items-start gap-2.5">
              <h4 className="w-full font-h5-h5-semibold text-texthighlight text-base">
                {officeLocations[0].country}
              </h4>
              <p className="w-full font-h6-h6-regular text-highlight-c1 text-sm">
                {officeLocations[0].company}
              </p>
              <p className="w-full font-body-medium-body-medium-regular text-tag-green text-xs leading-relaxed">
                {officeLocations[0].address}
              </p>
            </div>

            {/* UK office */}
            <div className="flex flex-col w-full sm:w-[230px] items-start gap-2.5">
              <h4 className="w-full font-h5-h5-semibold text-texthighlight text-base">
                {officeLocations[1].country}
              </h4>
              <p className="w-full font-h6-h6-regular text-highlight-c1 text-sm">
                {officeLocations[1].company}
              </p>
              <p className="w-full font-body-medium-body-medium-regular text-tag-green text-xs leading-relaxed">
                {officeLocations[1].address}
              </p>
            </div>

            {/* India office */}
            <div className="flex flex-col w-full sm:w-[230px] items-start gap-2.5">
              <h4 className="w-full font-h5-h5-semibold text-texthighlight text-base">
                {officeLocations[2].country}
              </h4>
              <p className="w-full font-h6-h6-regular text-highlight-c1 text-sm">
                {officeLocations[2].company}
              </p>
              {officeLocations[2].addresses.map((address, index) => (
                <p
                  key={index}
                  className="w-full font-body-medium-body-medium-regular text-tag-green text-xs leading-relaxed"
                >
                  {address}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="flex flex-col items-start gap-4 lg:gap-6 w-full">
          <Separator className="w-full h-px bg-[#366f65] border border-solid border-[#9cacae]" />
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="font-body-large-body-large-regular text-highlight-c1 text-sm whitespace-nowrap">
              © 2024 RedGirraffe. All rights reserved.
            </p>
            <div className="flex items-center gap-3 lg:gap-5">
              <div className="flex items-start gap-3 lg:gap-[15px]">
                {socialMediaLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="p-2 lg:p-3 bg-[#0000000d] rounded-[100px] border border-solid border-[#9cacae] hover:bg-[#00000020] w-8 h-8 lg:w-10 lg:h-10"
                  >
                    <span className="text-sm lg:text-base">{social.icon}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};