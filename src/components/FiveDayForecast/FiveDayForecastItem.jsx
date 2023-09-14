import WeatherIcon from "../../utils/weatherIcon";
import { 
    ForecastItemContainer,
    HighLowContainer 
} from './styled';
import Temperature from "../../utils/temperature";

const FiveDayForecastItem = (props) =>{

    return (
        <>
            <ForecastItemContainer>
                <p className="uk-text-center">{props.day}</p>
                <div>
                    <WeatherIcon code={props.weatherCode} />
                </div>
                <p>
                    {props.main}
                </p>
                <HighLowContainer>
                    <Temperature value={Math.round(props.high)} tempUnit={props.tempUnit} />
                    <span>/</span> 
                    <Temperature value={Math.round(props.low)} tempUnit={props.tempUnit} />
                </HighLowContainer>
            </ForecastItemContainer>
        </>
    )
}

export default FiveDayForecastItem;