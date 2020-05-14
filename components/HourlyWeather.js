import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { images } from '../assets/global'
import { globalStyles } from '../assets/global'
import WeatherTypeIcon from '../components/WeatherTypeIcon'

export default function HourlyWeather(props) {
    function convertUnixToHour(unixTimeStamp) {
        const dateObject = new Date(unixTimeStamp * 1000);
        return dateObject.getHours();
    }
    

    const temp = props.triHourlyWeatherData.main.temp.toFixed(0)
    const weatherIcon = props.triHourlyWeatherData.weather[0].main
    const militaryHour = convertUnixToHour(props.triHourlyWeatherData.dt)
    return (
        <View style={styles.hourly}>
            <Text style={styles.timeTemp}>{militaryHour}:00</Text>
            <Image style={styles.weatherImage} source={images.weatherIcons[weatherIcon]} />
            <View style={styles.hourlyTemp}>
                <Text style={styles.timeTemp}>{temp}</Text>
                <WeatherTypeIcon size={props.size} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hourly: {
        height: '100%',
        width: 65,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    timeTemp: {
        fontSize: 20,
        color: 'white'
    },
    hourlyTemp: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    weatherImage: {
        height: '25%',
        width: '60%'
    },
})