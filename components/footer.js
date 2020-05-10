import * as React from 'react'
import { View, Text, ScrollView, Modal, Button, TextInput, StyleSheet } from 'react-native';


export default function footer(props) {
    return(
        <View style={styles.footerView}>
            <Button title="C/F" color="white" />
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