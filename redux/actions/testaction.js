export const COUNTER_CHANGE = 'COUNTER_CHANGE'

export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export const changeCount = () => {
    return { type: COUNTER_CHANGE}
}

export const fetchWeatherPending = () => {
    return {
        type: FETCH_WEATHER_PENDING
    }
}

export const fetchWeatherSuccess = (data) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        weather: data
    }
}

export const fetchWeatherError = (error) => {
    return {
        type: FETCH_WEATHER_ERROR,
        error: error
    }
}