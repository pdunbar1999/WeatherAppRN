import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import d2d from 'degrees-to-direction'
import EStyleSheet from 'react-native-extended-stylesheet';


export default function weatherInformation(props) {


    function convertUnixToTime(unixTimeStamp) {
        const milliseconds = unixTimeStamp * 1000
        const dateObject = new Date(milliseconds)
        const hour = dateObject.getHours().toString()
        const minute = dateObject.getMinutes().toString()
        const time = hour + ':' + minute 
        return time
    }

    const sunrise = convertUnixToTime(props.currentWeatherData.sys.sunrise)
    const sunset = convertUnixToTime(props.currentWeatherData.sys.sunset)
    const windSpeed = props.currentWeatherData.wind.speed.toString()
    const windDirection = d2d(props.currentWeatherData.wind.deg).toString()
    const humidity = props.currentWeatherData.main.humidity
    const pressure = props.currentWeatherData.main.pressure
    const feelsLike = props.currentWeatherData.main.feels_like.toFixed(0)

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Sunrise</Text>
                <Text style={styles.title}>Sunset</Text>
            </View>


            <View style={[styles.titleView, {borderColor: 'white', borderBottomWidth: 1}]}>
                <Text style={styles.value}>{sunrise}</Text>
                <Text style={styles.value}>{sunset}</Text>
            </View>

            <View style={styles.titleView}>
                <Text style={styles.title}>Wind</Text>
                <Text style={styles.title}>Humidity</Text>
            </View>


            <View style={[styles.titleView, {borderColor: 'white', borderBottomWidth: 1}]}>
                <Text style={styles.value}>{windDirection + ' ' + windSpeed + ' mph'}</Text>
                <Text style={styles.value}>{humidity}%</Text>
            </View>


            <View style={styles.titleView}>
                <Text style={styles.title}>Pressure</Text>
                <Text style={styles.title}>Feels Like</Text>
            </View>


            <View style={[styles.titleView, {borderColor: 'white', borderBottomWidth: 1}]}>
                <Text style={styles.value}>{pressure} hPa</Text>
                <Text style={styles.value}>{feelsLike}</Text>
            </View>


        </View>


    )

}

const styles = EStyleSheet.create({

    container: {
        paddingHorizontal: 30,
        width: '100%'
    },
    title: {
        fontSize: '16rem',
        color: 'white',
        opacity: .5
    },
    value: {
        fontSize: '20rem',
        color: 'white'
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3
    }
})