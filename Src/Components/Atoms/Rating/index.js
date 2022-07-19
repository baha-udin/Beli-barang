import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StarOn, StarOff} from '../../../Assets';

const Rating = () => {
  return (
    <View style={styles.wrapStar}>
      <StarOn />
      <StarOn />
      <StarOn />
      <StarOn />
      <StarOff />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  wrapStar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
});
