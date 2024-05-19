import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchButton = ({ getWeather,city,country }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft:2,
        width: "60px",
        height: "100%",
        borderRadius: "20px",
        cursor:"pointer",
        background: (theme) => theme.palette.background.buttonBox,
      }}
    >
      <SearchIcon
        onClick={()=>getWeather(city,country)}
        sx={{ mcursor: "pointer", color: "white", fontSize: "30px" }}
      />
    </Box>
  );
};
