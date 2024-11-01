import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  background: {
    900: "#000000",
    800: "#121212",
    700: "#1a1a1a",
  },
  text: {
    primary: "#ffffff",
    secondary: "#b0b0b0",
    teal500: "#00e5ff",
    teal600: "#00c0d4",
    teal700: "#009aa8",
    teal800: "#007580",
  },
  accent: {
    500: "#00e5ff",
    600: "#00c0d4",
    700: "#009aa8",
    800: "#007580",
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

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
      borderRadius: "lg",
    },
    variants: {
      solid: {
        bg: "accent.500",
        color: "black",
        _hover: {
          bg: "accent.600",
          color: "black",
        },
        _active: {
          bg: "accent.700",
          color: "black",
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      color: "text.teal500",
    },
  },
  Text: {
    baseStyle: {
      color: "text.primary",
    },
    variants: {
      subtitle: {
        color: "text.teal700",
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
