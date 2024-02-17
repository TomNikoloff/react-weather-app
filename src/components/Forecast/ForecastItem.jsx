import WeatherIcon from "../../utils/weatherIcon";
import { ForecastItemContainer } from './styled';
import Temperature from "../../utils/temperature";

const ForecastItem = ({index, dateTime, weatherCode, temp, tempUnit/*, main*/}) => {

    const convertTimeStamp = (t) => {

        let date = new Date(t * 1000);
        let time = (date.getHours()) - 1;

        (time < 10) ? (time = '0' + time + ':00') : (time =time + ':00');

        return time;

    }

    return (
        <>
            {index < 9 && (
                <ForecastItemContainer>
                    {(index == 0) ? (
                        <p className="uk-text-center">Now</p>
                    ) : (
                        <p className="uk-text-center">{convertTimeStamp(dateTime)}</p>
                    )}
                    <div>
                        <WeatherIcon code={weatherCode} />
                    </div>
                    {/*
                    <p>
                        {props.main}
                    </p>
                    */}
                    <p className="uk-text-center">
                        <Temperature value={Math.round(temp)} tempUnit={tempUnit} />
                    </p>
                </ForecastItemContainer>
            )}
        </>
    )
}

export default ForecastItem;