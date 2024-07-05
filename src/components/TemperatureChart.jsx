import React from 'react';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ forecastData }) => {
    const data = {
        labels: forecastData.map(day => new Date(day.dt * 1000).toLocaleDateString()),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: forecastData.map(day => day.temp.day),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    return <Line data={data} />;
};

export default TemperatureChart;
