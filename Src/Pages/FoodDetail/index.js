import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {FoodDummy1, IconBackWhite} from '../../Assets';
import {Colors, Fonts, resWidth} from '../../Utils';
import {ButtonCustom, Rating, Counter} from './../../Components/Atoms';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ImageBackground source={FoodDummy1} style={styles.imgBackground}>
        <View style={styles.wrapHeader}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate('Menu')}>
            <IconBackWhite />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.main}>
          <View style={styles.mainTitle}>
            <View style={styles.mainTitleLeft}>
              <Text style={styles.title}>Cherry Healty</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <View style={styles.mainDescription}>
            <Text style={styles.textDescription}>
              Makanan khas Bandung yang cukup sering dipesan oleh anak muda
              dengan pola makan yang cukup tinggi dengan mengutamakan diet yang
              sehat dan teratur.
            </Text>
            <View style={styles.wrapIngredients}>
              <Text style={styles.moreDescription}>Ingredients:</Text>
              <Text style={styles.textMoreDescription}>
                Seledri, telur, blueberry, madu.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text style={styles.titleTotal}>Total Price:</Text>
            <Text style={styles.totalPrice}>Rp. 25.000</Text>
          </View>
          <ButtonCustom
            text={'Order now'}
            onPress={() => navigation.navigate('OrderDetail')}
          />
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.whiteBackground,
  },
  imgBackground: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  wrapHeader: {
    paddingTop: Platform.OS === 'android' ? '8%' : '14%',
    paddingLeft: 20,
  },
  back: {
    width: 36,
    borderColor: 'white',
    borderWidth: 1,
    padding: 4,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  main: {flex: 1},
  mainTitle: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    marginBottom: 4,
  },
  mainDescription: {},
  textDescription: {
    color: Colors.text.secondary,
    fontSize: resWidth(14),
    flexWrap: 'wrap',
    textAlign: 'justify',
    lineHeight: 16,
  },
  wrapIngredients: {
    marginTop: 16,
  },
  moreDescription: {
    fontSize: resWidth(14),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  textMoreDescription: {
    fontSize: resWidth(14),
    color: Colors.text.secondary,
  },
  footer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 0.3,
    paddingVertical: 2,
  },
  footerLeft: {
    width: '40%',
  },
  titleTotal: {
    fontSize: 13,
    fontFamily: Fonts.primary[400],
    color: Colors.text.secondary,
  },
  totalPrice: {
    fontSize: 18,
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
  },
});
