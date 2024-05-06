// src/pages/HomeScreen/index.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalStyling from '../../styling/globalStyling';

const HomeScreen = () => {

    const [isLightMode, setLightMode] = useState(true);

    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity
                onPress={() => setLightMode(!isLightMode)}
                style={{backgroundColor: isLightMode ? "white" : "black"}}
            >
                <Text>Press me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={GlobalStyling.button}>Button</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;