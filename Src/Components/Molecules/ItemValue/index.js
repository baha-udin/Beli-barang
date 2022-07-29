import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, resWidth} from '../../../Utils';
import {Number} from '../../Atoms';

const ItemValue = ({label, value, color = '#020202', type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(color)} />
      ) : (
        <Text style={styles.value(color)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  label: {
    fontSize: resWidth(13),
    fontFamily: Fonts.primary[300],
    color: Colors.text.primary,
    opacity: 0.9,
  },
  value: color => ({
    fontSize: resWidth(14),
    fontFamily: Fonts.primary[400],
    color: color,
    opacity: 0.7,
    letterSpacing: 0.8,
  }),
});
