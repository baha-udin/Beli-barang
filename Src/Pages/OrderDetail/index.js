import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonCustom, Gap, Header} from '../../Components/Atoms';
import {ItemListFood, ItemValue} from './../../Components/Molecules';
import {Colors, Fonts, resWidth} from '../../Utils';

const OrderDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        onBack={() => navigation.navigate('FoodDetail')}
        title="Payment"
        subtitle="You deserve better meal"
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <Gap height={16} />
        <ItemListFood />
        <Gap height={16} />
        <View style={styles.detailTransaction}>
          <Text style={styles.label}>Details Transaction</Text>
          <Gap height={4} />
          <ItemValue label="Cherry Healthy" type="currency" value={183900} />
          <ItemValue label="Driver" type="currency" value={20000} />
          <ItemValue label="Tax 10%" type="currency" value={18300} />
          <ItemValue label="Total Price" type="currency" value={225000} />
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.label}>Deliver to:</Text>
          <Gap height={4} />
          <ItemValue label="Name" value="Dewangga" />
          <ItemValue label="Phone Number" value={'085643935283'} />
          <ItemValue label="Address" value={'Jl. Diponegoro'} />
          <ItemValue label="House no." value={'32'} />
          <ItemValue label="City" value={'Semarang'} />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonCustom text="Checkout Now" />
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.whiteBackground,
  },
  content: {
    flex: 1,
    marginTop: 16,
    paddingTop: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  label: {
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
  },
  footer: {
    height: 70,
    paddingHorizontal: 24,
  },
});
