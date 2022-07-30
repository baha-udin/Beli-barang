import React, {useState} from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import {
  ButtonCustom,
  Gap,
  Header,
  TextInputCustom,
} from '../../Components/Atoms';
import {Colors, resHeight, resWidth, Fonts} from './../../Utils';
import {showMessage} from 'react-native-flash-message';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Authentication} from '../../../Firebase';

const Login = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleLogin = () => {
    if (!user.email || user.email.length <= 8) {
      showMessage({
        message: 'Email masih kosong / tidak valid nih.., isi yang benar ya',
        type: 'danger',
      });
    } else if (!user.password || user.password.length <= 6) {
      showMessage({
        message: 'Gunakan password minimal 6 karakter ya...',
        type: 'danger',
      });
    } else {
      signInWithEmailAndPassword(Authentication, user.email, user.password)
        .then(response => {
          const user = response.user;
          console.log(user);
          showMessage({
            message: 'Login berhasil',
            type: 'success',
          });
          navigation.navigate('Menu');
        })
        .catch(error => {
          const errorCode = error.code;
          console.log(errorCode);
          if (
            errorCode === 'auth/invalid-email' ||
            errorCode === 'auth/user-not-found'
          ) {
            showMessage({
              message: 'Email kamu belum terdaftar nih, yuk daftar dulu',
              type: 'danger',
            });
          }
          if (errorCode === 'auth/wrong-password') {
            showMessage({
              message: 'Password salah nih, gunakan password yang benar ya',
              type: 'danger',
            });
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header title={'Login'} subtitle="Let's Begin" />
      <ScrollView style={styles.content}>
        <TextInputCustom
          label="Email:"
          placeholder={'Input your email here..'}
          value={user.email}
          onChangeText={value => setUser('email', value)}
          keyboardType="email-address"
        />
        <TextInputCustom
          label="Password:"
          placeholder={'input password here...'}
          secureTextEntry={true}
          value={user.password}
          onChangeText={value => setUser('password', value)}
        />
        <Gap height={10} />
        <ButtonCustom text={'Login'} onPress={handleLogin} />
        <Gap height={20} />
        <ButtonCustom
          text={'Create new Account'}
          onPress={() => navigation.navigate('Register')}
          color={Colors.background.gray}
        />
      </ScrollView>
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
