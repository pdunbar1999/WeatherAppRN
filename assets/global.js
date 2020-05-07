import EStyleSheet from 'react-native-extended-stylesheet';

export const globalStyles = EStyleSheet.create({
    dayOfWeek: {
        fontSize: '18rem',
        color: 'white',
        fontWeight: "bold",
        width: '30%'
    },
    dateAndHighLowView: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
    },
    HighLowView: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    todaysHigh: {
        color: 'white',
        fontSize: '20rem',
        fontWeight: 'bold'
    },
    todaysLow: {
        color: 'white',
        fontSize: '20rem',
        fontWeight: 'bold',
        opacity: .5
    },

})



export const images = {
    weatherIcons: {
        'Clouds': require('./images/ios11-weather-cloudy-icon.png'),
        'Rain': require('./images/ios11-weather-rain-icon.png'),
        'Clear': require('./images/ios11-weather-sunny-icon.png'),

    }


}