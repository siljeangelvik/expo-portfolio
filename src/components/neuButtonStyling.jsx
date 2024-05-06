import { StyleSheet } from 'react-native';

const NeuButtonStyling = StyleSheet.create({
    neumorphismButton: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: '#F0F0F0', // Background color of the button
        shadowColor: '#FFFFFF', // Neumorphism shadow color
        shadowOffset: {
            width: -1,
            height: -1,
        },
        shadowOpacity: 1, // Full opacity for the shadow
        shadowRadius: 3, // Blur radius
        elevation: 3, // Android elevation for shadow
    },
    neumorphismButtonHover: {
        shadowOffset: {
            width: -1,
            height: -1,
        },
        shadowOpacity: 0.8, // Adjusted opacity on hover
        shadowRadius: 6, // Adjusted blur radius on hover
    }
});

export default NeuButtonStyling;
