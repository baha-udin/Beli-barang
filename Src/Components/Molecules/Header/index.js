import React from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import {Colors, resHeight, resWidth, Fonts} from './../../../Utils';
import {IconBack} from './../../../Assets/icons';

const Header = ({title, subtitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: Platform.OS == 'ios' ? 50 : 20,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: resWidth(20),
  },
  title: {
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[500],
    color: Colors.text.primary,
  },
  subtitle: {
    marginTop: 4,
    fontSize: resWidth(13),
    fontFamily: Fonts.primary[300],
    color: Colors.text.secondary,
  },
});
