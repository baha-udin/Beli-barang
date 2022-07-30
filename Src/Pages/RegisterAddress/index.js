import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import {
  Header,
  TextInputCustom,
  ButtonCustom,
  Gap,
  SelectPicker,
} from '../../Components/Atoms';
import {Colors, resHeight, resWidth, Fonts} from './../../Utils';

const baseUrl = 'https://dev.farizdotid.com/api/daerahindonesia';

const RegisterAddress = ({navigation}) => {
  const [listProvinsi, setListProvinsi] = useState([]);

  const [data, setData] = useState({
    phoneNumber: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    address: '',
  });

  const getDataProvince = async () => {
    try {
      const response = await fetch(`${baseUrl}/provinsi`);
      const json = await response.json();
      setListProvinsi(json.provinsi);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDataProvince();
  }, []);

  const handleRegister = () => {
    try {
      if (!data.phoneNumber) {
        Alert.alert('Nomor hp masih kosong nih, yuk diisi dulu ya..');
      } else if (!data.provinsi) {
        Alert.alert('pilih provinsi dulu ya..');
      } else if (!data.kota) {
        Alert.alert('Kolom kota masih kosong nih, yuk diisi dulu ya..');
      } else if (!data.kecamatan) {
        Alert.alert('Kolom kecamatan masih kosong nih, yuk diisi dulu ya..');
      } else if (!data.address) {
        Alert.alert(
          'Alamat lengkap kamu diisi dulu ya, biar pesanan kamu cepet sampainya...',
        );
      } else {
        navigation.navigate('RegisterSuccess');
        console.log('Login berhasil ya');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header
        title={'Address:'}
        subtitle="Make sure it’s valid"
        onBack={() => navigation.navigate('Register')}
      />
      <ScrollView style={styles.content} showsHorizontalScrollIndicator={false}>
        <TextInputCustom
          label="Nomor WhatsApp:"
          placeholder="masukkan nomor w.a aktif"
          value={data.phoneNumber}
          onChangeText={value => setData('phoneNumber', value)}
          keyboardType={'phone-pad'}
        />
        {/* List PROVINSI */}
        <SelectPicker
          title={'Pilih provinsi:'}
          data={listProvinsi}
          searchPlaceHolder="Cari provinsi"
          onSelect={(selectedItem, index) => {
            setData({...data, provinsi: selectedItem.nama});
          }}
          renderCustomizedButtonChild={(selectedItem, index) => {
            return (
              <View style={styles.wrapCustomButton}>
                <Text style={styles.labelCustomButton}>
                  {selectedItem ? selectedItem.nama : 'cari'}
                </Text>
              </View>
            );
          }}
          renderCustomizedRowChild={(item, index) => {
            return (
              <View style={styles.stylingBarisdropdown} key={index}>
                <Text style={styles.textdropdown}>{item.nama}</Text>
              </View>
            );
          }}
        />
        <TextInputCustom
          label="Kota:"
          placeholder="dimana kota anda"
          value={data.kota}
          onChangeText={value => setData('kota', value)}
        />
        <TextInputCustom
          label="Kecamatan:"
          placeholder="dimana kecamatan anda"
          value={data.kecamatan}
          onChangeText={value => setData('kecamatan', value)}
        />
        <TextInputCustom
          label="Alamat lengkap:"
          placeholder="input your address"
          value={data.address}
          onChangeText={value => setData('address', value)}
        />
        <Gap height={20} />
        <ButtonCustom text={'Register'} onPress={handleRegister} />
      </ScrollView>
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
    marginTop: '5%',
    marginHorizontal: resWidth(20),
    paddingHorizontal: resWidth(16),
    paddingVertical: resHeight(20),
    backgroundColor: 'white',
    borderRadius: 12,
  },
  wrapCustomButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
    backgroundColor: 'white',
  },
  labelCustomButton: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    opacity: 0.6,
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
    fontSize: 14,
    marginHorizontal: 12,
  },
});
