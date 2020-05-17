import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';
import HourlyWeather from '../components/HourlyWeather'
import _ from 'lodash'
//import dailyWeatherData from '../dummy-data/triHourlyWeatherData'
//import triHourlyWeatherData from '../dummy-data/triHourlyWeatherData'
//import currentWeatherData from '../dummy-data/currentWeatherData'
import DailyWeather from '../components/DailyWeather'
import WeatherInformation from '../components/weatherInformation'
import { globalStyles } from '../assets/global'
import EStyleSheet from 'react-native-extended-stylesheet';

import Footer from '../components/footer'
import Modal from '../components/Modal'
import WeatherTypeIcon from '../components/WeatherTypeIcon'

import * as actions from '../redux/actions/action';
import { useSelector, useDispatch } from 'react-redux'



//REDUX
//When to make the initial call to the API
//I'll need to make subsequent calls when the Search functionality is implemented
//For now, I make one call. But I want redux for the Celsius and Farenhight shit
//Leave the API call here and then create an action to assign the state this new data
//Make API call in the reducers, might need react-thunk https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

//ITS WORKING IN REDUX NOW

export default function CityWeather(props) {
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = React.useState(false)

    const [lat, setLat] = React.useState(props.location.coords.latitude)
    const [lon, setLon] = React.useState(props.location.coords.longitude)


    React.useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        // const lat = props.location.coords.latitude
        // const lon = props.location.coords.longitude

        function loadData() {
            //Current Weather
            try {
                dispatch(actions.fetchCurrentWeatherPending())
                fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=ad02902f06d3896862c43355dec445b9', { signal: signal })
                    .then(results => results.json())
                    .then(data => {
                        dispatch(actions.fetchCurrentWeatherSuccess(data))

                    })
            } catch (e) {
                console.log(e)
                dispatch(actions.fetchCurrentWeatherError(e))
            }
            //TriHourlyWeather
            try {
                dispatch(actions.fetchTriHourlyWeatherPending())
                fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=ad02902f06d3896862c43355dec445b9', { signal: signal })
                    .then(results => results.json())
                    .then(data => {

                        for (let x = 0; x < 25; x++) {
                            data.list.pop()
                        }
                        dispatch(actions.fetchTriHourlyWeatherSuccess(data))
                    })
            } catch (e) {
                console.log(e)
                dispatch(actions.fetchTriHourlyWeatherError(e))
            }
            //DailyWeather
            try {
                dispatch(actions.fetchDailyWeatherPending())
                fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=ad02902f06d3896862c43355dec445b9', { signal: signal })
                    .then(results => results.json())
                    .then(data => {

                        dispatch(actions.fetchDailyWeatherSuccess(data))
                    })
            } catch (e) {
                console.log(e)
                dispatch(actions.fetchDailyWeatherError(e))
            }

            return function cleanup() {
                abortController.abort()
            }
        }
        loadData()


    }, [])

    function convertUnixToDayOfWeek(unixTimeStamp) {
        const milliseconds = unixTimeStamp * 1000
        const dateObject = new Date(milliseconds)
        const dayOfWeek = dateObject.toLocaleString("en-US", { weekday: "long" })
        return dayOfWeek
    }

    const currentWeatherData = useSelector(state => state.weather.currentWeatherData)
    const triHourlyWeatherData = useSelector(state => state.weather.triHourlyWeatherData)
    const dailyWeatherData = useSelector(state => state.weather.dailyWeatherData)

    if (currentWeatherData === null || triHourlyWeatherData === null || dailyWeatherData == null) {
        return null
    }
    else {

        const cityName = currentWeatherData.name
        const weatherDescription = _.startCase(_.toLower(currentWeatherData.weather[0].description))
        const currentTemperature = currentWeatherData.main.temp.toFixed(0)
        const todaysHigh = currentWeatherData.main.temp_max.toFixed(0)
        const todaysLow = currentWeatherData.main.temp_min.toFixed(0)
        const dayOfWeek = convertUnixToDayOfWeek(currentWeatherData.dt)

        return (
            <View style={{ flex: 1, backgroundColor: '#1C9CF6' }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                    <View style={styles.currentForecast}>
                        <Text style={styles.cityName}>{cityName}</Text>
                        <Text style={styles.currentCityWeatherDescription}>{weatherDescription}</Text>
                        <View style={styles.currentCityTemperatureView}>
                            <Text style={styles.currentCityTemperature}>{currentTemperature}</Text>
                            <WeatherTypeIcon size={40} />
                        </View>

                    </View>

                    <View style={globalStyles.dateAndHighLowView}>
                        <Text style={globalStyles.dayOfWeek}>{dayOfWeek}</Text>
                        <View style={globalStyles.HighLowView}>
                            <Text style={globalStyles.todaysHigh}>{todaysHigh}</Text>
                            <Text style={globalStyles.todaysLow}>{todaysLow}</Text>
                        </View>
                    </View>

                    <View style={styles.hourlyForecast}>
                        <ScrollView horizontal={true} decelerationRate={0} snapToAlignment={"end"}>
                            {triHourlyWeatherData.list.map(triHourlyWeatherData => {
                                return <HourlyWeather triHourlyWeatherData={triHourlyWeatherData} key={Math.random(1000000)} />
                            })}

                        </ScrollView>
                    </View>

                    <View style={styles.futureForecast}>
                        {dailyWeatherData.list.filter(dailyWeatherData => dailyWeatherData.dt_txt.split(" ")[1] === "12:00:00").map(dailyWeatherData => {
                            return <DailyWeather dailyWeatherData={dailyWeatherData} convertUnixToDayOfWeek={convertUnixToDayOfWeek} key={Math.random(100000)} size={15} />
                        })}
                    </View>

                    <View style={styles.informationView}>
                        <WeatherInformation currentWeatherData={currentWeatherData} />
                    </View>

                </ScrollView>
                <Footer modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        width: '100%',

    },
    currentForecast: {
        //flex: 2,
        width: '100%',
        aspectRatio: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25

    },
    hourlyForecast: {
        //flex: 1,
        width: '100%',
        aspectRatio: 3,
        borderColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    futureForecast: {
        //flex: 2,
        width: '100%',
        aspectRatio: 2,
        borderColor: 'white',
        borderBottomWidth: 1
    },
    cityName: {
        fontSize: "50rem",
        color: 'white',
        fontWeight: '700'
    },
    currentCityWeatherDescription: {
        fontSize: '22rem',
        color: 'white',
        fontWeight: '300'
    },
    currentCityTemperatureView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currentCityTemperature: {
        fontSize: '90rem',
        color: 'white'
    },
    informationView: {
        width: '100%'
    }
})