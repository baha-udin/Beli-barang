import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlustOrderEmpty} from './../../../Assets/images';
import {ButtonCustom, Gap} from '../../Atoms';
import {Fonts, resHeight, Colors} from '../../../Utils';

const EmptyOrder = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Image source={IlustOrderEmpty} style={styles.image} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>Ouch! Hungry</Text>
        <Text style={styles.description}>
          Seems like you have not ordered any food yet
        </Text>
        <Gap height={40} />
        <ButtonCustom
          text={'Find Foods'}
          onPress={() => navigation.navigate('Menu', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 200,
    height: 222,
  },
  wrapText: {
    marginTop: resHeight(30),
    paddingHorizontal: '10%',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.primary[500],
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.primary[300],
    color: Colors.text.inactive,
    textAlign: 'center',
    marginBottom: 24,
  },
});
