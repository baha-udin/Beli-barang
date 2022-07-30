import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {Colors, Fonts} from './../../../Utils';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemFood} from '../../Atoms';
import {
  FoodDummy6,
  FoodDummy7,
  FoodDummy8,
  FoodDummy9,
  FoodDummy10,
  FoodDummy11,
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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemFood
        image={FoodDummy7}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy6}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy8}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy9}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy10}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy11}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemFood
        image={FoodDummy9}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy7}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy8}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemFood
        image={FoodDummy9}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy13}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemFood
        image={FoodDummy11}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
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
    marginLeft: '7%',
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

export default HomeTabSection;
