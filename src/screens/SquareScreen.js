import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const [redValue, setRedValue] = useState(0)
    const [greenValue, setGreenValue] = useState(0)
    const [blueValue, setBlueValue] = useState(0)

    const COLOR_INCREMENT = 12

    const setColor = (color, change) => {
        //color === 'red', 'green', 'blue'

        switch(color) {
            case 'Red':
                redValue + change > 255 || redValue + change < 0 ? null : setRedValue(redValue + change)
                return;
            case 'Green':
                greenValue + change > 255 || greenValue + change < 0 ? null : setGreenValue(greenValue + change)
                return;
            case 'Blue':
                blueValue + change > 255 || blueValue + change < 0 ? null : setBlueValue(blueValue + change)
                return;
        };
    };

    return( <View>
        <ColorCounter 
           onIncrease={()=> setColor('Red', COLOR_INCREMENT)}
           onDecrease={()=> setColor('Red',  -1* COLOR_INCREMENT)}
           color='Red'/>
        <ColorCounter 
           color='Green' 
           onIncrease={()=> setColor('Green', COLOR_INCREMENT )}
           onDecrease={()=> setColor('Green', -1*COLOR_INCREMENT)}
           />
        <ColorCounter 
           color='Blue'
           onIncrease={()=> setColor('Blue', COLOR_INCREMENT)}
           onDecrease={()=> setColor('Blue', -1*COLOR_INCREMENT)}
           />
        <View 
            style={
                { height: 150, 
                  width:150, 
                  backgroundColor: `rgb(${redValue},${greenValue},${blueValue})` 
                }
               }
            />
    </View>
    );
};

const style = StyleSheet.create({})


export default SquareScreen