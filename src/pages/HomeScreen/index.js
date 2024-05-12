// src/pages/HomeScreen/index.js
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
// import Slider from '../../components/Slider';
// import GlobalStyling from '../../styling/globalStyling';
import HeaderStyling from '../../styling/headerStyling';

const HomeScreen = () => {
    // const [isLightMode, setLightMode] = useState(true);
    return (
        <ScrollView>
            <View>
                <Text style={{fontFamily: 'Inter-Black', fontSize: 30}}>Inter Black</Text>
                <Text style={{fontFamily: 'Inter-Black', fontSize: 16}}>Inter Black</Text>
                <Text style={HeaderStyling.title}>Home Screen</Text>
                {/*<Text style={HeaderStyling.paragraph}>Hello, my name is...</Text>*/}
                {/*<Text style={HeaderStyling.heading}>Avena Dev</Text>*/}

                {/*<TouchableOpacity*/}
                {/*    onPress={() => setLightMode(!isLightMode)}*/}
                {/*    style={{backgroundColor: isLightMode ? "white" : "black"}}*/}
                {/*>*/}
                {/*    <Text>Press me</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*<TouchableOpacity>*/}
                {/*    <Text style={GlobalStyling.button}>Button</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        </ScrollView>
    );
}

export default HomeScreen;