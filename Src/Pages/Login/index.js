import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../Components/Molecules';
import {Colors, resHeight, resWidth, Fonts} from './../../Utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header title={'Login'} subtitle="Let's Begin" />
      <View style={styles.content}>
        {/* section email */}
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <TextInput placeholder="input your email" style={styles.textInput} />
        </View>
        {/* section password */}
        <View style={styles.section}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            placeholder="input your password"
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.replace('Menu')}>
          <Text style={styles.labelButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.replace('Register')}>
          <Text style={styles.labelButton}>Create new Account</Text>
        </TouchableOpacity>
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
});
