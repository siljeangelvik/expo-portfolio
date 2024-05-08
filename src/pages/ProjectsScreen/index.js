// src/pages/ProjectsScreen/index.js
import React from 'react';
import {View, Text} from 'react-native';
import HeaderStyling from '../../styling/headerStyling';

const ProjectsScreen = () => {
    return (
        <View>
            <Text style={HeaderStyling.title}>Projects Screen</Text>
            <Text style={HeaderStyling.paragraph}>Hello, my name is...</Text>
            <Text style={HeaderStyling.heading}>Avena Dev</Text>
        </View>
    );
}

export default ProjectsScreen;