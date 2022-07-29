import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  DummyProfile1,
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from './../../Assets';
import {resHeight, resWidth, Colors, Fonts} from './../../Utils';
import {FoodCard, HomeTabSection} from '../../Components/Molecules';
import {Gap, HeaderProfile, ItemListFood} from './../../Components/Atoms';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderProfile
        greeting={'Good Evening'}
        name={'Clau'}
        imgProfile={DummyProfile1}
      />
      <ScrollView>
        {/* Section Card Food 1 */}
        <View style={styles.wrapCardFood}>
          <Text style={styles.label}>Let's get some of foods</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Gap width={20} />
            <FoodCard
              image={FoodDummy1}
              title="Cherry Healthy"
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy2}
              title="Big Avocado"
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy3}
              title="Sandwich parsley"
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy4}
              title="Cappucino"
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <FoodCard
              image={FoodDummy5}
              title="Sandwich parsley"
              onPress={() => navigation.navigate('FoodDetail')}
            />
            <Gap width={10} />
          </ScrollView>
        </View>

        {/* Section Tab View with list menu */}
        <View style={styles.wrapTabBar}>
          <HomeTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.whiteBackground,
  },

  wrapCardFood: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  label: {
    fontSize: resWidth(14),
    paddingHorizontal: 20,
    paddingBottom: 8,
    fontFamily: Fonts.primary[300],
    color: Colors.text.primary,
    opacity: 0.8,
  },
  wrapTabBar: {
    flex: 1,
  },
});
