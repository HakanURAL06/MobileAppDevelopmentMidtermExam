import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  const maxCount = 10;
  const minCount = 0;
  const canIncrement = count < maxCount;
  const canDecrement = count > minCount;
  const progress = (count / maxCount) * 100;

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Akıllı Sayaç ve İlerleme Çubuğu</Text>
          <View style={styles.counterBox}>
            <Text style={styles.countNumber}>{count}</Text>
            <Text style={styles.progressLabel}>
              İlerleme: %{progress.toFixed(0)}
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>

          <View style={styles.rowCenter}>
            <TouchableOpacity
              style={[
                styles.roundBtn,
                !canDecrement && styles.disabledBtn,
              ]}
              disabled={!canDecrement}
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.roundBtn,
                !canIncrement && styles.disabledBtn,
              ]}
              disabled={!canIncrement}
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => setCount(0)}
          >
            <Text style={styles.btnText}>Sayacı Sıfırla</Text>
          </TouchableOpacity>

          {count === maxCount && (
            <Text style={styles.maxReachedText}>
              🎉 Maksimum değere ulaştınız!
            </Text>
          )}
        </View>

        <View style={styles.darkCard}>
          <Text style={styles.darkTitle}>Geri Sayım Zamanlayıcı</Text>
          <Text
            style={[
              styles.timerNumber,
              { color: isRunning ? '#38bdf8' : '#f97316' },
            ]}
          >
            {seconds}s
          </Text>

          <View style={styles.rowCenter}>
            <TouchableOpacity
              style={[
                styles.timerBtn,
                { backgroundColor: isRunning ? '#f97316' : '#2563eb' },
              ]}
              onPress={() => setIsRunning(!isRunning)}
            >
              <Text style={styles.btnText}>
                {isRunning ? 'Duraklat' : 'Başlat'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.timerBtn, { backgroundColor: '#64748b' }]}
              onPress={() => {
                setIsRunning(false);
                setSeconds(10);
              }}
            >
              <Text style={styles.btnText}>Sıfırla</Text>
            </TouchableOpacity>
          </View>
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
    gap: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  counterBox: {
    backgroundColor: '#e0f2fe',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0284c7',
  },
  countNumber: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#0369a1',
  },
  progressLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0284c7',
  },
  progressTrack: {
    height: 12,
    backgroundColor: '#e2e8f0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0284c7',
    borderRadius: 6,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  roundBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: '#cbd5e1',
  },
  resetBtn: {
    backgroundColor: '#dc2626',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  maxReachedText: {
    color: '#16a34a',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  darkCard: {
    backgroundColor: '#0f172a',
    padding: 22,
    borderRadius: 18,
    alignItems: 'center',
    gap: 14,
  },
  darkTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timerNumber: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  timerBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
});
