import ForecastItem from './FiveDayForecastItem';
import { 
    SectionTitle 
} from '../../app.styled';
import { 
    ForecastContainer,
    ForecastItems,
} from './styled';

const FiveDayForecast = ({weather, tempUnit}) =>{

    //console.log('Forecast Data:', weather);

    const get5DayForecast = () => {

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let todaysDate = new Date().getDate();

        const fiveDayForecast = [];

        for(let i = 1; i < 6; i++){

            let nextDateTime = new Date( Date.now() + i * 24 * 60 * 60 * 1000);

            let obj = {
                date: nextDateTime.getDate(),
                day: days[nextDateTime.getDay()],
                temp: { min: 0, max: 0 },
                weather: { type: '', description: '', code: '' }
            }

            fiveDayForecast.push(obj);
        }

        let count = 0;
        let prevDate = new Date( Date.now() + 1 * 24 * 60 * 60 * 1000).getDate();
        let first = true;

        if(weather.list){
            weather.list.forEach((item) => {

                let dateTime = new Date(item.dt * 1000);
                let date = dateTime.getDate();

                if(date !== todaysDate){

                    let temp = Math.round(item.main.temp);
                    let code = item.weather[0].id;
                    let type = item.weather[0].main;
                    let description = item.weather.description;

                    if(first){
                        fiveDayForecast[count].temp.min = temp;
                        fiveDayForecast[count].temp.max = temp;
                        first = false;
                    } else {

                        if(date !== prevDate){
                            prevDate = date;
                            count++;
                            fiveDayForecast[count].temp.min = temp;
                            fiveDayForecast[count].temp.max = temp;
                        }

                        if(temp < fiveDayForecast[count].temp.min){
                            fiveDayForecast[count].temp.min = temp;
                        }
                        if(temp > fiveDayForecast[count].temp.max){
                            fiveDayForecast[count].temp.max = temp;
                        }
                    }

                    if(item.dt_txt.includes('12:00:00')){
                        fiveDayForecast[count].weather.code = code;
                        fiveDayForecast[count].weather.type = type;
                        fiveDayForecast[count].weather.description = description;
                    } else if(fiveDayForecast[count].weather.type == ''){
                        fiveDayForecast[count].weather.code = code;
                        fiveDayForecast[count].weather.type = type;
                    }

                }
            });
        }

        return fiveDayForecast;

    }

    return (
        <>
            {weather.list && (
                <ForecastContainer>
                    <SectionTitle>
                        <span uk-icon="calendar"></span> 
                        <span>5 Day Forecast</span>
                    </SectionTitle>
                    <ForecastItems>
                    {get5DayForecast().map((item, i) => {
                        return (
                        <ForecastItem
                            key={i}
                            day={item.day}
                            high={item.temp.max}
                            low={item.temp.min}
                            weatherCode={item.weather.code}
                            main={item.weather.type}
                            tempUnit={tempUnit}
                        />
                        );
                    })}
                    </ForecastItems>
                </ForecastContainer> 
            )}
        </>
    );

}

export default FiveDayForecast;