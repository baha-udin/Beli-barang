import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ButtonCustom, Gap, Header} from '../../Components/Atoms';
import {ItemListFood, ItemValue} from '../../Components/Molecules';
import {Colors, Fonts, resWidth} from '../../Utils';
import {FoodDummy12} from '../../Assets';

const OrderSummary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header
        onBack={() => navigation.navigate('FoodDetail')}
        title="Payment"
        subtitle="You deserve better meal"
      />
      <View style={styles.content}>
        <View style={styles.wrapOrder}>
          <Text style={styles.label}>Item Ordered</Text>
          <Gap height={4} />
          <ItemListFood
            type="order-summary"
            image={FoodDummy12}
            items={10}
            price={35000}
          />
          <Gap height={16} />
          <View style={styles.detailTransaction}>
            <Text style={styles.label}>Details Transaction:</Text>
            <Gap height={4} />
            <ItemValue label="Cherry Healthy" type="currency" value={183900} />
            <ItemValue label="Driver" type="currency" value={20000} />
            <ItemValue label="Tax 10%" type="currency" value={18300} />
            <ItemValue
              label="Total Price"
              type="currency"
              value={225000}
              color="#1ABC9C"
            />
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.wrapDelivers}>
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
        <ButtonCustom
          text="Checkout Now"
          onPress={() => navigation.navigate('OrderSummary')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.whiteBackground,
  },
  content: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: Colors.background.whiteBackground,
  },
  label: {
    fontSize: resWidth(16),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    letterSpacing: 0.4,
  },
  wrapOrder: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  wrapDelivers: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: '5%',
  },
});
