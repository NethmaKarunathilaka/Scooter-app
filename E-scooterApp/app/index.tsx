import React,{useEffect} from 'react';
import { Text, View, StyleSheet,StatusBar} from 'react-native';
import { Link } from 'expo-router';
import { useRouter} from 'expo-router';


const Index = () => {
  
  const navigation = useRouter();

  useEffect(() => {
    StatusBar.setHidden(true);

    const timer = setTimeout(() => {
      navigation.replace('/(auth)/login');
    }, 2000);

    return () => clearTimeout(timer);

  }, [navigation]);


  return (
    
    <View style={styles.container}>
     
      <Text style={styles.text}>fLy</Text>
     {/* <Link href="/(auth)/login" style={styles.button}>
        Go to About screen
      </Link> */}
    

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 80 ,
    color: '#fff',
  },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
});

export default Index;