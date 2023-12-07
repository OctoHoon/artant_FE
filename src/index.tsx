import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./fonts.css";

const client = new QueryClient();

const muiTheme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <QueryClientProvider client={client}>
    <MuiThemeProvider theme={muiTheme}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router}></RouterProvider>
        {/* Your main application component */}
      </ChakraProvider>
    </MuiThemeProvider>
  </QueryClientProvider>
  //</React.StrictMode>
);
