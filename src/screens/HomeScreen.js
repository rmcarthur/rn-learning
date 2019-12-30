import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'


const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Welcome to my home HomeScreen</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}/>
      <Button onPress={() => navigation.navigate('List')}
        title="Go to List Demo" />
      <Button onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo" />
      <Button onPress={() => navigation.navigate('Counter')}
        title="Go to Screen Demo" />
      <Button onPress={() => navigation.navigate('Colors')}
        title="Go to Colors Demo" />
      <Button onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo" />
      <Button onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo" />
      <Button onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo" />
    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
