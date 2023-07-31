const axios = require("axios");

const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: process.env.NEXT_PUBLIC_OPENWEATHER,
    units: "metric",
    lang: "es",
  },
});

const fetchWeather = async (lat, lon) => {
  console.log(weatherAPI, "weatherapi called");
  try {
    const { data } = await weatherAPI.get(`/data/2.5/onecall?lat=${lat}&lon=${lon}`);
    console.log(data, "data load");
    return data;
  } catch (error) {
    console.log(error, "error found");
  }
};

const fetchGeo = async (lat, lon) => {
  try {
    const { data } = await weatherAPI.get(`/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1`);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  weatherAPI,
  fetchWeather,
  fetchGeo,
};
