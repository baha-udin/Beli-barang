import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Header,
  TextInputCustom,
  ButtonCustom,
  Gap,
} from '../../Components/Atoms';
import {Colors, resHeight, resWidth, Fonts, useForm} from './../../Utils';
import {showMessage} from 'react-native-flash-message';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {Authentication} from '../../../Firebase';
import {useDispatch, useSelector} from 'react-redux';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const validateRegister = () => {
    console.log('data form: ', form);
    if (form.name == '') {
      showMessage({
        message: 'Ups nama lengkap masih kosong nih, Yuk diisi dulu ya',
        type: 'danger',
      });
    } else if (!form.email) {
      showMessage({
        message: 'Email masih kosong nih, yuk diisi dulu ya',
        type: 'danger',
      });
    } else if (!form.password) {
      showMessage({
        message: 'Password kosong nih, yuk di isi dulu passwordnya',
        type: 'danger',
      });
    } else {
      createUserWithEmailAndPassword(Authentication, form.email, form.password)
        .then(response => {
          const user = response.user;
          dispatch({type: 'SET_REGISTER', value: form});
          showMessage({
            message: 'Register berhasil',
            type: 'success',
          });
          navigation.replace('RegisterAddress');
        })
        .catch(error => {
          const errorCode = error.code;
          console.log(errorCode);
          // switch (errorCode) {
          //   case errorCode === 'auth/email-already-exists':
          //     return showMessage({
          //       message: 'Email kamu sudah terdaftar nih, yuk langsung Login',
          //       type: 'danger',
          //     });
          //     navigation.navigate('Register');
          //   case errorCode === 'auth/invalid-email':
          //     return showMessage({
          //       message: 'email tidak valid, yuk gunakan email yang valid',
          //       type: 'danger',
          //     });
          //   case errorCode === 'auth/weak-password':
          //     return showMessage({
          //       message: 'Pastikan password lebih dari 6 karakter ya..',
          //       type: 'danger',
          //     });
          //   case errorCode === 'auth/email-already-in-use':
          //     return showMessage({
          //       message: 'email sudah terdaftar nih, yuk langsung login..',
          //       type: 'danger',
          //     });
          //   default:
          //     return showMessage({
          //       message: 'Email kamu sudah terdaftar nih, yuk langsung Login',
          //       type: 'danger',
          //     });
          // }
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header
        title={'Register'}
        subtitle="Let's Begin"
        onBack={() => navigation.navigate('Login')}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.wrapPhoto}>
              <Text style={styles.labelPhoto}>Add Photo</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TextInputCustom
          label={'Full name:'}
          placeholder={`what's your name`}
          value={form.name}
          onChangeText={value => setForm('name', value)}
          iconName="account"
        />
        <TextInputCustom
          label={'Email:'}
          placeholder={`input your email here`}
          value={form.email}
          onChangeText={value => setForm('email', value)}
          keyboardType={'email-address'}
          iconName="email"
        />
        <TextInputCustom
          label={'Password:'}
          placeholder={`input your password here...`}
          secureTextEntry={true}
          value={form.password}
          onChangeText={value => setForm('password', value)}
          iconName="shield-lock-outline"
        />
        <Gap height={20} />
        <ButtonCustom text={'Continue'} onPress={validateRegister} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
  },
  content: {
    marginVertical: '20%',

    marginHorizontal: resWidth(20),
    paddingHorizontal: resWidth(12),
    paddingVertical: resHeight(20),
    backgroundColor: 'white',
    borderRadius: 12,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    marginBottom: 12,
  },
  textInput: {
    paddingHorizontal: 16,
    borderColor: Colors.border.black,
    borderWidth: 0.7,
    borderRadius: 10,
    paddingVertical: resHeight(10),
    color: Colors.text.primary,
    fontSize: 13,
    letterSpacing: 1,
  },
  buttonLogin: {
    backgroundColor: Colors.background.primary,
    paddingVertical: resHeight(10),
    borderRadius: 8,
    marginTop: resHeight(16),
  },
  buttonRegister: {
    backgroundColor: Colors.background.gray,
    paddingVertical: resHeight(10),
    borderRadius: 8,
    marginTop: resHeight(8),
  },
  labelButton: {
    color: Colors.text.white,
    textAlign: 'center',
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[500],
  },
  photo: {
    alignItems: 'center',
  },
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderColor: Colors.border.gray,
    borderStyle: 'dashed',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapPhoto: {
    width: 90,
    height: 90,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.gray2,
  },
  labelPhoto: {
    fontFamily: Fonts.primary[300],
    fontSize: 13,
    color: Colors.text.inactive,
    textAlign: 'center',
  },
});

export default Register;
