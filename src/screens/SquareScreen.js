import React, { useReducer } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'
import { TabRouter } from 'react-navigation';

const COLOR_INCREMENT = 12

const reducer = (state, action) => {
    // state === {red: int, green: int, blue: int}
    // action === {type: 'red' || 'green' || 'blue', payload: COLOR_INCREMENT}
    // console.log(state)
    // console.log(action)
    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.amount < 0
                ? state
                : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.amount < 0
                ? state
                : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.amount < 0
                ? state
                : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {
    
    const [state, dispatch] = useReducer(reducer, {red: 0, green:0, blue:0})
    const { red, green, blue } = state;

    return( <View>
        <ColorCounter 
           onIncrease={()=> dispatch({ type: 'change_red', payload: COLOR_INCREMENT})}
           onDecrease={()=> dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
           color='Red'/>
        <ColorCounter 
           color='Green' 
           onIncrease={()=> dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}
           onDecrease={()=> dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
           />
        <ColorCounter 
           color='Blue'
           onIncrease={()=> dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})} 
           onDecrease={()=> dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})} 
           />
        <View 
            style={
                { height: 150, 
                  width:150, 
                  backgroundColor: `rgb(${red},${green},${blue})` 
                }
               }
            />
    </View>
    );
};

const style = StyleSheet.create({})


export default SquareScreen