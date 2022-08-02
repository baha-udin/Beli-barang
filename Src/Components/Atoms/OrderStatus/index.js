import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {resWidth, Colors, Fonts} from '../../../Utils';

const OrderStatus = ({orderCode, status}) => {
  return (
    <View style={styles.wrapOrderStatus}>
      <View>
        <Text style={styles.titleOrder}>Order Status</Text>
        <Text style={styles.kodeOrder}>{orderCode}</Text>
      </View>
      {status === 'paid' ? (
        <Text style={styles.statusOrderSucces}>{status}</Text>
      ) : (
        <Text style={styles.statusOrderCancel}>{status}</Text>
      )}
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  wrapOrderStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  titleOrder: {
    fontSize: resWidth(`14`),
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    marginBottom: 4,
  },
  kodeOrder: {
    fontSize: resWidth(`14`),
    fontFamily: Fonts.primary[400],
    color: Colors.text.secondary,
  },
  statusOrderSucces: {
    fontSize: resWidth(`14`),
    fontFamily: Fonts.primary[400],
    color: Colors.text.green,
  },
  statusOrderCancel: {
    fontSize: resWidth(`14`),
    fontFamily: Fonts.primary[400],
    color: Colors.text.red,
  },
});
