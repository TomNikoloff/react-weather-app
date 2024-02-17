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

    //const [isLoading, setIsLoading] = useState(false);

    const handleButtonPress = () => {

        if(query !== ''){

            displayLoading();

            fetchWeatherData(query)
            .then(result => {
                onSearch(result);
                setQuery('');
                hideLoading();
            })
            .catch((error) => {
                console.log(error)
            });
        }

    }

    const handleKeyPress = (evt) => {

        if(evt.key === "Enter"){

            displayLoading();

            fetchWeatherData(query)
            .then(result => {
                onSearch(result);
                setQuery('');
                hideLoading();
            })
            .catch((error) => {
                console.log(error)
            });
        }

    }

    const handleLocation = () => {

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
                hideLoading();
            })
            .catch((error) => {
                console.log(error)
            });
        }
    }

    const loadingOverlay = document.getElementById('loading_overlay');

    const displayLoading = () => {

        loadingOverlay ? loadingOverlay.classList.remove('uk-hidden') : console.error('loadingOverlay is null');

    }

    const hideLoading = () => {
        loadingOverlay ? loadingOverlay.classList.add('uk-hidden') : console.error('loadingOverlay is null');
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