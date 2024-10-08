import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const MenuScreen = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = () => {
    const newItem = {
      dishName,
      description,
      course,
      price,
    };
    setMenuItems([...menuItems, newItem]);
    // Clear inputs
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Menu Item</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Dish Name" 
        value={dishName} 
        onChangeText={setDishName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Description" 
        value={description} 
        onChangeText={setDescription} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Course (Starters, Mains, Desserts)" 
        value={course} 
        onChangeText={setCourse} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Price" 
        value={price} 
        onChangeText={setPrice} 
        keyboardType="numeric" 
      />
      <Button title="Add to Menu" onPress={addMenuItem} />

      <Text style={styles.totalCount}>Total Menu Items: {menuItems.length}</Text>
      
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <Text style={styles.menuItem}>
            {item.dishName} - {item.description} ({item.course}) - ${item.price}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  totalCount: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default MenuScreen;

