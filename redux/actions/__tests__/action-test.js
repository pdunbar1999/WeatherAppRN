import * as actions from '../action'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    FETCH_CURRENTWEATHER_PENDING, FETCH_CURRENTWEATHER_ERROR, FETCH_CURRENTWEATHER_SUCCESS,
    FETCH_TRIHOURLYWEATHER_ERROR, FETCH_TRIHOURLYWEATHER_PENDING, FETCH_TRIHOURLYWEATHER_SUCCESS,
    FETCH_DAILYWEATHER_ERROR, FETCH_DAILYWEATHER_PENDING, FETCH_DAILYWEATHER_SUCCESS,
    SWITCH_TEMP_TYPE
} from '../action'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)


describe('actions', () => {
    it('should fetch current weather pending', () => {
        const expectedAction = {
            type: FETCH_CURRENTWEATHER_PENDING
        }
        expect(actions.fetchCurrentWeatherPending()).toEqual(expectedAction)
    })
    it('should fetch current weather succesfully', () => {
        const weather = {currentWeather: '1'}
        const expectedAction = {
            type: FETCH_CURRENTWEATHER_SUCCESS,
            weather: {currentWeather: '1'}
        }
        expect(actions.fetchCurrentWeatherSuccess(weather)).toEqual(expectedAction)
    })
    it('shouldnt fetch current weather and return error', () => {
        const error = { error: 'error'}
        const expectedAction = {
            type: FETCH_CURRENTWEATHER_ERROR,
            error: { error: 'error'}
        }
        expect(actions.fetchCurrentWeatherError(error)).toEqual(expectedAction)
    })

    it('should fetch TriHourly weather pending', () => {
        const expectedAction = {
            type: FETCH_TRIHOURLYWEATHER_PENDING
        }
        expect(actions.fetchTriHourlyWeatherPending()).toEqual(expectedAction)
    })
    it('should fetch TriHourly weather succesfully', () => {
        const weather = {triHourlyWeatherData: '1'}
        const expectedAction = {
            type: FETCH_TRIHOURLYWEATHER_SUCCESS,
            weather: {triHourlyWeatherData: '1'}
        }
        expect(actions.fetchTriHourlyWeatherSuccess(weather)).toEqual(expectedAction)
    })
    it('shouldnt fetch TriHourly weather and return error', () => {
        const error = { error: 'error'}
        const expectedAction = {
            type: FETCH_TRIHOURLYWEATHER_ERROR,
            error: { error: 'error'}
        }
        expect(actions.fetchTriHourlyWeatherError(error)).toEqual(expectedAction)
    })

    it('given a weather type of F, it switches to C', () => {
        const weatherType = "F"
        const expectedAction = {
            type: SWITCH_TEMP_TYPE
        }
    })
})

// describe('async actions', () => {
//     afterEach(() => {
//         fetchMock.restore()
//     })
//     it('creates FETCH_CURRENTWEATHER_SUCCESS when fetching current weather has been done', () => {
//         fetchMock.getOnce('/openweather', {
//             body: { currentWeather: ['something']},
//             headers: { 'content-type': 'application/json' }
//         })

//         const expectedActions = [
//             { type: FETCH_CURRENTWEATHER_PENDING},
//             { type: FETCH_CURRENTWEATHER_SUCCESS, body: {currentWeather: ['something']}}
//         ]
//         const store = mockStore({  
//             currentWeatherData: null,
//             triHourlyWeatherData: null,
//             dailyWeatherData: null,
//             error: null,
//             weatherType: 'F'})
//     })
//     return store.dispatch(actions.)
// })