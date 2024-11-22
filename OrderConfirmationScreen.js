import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function OrderConfirmationScreen({ route, navigation }) {
    const { selectedItems, totalItems, totalPrice } = route.params;
    const [items, setItems] = useState(selectedItems);
    const [itemsCount, setItemsCount] = useState(totalItems);
    const [priceTotal, setPriceTotal] = useState(totalPrice);

    const removeItem = (itemToRemove) => {
        const updatedItems = items.filter((item) => item.id !== itemToRemove.id);
        setItems(updatedItems);
        setItemsCount(itemsCount - 1);
        setPriceTotal(priceTotal - itemToRemove.price);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Confirmation</Text>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>R{item.price}</Text>
                        <Button title="Remove" onPress={() => removeItem(item)} />
                    </View>
                )}
            />
            <View style={styles.summary}>
                <Text>Total Items: {itemsCount}</Text>
                <Text>Total Price: R{priceTotal}</Text>
                <Button title="Back to Menu" onPress={() => navigation.goBack()} />
                <Button title="Confirm Order" onPress={() => alert('Order Confirmed!')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    itemContainer: { padding: 15, backgroundColor: '#F9F9F9', marginVertical: 5, borderRadius: 5 },
    itemName: { fontWeight: 'bold', fontSize: 18 },
    summary: { marginTop: 20, padding: 10, backgroundColor: '#F1F1F1', borderRadius: 5 },
});