import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.text1Style}>Child 1</Text>
        <Text style={styles.text2Style}>Child 2 </Text>
        <Text style={styles.text3Style}>Child 3</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor: 'black',
        marginVertical: 15,
        marginHorizontal: 25,
        alignItems: 'flex-start',
        // changes how children are aligned
        flexDirection: 'row',
        // sets direction of children flexing
        //justifyContent: 'space-around',
        // sets child justification
        height: 200,
    },
    text1Style: {
        borderWidth:3,
        borderColor: 'red',
    },

    text2Style: {
        borderWidth:3,
        borderColor: 'red',
        position: 'absolute',
        fontSize: 18,
        ...StyleSheet.absoluteFillObject,

    },


    text3Style: {
        borderWidth:3,
        borderColor: 'red',
    }



});

export default BoxScreen;