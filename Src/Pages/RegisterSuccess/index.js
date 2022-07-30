import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SuccessIlustration} from './../../Assets/images';
import {ButtonCustom} from './../../Components/Atoms';
import {Fonts, resHeight, Colors} from '../../Utils';

const RegisterSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={SuccessIlustration} style={styles.image} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>Yeay! Completed</Text>
        <Text style={styles.description}>
          Now you are able to order some foods as a self-reward
        </Text>
        <ButtonCustom
          text={'Find Foods'}
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
    </View>
  );
};

export default RegisterSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
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
