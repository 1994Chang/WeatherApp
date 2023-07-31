const axios = require("axios");

const mapboxAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    language: "es",
    limit: 5,
  },
});

const fetchPlaces = async (place) => {
  try {
    const response = await mapboxAPI.get(`/${place}.json`);

    return response.data.features.map((lugar) => ({
      id: lugar.id,
      fullname: lugar.place_name,
      lon: lugar.center[0],
      lat: lugar.center[1],
    }));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  mapboxAPI,
  fetchPlaces,
};
