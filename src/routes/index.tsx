import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensA from './../screens/ScreensA';
import ScreensB from './../screens/ScreensB';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ScreensA} />
        <Stack.Screen name="Details" component={ScreensB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}