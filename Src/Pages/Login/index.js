import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Header} from '../../Components/Molecules';
import {Colors, resHeight, resWidth, Fonts} from './../../Utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header title={'Login'} subtitle="Let's Begin" />
      <View style={styles.content}>
        <Text>Login</Text>
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
  },
});
