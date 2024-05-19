import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org",
});

let apiKey = "4d3a0bed1100d65af95cb535f5f6f922";

export const getWeatherData = ({ city }) => {
  return instance
    .get(`data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      // Handle the successful response here
      return response;
    })
    .catch((error) => {
      // Handle errors here
      return error;
    });
};
