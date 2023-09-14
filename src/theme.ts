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
  textStyles: {
    sp1: {
      fontSize: "90px",
      fontWeight: 700,
    },
    sp2: {
      fontSize: "72px",
      fontWeight: 700,
    },
    sp3: {
      fontSize: "44px",
      fontWeight: 700,
    },
    sp4: {
      fontSize: "28px",
      fontWeight: 700,
    },
    h1: {
      fontSize: "56px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "36px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "22px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "18px",
      fontWeight: 700,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 700,
    },
    h7: {
      fontSize: "14px",
      fontWeight: 700,
    },
    bodyLarge: {
      fontSize: "22px",
      fontWeight: 400,
      letterSpaceing: "-0.066px",
    },
    bodyDefault: {
      fontSize: "18px",
      fontWeight: 400,
      letterSpaceing: "-0.054px",
    },
    bodySmall: {
      fontSize: "16px",
      fontWeight: 400,
      letterSpaceing: "-0.048px",
    },
    bodySmaller: {
      fontSize: "14px",
      fontWeight: 400,
      letterSpaceing: "-0.042px",
    },
    bodyMini: {
      fontSize: "14px",
      fontWeight: 400,
      letterSpaceing: "-0.042px",
    },
    bodyXs14M: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "-0.042px",
    },
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
