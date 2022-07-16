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

const Register = ({navigation}) => {
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
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.wrapPhoto}>
              <Text style={styles.labelPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInputCustom
          label={'Full name:'}
          placeholder={`what's your name`}
        />

        <TextInputCustom
          label={'Email:'}
          placeholder={`input your email here`}
        />

        <TextInputCustom
          label={'Password:'}
          placeholder={`input your password here...`}
          secureTextEntry={true}
        />
        <Gap height={20} />
        <ButtonCustom
          text={'Continue'}
          onPress={() => navigation.replace('RegisterAddress')}
        />
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