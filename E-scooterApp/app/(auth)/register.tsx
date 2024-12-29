import React , {useState} from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity,Alert} from 'react-native';
import { Link } from 'expo-router';
import {useRouter} from 'expo-router';
import UserInput from '../../components/UserInput';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RegisterPage =() => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useRouter();

  const handleRegister = () => {
    if(!username || !email || !password){
      Alert.alert('Please fill all fields');
      return;
    }

    try{
      const user = {username, password};
      AsyncStorage.setItem('user', JSON.stringify(user));
      Alert.alert('Success', 'You have successfully registered!');
      navigation.push('/(auth)/login');
    }
    catch(error){
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
    

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
