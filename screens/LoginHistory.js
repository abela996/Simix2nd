import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginHistory({ navigation }) {
  const [devices, setDevices] = useState([]);

  const loadDevices = async () => {
    const saved = JSON.parse(await AsyncStorage.getItem('devices')) || [];
    setDevices(saved.reverse());
  };

  const deleteDevice = async (index) => {
    const newDevices = [...devices];
    newDevices.splice(index, 1);
    await AsyncStorage.setItem('devices', JSON.stringify(newDevices.reverse()));
    setDevices(newDevices);
  };

  const renderRightActions = (index) => (
    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteDevice(index)}>
      <Ionicons name="trash" size={24} color="#fff" />
    </TouchableOpacity>
  );

  useEffect(() => { loadDevices(); }, []);

  const openDevice = (item) => {
    navigation.navigate('Actions', { admin: item.admin, device: item.device });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {devices.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Төхөөрөмж нэмэгдээгүй байна</Text>
          </View>
        ) : (
          <FlatList
            data={devices}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Swipeable renderRightActions={() => renderRightActions(index)}>
                <TouchableOpacity style={styles.item} onPress={() => openDevice(item)}>
                  <Text style={styles.info}>Админ: {item.admin} | Төх.: {item.device}</Text>
                </TouchableOpacity>
              </Swipeable>
            )}
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  item: {
    marginBottom: 12,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',  // саарал box
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  info: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  deleteButton: {
    backgroundColor: '#dc2626',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    marginBottom: 12,
    borderRadius: 12,
  },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#888' },
});
