import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './router';
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./styles/index";
import { AppThemeProvider } from "./context";

export const App = () => {
  return (
    <AppThemeProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AppThemeProvider>
  );
}