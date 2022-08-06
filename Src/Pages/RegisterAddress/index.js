import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import {
  Header,
  TextInputCustom,
  ButtonCustom,
  Gap,
  SelectPicker,
} from '../../Components/Atoms';
import {showMessage} from 'react-native-flash-message';
import {Colors, resHeight, resWidth, Fonts, useForm} from './../../Utils';

const baseUrl = 'https://dev.farizdotid.com/api/daerahindonesia';

const RegisterAddress = ({navigation}) => {
  const [listProvinsi, setListProvinsi] = useState([]);

  const [data, setData] = useForm({
    phoneNumber: '',
    province: '',
    city: '',
    district: '',
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
        showMessage({
          message: 'Nomor hp masih kosong nih, yuk diisi dulu ya..',
          type: 'danger',
        });
      } else if (!data.provinsi) {
        showMessage({
          message: 'pilih provinsi dulu ya..',
          type: 'danger',
        });
      } else if (!data.city) {
        showMessage({
          message: 'Kolom kota masih kosong nih, yuk diisi dulu ya..',
          type: 'danger',
        });
      } else if (!data.district) {
        showMessage({
          message: 'Kolom kecamatan masih kosong nih, yuk diisi dulu ya..',
          type: 'danger',
        });
      } else if (!data.address) {
        showMessage({
          message:
            'Alamat lengkap kamu diisi dulu ya, biar pesanan kamu cepet sampainya...',
          type: 'danger',
        });
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
            setData({...data, province: selectedItem.nama});
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
          value={data.city}
          onChangeText={value => setData('city', value)}
        />
        <TextInputCustom
          label="Kecamatan:"
          placeholder="dimana kecamatan anda"
          value={data.district}
          onChangeText={value => setData('district', value)}
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
    marginVertical: '5%',
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
    fontSize: 14,
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
