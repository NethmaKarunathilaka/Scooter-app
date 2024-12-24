import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import { Link } from 'expo-router';

type RegisterPageProps = {
  navigation: any;
};

const RegisterPage: React.FC<RegisterPageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('E:/programming/Mobile APP/E-scooterApp/assets/images/Scooter-login-page.png')}
      />

      <TextInput
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      {/* Login button */}
     <Button title="Login" onPress={() => {/* handle login */}} />
     <Link href="/(tabs)/explore">hello</Link>

      {/* Register link */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Register now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '40%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  registerText: {
    color: '#FF8C00',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default RegisterPage;