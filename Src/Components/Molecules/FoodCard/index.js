import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {FoodDummy1, StarOn, StarOff} from '../../../Assets';
import {Colors, Fonts, resWidth} from '../../../Utils';
import {Rating} from '../../Atoms';

const FoodCard = ({image, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapRating}>
        <Rating />
        <Text style={styles.valueRating}>4.5</Text>
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
    width: 200,
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 12,
    paddingLeft: 8,
    fontSize: resWidth(15),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    letterSpacing: 0.5,
  },
  wrapRating: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 16,
  },
  valueRating: {
    fontSize: 12,
    fontFamily: Fonts.primary[400],
    color: Colors.text.secondary,
    marginLeft: 4,
  },
});
