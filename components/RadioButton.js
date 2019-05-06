import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const RadioButtons = props => {
  return (
    <View style={styles.singleButtonWrapper}>
      <TouchableOpacity
        style={styles.singleButtonWrapper}
        onPress={props.onPress('male')}>
        <View
          style={{
            ...styles.icon,
            backgroundColor: props.currentValue === 'male' ? '#0080FF' : 'white'
          }}
        />
        <Text style={styles.text}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.singleButtonWrapper}
        onPress={props.onPress('female')}>
        <View
          style={{
            ...styles.icon,
            backgroundColor:
              props.currentValue === 'female' ? '#0080FF' : 'white'
          }}
        />
        <Text style={styles.text}>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    alignSelf: 'flex-start',
    marginVertical: 20
  },
  singleButtonWrapper: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 30,
    borderWidth: 2,
    borderColor: '#0080FF'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
