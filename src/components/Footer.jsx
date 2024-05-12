import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/Logo';

const Footer = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Logo/>
            </TouchableOpacity>
            <Text style={styles.copyright}>Copyright © 2024 <Text style={styles.savanna}>Savanna.</Text> All Rights Reserved.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 'auto',
        backgroundColor: '#EBECF0', // Anti-Flash White
        borderRadius: 20,
        shadowColor: '#A3B1C6', // Powder Blue
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 'auto',
        paddingHorizontal: 'auto',
        paddingVertical: 'auto',
        marginTop: 'auto', // Adjust the top margin to create space between navbar and top of screen
    },
    copyright: {
        fontSize: '9px',
        fontWeight: 'light',
        color: '#696969', // Dim Gray
    },
    savanna: {
        fontSize: '9px',
        fontWeight: 'bold',
        color: '#2b2b2b', // Dim Gray
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#696969', // Dim Gray
    },
});

export default Footer;