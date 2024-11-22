import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to The Coastal Table</Text>
            <Button
                title="Guest Menu"
                color="#Ff25ff"
                onPress={() => navigation.navigate('GuestMenu', { category: 'starters' })}
            />
            <Button
                title="Chef Menu"
                color="#FF6347"
                onPress={() => navigation.navigate('ChefMenu')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C0DEEE' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});