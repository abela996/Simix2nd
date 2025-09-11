import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Linking, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EnterNumbers from './screens/EnterNumbers';
import Actions from './screens/Actions';
import LoginHistory from './screens/LoginHistory';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Devices Stack
function DevicesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginHistory" component={LoginHistory} />
      <Stack.Screen name="Actions" component={Actions} />
    </Stack.Navigator>
  );
}

// Home Stack
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EnterNumbers" component={EnterNumbers} />
      <Stack.Screen name="Actions" component={Actions} />
    </Stack.Navigator>
  );
}

// Privacy Policy Screen
function PrivacyPolicyScreen() {
  const openPolicy = () => {
    Linking.openURL('https://abela996.github.io/simix-privacy-policy/privacy-policy.html');
  };

  return (
    <View style={styles.policyContainer}>
      <TouchableOpacity onPress={openPolicy} style={styles.button}>
        <Text style={styles.buttonText}>Нууцлалын бодлого үзэх</Text>
      </TouchableOpacity>
    </View>
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
          name="Home" 
          component={HomeStack} 
          options={{ 
            title: 'Нүүр', 
            drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />
          }} 
        />
        <Drawer.Screen 
          name="Devices" 
          component={DevicesStack} 
          options={{ 
            title: 'Төхөөрөмжүүд', 
            drawerIcon: ({ color, size }) => <Ionicons name="phone-portrait-outline" size={size} color={color} />
          }} 
        />
        <Drawer.Screen 
          name="PrivacyPolicy" 
          component={PrivacyPolicyScreen} 
          options={{ 
            title: 'Privacy Policy', 
            drawerIcon: ({ color, size }) => <Ionicons name="help-circle-outline" size={size} color={color} />
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  policyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
