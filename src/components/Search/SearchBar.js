import { Box, IconButton, TextField, Typography } from "@mui/material";

export const SearchBar = ({ city, handleGetCity }) => {
  return (
    <Box
      sx={{
        width: "100%",
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
          borderBottom: "none", // Optional: Add a bottom border for visual separation
          outline: "none", // Remove the outline on focus
        }}
      />
    </Box>
  );
};
