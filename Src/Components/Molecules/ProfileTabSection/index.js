import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {resHeight, resWidth, Colors, Fonts} from './../../../Utils';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemFood, ItemProfile} from '../../Atoms';
import {
  FoodDummy6,
  FoodDummy7,
  FoodDummy8,
  FoodDummy9,
  FoodDummy10,
  FoodDummy11,
  FoodDummy12,
  FoodDummy13,
} from '../../../Assets';
import {useNavigation} from '@react-navigation/native';
import Profile from '../../../Pages/Profile';

// Custom styling Tab Bar
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemProfile title={'Edit Profile'} />
      <ItemProfile title={'Home Address'} />
      <ItemProfile title={'Security'} />
      <ItemProfile title={'Payments'} />
    </View>
  );
};
const RateUs = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemProfile title={'Rate App'} />
      <ItemProfile title={'Help Center'} />
      <ItemProfile title={'Privacy & Policy'} />
      <ItemProfile title={'Terms & Conditions'} />
    </View>
  );
};

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Rate Us'},
  ]);
  const renderScene = SceneMap({
    1: Account,
    2: RateUs,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={styles.tabView}
    />
  );
};

const styles = StyleSheet.create({
  tabView: {backgroundColor: Colors.text.white},
  indicator: {
    backgroundColor: Colors.background.black,
    height: 3,
    width: '15%',
    marginLeft: '14%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  tabStyle: {},
  tabText: focused => ({
    fontFamily: Fonts.primary[500],
    color: focused ? Colors.text.primary : Colors.text.secondary,
  }),
  wrapTab: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },
});

export default ProfileTabSection;
