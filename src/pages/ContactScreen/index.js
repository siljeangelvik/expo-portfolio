// src/pages/ContactScreen/index.js
import React from 'react';
import {View, Text} from 'react-native';
import HeaderStyling from '../../styling/headerStyling';

const ContactScreen = () => {
    return (
        <View>
            <Text style={HeaderStyling.title}>Contact Screen</Text>
            <Text style={HeaderStyling.paragraph}>Hello, my name is...</Text>
            <Text style={HeaderStyling.heading}>Avena Dev</Text>
        </View>
    );
}

export default ContactScreen;