import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export const Avatar = props => {
  const uri =
    'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png';
  return (
    <View style={styles.avatarWrapper}>
      <Image style={styles.avatar} source={{ uri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100
  }
});
