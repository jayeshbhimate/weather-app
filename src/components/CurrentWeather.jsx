import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeather = ({ weatherData }) => {
    if (!weatherData) return null;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{weatherData.name}</Typography>
                <Typography variant="h6">{weatherData.weather[0].description}</Typography>
                <Typography>Temperature: {weatherData.main.temp} °C</Typography>
                <Typography>Humidity: {weatherData.main.humidity}%</Typography>
                <Typography>Wind Speed: {weatherData.wind.speed} m/s</Typography>
            </CardContent>
        </Card>
    );
};

export default CurrentWeather;
