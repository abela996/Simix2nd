// screens/PrivacyPolicy.js
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function PrivacyPolicy() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Simix App Нууцлалын Бодлого</Text>
      <Text style={styles.date}>Хүчингүй болох огноо: 2025-09-09</Text>

      <Text style={styles.heading}>1. Бид цуглуулдаг мэдээлэл</Text>
      <Text style={styles.paragraph}>Төхөөрөмж болон Админ дугаар: Та төхөөрөмжүүдээ удирдахын тулд эдгээр дугаарыг оруулна.</Text>
      <Text style={styles.paragraph}>SMS харилцаа: Апп таны төхөөрөмж рүү SMS команд илгээдэг (#01#0# холбох, #02#0# салгах).</Text>
      <Text style={styles.paragraph}>Нэвтрэлтийн түүх: Апп таны төхөөрөмж болон админ дугаарыг утсан дээр хадгалж, дахин оруулах шаардлагагүй болгодог.</Text>

      <Text style={styles.heading}>2. Мэдээллийг хэрхэн ашиглах</Text>
      <Text style={styles.paragraph}>Төхөөрөмжийг холбох, удирдах.</Text>
      <Text style={styles.paragraph}>Апп-д таны төхөөрөмж болон админ дугаарыг харуулах.</Text>
      <Text style={styles.paragraph}>Апп-ын үйлдлийг сайжруулах.</Text>

      <Text style={styles.heading}>3. Мэдээллийг хадгалах</Text>
      <Text style={styles.paragraph}>Бүх төхөөрөмж/админ дугаар болон нэвтрэлтийн түүх таны утсан дээр хадгалагдана.</Text>
      <Text style={styles.paragraph}>Бид таны мэдээллийг гуравдагч этгээдэд хуваалцахгүй.</Text>

      <Text style={styles.heading}>4. Зөвшөөрлүүд</Text>
      <Text style={styles.paragraph}>SMS зөвшөөрөл: Төхөөрөмж рүү команд илгээхэд шаардлагатай.</Text>
      <Text style={styles.paragraph}>Интернет зөвшөөрөл: Апп шинэчлэх болон сонгосон функцуудын үед шаардлагатай.</Text>

      <Text style={styles.heading}>5. Гуравдагч этгээдийн үйлчилгээ</Text>
      <Text style={styles.paragraph}>Бид хувийн мэдээлэл цуглуулдаг гуравдагч этгээдийн ямар ч үйлчилгээг ашигладаггүй.</Text>

      <Text style={styles.heading}>6. Хүүхдийн нууцлал</Text>
      <Text style={styles.paragraph}>Simix 13-аас доош насны хүүхдэд зориулагдаагүй. Бид хүүхдээс мэдээжийн хувийн мэдээлэл цуглуулдаггүй.</Text>

      <Text style={styles.heading}>7. Энэхүү Нууцлалын Бодлогыг шинэчлэх</Text>
      <Text style={styles.paragraph}>Бид энэхүү бодлогыг үе үе шинэчлэх боломжтой. Шинэчлэгдсэн бодлого апп-д болон энэ хуудсанд тусгалаа олно.</Text>

      <Text style={styles.heading}>8. Холбоо барих</Text>
      <Text style={styles.paragraph}>Хэрэв танд энэхүү Нууцлалын Бодлогын талаар асуулт байвал дараах хаягаар холбогдоно уу: sumiyabayr@iek.mn</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#2563eb' },
  date: { fontSize: 14, marginBottom: 20, color: '#555' },
  heading: { fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 5, color: '#2563eb' },
  paragraph: { fontSize: 16, marginBottom: 8, color: '#111', lineHeight: 22 },
});
