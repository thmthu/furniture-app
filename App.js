import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation'
const Stack = createNativeStackNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Bottom TabNavigation'
                    component={BottomTabNavigation}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "150",
        zIndex: 99,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

