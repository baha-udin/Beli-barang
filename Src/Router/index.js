import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EditProfile,
  FoodDetail,
  Home,
  Login,
  Onboarding,
  Order,
  OrderDetail,
  OrderSuccess,
  OrderSummary,
  Profile,
  Register,
  RegisterAddress,
  RegisterSuccess,
  Splash,
} from './../Pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Order} name="Order" />
      <Tab.Screen component={Profile} name="Profile" />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Menu} name="Menu" />
      <Stack.Screen component={Splash} name="Splash" />
      <Stack.Screen component={Onboarding} name="Onboarding" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={RegisterAddress} name="RegisterAddress" />
      <Stack.Screen component={RegisterSuccess} name="RegisterSuccess" />
      <Stack.Screen component={OrderDetail} name="OrderDetail" />
      <Stack.Screen component={OrderSuccess} name="OrderSuccess" />
      <Stack.Screen component={OrderSummary} name="OrderSummary" />
      <Stack.Screen component={EditProfile} name="EditProfile" />
      <Stack.Screen component={FoodDetail} name="FoodDetail" />
    </Stack.Navigator>
  );
};

const Refactor = () => {
  return (
    <View>
      <Text style={{color: '#0000'}}>Halo bossku</Text>
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({});
