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
    H1B: {
      fontSize: "56px",
      fontWeight: 700,
    },
    H2B: {
      fontSize: "30px",
      fontWeight: 700,
    },
    H3B: {
      fontSize: "24px",
      fontWeight: 700,
    },
    H4B: {
      fontSize: "22px",
      fontWeight: 700,
    },
    H5B: {
      fontSize: "20px",
      fontWeight: 700,
    },
    H6B: {
      fontSize: "18px",
      fontWeight: 700,
    },
    H7B: {
      fontSize: "16px",
      fontWeight: 700,
    },
    H8B: {
      fontSize: "15px",
      fontWeight: 700,
    },
    H9B: {
      fontSize: "14px",
      fontWeight: 700,
    },
    H1M: {
      fontSize: "56px",
      fontWeight: 500,
    },
    H2M: {
      fontSize: "30px",
      fontWeight: 500,
    },
    H3M: {
      fontSize: "24px",
      fontWeight: 500,
    },
    H4M: {
      fontSize: "22px",
      fontWeight: 500,
    },
    H5M: {
      fontSize: "20px",
      fontWeight: 500,
    },
    H6M: {
      fontSize: "18px",
      fontWeight: 500,
    },
    H7M: {
      fontSize: "16px",
      fontWeight: 500,
    },
    H8M: {
      fontSize: "15px",
      fontWeight: 500,
    },
    H9M: {
      fontSize: "14px",
      fontWeight: 500,
    },
    H1R: {
      fontSize: "56px",
      fontWeight: 400,
    },
    H2R: {
      fontSize: "30px",
      fontWeight: 400,
    },
    H3R: {
      fontSize: "24px",
      fontWeight: 400,
    },
    H4R: {
      fontSize: "22px",
      fontWeight: 400,
    },
    H5R: {
      fontSize: "20px",
      fontWeight: 400,
    },
    H6R: {
      fontSize: "18px",
      fontWeight: 400,
    },
    H7R: {
      fontSize: "16px",
      fontWeight: 400,
    },
    H8R: {
      fontSize: "15px",
      fontWeight: 400,
    },
    H9R: {
      fontSize: "14px",
      fontWeight: 400,
    },
    B22M: {
      fontSize: "22px",
      fontWeight: 500,
      letterSpacing: "-0.066px",
    },
    B22R: {
      fontSize: "22px",
      fontWeight: 400,
      letterSpacing: "-0.066px",
    },
    B18M: {
      fontSize: "18px",
      fontWeight: 500,
      letterSpacing: "-0.054px",
    },
    B18R: {
      fontSize: "18px",
      fontWeight: 400,
      letterSpacing: "-0.054px",
    },
    B16M: {
      fontSize: "16px",
      fontWeight: 500,
      letterSpacing: "-0.3px",
    },
    B16R: {
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "-0.048px",
    },
    B14M: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: "-0.042px",
    },
    B14R: {
      fontSize: "14px",
      fontWeight: 400,
      letterSpacing: "-0.042px",
    },
    B13B: {
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "-0.039px",
    },
    B13M: {
      fontSize: "13px",
      fontWeight: 500,
      letterSpacing: "-0.3px",
    },
    B13R: {
      fontSize: "13px",
      fontWeight: 400,
      letterSpacing: "-0.3px",
    },
    B12B: {
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "-0.036px",
    },
    B12M: {
      fontSize: "13px",
      fontWeight: 500,
      letterSpacing: "-0.036px",
    },
    B12R: {
      fontSize: "13px",
      fontWeight: 400,
      letterSpacing: "-0.036px",
    },

    HeadingsH7M: {
      fontSize: "16px",
      fontWeight: 500,
      letterSpaceing: "-0.3px",
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
