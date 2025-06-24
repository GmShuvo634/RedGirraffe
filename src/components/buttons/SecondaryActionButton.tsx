import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { durations, easings } from "../../utils/animations";

interface SecondaryActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
  size?: "mobile" | "mobile-lg" | "default" | "lg" | "xl";
  fullWidth?: boolean;
  backgroundColor?: string;
}

export const SecondaryActionButton: React.FC<SecondaryActionButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  icon,
  showIcon = true,
  size = "mobile-lg",
  fullWidth = false,
  backgroundColor = "#4a8b7b",
}) => {
  const defaultIcon = <ArrowRightIcon className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />;
  const buttonIcon = icon || defaultIcon;

  const baseClasses = `
    rounded-[48px] 
    flex 
    items-center 
    justify-center 
    gap-3
    transition-all
    duration-300
    shadow-lg
    hover:shadow-xl
    text-white
  `;

  const widthClasses = fullWidth 
    ? "w-full" 
    : "w-full lg:w-[200px] xl:w-[250px]";

  // Generate hover color (slightly darker)
  const hoverColor = backgroundColor === "#4a8b7b" ? "#3d7a6a" : `${backgroundColor}dd`;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17,
        duration: durations.fast,
        ease: easings.smooth
      }}
      className={fullWidth ? "w-full" : ""}
    >
      <Button
        size={size}
        className={`${baseClasses} ${widthClasses} ${className}`}
        style={{ 
          backgroundColor: backgroundColor,
          '--hover-bg': hoverColor,
        } as React.CSSProperties & { '--hover-bg': string }}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.backgroundColor = hoverColor;
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.backgroundColor = backgroundColor;
        }}
      >
        {showIcon && (
          <motion.div
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: durations.fast,
              ease: easings.smooth,
              delay: 0.1,
            }}
          >
            {buttonIcon}
          </motion.div>
        )}
        <span className="font-h6-h6-semibold text-white tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
          {children}
        </span>
      </Button>
    </motion.div>
  );
};

export default SecondaryActionButton;
