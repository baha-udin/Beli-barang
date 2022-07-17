import React, {useState, useEffect} from 'react';
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
  SelectPicker,
} from '../../Components/Atoms';
import {Colors, resHeight, resWidth, Fonts} from './../../Utils';
import SelectDropdown from 'react-native-select-dropdown';

const ListCities = ['Yogyakarta', 'Solo', 'Semarang', 'Magelang'];

const RegisterAddress = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [provinsi, setProvinsi] = useState('');
  const [kota, setKota] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [address, setAddress] = useState('');

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
          label="Nomor WhatsApp"
          placeholder="masukkan nomor w.a aktif"
          value={phoneNumber}
          onChangeText={value => setPhoneNumber(value)}
        />
        <TextInputCustom
          label="Provinsi"
          placeholder="masukkan domisili anda"
          value={provinsi}
          onChangeText={value => setProvinsi(value)}
        />
        <TextInputCustom
          label="Kota"
          placeholder="dimana kota anda"
          value={kota}
          onChangeText={value => setKota(value)}
        />
        <TextInputCustom
          label="Kecamatan"
          placeholder="masukkan nama kecamatan"
          value={kecamatan}
          onChangeText={value => setKecamatan(value)}
        />
        <TextInputCustom
          label="Alamat lengkap"
          placeholder="input your address"
          value={address}
          onChangeText={value => setAddress(value)}
        />
        <Gap height={20} />
        <ButtonCustom
          text={'Register Now'}
          onPress={() => navigation.navigate('RegisterSuccess')}
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
