import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Button = props => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: props.color }]}
        onPress={props.onPressButton}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  color: '#0080FF'
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    marginTop: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
