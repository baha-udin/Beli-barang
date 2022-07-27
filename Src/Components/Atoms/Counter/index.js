import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconMinus, IconPlus} from '../../../Assets';
import {Colors, resWidth} from '../../../Utils';

const Counter = () => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity>
        <IconMinus />
      </TouchableOpacity>
      <Text style={styles.itemValue}>1</Text>
      <TouchableOpacity>
        <IconPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemValue: {
    paddingHorizontal: 10,
    fontSize: resWidth(15),
    color: Colors.text.primary,
  },
});
