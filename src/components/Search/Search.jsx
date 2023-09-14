import { useState } from 'react';
import { fetchWeatherData } from '../../hooks/weather';
import { 
    SearchContainer,
    SearchBar,
    SearchButton,
    LocationButton
} from './styled';
const Search = ({onSearch}) => {


    const [query, setQuery] = useState('');

    const handleButtonPress = (e) => {

        if(query !== ''){
            fetchWeatherData(query)
            .then(result => {
                onSearch(result);
                setQuery('');
            })
            .catch((error) => {
                console.log(error)
            });
        }

    }

    const handleKeyPress = evt => {

        if(evt.key === "Enter"){
            fetchWeatherData(query)
            .then(result => {
                onSearch(result);
                setQuery('');
            })
            .catch((error) => {
                console.log(error)
            });
        }

    }

    const handleLocation = (e) => {

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
                onSearch(result);
                setQuery('');
            })
            .catch((error) => {
                console.log(error)
            });
        }
    }

    

    return (
        <SearchContainer>
            <SearchButton 
                href="#"
                uk-icon="icon: search;"
                onClick={handleButtonPress}
            />
            <SearchBar 
                className="uk-input" 
                type="text" 
                aria-label="Clickable icon"
                placeholder='Search...'
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyUp={handleKeyPress}
            />
            <LocationButton
                onClick={handleLocation}
            />
        </SearchContainer>
    )
}

export default Search;