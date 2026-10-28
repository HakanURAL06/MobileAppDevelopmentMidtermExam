import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 120;

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = EMAIL_REGEX.test(email);
  const remaining = MAX_LENGTH - bio.length;
  const isNearLimit = remaining <= 10;

  const handleSubmit = () => {
    if (name.trim() === '' || !isEmailValid) {
      Alert.alert('Hata', 'Lütfen geçerli bir isim ve e-posta girin!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Kullanıcı Kayıt ve Doğrulama Formu</Text>

          <TextInput
            style={styles.input}
            placeholder="Adınız Soyadınız"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={[
              styles.input,
              {
                borderColor:
                  email.length === 0
                    ? '#cbd5e1'
                    : isEmailValid
                    ? '#22c55e'
                    : '#ef4444',
              },
            ]}
            placeholder="ornek@okul.edu.tr"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text
            style={{
              fontSize: 13,
              fontWeight: '600',
              color: isEmailValid ? '#16a34a' : '#dc2626',
            }}
          >
            {email.length === 0
              ? 'E-posta adresinizi yazmaya başlayın.'
              : isEmailValid
              ? '✓ Geçerli e-posta adresi.'
              : '✕ Lütfen geçerli bir e-posta girin.'}
          </Text>

          <TextInput
            multiline
            maxLength={MAX_LENGTH}
            value={bio}
            onChangeText={setBio}
            placeholder="Kısa biyografi yazın..."
            style={styles.bioInput}
          />

          <Text
            style={{
              color: isNearLimit ? '#f97316' : '#475569',
              fontWeight: '600',
            }}
          >
            Kalan Karakter: {remaining} / {MAX_LENGTH}
          </Text>

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Formu Gönder</Text>
          </TouchableOpacity>

          {submitted && (
            <View style={styles.successBox}>
              <Text style={styles.successText}>
                Kayıt Başarılı! Hoş geldin {name} ({email})
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  input: {
    borderWidth: 2,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  bioInput: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 15,
  },
  submitBtn: {
    backgroundColor: '#16a34a',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  successBox: {
    backgroundColor: '#dcfce7',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#22c55e',
  },
  successText: {
    color: '#15803d',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
