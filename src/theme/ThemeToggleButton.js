import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const ThemeToggleButton = ({ toggleAction, isDarkMode }) => {
  return (
    <Tooltip title={`Click for ${!isDarkMode ? "Dark" : "Light"} Mode`}>
      <IconButton sx={{ m: 2 }} onClick={toggleAction} color="inherit">
        {!isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};
