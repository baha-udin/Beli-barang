import React, {useState} from 'react';
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
import {showMessage, hideMessage} from 'react-native-flash-message';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {Authentication} from '../../../Firebase';

const Register = ({navigation}) => {
  const [label, setLabel] = useState('Continue');
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const onChangeFullname = value => {
    setUser({...user, fullName: value});
  };

  const onChangeEmail = value => {
    setUser({...user, email: value});
  };

  const onChangePassword = value => {
    setUser({...user, password: value});
  };

  const validateRegister = () => {
    setLabel('Sedang memproses...');
    if (!user.fullName) {
      showMessage({
        message: 'Ups nama lengkap masih kosong nih, Yuk diisi dulu ya',
        type: 'danger',
      });
      setLabel('Continue');
    } else if (!user.email) {
      showMessage({
        message: 'Email masih kosong nih, yuk diisi dulu ya',
        type: 'danger',
      });
      setLabel('Continue');
    } else if (!user.password) {
      showMessage({
        message: 'Password kosong nih, yuk di isi dulu passwordnya',
        type: 'danger',
      });
      setLabel('Continue');
    } else {
      createUserWithEmailAndPassword(Authentication, user.email, user.password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          // ...
          showMessage({
            message: 'Register berhasil',
            type: 'success',
          });
          navigation.replace('RegisterAddress');
          setLabel('Continue');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);

          if (errorCode === 'auth/email-already-exists') {
            showMessage({
              message: 'Email kamu sudah terdaftar nih, yuk langsung Login',
              type: 'danger',
            });
          }
          if (errorCode === 'auth/invalid-email') {
            showMessage({
              message: 'email tidak valid, yuk gunakan email yang valid',
              type: 'danger',
            });
          }
          if (errorCode === 'auth/weak-password') {
            showMessage({
              message: 'Pastikan password lebih dari 6 karakter ya..',
              type: 'danger',
            });
          }

          //pastikan password lebih dari 6 karakter ya..
          setLabel('Continue');
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
      <View style={styles.content}>
        {/* Section upload photo */}
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
          value={user.fullName}
          onChangeText={onChangeFullname}
        />
        <TextInputCustom
          label={'Email:'}
          placeholder={`input your email here`}
          value={user.email}
          onChangeText={onChangeEmail}
        />
        <TextInputCustom
          label={'Password:'}
          placeholder={`input your password here...`}
          secureTextEntry={true}
          value={user.password}
          onChangeText={onChangePassword}
        />
        <Gap height={20} />
        <ButtonCustom text={label} onPress={validateRegister} />
      </View>
    </View>
  );
};

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
