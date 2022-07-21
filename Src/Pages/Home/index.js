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
import {Gap, HeaderProfile} from './../../Components/Atoms';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderProfile
        greeting={'Good Evening'}
        name={'Clau'}
        imgProfile={DummyProfile1}
      />
      <Gap height={12} />
      {/* Section Card Food 1 */}
      <View style={styles.wrapCardFood}>
        <Text style={styles.label}>Let's get some food</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={20} />
          <FoodCard image={FoodDummy1} title="Cherry Healthy" />
          <FoodCard image={FoodDummy2} title="Big Avocado" />
          <FoodCard image={FoodDummy3} title="Sandwich parsley" />
          <FoodCard image={FoodDummy4} title="Cappucino" />
          <FoodCard image={FoodDummy5} title="Sandwich parsley" />
          <Gap width={10} />
        </ScrollView>
      </View>

      {/* Section Tab View with list menu */}
      <View style={styles.wrapTabBar}>
        <HomeTabSection />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapCardFood: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  label: {
    fontSize: resWidth(16),
    paddingHorizontal: 20,
    paddingBottom: 12,
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
  },
  wrapTabBar: {
    flex: 1,
  },
});
