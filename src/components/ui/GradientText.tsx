import React from "react";
import { cn } from "../../lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  useCSS?: boolean; // Use CSS class instead of inline styles
}

const defaultGradient = 'radial-gradient(ellipse 45% 280% at 39% 50%, #010101 0%, #799782 100%)';

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  gradient = defaultGradient,
  as: Component = "span",
  style = {},
  useCSS = false,
  ...props
}) => {
  // Use CSS class for RedGirraffe gradient or custom inline styles
  const isRedGirraffeGradient = gradient === defaultGradient;
  const shouldUseCSS = useCSS || isRedGirraffeGradient;

  const gradientStyle: React.CSSProperties = shouldUseCSS ? style : {
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    // Fallback for browsers that don't support background-clip: text
    color: 'transparent',
    // Ensure the gradient covers the text properly
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    // Better text rendering
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    ...style,
  };

  const cssClasses = cn(
    "gradient-text",
    shouldUseCSS && isRedGirraffeGradient && "text-gradient-redgirraffe",
    className
  );

  return (
    <Component
      className={cssClasses}
      style={gradientStyle}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GradientText;
