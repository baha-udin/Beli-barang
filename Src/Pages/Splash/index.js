import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, resWidth} from './../../Utils';
import {ImageSplash} from './../../Assets';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 500);

  return (
    <View style={styles.container}>
      <ImageSplash />
      <Text style={styles.title}>Beli Barang</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    fontSize: resWidth(28),
    fontFamily: Fonts.primary[500],
    color: Colors.text.white,
  },
});
