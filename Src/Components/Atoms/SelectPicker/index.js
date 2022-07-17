import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, resHeight, Fonts, resWidth} from '../../../Utils';
import SelectDropdown from 'react-native-select-dropdown';
import {IconArrowDown} from '../../../Assets/icons';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const SelectPicker = ({label, data, onSelect}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>
        <SelectDropdown
          data={data}
          buttonStyle={styles.wrapButton}
          buttonTextStyle={styles.labelButton}
          renderDropdownIcon={IconArrowDown}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropDown}
          rowTextStyle={styles.textDropDown}
          onSelect={onSelect}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
    </View>
  );
};

export default SelectPicker;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    marginBottom: 12,
  },
  wrapButton: {
    backgroundColor: 'white',
    borderColor: Colors.border.gray,
    borderWidth: 1,
    borderRadius: 12,
    width: '100%',
  },
  labelButton: {
    textAlign: 'left',
    color: Colors.text.primary,
    fontSize: 15,
  },
  dropDown: {
    backgroundColor: Colors.background.white,
    borderRadius: 10,
    height: '30%',
    marginTop: '-20%',
    paddingVertical: 8,
  },
  textDropDown: {
    fontSize: resWidth(16),
    letterSpacing: 0.3,
    color: Colors.text.primary,
    fontFamily: Fonts.primary[400],
    paddingVertical: 8,
  },
});
