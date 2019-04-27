import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const Input = props => {
  return (
    <View style={styles.inputWrapper}>
      {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
      <TextInput
        onChangeText={props.onChangeText}
        style={styles.input}
        value={props.value}
        keyboardType={props.keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 3,
    borderRadius: 3,
    borderColor: '#0080FF'
  },
  inputWrapper: {
    width: '100%',
    marginVertical: 10
  },
  label: {
    color: '#0080FF',
    fontWeight: 'bold'
  }
});
