const API_KEY = '1e411b305111cc2b8b4be99fe8917a0e';

export const fetchWeatherSuggestions = async (query) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&appid=${API_KEY}`);
        const data = await response.json();

        console.log('API Response for suggestions:', data);

        if (!data.list) {
            console.error('Invalid response format:', data);
            return [];
        }

        return data.list.map(city => city.name);
    } catch (error) {
        console.error('Error fetching weather suggestions:', error);
        return [];
    }
};

export const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();

        console.log('API Response for weather data:', data);

        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

export const fetchForecastData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=metric&appid=${API_KEY}`);
        const data = await response.json();

        console.log('API Response for forecast data:', data);

        return data;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        return null;
    }
};
