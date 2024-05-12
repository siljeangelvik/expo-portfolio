import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import NeuButtonStyling from './neuButtonStyling'; // Assuming NeuButton.js is in the same directory

const NeuButton = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
                style={NeuButtonStyling.neumorphismButton}
                activeOpacity={0.7} // Adjust opacity on press
            >
                {/* Your button content goes here */}
            </TouchableOpacity>
        </View>
    );
};

export default NeuButton;