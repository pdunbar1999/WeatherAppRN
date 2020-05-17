import React from 'react'
import { Text, StyleSheet, View, Button, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import { Input } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export default function modal(props) {

    // const currentLocation = {
    //     description: 'Current Location',
    //     geometry: { location: { lat: props.lat, lng: props.lon}}
    // }

    return (
        <Modal
            animationType="slide"
            visible={props.modalOpen}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.modalView}>
                {/* <Input
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
                /> */}
                <GooglePlacesAutocomplete
                    placeholder="Enter city, zip code, or airport location"
                    query={{
                        key: 'AIzaSyBBQImfeo7AwHxoxaGSwQJGJXQyc_mFuRE',
                        language: 'en', // language of the results,
                        components: 'country:us'
                    }}
                    currentLocation={true}
                    currentLocationLabel='Current Location'
                    onPress={(data, details = null) => {
                        console.log(details)
                    }}
                    onFail={error => console.error(error)}
                    autoFocus={false}
                    requestUrl={{
                        url:
                            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                        useOnPlatform: 'web',
                    }} // this in only required for use on the web. See https://git.io/JflFv more for details.
                    styles={{
                        textInputContainer: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                        },
                        predefinedPlacesDescription: {
                            color: 'black',
                        },
                    }}
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