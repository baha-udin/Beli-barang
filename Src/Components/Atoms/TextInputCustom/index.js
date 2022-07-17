import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Fonts, Colors, resWidth, resHeight} from '../../../Utils';

const TextInputCustom = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    marginBottom: 12,
  },
  textInput: {
    paddingHorizontal: 16,
    borderColor: Colors.border.black,
    borderWidth: 0.7,
    borderRadius: 10,
    paddingVertical: resHeight(10),
    color: Colors.text.primary,
    fontSize: 13,
    letterSpacing: 1,
  },
});
