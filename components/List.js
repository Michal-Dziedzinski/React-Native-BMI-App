import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const List = props => {
  return (
    <View style={styles.weightRow}>
      <Text style={styles.weightValue}>{props.item.value}</Text>
      <Text style={styles.weightDate}>{props.item.date}</Text>
      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons
          name='md-create'
          size={16}
          color='gray'
          onPress={props.onEditItem}
        />
      </TouchableOpacity>
      <TouchableOpacity style={(styles.iconWrapper, styles.closeIcon)}>
        <Ionicons
          name='md-close'
          size={16}
          color='gray'
          onPress={props.onCloseItem}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  weightRow: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  weightValue: {
    fontWeight: 'bold'
  },
  weightDate: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  iconWrapper: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeIcon: {
    marginLeft: 15
  }
});
