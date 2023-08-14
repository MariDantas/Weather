/** @param {Object} data */
export function getCountry(data) {
    console.log(data.location.country);
    return data.location.country;
}

/** @param {Object} data */
export function getIcon(data) {
    console.log(data.current.weather_icons.toString());
    return data.current.weather_icons.toString();
}

/** @param {Object} data */
export function getTemperature(data) {
    console.log(data.current.temperature)
    return data.current.temperature;
}