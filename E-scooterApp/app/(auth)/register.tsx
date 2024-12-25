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
        source={require('E:/programming/Mobile APP/Scooter-app/E-scooterApp/assets/images/Scooter-register-page.png')}
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

      
     <Button title="Register"
     color={'#FF6F00'}
     onPress={() => {/* handle login */}} />
     
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
