import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy1, IconBackWhite} from '../../Assets';
import {Colors} from '../../Utils';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
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
        <Text>Masuk pak eko</Text>
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
    paddingTop: '13%',
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
    paddingHorizontal: 16,
  },
});
