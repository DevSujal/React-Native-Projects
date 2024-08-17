import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={container}>
      <Text style={text}>{title}</Text>
    </View>
  );
};

export default Header;

const {container, text} = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#004080",
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
