import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

const PaymentOptions = [
  { id: 1, name: 'Dinheiro' },
  { id: 2, name: 'Debito' },
  { id: 3, name: 'Credito' },
  { id: 4, name: 'Pix' },
];

const PaymentOptionsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' }}>Opções de Pagamento</Text>
      <FlatList
        data={PaymentOptions}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.paymentOptionContainer}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = {
  paymentOptionContainer: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#e1f2fb',
    borderRadius: 5,
  },
};

export default PaymentOptionsScreen;
