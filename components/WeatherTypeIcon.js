import React from 'react'
import { View} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

export default function WeatherTypeIcon(props) {

    const weatherType = useSelector(state => state.weather.weatherType)

    return (
        <View>
            {weatherType === 'F' ? (
                <MaterialCommunityIcons name="temperature-fahrenheit" size={props.size} color="white" />
            ) : (
                    <MaterialCommunityIcons name="temperature-celsius" size={props.size} color="white" />
                )}
        </View>

    )
}