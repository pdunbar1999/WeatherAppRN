import * as React from 'react'
import { View, Text, ScrollView, Modal, Button, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from  '../redux/actions/testaction';



export default function footer(props) {
    const dispatch = useDispatch()

    const currentWeatherData = useSelector(state => state.weather.currentWeatherData)
    return(
        <View style={styles.footerView}>
            <Button title="C/F" color="white" onPress={() => dispatch(actions.switchTempType(currentWeatherData))}/>
            <Button title="Search" color="white" onPress={() => props.setModalOpen(true)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    footerView: {
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-around'
    }
})