import * as React from "react"
import { cn } from "../../lib/utils"

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto'
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  priority?: boolean
  sizes?: string
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  auto: '',
}

const objectFitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
}

export const ResponsiveImage = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  ({ 
    className, 
    aspectRatio = 'auto', 
    objectFit = 'cover', 
    priority = false,
    sizes,
    alt,
    ...props 
  }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(
          // Base responsive styles
          "w-full h-auto max-w-full",
          // Aspect ratio
          aspectRatioClasses[aspectRatio],
          // Object fit
          objectFitClasses[objectFit],
          // Performance optimizations
          "transition-opacity duration-300",
          className
        )}
        alt={alt || ""}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        {...props}
      />
    )
  }
)

ResponsiveImage.displayName = "ResponsiveImage"

// Convenience components for common use cases
export const SquareImage = React.forwardRef<HTMLImageElement, Omit<ResponsiveImageProps, 'aspectRatio'>>(
  (props, ref) => <ResponsiveImage ref={ref} aspectRatio="square" {...props} />
)
SquareImage.displayName = "SquareImage"

export const VideoImage = React.forwardRef<HTMLImageElement, Omit<ResponsiveImageProps, 'aspectRatio'>>(
  (props, ref) => <ResponsiveImage ref={ref} aspectRatio="video" {...props} />
)
VideoImage.displayName = "VideoImage"

export const PortraitImage = React.forwardRef<HTMLImageElement, Omit<ResponsiveImageProps, 'aspectRatio'>>(
  (props, ref) => <ResponsiveImage ref={ref} aspectRatio="portrait" {...props} />
)
PortraitImage.displayName = "PortraitImage"

export const LandscapeImage = React.forwardRef<HTMLImageElement, Omit<ResponsiveImageProps, 'aspectRatio'>>(
  (props, ref) => <ResponsiveImage ref={ref} aspectRatio="landscape" {...props} />
)
LandscapeImage.displayName = "LandscapeImage"
