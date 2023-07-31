import axios from "axios";

export const unsplashAPI = axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    params: {
        per_page: "1",
        client_id: process.env.NEXT_PUBLIC_UNSPLASH,
    },
});

export const fetchImagePlace = async (place) => {
    try {
        const response = await unsplashAPI.get('', { params: { query: place } });
        const data = response.data;

        return {
            urls: data.results[0].urls,
        };
    } catch (error) {
        throw new Error('something was wrong');
    }
};
