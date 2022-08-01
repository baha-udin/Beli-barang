import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts, resWidth} from '../../../Utils';
import {Rating, Number} from '../../Atoms';
/* TYPE: 1. product, 2. order-summary, 3. in-progress, 4. past-orders */

const ItemListFood = ({
  image,
  items,
  rating,
  price,
  label,
  onPress,
  type,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <View style={styles.wrap}>
            <View style={styles.wrapLeft}>
              <View style={styles.wrapImage}>
                <Image source={image} style={styles.img} />
              </View>
              <View style={styles.wrapText}>
                <Text style={styles.title}>{label}</Text>
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <Rating />
          </View>
        );
      case 'order-summary':
        return (
          <View style={styles.wrap}>
            <View style={styles.content}>
              <Image source={image} style={styles.img} />
              <View>
                <Text style={styles.title}>Cherry Healty</Text>
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <View>
              {items && <Text style={styles.totalItem}>{items} Items</Text>}
              {rating && <Rating />}
            </View>
          </View>
        );
      case 'in-progress':
        return (
          <View style={styles.wrap}>
            <View style={styles.content}>
              <Image source={image} style={styles.img} />
              <View>
                <Text style={styles.title}>{label}</Text>
                <Text style={styles.price}>
                  {items} Items - Rp. {price}
                </Text>
              </View>
            </View>
          </View>
        );
      case 'past-orders':
        return (
          <View style={styles.wrap}>
            <View style={styles.content}>
              <Image source={image} style={styles.img} />
              <View>
                <Text style={styles.title}>{label}</Text>
                <Text style={styles.price}>
                  {items} Items - Rp. {price}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.totalItem}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </View>
        );
      default:
        return (
          <View style={styles.wrap}>
            <View style={styles.wrapLeft}>
              <View style={styles.wrapImage}>
                <Image source={image} style={styles.img} />
              </View>
              <View style={styles.wrapText}>
                <Text style={styles.title}>{label}</Text>
                <Text style={styles.price}>Rp. {price}</Text>
              </View>
            </View>
            <Rating />
          </View>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapLeft: {flexDirection: 'row', alignItems: 'center'},
  wrapImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  wrapText: {
    flexDirection: 'column',
    marginLeft: 12,
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
  status: {
    fontSize: resWidth(13),
    fontFamily: Fonts.primary[400],
    color: Colors.text.red,
  },
});
