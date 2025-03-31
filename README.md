# AICSS - AI-powered CSS Preprocessor

AICSS adalah preprocessor CSS berbasis AI yang memungkinkan penggunaan sintaks khusus untuk menulis gaya dengan lebih efisien dan otomatis dikonversi menjadi CSS standar.

## 🚀 Fitur
- **Sintaks sederhana**: Menggunakan deklarasi berbasis objek untuk mendefinisikan gaya.
- **Transformasi otomatis**: Mengubah sintaks AICSS menjadi CSS standar.
- **Dukungan variabel AI**: Memungkinkan penggunaan AI Store untuk menyimpan variabel global.
- **Kompilasi cepat**: Menghasilkan file CSS secara efisien.

## 📦 Instalasi
Pastikan Anda memiliki **Node.js** terinstal, lalu jalankan perintah berikut:

```sh
npm install aicss
```

## 🔥 Cara Menggunakan
Buat file dengan ekstensi `.aicss` dan tulis kode seperti berikut:

```aicss
ai.button = {
  background: "black";
  color: "white";
}
```

Kemudian, gunakan **Aicss** untuk mengonversinya ke CSS:

```ts
import { Aicss } from "aicss"

Aicss("styles.aicss")
```

Hasilnya akan dikompilasi menjadi **CSS standar**:

```css
.button {
  background: black;
  color: white;
}
```

## 📂 Struktur Proyek
```
.
├── src/
│   ├── core/
│   │   ├── parser.ts      # Parser untuk sintaks AICSS
│   │   ├── transformer.ts # Transformasi ke CSS
│   │   ├── writer.ts      # Menulis hasil ke file CSS
│   ├── runtime/
│   │   ├── store.ts       # Penyimpanan variabel AI
│   ├── utils/
│   │   ├── fileReader.ts  # Membaca file AICSS
│   ├── index.ts           # Entry point utama
├── tests/
│   ├── compiler.test.ts   # Pengujian parser & transformer
├── package.json
└── README.md
```

## 🛠 Pengujian
AICSS menggunakan **Jest** untuk pengujian. Jalankan tes dengan perintah berikut:

```sh
npm test
```

## 🌍 Kontribusi
Kami sangat mengapresiasi kontribusi dari komunitas! Jika Anda ingin membantu:
1. Fork repositori ini.
2. Buat branch baru (`git checkout -b feature-anda`).
3. Commit perubahan (`git commit -m "Menambahkan fitur XYZ"`).
4. Push branch (`git push origin feature-anda`).
5. Buat **Pull Request**.

## 📜 Lisensi
Proyek ini dilisensikan di bawah **MIT License**.

---

Nikmati pengembangan CSS yang lebih cepat dan efisien dengan AICSS! 🚀


