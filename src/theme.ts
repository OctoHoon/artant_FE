import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    body: "Spoqa Han Sans Neo",
    // You can specify other font styles as needed
  },
  components: {
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        primary: {
          secondary: {
            dialog: {
              maxW: "480px",
            },
          },
        },
      },
    },
  },
  config,
});

export default theme;
