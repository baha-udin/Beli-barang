import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {Gap, Header} from '../../Components/Atoms';
import {
  EmptyOrder,
  ProfileTabSection,
  OrderTabSection,
} from '../../Components/Molecules';
import {Colors} from '../../Utils';

const Order = ({navigation}) => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.container}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={{flex: 1}}>
          <Header title={'Your Orders'} subtitle="Wait for the best meal" />
          <Gap height={'5%'} />
          <OrderTabSection />
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.whiteBackground,
  },
});
