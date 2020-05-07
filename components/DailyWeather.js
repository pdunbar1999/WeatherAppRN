import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../assets/global'
import { images } from '../assets/global'

export default function DailyWeather(props) {

  
    const dayOfWeek = props.convertUnixToDayOfWeek(props.dailyWeatherData.dt)
    const dailyHigh = props.dailyWeatherData.main.temp_max.toFixed(0)
    const dailyLow = props.dailyWeatherData.main.temp_min.toFixed(0)
    const weatherIcon = props.dailyWeatherData.weather[0].main

    return (
        <View>
            <View style={globalStyles.dateAndHighLowView}>
                <Text style={globalStyles.dayOfWeek}>{dayOfWeek} </Text>
                <Image style={styles.weatherImage} source={images.weatherIcons[weatherIcon]} />
                <View style={globalStyles.HighLowView}>
                    <Text style={globalStyles.todaysHigh}>{dailyHigh} </Text>
                    <Text style={globalStyles.todaysLow}>{dailyLow} </Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    weatherImage: {
        height: '100%',
        width: '9%'
    }
})
