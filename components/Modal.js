import React from 'react'
import { Text, StyleSheet, View, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import EStyleSheet from 'react-native-extended-stylesheet';



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
                <GooglePlacesAutocomplete
                    placeholder='Enter city, zip code, or airport location'
                    renderRightButton={() => <Text onPress={() => props.setModalOpen(false)} style={styles.cancelButton}>Cancel</Text>}
                    keyboardShouldPersistTaps={'handled'}
                    currentLocation={true}
                    currentLocationLabel='Current Location'
                    minLength={1} // minimum length of text to search
                    returnKeyType={'search'}
                    listViewDisplayed={'auto'}   // true/false/undefined
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        let coordinates = details.geometry.location;
                        props.setLat(coordinates.lat)
                        props.setLon(coordinates.lng)
                        props.setModalOpen(false)
                    }}
                    getDefaultValue={() => ''}
                    query={{
                        key: 'AIzaSyBBQImfeo7AwHxoxaGSwQJGJXQyc_mFuRE',
                        language: 'en', // language of the results
                        types: '(cities)' // default: 'geocode'
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GooglePlacesSearchQuery={{
                        rankby: 'distance',
                        types: 'gym'
                    }}
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                    debounce={200}
                    styles={{
                        textInputContainer: {
                            marginLeft: 0,
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            width: '100%'
                        },
                        textInput: {
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                        },
                        predefinedPlacesDescription: {
                            color: 'black',
                        },
                        description: {
                            fontWeight: 'bold'
                        }

                    }}
                />
            </View>

        </Modal>
    )
}

const styles = EStyleSheet.create({
    modalView: {
        paddingTop: 50,
        backgroundColor: '#1C9CF6',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    label: {
        color: 'white'
    },
    cancelButton: {
        paddingTop: 15,
        marginRight: 3,
        fontSize: '18rem'
    }
})