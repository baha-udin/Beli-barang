import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  TextInputCustom,
  ButtonCustom,
  Gap,
} from '../../Components/Atoms';
import {Colors, resHeight, resWidth, Fonts} from './../../Utils';

const RegisterAddress = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header
        title={'Address'}
        subtitle="Make sure it’s valid"
        onBack={() => navigation.navigate('Register')}
      />
      <View style={styles.content}>
        <TextInputCustom
          label="Whatsapp number"
          placeholder="input number here..."
        />
        <TextInputCustom label="Address" placeholder="input your address" />
        <TextInputCustom
          label="House number"
          placeholder="input your specific house number"
        />

        <Gap height={20} />
        <ButtonCustom
          text={'Register Now'}
          // onPress={() => navigation.replace('RegisterAddress')}
        />
      </View>
    </View>
  );
};

export default RegisterAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
  },
  content: {
    flexDirection: 'column',
    marginTop: '20%',
    marginHorizontal: resWidth(20),
    paddingHorizontal: resWidth(12),
    paddingVertical: resHeight(20),
    backgroundColor: 'white',
    borderRadius: 12,
  },
});
