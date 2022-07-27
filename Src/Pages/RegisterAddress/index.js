import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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
  const onChangePhoneNumber = value => {
    setData({...data, phoneNumber: value});
  };

  const onChangeKota = value => {
    setData({...data, kota: value});
  };

  const onChangeKecamatan = value => {
    setData({...data, kecamatan: value});
  };
  const onChangeAddress = value => {
    setData({...data, address: value});
  };

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
    navigation.navigate('Menu');
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
          onChangeText={onChangePhoneNumber}
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
          onChangeText={onChangeKota}
        />
        <TextInputCustom
          label="Kecamatan:"
          placeholder="dimana kecamatan anda"
          value={data.kecamatan}
          onChangeText={onChangeKecamatan}
        />
        <TextInputCustom
          label="Alamat lengkap:"
          placeholder="input your address"
          value={data.address}
          onChangeText={onChangeAddress}
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
