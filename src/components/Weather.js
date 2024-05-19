import React, { useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import "./Weather.css";
import { SearchBar } from "./Search/SearchBar";
import { SearchButton } from "./Search/SearchButton";
import { WeatherDetails } from "./WeatherDetails/WeatherDetails";
import moment from "moment";
import { SearchHistory } from "./SearchHistory/SearchHistory";
import { useDarkMode } from "../contexts/DarkModeContext";
import { getWeatherData } from "../services/weatherService";
import clouds from "../assets/cloud.png";
import clear from "../assets/sun.png";

const Weather = () => {
   // Context to get current darkMode status
  const { isDarkMode } = useDarkMode();
  // State for storing city name input by user
  const [city, setCity] = useState("");
  // State for storing weather data fetched from API
  const [weather, setWeather] = useState(null);
  // State for storing any error messages
  const [error, setError] = useState("");
  // State for storing search history
  const [searchHistory, setSearchHistory] = useState([]);

  // Function to check if the weather is cloudy or others status
  const checkIfCloudy = () =>
    weather?.weather[0].main.toLowerCase() === "clouds";

  // Function to generate a unique ID for search history rows
  const generateUniqueId = (array) => {
    if (array.length === 0) {
      return 1; // If the array is empty, the next available ID will be 1
    }

    const maxId = Math.max(...array.map((item) => item.id));
    return maxId + 1;
  };

  // Function to fetch weather data for the specified city
  const getWeather = (city) => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    getWeatherData({ city })
      .then((response) => {
        if (response?.status === 200) {
          const currentDate = moment();
          const currentDateAndTime = currentDate.format("DD-MM-YYYY hh:mma");
          const id = generateUniqueId(searchHistory);
          const additionalDetails = { currentDateAndTime, id };
          setWeather({ ...response.data, ...additionalDetails });
          setError("");
          setSearchHistory((prevHistory) => {
            const updatedHistory = [
              ...prevHistory,
              { city, data: response.data, ...additionalDetails },
            ];
            return updatedHistory;
          });
        } else {
          setError("City not found or other error.");
          setWeather(null);
        }
      })
      .catch((error) => {
        setError("City not found or other error.");
        setWeather(null);
      });
  };

  // Function to handle city input change
  const handleGetCity = (e) => {
    const { value } = e.target;
    setCity(value);
  };

  // Function to delete a specific search history item by ID
  const handleDeleteSearchHistory = (idToDelete) => {
    console.log(idToDelete);
    setSearchHistory((currentHistory) =>
      currentHistory.filter((item) => item.id !== idToDelete)
    );
  };

  return (
    <Box className="weather-container">
      <Box
        display="flex"
        alignItems="center"
        sx={{ width: "100%", height: "60px" }}
      >
        <SearchBar city={city} handleGetCity={handleGetCity} />
        <SearchButton city={city} getWeather={getWeather} />
      </Box>
      {error && (
        <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}
      <Paper
        className="search-result-container"
        sx={{
          background: isDarkMode
            ? "rgba(26, 26, 26, 0.5)"
            : "rgba(255, 255, 255, 0.1)",
          border: !isDarkMode && "1px solid rgba(255, 255, 255, 0.5)",
          borderRadius: "40px",
        }}
      >
        <Box sx={{ padding: 4 }}>
          {weather && (
            <Box
              className="weather-image-container"
              sx={{
                backgroundImage: `url(${checkIfCloudy() ? clouds : clear})`,
              }}
            />
          )}
          {weather && <WeatherDetails details={weather} />}
          <SearchHistory
            searchHistory={searchHistory}
            getWeather={getWeather}
            handleDeleteSearchHistory={handleDeleteSearchHistory}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Weather;
