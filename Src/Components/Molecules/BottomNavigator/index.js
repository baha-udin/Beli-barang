import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeInActive,
  IconOrder,
  IconOrderInActive,
  IconProfile,
  IconProfileInActive,
} from '../../../Assets';
import {Colors, resWidth} from '../../../Utils';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IconHome /> : <IconHomeInActive />;
    case 'Order':
      return focus ? <IconOrder /> : <IconOrderInActive />;
    case 'Profile':
      return focus ? <IconProfile /> : <IconProfileInActive />;
    default:
      return <IconHome />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: Colors.border.gray,
        borderTopWidth: 0.25,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon label={label} focus={isFocused} />
            <Text
              style={{
                color: isFocused ? '#219EBC' : '#E2E2E2',
                paddingTop: 8,
                fontSize: resWidth(13),
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 40,
  },
});
