import { celciusToFahrenheit} from './unitConversion';

const Temperature = ({tempUnit, value}) => {
  
    if (tempUnit === 'FAHRENHEIT') {
      return (
        <>
            {celciusToFahrenheit(value)}
            <sup>&deg;</sup>F
        </>
      );
    }
    return (
        <>
            {value}
            <sup>&deg;</sup>C
        </>
    );
  };
  
  export default Temperature;