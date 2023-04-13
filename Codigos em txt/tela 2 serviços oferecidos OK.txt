import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const services = [
  { id: '1', name: 'Corte de cabelo masculino', price: 'R$ 40,00' },
  { id: '2', name: 'Corte de cabelo feminino', price: 'R$ 30,00' },
  { id: '3', name: 'Barba', price: 'R$ 80,00' },
  { id: '4', name: 'Cabelo e Barba', price: 'R$ 70,00' },
  { id: '5', name: 'Corte Americano', price: 'R$ 35,00' },
  { id: '6', name: 'Corte militar', price: 'R$ 30,00' },
  { id: '7', name: 'Corte Degradê', price: 'R$ 45,00' },
  { id: '8', name: 'Corte Moicano', price: 'R$ 40,00' },
  { id: '9', name: 'Corte sufista', price: 'R$ 37,00' },
  { id: '10', name: 'Corte Shaggy', price: 'R$ 49,50' },
  { id: '11', name: 'Corte Pompadour', price: 'R$ 50,00' },
  { id: '12', name: 'Corte Jaca liso', price: 'R$ 34,00' },
  { id: '13', name: 'Corte maracá', price: 'R$ 30,00' },

];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Serviços oferecidos</Text>
      <View style={styles.serviceContainer}>
        <FlatList
          data={services}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelected(item.id)}>
              <View style={[styles.item, selected === item.id && styles.selected]}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                {selected === item.id && <Feather name="check-circle" size={24} color="green" />}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center"
  },
  serviceContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selected: {
    backgroundColor: '#f0f0f0',
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
