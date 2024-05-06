import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.navItem}>
                <Text style={styles.navText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')} style={styles.navItem}>
                <Text style={styles.navText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.navItem}>
                <Text style={styles.navText}>Contact</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#EBECF0', // Anti-Flash White
        borderRadius: 20,
        shadowColor: '#A3B1C6', // Powder Blue
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 60, // Adjust the top margin to create space between navbar and top of screen
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

export default Navbar;