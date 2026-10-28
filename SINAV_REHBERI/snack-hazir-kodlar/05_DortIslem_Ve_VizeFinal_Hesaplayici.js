import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [calcResult, setCalcResult] = useState(null);
  const [midterm, setMidterm] = useState('');
  const [finalExam, setFinalExam] = useState('');
  const [average, setAverage] = useState(null);

  const runOperation = (op) => {
    const n1 = Number(first);
    const n2 = Number(second);
    if (first.trim() === '' || second.trim() === '') return;

    if (op === '+') setCalcResult(n1 + n2);
    if (op === '-') setCalcResult(n1 - n2);
    if (op === '×') setCalcResult(n1 * n2);
    if (op === '÷') {
      setCalcResult(n2 !== 0 ? (n1 / n2).toFixed(2) : 'Sıfıra bölünemez');
    }
  };

  const calculateGrade = () => {
    if (midterm.trim() === '' || finalExam.trim() === '') return;
    const avg = Number(midterm) * 0.4 + Number(finalExam) * 0.6;
    setAverage(avg);
  };

  const isPassed = average !== null && average >= 50;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>4 İşlem Hesaplayıcı</Text>
          <TextInput
            style={styles.input}
            placeholder="Birinci sayı"
            keyboardType="numeric"
            value={first}
            onChangeText={setFirst}
          />
          <TextInput
            style={styles.input}
            placeholder="İkinci sayı"
            keyboardType="numeric"
            value={second}
            onChangeText={setSecond}
          />
          <View style={styles.opRow}>
            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#2563eb' }]}
              onPress={() => runOperation('+')}
            >
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#dc2626' }]}
              onPress={() => runOperation('-')}
            >
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#16a34a' }]}
              onPress={() => runOperation('×')}
            >
              <Text style={styles.btnText}>×</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#9333ea' }]}
              onPress={() => runOperation('÷')}
            >
              <Text style={styles.btnText}>÷</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.resultText}>
            Sonuç: {calcResult === null ? 'Bekleniyor...' : calcResult}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Vize (%40) ve Final (%60) Hesaplama</Text>
          <TextInput
            style={styles.input}
            placeholder="Vize Notu"
            keyboardType="numeric"
            value={midterm}
            onChangeText={setMidterm}
          />
          <TextInput
            style={styles.input}
            placeholder="Final Notu"
            keyboardType="numeric"
            value={finalExam}
            onChangeText={setFinalExam}
          />
          <TouchableOpacity style={styles.fullBtn} onPress={calculateGrade}>
            <Text style={styles.btnText}>Ortalamayı Hesapla</Text>
          </TouchableOpacity>

          {average !== null && (
            <View
              style={[
                styles.gradeBadge,
                { backgroundColor: isPassed ? '#dcfce7' : '#fee2e2' },
              ]}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: isPassed ? '#15803d' : '#b91c1c',
                }}
              >
                Ortalama: {average.toFixed(1)} —{' '}
                {isPassed ? 'GEÇTİ 🎉' : 'KALDI ❌'}
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
    gap: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 12,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
  },
  opRow: {
    flexDirection: 'row',
    gap: 10,
  },
  opBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  fullBtn: {
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  gradeBadge: {
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
});
