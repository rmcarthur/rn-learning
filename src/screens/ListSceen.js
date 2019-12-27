import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 30},
        {name: 'Friend #3', age: 32},
        {name: 'Friend #4', age: 34},
        {name: 'Friend #5', age: 102},
        {name: 'Friend #6', age: 2},
        {name: 'Friend #7', age: 39},
        {name: 'Friend #8', age: 33},
    ]
    return (
    <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
                </Text>
        }} />
    )
    // return (
    //     <View> 
    //         <Text style={styles.StyleSheet}>List Screen</Text>
    //         <Text>List Screen 2</Text>
    //     </View>
    // );  
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 50,
        fontSize: 30
    } 
});

export default ListScreen