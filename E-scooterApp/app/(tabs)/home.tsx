import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button,SafeAreaView, TouchableOpacity,} from 'react-native';
import { FAB } from 'react-native-paper';

// Define the type for each scooter item
type ScooterItem = {
  id: string;
  name: string;
  image: string;
  status: string;
  description: string;
};

// Mock data for e-scooters
const scooterData: ScooterItem[] = [
  {
    id: '1',
    name: 'Scooter X1',
    image: 'https://via.placeholder.com/150',
    status: 'Available',
    description: 'Fast and reliable scooter for urban commutes.',
  },
  {
    id: '2',
    name: 'Scooter Pro',
    image: 'https://via.placeholder.com/150',
    status: 'Unavailable',
    description: 'Perfect for long-distance travel with extra features.',
  },
  {
    id: '3',
    name: 'Eco Scooter',
    image: 'https://via.placeholder.com/150',
    status: 'Available',
    description: 'Environmentally friendly and cost-effective.',
  },
];

// Define the HomePage component
const HomePage = () => {
  // Function to render each scooter item as a card
  const renderItem = ({ item }: { item: ScooterItem }) => (
   <TouchableOpacity  style={styles.card}> 
  
      {/* Image */}
      <Image source={{ uri: item.image }} style={styles.image} />
      {/* Scooter Name */}
      <Text style={styles.title}>{item.name}</Text>
      {/* Scooter Availability Status */}
      <Text style={styles.status}>Status: {item.status}</Text>
      {/* Scooter Description */}
      <Text style={styles.description}>{item.description}</Text>
    
    </TouchableOpacity>
  );
//
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Hello nethma!</Text>
      <FlatList
        data={scooterData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
       <FAB
        style={styles.fab}
        icon="plus" // Icon for the button
        onPress={() => console.log('Add new scooter')} // Action when pressed
      />
      </View>
     
  );
};

// Styling for the Home Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light background
    padding: 10,
  },
 
  listContainer: {
    paddingBottom: 20, // Add spacing at the bottom of the list
  },
  card: {
    backgroundColor: '#ffffff', // White card background
    borderRadius: 10, // Rounded corners
    padding: 15, // Internal padding
    marginVertical: 10, // Space between cards
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 2, // Shadow for Android
  },
  image: {
    width: '100%', // Full width
    height: 150, // Fixed height
    borderRadius: 8, // Rounded corners for the image
    marginBottom: 10, // Space below the image
  },
  title: {
   
    fontSize: 18, // Text size for title
    fontWeight: 'bold', // Bold text
    marginBottom: 5, // Space below the title
  },
  status: {
    fontSize: 14, // Text size for status
    color: '#FF6F00', // Blue text color
    marginBottom: 10, // Space below the status
  },
  description: {
    fontSize: 14, // Text size for description
    color: '#6c757d', // Gray text color
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF6F00', // Button color
  },
});

export default HomePage;
