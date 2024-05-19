import { Box } from "@mui/material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export const SearchHistoryActionButton = ({ icon, clickAction }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <Box
      onClick={clickAction}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: (theme) => theme.palette.background.searchHistory,
        marginLeft: 1,
        border: isDarkMode ? "2px solid rgba(255, 255, 255, 0.4)" : "none",
        boxShadow: isDarkMode ? "none" : "0px 4px 12px 0px rgba(0, 0, 0, 0.1)",
        height: "34px",
        width: "34px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      {icon}
    </Box>
  );
};
