import * as React from "react"
import { cn } from "../../lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption'
  as?: React.ElementType
  responsive?: boolean
}

const typographyVariants = {
  h1: "text-h1-mobile sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight",
  h2: "text-h2-mobile sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight",
  h3: "text-h3-mobile sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight tracking-tight",
  h4: "text-h4-mobile sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-tight tracking-tight",
  h5: "text-h5-mobile sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-tight tracking-tight",
  h6: "text-h6-mobile sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-tight tracking-tight",
  body: "text-sm sm:text-base lg:text-lg leading-relaxed",
  small: "text-xs sm:text-sm lg:text-base leading-normal",
  caption: "text-xs sm:text-xs lg:text-sm leading-tight text-muted-foreground",
}

const defaultElements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'small',
  caption: 'span',
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', as, responsive = true, ...props }, ref) => {
    const Component = as || defaultElements[variant] || 'p'
    
    return (
      <Component
        ref={ref}
        className={cn(
          responsive ? typographyVariants[variant] : '',
          className
        )}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

// Convenience components for common use cases
export const Heading1 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="h1" {...props} />
)
Heading1.displayName = "Heading1"

export const Heading2 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="h2" {...props} />
)
Heading2.displayName = "Heading2"

export const Heading3 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="h3" {...props} />
)
Heading3.displayName = "Heading3"

export const Heading4 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="h4" {...props} />
)
Heading4.displayName = "Heading4"

export const Heading5 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="h5" {...props} />
)
Heading5.displayName = "Heading5"

export const Heading6 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="h6" {...props} />
)
Heading6.displayName = "Heading6"

export const BodyText = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="body" {...props} />
)
BodyText.displayName = "BodyText"

export const SmallText = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="small" {...props} />
)
SmallText.displayName = "SmallText"

export const Caption = React.forwardRef<HTMLSpanElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography ref={ref} variant="caption" {...props} />
)
Caption.displayName = "Caption"
