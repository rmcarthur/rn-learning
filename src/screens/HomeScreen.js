import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome to my home HomeScreen</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => console.log('Button Pressed')}
      />
      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
  //<Text style={styles.text}>Hey it me</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
