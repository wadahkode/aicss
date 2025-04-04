# AICSS

**AICSS** adalah sebuah pustaka yang memungkinkan Anda untuk menulis gaya dan logika interaktif dalam satu file dengan ekstensi `.aicss`. Dengan pendekatan ini, pengembangan komponen menjadi lebih modular dan terstruktur.

## Fitur Utama

- **Gaya Terpadu**: Menggabungkan CSS dan JavaScript dalam satu file `.aicss` untuk kemudahan pengelolaan.
- **Modularitas**: Memungkinkan pemisahan logika dan gaya per komponen.
- **Konfigurasi Fleksibel**: Mendukung konfigurasi melalui file `aicss.config.json` untuk menyesuaikan peta event.

## Instalasi

Untuk menggunakan AICSS dalam proyek Anda, ikuti langkah-langkah berikut:

### 1. Kloning Repository

```bash
git clone https://github.com/wadahkode/aicss.git
```

### 2. Masuk ke Direktori Proyek

```bash
cd aicss
```

### 3. Instal Dependensi

```bash
npm install
```

## Penggunaan Dasar

Setelah instalasi, Anda dapat mulai menggunakan AICSS dengan langkah-langkah berikut:

### 1. Buat File `.aicss`

Misalnya, buat file `button.aicss` dengan konten berikut:

```javascript
export default {
  component: [
    {
      name: "btn-primary",
      styles: {
        background: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      },
      onClick(event) {
        alert("Tombol diklik!");
      }
    }
  ]
}
```

### 2. Tambahkan Elemen di HTML

```html
<button v-ai="btn-primary">Klik Saya</button>
```

### 3. Integrasikan AICSS dalam Proyek

Pastikan Anda telah mengimpor dan menerapkan AICSS dalam proyek Anda sesuai dengan kebutuhan.

## Konfigurasi

Anda dapat menyesuaikan konfigurasi AICSS dengan membuat file `aicss.config.json` di root proyek Anda:

```json
{
  "eventMap": {
    "onSwipe": "swipe",
    "onLongPress": "longpress"
  }
}
```

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).


