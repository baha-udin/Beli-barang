import React, {useEffect} from 'react';
import {StyleSheet, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Src/Router';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import Store from './Src/Redux/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  LogBox.ignoreLogs(['Warning: ...']);

  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Router />
      </Provider>
      <FlashMessage position="top" animationDuration={400} />
    </NavigationContainer>
  );
};

export default App;
