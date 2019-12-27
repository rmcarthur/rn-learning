import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text style={styles.textStyle}>Hi there!</Text>;
    const name = 'Rex'
    const nameGreeting = <Text style={styles.subheaderStyle}> My name is {name}</Text>

    return (
    <View>
        <Text style={styles.textStyle}> This is the components Screen</Text>
        {nameGreeting}
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subheaderStyle: {
        fontSize: 20 
    }
})

export default ComponentsScreen