import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

const TASKS = [
  { id: '1', label: 'Ders slaytlarını tekrar et' },
  { id: '2', label: 'Image ve ScrollView örneğini çalıştır' },
  { id: '3', label: 'FlatList ve state sorularını çöz' },
];

const TRACKS = [
  { id: 'foundation', label: 'Temel Seviye · Bileşenler' },
  { id: 'growth', label: 'Orta Seviye · State & Props' },
  { id: 'advanced', label: 'İleri Seviye · Performans' },
];

export default function App() {
  const [completed, setCompleted] = useState({});
  const [selectedTrack, setSelectedTrack] = useState('foundation');
  const [query, setQuery] = useState('');

  const toggleTask = (id) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredTasks = useMemo(() => {
    return TASKS.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Görev Arama ve Checkbox Listesi</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Görevlerde ara..."
          placeholderTextColor="#94a3b8"
          value={query}
          onChangeText={setQuery}
        />

        <View style={styles.card}>
          {filteredTasks.map((task) => {
            const done = !!completed[task.id];
            return (
              <Pressable
                key={task.id}
                onPress={() => toggleTask(task.id)}
                style={styles.checkRow}
              >
                <View
                  style={[
                    styles.checkbox,
                    {
                      backgroundColor: done ? '#22c55e' : 'transparent',
                      borderColor: done ? '#22c55e' : '#64748b',
                    },
                  ]}
                >
                  {done && <Text style={styles.checkMark}>✓</Text>}
                </View>
                <Text
                  style={[
                    styles.checkLabel,
                    {
                      textDecorationLine: done ? 'line-through' : 'none',
                      color: done ? '#94a3b8' : '#f8fafc',
                    },
                  ]}
                >
                  {task.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.heading}>Seviye Seçimi (RadioButton)</Text>
        <View style={styles.card}>
          {TRACKS.map((item) => {
            const isActive = item.id === selectedTrack;
            return (
              <Pressable
                key={item.id}
                onPress={() => setSelectedTrack(item.id)}
                style={[
                  styles.radioCard,
                  {
                    backgroundColor: isActive ? '#172554' : '#0f172a',
                    borderColor: isActive ? '#38bdf8' : '#1e293b',
                  },
                ]}
              >
                <View
                  style={[
                    styles.radioOuter,
                    { borderColor: isActive ? '#38bdf8' : '#64748b' },
                  ]}
                >
                  {isActive && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioLabel}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#020617',
  },
  container: {
    padding: 20,
    gap: 16,
  },
  heading: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    fontSize: 15,
  },
  card: {
    backgroundColor: '#0f172a',
    padding: 16,
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 6,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  checkLabel: {
    fontSize: 16,
  },
  radioCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#38bdf8',
  },
  radioLabel: {
    color: '#e2e8f0',
    fontSize: 15,
    fontWeight: '600',
  },
});
