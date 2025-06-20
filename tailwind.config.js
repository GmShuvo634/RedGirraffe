module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    // Mobile-first responsive breakpoints
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // Responsive font sizes for better mobile readability
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        // Mobile-optimized heading sizes
        'h1-mobile': ['2rem', { lineHeight: '2.25rem' }],
        'h2-mobile': ['1.75rem', { lineHeight: '2rem' }],
        'h3-mobile': ['1.5rem', { lineHeight: '1.75rem' }],
        'h4-mobile': ['1.25rem', { lineHeight: '1.5rem' }],
        'h5-mobile': ['1.125rem', { lineHeight: '1.375rem' }],
        'h6-mobile': ['1rem', { lineHeight: '1.25rem' }],
      },
      // Responsive spacing for better mobile layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Mobile-specific spacing
        'mobile-xs': '0.5rem',
        'mobile-sm': '0.75rem',
        'mobile-md': '1rem',
        'mobile-lg': '1.5rem',
        'mobile-xl': '2rem',
      },
      colors: {
        "abu-bg": "var(--abu-bg)",
        "abu-stroke": "var(--abu-stroke)",
        "app-primary": "var(--app-primary)",
        "app-secondary": "var(--app-secondary)",
        black: "var(--black)",
        "dark-green": "var(--dark-green)",
        "highlight-c1": "var(--highlight-c1)",
        "logo-color": "var(--logo-color)",
        "neutral-100": "var(--neutral-100)",
        "neutral-50": "var(--neutral-50)",
        neutralwhite: "var(--neutralwhite)",
        "tag-green": "var(--tag-green)",
        text: "var(--text)",
        textblack: "var(--textblack)",
        texthighlight: "var(--texthighlight)",
        textwhite: "var(--textwhite)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-large-body-large-regular":
          "var(--body-large-body-large-regular-font-family)",
        "body-large-body-large-semibold":
          "var(--body-large-body-large-semibold-font-family)",
        "body-medium-body-medium-bold":
          "var(--body-medium-body-medium-bold-font-family)",
        "body-medium-body-medium-regular":
          "var(--body-medium-body-medium-regular-font-family)",
        "h1-h1-semibold": "var(--h1-h1-semibold-font-family)",
        "h2-h2-bold": "var(--h2-h2-bold-font-family)",
        "h3-h3-semibold": "var(--h3-h3-semibold-font-family)",
        "h4-h4-semibold": "var(--h4-h4-semibold-font-family)",
        "h5-h5-bold": "var(--h5-h5-bold-font-family)",
        "h5-h5-semibold": "var(--h5-h5-semibold-font-family)",
        "h6-h6-regular": "var(--h6-h6-regular-font-family)",
        "h6-h6-semibold": "var(--h6-h6-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px"
      }
    },
  },
  plugins: [
    // Add custom utilities for mobile responsiveness
    function({ addUtilities }) {
      const newUtilities = {
        // Touch-friendly button sizes
        '.btn-touch': {
          minHeight: '44px',
          minWidth: '44px',
          padding: '12px 16px',
        },
        '.btn-touch-lg': {
          minHeight: '48px',
          minWidth: '48px',
          padding: '16px 24px',
        },
        // Mobile-optimized text sizes
        '.text-mobile-h1': {
          fontSize: '2rem',
          lineHeight: '2.25rem',
          fontWeight: '700',
        },
        '.text-mobile-h2': {
          fontSize: '1.75rem',
          lineHeight: '2rem',
          fontWeight: '600',
        },
        '.text-mobile-h3': {
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
          fontWeight: '600',
        },
        '.text-mobile-body': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
        '.text-mobile-small': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
        // Responsive image utilities
        '.img-responsive': {
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
        },
        '.img-aspect-square': {
          aspectRatio: '1 / 1',
          objectFit: 'cover',
        },
        '.img-aspect-video': {
          aspectRatio: '16 / 9',
          objectFit: 'cover',
        },
        // Mobile-friendly form inputs
        '.input-mobile': {
          minHeight: '44px',
          fontSize: '16px', // Prevents zoom on iOS
          padding: '12px 16px',
        },
        // Safe area padding for mobile devices
        '.safe-area-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  darkMode: ["class"],
};
