import { combineReducers } from 'redux';
import { FETCH_CURRENTWEATHER_PENDING, FETCH_CURRENTWEATHER_ERROR, FETCH_CURRENTWEATHER_SUCCESS,
        FETCH_TRIHOURLYWEATHER_ERROR, FETCH_TRIHOURLYWEATHER_PENDING, FETCH_TRIHOURLYWEATHER_SUCCESS,
        FETCH_DAILYWEATHER_ERROR, FETCH_DAILYWEATHER_PENDING, FETCH_DAILYWEATHER_SUCCESS,
        SWITCH_TEMP_TYPE } from '../actions/action'


const INITIAL_STATE = {
    currentWeatherData: null,
    triHourlyWeatherData: null,
    dailyWeatherData: null,
    error: null,
    weatherType: 'F'

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
        case SWITCH_TEMP_TYPE:
            //This button is only going to be called when the C/F button is pressed in the footer
            //const newCurrentWeatherData = action.data
            const newCurrentWeatherData = state.currentWeatherData
            const newTriHourlyWeatherData = state.triHourlyWeatherData
            const newDailyWeatherData = state.dailyWeatherData
            //Weather is curerntly in Farenheight and we want to convert into Celsius
            if(state.weatherType === 'F') {
                newCurrentWeatherData.main.temp = checkConversion(state.weatherType)(newCurrentWeatherData.main.temp)
                newCurrentWeatherData.main.temp_max = farenheightToCelsius(newCurrentWeatherData.main.temp_max)
                newCurrentWeatherData.main.temp_min = farenheightToCelsius(newCurrentWeatherData.main.temp_min)

                for(let i = 0; i < newTriHourlyWeatherData.list.length; i++){
                    newTriHourlyWeatherData.list[i].main.temp = farenheightToCelsius(newTriHourlyWeatherData.list[i].main.temp)
                }

                for(let i = 0; i < newDailyWeatherData.list.length; i++) {
                    newDailyWeatherData.list[i].main.temp_max = farenheightToCelsius(newDailyWeatherData.list[i].main.temp_max)
                    newDailyWeatherData.list[i].main.temp_min = farenheightToCelsius(newDailyWeatherData.list[i].main.temp_min)
                }
                return {
                    ...state,
                    currentWeatherData: {...newCurrentWeatherData},
                    triHourlyWeatherData: {...newTriHourlyWeatherData},
                    dailyWeatherData: {...newDailyWeatherData},
                    weatherType: 'C'
                }
            } 
            else {
                newCurrentWeatherData.main.temp = celsiusToFarenheight(newCurrentWeatherData.main.temp)
                newCurrentWeatherData.main.temp_max = celsiusToFarenheight(newCurrentWeatherData.main.temp_max)
                newCurrentWeatherData.main.temp_min = celsiusToFarenheight(newCurrentWeatherData.main.temp_min)

                for(let i = 0; i < newTriHourlyWeatherData.list.length; i++){
                    newTriHourlyWeatherData.list[i].main.temp = celsiusToFarenheight(newTriHourlyWeatherData.list[i].main.temp)
                }

                for(let i = 0; i < newDailyWeatherData.list.length; i++) {
                    newDailyWeatherData.list[i].main.temp_max = celsiusToFarenheight(newDailyWeatherData.list[i].main.temp_max)
                    newDailyWeatherData.list[i].main.temp_min = celsiusToFarenheight(newDailyWeatherData.list[i].main.temp_min)
                }

                return {
                    ...state,
                    currentWeatherData: {...newCurrentWeatherData},
                    triHourlyWeatherData: {...newTriHourlyWeatherData},
                    dailyWeatherData: {...newDailyWeatherData},
                    weatherType: 'F'
                }
            }
           
           
            
            

        default:
            return state
    }

}

function farenheightToCelsius(temp) {
    return ((temp - 32)/ 1.8)
}

function celsiusToFarenheight(temp) {
    return ((temp * 1.8) + 32)
}

function checkConversion(type) {
    if(type === "F"){
        return farenheightToCelsius
    }
    else {
        return celsiusToFarenheight
    }
}