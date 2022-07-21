import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Src/Router';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
