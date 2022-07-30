import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import {Colors, Fonts, resWidth} from '../../../Utils';
import {IconArrowDown} from '../../../Assets/icons';
import SelectDropdown from 'react-native-select-dropdown';

const SelectPicker = ({
  title,
  data,
  onSelect,
  renderCustomizedButtonChild,
  renderCustomizedRowChild,
  searchPlaceHolder,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={styles.wrap}>
        <Text style={styles.title}>{title}</Text>
        <SelectDropdown
          data={data}
          buttonStyle={styles.wrapDropdown}
          onSelect={onSelect}
          // custom button dropdown
          renderCustomizedButtonChild={renderCustomizedButtonChild}
          // custom list dropdown
          renderCustomizedRowChild={renderCustomizedRowChild}
          renderDropdownIcon={IconArrowDown}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.wrapDropDown}
          rowStyle={styles.LineDropdown}
          selectedRowStyle={styles.dropdownWhenSelected}
          search
          searchInputStyle={styles.wrapSearchDropdown}
          searchPlaceHolder={searchPlaceHolder}
          searchPlaceHolderColor={'black'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  wrap: {
    flex: 1,
  },
  title: {
    fontSize: resWidth(14),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    marginBottom: 4,
  },
  wrapDropdown: {
    width: '100%',
    paddingVertical: 0,
    backgroundColor: 'white',
    paddingHorizontal: 0,
    borderColor: Colors.border.gray,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  wrapCustomButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
    backgroundColor: '#f8f8f8',
  },
  labelCustomButton: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    opacity: 0.8,
  },
  dropdownWhenSelected: {backgroundColor: 'rgba(0,0,0,0.1)'},
  LineDropdown: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    height: 50,
  },
  stylingBarisdropdown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  textdropdown: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    marginHorizontal: 12,
  },
  wrapSearchDropdown: {
    backgroundColor: '#ffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 24,
    borderRadius: 10,
  },
});

export default SelectPicker;
