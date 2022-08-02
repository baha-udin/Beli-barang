import React, {useEffect} from 'react';
import {StyleSheet, LogBox, useColorScheme, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Src/Router';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const isLightTheme = useColorScheme() == 'black';
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={isLightTheme ? 'black' : 'white'}
      />
      <NavigationContainer>
        <Router />
        <FlashMessage position="top" animationDuration={400} />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
