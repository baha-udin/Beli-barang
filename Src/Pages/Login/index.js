import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  ButtonCustom,
  Gap,
  Header,
  TextInputCustom,
} from '../../Components/Atoms';
import {Colors, resHeight, resWidth, Fonts} from './../../Utils';

const Login = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChangeEmail = value => {
    setUser({...user, email: value});
  };

  const onChangePassword = value => {
    setUser({...user, password: value});
  };

  const handleLogin = () => {
    try {
      if (!user.email) {
        Alert.alert('Email masih kosong nih, yuk diisi dulu');
      } else if (!user.password || user.password.length <= 6) {
        Alert.alert('Pastikan password sudah terisi & minimal 6 karakter ya..');
      } else {
        navigation.navigate('Register');
        console.log('Login berhasil ya');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header title={'Login'} subtitle="Let's Begin" />
      <View style={styles.content}>
        {/* section email */}
        <TextInputCustom
          label="Email:"
          placeholder={'Input your email here..'}
          value={user.email}
          onChangeText={onChangeEmail}
        />
        {/* section password */}
        <TextInputCustom
          label="Password:"
          placeholder={'input password here...'}
          secureTextEntry={true}
          value={user.password}
          onChangeText={onChangePassword}
        />
        <Gap height={20} />
        <ButtonCustom text={'Login'} onPress={handleLogin} />
        <Gap height={10} />
        <ButtonCustom
          text={'Create new Account'}
          onPress={() => navigation.navigate('Register')}
          color={Colors.background.gray}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
  },
  content: {
    flexDirection: 'column',
    marginTop: '10%',
    marginHorizontal: resWidth(20),
    paddingHorizontal: resWidth(12),
    paddingVertical: resHeight(20),
    backgroundColor: 'white',
    borderRadius: 12,
  },
  buttonLogin: {
    backgroundColor: Colors.background.primary,
    paddingVertical: resHeight(10),
    borderRadius: 8,
  },
  buttonRegister: {
    backgroundColor: Colors.background.gray,
    paddingVertical: resHeight(10),
    borderRadius: 8,
  },
  labelButton: {
    color: Colors.text.white,
    textAlign: 'center',
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[500],
  },
});
