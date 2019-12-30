import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const INCREMENT_VALUE = 1
const reducer = (state, action) => {
    // state === {count: int}
    // action === { type: add_count || minus_count, payload: +1 || -1}
    switch(action.type) {
        case 'add_count':
            return {...state, count: state.count + action.payload}
        case 'minus_count':
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (<View>
        <Button title="Increase" onPress={() => {
            dispatch({type: 'add_count', payload:1});
        }} />
        <Button title="Decrease" onPress={() => {
            dispatch({type: 'minus_count', payload:-1});
        }} />
        <Text> Current Count: {state.count} </Text>
    </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen
