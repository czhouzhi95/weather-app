import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export const SearchBar = ({ city, country, handleGetCountry, handleGetCity }) => {
  // Context to get current darkMode status
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          borderRadius: "20px",
          paddingLeft: 2,
          background: (theme) => theme.palette.background.searchBar,
        }}
      >
        <Typography variant="searchBar">City</Typography>
        <input
          type="text"
          value={city}
          onChange={handleGetCity}
          style={{
            background: "transparent",
            marginBottom: 2,
            width: "100%",
            border: "none",
            borderBottom: "none",
            outline: "none",
            color: isDarkMode ? "white" : "black",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          borderRadius: "20px",
          px: 2,
          ml:2,
          background: (theme) => theme.palette.background.searchBar,
        }}
      >
        <Typography variant="searchBar">Country</Typography>
        <input
          type="text"
          value={country}
          onChange={handleGetCountry}
          style={{
            background: "transparent",
            marginBottom: 2,
            width: "100%",
            border: "none",
            borderBottom: "none",
            outline: "none",
            color: isDarkMode ? "white" : "black",
          }}
        />
      </Box>
    </>
  );
};
