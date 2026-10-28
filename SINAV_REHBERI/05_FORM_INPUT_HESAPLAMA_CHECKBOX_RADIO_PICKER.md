# 🧮 5. BÖLÜM: FORM, TEXTINPUT, 4 İŞLEM, VİZE-FİNAL, CHECKBOX, RADIO VE PICKER REHBERİ (W2 – W6 DERS KODLARI KARŞILIKLARIYLA)

> **Sınavda Bu Dosyayı Ne Zaman Açacaksın?**
> Hoca sınavda **iki sayı toplama veya 4 işlem hesap makinesi**, **vize-final ortalaması (`Geçti` / `Kaldı`)**, **isim ve e-posta kayıt formu (`SimpleForm`)**, **anlık yazılan metin ve harf sayısı (`TextInputExample`)**, **geçerli/geçersiz e-posta çerçeve rengi (`EmailField`)**, **kalan karakter sayacı (`BioField`)**, **arama çubuğu ile liste filtreleme (`SearchableList`)**, **seçildikçe üstü çizilen `Checkbox` görev listesi (`LessonChecklist` & `ParticipantSettings`)**, **yuvarlak `RadioButton` seçimi (`ModuleSelector` & `TrackSelector`)**, **`Picker` açılır menü (`CourseLevelPicker` & `ScheduleFilter`)** veya **en alta kaydırınca aktifleşen sözleşme butonu (`TermsAgreement`)** sorduğunda doğrudan bu dosyayı kullan.
>
> **Bu Dosyada Neler Var?**
> 1. Her görsel senaryonun **hangi haftada (`W2`, `W3`, `W4`, `W6`)**, **hangi ders dosyasında**, **hangi konu başlığında** ve **hangi fonksiyon adıyla** işlendiği tablosu.
> 2. Hocanın ders notlarındaki **birebir aynı orijinal örnek kodların temiz (yorum satırsız) hali**.
> 3. Sınavda hocanın değiştirmesini isteyeceği **geliştirilmiş sınav senaryosu kodları**.

![Buton Yazı Input ve Hesaplama Rehberi](./gorseller/04-buton-yazi-input-degisiklikleri.svg)

---

## 🎯 GÖRSELE BAK -> HANGİ HAFTA, HANGİ KONU BAŞLIĞI VE HANGİ KOD?

| Hocanın Verdiği Görselde Ne Görüyorsun? | İşlendiği Hafta ve Dosya | Ders Notundaki Konu Başlığı ve Kod Adı | Hangi Bölüme Bakacaksın? |
| :--- | :--- | :--- | :--- |
| **İki sayı kutusu ve altında `Calculate sum` veya `Topla (+)`, `Çıkar (-)`, `Çarp (×)`, `Böl (÷)` butonları** | **W6** (`components/Button.md`) & **W2** (`05_operators.js` & `08_functions.js`) | `Examples -> Example 1: Sum Calculator` (`SumCalculator`) | **Senaryo 1** |
| **Vize ve Final kutusu + Hesapla butonu + Yeşil `GEÇTİ` / Kırmızı `KALDI` kutusu** | **W6** (`components/Button.md`) & **W2** (`06_control_flow.js`) | `SumCalculator` + `if/else` & `Ternary Operator` Not Hesaplama | **Senaryo 2** |
| **İsim ve E-posta kutusu + Yeşil `Submit` butonu + Altta yeşil başarı mesajı veya `You wrote: ...` ekranı** | **W4** (`5-react-native-state.md` & `6-react-native-hooks.md`) / **W3** (`13-forms-example.jsx`) | `Example 2: Form State Management` (`SimpleForm`) & `1. useState Hook -> Example 2: Text Input` (`TextInputExample`) | **Senaryo 3** |
| **E-posta doğru yazılınca yeşil, yanlışsa kırmızı çerçeve + `Characters remaining: 120`** | **W6** (`components/TextInput.md` & `components/Text.md`) | `Example 1: Email Field with Instant Validation` (`EmailField`) & `Example 2: Dynamic Label with Character Counter` (`BioField`) | **Senaryo 4** |
| **Üstte `Search lessons...` arama kutusu ve yazdıkça süzülen liste** | **W6** (`components/TextInput.md`) & **W2** (`09_arrays.js`) | `Example 2: Search Bar Filtering a List` (`SearchableList`) | **Senaryo 5** |
| **Kare kutucuklara (`Checkbox`) tıkladıkça yeşile dönen ve yazının üstü çizilen liste + `Save Settings` butonu** | **W6** (`components/Checkbox.md`) | `Example 1: Lesson Task List` (`LessonChecklist`) & `Example 2: Participant Settings Form` (`ParticipantSettings`) | **Senaryo 6** |
| **Yuvarlak radyo butonlarına (`RadioButton`) tıkladıkça mavi seçilen liste** | **W6** (`components/RadioButton.md`) | `Example 1: Module Selection` (`ModuleSelector`) & `Example 2: FlatList-powered Track Picker` (`TrackSelector`) | **Senaryo 7** |
| **Açılır menüden (`Picker`) seviye seçince alttaki ders listesinin değişmesi** | **W6** (`components/Picker.md`) | `Example 1: Course Level Selector` (`CourseLevelPicker`) & `Example 2: Session Filter + Dependent List` (`ScheduleFilter`) | **Senaryo 8** |
| **Uzun sözleşme metnini en alta kaydırınca aktifleşen `Accept terms` butonu** | **W6** (`components/ScrollView.md`) | `Example 1: Terms of Service with Confirmation Button` (`TermsAgreement`) | **Senaryo 9** |

---

## 🧩 SENARYO 1: İki Sayı Toplama (`SumCalculator`) ve 4 İşlem Hesap Makinesi

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **6. Hafta (`W6/components/Button.md`):** `Examples -> Example 1: Sum Calculator` başlığındaki **`SumCalculator`** bileşeni (`first`, `second`, `result`, `handleSum`, `<Button title="Calculate sum" />`).
> - **2. Hafta (`W2/05_operators.js` & `W2/08_functions.js`):** Aritmetik operatörler (`+`, `-`, `*`, `/`) ve `Number(first) + Number(second)` dönüşümü.

### 🔹 1A. Hocanın 6. Hafta `W6/components/Button.md` Dosyasındaki Orijinal `SumCalculator` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/Button.md` dosyasındaki ilk örnek olan **`SumCalculator`** kodunun birebir (yorum satırsız) halidir.
- İki `<TextInput keyboardType="numeric">` kutusuna girilen değerleri `Number(first) + Number(second)` ile toplar ve sonucu mavi renkte (`#2563eb`) gösterir.

```jsx
import React, { useState } from 'react';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';

export default function SumCalculator() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState(null);

  const handleSum = () => {
    const total = Number(first) + Number(second);
    setResult(Number.isFinite(total) ? total : null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 24,
          gap: 16,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#0f172a' }}>
          Add two numbers
        </Text>
        <View
          style={{
            borderRadius: 16,
            backgroundColor: '#fff',
            padding: 20,
            gap: 16,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 12,
            elevation: 2,
          }}
        >
          <TextInput
            placeholder="First number"
            keyboardType="numeric"
            value={first}
            onChangeText={setFirst}
            style={{
              borderWidth: 1,
              borderColor: '#d4d4d8',
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}
          />
          <TextInput
            placeholder="Second number"
            keyboardType="numeric"
            value={second}
            onChangeText={setSecond}
            style={{
              borderWidth: 1,
              borderColor: '#d4d4d8',
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}
          />
          <Button title="Calculate sum" onPress={handleSum} />
          <View>
            <Text style={{ color: '#475569' }}>Result:</Text>
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#2563eb' }}>
              {result === null ? 'Enter two valid numbers' : result}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
```

### 🔹 1B. Sınav Senaryosu: Yan Yana 4 İşlem (`+`, `-`, `×`, `÷`) Butonlu Hesap Makinesi
**Kodun Üstü Açıklama:**
- Hoca sınavda `SumCalculator` örneğine sadece toplama değil, **yan yana 4 işlem (`Topla (+)`, `Çıkar (-)`, `Çarp (×)`, `Böl (÷)`) butonları** eklemenizi isterse bu kodu kullan.

```jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DortIslemHesaplayici() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('+');

  const calculate = (op) => {
    const n1 = Number(first);
    const n2 = Number(second);

    if (
      first.trim() === '' ||
      second.trim() === '' ||
      !Number.isFinite(n1) ||
      !Number.isFinite(n2)
    ) {
      setResult('Lütfen iki geçerli sayı girin');
      return;
    }

    setOperation(op);
    if (op === '+') setResult(n1 + n2);
    if (op === '-') setResult(n1 - n2);
    if (op === '×') setResult(n1 * n2);
    if (op === '÷') {
      setResult(n2 !== 0 ? (n1 / n2).toFixed(2) : 'Sıfıra bölünemez!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>4 İşlem Hesap Makinesi</Text>

        <View style={styles.card}>
          <TextInput
            placeholder="Birinci sayıyı girin"
            keyboardType="numeric"
            value={first}
            onChangeText={setFirst}
            style={styles.input}
          />

          <TextInput
            placeholder="İkinci sayıyı girin"
            keyboardType="numeric"
            value={second}
            onChangeText={setSecond}
            style={styles.input}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#2563eb' }]}
              onPress={() => calculate('+')}
            >
              <Text style={styles.opBtnText}>Topla (+)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#dc2626' }]}
              onPress={() => calculate('-')}
            >
              <Text style={styles.opBtnText}>Çıkar (-)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#16a34a' }]}
              onPress={() => calculate('×')}
            >
              <Text style={styles.opBtnText}>Çarp (×)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.opBtn, { backgroundColor: '#9333ea' }]}
              onPress={() => calculate('÷')}
            >
              <Text style={styles.opBtnText}>Böl (÷)</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>
              Sonuç ({operation} İşlemi):
            </Text>
            <Text style={styles.resultValue}>
              {result === null ? 'Sayıları girip işlem seçin' : result}
            </Text>
          </View>
        </View>
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
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
  },
  card: {
    borderRadius: 16,
    backgroundColor: '#ffffff',
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d4d4d8',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  opBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  opBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  resultBox: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    gap: 4,
  },
  resultLabel: {
    color: '#475569',
    fontSize: 14,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563eb',
  },
});
```

---

## 🧩 SENARYO 2: Vize (%40) ve Final (%60) Ortalaması + Geçti (Yeşil) / Kaldı (Kırmızı) Hesaplayıcı

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **2. Hafta (`W2/06_control_flow.js`):** `1. Conditional Statements (if, else if, else)` & `3. Ternary Operator (condition ? valueIfTrue : valueIfFalse)` başlıklarındaki not/puan kontrolü.
> - **6. Hafta (`W6/components/Button.md`):** `Example 1: Sum Calculator` (`SumCalculator`) iki sayı girişli hesaplama kartı mimarisi.

### 🔹 2A. Sınav Senaryosu: Vize & Final Ortalaması ve Geçti / Kaldı Renkli Sonuç Kartı
**Kodun Üstü Açıklama:**
- Hoca sınavda 2 sayı toplama yerine **"Vize (%40) ve Final (%60) notunu girin, ortalamayı hesaplayın; 50 ve üstüyse yeşil kutuda GEÇTİ, 50 altıysa kırmızı kutuda KALDI yazsın"** derse doğrudan bu kodu kullan.

```jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function VizeFinalHesaplayici() {
  const [midterm, setMidterm] = useState('');
  const [finalExam, setFinalExam] = useState('');
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    const v = Number(midterm);
    const f = Number(finalExam);
    if (midterm.trim() === '' || finalExam.trim() === '') return;
    const avg = v * 0.4 + f * 0.6;
    setAverage(avg);
  };

  const isPassed = average !== null && average >= 50;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Vize & Final Not Hesaplama</Text>

          <TextInput
            placeholder="Vize Notu (%40)"
            keyboardType="numeric"
            value={midterm}
            onChangeText={setMidterm}
            style={styles.input}
          />

          <TextInput
            placeholder="Final Notu (%60)"
            keyboardType="numeric"
            value={finalExam}
            onChangeText={setFinalExam}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.calcBtn}
            onPress={calculateAverage}
          >
            <Text style={styles.calcBtnText}>Ortalamayı Hesapla</Text>
          </TouchableOpacity>

          {average !== null && (
            <View
              style={[
                styles.resultCard,
                {
                  backgroundColor: isPassed ? '#dcfce7' : '#fee2e2',
                  borderColor: isPassed ? '#16a34a' : '#dc2626',
                },
              ]}
            >
              <Text
                style={[
                  styles.resultText,
                  { color: isPassed ? '#15803d' : '#b91c1c' },
                ]}
              >
                Ortalama: {average.toFixed(1)} —{' '}
                {isPassed ? 'GEÇTİ 🎉' : 'KALDI ❌'}
              </Text>
            </View>
          )}
        </View>
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
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  calcBtn: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  calcBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
```

---

## 🧩 SENARYO 3: İsim ve E-Posta Gönderim Formu (`SimpleForm`) ve Anlık Metin Gösterimi (`TextInputExample`)

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **4. Hafta (`W4/5-react-native-state.md`):** `State Management with useState Hook -> Example 2: Form State Management` başlığındaki **`SimpleForm`** bileşeni (`name`, `email`, `isSubmitted`, `handleSubmit`, `resetForm`).
> - **4. Hafta (`W4/6-react-native-hooks.md`):** `1. useState Hook -> Example 2: Text Input` başlığındaki **`TextInputExample`** bileşeni (`You wrote: {text}`, `Character count: {text.length}`).
> - **3. Hafta (`W3/13-forms-example.jsx`):** `1. Basic Controlled Input` (`BasicForm`) ve `2. Form Validation` (`ValidatedForm`).

### 🔹 3A. Hocanın 4. Hafta `W4/5-react-native-state.md` Dosyasındaki Orijinal `SimpleForm` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W4/5-react-native-state.md` dosyasındaki orijinal **`SimpleForm`** ders kodunun birebir (yorum satırsız) halidir.
- İsim veya e-posta alanı boş bırakılıp **Submit** butonuna basılırsa `Alert.alert('Error', 'Please fill all fields')` uyarısı verir.
- İkisi de doluysa `isSubmitted` değeri `true` olur ve altta yeşil başarı kutusu (`Form submitted successfully!`) ile **New Form** sıfırlama butonu açılır.

```jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim() === '' || email.trim() === '') {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsSubmitted(true);
    Alert.alert('Success', `Hello ${name}! Email: ${email}`);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setIsSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {isSubmitted && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Form submitted successfully!</Text>
          <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
            <Text style={styles.buttonText}>New Form</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#6C757D',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  successContainer: {
    backgroundColor: '#d4edda',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c3e6cb',
  },
  successText: {
    color: '#155724',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
```

### 🔹 3B. Hocanın 4. Hafta `W4/6-react-native-hooks.md` Dosyasındaki Orijinal `TextInputExample` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W4/6-react-native-hooks.md` dosyasındaki ikinci `useState` örneğidir.
- `<TextInput>` içine yazılan metni anında altında `You wrote: {text}` olarak ve karakter sayısını `Character count: {text.length}` olarak gösterir.

```jsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TextInputExample() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Input</Text>

      <TextInput
        style={styles.input}
        placeholder="Write something..."
        value={text}
        onChangeText={setText}
      />

      <Text style={styles.displayText}>You wrote: {text}</Text>

      <Text style={styles.countText}>Character count: {text.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  countText: {
    fontSize: 14,
    color: '#666',
  },
});
```

---

## 🧩 SENARYO 4: Anlık E-Posta Doğrulama (`EmailField`) ve Canlı Karakter Sayacı (`BioField`)

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **6. Hafta (`W6/components/TextInput.md`):** `Examples -> Example 1: Email Field with Instant Validation` başlığındaki **`EmailField`** bileşeni (`EMAIL_REGEX`, yeşil `#22c55e` / kırmızı `#ef4444` kenarlık).
> - **6. Hafta (`W6/components/Text.md`):** `Examples -> Example 2: Dynamic Label with Character Counter` başlığındaki **`BioField`** bileşeni (`MAX_LENGTH = 120`, `remaining = MAX_LENGTH - bio.length`, `limitReached = remaining <= 10`).

### 🔹 4A. Hocanın 6. Hafta `W6/components/TextInput.md` Dosyasındaki Orijinal `EmailField` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/TextInput.md` dosyasındaki ilk örnek olan **`EmailField`** kodunun birebir (yorum satırsız) halidir.
- E-posta formatı doğruysa (`@` ve `.` içeriyorsa) kutu çerçevesi **Yeşil (`#22c55e`)**, yanlışsa **Kırmızı (`#ef4444`)**, boşsa gri (`#334155`) olur.

```jsx
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailField() {
  const [value, setValue] = useState('');
  const isValid = EMAIL_REGEX.test(value);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <View
          style={{
            borderRadius: 16,
            backgroundColor: '#1f2937',
            padding: 24,
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#f1f5f9' }}>
            Verify your email address
          </Text>
          <TextInput
            value={value}
            onChangeText={setValue}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="name@example.com"
            placeholderTextColor="#94a3b8"
            style={{
              borderWidth: 1,
              borderColor:
                value.length === 0
                  ? '#334155'
                  : isValid
                  ? '#22c55e'
                  : '#ef4444',
              borderRadius: 10,
              paddingHorizontal: 14,
              paddingVertical: 12,
              color: '#f8fafc',
            }}
          />
          <Text style={{ color: isValid ? '#22c55e' : '#f97316' }}>
            {value.length === 0
              ? 'Start typing your email address.'
              : isValid
              ? 'Looks like a valid address.'
              : 'Please enter a valid email address.'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
```

### 🔹 4B. Hocanın 6. Hafta `W6/components/Text.md` Dosyasındaki Orijinal `BioField` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/Text.md` dosyasındaki ikinci örnek olan **`BioField`** kodunun birebir (yorum satırsız) halidir.
- `MAX_LENGTH = 120` karakter sınırı vardır; kalan karakter sayısı `10` ve altına düştüğünde (`limitReached`) altındaki yazı turuncu (`#f97316`) olur.

```jsx
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

const MAX_LENGTH = 120;

export default function BioField() {
  const [bio, setBio] = useState('');
  const remaining = MAX_LENGTH - bio.length;
  const limitReached = remaining <= 10;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 24,
          gap: 12,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#0f172a' }}>
          Profile Summary
        </Text>
        <View
          style={{
            borderRadius: 16,
            backgroundColor: '#fff',
            padding: 20,
            gap: 12,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 10,
            elevation: 2,
          }}
        >
          <TextInput
            multiline
            maxLength={MAX_LENGTH}
            value={bio}
            onChangeText={setBio}
            placeholder="Introduce yourself in a few sentences..."
            style={{
              minHeight: 120,
              borderWidth: 1,
              borderColor: '#d4d4d8',
              borderRadius: 10,
              padding: 14,
              textAlignVertical: 'top',
            }}
          />
          <Text style={{ color: limitReached ? '#f97316' : '#475569' }}>
            Characters remaining: {remaining}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
```

---

## 🧩 SENARYO 5: Arama Çubuğu ile Canlı Liste Filtreleme (`SearchableList`)

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **6. Hafta (`W6/components/TextInput.md`):** `Examples -> Example 2: Search Bar Filtering a List` başlığındaki **`SearchableList`** bileşeni (`query`, `filteredLessons`, `ListEmptyComponent`).
> - **2. Hafta (`W2/09_arrays.js`):** `.filter()` metodu ile dizi filtreleme.

### 🔹 5A. Hocanın 6. Hafta `W6/components/TextInput.md` Dosyasındaki Orijinal `SearchableList` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/TextInput.md` dosyasındaki orijinal **`SearchableList`** örneğidir.
- Arama kutusuna (`query`) yazılan metin `.toLowerCase()` ile küçük harfe çevrilir ve `LESSONS` dizisinde `.includes(lowered)` ile eşleşen dersler anında listelenir.

```jsx
import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';

const LESSONS = [
  { id: '1', title: 'Intro to React Native' },
  { id: '2', title: 'Working with Expo' },
  { id: '3', title: 'Navigation Basics' },
  { id: '4', title: 'State Management' },
  { id: '5', title: 'Performance Tips' },
];

export default function SearchableList() {
  const [query, setQuery] = useState('');

  const filteredLessons = useMemo(() => {
    const lowered = query.toLowerCase();
    return LESSONS.filter((lesson) =>
      lesson.title.toLowerCase().includes(lowered)
    );
  }, [query]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View style={{ flex: 1, padding: 24, gap: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#0f172a' }}>
          Search the lesson archive
        </Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search lessons..."
          returnKeyType="search"
          style={{
            borderWidth: 1,
            borderColor: '#cbd5f5',
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: '#fff',
          }}
        />
        <FlatList
          data={filteredLessons}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View
              style={{
                padding: 16,
                borderRadius: 12,
                backgroundColor: '#e0f2fe',
              }}
            >
              <Text style={{ color: '#1f2937' }}>
                No lessons match your search.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <View
              style={{
                padding: 16,
                borderRadius: 12,
                backgroundColor: '#e0f2fe',
              }}
            >
              <Text style={{ fontWeight: '600', color: '#0f172a' }}>
                {item.title}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      </View>
    </SafeAreaView>
  );
}
```

---

## 🧩 SENARYO 6: Seçildikçe Üstü Çizilen `Checkbox` Görev Listesi (`LessonChecklist`) ve Ayar Formu (`ParticipantSettings`)

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **6. Hafta (`W6/components/Checkbox.md`):**
>   - `Examples -> Example 1: Lesson Task List` başlığındaki **`LessonChecklist`** bileşeni (`TASKS`, `completed`, `textDecorationLine: completed[task.id] ? 'line-through' : 'none'`).
>   - `Examples -> Example 2: Participant Settings Form` başlığındaki **`ParticipantSettings`** bileşeni (`SETTINGS`, `options`, `allActive = Object.values(options).some(Boolean)`).

### 🔹 6A. Hocanın 6. Hafta `W6/components/Checkbox.md` Dosyasındaki Orijinal `LessonChecklist` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/Checkbox.md` dosyasındaki ilk örnek olan **`LessonChecklist`** kodunun birebir halidir (`expo-checkbox` kullanır).

```jsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';

const TASKS = [
  { id: 'slides', label: 'Review the new slides' },
  { id: 'demo', label: 'Run the Image + ScrollView demo' },
  { id: 'prep', label: 'Draft the Q&A scenarios' },
];

export default function LessonChecklist() {
  const [completed, setCompleted] = useState({});

  const toggleTask = (taskId, value) => {
    setCompleted((prev) => ({ ...prev, [taskId]: value }));
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#0f172a', padding: 24, gap: 16 }}
    >
      <Text style={{ color: '#e2e8f0', fontSize: 22, fontWeight: '700' }}>
        W6 Prep
      </Text>
      {TASKS.map((task) => (
        <View
          key={task.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingVertical: 8,
          }}
        >
          <Checkbox
            value={!!completed[task.id]}
            onValueChange={(value) => toggleTask(task.id, value)}
            color={completed[task.id] ? '#22c55e' : undefined}
            style={{ width: 22, height: 22, borderRadius: 6 }}
          />
          <Text
            style={{
              color: '#e2e8f0',
              textDecorationLine: completed[task.id] ? 'line-through' : 'none',
            }}
          >
            {task.label}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
}
```

### 🔹 6B. Hocanın 6. Hafta `W6/components/Checkbox.md` Dosyasındaki Orijinal `ParticipantSettings` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/Checkbox.md` dosyasındaki ikinci örnek olan **`ParticipantSettings`** kodunun birebir halidir.
- En az bir kutucuk seçildiğinde (`Object.values(options).some(Boolean)`) alttaki **Save Settings** butonu aktifleşir (`#38bdf8`).

```jsx
import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

const SETTINGS = [
  { id: 'recordings', label: 'Share session recordings' },
  { id: 'reminders', label: 'Send a reminder 1 hour before class' },
  { id: 'survey', label: 'Trigger a mini survey after each lesson' },
];

export default function ParticipantSettings() {
  const [options, setOptions] = useState(
    SETTINGS.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const allActive = useMemo(
    () => Object.values(options).some(Boolean),
    [options]
  );

  const toggle = (key, value) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#020617', padding: 24 }}>
      <Text
        style={{
          color: '#e2e8f0',
          fontSize: 20,
          fontWeight: '600',
          marginBottom: 16,
        }}
      >
        Participant Settings
      </Text>
      {SETTINGS.map((setting) => (
        <View
          key={setting.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 12,
          }}
        >
          <Text style={{ color: '#e2e8f0', fontSize: 16 }}>{setting.label}</Text>
          <Checkbox
            value={options[setting.id]}
            onValueChange={(value) => toggle(setting.id, value)}
            color={options[setting.id] ? '#38bdf8' : undefined}
          />
        </View>
      ))}

      <TouchableOpacity
        style={{
          marginTop: 32,
          backgroundColor: allActive ? '#38bdf8' : '#334155',
          borderRadius: 16,
          paddingVertical: 16,
          alignItems: 'center',
        }}
        disabled={!allActive}
      >
        <Text style={{ color: '#0f172a', fontWeight: '700' }}>
          Save Settings
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
```

### 🔹 6C. Sınav Garantili Versiyon: Hiçbir Paket Kurmadan (`Pressable` ile) Çalışan `LessonChecklist` + `ParticipantSettings`
**Kodun Üstü Açıklama:**
- Snack Expo'da `expo-checkbox` paketi kurulu değilse hata almamak için hem `LessonChecklist` hem de `ParticipantSettings` görünümünü saf React Native `Pressable` + `View` ile birebir oluşturan koddur.

```jsx
import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TASKS = [
  { id: 'slides', label: 'Review the new slides' },
  { id: 'demo', label: 'Run the Image + ScrollView demo' },
  { id: 'prep', label: 'Draft the Q&A scenarios' },
];

const SETTINGS = [
  { id: 'recordings', label: 'Share session recordings' },
  { id: 'reminders', label: 'Send a reminder 1 hour before class' },
  { id: 'survey', label: 'Trigger a mini survey after each lesson' },
];

export default function CheckboxGorevVeAyarlar() {
  const [completed, setCompleted] = useState({});
  const [options, setOptions] = useState({
    recordings: false,
    reminders: false,
    survey: false,
  });

  const toggleTask = (taskId) => {
    setCompleted((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const toggleOption = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allActive = useMemo(
    () => Object.values(options).some(Boolean),
    [options]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>W6 Prep (Checkbox List)</Text>
        {TASKS.map((task) => {
          const isChecked = !!completed[task.id];
          return (
            <Pressable
              key={task.id}
              onPress={() => toggleTask(task.id)}
              style={styles.taskRow}
            >
              <View
                style={[
                  styles.checkboxBox,
                  {
                    backgroundColor: isChecked ? '#22c55e' : 'transparent',
                    borderColor: isChecked ? '#22c55e' : '#64748b',
                  },
                ]}
              >
                {isChecked && <Text style={styles.checkMark}>✓</Text>}
              </View>
              <Text
                style={[
                  styles.taskLabel,
                  {
                    textDecorationLine: isChecked ? 'line-through' : 'none',
                    color: isChecked ? '#94a3b8' : '#e2e8f0',
                  },
                ]}
              >
                {task.label}
              </Text>
            </Pressable>
          );
        })}

        <Text style={[styles.heading, { marginTop: 24 }]}>
          Participant Settings
        </Text>
        {SETTINGS.map((setting) => {
          const isChecked = !!options[setting.id];
          return (
            <Pressable
              key={setting.id}
              onPress={() => toggleOption(setting.id)}
              style={styles.settingRow}
            >
              <Text style={styles.taskLabel}>{setting.label}</Text>
              <View
                style={[
                  styles.checkboxBox,
                  {
                    backgroundColor: isChecked ? '#38bdf8' : 'transparent',
                    borderColor: isChecked ? '#38bdf8' : '#64748b',
                  },
                ]}
              >
                {isChecked && <Text style={styles.checkMarkDark}>✓</Text>}
              </View>
            </Pressable>
          );
        })}

        <TouchableOpacity
          style={[
            styles.saveBtn,
            { backgroundColor: allActive ? '#38bdf8' : '#334155' },
          ]}
          disabled={!allActive}
        >
          <Text style={styles.saveBtnText}>Save Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    padding: 24,
    gap: 12,
  },
  heading: {
    color: '#e2e8f0',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  checkboxBox: {
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
    fontSize: 14,
  },
  checkMarkDark: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 14,
  },
  taskLabel: {
    color: '#e2e8f0',
    fontSize: 16,
  },
  saveBtn: {
    marginTop: 20,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 16,
  },
});
```

---

## 🧩 SENARYO 7: `RadioButton` (`Pressable`) ile Yuvarlak Tekli Seçim Listesi (`ModuleSelector` & `TrackSelector`)

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **6. Hafta (`W6/components/RadioButton.md`):**
>   - `Examples -> Example 1: Module Selection` başlığındaki **`ModuleSelector`** ve **`RadioItem`** bileşenleri.
>   - `Examples -> Example 2: FlatList-powered Track Picker` başlığındaki **`TrackSelector`** bileşeni.

### 🔹 7A. Hocanın 6. Hafta `W6/components/RadioButton.md` Dosyasındaki Orijinal `ModuleSelector` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/RadioButton.md` dosyasındaki ilk örnek olan **`ModuleSelector`** kodunun birebir halidir.
- `RadioItem` alt bileşeni `width: 22, height: 22, borderRadius: 11` dış çember ve seçili olduğunda `width: 10, height: 10, borderRadius: 5` iç mavi nokta çizer.

```jsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';

const MODULES = [
  { id: 'core', title: 'Core Components' },
  { id: 'state', title: 'State & Props' },
  { id: 'nav', title: 'Navigation' },
];

function RadioItem({ label, value, isSelected, onPress }) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected: isSelected }}
      onPress={() => onPress(value)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 11,
          borderWidth: 2,
          borderColor: isSelected ? '#38bdf8' : '#475569',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isSelected && (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#38bdf8',
            }}
          />
        )}
      </View>
      <Text style={{ color: '#e2e8f0', fontSize: 16 }}>{label}</Text>
    </Pressable>
  );
}

export default function ModuleSelector() {
  const [value, setValue] = useState('core');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a', padding: 24 }}>
      <Text style={{ color: '#94a3b8' }}>Active Module</Text>
      <Text
        style={{
          color: '#e2e8f0',
          fontSize: 22,
          fontWeight: '700',
          marginBottom: 16,
        }}
      >
        {MODULES.find((item) => item.id === value)?.title}
      </Text>
      {MODULES.map((item) => (
        <RadioItem
          key={item.id}
          label={item.title}
          value={item.id}
          isSelected={value === item.id}
          onPress={setValue}
        />
      ))}
    </SafeAreaView>
  );
}
```

### 🔹 7B. Hocanın 6. Hafta `W6/components/RadioButton.md` Dosyasındaki Orijinal `TrackSelector` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/RadioButton.md` dosyasındaki ikinci örnek olan **`TrackSelector`** kodunun birebir halidir (`FlatList` içinde kart görünümlü RadioButton).

```jsx
import React, { useState } from 'react';
import { SafeAreaView, FlatList, View, Text, Pressable } from 'react-native';

const TRACKS = [
  { id: 'foundation', label: 'Foundation · Layout' },
  { id: 'growth', label: 'Growth · Networking' },
  { id: 'advanced', label: 'Advanced · Performance' },
  { id: 'capstone', label: 'Capstone · Final Project' },
];

export default function TrackSelector() {
  const [selected, setSelected] = useState('foundation');

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#020617', paddingTop: 24 }}
    >
      <FlatList
        data={TRACKS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
        renderItem={({ item }) => {
          const isActive = item.id === selected;
          return (
            <Pressable
              accessibilityRole="radio"
              accessibilityState={{ selected: isActive }}
              onPress={() => setSelected(item.id)}
              style={{
                backgroundColor: isActive ? '#172554' : '#0f172a',
                borderRadius: 16,
                padding: 16,
                borderWidth: 1,
                borderColor: isActive ? '#38bdf8' : '#1e293b',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: isActive ? '#38bdf8' : '#475569',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isActive && (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#38bdf8',
                    }}
                  />
                )}
              </View>
              <Text style={{ color: '#e2e8f0', fontSize: 16 }}>
                {item.label}
              </Text>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
```

---

## 🧩 SENARYO 8: `Picker` (Açılır Menü) ile Seviye Seçimi (`CourseLevelPicker`) ve Seçime Göre Liste Filtreleme (`ScheduleFilter`)

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **6. Hafta (`W6/components/Picker.md`):**
>   - `Examples -> Example 1: Course Level Selector` başlığındaki **`CourseLevelPicker`** bileşeni.
>   - `Examples -> Example 2: Session Filter + Dependent List` başlığındaki **`ScheduleFilter`** bileşeni.

### 🔹 8A. Hocanın 6. Hafta `W6/components/Picker.md` Dosyasındaki Orijinal `CourseLevelPicker` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/Picker.md` dosyasındaki ilk örnek olan **`CourseLevelPicker`** kodunun birebir halidir.
- Açılır menüden seçilen `level` değerinin başlığını üstte büyük puntolarla (`Aktif Ders Bloğu`) gösterir.

```jsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const COURSE_LEVELS = [
  { id: 'foundation', label: 'Foundation · Components' },
  { id: 'growth', label: 'Growth · Navigation' },
  { id: 'advanced', label: 'Advanced · Performance' },
];

export default function CourseLevelPicker() {
  const [level, setLevel] = useState('foundation');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a', padding: 24 }}>
      <Text style={{ color: '#94a3b8', fontSize: 16 }}>Aktif Ders Bloğu</Text>
      <Text style={{ color: '#e2e8f0', fontSize: 28, fontWeight: '700' }}>
        {COURSE_LEVELS.find((item) => item.id === level)?.label}
      </Text>

      <View
        style={{ marginTop: 32, backgroundColor: '#1e293b', borderRadius: 12 }}
      >
        <Picker
          selectedValue={level}
          onValueChange={(value) => setLevel(value)}
          style={{ color: '#e2e8f0' }}
          dropdownIconColor="#38bdf8"
        >
          {COURSE_LEVELS.map((item) => (
            <Picker.Item
              key={item.id}
              label={item.label}
              value={item.id}
              color="#e2e8f0"
            />
          ))}
        </Picker>
      </View>
    </SafeAreaView>
  );
}
```

### 🔹 8B. Hocanın 6. Hafta `W6/components/Picker.md` Dosyasındaki Orijinal `ScheduleFilter` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/Picker.md` dosyasındaki ikinci örnek olan **`ScheduleFilter`** kodunun birebir halidir.
- Açılır menüden seçilen `track` (`foundation`, `growth`, `advanced`) değerine göre alttaki `FlatList` içindeki oturumlar filtrelenir.

```jsx
import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SESSIONS = [
  { id: '1', title: 'Intro to View', track: 'foundation' },
  { id: '2', title: 'Layout Playground', track: 'foundation' },
  { id: '3', title: 'State Drill', track: 'growth' },
  { id: '4', title: 'FlatList Patterns', track: 'growth' },
  { id: '5', title: 'Perf Budgeting', track: 'advanced' },
];

export default function ScheduleFilter() {
  const [track, setTrack] = useState('foundation');
  const filtered = useMemo(
    () => SESSIONS.filter((session) => session.track === track),
    [track]
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#020617', padding: 24 }}
    >
      <View
        style={{
          backgroundColor: '#1e293b',
          borderRadius: 14,
          paddingHorizontal: 12,
        }}
      >
        <Picker
          selectedValue={track}
          onValueChange={(value) => setTrack(value)}
          mode="dropdown"
          dropdownIconColor="#f97316"
        >
          <Picker.Item label="Foundation Track" value="foundation" />
          <Picker.Item label="Growth Track" value="growth" />
          <Picker.Item label="Advanced Track" value="advanced" />
        </Picker>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12, marginTop: 24 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#0f172a',
              padding: 18,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#1f2937',
            }}
          >
            <Text
              style={{ color: '#e2e8f0', fontSize: 16, fontWeight: '600' }}
            >
              {item.title}
            </Text>
            <Text style={{ color: '#94a3b8', marginTop: 4 }}>
              {track === 'foundation'
                ? 'Temel'
                : track === 'growth'
                ? 'Orta'
                : 'İleri'}{' '}
              seviye
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text
            style={{ color: '#94a3b8', textAlign: 'center', marginTop: 32 }}
          >
            Bu track için oturum planlanmadı.
          </Text>
        }
      />
    </SafeAreaView>
  );
}
```

---

## 🧩 SENARYO 9: Sözleşmeyi En Alta Kadar Kaydırınca Aktifleşen Onay Butonu (`TermsAgreement`)

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **6. Hafta (`W6/components/ScrollView.md`):** `Examples -> Example 1: Terms of Service with Confirmation Button` başlığındaki **`TermsAgreement`** bileşeni (`onScroll`, `reachedEnd`, `accepted`, `<Button title="Accept terms" />`).

### 🔹 9A. Hocanın 6. Hafta `W6/components/ScrollView.md` Dosyasındaki Orijinal `TermsAgreement` Kodu
**Kodun Üstü Açıklama:**
- Hocanın `W6/components/ScrollView.md` dosyasındaki ilk örnek olan **`TermsAgreement`** kodunun birebir (yorum satırsız) halidir.
- Kullanıcı `<ScrollView>` içindeki uzun metni en alta kadar kaydırmadan (`reachedEnd === false`) alttaki `<Button>` pasiftir ve üzerinde `"Scroll to the bottom to continue"` yazar.
- En alta ulaşıldığında buton aktifleşir (`"Accept terms"`), tıklandığında ise yeşile döner (`"Accepted"`).

```jsx
import React, { useRef, useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

const TERMS = `${'Terms of service '.repeat(120)}\n\nPlease confirm that you have read the agreement.`;

export default function TermsAgreement() {
  const [accepted, setAccepted] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const scrollViewRef = useRef(null);
  const requestedPosition = useRef(false);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } =
      event.nativeEvent;
    const scrolledToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (scrolledToBottom && !reachedEnd) {
      setReachedEnd(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e2e8f0' }}>
      <View style={{ flex: 1, padding: 24, gap: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#0f172a' }}>
          Terms of Service
        </Text>
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{
            padding: 18,
            backgroundColor: '#fff',
            borderRadius: 16,
            gap: 12,
            minHeight: 400,
          }}
          onContentSizeChange={() => {
            if (!requestedPosition.current && scrollViewRef.current) {
              requestedPosition.current = true;
              scrollViewRef.current.scrollTo({ y: 0, animated: false });
            }
          }}
          nestedScrollEnabled
        >
          <Text style={{ lineHeight: 22, color: '#334155' }}>{TERMS}</Text>
        </ScrollView>
        <View style={{ marginTop: 8, marginBottom: 32 }}>
          <Button
            title={
              reachedEnd
                ? accepted
                  ? 'Accepted'
                  : 'Accept terms'
                : 'Scroll to the bottom to continue'
            }
            disabled={!reachedEnd || accepted}
            onPress={() => setAccepted(true)}
            color={accepted ? '#22c55e' : '#2563eb'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
```
