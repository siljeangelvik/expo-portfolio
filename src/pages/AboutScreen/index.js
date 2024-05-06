import React from 'react';
import {View, Text} from 'react-native';
import HeaderStyling from '../../styling/headerStyling';

const AboutScreen = () => {
    return (
        <View>
            <Text style={HeaderStyling.title}>About Screen</Text>
            <Text style={HeaderStyling.heading}>Avena Dev</Text>
            <Text style={HeaderStyling.paragraph}>Hello, my name is...</Text>
        </View>
    );
}

export default AboutScreen;