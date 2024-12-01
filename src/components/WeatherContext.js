import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city, apiKey) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
