import { combineReducers } from 'redux';
import { COUNTER_CHANGE, FETCH_WEATHER_PENDING, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS } from '../actions/testaction'


const INITIAL_STATE = {
    counter: 1,
    weather: {},
    error: null

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return { counter: state.counter + 1 }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                pending: false,
                weather: action.weather
            }
        case FETCH_WEATHER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_WEATHER_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }

        default:
            return state
    }

}