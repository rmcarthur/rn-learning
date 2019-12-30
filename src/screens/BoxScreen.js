import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (<View style={styles.parentStyle}>
        <View style={styles.view1Style} />
        <View style={styles.view2Style} />
        <View style={styles.view3Style} />
    </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth:3,
        height:206,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view1Style: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },

    view2Style: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        alignSelf:'flex-end'

    },
    view3Style: {
        backgroundColor: 'purple',
        height: 100,
        width: 100,
    }



});

export default BoxScreen;