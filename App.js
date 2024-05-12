// src/App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import HomeScreen from './src/pages/HomeScreen';
import AboutScreen from './src/pages/AboutScreen';
import ProjectsScreen from './src/pages/ProjectsScreen';
import ContactScreen from './src/pages/ContactScreen';
import {useFonts} from 'expo-font';

const Stack = createStackNavigator();

const App = () => {

    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    });

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Navbar/>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="About" component={AboutScreen}/>
                    <Stack.Screen name="Projects" component={ProjectsScreen}/>
                    <Stack.Screen name="Contact" component={ContactScreen}/>
                </Stack.Navigator>
                <Footer/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;