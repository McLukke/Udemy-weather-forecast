import axios from 'axios';

const API_KEY = 'dd65ca253921ece35ed6eebcf66b5efd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
};
