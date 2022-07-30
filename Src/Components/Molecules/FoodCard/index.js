import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts, resWidth} from '../../../Utils';
import {Rating} from '../../Atoms';

const FoodCard = ({image, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapRating}>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'white',
    marginRight: 16,
    shadowColor: '#F2F2F2',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 40,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 12,
    paddingLeft: 8,
    fontSize: resWidth(14),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    letterSpacing: 0.5,
  },
  wrapRating: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 16,
  },
});
