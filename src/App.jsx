// import React, { useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import SearchBar from './components/SearchBar';
// import CurrentWeather from './components/CurrentWeather';
// import Forecast from './components/Forecast';
// import TemperatureChart from './components/TemperatureChart';
// import { fetchWeatherData, fetchForecastData } from './services/weatherService';

// const useStyles = makeStyles({
//     container: {
//         padding: '20px',
//     },
// });

// const App = () => {
//     const [currentWeather, setCurrentWeather] = useState(null);
//     const [forecast, setForecast] = useState(null);
//     const classes = useStyles();

//     const handleCitySelect = async (city) => {
//         const weatherData = await fetchWeatherData(city);
//         const forecastData = await fetchForecastData(city);

//         if (weatherData) {
//             setCurrentWeather(weatherData);
//         } else {
//             console.error('Failed to fetch weather data.');
//         }

//         if (forecastData && forecastData.list) {
//             setForecast(forecastData.list);
//         } else {
//             console.error('Failed to fetch forecast data.');
//         }
//     };

//     return (
//         // <Container>
//      <Container className={classes.container}>
//             <Typography variant="h2" gutterBottom>
//                 Weather Dashboard
//             </Typography>
//             <SearchBar onCitySelect={handleCitySelect} />
//             <CurrentWeather weatherData={currentWeather} />
//             <Forecast forecastData={forecast} />
//             {forecast && <TemperatureChart forecastData={forecast} />}
//         </Container>
//     );
// };

// export default App;


import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import TemperatureChart from './components/TemperatureChart';
import { fetchWeatherData, fetchForecastData } from './services/weatherService';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding: 20px;
`;

const App = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleCitySelect = async (city) => {
        const weatherData = await fetchWeatherData(city);
        const forecastData = await fetchForecastData(city);

        if (weatherData) {
            setCurrentWeather(weatherData);
        } else {
            console.error('Failed to fetch weather data.');
        }

        if (forecastData && forecastData.list) {
            setForecast(forecastData.list);
        } else {
            console.error('Failed to fetch forecast data.');
        }
    };

    return (
        <StyledContainer>
            <Typography variant="h2" gutterBottom>
                Weather Dashboard
            </Typography>
            <SearchBar onCitySelect={handleCitySelect} />
            <CurrentWeather weatherData={currentWeather} />
            <Forecast forecastData={forecast} />
            {forecast && <TemperatureChart forecastData={forecast} />}
        </StyledContainer>
    );
};

export default App;
