export const FETCH_CURRENTWEATHER_PENDING = 'FETCH_CURRENTWEATHER_PENDING';
export const FETCH_CURRENTWEATHER_SUCCESS = 'FETCH_CURRENTWEATHER_SUCCESS';
export const FETCH_CURRENTWEATHER_ERROR = 'FETCH_CURRENTWEATHER_ERROR';

export const FETCH_TRIHOURLYWEATHER_PENDING = 'FETCH_TRIHOURLYWEATHER_PENDING'
export const FETCH_TRIHOURLYWEATHER_SUCCESS = 'FETCH_TRIHOURLYWEATHER_SUCCESS'
export const FETCH_TRIHOURLYWEATHER_ERROR = 'FETCH_TRIHOURLYWEATHER_ERROR'

export const FETCH_DAILYWEATHER_PENDING = 'FETCH_DAILYWEATHER_PENDING'
export const FETCH_DAILYWEATHER_SUCCESS = 'FETCH_DAILYWEATHER_SUCCESS'
export const FETCH_DAILYWEATHER_ERROR = 'FETCH_DAILYWEATHER_ERROR'

export const SWITCH_TEMP_TYPE = 'SWTICH_TEMP_TYPE'

export const fetchCurrentWeatherPending = () => {
    return {
        type: FETCH_CURRENTWEATHER_PENDING
    }
}

export const fetchCurrentWeatherSuccess = (data) => {
    return {
        type: FETCH_CURRENTWEATHER_SUCCESS,
        weather: data
    }
}

export const fetchCurrentWeatherError = (error) => {
    return {
        type: FETCH_CURRENTWEATHER_ERROR,
        error: error
    }
}

export const fetchTriHourlyWeatherPending = () => {
    return {
        type: FETCH_TRIHOURLYWEATHER_PENDING
    }
}

export const fetchTriHourlyWeatherSuccess = (data) => {
    return {
        type: FETCH_TRIHOURLYWEATHER_SUCCESS,
        weather: data
    }
}

export const fetchTriHourlyWeatherError = (error) => {
    return {
        type: FETCH_TRIHOURLYWEATHER_ERROR,
        error: error
    }
}

export const fetchDailyWeatherPending = () => {
    return {
        type: FETCH_DAILYWEATHER_PENDING
    }
}

export const fetchDailyWeatherSuccess = (data) => {
    return {
        type: FETCH_DAILYWEATHER_SUCCESS,
        weather: data
    }
}

export const fetchDailyWeatherError = (error) => {
    return {
        type: FETCH_DAILYWEATHER_ERROR,
        error: error
    }
}

export const switchTempType = (type) => {
    return {
        type: SWITCH_TEMP_TYPE,
        type: type
    }
}