import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Fonts, Colors, resWidth, resHeight} from '../../../Utils';

const ButtonCustom = ({text, onPress, color = '#219EBC'}) => {
  return (
    <TouchableOpacity style={styles.buttonLogin(color)} onPress={onPress}>
      <Text style={styles.labelButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  buttonLogin: color => ({
    backgroundColor: color,
    paddingVertical: resHeight(10),
    paddingHorizontal: 30,
    borderRadius: 8,
  }),
  buttonRegister: {
    backgroundColor: Colors.background.gray,
    paddingVertical: resHeight(10),
    borderRadius: 8,
  },
  labelButton: {
    color: Colors.text.white,
    textAlign: 'center',
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[500],
  },
});
