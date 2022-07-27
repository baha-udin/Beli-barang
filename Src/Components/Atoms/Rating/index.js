import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StarOn, StarOff} from '../../../Assets';
import {Fonts, Colors} from '../../../Utils';

const Rating = () => {
  return (
    <View style={styles.wrapStar}>
      <View style={styles.star}>
        <StarOn />
        <StarOn />
        <StarOn />
        <StarOn />
        <StarOff />
      </View>
      <Text style={styles.valueRating}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  wrapStar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  star: {
    flexDirection: 'row',
  },
  valueRating: {
    fontSize: 12,
    fontFamily: Fonts.primary[400],
    color: 'black',
    opacity: 0.5,
    paddingLeft: 8,
  },
});
