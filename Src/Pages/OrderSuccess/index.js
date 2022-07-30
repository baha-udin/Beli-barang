import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {OrderIlustration} from './../../Assets/images';
import {ButtonCustom, Gap} from './../../Components/Atoms';
import {Fonts, resWidth, resHeight, Colors} from '../../Utils';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Image source={OrderIlustration} style={styles.image} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>You’ve Made Order</Text>
        <Text style={styles.description}>
          Just stay at home while we are preparing your best foods
        </Text>
        <Gap height={30} />
        <ButtonCustom
          text={'Order Other Foods'}
          onPress={() => navigation.navigate('Menu')}
        />
        <Gap height={10} />
        <ButtonCustom
          text={'View My Order'}
          onPress={() => navigation.navigate('Menu', {screen: 'Order'})}
          color="#8D92A3"
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

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
    height: 180,
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
