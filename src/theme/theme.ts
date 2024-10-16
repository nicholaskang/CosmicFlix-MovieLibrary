import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e3f8ff",
    100: "#b3ecff",
    200: "#81defd",
    300: "#5ed0fa",
    400: "#40c3f7",
    500: "#2bb0ed",
    600: "#1992d4",
    700: "#127fbf",
    800: "#0b69a3",
    900: "#035388",
  },
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "lg",
      },
      sizes: {
        lg: {
          fontSize: "1.2rem",
          px: 6,
          py: 4,
        },
      },
      variants: {
        solid: {
          bg: "brand.500",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
  },
});

export default theme;
