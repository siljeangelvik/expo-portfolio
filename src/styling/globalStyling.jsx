import {StyleSheet} from 'react-native';

const GlobalStyling = StyleSheet.create({
    buttonSquare: {
        color: '#222222',
        backgroundColor: '#E0E5EC',
        width: 24,
        height: 24,
        border: 1,
        borderRadius: 50,
        padding: 16,
        shadowColor: '#FFFFFF', // Neumorphism shadow color
        shadowOffset: {
            width: -1,
            height: -1,
        },
        shadowOpacity: 1, // Full opacity for the shadow
        shadowRadius: 3, // Blur radius
        elevation: 3, // Android elevation for shadowr
    },
    buttonRound: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9,
        paddingHorizontal: 18,
        borderRadius: 50,
        backgroundColor: '#E0E5EC',
        color: '#222222',
        maxWidth: 120,
        shadowOffset: {
            width: -1,
            height: -1,
        },
        width: 24,
        height: 24,
        border: 1,
        padding: 16,
        shadowColor: '#FFFFFF', // Neumorphism shadow color
        shadowOpacity: 1, // Full opacity for the shadow
        shadowRadius: 3, // Blur radius
        elevation: 3, // Android elevation for shadow
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9,
        paddingHorizontal: 18,
        borderRadius: 10,
        backgroundColor: '#222222',
        color: '#cccccc',
        maxWidth: 120,
        shadowOffset: {
          width: -1,
          height: -1,
        },
        shadowOpacity: 1,
        shadowRadius:3,
        elevation: 3,
    }
});

export default GlobalStyling;