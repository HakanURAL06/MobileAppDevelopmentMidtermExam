import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const PEOPLE = [
  { id: '1', name: 'Ahmet Yılmaz', gender: 'Erkek' },
  { id: '2', name: 'Zeynep Kaya', gender: 'Kadın' },
  { id: '3', name: 'Mehmet Demir', gender: 'Erkek' },
  { id: '4', name: 'Elif Şahin', gender: 'Kadın' },
  { id: '5', name: 'Caner Öztürk', gender: 'Erkek' },
  { id: '6', name: 'Selin Arslan', gender: 'Kadın' },
];

export default function App() {
  const [approved, setApproved] = useState({});

  const toggleApprove = (id) => {
    setApproved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const approvedCount = Object.values(approved).filter(Boolean).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Katılımcı Onay Listesi</Text>
        <Text style={styles.subtitle}>
          Onaylanan: {approvedCount} / {PEOPLE.length} Kişi
        </Text>

        <FlatList
          data={PEOPLE}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => {
            const isApproved = !!approved[item.id];
            const isMale = item.gender === 'Erkek';

            const cardBg = !isApproved
              ? '#ffffff'
              : isMale
              ? '#dbeafe'
              : '#fce7f3';

            const accentColor = !isApproved
              ? '#64748b'
              : isMale
              ? '#2563eb'
              : '#db2777';

            const borderCol = !isApproved
              ? '#cbd5e1'
              : isMale
              ? '#2563eb'
              : '#db2777';

            return (
              <View
                style={[
                  styles.rowCard,
                  { backgroundColor: cardBg, borderColor: borderCol },
                ]}
              >
                <View style={styles.infoArea}>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={[styles.genderText, { color: accentColor }]}>
                    Cinsiyet: {item.gender} •{' '}
                    {isApproved ? 'Onaylandı' : 'Bekliyor'}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => toggleApprove(item.id)}
                  style={[styles.okeyBtn, { backgroundColor: accentColor }]}
                >
                  <Text style={styles.okeyBtnText}>
                    {isApproved ? '✓ Okey' : 'Okey Ver'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 16,
    fontWeight: '600',
  },
  listContent: {
    gap: 12,
    paddingBottom: 24,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
  },
  infoArea: {
    gap: 4,
  },
  nameText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  genderText: {
    fontSize: 13,
    fontWeight: '600',
  },
  okeyBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    minWidth: 95,
    alignItems: 'center',
  },
  okeyBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
