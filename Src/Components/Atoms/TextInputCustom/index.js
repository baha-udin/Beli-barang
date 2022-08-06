import React from 'react';
import {StyleSheet, Text, View, TextInput, Platform} from 'react-native';
import {Fonts, Colors, resWidth} from '../../../Utils';

const TextInputCustom = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
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
        keyboardType={keyboardType}
        placeholderTextColor={Colors.text.secondary}
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
    fontSize: resWidth(14),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    marginBottom: 8,
  },
  textInput: {
    paddingHorizontal: 16,
    borderColor: Colors.border.gray,
    borderWidth: 0.7,
    borderRadius: 10,
    paddingVertical: Platform.OS === 'android' ? 8 : 14,
    color: Colors.text.primary,
    fontSize: 13,
    letterSpacing: 1,
  },
});
