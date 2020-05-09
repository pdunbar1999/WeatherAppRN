import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, useState } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import CityWeather from './screens/CityWeather'
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Location from 'expo-location';


export default function App(props) {
  const [isFontLoadingComplete, setisFontLoadingComplete] = React.useState(false);
  const [location, setLocation] = React.useState(null)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadFontsAsync() {
      try {
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setisFontLoadingComplete(true);
      }
    }
    async function loadLocationAsync() {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }


    loadFontsAsync();
    loadLocationAsync();

  }, []);



  // console.log(JSON.stringify(location))

  const screenWidth = Dimensions.get('window').width
  EStyleSheet.build({
    $rem: screenWidth / 380
  })

  if (!isFontLoadingComplete || location === null) {
    return null;
  } else {

    return (
      <View style={styles.container}>
        <CityWeather location={location} />
      </View>
      

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C9CF6',
    flex: 1
  }
})

