import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreensA from '../screens/ScreensA';
import ScreensB from '../screens/ScreensB';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider, Box, FormControl, Input, Button } from "native-base";
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>Click Me</Button>
      </Box>
    </NativeBaseProvider>
  );
}


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home-outline'
                : 'ios-server-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detalis" component={ScreensA} />
        <Tab.Screen name="Settings" component={ScreensB} />
      </Tab.Navigator>
    </NavigationContainer>
  );



}
//navigation Simples
// return (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={ScreensA} options={{ title: 'Inicio' }} />
//       <Stack.Screen name="Details" component={ScreensB} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );