# Prep MT 1CC5

Website belajar **Modul Test (MT)** kelas 1CC5, step by step, untuk dua mata kuliah:

- **Introduction to Information Technology (IIT)**
- **Algorithm & Data Structure (ADS)**

## Fitur
- 🧭 **Jalur Belajar**: 38 langkah dalam 5 tahap (IIT → Lab Hitung → ADS → Bedah Soal HOTS → Simulasi). Tiap langkah punya kotak *Inti yang wajib nempel*, materi lengkap, dan *Cek Pemahaman*.
- ✍️ **Bank Soal**: 86 soal dengan pembahasan, filter per mapel/topik, mode "hanya yang pernah salah", plus shortcut keyboard.
- ⏱️ **Simulasi MT**: soal acak dengan timer (paket IIT, ADS, atau campuran). Ada analisis skor per topik dan pembahasan.
- 🧮 **Hitung Acak**: soal konversi basis, komplemen-2, penjumlahan biner, dan waktu unduh tanpa batas, lengkap dengan langkah-langkahnya.
- 🃏 **Flashcard** dan 🔁 **Konverter** desimal ↔ biner ↔ oktal ↔ heksa.
- ⚡ **Ringkasan Kilat**: semua inti dan rumus dalam satu halaman (bisa dicetak/PDF), plus ✅ **Kisi-kisi** yang bisa disalin ke WhatsApp.
- Mode gelap/terang, nyaman di HP (ada navigasi bawah). Progres tersimpan otomatis di browser.

Materi disusun dari slide & modul dosen (Pak Reza) + quiz HOTS resmi.

## Struktur
```
index.html      kerangka halaman
css/style.css   tampilan
js/data.js      SEMUA konten: materi, soal, flashcard, cara ngitung, kisi-kisi
js/app.js       logika (router, progres, latihan, simulasi)
```
Mau menambah soal? Tambahkan objek baru ke `QUIZ_IIT` / `QUIZ_ADS` di `js/data.js`:
`{q:"pertanyaan", o:["A","B","C","D"], a:indeksJawabanBenar, e:"pembahasan", t:indeksTopik}`.

## Buka
Website live ada di GitHub Pages (Settings → Pages → Deploy from branch `main`, folder `/root`). Bisa juga langsung buka `index.html` di browser.
