# 👥 2. BÖLÜM: İSİM, CİNSİYET VE OKEY BUTONU İLE RENK DEĞİŞTİREN DİNAMİK LİSTELER

> **Sınavda Bu Dosyayı Ne Zaman Açacaksın?**
> Derste hocanın yaptırdığı **"İsimlerin yanında butonlar vardı, o butonlara okey verdikçe satırın veya butonun rengi ismin cinsiyetine göre (Erkek -> Mavi, Kadın -> Pembe) değişiyordu"** sorusu veya benzeri **"Onayla/Seç butonuna basınca kişinin durumuna, notuna, bölümüne göre renk değiştirme, yeni kişi ekleme/silme"** soruları geldiğinde doğrudan bu dosyadaki kodları kullan.
> Her senaryoda **hocanın bu konuyu hangi hafta (`W2`, `W3`, `W4`, `W6`), hangi konu başlığı ve hangi fonksiyon adıyla işlediği** belirtilmiş; hem **hocanın dersteki orijinal kodu** hem de **sınavda isteyebileceği değiştirilmiş senaryo kodu** yorum satırsız olarak verilmiştir.

![İsim Cinsiyet Okey Listesi Görseli](./gorseller/02-isim-cinsiyet-okey-listesi.svg)

---

## 🎯 GÖRSELE BAK -> HANGİ HAFTANIN HANGİ KODUNU KULLANACAĞINI SEÇ

| Hocanın Verdiği Görselde Ne Görüyorsun? | İşlendiği Hafta & Konu Başlığı | Hocanın Kodundaki Karşılığı | Hangi Bölümü Kopyalayacaksın? |
| :--- | :--- | :--- | :--- |
| **Satırın sağında `Switch` anahtarı var; açılınca satır yeşil (`#dcfce7`) oluyor ve altta `Completed: X / 4` yazıyor** | **W6** (`FlatList.md` -> `Example 1: Course Modules with Completion State`) | `CourseModules()` | **Senaryo 1 -> Kod 1A** (Hocanın Orijinal Kodu) |
| **İsimlerin sağında "Okey" butonu var; basınca Erkekler Mavi (`#dbeafe`), Kadınlar Pembe (`#fce7f3`) oluyor** | **W6** (`FlatList.md` - `Example 1`) + **W3** (`07-conditional-rendering.md`) | `CourseModules` kodunun İsim + Cinsiyet + Buton uyarlaması | **Senaryo 1 -> Kod 1B** (Dersteki Klasik Örnek) |
| **İsimlerin solunda Yuvarlak Fotoğraf, üstte Yeni İsim Ekleme, Silme ve `Tümü / Erkek / Kadın` Filtreleme var** | **W6** (`FlatList.md` + `Image.md` + `TextInput.md`) & **W3** (`10-data-sharing.md` - `TodoApp`) | `CourseModules` + `SearchableList` + `TodoApp` birleşimi | **Senaryo 2** (Fotoğraflı Tam Paket) |
| **Kartın tamamı değil SADECE butonun rengi veya SADECE ismin üstü çizili (`line-through`) hali değişiyor** | **W6** (`Checkbox.md` -> `Example 1: Lesson Task List`) & **W4** (`4-react-native-props.md`) | `LessonChecklist` (`textDecorationLine`) & `MessageExample` (`borderLeftWidth`) | **Senaryo 3** (Nokta Atışı Varyasyonlar) |
| **İsimlerin yanında Notu (Örn: 78, 42) var; butona basınca Geçti (Yeşil) / Kaldı (Kırmızı) oluyor** | **W2** (`06_Control_Flow` & `05_Operators`) + **W6** (`FlatList.md` - `Example 1`) | `CourseModules` + Koşullu Operatör (`grade >= 50`) | **Senaryo 4** (Öğrenci Notu Geçti / Kaldı) |
| **Butona her basışta 3 durum arasında dönüyor (`Bekliyor -> Onaylandı -> Reddedildi`) veya Aşağı Çekince Yenilenen Liste (`Pull-to-Refresh`)** | **W6** (`FlatList.md` -> `Example 2: Infinite Scroll with Pull-to-Refresh`) | `InfiniteNotes()` | **Senaryo 5 -> Kod 5A & Kod 5B** |

---

## 🧩 SENARYO 1: Hocanın `CourseModules` Listesi ve Dersteki "İsim + Cinsiyet + Okey Butonu" Uygulaması

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Haftalar:** **W6 (6. Hafta)** ve **W3 (3. Hafta)**
- **Konu Başlığı ve Dosya Adı:**
  - `W6 / components/FlatList.md` -> **`Example 1: Course Modules with Completion State`** (`CourseModules` fonksiyonu)
  - `W3 / 07-conditional-rendering.md` & `08-list-rendering.md` -> **`Conditional List Rendering`** (`ConditionalList` ve `TodoList` fonksiyonları)

### 🔍 Kod 1A (Hocanın W6'daki Orijinal Ders Kodu): `CourseModules` (`FlatList.md - Example 1`)
- Hocanın derste "İsim + Cinsiyet + Okey" örneğini yaparken temel aldığı orijinal `W6 / FlatList.md` kodudur.
- `completed` state'i (`useState({})`) hangi `id` değerinin tamamlandığını tutar.
- `done = completed[item.id]` kontrolüyle satırın arka planını `done ? '#dcfce7' : '#fff'`, çerçevesini ise `done ? '#22c55e' : '#e2e8f0'` yapar.

```jsx
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Switch, Text, View } from 'react-native';

const MODULES = [
  { id: '1', title: 'Introduction & Setup', duration: 12 },
  { id: '2', title: 'Core Components', duration: 18 },
  { id: '3', title: 'State & Props', duration: 22 },
  { id: '4', title: 'Navigation', duration: 15 },
];

export default function CourseModules() {
  const [completed, setCompleted] = useState({});

  const toggleModule = (id, value) => {
    setCompleted((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View style={{ padding: 24, gap: 16, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#0f172a' }}>
          Course Modules
        </Text>
        <FlatList
          data={MODULES}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => {
            const done = completed[item.id];
            return (
              <View
                style={{
                  padding: 18,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: done ? '#22c55e' : '#e2e8f0',
                  backgroundColor: done ? '#dcfce7' : '#ffffff',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ gap: 4 }}>
                  <Text style={{ fontSize: 16, fontWeight: '600' }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: '#475569' }}>
                    Duration: {item.duration} min
                  </Text>
                </View>
                <Switch
                  value={!!done}
                  onValueChange={(value) => toggleModule(item.id, value)}
                />
              </View>
            );
          }}
          ListFooterComponent={() => {
            const total = MODULES.length;
            const doneCount = Object.values(completed).filter(Boolean).length;
            return (
              <Text
                style={{
                  marginTop: 16,
                  textAlign: 'center',
                  color: '#1f2937',
                }}
              >
                Completed: {doneCount} / {total}
              </Text>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
```

### 🔍 Kod 1B (Derste Yapılan Sınav Senaryosu): İsimlerin Yanında Okey Butonu — Basınca Cinsiyete Göre Renk Değişimi
- Hocanın yukarıdaki `CourseModules` kodundaki `<Switch>` yerine `<TouchableOpacity>` **"Okey Ver / ✓ Okey"** butonu koyup, okey verildiğinde kişinin cinsiyetine göre (`item.gender === 'Erkek'`):
  - **Henüz Okey Verilmediyse (`!isApproved`):** Kart Beyaz (`#ffffff`), Buton Gri (`#64748b`)
  - **Okey Verildiyse + Erkekse (`isMale`):** Kart Açık Mavi (`#dbeafe`), Çerçeve ve Buton Koyu Mavi (`#2563eb`)
  - **Okey Verildiyse + Kadınsa (`!isMale`):** Kart Açık Pembe (`#fce7f3`), Çerçeve ve Buton Koyu Pembe (`#db2777`)
  yaptırdığı dersteki örneğin birebir kodudur.

```jsx
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

export default function IsimCinsiyetOkeyListesi() {
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
        <Text style={styles.title}>İsim ve Cinsiyet Onay Listesi</Text>
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
```

---

## 🧩 SENARYO 2: Fotoğraflı + İsim + Cinsiyet + Okey Butonu + Yeni İsim Ekleme + Silme + Filtreleme

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Haftalar:** **W3 (3. Hafta)** ve **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:**
  - `W3 / 10-data-sharing-example.jsx` -> **`Todo App with useReducer` (`TodoApp`)** ve `W3 / 07-conditional-rendering-example.jsx` -> **`Conditional List Rendering` (`ConditionalList`)**
  - `W6 / components/FlatList.md` (`CourseModules`) + `W6 / components/SafeAreaView.md` (`NotchedHeaderDemo` yuvarlak avatar) + `W6 / components/TextInput.md` (`SearchableList`)

### 🔍 Bu Kod Bloğu Ne İşe Yarar?
- Her kişinin solunda **yuvarlak profil fotoğrafı (`avatar`)**, ortada **isim ve cinsiyeti**, sağda **Okey ve Sil** butonları yer alır.
- Üstteki `TextInput` ve `Erkek / Kadın` seçim butonlarıyla listeye yeni kişi eklenebilir (`addPerson`).
- `Tümü / Erkek / Kadın` sekmeleriyle liste cinsiyete göre filtrelenebilir (`filteredPeople`).

```jsx
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

export default function FotografliIsimCinsiyetYonetimi() {
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
```

---

## 🧩 SENARYO 3: Nokta Atışı Varyasyonlar (Sadece Buton Rengi Değişsin / Sadece İsim Üstü Çizilsin)

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Haftalar:** **W4 (4. Hafta)** ve **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:**
  - `W6 / components/Checkbox.md` -> **`Example 1: Lesson Task List` (`LessonChecklist`)** (`textDecorationLine: completed[task.id] ? 'line-through' : 'none'`)
  - `W4 / 4-react-native-props.md` -> **`Example 1: Simple Message Component` (`MessageExample`)** (`borderLeftWidth: 4`)

### 🔍 Varyasyon A: Kart Beyaz Kalsın, Sadece Okey Butonu ve İsim Rengi Cinsiyete Göre Değişsin
Hoca görselde satırın arka planını hep beyaz bırakıp **sadece sağdaki butonun ve ismin rengini** okeylenince Erkek -> Mavi (`#2563eb`), Kadın -> Pembe (`#db2777`) yaptıysa `renderItem` içine şu bloğu koy:

```jsx
renderItem={({ item }) => {
  const isApproved = !!approved[item.id];
  const isMale = item.gender === 'Erkek';
  const dynamicColor = !isApproved
    ? '#64748b'
    : isMale
    ? '#2563eb'
    : '#db2777';

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: dynamicColor }}>
        {item.name} ({item.gender})
      </Text>
      <TouchableOpacity
        onPress={() => toggleApprove(item.id)}
        style={{
          backgroundColor: dynamicColor,
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
          {isApproved ? '✓ Okey' : 'Okey Ver'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}}
```

### 🔍 Varyasyon B: Okey Verilince İsmin Üstü Çizilsin (`line-through`) ve Sol Kenar Çizgisi Renklensin
Hoca görselde kartın sadece **sol kenarında kalın renkli bir şerit (`borderLeftWidth: 6`)** gösterip okeylenince ismin üstünü çizdiyse `<View>` ve `<Text>` için şu bloğu kullan:

```jsx
<View
  style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    borderLeftWidth: 6,
    borderLeftColor: !isApproved ? '#94a3b8' : isMale ? '#2563eb' : '#db2777',
  }}
>
  <Text
    style={{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0f172a',
      textDecorationLine: isApproved ? 'line-through' : 'none',
    }}
  >
    {item.name}
  </Text>
</View>
```

---

## 🧩 SENARYO 4: Öğrenci Not Listesi — Okey / Sonucu Gör Butonuna Basınca Geçti (Yeşil) / Kaldı (Kırmızı) Olması

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Haftalar:** **W2 (2. Hafta)** ve **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:**
  - `W2 / topics/05_operators.js` (**Comparison & Ternary Operators**) & `06_control_flow.js` (**if/else**)
  - `W6 / components/FlatList.md` -> **`Example 1: Course Modules with Completion State`** (`CourseModules`)

### 🔍 Bu Kod Bloğu Ne İşe Yarar?
- Hoca sınavda cinsiyet yerine **öğrenci notu (`grade`)** verip, sağdaki **"Sonucu Gör / Okey"** butonuna basıldığında notu `50` ve üzeri olanları **Yeşil (`#dcfce7` / `#16a34a` - GEÇTİ)**, `50` altında olanları **Kırmızı (`#fee2e2` / `#dc2626` - KALDI)** yaptırırsa doğrudan bu kodu yapıştır.

```jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const STUDENTS = [
  { id: '1', name: 'Ahmet Yılmaz', grade: 78 },
  { id: '2', name: 'Zeynep Kaya', grade: 42 },
  { id: '3', name: 'Mehmet Demir', grade: 90 },
  { id: '4', name: 'Elif Şahin', grade: 49 },
  { id: '5', name: 'Burak Çelik', grade: 60 },
];

export default function OgrenciNotOkeyListesi() {
  const [checked, setChecked] = useState({});

  const toggleCheck = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Öğrenci Başarı Kontrol Listesi</Text>
        <FlatList
          data={STUDENTS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 12 }}
          renderItem={({ item }) => {
            const isChecked = !!checked[item.id];
            const isPassed = item.grade >= 50;

            const bg = !isChecked
              ? '#ffffff'
              : isPassed
              ? '#dcfce7'
              : '#fee2e2';

            const color = !isChecked
              ? '#475569'
              : isPassed
              ? '#16a34a'
              : '#dc2626';

            return (
              <View
                style={[
                  styles.card,
                  { backgroundColor: bg, borderColor: color },
                ]}
              >
                <View>
                  <Text style={styles.studentName}>{item.name}</Text>
                  <Text style={[styles.gradeText, { color }]}>
                    Not: {item.grade} •{' '}
                    {!isChecked
                      ? 'Açıklanmadı'
                      : isPassed
                      ? 'GEÇTİ 🎉'
                      : 'KALDI ❌'}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => toggleCheck(item.id)}
                  style={[styles.btn, { backgroundColor: color }]}
                >
                  <Text style={styles.btnText}>
                    {isChecked ? 'Gizle' : 'Sonucu Gör'}
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
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
  },
  studentName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  gradeText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
```

---

## 🧩 SENARYO 5: 3 Durumlu Döngüsel Buton (`Bekliyor -> Onaylandı -> Reddedildi`) ve `InfiniteNotes` (Pull-to-Refresh)

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Hafta:** **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:** `W6 / components/FlatList.md` -> **`Example 2: Infinite Scroll with Pull-to-Refresh`** (`InfiniteNotes` fonksiyonu)

### 🔍 Kod 5A (Sınav Senaryosu): 3 Durumlu Döngüsel Onay Listesi (`Bekliyor -> Onaylandı -> Reddedildi`)
- Butona 1. basışta **Onaylandı (Yeşil)**, 2. basışta **Reddedildi (Kırmızı)**, 3. basışta tekrar **Bekliyor (Gri)** olur.

```jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const APPLICANTS = [
  { id: '1', name: 'Ahmet Yılmaz', role: 'Frontend Geliştirici' },
  { id: '2', name: 'Zeynep Kaya', role: 'Mobil Geliştirici' },
  { id: '3', name: 'Mehmet Demir', role: 'UI/UX Tasarımcı' },
];

const STATUS_CONFIG = [
  { label: 'Bekliyor', bg: '#ffffff', accent: '#64748b' },
  { label: '✓ Onaylandı', bg: '#dcfce7', accent: '#16a34a' },
  { label: '✕ Reddedildi', bg: '#fee2e2', accent: '#dc2626' },
];

export default function UcDurumluOnayListesi() {
  const [statusMap, setStatusMap] = useState({});

  const cycleStatus = (id) => {
    setStatusMap((prev) => {
      const current = prev[id] || 0;
      return { ...prev, [id]: (current + 1) % 3 };
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Başvuru Durum Listesi</Text>
        <FlatList
          data={APPLICANTS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 12 }}
          renderItem={({ item }) => {
            const statusIndex = statusMap[item.id] || 0;
            const currentStyle = STATUS_CONFIG[statusIndex];

            return (
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: currentStyle.bg,
                    borderColor: currentStyle.accent,
                  },
                ]}
              >
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.role}>{item.role}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => cycleStatus(item.id)}
                  style={[
                    styles.statusBtn,
                    { backgroundColor: currentStyle.accent },
                  ]}
                >
                  <Text style={styles.statusBtnText}>{currentStyle.label}</Text>
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
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  role: {
    fontSize: 13,
    color: '#475569',
    marginTop: 4,
  },
  statusBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 110,
    alignItems: 'center',
  },
  statusBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
```

### 🔍 Kod 5B (Hocanın W6'daki Orijinal Ders Kodu): `InfiniteNotes` (`FlatList.md - Example 2: Infinite Scroll with Pull-to-Refresh`)
- Hocanın `W6 / components/FlatList.md` dosyasındaki ikinci örnek olan, aşağı kaydırdıkça yeni ders notları (`Lesson Note #1, #2...`) yükleyen ve yukarıdan çekince yenilenen (`RefreshControl`) orijinal ders kodudur.

```jsx
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const fetchPage = async (page) => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return Array.from({ length: 6 }, (_, index) => {
    const id = (page - 1) * 6 + index + 1;
    return { id: String(id), title: `Lesson Note #${id}` };
  });
};

export default function InfiniteNotes() {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadPage = useCallback(
    async (pageToLoad, isRefresh = false) => {
      if (loadingMore || refreshing) return;
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoadingMore(true);
      }
      const newNotes = await fetchPage(pageToLoad);
      setNotes((prev) => (isRefresh ? newNotes : [...prev, ...newNotes]));
      setPage(pageToLoad + 1);
      setLoadingMore(false);
      setRefreshing(false);
    },
    [loadingMore, refreshing]
  );

  useEffect(() => {
    loadPage(1, true);
  }, [loadPage]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24, gap: 16 }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 18,
              borderRadius: 14,
              backgroundColor: '#1f2937',
            }}
          >
            <Text style={{ fontSize: 16, color: '#f8fafc' }}>{item.title}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => loadPage(1, true)}
            tintColor="#38bdf8"
          />
        }
        onEndReached={() => loadPage(page)}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator size="small" color="#38bdf8" />
          ) : null
        }
        ListHeaderComponent={() => (
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#f8fafc',
              marginBottom: 8,
            }}
          >
            Lesson Notes Feed
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
```
