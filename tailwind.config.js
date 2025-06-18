module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
