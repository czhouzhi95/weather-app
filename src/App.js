import React from "react";
import { ThemeProvider, Box } from "@mui/material";

import theme from "./theme/theme";
import "./App.css";
import Weather from "./components/Weather";
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeContext";
import backgroundImageDark from "./assets/bg-dark.png";
import backgroundImageLight from "./assets/bg-light.png";
import { ThemeToggleButton } from "./theme/ThemeToggleButton";

const AppContent = () => {
  // Context to get current darkMode status and the toggle
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <Box className="app-container" style={{backgroundImage: `url(${isDarkMode ? backgroundImageDark : backgroundImageLight})`}}>
        <Box className="theme-button-container">
          <ThemeToggleButton toggleAction={toggleDarkMode} isDarkMode={isDarkMode} />
        </Box>
        <Weather />
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
