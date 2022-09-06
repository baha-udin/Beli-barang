import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconMinus, IconPlus} from '../../../Assets';
import {Colors, resWidth} from '../../../Utils';

const Counter = ({itemValue}) => {
  const [totalItem, setTotalItem] = useState(0);
  const handleMinus = () => {};
  const handlePlus = () => {
    return setTotalItem + 1;
    console.log(totalItem);
  };
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={handleMinus}>
        <IconMinus />
      </TouchableOpacity>
      <Text style={styles.itemValue}>{itemValue}</Text>
      <TouchableOpacity onPress={handlePlus}>
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
