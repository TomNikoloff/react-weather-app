import ForecastItem from './ForecastItem';
import { 
    SectionTitle 
} from '../../app.styled';
import { 
    ForecastContainer,
    ForecastItems, 
} from './styled';

const Forecast = ({weather, tempUnit}) => {

    //console.log('Forecast Data:', weather);

    return (
        <>
            {(typeof weather.list != "undefined") ? (
                <ForecastContainer>
                    <SectionTitle>
                        <span uk-icon="clock"></span> 
                        <span>3 Hourly Forecast</span>
                    </SectionTitle>
                    <ForecastItems>
                        {weather.list.map((item, i) => {
                            return (
                            <ForecastItem
                                key={i}
                                index={i}
                                dateTime={item.dt}
                                temp={item.main.temp}
                                high={item.main.temp_max}
                                low={item.main.temp_min}
                                weatherCode={item.weather[0].id}
                                main={item.weather[0].main}
                                tempUnit={tempUnit}
                            />
                            );
                        })}
                    </ForecastItems>
                </ForecastContainer> 
            ) : ('')}
        </>
    );
}

export default Forecast;