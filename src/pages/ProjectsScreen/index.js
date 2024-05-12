// src/pages/ProjectsScreen/index.js
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Projects from './components/Projects';
import HeaderStyling from '../../styling/headerStyling';

const ProjectsScreen = () => {
    return (
        <ScrollView>
            <View>
                <Text style={HeaderStyling.title}>My Projects</Text>
                <Projects/>
            </View>
        </ScrollView>
    );
}

export default ProjectsScreen;