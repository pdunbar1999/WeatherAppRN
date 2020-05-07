import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: props.route.params.location.coords.latitude,
                longitude: props.route.params.location.coords.longitude,
                latitudeDelta: 8,
                longitudeDelta: 8,
            }

        }
        this.onRegionChange = this.onRegionChange.bind(this)
    }

    onRegionChange(region) {
        this.setState({ region });
        this.props.route.params.setLocation(region)
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} region={this.state.region} onRegionChange={this.onRegionChange}>
                    <Marker draggable
                        coordinate={this.state.region}
                        onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});