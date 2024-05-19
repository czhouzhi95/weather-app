import React from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";

import theme from "./theme/theme";
import "./App.css";
import Weather from "./components/Weather";
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeContext";
import backgroundImageDark from "./assets/bg-dark.png";
import backgroundImageLight from "./assets/bg-light.png";
import { ThemeToggleButton } from "./theme/ThemeToggleButton";

const AppContent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <CssBaseline />
      <Box
        style={{
          backgroundImage: `url(${
            isDarkMode ? backgroundImageDark : backgroundImageLight
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minwidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 2,
          }}
        >
          
          <ThemeToggleButton toggleAction={toggleDarkMode} isDarkMode={isDarkMode}/>
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
