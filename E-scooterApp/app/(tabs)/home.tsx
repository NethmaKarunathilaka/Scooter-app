
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import fetchScooterData from '@/services/scooterService';
import {useCount} from '@/context/countContext';
import { useLocalSearchParams } from 'expo-router';



type ScooterItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  status: string;
};


const HomePage = () => {
  const [scooterData, setScooterData] = useState<ScooterItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {count, increment} = useCount();
  const{username} = useLocalSearchParams();

  const countScooters = () => {
    increment();
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchScooterData();
      if (Array.isArray(data)) {
        setScooterData(data);
        setError(null);
      } else {
        setError('Failed to fetch scooter data.');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: ScooterItem }) => (
    <TouchableOpacity style={styles.card} onPress={countScooters}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello {username} !</Text>
      {loading && <Text style={styles.loadingText}>Loading scooters...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {!loading && !error && (
        <FlatList
          data={scooterData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
      <FAB
        style={styles.fab}
        label={`Scooters: ${count}`}
        onPress={() => console.log('count:', count)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6c757d',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: '#FF6F00',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF6F00',
  },
});

export default HomePage;
