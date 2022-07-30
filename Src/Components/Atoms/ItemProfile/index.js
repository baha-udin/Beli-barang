import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {IconArrowRight} from '../../../Assets';
import {Colors, Fonts, resWidth} from '../../../Utils';

const ItemProfile = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <IconArrowRight />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  title: {
    fontSize: resWidth(14),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
  },
});

export default ItemProfile;
