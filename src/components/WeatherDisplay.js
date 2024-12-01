import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import styles from './WeatherDisplay.module.css';

const WeatherDisplay = () => {
    const { weatherData, loading, error } = useContext(WeatherContext);

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>{error}</div>;
    if (!weatherData) return null;

    return (
        <div className={styles.container}>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
    );
};

export default WeatherDisplay;
