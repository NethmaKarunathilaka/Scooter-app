import React , {useState} from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import { Link } from 'expo-router';
import UserInput from '../../components/UserInput';

type RegisterPageProps = {
  navigation: any;
};

const RegisterPage =() => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:');
  };
  
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('E:/programming/Mobile APP/Scooter-app/E-scooterApp/assets/images/Scooter-register-page.png')}
      />

      <UserInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        secureTextEntry={false}
      />

      <UserInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry={false}
      />

      <UserInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
     <Button title="Register"
     color={'#FF6F00'}
     onPress={handleRegister} />
     
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
 
  registerText: {
    color: '#FF8C00',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default RegisterPage;
