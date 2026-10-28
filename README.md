# Prep MT 1CC5

Website belajar **Modul Test (MT)** kelas 1CC5, step by step, untuk dua mata kuliah:

- **Introduction to Information Technology (IIT)**
- **Algorithm & Data Structure (ADS)**

## Fitur
- 🧭 **Jalur Belajar**: 38 langkah dalam 5 tahap (IIT → Lab Hitung → ADS → Bedah Soal HOTS → Simulasi). Tiap langkah punya kotak *Inti yang wajib nempel*, materi lengkap, dan *Cek Pemahaman*.
- ✍️ **Bank Soal**: 214 soal tetap + **soal acak tanpa batas** (25 generator hitungan IIT, 27 generator "kode C → output" ADS). Filter per mapel/topik/jenis, mode "hanya yang pernah salah", opsi diacak, shortcut keyboard.
- ⏱️ **Simulasi MT**: format MT: 30 soal IIT (18 hitungan + 12 konsep), 30 soal ADS (18 kode/output + 12 konsep), atau Full 60 soal, pakai timer. **Bobot nilai beda per soal** (1–3 poin sesuai effort). Ada analisis skor per topik dan pembahasan.
- 🧮 **Hitung Acak**: soal konversi basis, komplemen-2, penjumlahan biner, dan waktu unduh tanpa batas, lengkap dengan langkah-langkahnya.
- 🃏 **Flashcard** dan 🔁 **Konverter** desimal ↔ biner ↔ oktal ↔ heksa.
- ⚡ **Ringkasan Kilat**: semua inti dan rumus dalam satu halaman (bisa dicetak/PDF), plus ✅ **Kisi-kisi** yang bisa disalin ke WhatsApp.
- Mode gelap/terang, nyaman di HP (ada navigasi bawah). Progres tersimpan otomatis di browser.
- Ringan untuk HP kentang (±66 KB gzip) dan **bisa offline** setelah sekali dibuka. Bisa dipasang lewat "Add to Home Screen".

Materi disusun dari slide & modul dosen (Pak Reza) + quiz HOTS resmi.

## Struktur
```
index.html      kerangka halaman
css/style.css   tampilan
js/data.js      SEMUA konten: materi, soal, flashcard, cara ngitung, kisi-kisi
js/soalgen.js   generator soal acak (jawaban kode C sudah diverifikasi dengan compiler)
js/app.js       logika (router, progres, latihan, simulasi)
sw.js           cache offline (naikkan VERSION kalau ada update besar)
```
Mau menambah soal? Tambahkan objek baru ke `QUIZ_IIT` / `QUIZ_ADS` di `js/data.js`:
`{q:"pertanyaan", o:["A","B","C","D"], a:indeksJawabanBenar, e:"pembahasan", t:indeksTopik}`.

## Buka
Website live ada di GitHub Pages (Settings → Pages → Deploy from branch `main`, folder `/root`). Bisa juga langsung buka `index.html` di browser.
