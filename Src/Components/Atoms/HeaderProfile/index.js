import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Colors, Fonts, resHeight, resWidth} from '../../../Utils';

const HeaderProfile = ({imgProfile, greeting, name}) => {
  return (
    <View style={styles.wrapHeader}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.sectionLeft}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity>
        <Image source={imgProfile} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomColor: Colors.border.gray,
    borderBottomWidth: 0.2,
    backgroundColor: 'white',
  },
  sectionLeft: {},
  greeting: {
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[400],
    color: Colors.text.secondary,
  },
  name: {
    fontSize: resHeight(18),
    fontFamily: Fonts.primary[500],
    color: Colors.text.primary,
  },
});
