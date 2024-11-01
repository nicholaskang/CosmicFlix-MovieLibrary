// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Theme configuration to set dark mode as default
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Colors designed for a dark, cinematic theme with blue accent
const colors = {
  background: {
    900: "#000000", // Pure black background
    800: "#121212", // Near-black secondary background
    700: "#1a1a1a", // Dark gray for card backgrounds, sections
  },
  text: {
    primary: "#ffffff", // White for primary text
    secondary: "#b0b0b0", // Light gray for secondary text
  },
  accent: {
    500: "#4a90e2", // Medium blue for primary accent (not too light or dark)
    600: "#357ABD", // Slightly darker blue for hover effects
    700: "#2a5b8c", // Darker blue for active states
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
        bg: "accent.500",
        color: "white",
        _hover: {
          bg: "accent.600",
        },
        _active: {
          bg: "accent.700",
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      color: "accent.500", // Accent color for headings
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
