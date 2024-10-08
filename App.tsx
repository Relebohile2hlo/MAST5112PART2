import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  course: 'starter' | 'main' | 'dessert';
};

export default function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('starter');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [total, setTotal] = useState(0);

  const addItem = () => {
    const newItem: MenuItem = {
      id: Math.random().toString(),
      name,
      description,
      price: parseFloat(price),
      course: course as 'starter' | 'main' | 'dessert',
    };

    setMenuItems((prevItems) => [...prevItems, newItem]);
    setTotal((prevTotal) => prevTotal + newItem.price);
    setName('');
    setDescription('');
    setPrice('');
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name} ({item.course})</Text>
      <Text>{item.description}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Coastal Table Menu</Text>

      {/* Input fields for adding menu items */}
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
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      
      {/* Course Selection */}
      <View style={styles.buttonContainer}>
        <Button title="Starter" onPress={() => setCourse('starter')} />
        <Button title="Main" onPress={() => setCourse('main')} />
        <Button title="Dessert" onPress={() => setCourse('dessert')} />
      </View>

      {/* Add Item Button */}
      <Button title="Add Item" onPress={addItem} />

      {/* List of added items */}
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
      />

      {/* Total Price */}
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#e9ecef',
    padding: 10,
    marginVertical: 8,
  },
  itemName: {
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});






