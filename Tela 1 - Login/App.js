import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginButton, setShowLoginButton] = useState(true);

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    setShowLoginButton(false);
  };

  const handleLogout = () => {
    setShowLoginButton(true);
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {showLoginButton ? (
        <>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons name="shield-crown" size={64} color="black" />
            <Text style={styles.logoText}>barber shop</Text>
          </View>
          <View style={styles.iconInput}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <View style={styles.iconInput}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Voltar ao login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center'
  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 35,
    backgroundColor: '#B0C4DE',
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
