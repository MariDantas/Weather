/** @param {Object} data */
export function getCountry(data) {
    return data.location.country;
}

/** @param {Object} data */
export function getIcon(data) {
    return data.current.weather_icons.toString();
}

/** @param {Object} data */
export function getTemperature(data) {
    return data.current.temperature;
}
