import Header from './components/Header/Header';
import Search from './components/Search/Search';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import FiveDayForecast from './components/FiveDayForecast/FiveDayForecast';
import Footer from './components/Footer/Footer';
import { fetchWeatherData } from './hooks/weather';
import { 
    PageContainer,
    AppContainer
} from './app.styled';
import { useState, useEffect } from 'react';

const App = () => {

    const [weather, setWeather] = useState({});

    const [tempUnit, setTempUnit] = useState('CELCIUS');
    
    useEffect(() => { 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }

          function showPosition(position) {

            let location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }

            fetchWeatherData(location)
            .then(result => {
                setWeather(result);
            });
        }
    }, [])
    

    return (
        <PageContainer>
            <Header />
            <AppContainer>
                <Search onSearch={(weather) => setWeather(weather)}/>
                <CurrentWeather weather={weather} onToggle={(tempUnit) => setTempUnit(tempUnit)} tempUnit={tempUnit} />
                <Forecast weather={weather} tempUnit={tempUnit} />
                <FiveDayForecast weather={weather} tempUnit={tempUnit} />
            </AppContainer>
            <Footer />
        </PageContainer>
    );
};

export default App;