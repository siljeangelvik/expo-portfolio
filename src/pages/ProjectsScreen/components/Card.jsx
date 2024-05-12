import React from 'react';
import {View, Text, StyleSheet, Image, Linking, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

const Card = ({ project }) => {
    const { title, date, description, imageUrl, githubUrl, websiteUrl, linkedInUrl } = project;

    // Function to open a URL in the default browser
    const openUrl = (url) => {
        Linking.openURL(url);
    };

    return (
        <View style={styles.card}>
            <Image source={imageUrl} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.metadata}>{date}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="GitHub"
                    onPress={() => openUrl(githubUrl)}
                    buttonStyle={styles.button}
                />
                <Button
                    title="Website"
                    onPress={() => openUrl(websiteUrl)}
                    buttonStyle={[styles.button, { backgroundColor: 'orangered' }]}
                />
                <Button
                    title="LinkedIn"
                    onPress={() => openUrl(linkedInUrl)}
                    buttonStyle={styles.button}
                />
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 16,
        width: windowWidth <= 600 ? windowWidth - 32 : (windowWidth - 48) / 2, // Responsive width calculation
        maxWidth: 400,
        elevation: 4, // for Android shadow
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 12,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    metadata: {
        fontSize: 14,
        color: '#777',
        marginBottom: 8,
    },
    description: {
        marginBottom: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '100%',
    },
});

export default Card;