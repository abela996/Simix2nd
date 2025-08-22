import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const saveDevice = async (admin, device) => {
  try {
    const devices = JSON.parse(await AsyncStorage.getItem('devices')) || [];
    if (!devices.find(d => d.device === device)) {
      devices.push({ admin, device });
      await AsyncStorage.setItem('devices', JSON.stringify(devices));
    }
  } catch (e) {
    console.log('Error saving device:', e);
  }
};

export default function EnterNumbers({ navigation }) {
  const [admin, setAdmin] = useState('');
  const [device, setDevice] = useState('');

  const isValid = (num) => /^\d{8}$/.test(num);

  const handleNext = async () => {
    if (!isValid(admin) || !isValid(device)) {
      Alert.alert('Алдаа', 'Утасны дугаар 8 оронтой байх ёстой.');
      return;
    }
    await saveDevice(admin, device);
    navigation.navigate('Actions', { admin, device });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/endlesslogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Админ болон төхөөрөмжийн дугаарыг оруулна уу</Text>

      {/* Админ дугаар */}
      <View style={styles.box}>
        <Ionicons name="person" size={24} color="#64748b" style={styles.icon} />
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Админ дугаар</Text>
          <TextInput
            value={admin}
            onChangeText={setAdmin}
            placeholder="********"
            placeholderTextColor="#a0a0a0"
            keyboardType="numeric"
            maxLength={8}
            style={styles.input}
          />
        </View>
      </View>

      {/* Төхөөрөмжийн дугаар */}
      <View style={styles.box}>
        <Ionicons name="phone-portrait" size={24} color="#64748b" style={styles.icon} />
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Төхөөрөмжийн дугаар</Text>
          <TextInput
            value={device}
            onChangeText={setDevice}
            placeholder="********"
            placeholderTextColor="#a0a0a0"
            keyboardType="numeric"
            maxLength={8}
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Үргэлжлүүлэх</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  logo: { width: 120, height: 120, marginBottom: 20, alignSelf: 'center' },
  title: { color: '#111', fontSize: 18, marginBottom: 20, textAlign: 'center' },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },
  icon: { marginRight: 12, marginTop: 2 },
  label: { fontSize: 12, color: '#64748b', marginBottom: 2 },
  input: { fontSize: 16, color: '#000', paddingVertical: 6, backgroundColor: 'transparent' },

  button: {
    marginTop: 30,
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
