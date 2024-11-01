// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Theme configuration to set dark mode as default
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Define colors, using Vibrant Teal as the accent color
const colors = {
  background: {
    900: "#000000", // Pure black background
    800: "#121212", // Near-black secondary background
    700: "#1a1a1a", // Dark gray for card backgrounds, sections
  },
  text: {
    primary: "#ffffff", // White for primary text
    secondary: "#b0b0b0", // Light gray for secondary text
    teal500: "#00e5ff", // Bright teal for headings and larger text
    teal600: "#00c0d4", // Slightly darker teal for hover effects and medium text
    teal700: "#009aa8", // Darker teal for active states or small text
    teal800: "#007580", // Dark teal for very small text or subtitles
  },
  accent: {
    500: "#00e5ff", // Vibrant teal for primary accents
    600: "#00c0d4", // Slightly darker teal for hover effects
    700: "#009aa8", // Darker teal for active states
    800: "#007580", // Deep teal for subtle accents or disabled states
  },
  gray: {
    50: "#f7fafc",
    100: "#edf2f7",
    200: "#e2e8f0",
    300: "#cbd5e0",
    400: "#a0aec0",
    500: "#718096",
    600: "#4a5568",
    700: "#2d3748",
    800: "#1a202c",
    900: "#171923",
  },
};

// Define custom styles for components, particularly Button and Heading for accents
const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
      borderRadius: "lg",
    },
    variants: {
      solid: {
        bg: "accent.500", // Use the vibrant blue background color
        color: "black", // Explicitly set text color to black
        _hover: {
          bg: "accent.600", // Slightly darker blue on hover
          color: "black", // Keep text color black on hover
        },
        _active: {
          bg: "accent.700", // Even darker blue for active state
          color: "black", // Keep text color black on active state
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      color: "text.teal500", // Bright teal for main headings
    },
  },
  Text: {
    baseStyle: {
      color: "text.primary", // Default text color is white
    },
    variants: {
      subtitle: {
        color: "text.teal700", // Darker teal for subtitles or secondary text
      },
    },
  },
  Box: {
    baseStyle: {
      bg: "background.900",
      color: "text.primary",
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  components,
  styles: {
    global: {
      "html, body": {
        bg: "background.900",
        color: "text.primary",
      },
    },
  },
});

export default theme;
