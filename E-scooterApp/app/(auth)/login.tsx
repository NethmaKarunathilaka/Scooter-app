import React,{useState} from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert} from 'react-native';
import { Link } from 'expo-router';
import {useRouter} from 'expo-router';
import UserInput from '../../components/UserInput';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useRouter();

  const handleLogin = async () => {
    const registeredUser = await AsyncStorage.getItem('user');

    if(registeredUser && username && password){
      const user = JSON.parse(registeredUser);
      if(user.username === username && user.password === password){
        Alert.alert('Success', 'You have successfully logged in!');
        navigation.push({
          pathname:'/(tabs)/home',
          params: {username: username},
        });
      }
      else{
        Alert.alert('Error', 'Invalid username or password');
      }
    }
  };


  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('E:/programming/Mobile APP/Scooter-app/E-scooterApp/assets/images/Scooter-login-page.png')}
      />

      <UserInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        secureTextEntry={false}
        />

      <UserInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}/>


     <Button title="Login" 
     color={'#FF6F00'}
     onPress={handleLogin}/>
     
    <Link href="/register"><Text style={styles.registerText}>Register now</Text></Link>
      
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
    color: '#FF6F00',
    textAlign: 'center',
    marginTop: 30,
  },
});


export default LoginPage;
