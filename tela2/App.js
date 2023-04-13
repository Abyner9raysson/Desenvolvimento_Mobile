import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const services = [
  { id: '1', name: 'Corte de cabelo masculino', price: 'R$ 40,00' },
  { id: '2', name: 'Barba', price: 'R$ 30,00' },
  { id: '3', name: 'Corte de cabelo feminino', price: 'R$ 80,00' },
  { id: '4', name: 'Pacote completo (corte de cabelo e barba)', price: 'R$ 70,00' },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Serviços oferecidos:</Text>
      <ScrollView style={styles.scroll}>
        <FlatList data={services}
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
      </ScrollView>
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
  scroll: {
    flex: 1,
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
