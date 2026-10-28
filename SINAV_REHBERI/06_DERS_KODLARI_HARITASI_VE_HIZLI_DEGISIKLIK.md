# 🗺️ 6. BÖLÜM: W2 – W6 TÜM DERS KODLARI HARİTASI, HAFTA/KONU EŞLEŞTİRME TABLOSU VE HIZLI DEĞİŞİKLİK REHBERİ

> **Sınavda Bu Dosyayı Ne Zaman Açacaksın?**
> Hoca sınavda derste işlediği bir örneği ekrana yansıtıp **"Bu koddaki şu kısmı değiştirerek görseldeki çıktıyı elde edin"** dediğinde;
> 1. O görselin ve kodun **hangi haftada (`W2`, `W3`, `W4`, `W6`)**, **hangi ders dosyasında**, **hangi konu başlığında** ve **hangi fonksiyon adıyla** işlendiğini saniyeler içinde bulmak,
> 2. Hocanın orijinal ders koduna ve sınavda değiştirtmek isteyeceği senaryo koduna tek tıkla gitmek için bu rehberi kullan.

---

## 📅 1. HAFTA HAFTA (`W2`, `W3`, `W4`, `W6`) HOCANIN TÜM DERS KODLARI VE REHBERDEKİ KARŞILIKLARI

### 🟢 2. HAFTA (`W2` — JavaScript Fundamentals for React Native)

| Hafta & Ders Dosyası | Konu Başlığı | Hocanın Kodundaki Fonksiyon / Değişken Adları | Rehberimizdeki Karşılığı ve Senaryo Yeri |
| :--- | :--- | :--- | :--- |
| **`W2/03_variables_constants.js`** | `1. var vs let vs const`, `2. Data Types`, `3. const with Objects and Arrays` | `appName`, `userScore`, `user` objesi, `colors` dizisi | **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (Senaryo 2 - `VariableExample` & `DynamicVariableExample`) ve bu dosyanın **Bölüm 3** kısmı |
| **`W2/05_operators.js`** | `1. Arithmetic`, `2. Comparison`, `3. Logical`, `5. Spread (...)`, `6. Destructuring` | `a + b`, `===`, `&&`, `\|\|`, `[...firstHalf, ...secondHalf]`, `{ title, price }` | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (Senaryo 1 - `SumCalculator` & 4 İşlem) ve **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** |
| **`W2/06_control_flow.js`** | `1. Conditional Statements (if, else if, else)`, `2. Switch`, `3. Ternary Operator (?:)` | `score >= 90`, `buttonColor = theme === "dark" ? "#333333" : "#FFFFFF"` | **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** (Erkek=Mavi, Kadın=Pembe; Geçti=Yeşil, Kaldı=Kırmızı) ve **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (Senaryo 2 - Vize/Final) |
| **`W2/08_functions.js`** | `1. Function Declaration`, `3. Arrow Functions`, `5. Callbacks` | `greetUser(name)`, `add = (a, b) => a + b`, `calculateDiscount(price, rate)` | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (Hesaplama fonksiyonları) ve bu dosyanın **Bölüm 3** kısmı |
| **`W2/09_arrays.js`** | `2. Adding/Removing`, `3. Iteration (.forEach, .map)`, `4. Filtering (.filter, .find)`, `5. .reduce` | `products.map(...)`, `products.filter(...)`, `products.find(...)`, `products.reduce(...)` | **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** (İsim/Cinsiyet listesi, filtreleme, kişi ekleme/silme) ve bu dosyanın **Bölüm 2 & 3** kısmı |

---

### 🔵 3. HAFTA (`W3` — React Core Concepts & JSX Examples)

| Hafta & Ders Dosyası | Konu Başlığı | Hocanın Kodundaki Bileşen / Fonksiyon Adları | Rehberimizdeki Karşılığı ve Senaryo Yeri |
| :--- | :--- | :--- | :--- |
| **`W3/02-jsx-example.jsx`** | `1. Basic JSX & Expressions`, `3. Conditional Rendering in JSX`, `4. Rendering Lists in JSX` | `BasicJSX`, `DynamicAttributes`, `ConditionalJSX`, `ListJSX` | **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** ve **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** |
| **`W3/03-props-example.jsx`** | `1. Basic Props`, `2. Default Props`, `3. Passing Functions as Props`, `4. Children Prop` | `UserCard`, `ProductCard`, `CustomButton`, `CardContainer` | **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (Senaryo 4 - `MessageExample` & `ButtonExample`) |
| **`W3/04-state-example.jsx`** | `1. Simple State (Counter)`, `2. Multiple State Variables`, `3. Object State`, `4. Array State` | `Counter`, `UserForm`, `ProfileEditor`, `TodoList` | **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (Senaryo 1) ve **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** (Senaryo 2 - Yeni Kişi Ekleme/Silme) |
| **`W3/05-lifecycle-and-effects-example.jsx`** | `1. Run Once on Mount`, `3. Effect with Cleanup (Timer)` | `MountExample`, `TimerExample` | **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (Senaryo 4 & Senaryo 6 - `Timer` & `WelcomeMessage`) |
| **`W3/06-event-handling-example.jsx`** | `1. Basic Click Events`, `2. Passing Arguments to Event Handlers` | `ClickExample`, `ItemListEvents` | **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** (`onPress={() => toggleApprove(item.id)}`) |
| **`W3/07-conditional-rendering-example.jsx`** | `1. If/Else`, `2. Ternary Operator`, `3. Logical AND (&&)`, `4. Switch-like Status Badge` | `AuthMessage`, `ThemeToggle`, `NotificationBanner`, `OrderStatusBadge` | **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** ve **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (Senaryo 5 - `FAQItem` & `CourseCard`) |
| **`W3/08-list-rendering-example.jsx`** | `1. Basic List`, `2. Filtering and Rendering`, `3. Interactive List (Adding/Deleting/Toggling)` | `BasicList`, `FilteredUserList`, `InteractiveTaskList` | **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** (Senaryo 1, 2, 3, 4 - Okey verdikçe renk değiştiren listeler) |
| **`W3/12-styling-example.jsx`** | `1. Inline Styles`, `2. Dynamic Conditional Styling`, `3. Style Objects` | `InlineStyleCard`, `DynamicStyleButton`, `StyledProfileCard` | **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (Senaryo 1, 2, 3) |
| **`W3/13-forms-example.jsx`** | `1. Basic Controlled Input`, `2. Multi-Input Form`, `3. Form Validation` | `BasicForm`, `RegistrationForm`, `ValidatedForm` | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (Senaryo 3 & Senaryo 4) |

---

### 🟣 4. HAFTA (`W4` — React Native & Expo Core Guides)

| Hafta & Ders Dosyası | Konu Başlığı | Hocanın Kodundaki Bileşen / Fonksiyon Adları | Rehberimizdeki Orijinal Kod + Sınav Senaryosu Yeri |
| :--- | :--- | :--- | :--- |
| **`W4/2-example-hello-expo.md`** | `Advanced Code Example -> Basic App.js` & `Interactive Version` | `App` (`Hello React Native 🚀`, `Click Count: {count}`, `handlePress` 5 tıklamada Alert, `handleLongPress` Platform bilgisi) | **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (**Senaryo 3A & 3B**) |
| **`W4/3-react-native-variable-const.md`** | `Example 1: Simple Variable Usage` & `Example 2: Dynamic Variable Usage` | `VariableExample` (sol mavi şeritli 4 bilgi kutusu) & `DynamicVariableExample` (0-10 sınırlı `%` ilerlemeli akıllı sayaç) | **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (**Senaryo 2A & 2B**) |
| **`W4/4-react-native-props.md`** | `Example 1: Simple Props Usage` & `Example 2: Props with Functions` | `Message` + `MessageExample` (sol renkli şeritli `Welcome/Success/Warning` kutuları) & `CustomButton` + `ButtonExample` (`Blue/Green/Red/Disabled Button`) | **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (**Senaryo 4A, 4B & 4C**) |
| **`W4/5-react-native-state.md`** | `Example 1: Simple Counter` & `Example 2: Form State Management` | `SimpleCounter` (`-`, `+`, `Reset`) & `SimpleForm` (`name`, `email`, `Submit`, `Form submitted successfully!`) | **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (**Senaryo 1A**) & **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 3A**) |
| **`W4/6-react-native-hooks.md`** | `1. useState Hook (Example 1 & 2)` & `2. useEffect Hook (Example 1 & 2)` | `Counter`, `TextInputExample` (`You wrote: ...`), `WelcomeMessage` (2 sn sonra `Welcome!`), `Timer` (`Start`, `Stop`, `Reset`) | **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (**Senaryo 1B, 4A, 6A**) & **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 3B**) |

---

### 🟠 6. HAFTA (`W6` — React Native Components & Layout)

| Hafta & Ders Dosyası | Konu Başlığı | Hocanın Kodundaki Bileşen / Fonksiyon Adları | Rehberimizdeki Orijinal Kod + Sınav Senaryosu Yeri |
| :--- | :--- | :--- | :--- |
| **`W6/components/View.md`** | `Example 1: Card Layout with Nested Views` & `Example 2: Responsive Two-Column Grid` | `DashboardCard` (`Progress: 65%` çubuklu kart) & `ResponsiveGrid` (`48%` genişlikli 2x2 ızgara) | **[01_FOTOGRAF_KOYMA_YANYANA_ALTALTA_VE_FLEXBOX.md](./01_FOTOGRAF_KOYMA_YANYANA_ALTALTA_VE_FLEXBOX.md)** (**Senaryo 3A**) & **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (**Senaryo 6A**) |
| **`W6/components/Text.md`** | `Example 1: Rich Text Banner Showcasing Props` & `Example 2: Dynamic Label with Character Counter` | `RichTextBanner` (`Elapsed time: Xs`, `HIGHLIGHTS`) & `BioField` (`Characters remaining: 120`) | **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (**Senaryo 1A**), **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (**Senaryo 6B**) & **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 4B**) |
| **`W6/components/Image.md`** | `Example 1: Remote Image with Loading State` & `Example 2: Resize Mode & Blur Playground` | `NewsCard` (üstü fotoğraflı haber kartı) & `ImagePlayground` (`cover`/`contain` ve `Blur` kontrolü) | **[01_FOTOGRAF_KOYMA_YANYANA_ALTALTA_VE_FLEXBOX.md](./01_FOTOGRAF_KOYMA_YANYANA_ALTALTA_VE_FLEXBOX.md)** (**Senaryo 5A & 5B**) |
| **`W6/components/Button.md`** | `Example 1: Sum Calculator` & `Example 2: Countdown Start/Pause Buttons` | `SumCalculator` (iki sayı toplama) & `CountdownController` (`10s` geri sayım) | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 1A & 1B**) & **[04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md](./04_SAYAC_ZAMANLAYICI_HOOKS_VE_STATE.md)** (**Senaryo 5A**) |
| **`W6/components/TouchableOpacity.md`** | `Example 1: Favorite Course Card` & `Example 2: Expandable FAQ Item` | `CourseCard` (`★ Favorited` / `☆ Add to favorites`) & `FAQItem` (`+` / `−` açılır SSS kartı) | **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (**Senaryo 5A, 5B & 5C**) |
| **`W6/components/TextInput.md`** | `Example 1: Email Field with Instant Validation` & `Example 2: Search Bar Filtering a List` | `EmailField` (yeşil/kırmızı çerçeve) & `SearchableList` (`Search lessons...`) | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 4A & 5A**) |
| **`W6/components/ScrollView.md`** | `Example 1: Terms of Service with Confirmation Button` & `Example 2: Weekly Schedule Horizontal Scroll` | `TermsAgreement` (en alta kaydırınca aktifleşen buton) & `WeeklySchedule` (yatay kayan kartlar) | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 9A**) & **[01_FOTOGRAF_KOYMA_YANYANA_ALTALTA_VE_FLEXBOX.md](./01_FOTOGRAF_KOYMA_YANYANA_ALTALTA_VE_FLEXBOX.md)** (**Senaryo 6A & 6B**) |
| **`W6/components/FlatList.md`** | `Example 1: Course Module Checklist` & `Example 2: Pull-to-Refresh + Infinite Notes` | `CourseModules` (`Switch` ile yeşil `#dcfce7` olan satırlar) & `InfiniteNotes` (`RefreshControl` + `onEndReached`) | **[02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md](./02_ISIM_CINSIYET_OKEY_BUTONU_VE_RENKLI_LISTELER.md)** (**Senaryo 1A, 4A, 4B & 5A**) |
| **`W6/components/SafeAreaView.md`** | `Example 1: Onboarding Screen Respecting Safe Areas` & `Example 2: Dark Header + Safe Content Split` | `OnboardingScreen` (`Step 1 / 3` adım kartı) & `NotchedHeaderDemo` (`Platform.OS` üst boşluklu ekran) | **[03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md](./03_BUTON_YERI_RENGI_YAZI_TIPI_VE_ETKILESIM.md)** (**Senaryo 6B & 6C**) |
| **`W6/components/Checkbox.md`** | `Example 1: Lesson Task List` & `Example 2: Participant Settings Form` | `LessonChecklist` (seçildikçe üstü çizilen görevler) & `ParticipantSettings` (`Save Settings`) | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 6A, 6B & 6C**) |
| **`W6/components/RadioButton.md`** | `Example 1: Module Selection` & `Example 2: FlatList-powered Track Picker` | `ModuleSelector` (`RadioItem`) & `TrackSelector` (`FlatList` içinde radyo seçimi) | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 7A & 7B**) |
| **`W6/components/Picker.md`** | `Example 1: Course Level Selector` & `Example 2: Session Filter + Dependent List` | `CourseLevelPicker` & `ScheduleFilter` (seçilen seviyeye göre filtreleme) | **[05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md](./05_FORM_INPUT_HESAPLAMA_CHECKBOX_RADIO_PICKER.md)** (**Senaryo 8A & 8B**) |

---

## 🛠️ 2. JAVASCRIPT DİZİ METOTLARI HIZLI REHBERİ (`W2/09_arrays.js` & `W3/08-list-rendering-example.jsx`)

Sınavda listeleri ekrana basarken, filtrelerken veya sayılarını hesaplarken kullanılan 5 temel JavaScript metodu:

1. **Listeyi Ekrana Çizdirme (`.map`):**
   - `LISTE.map((item) => ( <View key={item.id}>...</View> ))`
2. **Listeyi Koşula Göre Süzme / Arama Yapma (`.filter`):**
   - Cinsiyete göre süzme: `LISTE.filter((item) => item.gender === 'Erkek')`
   - Arama kutusuna göre süzme: `LISTE.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))`
   - Silme işlemi: `setListe(liste.filter((item) => item.id !== silinecekId))`
3. **Seçili Elemanı Bulma (`.find`):**
   - `LISTE.find((item) => item.id === seciliId)?.label`
4. **Kaç Tanesine Okey Verildiğini Sayma (`Object.values` + `.filter`):**
   - `Object.values(onaylilar).filter(Boolean).length`
5. **En Az Bir Seçeneğin İşaretli Olup Olmadığını Kontrol Etme (`.some`):**
   - `Object.values(options).some(Boolean)`

---

## 🧩 3. 2. VE 3. HAFTA (`W2` & `W3`) TEMEL KOD ÖRNEKLERİNİN REACT NATIVE KARŞILIKLARI

> ### 📌 Ders Notu Karşılığı (Hangi Hafta / Hangi Dosya / Hangi Konu Başlığı?)
> - **2. Hafta (`W2/09_arrays.js`):** `3. Array Iteration (.map)`, `4. Filtering and Searching (.filter, .find)`, `5. Reducing Arrays (.reduce)` (`products` dizisi üzerinde fiyat filtreleme ve toplam fiyat hesaplama).
> - **3. Hafta (`W3/08-list-rendering-example.jsx`):** `2. Filtering and Rendering` (`FilteredUserList`) & `3. Interactive List` (`InteractiveTaskList`).

### 🔹 3A. `W2/09_arrays.js` ve `W3/08-list-rendering-example.jsx` Ürün / Görev Filtreleme ve Toplam Hesaplama Kodu
**Kodun Üstü Açıklama:**
- Hocanın 2. hafta `W2/09_arrays.js` dosyasında `products` dizisiyle gösterdiği `.map()`, `.filter()` ve `.reduce()` işlemlerinin ve 3. hafta `W3/08-list-rendering-example.jsx` dosyasındaki filtreli listenin Snack Expo'da doğrudan çalışan ekran halidir.

```jsx
import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const INITIAL_PRODUCTS = [
  { id: '1', name: 'Laptop', price: 1200, inStock: true },
  { id: '2', name: 'Mouse', price: 25, inStock: true },
  { id: '3', name: 'Keyboard', price: 75, inStock: false },
  { id: '4', name: 'Monitor', price: 300, inStock: true },
  { id: '5', name: 'Headphones', price: 150, inStock: false },
];

export default function W2W3ArrayMethodsDemo() {
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  const displayedProducts = useMemo(() => {
    const filtered = onlyInStock
      ? INITIAL_PRODUCTS.filter((item) => item.inStock)
      : INITIAL_PRODUCTS;

    return filtered.map((item) => ({
      ...item,
      finalPrice: discountApplied
        ? Number((item.price * 0.9).toFixed(0))
        : item.price,
    }));
  }, [onlyInStock, discountApplied]);

  const totalValue = useMemo(() => {
    return displayedProducts.reduce((sum, item) => sum + item.finalPrice, 0);
  }, [displayedProducts]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>W2 & W3 Array Methods (.map / .filter / .reduce)</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.filterBtn,
              { backgroundColor: onlyInStock ? '#16a34a' : '#475569' },
            ]}
            onPress={() => setOnlyInStock(!onlyInStock)}
          >
            <Text style={styles.btnText}>
              {onlyInStock ? 'Stoktakiler (Açık)' : 'Tümünü Göster'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterBtn,
              { backgroundColor: discountApplied ? '#2563eb' : '#475569' },
            ]}
            onPress={() => setDiscountApplied(!discountApplied)}
          >
            <Text style={styles.btnText}>
              {discountApplied ? '%10 İndirim Aktif' : '%10 İndirim Uygula'}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={displayedProducts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.rowCard,
                {
                  backgroundColor: item.inStock ? '#dcfce7' : '#fee2e2',
                  borderColor: item.inStock ? '#16a34a' : '#dc2626',
                },
              ]}
            >
              <View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text
                  style={{
                    color: item.inStock ? '#15803d' : '#b91c1c',
                    fontWeight: '600',
                  }}
                >
                  {item.inStock ? 'Stokta Var' : 'Stokta Yok'}
                </Text>
              </View>
              <Text style={styles.priceText}>{item.finalPrice} TL</Text>
            </View>
          )}
        />

        <View style={styles.totalBox}>
          <Text style={styles.totalText}>
            Toplam Tutar (.reduce): {totalValue} TL
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },
  container: { flex: 1, padding: 20, gap: 14 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#0f172a' },
  buttonRow: { flexDirection: 'row', gap: 10 },
  filterBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: '#ffffff', fontWeight: 'bold', fontSize: 13 },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  priceText: { fontSize: 18, fontWeight: 'bold', color: '#0f172a' },
  totalBox: {
    backgroundColor: '#0f172a',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  totalText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});
```
