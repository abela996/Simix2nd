import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EnterNumbers from './screens/EnterNumbers';
import Actions from './screens/Actions';
import LoginHistory from './screens/LoginHistory';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DevicesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2563eb' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="LoginHistory"
        component={LoginHistory}
        options={{ title: 'Хадгалсан төхөөрөмжүүд' }}  // ← энд header дээр гарна
      />
      <Stack.Screen
        name="Actions"
        component={Actions}
        options={{ title: 'Үйлдэл' }}
      />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EnterNumbers" component={EnterNumbers} />
      <Stack.Screen name="Actions" component={Actions} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#fff', height: 60, paddingBottom: 5 },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Devices') {
              iconName = 'phone-portrait-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={MainStack} options={{ title: '' }} />
        <Tab.Screen name="Devices" component={DevicesStack} options={{ title: '' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
