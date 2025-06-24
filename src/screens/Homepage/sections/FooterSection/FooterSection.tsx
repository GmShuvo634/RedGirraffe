import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { durations, easings } from "../../../../utils/animations";

// Data for important links
const importantLinks = [
  { label: "The Journey", href: "https://redgirraffe.com/in/app/thejourney" },
  {
    label: "Board of Advisors",
    href: "https://redgirraffe.com/in/app/boardofadvisors",
  },
  {
    label: "Founding Team",
    href: "https://redgirraffe.com/in/app/foundingteam",
  },
  {
    label: "INDIA - S A & I Team",
    href: "https://redgirraffe.com/in/app/strategyadvisoryteam",
  },
  {
    label: "Media Relations",
    href: "https://redgirraffe.com/in/app/mediarelations",
  },
  { label: "Higher Purpose", href: "https://redgirraffe.com/in/app/purpose" },
  { label: "Our Values", href: "https://redgirraffe.com/in/app/values" },
  { label: "RentPay™", href: "https://redgirraffe.com/in/app/rentpay-details" },
  { label: "About Us", href: "https://redgirraffe.com/in/app/aboutus" },
  { label: "Reviews", href: "#" },
  { label: "FAQs", href: "https://redgirraffe.com/in/app/faqs" },
  { label: "Blog", href: "https://redgirraffe.com/blog/" },
  {
    label: "Press Releases",
    href: "https://redgirraffe.com/blog/media-corner/",
  },
];

// Data for policies & compliance
const policiesLinks = [
  {
    label: "Fixed Deposit",
    href: "https://redgirraffe.com/in/app/fixed-deposit",
  },
  { label: "Refer & Earn", href: "https://redgirraffe.com/in/app/referrals" },
  {
    label: "Privacy Policy",
    href: "https://redgirraffe.com/in/app/privacypolicy",
  },
  {
    label: "Refund/Cancellation Policy",
    href: "https://redgirraffe.com/in/app/refund",
  },
  {
    label: "Terms & Conditions",
    href: "https://redgirraffe.com/in/app/terms-and-conditions",
  },
  {
    label: "Anti corruption & Bribery Policy",
    href: "https://redgirraffe.com/in/app/anti-corruption-bribery",
  },
  {
    label: "Code of Business Conduct & Ethics",
    href: "https://redgirraffe.com/in/app/code-business-conduct-ethics",
  },
  {
    label: "Anti-Fraud Policy Investigation",
    href: "https://redgirraffe.com/in/app/anti-fraud-policy-investigation",
  },
  {
    label: "Anti-Money Laundering Policy",
    href: "https://redgirraffe.com/in/app/anti-money-laundering-policy",
  },
  {
    label: "Sanctions Compliance Statement",
    href: "https://redgirraffe.com/in/app/sanctions-compliance-statement",
  },
  {
    label: "Grievance Redressal Policy",
    href: "https://redgirraffe.com/in/app/grievance-redressal-policy",
  },
];

// Data for business services
const businessServices = [
  {
    label: "List Your Property",
    href: "https://redgirraffe.com/in/app/list-property",
  },
  {
    label: "Register as Agent",
    href: "https://redgirraffe.com/in/app/register-as-agent",
  },
  {
    label: "Corporate Rental ERP",
    href: "https://redgirraffe.com/in/app/rentpay-erp",
  },
  { label: "SME Loans", href: "https://redgirraffe.com/in/app/sme-loans" },
  {
    label: "Post Your Requirement",
    href: "https://redgirraffe.com/in/app/post-requirement",
  },
];

// Data for office locations
const officeLocations = [
  {
    country: "United Kingdom",
    company: "RedGirraffe Inc.",
    address: "Harben House, Harben Parade, Finchley Road, London, NW3 6LH.",
  },
  {
    country: "Singapore",
    company: "RedGirraffe Holdings",
    address: "3 Temasek Avenue, Centennial Tower, #17-01, Singapore 039190.",
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

// Data for social media links (can be updated with real hrefs)
const socialMediaLinks = [
  { name: "YouTube", icon: "/youtube.png", href: "#" },
  { name: "TikTok", icon: "/tiktok.png", href: "#" },
  { name: "LinkedIn", icon: "/linkedin.png", href: "#" },
  { name: "Instagram", icon: "/instagram.png", href: "#" },
  { name: "Facebook", icon: "/facebook.png", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full pt-16 lg:pt-20 pb-6 lg:pb-8 bg-[#1a3c34] flex flex-col">
      <div className="container-inner">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Important Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-white font-semibold text-lg mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.2,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Important Links
              </motion.h3>
              <motion.p
                className="text-[#b8860b] text-sm mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.3,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Quick access to essential pages
              </motion.p>
              <div className="space-y-3">
                {importantLinks.map(({ label, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#9cacae] hover:text-white transition-all duration-300 text-sm hover:translate-x-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 0.4 + index * 0.03,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Policies & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-white font-semibold text-lg mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.3,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Policies & Compliance
              </motion.h3>
              <motion.p
                className="text-[#b8860b] text-sm mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.4,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Key policies for security and compliance
              </motion.p>
              <div className="space-y-3">
                {policiesLinks.map(({ label, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#9cacae] hover:text-white transition-all duration-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 0.5 + index * 0.03,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Business Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-white font-semibold text-lg mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.4,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Business Services
              </motion.h3>
              <motion.p
                className="text-[#b8860b] text-sm mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.5,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Solutions for businesses & partners
              </motion.p>
              <div className="space-y-3">
                {businessServices.map(({ label, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#9cacae] hover:text-white transition-all duration-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 0.6 + index * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Our Offices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-white font-semibold text-lg mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.5,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Our Offices
              </motion.h3>
              <motion.p
                className="text-[#b8860b] text-sm mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Global presence, local impact
              </motion.p>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 0.7 + index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.h4
                      className="text-[#b8860b] font-medium text-sm"
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 0.75 + index * 0.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {office.country}
                    </motion.h4>
                    <motion.p
                      className="text-white text-sm font-medium"
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 0.8 + index * 0.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {office.company}
                    </motion.p>
                    {office.addresses ? (
                      office.addresses.map((address, addrIndex) => (
                        <motion.p
                          key={addrIndex}
                          className="text-[#9cacae] text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 0.85 + index * 0.1 + addrIndex * 0.05,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          {address}
                        </motion.p>
                      ))
                    ) : (
                      <motion.p
                        className="text-[#9cacae] text-sm leading-relaxed"
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: durations.fast,
                          ease: easings.smooth,
                          delay: 0.85 + index * 0.1,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {office.address}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stay Connected */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 0.5,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-white font-semibold text-lg mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Stay Connected
              </motion.h3>
              <motion.p
                className="text-[#b8860b] text-sm mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.7,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Never miss an update
              </motion.p>

              {/* Email Input */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.8,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-center bg-white rounded-full p-1 mb-3 hover:shadow-md transition-shadow duration-300">
                  <Input
                    className="flex-1 border-0 bg-transparent text-gray-600 placeholder:text-gray-400 text-sm px-4 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-[#b8860b] hover:bg-[#a0750a] rounded-full px-6 py-2 text-sm font-medium transition-all duration-300">
                      Subscribe
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Company Info */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.9,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: 1.0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* <motion.div
                    className="w-8 h-8 bg-[#00d959] rounded flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src="/logo.png"
                      alt="RedGirraffe"
                      className="w-6 h-6"
                    />
                  </motion.div> */}
                  <div className="text-white text-2xl sm:text-2xl lg:text-2xl font-bold">
                    RedGirraffe
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-6 mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: 1.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.img
                      src={`/falg_${index + 1}.png`}
                      key={index}
                      alt="flag"
                      className="w-8 h-6"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.bouncy,
                        delay: 1.2 + index * 0.05,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </motion.div>
                <motion.div
                  className="flex flex-wrap items-center gap-2 text-[#b8860b] text-sm mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: 1.3,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span>Payments</span>
                  <span>|</span>
                  <span>B2B SaaS</span>
                  <span>|</span>
                  <span>Real Estate</span>
                </motion.div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: 1.4,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-[#b8860b] text-sm mb-2">Write to us at:</p>
                  <motion.a
                    href="mailto:connect@redgirraffe.com"
                    className="text-white font-medium text-sm hover:text-[#00d959] transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    connect@redgirraffe.com
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.5,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {socialMediaLinks.map(({ name, icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.bouncy,
                      delay: 1.6 + index * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <img src={icon} alt={name} className="w-10 h-10" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="pt-6 border-t border-[#366f65]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.normal,
              ease: easings.smooth,
              delay: 1.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="text-center py-3 rounded"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: durations.fast,
                ease: easings.smooth,
                delay: 1.9,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-white text-sm font-medium">
                Copyright © 2025-2026 | RedGirraffe - All rights reserved
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
