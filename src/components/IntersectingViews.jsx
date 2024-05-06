import React from "react";
import {View, Text} from "react-native";
import IntersectingViewsStyling from '../styling/interstectingViewsStyling';

function IntersectingViews() {
    return (
        <View style={IntersectingViewsStyling.root}>
            <View style={IntersectingViewsStyling.row}>
                <View style={IntersectingViewsStyling.column}>
                    {/* zIndex: 0 */}
                    <View style={[IntersectingViewsStyling.item, {backgroundColor: '#696969'}]}></View>
                    {/* zIndex: 1 */}
                    <View style={[IntersectingViewsStyling.item, {backgroundColor: '#A3B1C6', marginTop: -16}]}/>
                    {/* zIndex: 2 */}
                    <View style={[IntersectingViewsStyling.item, {backgroundColor: '#BABECC', marginTop: -16}]}/>
                    {/* zIndex: 3 */}
                    <View style={[IntersectingViewsStyling.item, {backgroundColor: '#E0E5EC', marginTop: -16}]}/>
                    {/* zIndex: 4 */}
                    <View style={[IntersectingViewsStyling.item, {backgroundColor: '#EBECF0', marginTop: -16}]}/>
                    {/* zIndex: 5 */}
                    <View style={[IntersectingViewsStyling.item, {backgroundColor: '#FF4500', marginTop: -16}]}/>
                </View>
                <View style={IntersectingViewsStyling.column}>
                    <Text>Dim Gray</Text>
                    <Text>Powder Blue</Text>
                    <Text>French Gray</Text>
                    <Text>Alice Blue</Text>
                    <Text>Anti-Flash White</Text>
                    <Text>Tangelo</Text>
                </View>
            </View>
        </View>
    );
}

export default IntersectingViews;