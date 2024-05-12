// src/pages/ContactScreen/index.js
import React from 'react';
import {View, Text} from 'react-native';
import HeaderStyling from '../../styling/headerStyling';

const ContactScreen = () => {
    return (
        <View>
            <Text style={HeaderStyling.title}>Contact</Text>
            <Text style={HeaderStyling.paragraph}>Form and contact details are coming</Text>
        </View>
    );
}

export default ContactScreen;