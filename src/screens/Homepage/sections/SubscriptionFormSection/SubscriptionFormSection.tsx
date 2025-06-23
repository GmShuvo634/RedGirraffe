import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
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

export const SubscriptionFormSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "+44 330 113 1707",
      description: "The Best Way to get Faster Answer",
    },
    {
      icon: <MessageCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "+91 80 1019 1019",
      description: "WhatsApp Support Available",
    },
    {
      icon: <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "connect@redgirraffe.com",
      description: "We Are Always Ready to Help",
    },
  ];

  // Form fields data
  const formFields = [
    { id: "fullName", label: "Full Name", placeholder: "Enter Your Name" },
    {
      id: "companyName",
      label: "Company Name",
      placeholder: "Enter Your Company",
    },
    {
      id: "email",
      label: "Business Email Address",
      placeholder: "Enter Your Email",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Enter Your Phone",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] bg-white w-full">
      {/* Heading Section */}
      <motion.div
        className="flex flex-col items-start gap-4 sm:gap-5 max-w-4xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: durations.normal,
          ease: easings.smooth,
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AnimatedText
          as="h2"
          variant="fadeUp"
          className="w-full font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]"
          delay={0.2}
          threshold={0.3}
        >
          Ready to Transform Your Business Payments?
        </AnimatedText>

        <AnimatedText
          as="p"
          variant="fadeUp"
          className="w-full px-4 sm:px-6 lg:px-10 font-h6-h6-regular text-[#4a8b7b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]"
          delay={0.4}
          threshold={0.3}
        >
          Join thousands of enterprises, banks, and PSPs simplifying payments
          with RedGirraffe
        </AnimatedText>
      </motion.div>

      {/* Contact Information */}
      <div className="relative w-full max-w-6xl">
        {/* Desktop Separators - Positioned Absolutely */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute left-[34%] top-[10px] -translate-x-1/2 -translate-y-1/2 w-[1px] h-[80px] bg-[#4a8b7b]/30"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <motion.div
            className="absolute left-[60%] top-[10px] -translate-x-1/2 -translate-y-1/2 w-[1px] h-[80px] bg-[#4a8b7b]/30"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: 0.9,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        {/* Contact Cards Grid */}
        <StaggeredGrid
          className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-5 w-full"
          speed="fast"
          threshold={0.3}
          delay={0.4}
        >
          {contactInfo.map((info, index) => (
            <AnimatedCard
              key={index}
              hoverEffect="lift"
              index={index}
              threshold={0.3}
              className="flex-1"
            >
              <motion.div
                className="flex flex-col items-center gap-2.5 bg-white text-center sm:text-left p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 0.5 + index * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-center gap-2.5 w-full justify-center sm:justify-start">
                  <motion.div
                    className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[#4a8b7b]"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.bouncy,
                      delay: 0.6 + index * 0.1,
                    }}
                    whileHover={{
                      scale: 1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {info.icon}
                  </motion.div>
                  <motion.span
                    className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)] tracking-[var(--h5-h5-semibold-letter-spacing)] whitespace-nowrap"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 0.7 + index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {info.title}
                  </motion.span>
                </div>
                <motion.p
                  className="font-body-large-body-large-regular text-black text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: 0.8 + index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {info.description}
                </motion.p>
              </motion.div>
            </AnimatedCard>
          ))}
        </StaggeredGrid>
      </div>

      {/* Subscription Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: durations.fast,
          ease: easings.smooth,
          delay: 1.0,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-6xl"
      >
        <Card className="w-full bg-abu-bg border border-solid border-[#ebebeb] rounded-[20px] hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col items-start gap-8 sm:gap-10 lg:gap-[60px]">
            <motion.div
              className="flex flex-col items-start gap-4 sm:gap-5 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.fast,
                ease: easings.smooth,
                delay: 1.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* First row of form fields */}
              <StaggeredGrid
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full"
                speed="fast"
                threshold={0.3}
                delay={1.2}
              >
                {formFields.slice(0, 2).map((field, index) => (
                  <motion.div
                    key={field.id}
                    className="flex flex-col items-start gap-2.5 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 1.3 + index * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.label
                      htmlFor={field.id}
                      className="self-stretch font-body-medium-body-medium-regular text-black text-sm sm:text-base lg:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 1.35 + index * 0.05,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {field.label}
                    </motion.label>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 1.4 + index * 0.05,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="w-full"
                    >
                      <Input
                        id={field.id}
                        placeholder={field.placeholder}
                        className="input-responsive p-4 sm:p-5 lg:p-6 bg-white rounded-xl border border-solid border-[#ebebeb] font-body-large-body-large-regular text-text w-full focus:border-[#4a8b7b] focus:ring-2 focus:ring-[#4a8b7b]/20 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </StaggeredGrid>

              {/* Second row of form fields */}
              <StaggeredGrid
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full"
                speed="fast"
                threshold={0.3}
                delay={1.5}
              >
                {formFields.slice(2, 4).map((field, index) => (
                  <motion.div
                    key={field.id}
                    className="flex flex-col items-start gap-2.5 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.fast,
                      ease: easings.smooth,
                      delay: 1.6 + index * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.label
                      htmlFor={field.id}
                      className="self-stretch font-body-medium-body-medium-regular text-black text-sm sm:text-base lg:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 1.65 + index * 0.05,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {field.label}
                    </motion.label>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: durations.fast,
                        ease: easings.smooth,
                        delay: 1.7 + index * 0.05,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="w-full"
                    >
                      <Input
                        id={field.id}
                        placeholder={field.placeholder}
                        className="input-responsive p-4 sm:p-5 lg:p-6 bg-white rounded-xl border border-solid border-[#ebebeb] font-body-large-body-large-regular text-text w-full focus:border-[#4a8b7b] focus:ring-2 focus:ring-[#4a8b7b]/20 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </StaggeredGrid>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center lg:justify-start w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.fast,
                ease: easings.smooth,
                delay: 1.8,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatedButton
                variant="default"
                className="btn-mobile-lg flex items-center justify-center gap-3 bg-[#4a8b7b] rounded-[48px] w-full max-w-[330px] hover:bg-[#3d7a6a] transition-all duration-300 hover:shadow-lg"
              >
                <motion.div
                  initial={{ x: -5, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: 1.9,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.span
                  className="font-h6-h6-semibold text-white tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap"
                  initial={{ x: 5, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: 1.95,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Request a Demo
                </motion.span>
              </AnimatedButton>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};