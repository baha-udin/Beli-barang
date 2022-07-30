import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors, Fonts, resWidth} from '../../../Utils';
import {Rating} from '../../Atoms';

const ItemListFood = ({image, items, rating, price, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={image} style={styles.img} />
        <View>
          <Text style={styles.title}>Cherry Healty</Text>
          <Text style={styles.price}>Rp . 25.000</Text>
        </View>
      </View>
      <View>
        {items && <Text style={styles.totalItem}>{items} Items</Text>}
        {rating && <Rating />}
      </View>
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  title: {
    fontSize: resWidth(15),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
  },
  price: {
    fontSize: resWidth(13),
    fontFamily: Fonts.primary[400],
    color: Colors.text.secondary,
  },
  totalItem: {
    fontSize: resWidth(13),
    fontFamily: Fonts.primary[400],
    color: Colors.text.secondary,
  },
});
