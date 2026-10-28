import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const PHOTO_1 = 'https://picsum.photos/id/237/300/300';
const PHOTO_2 = 'https://picsum.photos/id/1025/300/300';
const PHOTO_3 = 'https://picsum.photos/id/1062/300/300';
const PHOTO_WIDE = 'https://picsum.photos/id/1074/600/300';

export default function App() {
  const [isRow, setIsRow] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileCard}>
          <Image source={{ uri: PHOTO_1 }} style={styles.roundAvatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Ahmet Yılmaz</Text>
            <Text style={styles.profileDept}>Bilgisayar Mühendisliği</Text>
            <Text style={styles.profileStatus}>● Aktif Öğrenci</Text>
          </View>
        </View>

        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>
            {isRow ? 'Yan Yana Fotoğraflar' : 'Alt Alta Fotoğraflar'}
          </Text>
          <TouchableOpacity
            style={styles.toggleBtn}
            onPress={() => setIsRow(!isRow)}
          >
            <Text style={styles.btnText}>
              {isRow ? 'Alt Alta Yap' : 'Yan Yana Yap'}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.photosWrapper,
            { flexDirection: isRow ? 'row' : 'column' },
          ]}
        >
          <View style={styles.photoItem}>
            <Image source={{ uri: PHOTO_1 }} style={styles.squarePhoto} />
            <Text style={styles.photoLabel}>1. Fotoğraf</Text>
          </View>
          <View style={styles.photoItem}>
            <Image source={{ uri: PHOTO_2 }} style={styles.squarePhoto} />
            <Text style={styles.photoLabel}>2. Fotoğraf</Text>
          </View>
          <View style={styles.photoItem}>
            <Image source={{ uri: PHOTO_3 }} style={styles.squarePhoto} />
            <Text style={styles.photoLabel}>3. Fotoğraf</Text>
          </View>
        </View>

        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Geniş Banner Fotoğraf</Text>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              { backgroundColor: isBlurred ? '#f97316' : '#475569' },
            ]}
            onPress={() => setIsBlurred(!isBlurred)}
          >
            <Text style={styles.btnText}>
              {isBlurred ? 'Netleştir' : 'Bulanıklaştır'}
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: PHOTO_WIDE }}
          style={styles.wideBanner}
          resizeMode="cover"
          blurRadius={isBlurred ? 15 : 0}
        />

        <Text style={styles.sectionTitle}>2x2 Izgara (Grid) Galeri</Text>
        <View style={styles.gridWrapper}>
          {[PHOTO_1, PHOTO_2, PHOTO_3, PHOTO_WIDE].map((uri, idx) => (
            <View key={idx} style={styles.gridBox}>
              <Image source={{ uri }} style={styles.gridImage} />
              <Text style={styles.photoLabel}>Galeri {idx + 1}</Text>
            </View>
          ))}
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
    padding: 18,
    gap: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 16,
  },
  roundAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: '#2563eb',
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  profileDept: {
    fontSize: 14,
    color: '#64748b',
  },
  profileStatus: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  toggleBtn: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  photosWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  photoItem: {
    alignItems: 'center',
    gap: 6,
  },
  squarePhoto: {
    width: 88,
    height: 88,
    borderRadius: 12,
  },
  photoLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  wideBanner: {
    width: '100%',
    height: 150,
    borderRadius: 16,
  },
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  gridBox: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 6,
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
});
