import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function PhoneInput({ label, value, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(text) => onChangeText(text.replace(/[^0-9]/g, ''))}
        placeholder={placeholder}
        placeholderTextColor="#64748b"
        maxLength={8}
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: '#000',
    marginBottom: 4,
    fontSize: 14,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    paddingVertical: 0,
    backgroundColor: 'transparent', // Цэнхэр гарахгүй
  },
});
