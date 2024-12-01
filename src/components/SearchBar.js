import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { WeatherContext } from './WeatherContext';

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
`;

const Button = styled.button`
    padding: 10px 15px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

const SearchBar = () => {
    const { fetchWeather } = useContext(WeatherContext);
    const [city, setCity] = useState('');
    const API_KEY = 'your api key here';

    const handleSearch = () => {
        if (city) {
            fetchWeather(city, API_KEY);
        }
    };

    return (
        <SearchBarContainer>
            <Input
                type="text"
                placeholder="Enter city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
        </SearchBarContainer>
    );
};

export default SearchBar;
