// App.tsx

import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, ScrollView, Image, StyleSheet, Alert } from 'react-native';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [total, setTotal] = useState(0);

  const addMenuItem = () => {
    // Validate inputs
    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter a dish name.');
      return;
    }
    if (description.trim() === '') {
      Alert.alert('Error', 'Please enter a description.');
      return;
    }
    if (price.trim() === '' || isNaN(parseFloat(price))) {
      Alert.alert('Error', 'Please enter a valid price.');
      return;
    }

    const newItem: MenuItem = {
      id: Math.random(), // Replace with a better unique ID generator
      name,
      description,
      price: parseFloat(price),
    };
    setMenuItems([...menuItems, newItem]);
    setTotal(total + newItem.price); // Update total price
    resetInputs();
  };

  const resetInputs = () => {
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <Image source={require('./assets/icon.png')} style={styles.logo} />

      <Text style={styles.title}>Add Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Button title="Add Item" onPress={addMenuItem} />

      <Text style={styles.title}>Menu Items</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: '100%',
    height: 150, // Adjust height as needed
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  menuItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default App;





