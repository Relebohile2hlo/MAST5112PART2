import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ChefScreen = () => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Calamari', price: 55 },
        { id: 2, name: 'Oysters', price: 65 },
        { id: 3, name: 'Grilled Prawns', price: 90 },
    ]);
    const [newItem, setNewItem] = useState({ name: '', price: 0 });

    const addItem = () => {
        if (newItem.name && newItem.price > 0) {
            setMenuItems([...menuItems, { id: menuItems.length + 1, ...newItem }]);
            setNewItem({ name: '', price: 0 });
        } else {
            alert('Please provide valid item details.');
        }
    };

    const removeItem = (id) => {
        setMenuItems(menuItems.filter(item => item.id !== id));
    };

    const confirmOrder = () => {
        alert('Order Confirmed!');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Item Name"
                value={newItem.name}
                onChangeText={(text) => setNewItem({ ...newItem, name: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Item Price"
                keyboardType="numeric"
                value={newItem.price ? newItem.price.toString() : ''}
                onChangeText={(text) => setNewItem({ ...newItem, price: parseFloat(text) })}
           

             />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={newItem.description}
                onChangeText={(text) => setNewItem({ ...newItem, description: text })}
            />
            <Button title="Add Item" color="#FF6347" onPress={addItem} />
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text>{item.name} - R{item.price}</Text>
                        <Button title="Remove" onPress={() => removeItem(item.id)} />
                    </View>
                )}
            />
            <Button title="Confirm Order" onPress={confirmOrder} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderColor: '#ddd' },
    itemContainer: { padding: 15, backgroundColor: '#F9F9F9', marginVertical: 5, borderRadius: 5 },
});

export default ChefScreen;