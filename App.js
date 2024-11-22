import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import ChefScreen from './ChefScreen';
import OrderConfirmationScreen from './OrderConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="GuestMenu" component={MenuScreen} />
                <Stack.Screen name="ChefMenu" component={ChefScreen} />
                <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}






