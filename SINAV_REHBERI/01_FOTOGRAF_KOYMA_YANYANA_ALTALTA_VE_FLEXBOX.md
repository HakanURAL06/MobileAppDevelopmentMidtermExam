# 📸 1. BÖLÜM: FOTOĞRAF KOYMA, YAN YANA / ALT ALTA DİZİLİM VE FLEXBOX REHBERİ

> **Sınavda Bu Dosyayı Ne Zaman Açacaksın?**
> Hoca sınavda verdiği görselde **fotoğrafları yan yana, alt alta, 2x2 ızgara (galeri), üstte iki küçük altta bir büyük, solda yuvarlak profil fotoğrafı sağda yazı, fotoğraf çerçevesi/bulanıklığı (blur) veya kutuların/butonların yerini değiştirme** istediğinde doğrudan bu sayfayı kullan.
> Her senaryonun başında **hocanın bu konuyu hangi hafta (`W3`, `W4`, `W6`), hangi konu başlığı ve hangi fonksiyon adıyla işlediği** belirtilmiş; hem **hocanın dersteki orijinal kodu** hem de **sınavda isteyebileceği değiştirilmiş senaryo kodu** yorum satırsız olarak alt alta verilmiştir.

![Flexbox Dizilim Rehberi](./gorseller/01-flexbox-dizilim-rehberi.svg)

![Fotoğraf Şekilleri ve Yerleşimi](./gorseller/03-fotograf-stilleri-ve-yerlesimi.svg)

---

## 🎯 GÖRSELE BAK -> HANGİ HAFTANIN HANGİ KODUNU KULLANACAĞINI 1 SANİYEDE BUL

| Hocanın Verdiği Görselde Ne Görüyorsun? | İşlendiği Hafta & Konu Başlığı | Hocanın Kodundaki Karşılığı | Yapılacak Değişiklik |
| :--- | :--- | :--- | :--- |
| **Fotoğraflar / Kutular ALT ALTA dizilmiş** | **W3** (`12-styling.md` - `ResponsiveDesign`) & **W6** (`View.md`) | `flexDirection: 'column'` | Kapsayıcı `<View>` stiline `flexDirection: 'column', gap: 12` yaz. |
| **Fotoğraflar / Kutular YAN YANA dizilmiş** | **W3** (`12-styling.md` - `ResponsiveDesign`) & **W6** (`View.md`) | `flexDirection: 'row'` | Kapsayıcı `<View>` stiline `flexDirection: 'row', gap: 12` yaz. |
| **Soldaki fotoğraf sağa, sağdaki sola geçmiş** | **W6** (`View.md` - Flexbox Layout) | `flexDirection: 'row-reverse'` | Kapsayıcı `<View>` stiline `flexDirection: 'row-reverse'` yaz. |
| **Üstteki fotoğraf alta, alttaki üste geçmiş** | **W6** (`View.md` - Flexbox Layout) | `flexDirection: 'column-reverse'` | Kapsayıcı `<View>` stiline `flexDirection: 'column-reverse'` yaz. |
| **Biri EN SOLDA, diğeri EN SAĞDA duruyor** | **W6** (`View.md` - `Example 1: Dashboard Card with Stats`) | `justifyContent: 'space-between'` | Kapsayıcı `<View>` stiline `flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'` yaz. |
| **Fotoğraflar / Kutular 2'şerli veya 3'erli Izgara (Grid)** | **W6** (`View.md` - `Example 2: Responsive Grid with onLayout` / `ResponsiveGrid`) | `flexWrap: 'wrap'` + `width: '48%'` | Dış `<View>`: `flexDirection: 'row', flexWrap: 'wrap', gap: 12` — İç kutular: `width: '48%'` (3'lü için `'31%'`). |
| **Solda Yuvarlak Profil Fotoğrafı + Sağda Başlık/Açıklama** | **W6** (`SafeAreaView.md` - `Example 2: SafeAreaProvider Notched Header` / `NotchedHeaderDemo`) | `width: 40, height: 40, borderRadius: 20` | `<Image>` genişlik ve yüksekliğini eşit ver, `borderRadius` değerini tam yarısı yap. |
| **Fotoğrafın Sığma Modu (`cover`, `contain`) ve Bulanıklığı (`blurRadius`)** | **W6** (`Image.md` - `Example 2: Image Playground` / `ImagePlayground`) | `resizeMode={resizeMode}` ve `blurRadius={18}` | `<Image>` bileşenine `resizeMode` ve `blurRadius` prop'larını ver. |
| **Fotoğraf Yüklenirken Spinner (`ActivityIndicator`) + Haber Kartı** | **W6** (`Image.md` - `Example 1: News Card with Loading Feedback` / `NewsCard`) | `onLoadStart`, `onLoad`, `onError` | Yüklenirken `ActivityIndicator`, hata olunca yedek resim/yazı göster. |
| **Yatay Kaydırılan Haftalık Plan / Fotoğraf Kartları** | **W6** (`ScrollView.md` - `Example 2: Weekly Schedule Horizontal Scroll` / `WeeklySchedule`) | `<ScrollView horizontal>` | `<ScrollView horizontal showsHorizontalScrollIndicator={false}>` içine kartları diz. |

---

## 🧩 SENARYO 1: Fotoğrafları Yan Yana (`row`), Alt Alta (`column`) ve Karma (Üstte 2 Küçük + Altta 1 Büyük) Dizme

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Haftalar:** **W3 (3. Hafta)** ve **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:**
  - `W3 / 12-styling.md` & `12-styling-example.jsx` -> **`Responsive Design` (`ResponsiveDesign` fonksiyonu)** (`flexDirection: screenSize === 'mobile' ? 'column' : 'row'`)
  - `W6 / components/View.md` -> **`View Overview & Flexbox Positioning`** ve `W6 / components/Image.md` -> **`Image`**

### 🔍 Kod 1A (Sınav Senaryosu): 3 Fotoğrafı Yan Yana / Alt Alta Koyma ve Butonla Yön Değiştirme
- Ekranda 3 adet fotoğrafı başlangıçta **yan yana (`flexDirection: 'row'`)** gösterir.
- Üstteki **"Alt Alta Yap / Yan Yana Yap"** butonuna basıldığında `isRow` state'i değişir ve fotoğraflar anında **alt alta (`flexDirection: 'column'`)** veya tekrar **yan yana** dizilir.
- Hoca buton olmadan sadece yan yana isterse `flexDirection: 'row'`, sadece alt alta isterse `flexDirection: 'column'`, sıralamayı ters çevirmek isterse `'row-reverse'` yazman yeterlidir.

```jsx
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

const PHOTOS = [
  { id: '1', title: 'Doğa', uri: 'https://picsum.photos/id/1018/300/300' },
  { id: '2', title: 'Deniz', uri: 'https://picsum.photos/id/1015/300/300' },
  { id: '3', title: 'Orman', uri: 'https://picsum.photos/id/1043/300/300' },
];

export default function YanYanaAltAltaFotograflar() {
  const [isRow, setIsRow] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>
            {isRow ? 'Yan Yana Fotoğraflar' : 'Alt Alta Fotoğraflar'}
          </Text>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setIsRow(!isRow)}
          >
            <Text style={styles.toggleButtonText}>
              {isRow ? 'Alt Alta Yap' : 'Yan Yana Yap'}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.photoWrapper,
            { flexDirection: isRow ? 'row' : 'column' },
          ]}
        >
          {PHOTOS.map((item) => (
            <View key={item.id} style={styles.photoCard}>
              <Image
                source={{ uri: item.uri }}
                style={isRow ? styles.smallPhoto : styles.largePhoto}
              />
              <Text style={styles.photoLabel}>{item.title}</Text>
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
    padding: 20,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  toggleButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  photoWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  photoCard: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  smallPhoto: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  largePhoto: {
    width: 280,
    height: 150,
    borderRadius: 10,
  },
  photoLabel: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
});
```

### 🔍 Kod 1B (Sınav Senaryosu): Üstte 2 Küçük Yan Yana + Altta 1 Büyük Fotoğraf & Solda 1 Uzun + Sağda 2 Küçük Fotoğraf
- Hocanın derste fotoğrafların yerini değiştirterek yaptırdığı karma yerleşimdir:
  - **Düzen 1:** `ikiYanYanaSatir` (`flexDirection: 'row'`) içinde `width: '48%'` olan 2 küçük fotoğraf yan yana durur; hemen altında `width: '100%'` olan büyük fotoğraf yer alır.
  - **Düzen 2:** `solSagKapsayici` (`flexDirection: 'row'`) içinde sol tarafta `height: 212` olan dikey fotoğraf, sağ tarafta ise `sagAltAltaSutun` (`justifyContent: 'space-between'`) içinde `height: 100` olan 2 küçük fotoğraf alt alta durur.

```jsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const IMG_1 = 'https://picsum.photos/id/237/400/300';
const IMG_2 = 'https://picsum.photos/id/1025/400/300';
const IMG_3 = 'https://picsum.photos/id/1074/600/300';
const IMG_4 = 'https://picsum.photos/id/1062/400/500';

export default function KarmaFotografYerlesimleri() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>
          Düzen 1: Üstte 2 Yan Yana + Altta 1 Büyük Fotoğraf
        </Text>
        <View style={styles.card}>
          <View style={styles.ikiYanYanaSatir}>
            <Image source={{ uri: IMG_1 }} style={styles.yarimGenislikFoto} />
            <Image source={{ uri: IMG_2 }} style={styles.yarimGenislikFoto} />
          </View>
          <Image source={{ uri: IMG_3 }} style={styles.tamGenislikFoto} />
        </View>

        <Text style={styles.sectionTitle}>
          Düzen 2: Solda 1 Büyük Dikey + Sağda Alt Alta 2 Küçük Fotoğraf
        </Text>
        <View style={styles.card}>
          <View style={styles.solSagKapsayici}>
            <Image source={{ uri: IMG_4 }} style={styles.solUzunFoto} />
            <View style={styles.sagAltAltaSutun}>
              <Image source={{ uri: IMG_1 }} style={styles.sagKucukFoto} />
              <Image source={{ uri: IMG_2 }} style={styles.sagKucukFoto} />
            </View>
          </View>
        </View>
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
    padding: 20,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 14,
    borderRadius: 16,
    gap: 12,
  },
  ikiYanYanaSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yarimGenislikFoto: {
    width: '48%',
    height: 110,
    borderRadius: 12,
  },
  tamGenislikFoto: {
    width: '100%',
    height: 140,
    borderRadius: 12,
  },
  solSagKapsayici: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  solUzunFoto: {
    width: '48%',
    height: 212,
    borderRadius: 12,
  },
  sagAltAltaSutun: {
    width: '48%',
    height: 212,
    justifyContent: 'space-between',
  },
  sagKucukFoto: {
    width: '100%',
    height: 100,
    borderRadius: 12,
  },
});
```

---

## 🧩 SENARYO 2: Yuvarlak Profil Fotoğrafı + Yanında İsim/Bölüm Başlığı

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Hafta:** **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:** `W6 / components/SafeAreaView.md` -> **`Example 2: SafeAreaProvider Notched Header`**
- **Hocanın Kodundaki Fonksiyon Adı:** `NotchedHeaderDemo()` ve `HeaderContent()`

### 🔍 Kod 2A (Hocanın W6'daki Orijinal Ders Kodu): `NotchedHeaderDemo` (`SafeAreaView.md - Example 2`)
- Hocanın W6 dersinde üst başlıkta (`HeaderContent`) **sola `width: 40, height: 40, borderRadius: 20` ile tam yuvarlak bir profil fotoğrafı, sağına ise `flex: 1` ile alt alta `Instructor Dashboard` ve açıklama metni** koyduğu orijinal koddur.

```jsx
import React from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Image, Text, View } from 'react-native';

function HeaderContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#020617' }}>
      <SafeAreaView
        edges={['top']}
        style={{
          backgroundColor: '#0f172a',
          paddingTop: insets.top,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 16,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/499550?v=4',
            }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#f8fafc', fontWeight: '700', fontSize: 18 }}>
              Instructor Dashboard
            </Text>
            <Text style={{ color: '#94a3b8' }}>
              Welcome back! Review the highlights before you go live.
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ flex: 1, padding: 24, gap: 16 }}>
        <Text style={{ color: '#f8fafc', fontSize: 20, fontWeight: '600' }}>
          Latest Lessons
        </Text>
        <View
          style={{
            borderRadius: 16,
            padding: 20,
            backgroundColor: '#1f2937',
            gap: 12,
          }}
        >
          <Text style={{ color: '#38bdf8', fontWeight: '700' }}>
            1. Core Components
          </Text>
          <Text style={{ color: '#cbd5e1', lineHeight: 20 }}>
            Recap how to structure layouts with View, Text, and Image, backed by
            practical examples.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function NotchedHeaderDemo() {
  return (
    <SafeAreaProvider>
      <HeaderContent />
    </SafeAreaProvider>
  );
}
```

### 🔍 Kod 2B (Sınav Senaryosu): Ortalanmış Büyük Yuvarlak Profil Kartı + Yatay Yuvarlak Profil Satırı
- Hoca sınavda ekstra paket (`react-native-safe-area-context`) gerektirmeden **ortada büyük yuvarlak çerçeveli profil fotoğrafı + altında isim ve takip butonu** veya **solda yuvarlak fotoğraf + ortada isim/bölüm + sağda durum rozeti** isterse bu kodu kullan.

```jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function YuvarlakProfilKartlari() {
  const [following, setFollowing] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.centerProfileCard}>
          <Image
            source={{ uri: 'https://picsum.photos/id/64/300/300' }}
            style={styles.avatarLarge}
          />
          <Text style={styles.centerName}>Zeynep Kaya</Text>
          <Text style={styles.centerRole}>Mobil Uygulama Geliştirici</Text>
          <TouchableOpacity
            style={[
              styles.followBtn,
              { backgroundColor: following ? '#16a34a' : '#2563eb' },
            ]}
            onPress={() => setFollowing(!following)}
          >
            <Text style={styles.followBtnText}>
              {following ? '✓ Takip Ediliyor' : '+ Takip Et'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalProfileCard}>
          <Image
            source={{ uri: 'https://picsum.photos/id/91/300/300' }}
            style={styles.avatarSmall}
          />
          <View style={styles.infoColumn}>
            <Text style={styles.rowName}>Ahmet Yılmaz</Text>
            <Text style={styles.rowSubtitle}>Bilgisayar Mühendisliği</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Aktif</Text>
          </View>
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
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  centerProfileCard: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  avatarLarge: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#2563eb',
    marginBottom: 6,
  },
  centerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  centerRole: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  followBtn: {
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 999,
  },
  followBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  horizontalProfileCard: {
    backgroundColor: '#0f172a',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatarSmall: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#38bdf8',
  },
  infoColumn: {
    flex: 1,
    gap: 4,
  },
  rowName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  rowSubtitle: {
    fontSize: 13,
    color: '#94a3b8',
  },
  statusBadge: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
```

---

## 🧩 SENARYO 3: 2x2 veya 3x3 Izgara (Grid) Galeri ve `onLayout` ile Sütun Değişimi

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Hafta:** **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:** `W6 / components/View.md` -> **`Example 2: Responsive Grid with onLayout`**
- **Hocanın Kodundaki Fonksiyon Adı:** `ResponsiveGrid()`

### 🔍 Kod 3A (Hocanın W6'daki Orijinal Ders Kodu): `ResponsiveGrid` (`View.md - Example 2`)
- Hocanın W6 dersinde `COURSES` dizisindeki 6 konuyu `flexDirection: 'row', flexWrap: 'wrap', gap: 16` kullanarak 2'şerli (veya ekran genişliği 500'den büyükse 3'erli) kutular halinde dizdiği orijinal koddur.

```jsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const COURSES = [
  'Core Components',
  'State Management',
  'Navigation',
  'Performance',
  'Testing',
  'Deployment',
];

export default function ResponsiveGrid() {
  const [cardsPerRow, setCardsPerRow] = useState(2);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View
        style={{ flex: 1, padding: 24 }}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setCardsPerRow(width > 500 ? 3 : 2);
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 16 }}>
          Course Topics
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {COURSES.map((title) => (
            <View
              key={title}
              style={{
                width: `${100 / cardsPerRow - 4}%`,
                padding: 18,
                borderRadius: 16,
                backgroundColor: '#e2e8f0',
              }}
            >
              <Text style={{ fontWeight: '600', color: '#1f2937' }}>
                {title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
```

### 🔍 Kod 3B (Sınav Senaryosu): Fotoğraflı 2'li / 3'lü Izgara (Grid) Galeri + Butonla Sütun Sayısı Değiştirme
- Hocanın `ResponsiveGrid` koduna **fotoğraflar (`<Image>`)** ve üst kısma **"2'li Diz / 3'lü Diz"** butonları eklenmiş sınav versiyonudur.

```jsx
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

const GALLERY_ITEMS = [
  { id: '1', title: 'Core Components', uri: 'https://picsum.photos/id/10/300/200' },
  { id: '2', title: 'State Management', uri: 'https://picsum.photos/id/20/300/200' },
  { id: '3', title: 'Navigation', uri: 'https://picsum.photos/id/30/300/200' },
  { id: '4', title: 'Performance', uri: 'https://picsum.photos/id/40/300/200' },
  { id: '5', title: 'Testing', uri: 'https://picsum.photos/id/50/300/200' },
  { id: '6', title: 'Deployment', uri: 'https://picsum.photos/id/60/300/200' },
];

export default function IzgaraGaleriOrnegi() {
  const [columns, setColumns] = useState(2);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.heading}>Course Topics Gallery</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[
                styles.colBtn,
                { backgroundColor: columns === 2 ? '#2563eb' : '#cbd5e1' },
              ]}
              onPress={() => setColumns(2)}
            >
              <Text style={styles.colBtnText}>2'li Diz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.colBtn,
                { backgroundColor: columns === 3 ? '#2563eb' : '#cbd5e1' },
              ]}
              onPress={() => setColumns(3)}
            >
              <Text style={styles.colBtnText}>3'lü Diz</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {GALLERY_ITEMS.map((item) => (
            <View
              key={item.id}
              style={[
                styles.gridCard,
                { width: columns === 2 ? '48%' : '31%' },
              ]}
            >
              <Image source={{ uri: item.uri }} style={styles.gridImage} />
              <Text style={styles.gridTitle}>{item.title}</Text>
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
    padding: 20,
    gap: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  colBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  colBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  gridCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 8,
  },
  gridImage: {
    width: '100%',
    height: 90,
    borderRadius: 10,
  },
  gridTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
  },
});
```

---

## 🧩 SENARYO 4: Fotoğraflı Haber Kartı (`NewsCard`) ve `resizeMode` + `blurRadius` + `onError` (`ImagePlayground`)

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Hafta:** **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:**
  - `W6 / components/Image.md` -> **`Example 1: News Card with Loading Feedback`** (`NewsCard` fonksiyonu)
  - `W6 / components/Image.md` -> **`Example 2: Image Playground (resizeMode, blurRadius, Error Handling)`** (`ImagePlayground` fonksiyonu)

### 🔍 Kod 4A (Hocanın W6'daki Orijinal Ders Kodu 1): `NewsCard` (`Image.md - Example 1`)
- Üst kısmında `height: 200` boyutunda fotoğraf, fotoğraf yüklenirken dönen `ActivityIndicator`, alt kısmında ise `New React Native Course Launch` başlığı ve açıklaması yer alan orijinal ders kodudur.

```jsx
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function NewsCard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: '#ffffff',
            shadowColor: '#000000',
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 3,
          }}
        >
          <View
            style={{
              height: 200,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            {loading && !error && (
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e2e8f0',
                }}
              >
                <ActivityIndicator color="#2563eb" />
              </View>
            )}
            {error && (
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e2e8f0',
                }}
              >
                <Text>Image failed to load</Text>
              </View>
            )}
            <Image
              source={{ uri: 'https://picsum.photos/600/400' }}
              style={{ width: '100%', height: '100%' }}
              onLoadStart={() => {
                setLoading(true);
                setError(false);
              }}
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
            />
          </View>
          <View style={{ padding: 20, gap: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#111827' }}>
              New React Native Course Launch
            </Text>
            <Text style={{ color: '#475569', lineHeight: 20 }}>
              The latest series covers everything from core components to
              performance optimization, all built with Expo.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
```

### 🔍 Kod 4B (Hocanın W6'daki Orijinal Ders Kodu 2): `ImagePlayground` (`Image.md - Example 2`)
- Hocanın W6 dersinde fotoğrafın `resizeMode` (`cover`, `contain`, `stretch`, `center`, `repeat`) değerini, `blurRadius` (bulanıklık) efektini ve `onError` yedek fotoğraf (`FALLBACK_URI`) geçişini butonlarla kontrol ettiği orijinal ders kodudur.

```jsx
import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PRIMARY_URI =
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518';
const FALLBACK_URI =
  'https://ui-avatars.com/api/?background=2563eb&color=fff&name=React+Native';
const MODES = ['cover', 'contain', 'stretch', 'center', 'repeat'];

export default function ImagePlayground() {
  const [uri, setUri] = useState(PRIMARY_URI);
  const [status, setStatus] = useState('Ready');
  const [resizeMode, setResizeMode] = useState(MODES[0]);
  const [blurEnabled, setBlurEnabled] = useState(false);

  const infoText = useMemo(() => {
    switch (status) {
      case 'loading':
        return 'Image is loading...';
      case 'loaded':
        return 'Image loaded successfully.';
      case 'fallback':
        return 'Primary source failed, showing fallback image.';
      default:
        return 'Ready.';
    }
  }, [status]);

  const triggerError = () => {
    setStatus('loading');
    setUri('https://invalid-url.example.com/image.jpg');
  };

  const enablePrimary = () => {
    setStatus('loading');
    setUri(PRIMARY_URI);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <Text style={{ color: '#f8fafc', fontSize: 22, fontWeight: '700' }}>
          Image playground
        </Text>
        <Text style={{ color: '#94a3b8' }}>
          Active resizeMode: <Text style={{ fontWeight: '700' }}>{resizeMode}</Text> ·
          blurRadius: {blurEnabled ? 18 : 0}
        </Text>

        <View
          style={{
            height: 220,
            borderRadius: 20,
            backgroundColor: '#1f2937',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {status === 'loading' && (
            <ActivityIndicator color="#38bdf8" size="large" />
          )}
          <Image
            source={{ uri }}
            style={{ width: '100%', height: '100%' }}
            resizeMode={resizeMode}
            blurRadius={blurEnabled ? 18 : 0}
            onLoadStart={() => setStatus('loading')}
            onLoad={() => setStatus('loaded')}
            onError={() => {
              setStatus('fallback');
              setUri(FALLBACK_URI);
            }}
          />
        </View>

        <Text style={{ color: '#e2e8f0' }}>{infoText}</Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {MODES.map((mode) => {
            const isActive = mode === resizeMode;
            return (
              <TouchableOpacity
                key={mode}
                onPress={() => setResizeMode(mode)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 999,
                  backgroundColor: isActive ? '#38bdf8' : '#1f2937',
                }}
              >
                <Text style={{ color: isActive ? '#0f172a' : '#e2e8f0' }}>
                  {mode}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          <TouchableOpacity
            onPress={() => setBlurEnabled((prev) => !prev)}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 12,
              backgroundColor: blurEnabled ? '#f97316' : '#1e293b',
            }}
          >
            <Text style={{ color: '#f8fafc', fontWeight: '600' }}>
              {blurEnabled ? 'Disable blur' : 'Enable blur'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={triggerError}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 12,
              backgroundColor: '#ef4444',
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: '600' }}>
              Simulate failure
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={enablePrimary}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 12,
              backgroundColor: '#22c55e',
            }}
          >
            <Text style={{ color: '#0f172a', fontWeight: '600' }}>
              Back to original
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
```

---

## 🧩 SENARYO 5: Yatay Kaydırılan Haftalık Plan ve Fotoğraflı Kartlar (`ScrollView horizontal`)

### 📚 Ders Notlarındaki Karşılığı (Hafta / Konu / Kod Başlığı)
- **İşlendiği Hafta:** **W6 (6. Hafta)**
- **Konu Başlığı ve Dosya Adı:** `W6 / components/ScrollView.md` -> **`Example 2: Weekly Schedule Horizontal Scroll`**
- **Hocanın Kodundaki Fonksiyon Adı:** `WeeklySchedule()`

### 🔍 Kod 5A (Hocanın W6'daki Orijinal Ders Kodu): `WeeklySchedule` (`ScrollView.md - Example 2`)
- Hocanın W6 dersinde `WEEKLY_PLAN` dizisini `<ScrollView horizontal showsHorizontalScrollIndicator={false}>` içine alarak yan yana kaydırılan kartlar şeklinde gösterdiği orijinal koddur.

```jsx
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const WEEKLY_PLAN = [
  { day: 'Monday', topic: 'Kickoff Session', duration: '40 min' },
  { day: 'Tuesday', topic: 'Core Components', duration: '60 min' },
  { day: 'Wednesday', topic: 'Navigation', duration: '50 min' },
  { day: 'Thursday', topic: 'State Management', duration: '55 min' },
  { day: 'Friday', topic: 'Performance', duration: '45 min' },
];

export default function WeeklySchedule() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <View style={{ paddingVertical: 32 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '700',
            marginLeft: 24,
            color: '#f8fafc',
          }}
        >
          Weekly Study Plan
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 16,
            gap: 16,
          }}
        >
          {WEEKLY_PLAN.map((item) => (
            <View
              key={item.day}
              style={{
                width: 220,
                padding: 20,
                borderRadius: 20,
                backgroundColor: '#1f2937',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <Text style={{ color: '#cbd5e1', fontSize: 16 }}>{item.day}</Text>
              <Text
                style={{ color: '#f1f5f9', fontWeight: '600', fontSize: 20 }}
              >
                {item.topic}
              </Text>
              <Text style={{ color: '#94a3b8' }}>{item.duration}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
```

### 🔍 Kod 5B (Sınav Senaryosu): Her Kartın Üstüne Fotoğraf (`<Image>`) Eklenmiş Yatay Kaydırma
- Hoca `WeeklySchedule` kartlarının içine **fotoğraf da ekleyin** derse kullanacağın versiyondur.

```jsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const WEEKLY_PLAN_WITH_PHOTOS = [
  { day: 'Monday', topic: 'Kickoff Session', duration: '40 min', uri: 'https://picsum.photos/id/101/300/200' },
  { day: 'Tuesday', topic: 'Core Components', duration: '60 min', uri: 'https://picsum.photos/id/102/300/200' },
  { day: 'Wednesday', topic: 'Navigation', duration: '50 min', uri: 'https://picsum.photos/id/103/300/200' },
  { day: 'Thursday', topic: 'State Management', duration: '55 min', uri: 'https://picsum.photos/id/104/300/200' },
  { day: 'Friday', topic: 'Performance', duration: '45 min', uri: 'https://picsum.photos/id/106/300/200' },
];

export default function YatayFotografliKartlar() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Weekly Study Plan (With Photos)</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {WEEKLY_PLAN_WITH_PHOTOS.map((item) => (
            <View key={item.day} style={styles.card}>
              <Image source={{ uri: item.uri }} style={styles.cardImage} />
              <Text style={styles.dayText}>{item.day}</Text>
              <Text style={styles.topicText}>{item.topic}</Text>
              <Text style={styles.durationText}>{item.duration}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  wrapper: {
    paddingVertical: 32,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 24,
    color: '#f8fafc',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 16,
  },
  card: {
    width: 220,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#1f2937',
    gap: 8,
  },
  cardImage: {
    width: '100%',
    height: 110,
    borderRadius: 12,
  },
  dayText: {
    color: '#38bdf8',
    fontSize: 15,
    fontWeight: '600',
  },
  topicText: {
    color: '#f1f5f9',
    fontWeight: '700',
    fontSize: 18,
  },
  durationText: {
    color: '#94a3b8',
    fontSize: 13,
  },
});
```
