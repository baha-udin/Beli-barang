import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {resHeight, resWidth, Colors, Fonts} from '../../../Utils';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemFood, ItemProfile} from '../../Atoms';
import ItemListFood from '../ItemListFood';
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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="in-progress"
        label={'Vietnam Soup'}
        items={5}
        price="250.000"
        image={FoodDummy9}
      />
      <ItemListFood
        type="in-progress"
        label={'Vegan Avocado'}
        items={1}
        price="20.000"
        image={FoodDummy10}
      />
    </View>
  );
};
const PassOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="past-orders"
        label={'Roti owen'}
        image={FoodDummy7}
        items={5}
        price="250.000"
        date="31 Juli 2022"
        status={'Canceled'}
      />
    </View>
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Pass Orders'},
  ]);
  const renderScene = SceneMap({
    1: InProgress,
    2: PassOrders,
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

export default OrderTabSection;
