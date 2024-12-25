import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>fLy</Text>
      <Link href="/(auth)/login" style={styles.button}>
        Go to About screen
      </Link>

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
    fontSize: 70,
    color: '#fff',
  },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
});