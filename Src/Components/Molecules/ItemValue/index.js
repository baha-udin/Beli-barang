import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, resWidth} from '../../../Utils';
import {Number} from '../../Atoms';

const ItemValue = ({label, value, valueColor = '#020202', type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(valueColor)} />
      ) : (
        <Text style={styles.value(valueColor)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {
    fontSize: resWidth(14),
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  value: color => ({
    fontSize: resWidth(14),
    fontFamily: 'Poppins-Regular',
    color: Colors.text.primary,
    opacity: 0.8,
  }),
});
