import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const baseWidth = 360;
const baseHeight = 640;

export const resHeight = height => {
  return (Dimensions.get('window').height * height) / baseHeight;
};

export const resWidth = width => {
  return (Dimensions.get('window').width * width) / baseWidth;
};
