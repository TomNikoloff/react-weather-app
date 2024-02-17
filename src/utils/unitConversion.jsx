export const kelvinToCelcius = (num) => Math.round(num - 273.15);
  
export const celciusToFahrenheit = (c) => Math.round(c * (9 / 5) + 32);

export const fahrenheitToCelcius = (f) => Math.round(((f - 32) * 5) / 9);
  
export const kmToMile = (n) => Math.round(n / 1.60934);

export const mileToKm = (n) => Math.round(n * 1.60934);