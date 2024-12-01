import React from 'react';
import WeatherProvider from './components/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 0',
  };

  return (
    <WeatherProvider>
      <div>
        <header style={headerStyle}>
          <h1>Weather App</h1>
        </header>
        <SearchBar />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
}

export default App;
