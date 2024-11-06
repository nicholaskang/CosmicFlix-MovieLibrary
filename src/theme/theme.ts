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
    primary: "#EAEAEA",
    secondary: "#B0B0B0",
    electric500: "#3A86FF",
    electric600: "#3367CC",
    electric700: "#2851A3",
  },
  accent: {
    100: "#D7EAFF",
    200: "#ADCFFF",
    300: "#85BBFF",
    400: "#5AA2FF",
    500: "#3A86FF",
    600: "#3367CC",
    700: "#2851A3",
    purple500: "#9D4EDD",
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

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Roboto Mono', monospace`,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  components: {
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
      defaultProps: {
        variant: "solid",
      },
    },
    Heading: {
      baseStyle: {
        color: "text.electric500",
      },
    },
    Text: {
      baseStyle: {
        color: "text.primary",
      },
      variants: {
        subtitle: {
          color: "accent.purple500",
        },
      },
    },
    Box: {
      baseStyle: {
        bg: "background.900",
        color: "text.primary",
      },
    },
  },
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
