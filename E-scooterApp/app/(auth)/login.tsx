import React,{useState} from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert} from 'react-native';
import { Link } from 'expo-router';
import UserInput from '../../components/UserInput';



const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(username==='admin' && password==='admin'){
      Alert.alert('Success', 'You have successfully logged in!');
  };
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


      {/* Login button */}
     <Button title="Login" 
     color={'#FF6F00'}
     onPress={handleLogin}/>
     <Link href="/(tabs)/explore">hello</Link>

      {/* Register link */}
     
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
    marginTop: 10,
  },
});


export default LoginPage;
