import { combineReducers } from 'redux';
import { FETCH_CURRENTWEATHER_PENDING, FETCH_CURRENTWEATHER_ERROR, FETCH_CURRENTWEATHER_SUCCESS,
        FETCH_TRIHOURLYWEATHER_ERROR, FETCH_TRIHOURLYWEATHER_PENDING, FETCH_TRIHOURLYWEATHER_SUCCESS,
        FETCH_DAILYWEATHER_ERROR, FETCH_DAILYWEATHER_PENDING, FETCH_DAILYWEATHER_SUCCESS } from '../actions/testaction'


const INITIAL_STATE = {
    currentWeatherData: null,
    triHourlyWeatherData: null,
    dailyWeatherData: null,
    error: null

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CURRENTWEATHER_SUCCESS:
            return {
                ...state,
                pending: false,
                currentWeatherData: action.weather
            }
        case FETCH_CURRENTWEATHER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_CURRENTWEATHER_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }
        case FETCH_TRIHOURLYWEATHER_SUCCESS: 
            return {
                ...state,
                pending: false,
                triHourlyWeatherData: action.weather
            }
        case FETCH_TRIHOURLYWEATHER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_TRIHOURLYWEATHER_ERROR:
            return{
                ...state,
                error: action.error
            }
        case FETCH_DAILYWEATHER_ERROR: 
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_DAILYWEATHER_SUCCESS:
            return {
                ...state,
                pending: false,
                dailyWeatherData: action.weather
            }
        case FETCH_DAILYWEATHER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_CURRENTWEATHER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        default:
            return state
    }

}