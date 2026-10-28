import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

const INITIAL_PEOPLE = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    gender: 'Erkek',
    avatar: 'https://picsum.photos/id/1005/200/200',
  },
  {
    id: '2',
    name: 'Zeynep Kaya',
    gender: 'Kadın',
    avatar: 'https://picsum.photos/id/1011/200/200',
  },
  {
    id: '3',
    name: 'Mehmet Demir',
    gender: 'Erkek',
    avatar: 'https://picsum.photos/id/1012/200/200',
  },
  {
    id: '4',
    name: 'Elif Şahin',
    gender: 'Kadın',
    avatar: 'https://picsum.photos/id/1027/200/200',
  },
];

export default function App() {
  const [people, setPeople] = useState(INITIAL_PEOPLE);
  const [approved, setApproved] = useState({});
  const [newName, setNewName] = useState('');
  const [newGender, setNewGender] = useState('Erkek');
  const [filter, setFilter] = useState('Tümü');

  const toggleApprove = (id) => {
    setApproved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addPerson = () => {
    if (newName.trim() === '') return;
    const newEntry = {
      id: Date.now().toString(),
      name: newName.trim(),
      gender: newGender,
      avatar:
        newGender === 'Erkek'
          ? 'https://picsum.photos/id/1005/200/200'
          : 'https://picsum.photos/id/1027/200/200',
    };
    setPeople([...people, newEntry]);
    setNewName('');
  };

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const filteredPeople = people.filter((person) => {
    if (filter === 'Tümü') return true;
    return person.gender === filter;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Katılımcı Yönetim Paneli</Text>

        <View style={styles.formBox}>
          <TextInput
            style={styles.input}
            placeholder="Yeni kişi adı yazın..."
            value={newName}
            onChangeText={setNewName}
          />
          <View style={styles.formActionsRow}>
            <TouchableOpacity
              style={[
                styles.genderSelectBtn,
                {
                  backgroundColor:
                    newGender === 'Erkek' ? '#2563eb' : '#e2e8f0',
                },
              ]}
              onPress={() => setNewGender('Erkek')}
            >
              <Text
                style={{
                  color: newGender === 'Erkek' ? '#ffffff' : '#334155',
                  fontWeight: 'bold',
                }}
              >
                Erkek
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderSelectBtn,
                {
                  backgroundColor:
                    newGender === 'Kadın' ? '#db2777' : '#e2e8f0',
                },
              ]}
              onPress={() => setNewGender('Kadın')}
            >
              <Text
                style={{
                  color: newGender === 'Kadın' ? '#ffffff' : '#334155',
                  fontWeight: 'bold',
                }}
              >
                Kadın
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBtn} onPress={addPerson}>
              <Text style={styles.addBtnText}>+ Listeye Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterRow}>
          {['Tümü', 'Erkek', 'Kadın'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setFilter(tab)}
              style={[
                styles.filterTab,
                { backgroundColor: filter === tab ? '#0f172a' : '#cbd5e1' },
              ]}
            >
              <Text
                style={{
                  color: filter === tab ? '#ffffff' : '#0f172a',
                  fontWeight: 'bold',
                  fontSize: 13,
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={filteredPeople}
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
            const accent = !isApproved
              ? '#64748b'
              : isMale
              ? '#2563eb'
              : '#db2777';

            return (
              <View
                style={[
                  styles.personCard,
                  { backgroundColor: cardBg, borderColor: accent },
                ]}
              >
                <Image
                  source={{ uri: item.avatar }}
                  style={[styles.avatar, { borderColor: accent }]}
                />

                <View style={styles.personInfo}>
                  <Text
                    style={[
                      styles.personName,
                      {
                        textDecorationLine: isApproved
                          ? 'line-through'
                          : 'none',
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text style={[styles.personSub, { color: accent }]}>
                    {item.gender} • {isApproved ? 'Onaylandı' : 'Bekliyor'}
                  </Text>
                </View>

                <View style={styles.rightButtons}>
                  <TouchableOpacity
                    onPress={() => toggleApprove(item.id)}
                    style={[styles.okeyBtn, { backgroundColor: accent }]}
                  >
                    <Text style={styles.btnText}>
                      {isApproved ? '✓ Okey' : 'Okey'}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => deletePerson(item.id)}
                    style={styles.deleteBtn}
                  >
                    <Text style={styles.btnText}>Sil</Text>
                  </TouchableOpacity>
                </View>
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
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  formBox: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  formActionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  genderSelectBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addBtn: {
    flex: 1.4,
    backgroundColor: '#16a34a',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
  },
  filterTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  listContent: {
    gap: 10,
    paddingBottom: 20,
  },
  personCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    borderWidth: 2,
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
  },
  personInfo: {
    flex: 1,
    gap: 2,
  },
  personName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  personSub: {
    fontSize: 13,
    fontWeight: '600',
  },
  rightButtons: {
    flexDirection: 'row',
    gap: 6,
  },
  okeyBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  deleteBtn: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
