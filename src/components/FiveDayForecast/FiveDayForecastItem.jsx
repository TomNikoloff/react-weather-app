import WeatherIcon from "../../utils/weatherIcon";
import { 
    ForecastItemContainer,
    HighLowContainer 
} from './styled';
import Temperature from "../../utils/temperature";

const FiveDayForecastItem = ({day, weatherCode, main, high, low, tempUnit}) =>{

    return (
        <>
            <ForecastItemContainer>
                <p className="uk-text-center">{day}</p>
                <div>
                    <WeatherIcon code={weatherCode} />
                </div>
                <p>
                    {main}
                </p>
                <HighLowContainer>
                    <Temperature value={Math.round(high)} tempUnit={tempUnit} />
                    <span>/</span> 
                    <Temperature value={Math.round(low)} tempUnit={tempUnit} />
                </HighLowContainer>
            </ForecastItemContainer>
        </>
    )
}

export default FiveDayForecastItem;