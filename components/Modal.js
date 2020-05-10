import React from 'react'
import { Text, StyleSheet, View, Button, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import { Input } from 'react-native-elements';


export default function modal(props) {

    return (
        <Modal
            animationType="slide"
            visible={props.modalOpen}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.modalView}>
                <Input
                    style={styles.test}
                    label="Enter city, zip code, or airport location"
                    labelStyle={styles.label}
                    placeholder='Search'
                    leftIcon={
                        <Icon
                            name='search'
                            size={24}
                            color='black'
                        />
                    }
                    rightIcon={
                        <Icon1
                            name="cancel"
                            size={24}
                            color="black"
                            onPress={() => props.setModalOpen(false)}
                        />
                    }
                />
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        paddingTop: 30,
        backgroundColor: '#1C9CF6',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    label: {
        color: 'white'
    }
})