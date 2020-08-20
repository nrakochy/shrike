import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../src/theme";

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export { withThemeProvider };
