import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';
import {FoodDummy6} from '../../../Assets';
import {Colors, Fonts} from '../../../Utils';

const ItemListFood = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.wrapImage}>
          <Image source={FoodDummy6} style={styles.image} />
          <View style={styles.wrapText}>
            <Text style={styles.title}>Zuppa Soup</Text>
            <Text style={styles.price}>Rp. 25.000</Text>
          </View>
        </View>
        <View style={styles.wrapRating}>
          <Rating />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  wrapImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  wrapText: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
  },
  price: {
    fontSize: 13,
    fontFamily: Fonts.primary[400],
    color: Colors.text.secondary,
  },
  wrapRating: {},
});
