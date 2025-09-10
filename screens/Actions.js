import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Actions({ route, navigation }) {
  const { admin, device } = route.params || {};

  const sendSms = (code) => {
    if (!/^\d{8}$/.test(device)) {
      Alert.alert('Алдаа', 'Төхөөрөмжийн дугаар буруу байна.');
      return;
    }
    const smsUrl = `sms:${device}?&body=${encodeURIComponent(code)}`;
    Linking.openURL(smsUrl).catch(() => {
      Alert.alert('Алдаа', 'SMS илгээхэд алдаа гарлаа.');
    });
  };

  return (
    <View style={styles.container}>
      {/* Admin & Device Box */}
      <View style={styles.infoBox}>
        <View style={styles.row}>
          <Ionicons name="person" size={22} color="#64748b" style={styles.icon} />
          <Text style={styles.infoText}>Админ: {admin}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="hardware-chip-outline" size={22} color="#64748b" style={styles.icon} />
          <Text style={styles.infoText}>Төхөөрөмж: {device}</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => sendSms('#01#0#')}>
  <Ionicons name="flash" size={26} color="#fff" />
  <Text style={styles.buttonText}>Залгах</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.button, styles.disconnect]} onPress={() => sendSms('#02#0#')}>
  <Ionicons name="flash-off" size={26} color="#fff" />
  <Text style={styles.buttonText}>Салгах</Text>
</TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="#38bdf8" style={{ marginRight: 5 }} />
        <Text style={styles.backText}>Буцах</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon: { marginRight: 10 },
  infoText: { fontSize: 16, color: '#111', fontWeight: 'bold' },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2563eb',
  paddingVertical: 14,
  paddingHorizontal: 18,
  borderRadius: 12,
  width: 100,
},
disconnect: { backgroundColor: '#dc7e26' },
buttonText: { color: '#fff', fontWeight: 'bold', marginTop: 6, fontSize: 14 },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  backText: { color: '#38bdf8', textAlign: 'center' },
});
