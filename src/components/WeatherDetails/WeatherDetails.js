import React from "react";
import { Box, Typography } from "@mui/material";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "./WeatherDetails.css";

export const WeatherDetails = ({ details }) => {
  // Deconstructing the current weather details
  const { name, currentDateAndTime } = details;
  const { humidity, temp, temp_max, temp_min } = details.main;
  const { country } = details.sys;
  const { main } = details.weather[0];

  return (
    <Box className="today-weather-container">
      <Box className='weather-main-details'>
        <Typography variant="details">Today's Weather</Typography>
        <Typography variant="degree">{Math.round(temp)}°</Typography>
        <Typography variant="details">
          H:{Math.round(temp_max)}° L:{Math.round(temp_min)}°
        </Typography>
        <Typography variant="remainingDetails" fontWeight={800}>
          {name}, {country}
        </Typography>
      </Box>
      <Box className="weather-additional-details">
        <Typography variant="remainingDetails">{currentDateAndTime}</Typography>
        <Typography variant="remainingDetails">
          Humidity: {humidity}%
        </Typography>
        <Typography variant="remainingDetails">{main}</Typography>
      </Box>
    </Box>
  );
};
