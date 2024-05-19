import { SearchOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import {
  DeleteIconDark,
  DeleteIconLight,
  SearchIconDark,
  SearchIconLight,
} from "../../assets/icons";
import { SearchHistoryActionButton } from "./SearchHistoryActionButton";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "./SearchHistory.css";

export const SearchHistory = ({
  searchHistory,
  getWeather,
  handleDeleteSearchHistory,
}) => {

  // To check current dark mode status
  const { isDarkMode } = useDarkMode();

  return (
    <Box
      sx={{
        marginTop: 2,
        padding: 2,
        borderRadius: "24px",
        background: (theme) => theme.palette.background.searchBar,
      }}
    >
      <Typography variant="details">Search History</Typography>
      {searchHistory.length > 0 ? (
        <Box sx={{ overflow: "auto", maxHeight: "300px" }}>
          {searchHistory.map((row) => {
            const { currentDateAndTime, id } = row;
            const { name } = row.data;
            const { country } = row.data.sys;

            return (
              <Box
                key={id}
                className="search-history-container"
                sx={{
                  background: (theme) => theme.palette.background.searchHistory,
                }}
              >
                <Box className="history-details-container">
                  <Typography variant="details">
                    {name}, {country}
                  </Typography>
                  <Typography variant="searchHistoryDateAndTIme">
                    {currentDateAndTime}
                  </Typography>
                </Box>

                <Box className="action-button-container">
                  <SearchHistoryActionButton
                    icon={isDarkMode ? <SearchIconDark /> : <SearchIconLight />}
                    clickAction={() => getWeather(name)}
                  />
                  <SearchHistoryActionButton
                    icon={isDarkMode ? <DeleteIconDark /> : <DeleteIconLight />}
                    clickAction={() => handleDeleteSearchHistory(id)}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: 2,
            background: (theme) => theme.palette.background.searchHistory,
            padding: 2,
            borderRadius: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="details">No History</Typography>
        </Box>
      )}
    </Box>
  );
};
