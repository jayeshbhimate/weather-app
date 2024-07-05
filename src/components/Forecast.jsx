import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Forecast = ({ forecastData }) => {
    if (!forecastData) return null;

    return (
        <Grid container spacing={2}>
            {forecastData.map((day, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{new Date(day.dt * 1000).toLocaleDateString()}</Typography>
                            <Typography>Temp: {day.temp.day} °C</Typography>
                            <Typography>{day.weather[0].description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Forecast;
