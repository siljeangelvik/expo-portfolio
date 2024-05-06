import {StyleSheet} from 'react-native';

const IntersectingViewsStyling = StyleSheet.create({
    root: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        height: 200,
        width: 200,
        borderRadius: 16,
        padding: 16,
        borderWidth: 8,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    item: {
        borderWidth: 4,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 48,
        width: 48,
        borderRadius: 8,
    },
    row: {
        display: 'flex',
        borderWidth: 1,
        borderColor: 'red'
    },
    column: {
        borderWidth: 1,
        borderColor: 'green'
    }
});

export default IntersectingViewsStyling;