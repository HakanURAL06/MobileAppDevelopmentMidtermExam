import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [textColor, setTextColor] = useState('#0f172a');
  const [isBold, setIsBold] = useState(true);
  const [isItalic, setIsItalic] = useState(false);
  const [isStrike, setIsStrike] = useState(false);
  const [fontType, setFontType] = useState('System');
  const [isFavorite, setIsFavorite] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 22,
              color: textColor,
              fontWeight: isBold ? 'bold' : 'normal',
              fontStyle: isItalic ? 'italic' : 'normal',
              textDecorationLine: isStrike ? 'line-through' : 'none',
              fontFamily: fontType,
              textAlign: 'center',
            }}
          >
            React Native Yazı & Buton Stilleri
          </Text>

          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#2563eb' }]}
              onPress={() => setTextColor('#2563eb')}
            >
              <Text style={styles.btnText}>Mavi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#dc2626' }]}
              onPress={() => setTextColor('#dc2626')}
            >
              <Text style={styles.btnText}>Kırmızı</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#16a34a' }]}
              onPress={() => setTextColor('#16a34a')}
            >
              <Text style={styles.btnText}>Yeşil</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.btn,
                { backgroundColor: isBold ? '#0f172a' : '#64748b' },
              ]}
              onPress={() => setIsBold(!isBold)}
            >
              <Text style={styles.btnText}>Bold</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btn,
                { backgroundColor: isItalic ? '#0f172a' : '#64748b' },
              ]}
              onPress={() => setIsItalic(!isItalic)}
            >
              <Text style={styles.btnText}>İtalik</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btn,
                { backgroundColor: isStrike ? '#0f172a' : '#64748b' },
              ]}
              onPress={() => setIsStrike(!isStrike)}
            >
              <Text style={styles.btnText}>Üstü Çizili</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            {['System', 'serif', 'monospace'].map((f) => (
              <TouchableOpacity
                key={f}
                style={[
                  styles.btn,
                  { backgroundColor: fontType === f ? '#9333ea' : '#64748b' },
                ]}
                onPress={() => setFontType(f)}
              >
                <Text style={styles.btnText}>{f}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.darkCard}>
          <Text style={styles.darkTitle}>React Native Core Components</Text>
          <Text style={styles.darkDesc}>
            Bu dersi favorilerinize ekleyerek hızlıca erişebilirsiniz.
          </Text>
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            style={[
              styles.pillBtn,
              { backgroundColor: isFavorite ? '#f59e0b' : '#334155' },
            ]}
          >
            <Text style={styles.pillBtnText}>
              {isFavorite ? '★ Favorilerde' : '☆ Favorilere Ekle'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => setFaqOpen(!faqOpen)}
            style={styles.faqHeader}
          >
            <Text style={styles.faqQuestion}>
              Proje Snack Expo üzerinde nasıl çalıştırılır?
            </Text>
            <Text style={styles.faqPlus}>{faqOpen ? '−' : '+'}</Text>
          </TouchableOpacity>
          {faqOpen && (
            <Text style={styles.faqAnswer}>
              Kodu App.js içerisine yapıştırıp sağdaki Web, iOS veya Android
              önizleme ekranından anında çıktıyı görebilirsiniz.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  container: {
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  darkCard: {
    backgroundColor: '#1f2937',
    padding: 20,
    borderRadius: 18,
    gap: 12,
  },
  darkTitle: {
    color: '#f8fafc',
    fontSize: 19,
    fontWeight: 'bold',
  },
  darkDesc: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },
  pillBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },
  pillBtnText: {
    color: '#fef3c7',
    fontWeight: 'bold',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
  },
  faqPlus: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb',
    marginLeft: 12,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});
