import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Platform} from 'react-native';
import {Fonts, Colors, resWidth} from '../../../Utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextInputCustom = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  iconName,
}) => {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <View style={styles.section}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapInput}>
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={Colors.text.secondary}
          secureTextEntry={secureTextEntry}
        />
        <Icon style={styles.icon} name={iconName} />
      </View>
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
  wrapInput: {
    backgroundColor: Colors.background.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'android' ? 8 : 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: Colors.background.gray,
    marginRight: 8,
  },
  textInput: {
    color: Colors.text.primary,
    fontSize: 13,
    letterSpacing: 1,
  },
});
