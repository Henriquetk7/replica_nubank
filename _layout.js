import { Stack } from "expo-router";
import React from 'react-native';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="meusCartoes" options={{
                headerShown: false
            }} />
            <Stack.Screen name="cartaoVirtual" options={{
                headerShown: false
            }} />
            <Stack.Screen name="ajuda" options={{
                headerShown: false
            }} />
        </Stack>
    );
}