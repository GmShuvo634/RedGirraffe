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
  { name: "YouTube", icon: "/vuesax-bold-youtube.svg" },
  { name: "TikTok", icon: "/ic-baseline-tiktok.svg" },
  { name: "LinkedIn", icon: "/mdi-linkedin.svg" },
  { name: "Instagram", icon: "/ri-instagram-fill.svg" },
  { name: "Facebook", icon: "/vuesax-bold-facebook.svg" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full pt-[120px] pb-10 px-20 bg-[#1a3c34] flex flex-col">
      <div className="flex flex-col w-full items-start gap-[60px]">
        {/* Top section with company info and navigation */}
        <div className="flex flex-wrap items-start gap-[120px] w-full">
          {/* Company info, subscription and payment methods */}
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-5">
                {/* Logo and company name */}
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 bg-[#00d959] rounded overflow-hidden">
                    <img
                      className="absolute w-8 h-8 top-0 left-0"
                      alt="Logo"
                      src="/logo.svg"
                    />
                  </div>
                  <div className="font-h5-h5-bold text-white whitespace-nowrap">
                    RedGirraffe
                  </div>
                </div>

                {/* Service categories */}
                <div className="flex items-center gap-2.5">
                  <div className="font-h6-h6-semibold text-[#ffffff] whitespace-nowrap">
                    Payments
                  </div>
                  <img
                    className="w-px h-5 object-cover"
                    alt="Line"
                    src="/line-718.svg"
                  />
                  <div className="font-h6-h6-semibold text-[#ffffff] whitespace-nowrap">
                    B2B SaaS
                  </div>
                  <img
                    className="w-px h-5 object-cover"
                    alt="Line"
                    src="/line-718.svg"
                  />
                  <div className="font-h6-h6-semibold text-[#ffffff] whitespace-nowrap">
                    Real Estate
                  </div>
                </div>
              </div>

              {/* Company description */}
              <p className="max-w-[350px] font-h6-h6-regular text-texthighlight">
                See your whole financial picture in one place, alongside a
                smarter approach to investing and real human.
              </p>
            </div>

            {/* Email subscription */}
            <div className="flex flex-col items-start gap-2.5">
              <div className="flex w-full max-w-[350px] items-center justify-between pl-6 pr-1 py-1 bg-white rounded-[64px]">
                <Input
                  className="border-0 bg-transparent text-[#9f9f9f] font-body-large-body-large-regular placeholder:text-[#9f9f9f]"
                  placeholder="Enter Email Addres"
                />
                <Button className="bg-[#00d959] rounded-[48px] p-1.5 h-auto">
                  <SendIcon className="w-6 h-6" />
                </Button>
              </div>
              <p className="max-w-[350px] font-h6-h6-regular text-textwhite">
                Stay connected — no spam, just updates.
              </p>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-[13.33px]">
              <div className="flex items-center justify-center p-[2.67px] bg-[#ffffff]">
                <img
                  className="w-10 h-[26.67px]"
                  alt="Payment method"
                  src="/group-2085662880.png"
                />
              </div>
              <div className="flex items-center justify-center p-[2.67px] bg-[#ffffff]">
                <div className="w-[40.0px] h-[26.67px] bg-[url(/clip-path-group.png)] bg-[100%_100%]" />
              </div>
              <div className="flex items-center justify-center p-[2.67px] bg-[#ffffff]">
                <img
                  className="w-10 h-[26.67px]"
                  alt="Payment method"
                  src="/group-2085662882.png"
                />
              </div>
              <div className="flex items-center justify-center p-[2.67px] bg-[#ffffff]">
                <img
                  className="w-10 h-[26.67px]"
                  alt="Payment method"
                  src="/group-2085662883.png"
                />
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-start gap-20">
            <div className="flex flex-wrap items-start gap-[60px]">
              {/* Company links */}
              <div className="flex flex-col w-[230px] items-start gap-5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <h3 className="font-h5-h5-semibold text-[#ffffff] whitespace-nowrap">
                      Company
                    </h3>
                    <p className="font-h6-h6-regular text-texthighlight whitespace-nowrap">
                      Learn who we are
                    </p>
                  </div>
                  <Separator
                    className="bg-transparent h-px w-full"
                    style={{ backgroundImage: "url('/line-720.svg')" }}
                  />
                </div>
                <div className="flex flex-col items-start gap-5 w-full">
                  {companyLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-h6-h6-regular text-highlight-c1 whitespace-nowrap hover:text-texthighlight transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Offerings links */}
              <div className="flex flex-col w-[230px] items-start gap-5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <h3 className="font-h5-h5-semibold text-[#ffffff] whitespace-nowrap">
                      Offerings
                    </h3>
                    <p className="font-h6-h6-regular text-texthighlight whitespace-nowrap">
                      Explore our services
                    </p>
                  </div>
                  <Separator
                    className="bg-transparent h-px w-full"
                    style={{ backgroundImage: "url('/line-720.svg')" }}
                  />
                </div>
                <div className="flex flex-col items-start gap-5">
                  {offeringsLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-h6-h6-regular text-highlight-c1 whitespace-nowrap hover:text-texthighlight transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Support & Legal links */}
              <div className="flex flex-col w-[230px] items-start gap-5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5">
                    <h3 className="font-h5-h5-semibold text-[#ffffff] whitespace-nowrap">
                      Support &amp; Legal
                    </h3>
                    <p className="font-h6-h6-regular text-texthighlight whitespace-nowrap">
                      Help, policy &amp; protection
                    </p>
                  </div>
                  <Separator
                    className="bg-transparent h-px w-full"
                    style={{ backgroundImage: "url('/line-720.svg')" }}
                  />
                </div>
                <div className="flex flex-col items-start gap-5">
                  {supportLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-h6-h6-regular text-highlight-c1 whitespace-nowrap hover:text-texthighlight transition-colors"
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
        <div className="flex flex-wrap items-start gap-[60px] w-full">
          <div className="flex-1 flex flex-col gap-2.5">
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="font-h5-h5-semibold text-[#ffffff]">
                Our Offices
              </h3>
              <p className="font-h6-h6-regular text-highlight-c1">
                Global presence, local impact
              </p>
            </div>
          </div>

          {/* Singapore office */}
          <div className="flex flex-col w-[230px] items-start gap-2.5">
            <h4 className="w-full font-h5-h5-semibold text-texthighlight">
              {officeLocations[0].country}
            </h4>
            <p className="w-full font-h6-h6-regular text-highlight-c1">
              {officeLocations[0].company}
            </p>
            <p className="w-full font-body-medium-body-medium-regular text-tag-green">
              {officeLocations[0].address}
            </p>
          </div>

          {/* UK office */}
          <div className="flex flex-col w-[230px] items-start gap-2.5">
            <h4 className="w-full font-h5-h5-semibold text-texthighlight">
              {officeLocations[1].country}
            </h4>
            <p className="w-full font-h6-h6-regular text-highlight-c1">
              {officeLocations[1].company}
            </p>
            <p className="w-full font-body-medium-body-medium-regular text-tag-green">
              {officeLocations[1].address}
            </p>
          </div>

          {/* India office */}
          <div className="flex flex-col w-[230px] items-start gap-2.5">
            <h4 className="w-full font-h5-h5-semibold text-texthighlight">
              {officeLocations[2].country}
            </h4>
            <p className="w-full font-h6-h6-regular text-highlight-c1">
              {officeLocations[2].company}
            </p>
            {officeLocations[2].addresses.map((address, index) => (
              <p
                key={index}
                className="w-full font-body-medium-body-medium-regular text-tag-green"
              >
                {address}
              </p>
            ))}
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="flex flex-col items-start gap-6 w-full">
          <Separator className="w-full h-px bg-[#366f65] border border-solid border-[#9cacae]" />
          <div className="flex flex-wrap items-center justify-between w-full">
            <p className="font-body-large-body-large-regular text-highlight-c1 whitespace-nowrap">
              © 2024 RedGirraffe. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <div className="flex items-start gap-[15px]">
                {socialMediaLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="p-3 bg-[#0000000d] rounded-[100px] border border-solid border-[#9cacae] hover:bg-[#00000020]"
                  >
                    {social.name === "YouTube" || social.name === "Facebook" ? (
                      <div
                        className="w-6 h-6"
                        style={{
                          backgroundImage: `url(${social.icon})`,
                          backgroundSize: "100% 100%",
                        }}
                      />
                    ) : (
                      <img
                        className="w-6 h-6"
                        alt={social.name}
                        src={social.icon}
                      />
                    )}
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
