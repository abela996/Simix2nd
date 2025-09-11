import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import EnterNumbers from './screens/EnterNumbers';
import Actions from './screens/Actions';
import LoginHistory from './screens/LoginHistory';
import PrivacyPolicy from './screens/PrivacyPolicy';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DevicesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2563eb' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: true,
        headerTitle: 'Хадгалсан төхөөрөмжүүд',
      }}
    >
      <Stack.Screen
        name="LoginHistory"
        component={LoginHistory}
        options={{ title: 'Төхөөрөмжүүд' }}
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="EnterNumbers"
        component={EnterNumbers}
        options={{ title: 'Төхөөрөмж удирдлага' }}
      />
      <Stack.Screen
        name="Actions"
        component={Actions}
        options={{ title: 'Үйлдэл' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#2563eb',
          drawerLabelStyle: { fontWeight: 'bold', fontSize: 16 },
        }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={MainStack}
          options={{
            title: 'Нүүр',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="DevicesStack"
          component={DevicesStack}
          options={{
            title: 'Төхөөрөмжүүд',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="phone-portrait-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            title: 'Нууцлалын бодлого',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
