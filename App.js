// src/App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import AboutScreen from './src/pages/AboutScreen';
import ProjectsScreen from './src/pages/ProjectsScreen';
import ContactScreen from './src/pages/ContactScreen';
import Navbar from './src/components/Navbar';

const Stack = createStackNavigator();

const App = () => {
    return (
           <NavigationContainer>
               <Navbar />
               <Stack.Navigator>
                   <Stack.Screen name="Home" component={HomeScreen}/>
                   <Stack.Screen name="About" component={AboutScreen}/>
                   <Stack.Screen name="Projects" component={ProjectsScreen}/>
                   <Stack.Screen name="Contact" component={ContactScreen}/>
               </Stack.Navigator>
           </NavigationContainer>
    );
}

export default App;