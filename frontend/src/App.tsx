import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './router';
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./styles/index";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  );
}