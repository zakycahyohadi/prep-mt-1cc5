/* Konten: materi, soal, flashcard, cara ngitung, kisi-kisi. Edit di sini untuk menambah/mengubah isi. */
var IIT_TOPICS=[
 {t:"Pengenalan Teknologi Informasi", k:["TI = komputasi (komputer) + jalur komunikasi pembawa data, suara, video (Williams &amp; Sawyer)", "Triad Senn: <b>Computers · Communications · Know-How</b>", "Teknologi = skill + algoritma (logika berpikir) + hardware", "Fungsi TI: Capture → Process → Generate → Store/Retrieve → Transmit", "1946 ENIAC · 1969 ARPANET (4 node) · 1972 email &amp; TCP/IP · 1992 WWW"], h:`
  <p><b>Teknologi</b> = himpunan sarana buatan manusia (artificial) untuk memfasilitasi kebutuhan & melipatgandakan kemampuan manusia. 3 entitas: <span class="kv">Keterampilan (skill)</span>, <span class="kv">Logika berpikir (algoritma)</span>, <span class="kv">Perangkat keras (hardware)</span>.</p>
  <p><b>Informasi</b> = hasil pengolahan data yang punya arti & bisa dimanfaatkan manusia. <b>Teknologi Informasi</b> (Williams & Sawyer, 2003) = teknologi yang menggabungkan <b>komputasi (komputer)</b> dengan <b>jalur komunikasi</b> yang membawa data, suara, atau video.</p>
  <h4>Model Triad Senn — kekuatan TI = irisan 3 komponen</h4>
  <ul>
    <li><b>Computers</b> — hardware, programs, information</li>
    <li><b>Communications</b> — hardware, programs, information</li>
    <li><b>Know-How</b> — people, application, procedure</li>
  </ul>
  <div class="note">James Canton (<i>The Extreme Future</i>): 7 faktor pengubah masa depan — energi, pekerjaan, pangan, kesehatan, air bersih, lingkungan, keamanan. Penguasaan TI = modal memenangkan persaingan global.</div>
  <h4>Sejarah singkat TI</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Masa</th><th>Tonggak</th></tr>
    <tr><td>Pra-sejarah (s/d 3000 SM)</td><td>Lukisan gua, isyarat asap/suara</td></tr>
    <tr><td>3000 SM</td><td>Simbol/pictograf bangsa <b>Sumeria</b></td></tr>
    <tr><td>2900 SM</td><td><b>Hierogliph</b> Mesir Kuno</td></tr>
    <tr><td>500 SM</td><td>Serat <b>papyrus</b> (cikal bakal kertas)</td></tr>
    <tr><td>1455</td><td>Mesin cetak <b>Gutenberg</b></td></tr>
    <tr><td>1830</td><td>Program pertama: Ada Lovelace + Babbage (mesin analytical)</td></tr>
    <tr><td>1837</td><td>Telegraf & kode <b>Morse</b></td></tr>
    <tr><td>1946 / 1969 / 1972 / 1992</td><td><b>ENIAC</b> / <b>ARPANET</b> (4 node) / email & <b>TCP/IP</b> / <b>WWW</b> (CERN)</td></tr>
  </table></div>
  <h4>Fungsi TI (siklus hidup informasi)</h4>
  <p><b>Capture → Process → Generate → Store/Retrieve → Transmit.</b></p>
  <h4>Arsitektur informasi (3 dimensi)</h4>
  <ul><li>Apa yang disimpan? · Di mana ditempatkan? · Bagaimana dipindahkan?</li>
  <li><b>Tingkat logis</b> = gambaran bisnis (karyawan, rekening, transaksi). <b>Tingkat fisik</b> = basis data relasional, data warehouse, server.</li></ul>
  <div class="note"><b>Peran manusia:</b> TI hanya media pasif — manusia penentu. Perkembangan TI bergantung pada kompetensi SDM, dan implementasi sukses butuh manajemen yang baik.</div>`},

 {t:"Evolusi & Perkembangan Komputer", k:["4 era bisnis: Komputerisasi (efisiensi) → TI (efektivitas) → SI (kompetitif) → Globalisasi", "Gen 1 tabung hampa · 2 transistor · 3 IC · 4 mikroprosesor · 5 biochip/AI", "Gen 3 = lahirnya OS &amp; minicomputer (PDP-8)"], h:`
  <p>Dibedah lewat <b>dua lensa</b>: lensa bisnis (waktu informasi) → 4 era, dan lensa hardware (waktu pembuatan) → generasi.</p>
  <h4>4 Era paradigma bisnis</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Era</th><th>Fokus utama</th><th>Ciri</th></tr>
   <tr><td>Komputerisasi (1960an)</td><td>Efisiensi waktu & biaya</td><td>Back office, Mainframe</td></tr>
   <tr><td>Teknologi Informasi (1970an)</td><td>Efektivitas kerja</td><td>PC di meja, Divisi EDP</td></tr>
   <tr><td>Sistem Informasi (1980an)</td><td>Keunggulan kompetitif</td><td>BPR, ERP, market driven</td></tr>
   <tr><td>Globalisasi (1990an–kini)</td><td>Pasar global (cyberspace)</td><td>LAN/WAN, e-commerce</td></tr>
  </table></div>
  <h4>5 Generasi perangkat keras</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Gen</th><th>Komponen inti</th><th>Catatan</th></tr>
   <tr><td>1 (1939–1954)</td><td>Tabung hampa (vacuum tube)</td><td>Raksasa, panas, bahasa mesin. SAGE 275 ton; UNIVAC, ENIAC</td></tr>
   <tr><td>2 (1959–)</td><td>Transistor</td><td>Lebih kecil, COBOL & FORTRAN, real-time</td></tr>
   <tr><td>3</td><td>IC (Integrated Circuit)</td><td>Jack Kilby, lahirnya OS & minicomputer (PDP-8)</td></tr>
   <tr><td>4 (1971–kini)</td><td>Mikroprosesor (LSI/VLSI)</td><td>PC, GUI, floppy, LAN/Internet</td></tr>
   <tr><td>5 (masa depan)</td><td>Biochip, AI</td><td>Programless computer, kecerdasan buatan</td></tr>
  </table></div>
  <div class="note">Analogi IBM: "Seandainya otomotif maju sepesat TI, mobil sekarang bisa 10.000 km/jam seharga $1." Makin kecil & murah hardware → makin masif dampaknya.</div>`},

 {t:"Sistem Komputer & Arsitektur", k:["Hardware · Software · Brainware (manusia)", "Arsitektur = terlihat programmer · Organisasi = fisik, transparan", "CPU = CU (dirigen) + ALU (hitung &amp; logika) + Register (memori super cepat)", "Hukum Moore: transistor ×2 tiap ~18 bulan"], h:`
  <h4>Tiga pilar (Triad)</h4>
  <ul>
   <li><b>Hardware</b> — fisik: CPU, I/O, storage, monitor, casing</li>
   <li><b>Software</b> — instruksi/logika: Sistem Operasi + Program Aplikasi</li>
   <li><b>Brainware</b> — manusia: Manajer EDP → Analis/Programmer → Operator/User</li>
  </ul>
  <h4>Arsitektur vs Organisasi komputer</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Arsitektur (konseptual)</th><th>Organisasi (fisik)</th></tr>
   <tr><td>Terlihat oleh programmer</td><td>Transparan bagi programmer</td></tr>
   <tr><td>Set instruksi, mekanisme I/O, jumlah bit, pengalamatan memori</td><td>Sinyal kontrol, antarmuka periferal, teknologi memori</td></tr>
   <tr><td>“Cetak biru tata letak”</td><td>“Susunan bata & kabel”</td></tr>
  </table></div>
  <h4>4 Subsistem fungsional (model Stallings)</h4>
  <ul><li><b>Data Processing</b> (olah) · <b>Data Storage</b> (simpan) · <b>Data Movement</b> (I/O) · <b>Control</b> (sinkronisasi/orkestrator)</li></ul>
  <h4>Anatomi CPU</h4>
  <ul>
   <li><b>Control Unit (CU)</b> — ambil, terjemahkan & kendalikan instruksi (sang dirigen)</li>
   <li><b>ALU</b> — pusat aritmatika & logika (<, >, =), pakai <b>two's complement</b>; semua operasi berbasis penjumlahan (adder)</li>
   <li><b>Register</b> — memori internal super kecil & super cepat untuk operan sementara</li>
  </ul>
  <div class="note"><b>Hukum Moore</b> (Gordon Moore): jumlah transistor pada chip berlipat ganda ~setiap 18 bulan; kepadatan naik → jalur listrik pendek → kinerja melonjak, biaya per chip relatif konstan.</div>
  <h4>Kategori komputer (skala)</h4>
  <p>Supercomputer (riset/militer) → Mainframe (transaksi masif, perbankan) → Minicomputer (departemen) → PC (perorangan).</p>
  <h4>Klasifikasi berdasarkan jenis data</h4>
  <ul><li><b>Analog</b> — data kontinu (suhu, tegangan). <b>Digital</b> — data diskret (angka/teks), standar modern. <b>Hybrid</b> — gabungan (mis. mesin faks).</li></ul>`},

 {t:"Sistem Bilangan & Logika Komputer", k:["Desimal → basis lain: bagi berulang, sisa dibaca <b>bawah → atas</b>", "Biner → oktal: grup 3-bit · biner → heksa: grup 4-bit (dari kanan)", "Komplemen-2 = balik semua bit + 1 · MSB = sign bit", "n pernyataan → 2ⁿ baris · p→q salah hanya saat B→S"], h:`
  <h4>4 Basis bilangan</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Sistem</th><th>Basis</th><th>Simbol</th></tr>
   <tr><td>Desimal</td><td>10</td><td class="mono">0–9</td></tr>
   <tr><td>Biner</td><td>2</td><td class="mono">0,1</td></tr>
   <tr><td>Oktal</td><td>8</td><td class="mono">0–7</td></tr>
   <tr><td>Heksadesimal</td><td>16</td><td class="mono">0–9, A–F</td></tr>
  </table></div>
  <p><b>Absolute value</b> = nilai simbol; <b>Position value</b> = basis dipangkatkan posisi. Mis. 859: 8×10² + 5×10¹ + 9×10⁰.</p>
  <h4>Konversi — aturan cepat</h4>
  <ul>
   <li><b>Desimal → biner/oktal/heksa:</b> bagi berulang, baca sisa dari bawah ke atas.</li>
   <li><b>Biner → oktal:</b> kelompok <b>3-bit</b> dari kanan. Biner → heksa: kelompok <b>4-bit</b> dari kanan.</li>
  </ul>
  <h4>Encoding karakter</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Kode</th><th>Bit</th><th>Kombinasi</th></tr>
   <tr><td>SBCDIC</td><td>6-bit</td><td>2⁶ = 64</td></tr>
   <tr><td>ASCII</td><td>7/8-bit</td><td>s/d 2⁸ = 256</td></tr>
   <tr><td>EBCDIC</td><td>8-bit</td><td>256</td></tr>
  </table></div>
  <h4>Aritmatika biner & bilangan negatif</h4>
  <ul>
   <li>Penjumlahan: 1+1 = 0 (carry 1). Pengurangan: 0−1 = 1 (borrow 1).</li>
   <li><b>Komplemen-1</b> = balik semua bit. <b>Komplemen-2</b> = komplemen-1 + 1 (standar sistem).</li>
   <li>Komputer tidak mengurangi — ia menambah bilangan negatif: 18 − 7 = 18 + (−7). MSB = sign bit (1 negatif, 0 positif).</li>
  </ul>
  <h4>Logika proposisi</h4>
  <p><b>Pernyataan</b> = kalimat yang bernilai benar saja atau salah saja. <b>Konjungsi (AND)</b> benar hanya jika keduanya benar. <b>Implikasi (p→q)</b> salah hanya jika hipotesa benar tapi kesimpulan salah.</p>
  <p>Tabel kebenaran dengan n pernyataan → <b>2ⁿ baris</b>. Variasi implikasi: konvers (q→p), invers (~p→~q), kontraposisi (~q→~p).</p>`},

 {t:"Data, Kompresi & Transfer", k:["1 Byte = 8 bit · naik satuan ×1024", "Lossy (JPEG, MP3) vs Lossless (PNG, GIF, ZIP)", "Waktu unduh: Byte ×8 → bit, lalu ÷ bps", "Efisiensi = 100% − (sesudah ÷ sebelum × 100%)"], h:`
  <h4>Unit penyimpanan</h4>
  <ul><li><b>Bit</b> = terkecil (0/1), istilah dari John Tukey. <b>Byte</b> = 8 bit = 1 karakter. Naik tingkat ×1024: KB → MB → GB → TB → PB → EB.</li></ul>
  <h4>Kompresi data</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Jenis</th><th>Hasil</th><th>Contoh</th></tr>
   <tr><td><b>Lossy</b></td><td>Buang data tak terasa, tidak 100% sama</td><td>MP3, JPEG, MPEG</td></tr>
   <tr><td><b>Lossless</b></td><td>Ekstrak sama persis 100%</td><td>ZIP, RAR, PNG, GIF</td></tr>
  </table></div>
  <p>Mode penerimaan: <b>Dialogue</b> (real-time, delay maks ~150 ms, mis. video conference) vs <b>Retrieval</b> (non real-time, random access).</p>
  <div class="tblwrap"><table class="tbl"><tr><th>Format</th><th>Kompresi</th><th>Warna</th></tr>
   <tr><td>GIF</td><td>Lossless (LZW)</td><td>maks 8-bit (256)</td></tr>
   <tr><td>PNG</td><td>Lossless (Deflate)</td><td>16–48-bit + alpha</td></tr>
   <tr><td>JPEG</td><td>Lossy (DCT)</td><td>24-bit (16,7 juta)</td></tr>
  </table></div>
  <h4>Hitung waktu unduh (langkah)</h4>
  <ul><li>Ubah ukuran file ke <b>bit</b> (Byte ×8), lalu bagi dengan kecepatan (bps).</li>
  <li>Contoh: 500.000 Byte ×8 = 4.000.000 bit ÷ 33.600 bps ≈ <b>119 detik</b>.</li></ul>
  <p><b>Rasio kompresi</b> = 100% − (ukuran_sesudah ÷ ukuran_sebelum × 100%).</p>
  <div class="note"><b>Interfacing:</b> Protokol (aturan) · Handshaking (sinyal awal) · Bus (Data bus, Address bus, Control bus).</div>`},

 {t:"Jaringan Komputer", k:["PAN ruangan · LAN gedung · MAN kota · WAN negara", "Hub = Physical · Switch/Bridge = Data Link (MAC) · Router = Network (IP)", "Star tangguh · Ring 1 putus = lumpuh · Mesh paling anti-gagal", "Straight = beda jenis · Crossover = sejenis · Rollover = konsol"], h:`
  <h4>Skala jaringan</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Tipe</th><th>Jangkauan</th></tr>
   <tr><td>PAN</td><td>1–10 m (ruangan)</td></tr>
   <tr><td>LAN</td><td>10–1.000 m (gedung)</td></tr>
   <tr><td>MAN</td><td>10–100 km (kota)</td></tr>
   <tr><td>WAN</td><td>100–1.000+ km (negara)</td></tr>
   <tr><td>Internet</td><td>Global tanpa batas</td></tr>
  </table></div>
  <h4>Media kabel</h4>
  <ul><li><b>Twisted pair</b> (UTP) — murah, ≤100 m. <b>Koaksial</b> — menengah. <b>Fiber optic</b> — cahaya, sangat cepat & jauh; <b>Single-mode</b> (antar kota) vs <b>Multi-mode</b> (&lt;3 km).</li></ul>
  <h4>Perangkat (per layer OSI)</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Alat</th><th>Layer</th><th>Membaca</th></tr>
   <tr><td>Hub</td><td>Physical</td><td>— (broadcast ke semua, rawan collision)</td></tr>
   <tr><td>Bridge</td><td>Data Link</td><td>MAC address (membagi jaringan)</td></tr>
   <tr><td>Switch</td><td>Data Link</td><td>MAC (kirim privat per port)</td></tr>
   <tr><td>Router</td><td>Network</td><td>IP address (antar jaringan, rute terbaik)</td></tr>
  </table></div>
  <p><b>NIC</b> menyimpan MAC address (identitas fisik). <b>Modem</b> = modulator-demodulator (digital ↔ analog).</p>
  <h4>Topologi</h4>
  <ul><li><b>Star</b> — pusat switch, tangguh (putus = lokal). <b>Ring</b> — token, 1 putus = lumpuh. <b>Bus</b>, <b>Tree</b> (hierarki), <b>Mesh</b> (semua terhubung, anti-gagal, boros kabel).</li></ul>
  <div class="note"><b>Kabel UTP:</b> standar <b>T568A</b> vs <b>T568B</b>. <b>Straight</b> = kedua ujung sama (perangkat beda jenis). <b>Crossover</b> = 568B↔568A (perangkat sejenis). <b>Rollover</b> = konsol. Crimping: Stripping → Untwisting → Trimming → Crimping → Testing.</div>`},

 {t:"Interaksi Manusia–Mesin", k:["Uji Turing: A komputer · B manusia · C interogator", "Antarmuka teks murni → hilangkan bias wujud fisik", "Paradigma berbalik: dulu manusia menilai mesin, kini mesin (EdTech) menilai manusia"], h:`
  <p>Dua paradigma interaksi: dulu mesin dirancang <b>meniru</b> kecerdasan manusia, kini mesin dirancang <b>melatih</b> kecerdasan manusia.</p>
  <h4>Uji Turing</h4>
  <ul>
   <li><b>Entitas A (Komputer)</b> — berusaha mengelabui agar tak dibedakan dari manusia.</li>
   <li><b>Entitas B (Manusia)</b> — kontrol, respons natural.</li>
   <li><b>Entitas C (Interogator)</b> — menilai mana mesin & mana manusia dari output teks.</li>
  </ul>
  <p>Inti: “kebutaan antarmuka” (dinding pemisah) memaksa evaluasi murni pada logika & bahasa, menghilangkan bias wujud fisik.</p>
  <h4>EdTech & Gamifikasi (era modern)</h4>
  <div class="tblwrap"><table class="tbl"><tr><th></th><th>Uji Turing</th><th>EdTech</th></tr>
   <tr><td>Tujuan</td><td>Menilai kecerdasan mesin</td><td>Meningkatkan kecerdasan manusia</td></tr>
   <tr><td>Peran mesin</td><td>Subjek yang diuji</td><td>Fasilitator & penilai</td></tr>
   <tr><td>Antarmuka</td><td>Teks murni (hilangkan bias visual)</td><td>Kaya grafis & warna</td></tr>
  </table></div>
  <div class="note">Paradigma berbalik: dulu manusia mengevaluasi mesin; kini mesin mengevaluasi pemahaman manusia (feedback loop instan).</div>`}
];

var ADS_TOPICS=[
 {t:"Konsep Algoritma", k:["Algoritma = runtunan langkah menyelesaikan masalah (dari Al-Khwarizmi)", "Siklus IPO: Input → Process → Output", "5 ciri: ada masukan, ada keluaran, definitif, efektif, berakhir", "4 cara tulis: bahasa alami, flowchart, pseudocode, bahasa program"], h:`
  <p><b>Algoritma</b> = runtunan langkah-langkah untuk menyelesaikan suatu masalah. Istilahnya dari <b>Al-Khwarizmi</b>, ahli matematika Persia abad ke-9.</p>
  <h4>Siklus IPO</h4>
  <p>Setiap algoritma punya tiga jenis langkah: <b>Input</b> (masukan) → <b>Process</b> (proses) → <b>Output</b> (keluaran). Tanpa masukan masalah tak terdefinisi, tanpa proses tak selesai, tanpa keluaran hasilnya tak diketahui.</p>
  <h4>5 Karakteristik algoritma yang baik</h4>
  <ul>
   <li><b>Ada masukan</b> — supaya bisa dipakai umum, bukan satu kasus saja.</li>
   <li><b>Ada keluaran</b> — hasil wajib ditampilkan.</li>
   <li><b>Definitif</b> — tiap langkah jelas, eksplisit, tidak ambigu (komputer butuh instruksi detail).</li>
   <li><b>Efektif</b> — tak ada langkah sia-sia & semua langkah masuk akal (tidak mustahil).</li>
   <li><b>Berakhir</b> (finite) — selesai dalam jumlah langkah & waktu terbatas.</li>
  </ul>
  <h4>4 cara penulisan algoritma</h4>
  <ul><li><b>Bahasa alami</b> (prosa) — mudah tapi rawan ambigu · <b>Flowchart</b> (bagan alir) — simbol grafis · <b>Pseudocode</b> — mirip kode · <b>Bahasa program</b> — langsung bisa dijalankan.</li></ul>
  <div class="note">Contoh (bahasa alami) hitung luas: 1) Mulai 2) Terima panjang 3) Terima lebar 4) Luas = panjang × lebar 5) Tampilkan luas 6) Selesai.</div>`},

 {t:"Modul 1 — Pengenalan Bahasa C", k:["C dibuat Dennis Ritchie (Bell Labs) untuk menulis UNIX", "Eksekusi mulai dari <code>main()</code>, tiap pernyataan diakhiri <code>;</code>", "<code>#include &lt;stdio.h&gt;</code> agar bisa pakai printf/scanf", "kode.c → preprocessor → compiler → linker → program"], h:`
  <p>C = bahasa <b>prosedural</b> oleh <b>Dennis Ritchie</b> (Bell Labs, awal 1970-an), awalnya untuk menulis OS UNIX. Cepat, dekat hardware, melatih pemahaman memori & pointer.</p>
  <p>Alur kompilasi: <span class="inlinecode">kode.c → preprocessor → compiler → linker → program</span>.</p>
  <h4>Struktur program pertama</h4>
  <pre class="code"><span class="cm">// pustaka input-output</span>
#include &lt;stdio.h&gt;
<span class="kw">int</span> <span class="fn">main</span>(<span class="kw">void</span>) {
    <span class="fn">printf</span>(<span class="st">"Halo, Dunia!\\n"</span>);
    <span class="kw">return</span> 0;   <span class="cm">// 0 = selesai sukses</span>
}</pre>
  <ul>
   <li><span class="inlinecode">#include &lt;stdio.h&gt;</span> memuat pustaka I/O agar <span class="inlinecode">printf</span> bisa dipakai.</li>
   <li>Eksekusi mulai dari fungsi <span class="inlinecode">main()</span>. Tiap pernyataan diakhiri titik koma <span class="inlinecode">;</span>.</li>
   <li><span class="inlinecode">\\n</span> = baris baru. Kompilasi: <span class="inlinecode">gcc -Wall -Wextra -std=c11 hello.c -o hello</span>.</li>
  </ul>`},

 {t:"Modul 2 — Variabel, Tipe Data & Konstanta", k:["char 1B %c · int 4B %d · float 4B %f · double 8B %lf · long long 8B %lld", "Nama variabel: awali huruf/_, tanpa spasi, case-sensitive, bukan keyword", "Desimal disimpan ke int → pecahan dibuang", "<code>const</code> bertipe · <code>#define</code> makro tanpa tipe"], h:`
  <div class="tblwrap"><table class="tbl"><tr><th>Tipe</th><th>Ukuran</th><th>Format</th><th>Contoh</th></tr>
   <tr><td class="mono">char</td><td>1 byte</td><td class="mono">%c</td><td class="mono">'A'</td></tr>
   <tr><td class="mono">int</td><td>4 byte</td><td class="mono">%d</td><td class="mono">2024</td></tr>
   <tr><td class="mono">float</td><td>4 byte</td><td class="mono">%f</td><td class="mono">3.14f</td></tr>
   <tr><td class="mono">double</td><td>8 byte</td><td class="mono">%f / %lf</td><td class="mono">3.14159</td></tr>
   <tr><td class="mono">long long</td><td>8 byte</td><td class="mono">%lld</td><td class="mono">9000000000</td></tr>
  </table></div>
  <ul>
   <li>Nama variabel: diawali huruf atau <span class="inlinecode">_</span>, tanpa spasi, <b>case-sensitive</b> (<span class="inlinecode">nilai ≠ Nilai</span>), bukan keyword.</li>
   <li><span class="inlinecode">const</span> = nilai tak bisa diubah. <span class="inlinecode">#define</span> = makro (ganti teks sebelum kompilasi, tanpa tipe).</li>
   <li><span class="inlinecode">%.2f</span> cetak 2 desimal. <span class="inlinecode">sizeof</span> cek ukuran byte.</li>
  </ul>
  <div class="note">Awas: menyimpan desimal ke <span class="inlinecode">int</span> membuang bagian pecahan (konversi implisit). <span class="inlinecode">int x = 12500.75;</span> → 12500.</div>`},

 {t:"Modul 3 — Input & Output", k:["<code>scanf</code> butuh <code>&amp;</code> (alamat variabel)", "<code>%s</code> berhenti di spasi → nama lengkap pakai <code>fgets</code>", "<code>%5d</code> kanan · <code>%-10s</code> kiri · <code>%05d</code> isi nol · <code>%.2f</code> 2 desimal"], h:`
  <div class="tblwrap"><table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
   <tr><td class="mono">printf</td><td>Tampilkan teks terformat</td></tr>
   <tr><td class="mono">scanf</td><td>Baca input terformat (butuh <span class="inlinecode">&amp;</span>)</td></tr>
   <tr><td class="mono">fgets</td><td>Baca satu baris (boleh berspasi)</td></tr>
  </table></div>
  <ul>
   <li><span class="inlinecode">scanf</span> butuh alamat variabel: <span class="inlinecode">scanf("%d", &amp;x);</span> — kecuali array string.</li>
   <li><span class="inlinecode">%s</span> berhenti di spasi → nama lengkap pakai <span class="inlinecode">fgets</span>.</li>
   <li>Lebar & presisi: <span class="inlinecode">%5d</span> rata kanan, <span class="inlinecode">%-10s</span> rata kiri, <span class="inlinecode">%05d</span> isi nol, <span class="inlinecode">%.2f</span> 2 desimal.</li>
  </ul>
  <div class="note">Contoh klasik: ubah detik → jam:menit:detik pakai <span class="inlinecode">/</span> dan <span class="inlinecode">%</span>. <span class="inlinecode">jam = total/3600; menit = (total%3600)/60; detik = total%60;</span></div>`},

 {t:"Modul 4 — Operator & Ekspresi", k:["int ÷ int membuang pecahan: 7/2 = 3 · <code>%</code> = sisa bagi", "Casting: <code>(float)7/2</code> = 3.5", "Di C: benar = 1, salah = 0"], h:`
  <div class="tblwrap"><table class="tbl"><tr><th>Kategori</th><th>Operator</th><th>Contoh</th></tr>
   <tr><td>Aritmatika</td><td class="mono">+ - * / %</td><td class="mono">7 % 3 → 1</td></tr>
   <tr><td>Relasional</td><td class="mono">== != &lt; &gt; &lt;= &gt;=</td><td class="mono">5&gt;3 → 1</td></tr>
   <tr><td>Logika</td><td class="mono">&amp;&amp; || !</td><td class="mono">(a&gt;0)&amp;&amp;(b&gt;0)</td></tr>
   <tr><td>Penugasan</td><td class="mono">= += -= *= /=</td><td class="mono">x += 5</td></tr>
   <tr><td>Increment</td><td class="mono">++ --</td><td class="mono">i++</td></tr>
  </table></div>
  <ul>
   <li><b>Pembagian int ÷ int membuang pecahan:</b> <span class="inlinecode">7/2 = 3</span>. Pakai casting: <span class="inlinecode">(float)7/2 = 3.5</span>.</li>
   <li>Di C: nilai <b>0 = salah</b>, selain 0 = benar. Ekspresi relasional/logika menghasilkan 1 atau 0.</li>
   <li>Ternary: <span class="inlinecode">kondisi ? a : b</span>.</li>
  </ul>
  <div class="note">Tahun kabisat: <span class="inlinecode">(th%4==0 &amp;&amp; th%100!=0) || th%400==0</span>.</div>`},

 {t:"Modul 5 — Percabangan", k:["<code>else if</code> berhenti di kondisi benar pertama → cek nilai terbesar dulu", "<code>switch</code>: lupa <code>break</code> = fall-through", "Validasi rentang ditaruh paling awal"], h:`
  <ul>
   <li><span class="inlinecode">if</span> — jalan jika kondisi benar (≠0). <span class="inlinecode">if-else</span> — dua jalur. <span class="inlinecode">else if</span> — uji berurutan, <b>berhenti di kondisi benar pertama</b>.</li>
   <li><span class="inlinecode">switch-case</span> — pilih berdasar nilai int/char; <b>jangan lupa <span class="inlinecode">break</span></b>; <span class="inlinecode">default</span> untuk yang tak dikenal.</li>
  </ul>
  <pre class="code"><span class="kw">if</span> (nilai &lt; 0 || nilai &gt; 100)  <span class="fn">printf</span>(<span class="st">"tidak valid"</span>);
<span class="kw">else if</span> (nilai &gt;= 85) grade = <span class="st">'A'</span>;
<span class="kw">else if</span> (nilai &gt;= 70) grade = <span class="st">'B'</span>;
<span class="kw">else</span>                grade = <span class="st">'C'</span>;</pre>
  <div class="note"><b>Urutan kondisi itu penting.</b> Pada rantai <span class="inlinecode">else if</span>, cek nilai <b>terbesar lebih dulu</b>. Kalau <span class="inlinecode">nilai&gt;=55</span> dicek sebelum <span class="inlinecode">&gt;=85</span>, nilai 91 keburu berhenti di cabang C. Validasi rentang diletakkan paling awal.</div>`},

 {t:"Modul 6 — Perulangan", k:["for (iterasi diketahui) · while (cek di awal) · do-while (minimal 1×)", "<code>for(i=1;i&lt;=10;i+=2)</code> → jalan 5×, i akhir = 11", "<code>break</code> keluar loop · <code>continue</code> lompat ke iterasi berikutnya"], h:`
  <div class="tblwrap"><table class="tbl"><tr><th>Jenis</th><th>Kapan dipakai</th></tr>
   <tr><td class="mono">for</td><td>Jumlah iterasi diketahui: <span class="inlinecode">for(i=0;i&lt;n;i++)</span></td></tr>
   <tr><td class="mono">while</td><td>Kondisi dicek di awal (bisa 0 kali jalan)</td></tr>
   <tr><td class="mono">do-while</td><td>Badan jalan <b>minimal 1 kali</b> (cek di akhir)</td></tr>
  </table></div>
  <ul>
   <li><span class="inlinecode">break</span> keluar dari loop; <span class="inlinecode">continue</span> lompat ke iterasi berikutnya.</li>
   <li>Perulangan bersarang untuk pola/tabel (mis. tabel perkalian, segitiga bintang).</li>
  </ul>
  <div class="note"><b>Jebakan klasik:</b> <span class="inlinecode">for(i=1; i&lt;=10; i+=2)</span> jalan untuk i = 1,3,5,7,9 (<b>5×</b>). Setelah loop, i = 11 (karena 11≤10 salah) — bukan 9. Kalau diubah <span class="inlinecode">i++</span>, jalan 10× (i = 1..10).</div>`},

 {t:"Notasi Flowchart", k:["Oval = terminal · Jajar genjang = I/O · Persegi = proses · Belah ketupat = keputusan", "Kedua cabang if–else harus bertemu di satu Selesai"], h:`
  <div class="tblwrap"><table class="tbl"><tr><th>Simbol</th><th>Nama</th><th>Fungsi</th></tr>
   <tr><td>Oval</td><td>Terminal</td><td>Awal (Mulai) & akhir (Selesai)</td></tr>
   <tr><td>Jajar genjang</td><td>Input/Output</td><td>Masukan/keluaran (<span class="inlinecode">scanf</span>/<span class="inlinecode">printf</span>)</td></tr>
   <tr><td>Persegi panjang</td><td>Proses</td><td>Perhitungan/assignment</td></tr>
   <tr><td>Belah ketupat</td><td>Keputusan</td><td>Kondisi, 2 cabang (Ya/Tidak)</td></tr>
   <tr><td>Panah</td><td>Garis alir</td><td>Arah urutan langkah</td></tr>
   <tr><td>Lingkaran</td><td>Konektor</td><td>Penghubung di halaman sama</td></tr>
  </table></div>
  <div class="note"><b>Kesalahan umum (dari soal MT):</b> input nilai pakai kotak <i>proses</i> (harusnya jajar genjang I/O); kondisi pakai simbol <i>terminal</i> (harusnya belah ketupat); tidak ada terminal “Selesai” sehingga cabang menggantung. Flowchart yang benar: kedua cabang if–else harus bertemu & berakhir di satu Selesai.</div>`},

 {t:"Array & Matriks", k:["Indeks mulai 0: <code>a[5]</code> → indeks 0–4", "Semua elemen bertipe data sama", "Matriks = array 2 dimensi <code>m[baris][kolom]</code>"], h:`
  <p><b>Array</b> (larik) = variabel yang menyimpan <b>banyak nilai</b> bertipe sama. Tiap nilai disebut <b>elemen</b>, diakses lewat <b>indeks</b> yang <b>dimulai dari 0</b>.</p>
  <pre class="code"><span class="kw">int</span> contoh[5] = {10, 47, 20, 89, 30};
contoh[0]          <span class="cm">// 10 (elemen pertama)</span>
contoh[4] = 63;    <span class="cm">// ubah elemen indeks 4</span></pre>
  <ul>
   <li>Array di C hanya boleh berisi elemen dengan <b>tipe data sama</b>.</li>
   <li><b>Matriks</b> = array multidimensi (array berisi array), mis. <span class="inlinecode">int m[3][4]</span>.</li>
   <li>Berguna saat ada banyak nilai sejenis (mis. 1000 angka) — tak praktis bikin 1000 variabel.</li>
  </ul>
  <div class="note">Indeks mulai 0: array <span class="inlinecode">[5]</span> punya indeks valid 0–4. Mengakses indeks 5 = di luar batas (out of bounds).</div>`},

 {t:"Fungsi & Prosedur", k:["Fungsi = bagian program untuk satu tugas: tulis sekali, panggil berkali-kali", "Parameter = masukan · return value = keluaran", "Tipe tak ditulis → <code>int</code> · prototype ditulis di atas main"], h:`
  <p><b>Fungsi</b> = bagian program untuk satu tugas tertentu, dipisah dari bagian yang memakainya. Program C dibentuk dari kumpulan fungsi (mulai dari <span class="inlinecode">main()</span>).</p>
  <h4>Manfaat</h4>
  <ul><li>Struktur program jelas & <span class="inlinecode">main()</span> jadi pendek; menghindari penulisan berulang (tulis sekali, panggil berkali-kali).</li></ul>
  <h4>Bentuk umum</h4>
  <pre class="code"><span class="kw">int</span> <span class="fn">tambah</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) {   <span class="cm">// tipe | nama | parameter</span>
    <span class="kw">return</span> a + b;              <span class="cm">// return value (nilai keluaran)</span>
}</pre>
  <ul>
   <li><b>Parameter/argumen</b> = nilai masukan yang diolah fungsi; <b>return value</b> = nilai keluaran.</li>
   <li>Fungsi ibarat "kotak gelap": isi dalamnya privat, hanya diakses lewat parameter.</li>
   <li>Kalau tipe keluaran tak ditulis → dianggap <span class="inlinecode">int</span> (default). <b>Prototype</b> = deklarasi fungsi di atas <span class="inlinecode">main</span>.</li>
  </ul>`},

 {t:"Searching — Sequential, Binary & lainnya", k:["Sequential: cek satu-satu dari indeks 0, tak perlu urut · O(n) · tidak ketemu → <code>return -1</code>", "Binary: WAJIB terurut · tengah = (bawah + atas) / 2 · kiri: <code>atas = tengah - 1</code> · kanan: <code>bawah = tengah + 1</code> · O(log n)", "Sentinel: data dicari ditaruh di ujung array → loop pasti berhenti", "Interpolation: tebak posisi pakai proporsi (urut &amp; merata) · Jump: lompat √n lalu sequential"], h:`
  <p><b>Searching</b> = mencari posisi sebuah data (kunci / <i>key</i>) di dalam array. Hasilnya biasanya <b>indeks</b> tempat data ditemukan, atau <b>−1</b> kalau tidak ada (karena indeks valid mulai 0).</p>
  <h4>1. Sequential / Linear Search</h4>
  <ul>
   <li>Periksa elemen <b>satu per satu</b> dari indeks 0 sampai ketemu atau array habis.</li>
   <li>Data <b>tidak perlu terurut</b>. Sederhana tapi lambat untuk data besar: kasus terburuk n perbandingan → <b>O(n)</b>.</li>
   <li>Kalau ada data kembar dan fungsi langsung <span class="inlinecode">return</span>, yang didapat indeks <b>kemunculan pertama</b>.</li>
  </ul>
  <pre class="code"><span class="kw">int</span> <span class="fn">sequentialSearch</span>(<span class="kw">int</span> a[], <span class="kw">int</span> n, <span class="kw">int</span> x) {
    <span class="kw">int</span> i;
    <span class="kw">for</span> (i = 0; i &lt; n; i++)
        <span class="kw">if</span> (a[i] == x) <span class="kw">return</span> i;   <span class="cm">// ketemu → kembalikan indeks</span>
    <span class="kw">return</span> -1;                     <span class="cm">// sampai habis tidak ketemu</span>
}</pre>
  <h4>2. Sequential dengan Sentinel</h4>
  <p>Data yang dicari ditaruh dulu di <b>ujung array</b> (sentinel = penjaga). Loop pasti berhenti, jadi tak perlu cek <span class="inlinecode">i &lt; n</span> tiap putaran (sedikit lebih cepat). Kalau berhentinya di posisi sentinel, artinya <b>tidak ketemu</b>.</p>
  <h4>3. Binary Search (bagi dua)</h4>
  <ul>
   <li><b>Syarat mutlak: data sudah terurut.</b></li>
   <li>Ambil tengah: <span class="inlinecode">tengah = (bawah + atas) / 2</span> (pembagian int, dibulatkan ke bawah).</li>
   <li>Sama → ketemu. Yang dicari <b>lebih kecil</b> → ke kiri: <span class="inlinecode">atas = tengah - 1</span>. <b>Lebih besar</b> → ke kanan: <span class="inlinecode">bawah = tengah + 1</span>.</li>
   <li>Berhenti kalau <span class="inlinecode">bawah &gt; atas</span> → tidak ketemu. Tiap langkah membuang setengah data → <b>O(log n)</b>. 1000 data cukup ±10 langkah.</li>
  </ul>
  <pre class="code"><span class="kw">int</span> <span class="fn">binarySearch</span>(<span class="kw">int</span> a[], <span class="kw">int</span> n, <span class="kw">int</span> x) {
    <span class="kw">int</span> bawah = 0, atas = n - 1, tengah;
    <span class="kw">while</span> (bawah &lt;= atas) {
        tengah = (bawah + atas) / 2;
        <span class="kw">if</span> (a[tengah] == x) <span class="kw">return</span> tengah;
        <span class="kw">else if</span> (x &lt; a[tengah]) atas = tengah - 1;   <span class="cm">// cari di kiri</span>
        <span class="kw">else</span> bawah = tengah + 1;                       <span class="cm">// cari di kanan</span>
    }
    <span class="kw">return</span> -1;
}</pre>
  <h4>Contoh trace binary search</h4>
  <p>Data <span class="inlinecode">{3, 8, 12, 17, 21, 25, 30, 34, 40}</span> (indeks 0–8), cari <b>30</b>:</p>
  <div class="tblwrap"><table class="tbl"><tr><th>Langkah</th><th>bawah</th><th>atas</th><th>tengah</th><th>a[tengah]</th><th>Keputusan</th></tr>
   <tr><td>1</td><td>0</td><td>8</td><td>4</td><td>21</td><td>30 &gt; 21 → bawah = 5</td></tr>
   <tr><td>2</td><td>5</td><td>8</td><td>6</td><td>30</td><td>Ketemu di indeks 6</td></tr>
  </table></div>
  <p>Cari <b>10</b>: tengah 4 (21) → atas = 3 · tengah 1 (8) → bawah = 2 · tengah 2 (12) → atas = 1 · bawah (2) &gt; atas (1) → <b>−1</b>.</p>
  <h4>4. Lainnya (cukup hafal idenya)</h4>
  <ul>
   <li><b>Interpolation search</b>: seperti binary, tapi posisi ditebak pakai proporsi nilai: <span class="inlinecode">pos = bawah + (x − a[bawah]) × (atas − bawah) / (a[atas] − a[bawah])</span>. Syarat: terurut &amp; nilainya <b>tersebar merata</b>. Kayak buka kamus: cari kata berawalan "W" langsung buka bagian belakang.</li>
   <li><b>Jump search</b>: data terurut, lompat per <b>√n</b> elemen sampai kelewatan, lalu sequential di blok itu → O(√n).</li>
   <li><b>Hashing</b>: posisi dihitung langsung dari kunci pakai fungsi hash → rata-rata O(1).</li>
  </ul>
  <div class="tblwrap"><table class="tbl"><tr><th>Metode</th><th>Data harus urut?</th><th>Kecepatan</th></tr>
   <tr><td>Sequential</td><td>Tidak</td><td>O(n), lambat</td></tr>
   <tr><td>Binary</td><td><b>Ya</b></td><td>O(log n), cepat</td></tr>
   <tr><td>Interpolation</td><td>Ya + merata</td><td>O(log log n) rata-rata</td></tr>
   <tr><td>Jump</td><td>Ya</td><td>O(√n)</td></tr>
  </table></div>`},

 {t:"Queue (Antrian) — FIFO", k:["FIFO: pertama masuk, pertama keluar", "Enqueue di REAR (belakang) · dequeue di FRONT (depan)", "Stack = LIFO (kebalikannya)"], h:`
  <p><b>Queue</b> = struktur data antrian berprinsip <b>FIFO</b> (First In, First Out): yang pertama masuk = pertama keluar. Seperti antrean kasir.</p>
  <h4>Dua ujung</h4>
  <ul><li><b>REAR</b> (belakang) — tempat <b>menambah</b> elemen. <b>FRONT</b> (depan) — tempat <b>menghapus</b> elemen. Kalau kosong, REAR & FRONT menunjuk NULL.</li></ul>
  <h4>Operasi</h4>
  <ul>
   <li><b>Insert / Enqueue</b> — tambah elemen di REAR (belakang).</li>
   <li><b>Delete / Dequeue</b> — hapus elemen dari FRONT (depan).</li>
  </ul>
  <div class="note">Implementasi: pakai <b>array</b> (harus tahu ukuran maks dulu) atau <b>linked list</b> (lebih fleksibel). Bedakan: <b>Stack</b> = LIFO (Last In First Out), <b>Queue</b> = FIFO.</div>`},

 {t:"Sorting Dasar — Bubble, Selection, Insertion", k:["Bubble: tukar tetangga, terbesar menggelembung ke kanan tiap pass · n − 1 pass", "Selection: cari minimum sisa array, tukar ke depan · maks 1 tukar per pass", "Insertion: ambil key, geser yang lebih besar, sisipkan (kayak nyusun kartu remi)", "Pass 1 dari {5,3,8,1,4} → bubble <b>3 5 1 4 8</b> · selection <b>1 3 8 5 4</b> · insertion <b>3 5 8 1 4</b>"], h:`
  <p><b>Sorting</b> = mengurutkan data: <b>ascending</b> (kecil → besar) atau <b>descending</b> (besar → kecil). Di soal biasanya diminta "isi array setelah pass ke-k" atau "lengkapi kode yang kosong". Semua contoh di bawah pakai data yang sama: <span class="inlinecode">{5, 3, 8, 1, 4}</span>, ascending.</p>

  <h4>1. Bubble Sort: tukar tetangga</h4>
  <ul>
   <li>Bandingkan 2 elemen <b>bersebelahan</b>; kalau urutannya salah, <b>tukar</b>.</li>
   <li>Tiap pass, elemen <b>terbesar "menggelembung" ke kanan</b> (posisi akhirnya). Pass berikutnya cukup sampai sebelum elemen yang sudah fix.</li>
   <li>n data → maksimal <b>n − 1 pass</b>.</li>
  </ul>
  <div class="tblwrap"><table class="tbl"><tr><th>Pass</th><th>Proses</th><th>Hasil</th></tr>
   <tr><td>1</td><td>5↔3 tukar · 5,8 tetap · 8↔1 tukar · 8↔4 tukar</td><td><b>3 5 1 4 8</b></td></tr>
   <tr><td>2</td><td>3,5 tetap · 5↔1 tukar · 5↔4 tukar</td><td><b>3 1 4 5 8</b></td></tr>
   <tr><td>3</td><td>3↔1 tukar · 3,4 tetap</td><td><b>1 3 4 5 8</b></td></tr>
   <tr><td>4</td><td>1,3 tetap</td><td><b>1 3 4 5 8</b></td></tr>
  </table></div>
  <pre class="code"><span class="kw">void</span> <span class="fn">bubbleSort</span>(<span class="kw">int</span> a[], <span class="kw">int</span> n) {
    <span class="kw">int</span> i, j, temp;
    <span class="kw">for</span> (i = 0; i &lt; n - 1; i++)            <span class="cm">// pass ke-(i+1)</span>
        <span class="kw">for</span> (j = 0; j &lt; n - 1 - i; j++)    <span class="cm">// -i: i elemen terakhir sudah fix</span>
            <span class="kw">if</span> (a[j] &gt; a[j + 1]) {         <span class="cm">// &gt; ascending · &lt; descending</span>
                temp = a[j];               <span class="cm">// tukar 3 langkah</span>
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
}</pre>
  <div class="note"><b>Mau bubble sort lebih detail?</b> Buka langkah <b>“Bubble Sort — Lengkap Step by Step”</b> (paling bawah daftar ADS): trace tiap perbandingan, versi dari depan &amp; dari belakang, rumus, dan trik ngerjain soal.</div>
  <div class="note">Total tukar di contoh: 3 + 2 + 1 = <b>6 kali</b>. Versi pakai <b>flag</b> (berhenti kalau satu pass tidak ada tukar) membuat data yang sudah urut cukup 1 pass → best case O(n).</div>

  <h4>2. Selection Sort: pilih yang terkecil</h4>
  <ul>
   <li>Pass ke-i: cari <b>nilai minimum</b> dari indeks i sampai akhir, lalu <b>tukar ke posisi i</b>.</li>
   <li>Tiap pass <b>maksimal 1 kali tukar</b> → total tukar paling sedikit di antara ketiganya (≤ n − 1).</li>
  </ul>
  <div class="tblwrap"><table class="tbl"><tr><th>Pass</th><th>Minimum di sisa array</th><th>Hasil</th></tr>
   <tr><td>1 (i=0)</td><td>1 (indeks 3) ↔ a[0]=5</td><td><b>1 3 8 5 4</b></td></tr>
   <tr><td>2 (i=1)</td><td>3 sudah di tempatnya</td><td><b>1 3 8 5 4</b></td></tr>
   <tr><td>3 (i=2)</td><td>4 (indeks 4) ↔ a[2]=8</td><td><b>1 3 4 5 8</b></td></tr>
   <tr><td>4 (i=3)</td><td>5 sudah di tempatnya</td><td><b>1 3 4 5 8</b></td></tr>
  </table></div>
  <pre class="code"><span class="kw">void</span> <span class="fn">selectionSort</span>(<span class="kw">int</span> a[], <span class="kw">int</span> n) {
    <span class="kw">int</span> i, j, min, temp;
    <span class="kw">for</span> (i = 0; i &lt; n - 1; i++) {
        min = i;                        <span class="cm">// anggap a[i] terkecil</span>
        <span class="kw">for</span> (j = i + 1; j &lt; n; j++)
            <span class="kw">if</span> (a[j] &lt; a[min])
                min = j;                <span class="cm">// simpan INDEKS terkecil</span>
        temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
}</pre>

  <h4>3. Insertion Sort: sisipkan kayak nyusun kartu</h4>
  <ul>
   <li>Bagian kiri dianggap sudah urut. Ambil elemen berikutnya (<span class="inlinecode">key</span>), <b>geser</b> elemen kiri yang lebih besar ke kanan, lalu <b>sisipkan</b> key di celahnya.</li>
   <li>Seperti menyusun kartu remi di tangan. Sangat cepat kalau data <b>hampir urut</b> (best case O(n)).</li>
  </ul>
  <div class="tblwrap"><table class="tbl"><tr><th>Langkah</th><th>key</th><th>Hasil</th></tr>
   <tr><td>i=1</td><td>3 → geser 5</td><td><b>3 5 8 1 4</b></td></tr>
   <tr><td>i=2</td><td>8 → tidak geser</td><td><b>3 5 8 1 4</b></td></tr>
   <tr><td>i=3</td><td>1 → geser 8, 5, 3</td><td><b>1 3 5 8 4</b></td></tr>
   <tr><td>i=4</td><td>4 → geser 8, 5</td><td><b>1 3 4 5 8</b></td></tr>
  </table></div>
  <pre class="code"><span class="kw">void</span> <span class="fn">insertionSort</span>(<span class="kw">int</span> a[], <span class="kw">int</span> n) {
    <span class="kw">int</span> i, j, key;
    <span class="kw">for</span> (i = 1; i &lt; n; i++) {
        key = a[i];
        j = i - 1;
        <span class="kw">while</span> (j &gt;= 0 &amp;&amp; a[j] &gt; key) {
            a[j + 1] = a[j];            <span class="cm">// geser ke kanan</span>
            j--;
        }
        a[j + 1] = key;                 <span class="cm">// sisipkan</span>
    }
}</pre>
  <div class="note"><b>Cara bedain cepat soal "hasil pass ke-1":</b> Bubble → yang <b>terbesar sudah di kanan</b>. Selection → yang <b>terkecil sudah di kiri</b>, sisanya hampir tak berubah (cuma 1 tukar). Insertion → hanya <b>2 elemen pertama</b> yang diurutkan.</div>`},

 {t:"Sorting Lanjutan — Shell, Merge, Quick + Perbandingan", k:["Shell (Donald Shell): insertion dengan gap n/2 → … → 1 · n = 8 → gap 4, 2, 1", "Merge: divide &amp; conquer, bagi dua lalu gabung · selalu O(n log n) · stabil · butuh memori tambahan", "Quick: pivot + partisi (kecil kiri, besar kanan) · rata-rata O(n log n), terburuk O(n²)", "O(n²): bubble, selection, insertion · Tidak stabil: selection, shell, quick, heap"], h:`
  <h4>4. Shell Sort: insertion dengan jarak (gap)</h4>
  <ul>
   <li>Dibuat <b>Donald Shell</b> (1959). Pengembangan insertion sort: elemen yang <b>berjarak gap</b> dibandingkan dulu, jadi data kecil bisa "loncat jauh" ke depan.</li>
   <li>Gap awal <b>n / 2</b>, lalu dibagi 2 terus: n = 8 → gap <b>4, 2, 1</b>. Gap terakhir selalu <b>1</b> (= insertion sort biasa, tapi datanya sudah hampir urut jadi cepat).</li>
  </ul>
  <p>Contoh <span class="inlinecode">{8, 5, 3, 9, 1, 6, 2, 7}</span>, n = 8:</p>
  <div class="tblwrap"><table class="tbl"><tr><th>Gap</th><th>Yang dibandingkan</th><th>Hasil</th></tr>
   <tr><td>4</td><td>indeks (0,4) 8↔1 · (1,5) 5,6 tetap · (2,6) 3↔2 · (3,7) 9↔7</td><td><b>1 5 2 7 8 6 3 9</b></td></tr>
   <tr><td>2</td><td>indeks genap 1,2,8,3 → 1,2,3,8 · ganjil 5,7,6,9 → 5,6,7,9</td><td><b>1 5 2 6 3 7 8 9</b></td></tr>
   <tr><td>1</td><td>insertion sort biasa</td><td><b>1 2 3 5 6 7 8 9</b></td></tr>
  </table></div>
  <pre class="code"><span class="kw">void</span> <span class="fn">shellSort</span>(<span class="kw">int</span> a[], <span class="kw">int</span> n) {
    <span class="kw">int</span> gap, i, j, temp;
    <span class="kw">for</span> (gap = n / 2; gap &gt; 0; gap /= 2)          <span class="cm">// 4, 2, 1</span>
        <span class="kw">for</span> (i = gap; i &lt; n; i++) {
            temp = a[i];
            <span class="kw">for</span> (j = i; j &gt;= gap &amp;&amp; a[j - gap] &gt; temp; j -= gap)
                a[j] = a[j - gap];
            a[j] = temp;
        }
}</pre>

  <h4>5. Merge Sort: bagi, urutkan, gabung</h4>
  <ul>
   <li>Prinsip <b>divide and conquer</b>: belah array jadi dua terus sampai tinggal 1 elemen, lalu <b>gabungkan (merge)</b> sambil mengurutkan.</li>
   <li>Selalu <b>O(n log n)</b>, stabil, tapi butuh <b>memori tambahan</b> (array sementara).</li>
  </ul>
  <pre class="work">{38, 27, 43, 3}
bagi   → {38, 27}   {43, 3}
bagi   → {38} {27}  {43} {3}
gabung → {27, 38}   {3, 43}
gabung → {3, 27, 38, 43}</pre>

  <h4>6. Quick Sort: pilih pivot, partisi</h4>
  <ul>
   <li>Juga <b>divide and conquer</b> (Tony Hoare). Pilih <b>pivot</b>, pindahkan yang <b>lebih kecil ke kiri</b> pivot dan yang <b>lebih besar ke kanan</b> (partisi), lalu ulangi untuk bagian kiri &amp; kanan.</li>
   <li>Rata-rata <b>O(n log n)</b> dan biasanya paling cepat dalam praktik. Terburuk <b>O(n²)</b> kalau pivot selalu terkecil/terbesar (mis. data sudah urut + pivot elemen ujung).</li>
  </ul>
  <pre class="work">{7, 2, 9, 4, 3}    pivot = 3 (elemen terakhir)
partisi → {2} 3 {9, 4, 7}
kanan   → pivot 7 → {4} 7 {9}
hasil   → {2, 3, 4, 7, 9}</pre>

  <h4>Lainnya (sekadar kenal nama)</h4>
  <ul>
   <li><b>Exchange sort</b>: mirip bubble, tapi elemen ke-i dibandingkan dengan <b>semua</b> elemen sesudahnya (bukan tetangga saja), tukar kalau salah urutan.</li>
   <li><b>Heap sort</b>: pakai struktur heap (pohon biner); selalu O(n log n).</li>
   <li><b>Counting / Radix sort</b>: tidak membandingkan antar-elemen, tapi menghitung/mengelompokkan per digit. Khusus bilangan bulat.</li>
  </ul>

  <h4>Tabel perbandingan (wajib hafal)</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Algoritma</th><th>Ide singkat</th><th>Terbaik</th><th>Rata-rata</th><th>Terburuk</th><th>Stabil?</th></tr>
   <tr><td>Bubble</td><td>Tukar tetangga, terbesar ke kanan</td><td>O(n)*</td><td>O(n²)</td><td>O(n²)</td><td>Ya</td></tr>
   <tr><td>Selection</td><td>Cari minimum, tukar ke depan</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>Tidak</td></tr>
   <tr><td>Insertion</td><td>Sisipkan ke bagian yang urut</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>Ya</td></tr>
   <tr><td>Shell</td><td>Insertion dengan gap mengecil</td><td>O(n log n)</td><td>±O(n<sup>1,5</sup>)</td><td>O(n²)</td><td>Tidak</td></tr>
   <tr><td>Merge</td><td>Bagi dua, gabung terurut</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>Ya</td></tr>
   <tr><td>Quick</td><td>Pivot + partisi</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>Tidak</td></tr>
  </table></div>
  <div class="note">* Bubble O(n) hanya untuk versi pakai flag. <b>Stabil</b> = data bernilai sama tetap mempertahankan urutan aslinya. <b>O(n²)</b>: bubble, selection, insertion (sederhana, cocok data kecil). <b>O(n log n)</b>: merge, quick, heap (cocok data besar).</div>`},

 {t:"Soal Kode — Tebak Output & Isi yang Kosong", k:["Trace pakai tabel variabel, jalankan baris per baris", "Swap 3 langkah: <code>temp = a[j]; a[j] = a[j+1]; a[j+1] = temp;</code>", "Bubble: <code>&gt;</code> = ascending · <code>&lt;</code> = descending", "Cek batas loop luar: kalau cuma k pass, array belum tentu urut"], h:`
  <p>Dua jenis soal kode yang biasa keluar di MT: <b>(1) tebak output</b> dan <b>(2) isi bagian kode yang kosong</b>. Dua-duanya dikerjakan dengan cara yang sama: <b>trace pakai tabel</b>.</p>
  <h4>Cara trace (tebak output)</h4>
  <ol>
   <li>Tulis semua variabel jadi kolom tabel (i, j, a[...], temp, dll).</li>
   <li>Jalankan baris per baris seperti komputer. Tiap ada nilai berubah → tulis baris baru.</li>
   <li>Awas jebakan: <b>indeks mulai 0</b>, <b>int ÷ int dibulatkan ke bawah</b>, <b>i++ tetap jalan setelah iterasi terakhir</b>, <span class="inlinecode">&lt;</span> vs <span class="inlinecode">&lt;=</span>.</li>
   <li>Tulis output persis sesuai <span class="inlinecode">printf</span>: spasi, koma, <span class="inlinecode">\\n</span>.</li>
  </ol>
  <h4>Bagian yang paling sering dikosongkan</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Kode</th><th>Isian yang benar</th></tr>
   <tr><td>Tukar (swap)</td><td><code>temp = a[j]; a[j] = a[j+1]; a[j+1] = temp;</code></td></tr>
   <tr><td>Bubble: loop luar / dalam</td><td><code>i &lt; n - 1</code> · <code>j &lt; n - 1 - i</code></td></tr>
   <tr><td>Bubble: ascending / descending</td><td><code>a[j] &gt; a[j+1]</code> · <code>a[j] &lt; a[j+1]</code></td></tr>
   <tr><td>Selection: awal pass</td><td><code>min = i;</code></td></tr>
   <tr><td>Selection: loop dalam &amp; if</td><td><code>j = i + 1; j &lt; n</code> · <code>min = j;</code></td></tr>
   <tr><td>Insertion: awal</td><td><code>key = a[i]; j = i - 1;</code></td></tr>
   <tr><td>Insertion: kondisi while</td><td><code>j &gt;= 0 &amp;&amp; a[j] &gt; key</code></td></tr>
   <tr><td>Insertion: geser &amp; sisip</td><td><code>a[j+1] = a[j]; j--;</code> · <code>a[j+1] = key;</code></td></tr>
   <tr><td>Shell: gap</td><td><code>gap = n / 2; gap &gt; 0; gap /= 2</code></td></tr>
   <tr><td>Sequential search</td><td><code>if (a[i] == x) return i;</code> · akhir <code>return -1;</code></td></tr>
   <tr><td>Binary search</td><td><code>while (bawah &lt;= atas)</code> · <code>tengah = (bawah + atas) / 2;</code></td></tr>
   <tr><td>Binary: geser batas</td><td>kiri <code>atas = tengah - 1;</code> · kanan <code>bawah = tengah + 1;</code></td></tr>
   <tr><td>Cari maksimum</td><td><code>mx = a[0];</code> · <code>if (a[i] &gt; mx) mx = a[i];</code></td></tr>
   <tr><td>Jumlah / rata-rata</td><td><code>s = 0;</code> · <code>s += a[i];</code> · <code>(float)s / n</code></td></tr>
  </table></div>
  <h4>Contoh 1: isi yang kosong</h4>
  <pre class="code"><span class="kw">for</span> (i = 0; i &lt; n - 1; i++)
    <span class="kw">for</span> (j = 0; j &lt; ______; j++)
        <span class="kw">if</span> (a[j] &lt; a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            ______;
        }</pre>
  <p>Jawaban: <span class="inlinecode">n - 1 - i</span> dan <span class="inlinecode">a[j + 1] = temp</span>. Karena pakai <span class="inlinecode">&lt;</span>, hasilnya <b>descending</b> (besar → kecil).</p>
  <h4>Contoh 2: tebak output</h4>
  <pre class="code"><span class="kw">int</span> a[5] = {4, 2, 7, 1, 3};
<span class="kw">int</span> i, j, temp;
<span class="kw">for</span> (i = 0; i &lt; 2; i++)              <span class="cm">// cuma 2 pass!</span>
    <span class="kw">for</span> (j = 0; j &lt; 4 - i; j++)
        <span class="kw">if</span> (a[j] &gt; a[j + 1]) {
            temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
        }
<span class="kw">for</span> (i = 0; i &lt; 5; i++) <span class="fn">printf</span>(<span class="st">"%d "</span>, a[i]);</pre>
  <p>Pass 1: 4↔2, 4,7 tetap, 7↔1, 7↔3 → <b>2 4 1 3 7</b>. Pass 2: 2,4 tetap, 4↔1, 4↔3 → <b>2 1 3 4 7</b>. Output: <span class="inlinecode">2 1 3 4 7</span> (belum urut sempurna karena loop luar cuma 2 kali).</p>
  <div class="note">Jebakan favorit: loop luar dibatasi (<span class="inlinecode">i &lt; 2</span>), tanda dibalik (<span class="inlinecode">&lt;</span> = descending), atau yang dicetak cuma satu elemen (<span class="inlinecode">a[2]</span>). Baca soal sampai <span class="inlinecode">printf</span> terakhir. Soal acak jenis ini (selalu beda tiap dibuka) ada di <b>Latihan → Bank Soal</b>, pilih topik Sorting atau Soal Kode.</div>`},

 {t:"Library (Header File) C — stdio.h dkk", k:["<code>#include &lt;stdio.h&gt;</code> = pustaka standar input-output: printf, scanf, gets/fgets, puts, getchar, putchar", "<code>&lt;stdlib.h&gt;</code> malloc, free, rand, srand, atoi, abs, exit, system · <code>&lt;string.h&gt;</code> strlen, strcpy, strcat, strcmp", "<code>&lt;math.h&gt;</code> pow, sqrt, ceil, floor, fabs (hasil double) · <code>&lt;ctype.h&gt;</code> toupper, tolower, isdigit, isalpha", "<code>&lt;conio.h&gt;</code> getch, clrscr (bukan standar) · <code>&lt;time.h&gt;</code> time → srand(time(NULL))"], h:`
  <p><b>Library</b> (pustaka) = kumpulan fungsi siap pakai. Supaya bisa dipakai, <b>header file</b>-nya dipanggil di baris paling atas dengan <span class="inlinecode">#include</span>. Baris ini diproses oleh <b>preprocessor</b> sebelum kompilasi.</p>
  <pre class="code"><span class="kw">#include</span> &lt;stdio.h&gt;      <span class="cm">// &lt; &gt; = library standar bawaan compiler</span>
<span class="kw">#include</span> "hitung.h"     <span class="cm">// " " = file header buatan sendiri (dicari di folder project dulu)</span></pre>
  <div class="note">Lupa <span class="inlinecode">#include</span> yang sesuai → compiler protes fungsinya tidak dikenal (<i>implicit declaration</i>). Contoh: pakai <span class="inlinecode">strlen</span> tanpa <span class="inlinecode">&lt;string.h&gt;</span>.</div>

  <h4>1. &lt;stdio.h&gt;: standard input output (paling wajib)</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
   <tr><td><code>printf()</code></td><td>Cetak ke layar dengan format (%d, %f, %c, %s)</td></tr>
   <tr><td><code>scanf()</code></td><td>Baca input dengan format, pakai <code>&amp;</code> (kecuali string)</td></tr>
   <tr><td><code>puts()</code></td><td>Cetak string + otomatis pindah baris</td></tr>
   <tr><td><code>gets()</code> / <code>fgets()</code></td><td>Baca satu baris berspasi (gets sudah tidak aman, pakai fgets)</td></tr>
   <tr><td><code>getchar()</code> / <code>putchar()</code></td><td>Baca / cetak <b>satu karakter</b></td></tr>
   <tr><td><code>fopen, fclose, fprintf, fscanf</code></td><td>Operasi file</td></tr>
  </table></div>

  <h4>2. &lt;stdlib.h&gt;: standard library (utilitas umum)</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
   <tr><td><code>malloc()</code> / <code>calloc()</code> / <code>free()</code></td><td>Pesan &amp; lepas memori dinamis</td></tr>
   <tr><td><code>rand()</code> / <code>srand()</code></td><td>Angka acak · <code>rand() % 10</code> → 0 sampai 9</td></tr>
   <tr><td><code>atoi()</code> / <code>atof()</code></td><td>Ubah string ke int / double: <code>atoi("123")</code> = 123</td></tr>
   <tr><td><code>abs()</code></td><td>Nilai mutlak <b>int</b>: <code>abs(-7)</code> = 7</td></tr>
   <tr><td><code>exit()</code></td><td>Hentikan program</td></tr>
   <tr><td><code>system("cls")</code> / <code>system("pause")</code></td><td>Jalankan perintah OS: bersihkan layar / tahan layar</td></tr>
  </table></div>

  <h4>3. &lt;string.h&gt;: olah string</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th><th>Contoh</th></tr>
   <tr><td><code>strlen(s)</code></td><td>Panjang string (tanpa <code>\\0</code>)</td><td><code>strlen("Halo")</code> = 4</td></tr>
   <tr><td><code>strcpy(a, b)</code></td><td>Salin b ke a (string tidak bisa pakai <code>=</code>)</td><td>a jadi sama dengan b</td></tr>
   <tr><td><code>strcat(a, b)</code></td><td>Sambung b ke belakang a</td><td>"Halo" + "Dek" → "HaloDek"</td></tr>
   <tr><td><code>strcmp(a, b)</code></td><td>Bandingkan: <b>0 kalau sama</b>, &lt;0 kalau a lebih dulu (abjad), &gt;0 kalau a belakangan</td><td><code>strcmp("abc","abc")</code> = 0</td></tr>
   <tr><td><code>strncpy, strncat, strchr, strstr</code></td><td>Versi dengan batas n / cari karakter / cari kata</td><td></td></tr>
  </table></div>

  <h4>4. &lt;math.h&gt;: fungsi matematika (hasilnya <b>double</b>)</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th><th>Contoh</th></tr>
   <tr><td><code>pow(x, y)</code></td><td>Pangkat x<sup>y</sup></td><td><code>pow(2, 3)</code> = 8.000000</td></tr>
   <tr><td><code>sqrt(x)</code></td><td>Akar kuadrat</td><td><code>sqrt(25)</code> = 5.000000</td></tr>
   <tr><td><code>ceil(x)</code></td><td>Bulatkan <b>ke atas</b></td><td><code>ceil(2.1)</code> = 3.0</td></tr>
   <tr><td><code>floor(x)</code></td><td>Bulatkan <b>ke bawah</b></td><td><code>floor(2.9)</code> = 2.0</td></tr>
   <tr><td><code>round(x)</code></td><td>Bulatkan ke terdekat</td><td><code>round(2.5)</code> = 3.0</td></tr>
   <tr><td><code>fabs(x)</code></td><td>Nilai mutlak <b>pecahan</b></td><td><code>fabs(-2.5)</code> = 2.5</td></tr>
   <tr><td><code>sin, cos, tan, log, log10, exp</code></td><td>Trigonometri (radian) &amp; logaritma</td><td><code>log10(100)</code> = 2.0</td></tr>
  </table></div>
  <div class="note">Karena hasilnya double, cetak pakai <span class="inlinecode">%f</span> / <span class="inlinecode">%.2f</span> / <span class="inlinecode">%lf</span>, bukan <span class="inlinecode">%d</span>. <span class="inlinecode">printf("%f", sqrt(16))</span> → <b>4.000000</b> (default 6 angka desimal). Di Linux kompilasinya perlu tambahan <span class="inlinecode">-lm</span>.</div>

  <h4>5. &lt;ctype.h&gt;: cek &amp; ubah karakter</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Fungsi</th><th>Kegunaan</th></tr>
   <tr><td><code>toupper(c)</code> / <code>tolower(c)</code></td><td>Ubah ke huruf besar / kecil: <code>toupper('a')</code> = 'A'</td></tr>
   <tr><td><code>isalpha(c)</code></td><td>Huruf? (bukan 0 = benar)</td></tr>
   <tr><td><code>isdigit(c)</code></td><td>Angka '0'–'9'?</td></tr>
   <tr><td><code>isupper / islower</code></td><td>Huruf besar / kecil?</td></tr>
   <tr><td><code>isspace(c)</code></td><td>Spasi, tab, atau enter?</td></tr>
  </table></div>

  <h4>6. Library lain yang sering muncul</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Header</th><th>Isi penting</th></tr>
   <tr><td><code>&lt;conio.h&gt;</code></td><td><code>getch()</code> (baca 1 tombol tanpa Enter &amp; tanpa tampil), <code>getche()</code> (tampil), <code>clrscr()</code>. <b>Bukan standar C</b>, khas Turbo C / Windows.</td></tr>
   <tr><td><code>&lt;time.h&gt;</code></td><td><code>time(NULL)</code>, <code>clock()</code>. Dipakai bareng <code>srand(time(NULL))</code> supaya angka acak beda tiap run.</td></tr>
   <tr><td><code>&lt;stdbool.h&gt;</code></td><td>Tipe <code>bool</code>, <code>true</code>, <code>false</code> (C99).</td></tr>
   <tr><td><code>&lt;limits.h&gt;</code> / <code>&lt;float.h&gt;</code></td><td>Batas tipe data: <code>INT_MAX</code> = 2147483647, <code>INT_MIN</code>.</td></tr>
   <tr><td><code>&lt;iostream&gt;</code></td><td><b>Bukan C</b>, ini C++ (<code>cout</code>, <code>cin</code>). Jangan ketuker.</td></tr>
  </table></div>

  <h4>Contoh output yang sering ditanya</h4>
  <pre class="code"><span class="kw">#include</span> &lt;stdio.h&gt;
<span class="kw">#include</span> &lt;string.h&gt;
<span class="kw">#include</span> &lt;math.h&gt;
<span class="kw">#include</span> &lt;ctype.h&gt;

<span class="kw">int</span> <span class="fn">main</span>() {
    <span class="kw">char</span> s[20] = <span class="st">"Algoritma"</span>;
    <span class="fn">printf</span>(<span class="st">"%d\\n"</span>, <span class="fn">strlen</span>(s));          <span class="cm">// 9</span>
    <span class="fn">printf</span>(<span class="st">"%.0f\\n"</span>, <span class="fn">pow</span>(3, 2));        <span class="cm">// 9</span>
    <span class="fn">printf</span>(<span class="st">"%.1f\\n"</span>, <span class="fn">floor</span>(7.8));      <span class="cm">// 7.0</span>
    <span class="fn">printf</span>(<span class="st">"%c\\n"</span>, <span class="fn">toupper</span>(<span class="st">'b'</span>));       <span class="cm">// B</span>
    <span class="fn">printf</span>(<span class="st">"%d\\n"</span>, <span class="fn">strcmp</span>(<span class="st">"ab"</span>, <span class="st">"ab"</span>)); <span class="cm">// 0</span>
    <span class="kw">return</span> 0;
}</pre>`},

 {t:"Bubble Sort — Lengkap Step by Step", k:["Bandingkan 2 elemen BERSEBELAHAN, tukar kalau salah urutan", "Versi depan: terbesar ke KANAN tiap pass · versi belakang: terkecil ke KIRI tiap pass", "n data → n − 1 pass · perbandingan n(n − 1)/2 · tukar maks n(n − 1)/2", "<code>&gt;</code> ascending · <code>&lt;</code> descending · flag: berhenti kalau 1 pass tanpa tukar"], h:`
  <p><b>Bubble sort</b> = mengurutkan dengan membandingkan <b>dua elemen yang bersebelahan</b>, lalu <b>menukarnya</b> kalau urutannya salah. Diulang terus sampai tidak ada yang perlu ditukar. Namanya dari <b>gelembung udara</b>: yang besar pelan-pelan naik ke permukaan.</p>
  <div class="note"><b>Rumus wajib hafal (n = jumlah data):</b><br>
  • Jumlah pass = <b>n − 1</b> (5 data → 4 pass)<br>
  • Jumlah perbandingan (tanpa flag) = <b>n(n − 1) / 2</b> (5 data → 4 + 3 + 2 + 1 = 10)<br>
  • Jumlah tukar paling banyak = <b>n(n − 1) / 2</b> (data terbalik total), paling sedikit = <b>0</b> (data sudah urut)<br>
  • Kompleksitas O(n²) · stabil · cocok untuk data sedikit</div>

  <h4>Versi 1: dari depan (terbesar menggelembung ke KANAN)</h4>
  <p>Ini versi yang paling sering dipakai. Data <span class="inlinecode">{6, 2, 9, 1, 5}</span>, ascending. Perhatikan: tiap pass, perbandingannya berkurang satu karena elemen paling kanan sudah fix.</p>
<div class="tblwrap"><table class="tbl"><tr><th>Pass</th><th>Bandingkan</th><th>Tukar?</th><th>Isi array</th></tr>
   <tr><td>1</td><td>a[0]=6 vs a[1]=2</td><td><b>Ya</b></td><td><b>2 6 9 1 5</b></td></tr>
   <tr><td>1</td><td>a[1]=6 vs a[2]=9</td><td>Tidak</td><td>2 6 9 1 5</td></tr>
   <tr><td>1</td><td>a[2]=9 vs a[3]=1</td><td><b>Ya</b></td><td><b>2 6 1 9 5</b></td></tr>
   <tr><td>1</td><td>a[3]=9 vs a[4]=5</td><td><b>Ya</b></td><td><b>2 6 1 5 9</b></td></tr>
   <tr><td>2</td><td>a[0]=2 vs a[1]=6</td><td>Tidak</td><td>2 6 1 5 9</td></tr>
   <tr><td>2</td><td>a[1]=6 vs a[2]=1</td><td><b>Ya</b></td><td><b>2 1 6 5 9</b></td></tr>
   <tr><td>2</td><td>a[2]=6 vs a[3]=5</td><td><b>Ya</b></td><td><b>2 1 5 6 9</b></td></tr>
   <tr><td>3</td><td>a[0]=2 vs a[1]=1</td><td><b>Ya</b></td><td><b>1 2 5 6 9</b></td></tr>
   <tr><td>3</td><td>a[1]=2 vs a[2]=5</td><td>Tidak</td><td>1 2 5 6 9</td></tr>
   <tr><td>4</td><td>a[0]=1 vs a[1]=2</td><td>Tidak</td><td>1 2 5 6 9</td></tr>
  </table></div>
  <p>Hasil per pass: <b>pass 1 → 2 6 1 5 9</b> · <b>pass 2 → 2 1 5 6 9</b> · <b>pass 3 → 1 2 5 6 9</b> · pass 4 → 1 2 5 6 9. Total 10 perbandingan, <b>6 tukar</b>.</p>
  <pre class="code"><span class="kw">for</span> (i = 0; i &lt; n - 1; i++)              <span class="cm">// pass 1 sampai n-1</span>
    <span class="kw">for</span> (j = 0; j &lt; n - 1 - i; j++)      <span class="cm">// dari depan</span>
        <span class="kw">if</span> (a[j] &gt; a[j + 1]) {           <span class="cm">// kiri lebih besar → tukar</span>
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
        }</pre>

  <h4>Versi 2: dari belakang (terkecil menggelembung ke KIRI)</h4>
  <p>Banyak modul kuliah memakai versi ini. Loop <span class="inlinecode">j</span> berjalan <b>mundur</b> dari indeks terakhir, jadi tiap pass elemen <b>terkecil</b> yang pindah ke depan. Data yang sama:</p>
<div class="tblwrap"><table class="tbl"><tr><th>Pass</th><th>Bandingkan</th><th>Tukar?</th><th>Isi array</th></tr>
   <tr><td>1</td><td>a[4]=5 vs a[3]=1</td><td>Tidak</td><td>6 2 9 1 5</td></tr>
   <tr><td>1</td><td>a[3]=1 vs a[2]=9</td><td><b>Ya</b></td><td><b>6 2 1 9 5</b></td></tr>
   <tr><td>1</td><td>a[2]=1 vs a[1]=2</td><td><b>Ya</b></td><td><b>6 1 2 9 5</b></td></tr>
   <tr><td>1</td><td>a[1]=1 vs a[0]=6</td><td><b>Ya</b></td><td><b>1 6 2 9 5</b></td></tr>
   <tr><td>2</td><td>a[4]=5 vs a[3]=9</td><td><b>Ya</b></td><td><b>1 6 2 5 9</b></td></tr>
   <tr><td>2</td><td>a[3]=5 vs a[2]=2</td><td>Tidak</td><td>1 6 2 5 9</td></tr>
   <tr><td>2</td><td>a[2]=2 vs a[1]=6</td><td><b>Ya</b></td><td><b>1 2 6 5 9</b></td></tr>
   <tr><td>3</td><td>a[4]=9 vs a[3]=5</td><td>Tidak</td><td>1 2 6 5 9</td></tr>
   <tr><td>3</td><td>a[3]=5 vs a[2]=6</td><td><b>Ya</b></td><td><b>1 2 5 6 9</b></td></tr>
   <tr><td>4</td><td>a[4]=9 vs a[3]=6</td><td>Tidak</td><td>1 2 5 6 9</td></tr>
  </table></div>
  <p>Hasil per pass: <b>pass 1 → 1 6 2 9 5</b> · <b>pass 2 → 1 2 6 5 9</b> · <b>pass 3 → 1 2 5 6 9</b> · pass 4 → 1 2 5 6 9. Hasil akhir sama, tapi <b>isi array per pass beda</b> dengan versi 1. Makanya di soal, <b>lihat dulu arah loop j-nya</b>.</p>
  <pre class="code"><span class="kw">for</span> (i = 0; i &lt; n - 1; i++)
    <span class="kw">for</span> (j = n - 1; j &gt; i; j--)          <span class="cm">// dari belakang, mundur</span>
        <span class="kw">if</span> (a[j] &lt; a[j - 1]) {           <span class="cm">// kanan lebih kecil → tukar</span>
            temp = a[j];
            a[j] = a[j - 1];
            a[j - 1] = temp;
        }</pre>

  <h4>Variasi yang sering keluar</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Variasi</th><th>Yang berubah di kode</th><th>Efeknya</th></tr>
   <tr><td>Descending (besar → kecil)</td><td>Versi 1: <code>a[j] &lt; a[j+1]</code></td><td>Yang <b>terkecil</b> menggelembung ke kanan</td></tr>
   <tr><td>Pakai flag</td><td><code>tukar = 0</code> tiap pass, <code>tukar = 1</code> kalau ada tukar, ulang selama <code>tukar</code></td><td>Berhenti lebih cepat kalau data sudah urut (best case 1 pass, O(n))</td></tr>
   <tr><td>Loop luar dibatasi</td><td><code>i &lt; 2</code> (bukan <code>n - 1</code>)</td><td>Cuma 2 pass → array <b>belum tentu</b> urut</td></tr>
   <tr><td>Hitung tukar</td><td><code>tukar++</code> di dalam if</td><td>Total tukar = banyaknya pasangan yang terbalik</td></tr>
  </table></div>
  <pre class="code"><span class="cm">// bubble sort dengan flag</span>
<span class="kw">do</span> {
    tukar = 0;
    <span class="kw">for</span> (j = 0; j &lt; n - 1; j++)
        <span class="kw">if</span> (a[j] &gt; a[j + 1]) {
            temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
            tukar = 1;                       <span class="cm">// ada pertukaran → ulang lagi</span>
        }
} <span class="kw">while</span> (tukar);</pre>

  <h4>Trik ngerjain soal bubble sort dengan cepat</h4>
  <ul>
   <li><b>"Isi array setelah pass ke-k" (versi 1):</b> k elemen <b>terbesar</b> pasti sudah di kanan dan urut. Sisanya tinggal di-trace pass itu saja.</li>
   <li><b>Versi 2:</b> k elemen <b>terkecil</b> pasti sudah di kiri.</li>
   <li><b>"Berapa kali tukar":</b> hitung pasangan yang terbalik (angka besar di kiri angka kecil). Contoh {6, 2, 9, 1, 5}: (6,2) (6,1) (6,5) (2,1) (9,1) (9,5) = <b>6</b>.</li>
   <li><b>"Berapa perbandingan":</b> (n − 1) + (n − 2) + … + 1 = n(n − 1)/2. Kalau loop dalam ditulis <code>j &lt; n - 1</code> (tanpa <code>- i</code>), perbandingannya (n − 1) × (n − 1).</li>
   <li><b>Tukar 3 langkah</b> wajib pakai variabel bantu <code>temp</code>. Kalau langsung <code>a[j] = a[j+1]; a[j+1] = a[j];</code> → dua-duanya jadi sama (nilai hilang).</li>
  </ul>
  <div class="note">Latihan khusus bubble: Latihan → Bank Soal → ADS → topik <b>Bubble Sort</b>. Soal acaknya selalu beda tiap dibuka.</div>`}
];

var ADS_BEDAH=[
 {t:"Soal 1 — Analisis Flowchart Kelulusan (15 poin)", h:`
  <p><b>Kasus:</b> flowchart cek lulus (lulus jika nilai ≥ 75). Identifikasi kesalahan notasi.</p>
  <h4>Jawaban</h4>
  <ul>
   <li>“Input nilai” memakai simbol <b>proses</b> (persegi). Harusnya <b>jajar genjang</b> (I/O) — kalau salah, programmer bisa mengira nilai sudah ada/terhitung dan lupa menulis <span class="inlinecode">scanf</span>.</li>
   <li>Kondisi “nilai ≥ 75?” memakai simbol <b>terminal</b> (oval). Harusnya <b>belah ketupat</b> (keputusan) — oval berarti awal/akhir, jadi alur jadi ambigu.</li>
   <li>Tidak ada terminal “Selesai”; kedua cabang menggantung. Harusnya kedua cabang (LULUS / REMEDIAL) bertemu & berakhir di satu <b>Selesai</b>.</li>
  </ul>`},
 {t:"Soal 2 — Tipe Data & Nama Variabel (15 poin)", h:`
  <h4>2a — Validasi nama (valid/tidak)</h4>
  <div class="tblwrap"><table class="tbl"><tr><th>Nama</th><th>Status</th><th>Alasan</th></tr>
   <tr><td class="mono">2nilai</td><td>❌</td><td>Diawali angka</td></tr>
   <tr><td class="mono">nilai_akhir</td><td>✅</td><td>Huruf + underscore</td></tr>
   <tr><td class="mono">Nama Siswa</td><td>❌</td><td>Ada spasi</td></tr>
   <tr><td class="mono">_total</td><td>✅</td><td>Boleh diawali underscore</td></tr>
   <tr><td class="mono">float</td><td>❌</td><td>Keyword C</td></tr>
   <tr><td class="mono">jumlah-data</td><td>❌</td><td>Tanda − dibaca operator</td></tr>
   <tr><td class="mono">IPK dan ipk</td><td>✅</td><td>Valid (tapi case-sensitive → beda variabel)</td></tr>
   <tr><td class="mono">rata2</td><td>✅</td><td>Angka boleh setelah huruf</td></tr>
   <tr><td class="mono">#kode</td><td>❌</td><td>Simbol # tidak diizinkan</td></tr>
   <tr><td class="mono">printf</td><td>⚠️</td><td>Valid tapi menutupi fungsi printf — tidak disarankan</td></tr>
  </table></div>
  <h4>2b — Tipe data tepat</h4>
  <ul><li>Nama → <span class="inlinecode">char nama[50]</span>; NIM → <span class="inlinecode">char nim[11]</span> (bukan int: angka depan hilang & melebihi batas int); Umur → <span class="inlinecode">int</span>; IPK → <span class="inlinecode">float</span>; Jenis kelamin → <span class="inlinecode">char</span>; Total tabungan (15 M) → <span class="inlinecode">long long</span>.</li></ul>
  <h4>2c — Analisis kode harga</h4>
  <p><span class="inlinecode">int harga = 12500.75;</span> → desimal dipotong jadi 12500; ×3 = <b>37500</b>. Perbaikan: <span class="inlinecode">double harga = 12500.75; printf("%.2f", harga*3);</span> → 37502.25.</p>`},
 {t:"Soal 3 — Studi Kasus Tiket (25 poin)", h:`
  <p>Tarif per umur (0/15rb/25rb/10rb), naik 20% di Sabtu/Minggu, diskon 10% jika rombongan ≥10.</p>
  <pre class="code"><span class="kw">for</span> (i = 1; i &lt;= n; i++) {
    <span class="fn">scanf</span>(<span class="st">"%d"</span>, &amp;umur);
    <span class="kw">if</span>      (umur &lt; 5)   tarif = 0;
    <span class="kw">else if</span> (umur &lt;= 12) tarif = 15000;
    <span class="kw">else if</span> (umur &lt;= 59) tarif = 25000;
    <span class="kw">else</span>              tarif = 10000;
    <span class="kw">if</span> (hari == 6 || hari == 7) tarif = tarif * 1.2;
    total += tarif;
}
<span class="kw">if</span> (n &gt;= 10) total = total * 0.9;</pre>
  <ul>
   <li><b>Uji 1:</b> 4 orang, Minggu, umur 3/10/30/65 → 0+15rb+25rb+10rb = 50rb ×1,2 = <b>Rp 60.000</b> (tak ada diskon, &lt;10 orang).</li>
   <li><b>Uji 2:</b> 10 orang umur 20, Selasa → 10×25rb = 250rb ×0,9 = <b>Rp 225.000</b>.</li>
   <li><b>Urutan if penting:</b> kondisi dicek berurutan & berhenti di yang pertama benar. Kalau <span class="inlinecode">umur&lt;=59</span> dicek lebih dulu, anak umur 3 ikut masuk kategori Rp 25.000.</li>
  </ul>`},
 {t:"Soal 4 — Analisis Output & Trace (20 poin)", h:`
  <pre class="code"><span class="kw">for</span> (i = 1; i &lt;= 10; i += 2) {
    <span class="kw">if</span> (i % 3 == 0) <span class="fn">printf</span>(<span class="st">"%d habis dibagi 3\\n"</span>, i);
    <span class="kw">else</span>           <span class="fn">printf</span>(<span class="st">"%d\\n"</span>, i);
    jumlah += i;
}</pre>
  <div class="tblwrap"><table class="tbl"><tr><th>Putaran</th><th>i</th><th>i%3</th><th>Cabang</th><th>jumlah</th></tr>
   <tr><td>1</td><td>1</td><td>1</td><td>else</td><td>1</td></tr>
   <tr><td>2</td><td>3</td><td>0</td><td>if (habis dibagi 3)</td><td>4</td></tr>
   <tr><td>3</td><td>5</td><td>2</td><td>else</td><td>9</td></tr>
   <tr><td>4</td><td>7</td><td>1</td><td>else</td><td>16</td></tr>
   <tr><td>5</td><td>9</td><td>0</td><td>if (habis dibagi 3)</td><td>25</td></tr>
  </table></div>
  <ul>
   <li><b>4b:</b> loop jalan <b>5×</b> (i=1,3,5,7,9). Setelah i=9, i+=2 → 11; 11≤10 salah → berhenti. Nilai i akhir = <b>11</b>, bukan 9.</li>
   <li><b>4c:</b> kalau <span class="inlinecode">i++</span>, jalan 10× → jumlah = 1+…+10 = <b>55</b>, baris “habis dibagi 3” muncul <b>3×</b> (3,6,9). Di program awal 6 tak pernah dicek (hanya ganjil).</li>
  </ul>`},
 {t:"Soal 5 — Nilai Akhir Mahasiswa (25 poin)", h:`
  <p>Bobot Tugas 20% · UTS 30% · UAS 50%. Validasi 0–100, hitung grade & status (lulus ≥55), rekap di akhir.</p>
  <pre class="code">akhir = 0.2*tugas + 0.3*uts + 0.5*uas;   <span class="cm">// pakai 0.2 bukan 20/100</span>
<span class="kw">if</span>      (akhir &gt;= 85) grade = <span class="st">'A'</span>;
<span class="kw">else if</span> (akhir &gt;= 70) grade = <span class="st">'B'</span>;
<span class="kw">else if</span> (akhir &gt;= 55) grade = <span class="st">'C'</span>;
<span class="kw">else if</span> (akhir &gt;= 40) grade = <span class="st">'D'</span>;
<span class="kw">else</span>               grade = <span class="st">'E'</span>;</pre>
  <ul>
   <li><b>Pertanyaan rumus int:</b> <span class="inlinecode">20/100*tugas</span> dengan semua <span class="inlinecode">int</span> → <span class="inlinecode">20/100 = 0</span> (pembagian bulat), jadi seluruh nilai akhir = <b>0</b>. Perbaikan: pakai <span class="inlinecode">0.2</span>/<span class="inlinecode">20.0/100</span> dan variabel <span class="inlinecode">float</span>.</li>
   <li><b>Urutan grade:</b> harus dari terbesar (≥85) dulu; kalau dari kecil, nilai 91 keburu berhenti di cabang C.</li>
   <li><span class="inlinecode">tertinggi=0</span> aman sebagai nilai awal; <span class="inlinecode">valid==0</span> dicek untuk cegah pembagian nol saat rata-rata.</li>
  </ul>`}
];

/* ================= QUIZ BANKS ================= */
var QUIZ_IIT=[
 {q:"Menurut model Triad Senn, tiga komponen kekuatan Teknologi Informasi adalah…",o:["Hardware, Software, Brainware","Computers, Communications, Know-How","Input, Process, Output","CPU, Memori, Storage"],a:1,e:"Triad Senn = Computers, Communications, dan Know-How (people, application, procedure). Hardware/Software/Brainware itu triad sistem komputer, bukan Senn.",t:0},
 {q:"Tiga entitas yang terkandung dalam 'teknologi' adalah…",o:["Data, informasi, pengetahuan","Keterampilan (skill), logika berpikir (algoritma), perangkat keras (hardware)","Input, proses, output","Manusia, mesin, organisasi"],a:1,e:"Esensi teknologi dirangkum jadi 3 entitas: skill, algoritma (logika berpikir), dan hardware.",t:0},
 {q:"Bangsa yang pertama kali mengenal simbol/tulisan (pictograf) sekitar 3000 SM adalah…",o:["Mesir Kuno","Sumeria","Yunani","Romawi"],a:1,e:"Bangsa Sumeria (3000 SM) memakai pictograf. Mesir Kuno (2900 SM) memakai Hierogliph.",t:0},
 {q:"ARPANET pertama kali (1969) menghubungkan berapa node?",o:["2 node","4 node","8 node","16 node"],a:1,e:"ARPANET 1969 menghubungkan 4 node universitas dengan kecepatan 50 Kbps.",t:0},
 {q:"Komputer Generasi Pertama menggunakan komponen inti…",o:["Transistor","Tabung hampa (vacuum tube)","IC (Integrated Circuit)","Mikroprosesor"],a:1,e:"Gen 1 (1939–1954) = tabung hampa: raksasa, cepat panas, rakus daya (mis. SAGE 275 ton).",t:1},
 {q:"Lahirnya Sistem Operasi (OS) dan minicomputer menandai generasi komputer ke-…",o:["Pertama","Kedua","Ketiga","Keempat"],a:2,e:"Gen 3 (IC/Integrated Circuit): pengenalan OS untuk multitasking dan minicomputer seperti PDP-8.",t:1},
 {q:"Pernyataan yang benar tentang Arsitektur vs Organisasi komputer:",o:["Arsitektur = sinyal kontrol & teknologi memori","Organisasi terlihat oleh programmer, arsitektur tidak","Arsitektur = atribut yang terlihat programmer (set instruksi, I/O); organisasi = implementasi fisik","Keduanya sama persis"],a:2,e:"Arsitektur = konseptual/terlihat programmer (set instruksi, mekanisme I/O, pengalamatan). Organisasi = fisik/transparan (sinyal kontrol, teknologi memori).",t:2},
 {q:"Hukum Moore menyatakan bahwa…",o:["Kecepatan internet naik 2× tiap tahun","Jumlah transistor pada chip berlipat ganda ~setiap 18 bulan","Harga komputer turun setengah tiap tahun","Ukuran komputer naik 2× tiap 2 tahun"],a:1,e:"Gordon Moore: jumlah transistor pada chip berlipat ganda ~setiap 18 bulan; biaya per chip relatif konstan.",t:2},
 {q:"Bagian CPU yang melakukan operasi aritmatika & logika (<, >, =) adalah…",o:["Control Unit","ALU","Register","Bus"],a:1,e:"ALU (Arithmetic and Logic Unit) pusat kalkulasi & logika, bekerja dengan two's complement.",t:2},
 {q:"126 (desimal) dalam biner adalah…",o:["1111110","1111101","1110110","1011110"],a:0,e:"126 = 64+32+16+8+4+2 = 1111110₂. (126:2 berulang, sisa dibaca dari bawah.)",t:3},
 {q:"Biner 101101111 dikelompokkan 3-bit menjadi oktal:",o:["557₈","567₈","457₈","575₈"],a:0,e:"[101][101][111] = 5 5 7 → 557₈. Biner→oktal: kelompok 3-bit dari kanan.",t:3},
 {q:"Standar encoding karakter 8-bit yang mampu 256 kombinasi dan mewakili huruf besar, kecil, angka, simbol adalah…",o:["SBCDIC (6-bit)","ASCII","BCD","Hanya biner"],a:1,e:"ASCII (7/8-bit) hingga 2⁸=256 kombinasi, standar modern. SBCDIC 6-bit hanya 64 kombinasi.",t:3},
 {q:"Komplemen-2 dari sebuah bilangan biner diperoleh dengan…",o:["Membalik semua bit saja","Membalik semua bit lalu tambah 1","Menambah 1 saja","Menggeser bit ke kiri"],a:1,e:"Komplemen-2 = komplemen-1 (balik semua bit) + 1. Dipakai sistem untuk bilangan negatif; MSB = sign bit.",t:3},
 {q:"Tabel kebenaran dengan 3 pernyataan tunggal menghasilkan berapa baris kombinasi?",o:["6","8","9","3"],a:1,e:"2ⁿ baris → 2³ = 8 baris.",t:3},
 {q:"Implikasi (p → q) bernilai SALAH hanya jika…",o:["p benar dan q benar","p salah dan q benar","p benar dan q salah","p salah dan q salah"],a:2,e:"Implikasi salah hanya ketika hipotesa (p) benar tetapi kesimpulan (q) salah.",t:3},
 {q:"Format gambar yang menggunakan kompresi LOSSY adalah…",o:["PNG","GIF","JPEG","BMP"],a:2,e:"JPEG = lossy (algoritma DCT), membuang data yang tak terasa. PNG & GIF = lossless.",t:4},
 {q:"1 Byte sama dengan…",o:["4 bit","8 bit","16 bit","1024 bit"],a:1,e:"1 Byte = 8 bit, merepresentasikan 1 karakter. Naik tingkat (KB→MB→…) dikalikan 1024.",t:4},
 {q:"File 500.000 Byte diunduh pada 33.600 bps. Estimasi waktunya ≈…",o:["±15 detik","±60 detik","±119 detik","±500 detik"],a:2,e:"500.000 Byte ×8 = 4.000.000 bit ÷ 33.600 bps ≈ 119 detik (hampir 2 menit). Ingat: ubah ke bit dulu.",t:4},
 {q:"Perangkat jaringan yang bekerja di Network Layer dan membaca IP address untuk memilih rute terbaik antar-jaringan adalah…",o:["Hub","Switch","Bridge","Router"],a:3,e:"Router (Network Layer) membaca IP address, menyeberangkan data antar jaringan (LAN↔WAN) lewat rute terbaik.",t:5},
 {q:"Topologi jaringan di mana satu kabel putus membuat seluruh jaringan lumpuh (karena data berputar lewat token) adalah…",o:["Star","Ring","Mesh","Tree"],a:1,e:"Ring: data berputar lewat token; satu titik putus → seluruh ring lumpuh. Star justru tangguh (putus = lokal).",t:5},
 {q:"Hub bekerja pada layer… dan memperlakukan data dengan cara…",o:["Physical; broadcast ke semua port (rawan collision)","Network; routing by IP","Data Link; filter by MAC","Transport; segmentasi"],a:0,e:"Hub = Physical Layer, hanya memperkuat & menyalin sinyal (broadcast) ke semua port → rawan tabrakan (collision).",t:5},
 {q:"Kabel UTP straight-through dipakai untuk menghubungkan…",o:["Perangkat sejenis (PC–PC)","Perangkat beda jenis (PC–Switch)","Hanya router ke router","Konfigurasi konsol"],a:1,e:"Straight (kedua ujung T568B sama) → perangkat beda lapisan/jenis (PC–Switch). Crossover (568A↔568B) untuk perangkat sejenis.",t:5},
 {q:"Dalam Uji Turing, pihak yang bertugas menilai mana mesin dan mana manusia adalah…",o:["Entitas A (komputer)","Entitas B (manusia)","Entitas C (interogator)","Programmer"],a:2,e:"Entitas C = interogator, menilai output teks di balik 'dinding pemisah' untuk membedakan mesin & manusia.",t:6},
 {q:"Urutan fungsi TI (siklus hidup informasi) yang benar:",o:["Process → Capture → Transmit → Store → Generate","Capture → Process → Generate → Store/Retrieve → Transmit","Transmit → Store → Process → Capture → Generate","Capture → Transmit → Process → Generate → Store"],a:1,e:"Capture → Process → Generate → Store/Retrieve → Transmit.",t:0},
 {"q": "Menurut Williams &amp; Sawyer (2003), Teknologi Informasi adalah…", "o": ["Teknologi yang hanya berupa komputer", "Teknologi yang menggabungkan komputasi dengan jalur komunikasi pembawa data, suara, atau video", "Ilmu yang mempelajari informasi", "Perangkat lunak pengolah data"], "a": 1, "e": "TI = gabungan komputasi (komputer) dengan jalur komunikasi berkecepatan tinggi yang membawa data, suara, dan video.", "t": 0},
 {"q": "Era bisnis yang fokus pada keunggulan kompetitif, dengan ciri BPR &amp; ERP, adalah…", "o": ["Era Komputerisasi", "Era Teknologi Informasi", "Era Sistem Informasi", "Era Globalisasi"], "a": 2, "e": "Era Sistem Informasi (1980an): keunggulan kompetitif, market driven, BPR & ERP.", "t": 1},
 {"q": "Komputer generasi kedua memakai komponen… dan mulai memakai bahasa…", "o": ["Tabung hampa; bahasa mesin", "Transistor; COBOL & FORTRAN", "IC; Python", "Mikroprosesor; GUI"], "a": 1, "e": "Gen 2 = transistor: lebih kecil, mulai memakai bahasa tingkat tinggi COBOL & FORTRAN.", "t": 1},
 {"q": "Brainware dalam sistem komputer adalah…", "o": ["Sistem operasi", "Manusia yang terlibat (manajer EDP, analis, programmer, operator)", "CPU dan memori", "Program aplikasi"], "a": 1, "e": "Brainware = unsur manusia: Manajer EDP → Analis/Programmer → Operator/User.", "t": 2},
 {"q": "Contoh komputer hybrid (gabungan analog & digital) menurut materi adalah…", "o": ["Kalkulator", "Mesin faks", "Termometer raksa", "Laptop"], "a": 1, "e": "Hybrid menggabungkan analog & digital, contohnya mesin faks.", "t": 2},
 {"q": "7E₁₆ dalam desimal adalah…", "o": ["126", "114", "132", "78"], "a": 0, "e": "7×16¹ + E(14)×16⁰ = 112 + 14 = 126.", "t": 3},
 {"q": "Kontraposisi dari p → q adalah…", "o": ["q → p", "~p → ~q", "~q → ~p", "p → ~q"], "a": 2, "e": "Konvers q→p, invers ~p→~q, kontraposisi ~q→~p.", "t": 3},
 {"q": "Pada penjumlahan BCD, jika hasil satu kelompok 4-bit lebih dari 9, maka…", "o": ["Hasilnya dibuang", "Ditambah 0110 (6) sebagai koreksi", "Dikurangi 1001", "Semua bit dibalik"], "a": 1, "e": "Hasil > 9 (atau ada carry) tidak valid di BCD, jadi dikoreksi dengan +0110.", "t": 3},
 {"q": "Mode penerimaan data real-time (delay maks ±150 ms) seperti video conference disebut…", "o": ["Retrieval", "Dialogue", "Broadcast", "Batch"], "a": 1, "e": "Dialogue = real-time. Retrieval = non real-time (random access).", "t": 4},
 {"q": "BMP 2311 KB dikompres menjadi JPEG 152 KB. Efisiensi kompresinya ≈…", "o": ["6,58%", "93,42%", "15,2%", "84,8%"], "a": 1, "e": "100% − (152 ÷ 2311 × 100%) = 100% − 6,58% = 93,42%.", "t": 4},
 {"q": "Kabel crossover (T568A ↔ T568B) dipakai untuk menghubungkan…", "o": ["PC ke switch", "Perangkat sejenis (PC–PC, switch–switch)", "Konsol router", "PC ke modem"], "a": 1, "e": "Crossover untuk perangkat sejenis. Straight untuk beda jenis. Rollover untuk konsol.", "t": 5},
 {"q": "Switch meneruskan data berdasarkan…", "o": ["IP address", "MAC address", "Nama domain", "Nomor port aplikasi"], "a": 1, "e": "Switch bekerja di Data Link Layer dan membaca MAC address untuk mengirim data secara privat per port.", "t": 5},
 {"q": "Mengapa Uji Turing memakai antarmuka teks murni (ada “dinding pemisah”)?", "o": ["Agar komputer lebih cepat", "Supaya penilaian murni pada logika & bahasa, tanpa bias wujud fisik", "Karena dulu belum ada layar", "Agar interogator bisa melihat mesin"], "a": 1, "e": "Kebutaan antarmuka memaksa evaluasi murni pada logika & bahasa, menghilangkan bias wujud fisik.", "t": 6},
 {"q": "Dalam EdTech/gamifikasi, peran mesin adalah…", "o": ["Subjek yang diuji", "Fasilitator & penilai pemahaman manusia", "Interogator Turing", "Tidak berperan"], "a": 1, "e": "Paradigma berbalik: mesin kini memfasilitasi dan menilai pemahaman manusia.", "t": 6},
 {"q": "Informasi adalah…", "o": ["Hasil pengolahan data yang punya arti & bisa dimanfaatkan manusia", "Kumpulan fakta mentah yang belum diolah", "Perangkat keras penyimpan data", "Jaringan komunikasi global"], "a": 0, "e": "Informasi = hasil pengolahan data yang bermakna dan bisa dimanfaatkan. Data mentah belum diolah.", "t": 0},
 {"q": "Mesin cetak Gutenberg ditemukan pada tahun…", "o": ["1455", "1830", "1837", "1946"], "a": 0, "e": "1455 Gutenberg · 1830 program pertama (Ada Lovelace) · 1837 telegraf & Morse · 1946 ENIAC.", "t": 0},
 {"q": "Program komputer pertama (1830) dikaitkan dengan…", "o": ["Ada Lovelace & Charles Babbage (mesin analytical)", "Samuel Morse", "Gordon Moore", "Dennis Ritchie"], "a": 0, "e": "Ada Lovelace bersama Babbage menyusun program untuk mesin analytical (1830).", "t": 0},
 {"q": "World Wide Web (WWW) lahir tahun 1992 di…", "o": ["CERN", "Bell Labs", "IBM", "ARPA"], "a": 0, "e": "WWW lahir di CERN (1992). Bell Labs = tempat lahirnya bahasa C.", "t": 0},
 {"q": "Dalam arsitektur informasi, basis data relasional, data warehouse, dan server termasuk tingkat…", "o": ["Fisik", "Logis", "Bisnis", "Konseptual"], "a": 0, "e": "Tingkat logis = gambaran bisnis (karyawan, rekening). Tingkat fisik = basis data, data warehouse, server.", "t": 0},
 {"q": "Menurut materi, posisi TI terhadap manusia adalah…", "o": ["TI hanya media pasif, manusia yang menjadi penentu", "TI menggantikan manusia sepenuhnya", "Manusia hanya pelengkap TI", "TI bekerja tanpa butuh manajemen"], "a": 0, "e": "TI = media pasif, manusia penentu. Implementasi sukses butuh SDM kompeten & manajemen yang baik.", "t": 0},
 {"q": "Pada model Triad Senn, komponen Know-How terdiri dari…", "o": ["People, application, procedure", "Hardware, programs, information", "CPU, memori, storage", "Input, process, output"], "a": 0, "e": "Computers & Communications = hardware, programs, information. Know-How = people, application, procedure.", "t": 0},
 {"q": "Telegraf dan kode Morse muncul pada tahun…", "o": ["1837", "1455", "1946", "1969"], "a": 0, "e": "1837: telegraf & kode Morse.", "t": 0},
 {"q": "Serat papyrus (cikal bakal kertas) dikenal sekitar tahun…", "o": ["500 SM", "3000 SM", "2900 SM", "1455 M"], "a": 0, "e": "3000 SM Sumeria (pictograf) · 2900 SM Hierogliph · 500 SM papyrus.", "t": 0},
 {"q": "Tiga dimensi arsitektur informasi adalah…", "o": ["Apa yang disimpan, di mana ditempatkan, bagaimana dipindahkan", "Input, proses, output", "Hardware, software, brainware", "Capture, process, transmit"], "a": 0, "e": "Arsitektur informasi menjawab: apa yang disimpan? di mana? bagaimana dipindahkan?", "t": 0},
 {"q": "Era Globalisasi (1990an–kini) ditandai dengan…", "o": ["LAN/WAN & e-commerce, pasar global (cyberspace)", "Mainframe di back office", "PC di meja & divisi EDP", "BPR & ERP"], "a": 0, "e": "Globalisasi = pasar global lewat cyberspace: LAN/WAN, e-commerce.", "t": 1},
 {"q": "Era Teknologi Informasi (1970an) berfokus pada…", "o": ["Efektivitas kerja", "Efisiensi waktu & biaya", "Keunggulan kompetitif", "Pasar global"], "a": 0, "e": "Komputerisasi = efisiensi · TI = efektivitas · SI = kompetitif · Globalisasi = pasar global.", "t": 1},
 {"q": "Komputer generasi keempat ditandai komponen…", "o": ["Mikroprosesor (LSI/VLSI)", "Tabung hampa", "Transistor", "Biochip"], "a": 0, "e": "Gen 4 (1971–kini) = mikroprosesor: PC, GUI, floppy, LAN/Internet.", "t": 1},
 {"q": "Generasi kelima komputer (masa depan) dikaitkan dengan…", "o": ["Biochip & kecerdasan buatan (AI)", "IC", "Transistor", "Tabung hampa"], "a": 0, "e": "Gen 5 = biochip, AI, programless computer.", "t": 1},
 {"q": "Tokoh penemu IC (Integrated Circuit) pada generasi ketiga adalah…", "o": ["Jack Kilby", "Gordon Moore", "Dennis Ritchie", "John Tukey"], "a": 0, "e": "Jack Kilby → IC (Gen 3). Moore → Hukum Moore. Tukey → istilah bit.", "t": 1},
 {"q": "Analogi IBM “mobil 10.000 km/jam seharga $1” bermakna…", "o": ["TI berkembang sangat pesat: makin kecil & murah hardware, makin masif dampaknya", "Mobil akan diganti komputer", "Harga komputer makin mahal", "Otomotif lebih maju dari TI"], "a": 0, "e": "Analogi IBM menggambarkan kecepatan kemajuan TI dibanding industri lain.", "t": 1},
 {"q": "Dua lensa yang dipakai untuk membedah evolusi komputer adalah…", "o": ["Lensa bisnis (waktu informasi) & lensa hardware (waktu pembuatan)", "Lensa analog & digital", "Lensa input & output", "Lensa LAN & WAN"], "a": 0, "e": "Lensa bisnis → 4 era. Lensa hardware → 5 generasi.", "t": 1},
 {"q": "Komputer SAGE seberat 275 ton termasuk generasi…", "o": ["Pertama", "Kedua", "Ketiga", "Keempat"], "a": 0, "e": "Gen 1 (tabung hampa): raksasa & panas, contohnya SAGE 275 ton, UNIVAC, ENIAC.", "t": 1},
 {"q": "Control Unit (CU) pada CPU berperan untuk…", "o": ["Mengambil, menerjemahkan & mengendalikan instruksi (sang dirigen)", "Menghitung aritmatika", "Menyimpan data permanen", "Menghubungkan jaringan"], "a": 0, "e": "CU = dirigen: fetch, decode, kendalikan. ALU yang menghitung.", "t": 2},
 {"q": "Register adalah…", "o": ["Memori internal super kecil & super cepat untuk operan sementara", "Penyimpanan permanen berkapasitas besar", "Bagian yang menghitung logika", "Kabel penghubung komponen"], "a": 0, "e": "Register = memori di dalam CPU, sangat kecil & sangat cepat.", "t": 2},
 {"q": "Set instruksi, mekanisme I/O, jumlah bit, dan pengalamatan memori termasuk…", "o": ["Arsitektur komputer", "Organisasi komputer", "Brainware", "Subsistem kontrol"], "a": 0, "e": "Itu atribut yang terlihat programmer → arsitektur. Organisasi = sinyal kontrol, antarmuka periferal, teknologi memori.", "t": 2},
 {"q": "Empat subsistem fungsional komputer (model Stallings) adalah…", "o": ["Data Processing, Data Storage, Data Movement, Control", "Input, Process, Output, Storage", "Hardware, Software, Brainware, Network", "CU, ALU, Register, Bus"], "a": 0, "e": "Stallings: olah, simpan, pindah (I/O), dan kontrol (orkestrator).", "t": 2},
 {"q": "Komputer untuk transaksi masif seperti perbankan adalah…", "o": ["Mainframe", "PC", "Minicomputer", "Supercomputer"], "a": 0, "e": "Super → riset/militer · Mainframe → transaksi masif · Mini → departemen · PC → perorangan.", "t": 2},
 {"q": "Komputer analog mengolah data yang bersifat…", "o": ["Kontinu (suhu, tegangan)", "Diskret (angka/teks)", "Hanya biner", "Gabungan analog & digital"], "a": 0, "e": "Analog = kontinu · Digital = diskret · Hybrid = gabungan.", "t": 2},
 {"q": "Urutan hierarki brainware dari atas adalah…", "o": ["Manajer EDP → Analis/Programmer → Operator/User", "Operator → Programmer → Manajer", "Programmer → Manajer → Analis", "User → Operator → Manajer"], "a": 0, "e": "Brainware: Manajer EDP di puncak, lalu Analis/Programmer, lalu Operator/User.", "t": 2},
 {"q": "Sistem operasi dan program aplikasi termasuk komponen…", "o": ["Software", "Hardware", "Brainware", "Firmware"], "a": 0, "e": "Software = instruksi/logika: OS + program aplikasi.", "t": 2},
 {"q": "1011₂ dalam desimal adalah…", "o": ["11", "13", "9", "10"], "a": 0, "e": "8 + 0 + 2 + 1 = 11.", "t": 3},
 {"q": "45₁₀ dalam biner adalah…", "o": ["101101", "110101", "101011", "100101"], "a": 0, "e": "Sisa bagi 2 (bawah→atas): 1 0 1 1 0 1 → 101101. Cek: 32+8+4+1 = 45.", "t": 3},
 {"q": "11010110₂ dalam heksadesimal adalah…", "o": ["D6", "C6", "D5", "B6"], "a": 0, "e": "Grup 4-bit: 1101 = D, 0110 = 6 → D6.", "t": 3},
 {"q": "Komplemen-2 dari 0000 0110 (6) adalah…", "o": ["1111 1010", "1111 1001", "0000 0101", "1111 0110"], "a": 0, "e": "Balik bit → 1111 1001, lalu +1 → 1111 1010 (= −6).", "t": 3},
 {"q": "1011₂ + 110₂ = …", "o": ["10001₂", "10011₂", "1111₂", "10101₂"], "a": 0, "e": "11 + 6 = 17 = 10001₂.", "t": 3},
 {"q": "255₁₀ dalam heksadesimal adalah…", "o": ["FF", "EF", "FE", "1FF"], "a": 0, "e": "255 ÷ 16 = 15 sisa 15 (F), 15 ÷ 16 = 0 sisa 15 (F) → FF.", "t": 3},
 {"q": "Pada bilangan 859, nilai posisi angka 8 adalah…", "o": ["8 × 10²", "8 × 10¹", "8 × 10⁰", "8 × 10³"], "a": 0, "e": "859 = 8×10² + 5×10¹ + 9×10⁰. Posisi dihitung dari kanan mulai 0.", "t": 3},
 {"q": "Konjungsi (p ∧ q) bernilai BENAR jika…", "o": ["p dan q sama-sama benar", "Salah satu benar", "Keduanya salah", "p salah dan q benar"], "a": 0, "e": "AND benar hanya jika keduanya benar.", "t": 3},
 {"q": "Konvers dari p → q adalah…", "o": ["q → p", "~p → ~q", "~q → ~p", "~q → p"], "a": 0, "e": "Konvers = tukar posisi (q → p). Invers = negasi keduanya. Kontraposisi = tukar + negasi.", "t": 3},
 {"q": "Kode SBCDIC menggunakan … bit dengan … kombinasi.", "o": ["6 bit; 64", "7 bit; 128", "8 bit; 256", "4 bit; 16"], "a": 0, "e": "SBCDIC 6-bit → 2⁶ = 64. ASCII s/d 8-bit (256). EBCDIC 8-bit (256).", "t": 3},
 {"q": "Pada bilangan biner bertanda, MSB bernilai 1 berarti bilangan…", "o": ["Negatif", "Positif", "Nol", "Pecahan"], "a": 0, "e": "MSB = sign bit: 1 negatif, 0 positif.", "t": 3},
 {"q": "2A₁₆ dalam desimal adalah…", "o": ["42", "32", "26", "52"], "a": 0, "e": "2×16 + A(10) = 42.", "t": 3},
 {"q": "57₈ dalam desimal adalah…", "o": ["47", "57", "45", "39"], "a": 0, "e": "5×8 + 7 = 47.", "t": 3},
 {"q": "18 − 7 dihitung komputer dengan cara…", "o": ["18 + (komplemen-2 dari 7), lalu carry ke-9 dibuang", "18 dikurangi langsung bit per bit", "7 − 18 lalu dibalik", "Membagi 18 dengan 7"], "a": 0, "e": "Komputer tidak mengurang, tapi menambah bilangan negatif: 0001 0010 + 1111 1001 = 1 0000 1011 → buang carry → 11.", "t": 3},
 {"q": "9 + 5 dalam BCD menghasilkan…", "o": ["0001 0100", "1110", "0000 1110", "0001 0101"], "a": 0, "e": "1001 + 0101 = 1110 (>9) → +0110 = 1 0100 → 0001 0100 = “14”.", "t": 3},
 {"q": "Istilah “bit” diperkenalkan oleh…", "o": ["John Tukey", "Gordon Moore", "Jack Kilby", "Alan Turing"], "a": 0, "e": "Bit (binary digit) dipopulerkan John Tukey.", "t": 4},
 {"q": "Contoh format dengan kompresi lossless adalah…", "o": ["ZIP, RAR, PNG", "MP3", "JPEG", "MPEG"], "a": 0, "e": "Lossless: ZIP, RAR, PNG, GIF. Lossy: MP3, JPEG, MPEG.", "t": 4},
 {"q": "GIF memakai kompresi … dengan warna maksimal…", "o": ["Lossless (LZW), 8-bit / 256 warna", "Lossy (DCT), 24-bit", "Lossless (Deflate), 48-bit + alpha", "Lossy, 16-bit"], "a": 0, "e": "GIF = lossless LZW, maks 8-bit (256 warna). PNG = Deflate, 16–48-bit + alpha. JPEG = lossy DCT, 24-bit.", "t": 4},
 {"q": "Data 2.000.000 bit dikirim pada 500.000 bps. Waktunya…", "o": ["4 detik", "0,25 detik", "40 detik", "32 detik"], "a": 0, "e": "Sudah dalam bit → langsung bagi: 2.000.000 ÷ 500.000 = 4 detik.", "t": 4},
 {"q": "Tiga jenis bus pada interfacing adalah…", "o": ["Data bus, Address bus, Control bus", "USB, PCI, SATA", "LAN, MAN, WAN", "Input, Output, Storage bus"], "a": 0, "e": "Bus = data bus, address bus, control bus.", "t": 4},
 {"q": "Handshaking pada interfacing adalah…", "o": ["Sinyal awal untuk memulai komunikasi antar perangkat", "Aturan komunikasi", "Jalur kabel data", "Alat penguat sinyal"], "a": 0, "e": "Protokol = aturan · Handshaking = sinyal awal · Bus = jalur.", "t": 4},
 {"q": "JPEG mendukung kedalaman warna…", "o": ["24-bit (16,7 juta warna)", "8-bit (256 warna)", "1-bit", "4-bit"], "a": 0, "e": "JPEG 24-bit, lossy DCT.", "t": 4},
 {"q": "Satu tingkat satuan data (mis. KB → MB) naik dengan dikali…", "o": ["1024", "1000", "8", "100"], "a": 0, "e": "KB → MB → GB → TB → PB → EB, tiap naik ×1024.", "t": 4},
 {"q": "Mode retrieval pada penerimaan data bersifat…", "o": ["Non real-time, random access", "Real-time dengan delay ±150 ms", "Hanya untuk video conference", "Broadcast ke semua"], "a": 0, "e": "Dialogue = real-time · Retrieval = non real-time, random access.", "t": 4},
 {"q": "Jangkauan jaringan MAN adalah sekitar…", "o": ["10–100 km (kota)", "1–10 m", "10–1.000 m", "100–1.000+ km"], "a": 0, "e": "PAN ruangan · LAN gedung · MAN kota · WAN negara.", "t": 5},
 {"q": "Bridge bekerja di layer … dan membaca…", "o": ["Data Link; MAC address", "Network; IP address", "Physical; tidak membaca alamat", "Transport; port"], "a": 0, "e": "Bridge & switch = Data Link (MAC). Bridge membagi jaringan.", "t": 5},
 {"q": "Identitas fisik (MAC address) disimpan pada…", "o": ["NIC", "Router", "Hub", "Modem"], "a": 0, "e": "NIC (Network Interface Card) menyimpan MAC address.", "t": 5},
 {"q": "Fungsi modem adalah…", "o": ["Modulator-demodulator: mengubah sinyal digital ↔ analog", "Membaca IP address", "Membagi jaringan berdasar MAC", "Memperkuat sinyal ke semua port"], "a": 0, "e": "Modem = modulator-demodulator (digital ↔ analog).", "t": 5},
 {"q": "Fiber optic single-mode digunakan untuk…", "o": ["Jarak sangat jauh (antar kota)", "Jarak < 3 km", "Dalam satu ruangan saja", "Kabel konsol"], "a": 0, "e": "Single-mode → antar kota. Multi-mode → < 3 km.", "t": 5},
 {"q": "Topologi yang paling anti-gagal tapi boros kabel adalah…", "o": ["Mesh", "Star", "Ring", "Bus"], "a": 0, "e": "Mesh: semua terhubung ke semua → tahan gagal, tapi kabelnya banyak.", "t": 5},
 {"q": "Panjang maksimal kabel UTP (twisted pair) sekitar…", "o": ["100 m", "1 km", "10 km", "10 m"], "a": 0, "e": "UTP murah, maksimal ±100 m.", "t": 5},
 {"q": "Kabel rollover digunakan untuk…", "o": ["Koneksi konsol (konfigurasi perangkat)", "PC ke switch", "PC ke PC", "Router ke internet"], "a": 0, "e": "Straight = beda jenis · Crossover = sejenis · Rollover = konsol.", "t": 5},
 {"q": "Urutan langkah crimping kabel UTP yang benar adalah…", "o": ["Stripping → Untwisting → Trimming → Crimping → Testing", "Trimming → Stripping → Crimping → Testing → Untwisting", "Crimping → Stripping → Testing → Trimming → Untwisting", "Untwisting → Crimping → Stripping → Trimming → Testing"], "a": 0, "e": "Kupas, urai, ratakan, crimp, lalu tes.", "t": 5},
 {"q": "Pada topologi star, jika satu kabel ke PC putus maka…", "o": ["Hanya PC itu yang terputus (lokal)", "Seluruh jaringan lumpuh", "Token berhenti berputar", "Semua data broadcast"], "a": 0, "e": "Star tangguh: putus hanya berdampak lokal. Yang lumpuh total itu ring.", "t": 5},
 {"q": "Kedua ujung kabel memakai standar yang sama (mis. T568B–T568B) disebut kabel…", "o": ["Straight-through", "Crossover", "Rollover", "Koaksial"], "a": 0, "e": "Straight = kedua ujung sama. Crossover = 568A ↔ 568B.", "t": 5},
 {"q": "Dalam Uji Turing, Entitas A (komputer) berusaha…", "o": ["Mengelabui interogator agar tidak dapat dibedakan dari manusia", "Menilai mana mesin dan mana manusia", "Memberi respons natural sebagai kontrol", "Mengajari manusia"], "a": 0, "e": "A = komputer yang mengelabui · B = manusia (kontrol) · C = interogator (penilai).", "t": 6},
 {"q": "Perubahan paradigma interaksi manusia–mesin menurut materi adalah…", "o": ["Dulu mesin dirancang meniru kecerdasan manusia, kini dirancang melatih kecerdasan manusia", "Dulu mesin melatih manusia, kini meniru", "Mesin selalu menggantikan manusia", "Tidak ada perubahan"], "a": 0, "e": "Dari meniru → melatih. Dari manusia menilai mesin → mesin menilai manusia.", "t": 6},
 {"q": "Antarmuka pada EdTech dibanding Uji Turing bersifat…", "o": ["Kaya grafis & warna", "Teks murni", "Tanpa antarmuka", "Hanya suara"], "a": 0, "e": "Turing pakai teks murni (hilangkan bias). EdTech kaya grafis & warna.", "t": 6},
 {"q": "Tujuan Uji Turing adalah…", "o": ["Menilai kecerdasan mesin", "Meningkatkan kecerdasan manusia", "Mengukur kecepatan CPU", "Menguji jaringan"], "a": 0, "e": "Uji Turing menilai mesin. EdTech meningkatkan kecerdasan manusia.", "t": 6}
];

var QUIZ_ADS=[
 {q:"Fungsi yang menjadi titik awal eksekusi setiap program C adalah…",o:["start()","begin()","main()","run()"],a:2,e:"Eksekusi C selalu dimulai dari fungsi main().",t:1},
 {q:"Baris yang wajib ada agar printf bisa dipakai:",o:["#include <string.h>","#include <stdio.h>","#include <stdlib.h>","using namespace std;"],a:1,e:"printf & scanf ada di pustaka standar I/O: #include <stdio.h>.",t:1},
 {q:"Ukuran tipe data yang benar (umum):",o:["char=4 byte, int=1 byte","int=4 byte, double=8 byte","float=8 byte, double=4 byte","char=2 byte, long long=4 byte"],a:1,e:"int = 4 byte, double = 8 byte, char = 1 byte, float = 4 byte, long long = 8 byte.",t:2},
 {q:"Format specifier yang benar untuk mencetak float/double 2 angka desimal:",o:["%d","%c","%.2f","%s"],a:2,e:"%.2f mencetak bilangan pecahan dengan 2 angka desimal.",t:3},
 {q:"Nama variabel berikut yang VALID di C:",o:["2nilai","nilai akhir","_total","float"],a:2,e:"_total valid (boleh diawali underscore). '2nilai' diawali angka, 'nilai akhir' ada spasi, 'float' keyword.",t:2},
 {q:"Hasil dari 7 / 2 pada C (keduanya int) adalah…",o:["3.5","3","4","0"],a:1,e:"Pembagian int ÷ int membuang pecahan → 3. Untuk 3.5 pakai casting: (float)7/2.",t:4},
 {q:"int harga = 12500.75; lalu printf(\"%d\", harga*3); mencetak…",o:["37502.25","37502","37500","Error"],a:2,e:"Desimal dipotong saat disimpan ke int → 12500; ×3 = 37500. Perbaikan: pakai double & %.2f.",t:2},
 {q:"Hasil dari 17 % 5 adalah…",o:["3","2","3.4","12"],a:1,e:"Operator % = sisa bagi. 17 dibagi 5 = 3 sisa 2 → 2.",t:4},
 {q:"scanf untuk membaca sebuah int x ditulis…",o:["scanf(\"%d\", x);","scanf(\"%d\", &x);","scanf(\"%f\", &x);","scanf(x);"],a:1,e:"scanf butuh ALAMAT variabel: scanf(\"%d\", &x); — kecuali array string.",t:3},
 {q:"Untuk membaca nama lengkap yang mengandung spasi, sebaiknya pakai…",o:["scanf dengan %s","fgets","getchar","putchar"],a:1,e:"scanf %s berhenti di spasi; untuk satu baris berspasi gunakan fgets.",t:3},
 {q:"Perulangan yang badannya dijalankan MINIMAL satu kali adalah…",o:["for","while","do-while","foreach"],a:2,e:"do-while mengecek kondisi di akhir, jadi badan loop pasti jalan minimal sekali.",t:6},
 {q:"Pada for(i=1; i<=10; i+=2), badan loop dijalankan berapa kali?",o:["4 kali","5 kali","10 kali","11 kali"],a:1,e:"i = 1,3,5,7,9 → 5 kali. Setelah i=9, i menjadi 11 dan kondisi 11<=10 salah → berhenti.",t:6},
 {q:"Setelah loop for(i=1; i<=10; i+=2) selesai, nilai i adalah…",o:["9","10","11","12"],a:2,e:"Perubahan i+=2 tetap dijalankan setelah iterasi terakhir (i=9→11), lalu kondisi gagal. Jadi i=11, bukan 9.",t:6},
 {q:"Dalam switch-case, melupakan 'break' menyebabkan…",o:["Compile error","Program berhenti","Eksekusi 'jatuh' ke case berikutnya (fall-through)","Case diabaikan semua"],a:2,e:"Tanpa break, eksekusi lanjut ke case di bawahnya (fall-through).",t:5},
 {q:"Pada rantai if–else if untuk grade, mengapa kondisi nilai terbesar (>=85) diperiksa lebih dulu?",o:["Agar lebih cepat dikompilasi","Karena else if berhenti di kondisi benar pertama; kalau dari kecil, nilai tinggi keburu masuk cabang rendah","Supaya hemat memori","Tidak ada pengaruh urutan"],a:1,e:"else if dievaluasi berurutan & berhenti di yang pertama benar. Jika >=55 dicek dulu, nilai 91 berhenti di sana (grade C).",t:5},
 {q:"Keyword yang keluar dari loop sepenuhnya adalah…",o:["continue","break","return value","exit case"],a:1,e:"break keluar dari loop; continue hanya melompat ke iterasi berikutnya.",t:6},
 {q:"Simbol flowchart untuk input/output (scanf/printf) adalah…",o:["Oval","Persegi panjang","Jajar genjang","Belah ketupat"],a:2,e:"Jajar genjang = Input/Output. Oval=terminal, persegi=proses, belah ketupat=keputusan.",t:7},
 {q:"Simbol flowchart belah ketupat digunakan untuk…",o:["Awal/akhir program","Proses perhitungan","Keputusan/kondisi (2 cabang)","Input data"],a:2,e:"Belah ketupat = keputusan: memeriksa kondisi dengan dua cabang (Ya/Tidak).",t:7},
 {q:"Di C, sebuah ekspresi relasional seperti (5 > 3) menghasilkan nilai…",o:["true","1","\"benar\"","3"],a:1,e:"C tidak punya boolean asli di ekspresi dasar: benar = 1, salah = 0.",t:4},
 {q:"Perbedaan const dan #define:",o:["Keduanya identik","const punya tipe data & dicek compiler; #define makro pengganti teks sebelum kompilasi (tanpa tipe)","#define punya tipe, const tidak","const hanya untuk string"],a:1,e:"const = variabel bertipe yang tak bisa diubah; #define = makro yang mengganti teks sebelum kompilasi, tanpa tipe data.",t:2},
 {q:"Rumus nilai akhir ditulis 20/100*tugas dengan semua variabel int. Hasilnya…",o:["Benar sesuai bobot","Selalu 0 karena 20/100 = 0 (pembagian bulat)","Error pembagian","Dibulatkan ke atas"],a:1,e:"20/100 pada int = 0 (pembagian bulat), jadi seluruh suku jadi 0. Pakai 0.2 atau 20.0/100 dengan variabel float.",t:4},
 {q:"Bahasa C dikembangkan oleh… untuk menulis sistem operasi…",o:["Bjarne Stroustrup; Windows","Dennis Ritchie; UNIX","James Gosling; Linux","Guido van Rossum; macOS"],a:1,e:"Dennis Ritchie (Bell Labs, awal 1970-an) mengembangkan C, awalnya untuk menulis OS UNIX.",t:1},
 {q:"Istilah 'algoritma' berasal dari nama…",o:["Alan Turing","Al-Khwarizmi","Charles Babbage","Ada Lovelace"],a:1,e:"Dari Al-Khwarizmi, ahli matematika & astronomi Persia abad ke-9.",t:0},
 {q:"Siklus dasar pada setiap algoritma adalah…",o:["FIFO","IPO (Input–Process–Output)","CRUD","OOP"],a:1,e:"Setiap algoritma mengikuti siklus Input → Process → Output.",t:0},
 {q:"Karakteristik algoritma yang berarti 'selesai dalam langkah & waktu terbatas' adalah…",o:["Definitif","Efektif","Berakhir (finite)","Ada keluaran"],a:2,e:"Berakhir/finite: algoritma tak boleh berjalan selamanya.",t:0},
 {q:"Karakteristik 'definitif' pada algoritma berarti…",o:["Punya masukan","Setiap langkah jelas, eksplisit, tidak ambigu","Selesai cepat","Punya banyak output"],a:1,e:"Definitif = tiap langkah jelas & tidak ambigu, karena komputer butuh instruksi detail.",t:0},
 {q:"Berikut yang BUKAN cara penulisan algoritma:",o:["Bahasa alami (prosa)","Flowchart","Pseudocode","Kompilasi"],a:3,e:"Cara penulisan: bahasa alami, flowchart, pseudocode, dan bahasa program. Kompilasi itu proses menerjemahkan kode, bukan cara menulis algoritma.",t:0},
 {q:"Pada array int a[5], indeks yang valid adalah…",o:["1 sampai 5","0 sampai 5","0 sampai 4","1 sampai 4"],a:2,e:"Indeks array mulai 0, jadi a[5] punya indeks valid 0–4 (5 elemen).",t:8},
 {q:"Pernyataan yang benar tentang array di C:",o:["Boleh campur tipe data berbeda","Semua elemen harus bertipe data sama","Indeks mulai dari 1","Hanya bisa menyimpan 1 nilai"],a:1,e:"Array di C hanya boleh berisi elemen dengan tipe data yang sama; indeks mulai 0; menyimpan banyak nilai.",t:8},
 {q:"Nilai keluaran yang dikembalikan sebuah fungsi disebut…",o:["parameter","argumen","return value","prototype"],a:2,e:"Return value = nilai keluaran fungsi. Parameter/argumen = nilai masukan.",t:9},
 {q:"Jika tipe keluaran sebuah fungsi C tidak dituliskan, maka dianggap bertipe…",o:["void","int","float","char"],a:1,e:"Secara default dianggap int bila tipe keluaran tidak disebutkan.",t:9},
 {q:"Syarat utama agar Binary Search bisa dipakai adalah…",o:["Array berisi angka saja","Array harus sudah terurut","Array berukuran genap","Array maksimal 10 elemen"],a:1,e:"Binary search hanya bekerja pada array yang sudah terurut.",t:10},
 {q:"Rumus mencari indeks tengah pada Binary Search:",o:["(bawah + atas) / 2","(bawah × atas) / 2","atas − bawah","(atas − bawah) × 2"],a:0,e:"tengah = (batas_bawah + batas_atas) / 2.",t:10},
 {q:"Perbandingan Sequential vs Binary Search yang benar:",o:["Sequential lebih cepat untuk data besar","Binary memeriksa elemen satu per satu","Sequential cek satu-satu (lambat); Binary bagi dua (cepat, butuh data terurut)","Keduanya butuh data terurut"],a:2,e:"Sequential periksa satu per satu (lambat, data tak harus urut). Binary membagi dua tiap langkah (cepat, data harus urut).",t:10},
 {q:"Queue menggunakan prinsip…",o:["LIFO (Last In First Out)","FIFO (First In First Out)","Random access","Sorting"],a:1,e:"Queue = FIFO: yang pertama masuk pertama keluar. (Stack = LIFO.)",t:11},
 {q:"Pada queue, menambah elemen dilakukan di … dan menghapus di …",o:["FRONT; REAR","REAR; FRONT","FRONT; FRONT","REAR; REAR"],a:1,e:"Insert/enqueue di REAR (belakang), delete/dequeue di FRONT (depan).",t:11},
 {"q": "Tipe data paling tepat untuk NIM seperti 0012345678 adalah…", "o": ["int", "float", "char nim[11] (string)", "double"], "a": 2, "e": "Pakai string: angka 0 di depan hilang jika disimpan sebagai int, bisa melebihi batas int, dan NIM tidak dihitung.", "t": 2},
 {"q": "Format <code>%05d</code> untuk angka 42 menghasilkan…", "o": ["42000", "00042", "   42 (spasi di depan)", "42   (spasi di belakang)"], "a": 1, "e": "%05d = lebar 5, sisanya diisi nol di depan → 00042.", "t": 3},
 {"q": "Hasil <code>(float)7/2</code> adalah…", "o": ["3", "3.5", "4", "0"], "a": 1, "e": "Casting membuat 7 jadi float, jadi pembagiannya tidak lagi bulat: 3.5.", "t": 4},
 {"q": "Urutan kondisi: <code>if(n&gt;=55) C; else if(n&gt;=70) B; else if(n&gt;=85) A;</code> Nilai 91 mendapat grade…", "o": ["A", "B", "C", "Error"], "a": 2, "e": "91 ≥ 55 sudah benar di kondisi pertama, jadi langsung berhenti di C. Makanya cek dari nilai terbesar dulu.", "t": 5},
 {"q": "<code>jumlah = 0; for(i=1; i&lt;=10; i+=2) jumlah += i;</code> Nilai akhir jumlah adalah…", "o": ["25", "30", "55", "20"], "a": 0, "e": "i = 1,3,5,7,9 → 1+3+5+7+9 = 25.", "t": 6},
 {"q": "Simbol oval pada flowchart berfungsi sebagai…", "o": ["Keputusan", "Terminal (Mulai/Selesai)", "Input/Output", "Proses"], "a": 1, "e": "Oval = terminal (awal & akhir).", "t": 7},
 {"q": "<code>int a[5] = {10, 47, 20, 89, 30};</code> Nilai <code>a[3]</code> adalah…", "o": ["20", "89", "30", "47"], "a": 1, "e": "Indeks mulai 0: a[0]=10, a[1]=47, a[2]=20, a[3]=89.", "t": 8},
 {"q": "Matriks <code>int m[3][4]</code> memiliki berapa elemen?", "o": ["7", "12", "3", "4"], "a": 1, "e": "3 baris × 4 kolom = 12 elemen.", "t": 8},
 {"q": "Manfaat utama memecah program menjadi fungsi adalah…", "o": ["Program jadi lebih lambat", "Menghindari penulisan kode berulang & struktur lebih jelas", "Wajib agar bisa dikompilasi", "Mengurangi jumlah tipe data"], "a": 1, "e": "Fungsi: tulis sekali, panggil berkali-kali; main() jadi pendek & jelas.", "t": 9},
 {"q": "Binary search pada array berindeks 0–8: indeks tengah pertama yang dicek adalah…", "o": ["3", "4", "5", "8"], "a": 1, "e": "tengah = (0 + 8) / 2 = 4.", "t": 10},
 {"q": "Kasus terburuk sequential search terjadi ketika…", "o": ["Elemen ada di indeks 0", "Elemen ada di akhir array atau tidak ada", "Array sudah terurut", "Array berukuran genap"], "a": 1, "e": "Semua elemen harus dicek satu per satu sampai akhir.", "t": 10},
 {"q": "A, B, C di-enqueue berurutan ke queue kosong, lalu dilakukan satu kali dequeue. Elemen yang keluar…", "o": ["A", "B", "C", "Tidak ada"], "a": 0, "e": "FIFO: yang pertama masuk (A) pertama keluar.", "t": 11},
 {"q": "Karakteristik algoritma “efektif” berarti…", "o": ["Tidak ada langkah sia-sia & semua langkah masuk akal", "Selesai dalam waktu terbatas", "Setiap langkah tidak ambigu", "Memiliki keluaran"], "a": 0, "e": "Efektif = tak ada langkah sia-sia/mustahil. Berakhir = finite. Definitif = tak ambigu.", "t": 0},
 {"q": "Mengapa algoritma yang baik harus punya masukan?", "o": ["Supaya bisa dipakai umum, bukan hanya satu kasus", "Supaya cepat dikompilasi", "Agar tidak perlu keluaran", "Agar bisa berjalan selamanya"], "a": 0, "e": "Masukan membuat algoritma berlaku umum untuk banyak kasus.", "t": 0},
 {"q": "Kelemahan menulis algoritma dengan bahasa alami (prosa) adalah…", "o": ["Rawan ambigu", "Tidak bisa dibaca manusia", "Harus dikompilasi", "Butuh simbol grafis"], "a": 0, "e": "Bahasa alami mudah dipahami tapi rawan ambigu.", "t": 0},
 {"q": "Urutan algoritma menghitung luas persegi panjang yang benar adalah…", "o": ["Mulai → terima panjang → terima lebar → luas = panjang × lebar → tampilkan luas → selesai", "Mulai → tampilkan luas → terima panjang → luas = p × l → selesai", "Terima panjang → mulai → luas = p × l → terima lebar → selesai", "Mulai → luas = p × l → terima panjang → terima lebar → selesai"], "a": 0, "e": "Input dulu, baru proses, lalu output (IPO).", "t": 0},
 {"q": "Al-Khwarizmi, asal istilah “algoritma”, adalah ahli matematika dari…", "o": ["Persia, abad ke-9", "Yunani, abad ke-5 SM", "Inggris, abad ke-19", "Mesir Kuno"], "a": 0, "e": "Al-Khwarizmi: ahli matematika & astronomi Persia abad ke-9.", "t": 0},
 {"q": "Urutan alur kompilasi program C yang benar adalah…", "o": ["kode.c → preprocessor → compiler → linker → program", "kode.c → compiler → preprocessor → linker → program", "kode.c → linker → compiler → preprocessor → program", "kode.c → program → compiler → linker"], "a": 0, "e": "Preprocessor (proses #include) → compiler → linker → program jadi.", "t": 1},
 {"q": "Setiap pernyataan (statement) di C diakhiri dengan…", "o": ["Titik koma ;", "Titik dua :", "Koma ,", "Titik ."], "a": 0, "e": "Tiap pernyataan C diakhiri ;", "t": 1},
 {"q": "<code>return 0;</code> di akhir <code>main()</code> menandakan…", "o": ["Program selesai dengan sukses", "Program error", "Mengulang program", "Mencetak angka 0"], "a": 0, "e": "return 0 = selesai sukses.", "t": 1},
 {"q": "Karakter <code>\\n</code> dalam printf berfungsi untuk…", "o": ["Membuat baris baru", "Mencetak huruf n", "Tab", "Mengakhiri program"], "a": 0, "e": "\\n = newline (baris baru).", "t": 1},
 {"q": "Bahasa C termasuk bahasa pemrograman…", "o": ["Prosedural", "Berbasis objek murni", "Markup", "Query database"], "a": 0, "e": "C = bahasa prosedural, dekat dengan hardware.", "t": 1},
 {"q": "Ukuran tipe data char adalah…", "o": ["1 byte", "2 byte", "4 byte", "8 byte"], "a": 0, "e": "char 1 byte · int 4 · float 4 · double 8 · long long 8.", "t": 2},
 {"q": "Format specifier untuk long long adalah…", "o": ["%lld", "%d", "%lf", "%ll"], "a": 0, "e": "long long → %lld.", "t": 2},
 {"q": "Tipe data yang tepat untuk total tabungan 15 miliar (bilangan bulat) adalah…", "o": ["long long", "int", "char", "float"], "a": 0, "e": "15 miliar melebihi batas int (±2,1 miliar), jadi pakai long long.", "t": 2},
 {"q": "Nama variabel <code>jumlah-data</code> tidak valid karena…", "o": ["Tanda − dibaca sebagai operator pengurangan", "Terlalu panjang", "Diawali huruf", "Mengandung huruf kecil"], "a": 0, "e": "Hanya huruf, angka, underscore. − dibaca operator.", "t": 2},
 {"q": "Variabel <code>IPK</code> dan <code>ipk</code> di C adalah…", "o": ["Dua variabel berbeda (case-sensitive)", "Variabel yang sama", "Tidak valid", "Keyword"], "a": 0, "e": "C case-sensitive: huruf besar ≠ huruf kecil.", "t": 2},
 {"q": "Operator <code>sizeof</code> digunakan untuk…", "o": ["Mengetahui ukuran byte suatu tipe/variabel", "Menghitung jumlah elemen string", "Membulatkan bilangan", "Mengubah tipe data"], "a": 0, "e": "sizeof → ukuran dalam byte.", "t": 2},
 {"q": "Format specifier <code>%c</code> dipakai untuk tipe…", "o": ["char", "int", "float", "string"], "a": 0, "e": "%c = char, %d = int, %f = float, %s = string.", "t": 2},
 {"q": "Agar <code>harga = 12500.75</code> tidak terpotong, tipe yang tepat adalah…", "o": ["double (cetak dengan %.2f)", "int", "char", "long long"], "a": 0, "e": "Simpan pecahan di double/float. int membuang bagian desimal.", "t": 2},
 {"q": "Format <code>%-10s</code> berarti…", "o": ["String rata kiri dengan lebar 10", "String rata kanan lebar 10", "10 karakter pertama", "10 angka desimal"], "a": 0, "e": "Tanda − = rata kiri. %10s = rata kanan.", "t": 3},
 {"q": "<code>total = 3725; menit = (total % 3600) / 60;</code> Nilai menit adalah…", "o": ["2", "1", "5", "62"], "a": 0, "e": "3725 % 3600 = 125 → 125 / 60 = 2 (pembagian int).", "t": 3},
 {"q": "<code>total = 3725; detik = total % 60;</code> Nilai detik adalah…", "o": ["5", "25", "62", "0"], "a": 0, "e": "3725 = 62 × 60 + 5 → sisa 5.", "t": 3},
 {"q": "Untuk membaca string ke <code>char nama[50]</code> dengan scanf, ditulis…", "o": ["scanf(\"%s\", nama);", "scanf(\"%s\", &&nama);", "scanf(nama);", "scanf(\"%c\", nama);"], "a": 0, "e": "scanf butuh &, kecuali array string. Nama array sudah berupa alamat.", "t": 3},
 {"q": "Fungsi <code>printf</code> digunakan untuk…", "o": ["Menampilkan teks terformat", "Membaca input", "Membaca satu baris berspasi", "Mengalokasikan memori"], "a": 0, "e": "printf = output terformat · scanf = input · fgets = baca satu baris.", "t": 3},
 {"q": "Hasil <code>10 % 3</code> adalah…", "o": ["1", "3", "3.33", "0"], "a": 0, "e": "10 = 3 × 3 + 1 → sisa 1.", "t": 4},
 {"q": "<code>x = 5; x += 3;</code> Nilai x sekarang…", "o": ["8", "5", "3", "15"], "a": 0, "e": "x += 3 sama dengan x = x + 3 → 8.", "t": 4},
 {"q": "Dengan a = 3 dan b = −1, nilai <code>(a &gt; 0) &amp;&amp; (b &gt; 0)</code> adalah…", "o": ["0", "1", "3", "−1"], "a": 0, "e": "a>0 benar (1), b>0 salah (0). AND → 0.", "t": 4},
 {"q": "Dengan rumus kabisat <code>(th%4==0 &amp;&amp; th%100!=0) || th%400==0</code>, tahun 1900 adalah…", "o": ["Bukan kabisat (hasil 0)", "Kabisat (hasil 1)", "Error", "Tergantung compiler"], "a": 0, "e": "1900 habis dibagi 100 dan tidak habis dibagi 400 → bukan kabisat.", "t": 4},
 {"q": "Hasil <code>(7 &gt; 3) ? 10 : 20</code> adalah…", "o": ["10", "20", "7", "1"], "a": 0, "e": "Ternary: kondisi benar → nilai pertama (10).", "t": 4},
 {"q": "Hasil <code>9 / 2 * 2</code> (semua int) adalah…", "o": ["8", "9", "9.0", "4"], "a": 0, "e": "9/2 = 4 (pecahan dibuang), 4 × 2 = 8.", "t": 4},
 {"q": "Nilai <code>!0</code> di C adalah…", "o": ["1", "0", "−1", "Error"], "a": 0, "e": "0 = salah. NOT salah = benar = 1.", "t": 4},
 {"q": "<code>x = 2; switch(x){ case 1: printf(\"A\"); case 2: printf(\"B\"); case 3: printf(\"C\"); break; default: printf(\"D\"); }</code> Outputnya…", "o": ["BC", "B", "BCD", "ABC"], "a": 0, "e": "Masuk case 2, tanpa break jatuh (fall-through) ke case 3, lalu break → BC.", "t": 5},
 {"q": "Bagian <code>default</code> pada switch dijalankan ketika…", "o": ["Nilai tidak cocok dengan case mana pun", "Selalu dijalankan pertama", "Ada break", "Nilainya 0"], "a": 0, "e": "default = penanganan nilai yang tidak dikenal.", "t": 5},
 {"q": "Pada studi kasus tiket, jika <code>umur &lt;= 59</code> dicek paling awal, anak umur 3 tahun mendapat tarif…", "o": ["Rp 25.000", "Rp 0", "Rp 15.000", "Rp 10.000"], "a": 0, "e": "3 ≤ 59 sudah benar di cabang pertama → 25.000. Makanya urutan kondisi penting.", "t": 5},
 {"q": "Studi kasus tiket: 4 orang, hari Minggu, umur 3/10/30/65 (tarif 0/15rb/25rb/10rb, weekend +20%). Totalnya…", "o": ["Rp 60.000", "Rp 50.000", "Rp 54.000", "Rp 72.000"], "a": 0, "e": "0 + 15rb + 25rb + 10rb = 50rb × 1,2 = 60rb. Kurang dari 10 orang → tanpa diskon.", "t": 5},
 {"q": "Studi kasus tiket: 10 orang umur 20, hari Selasa, diskon 10% jika ≥ 10 orang. Totalnya…", "o": ["Rp 225.000", "Rp 250.000", "Rp 270.000", "Rp 200.000"], "a": 0, "e": "10 × 25rb = 250rb × 0,9 = 225rb.", "t": 5},
 {"q": "Nilai akhir = 0.2·tugas + 0.3·uts + 0.5·uas. Tugas 80, UTS 70, UAS 90 (A ≥ 85, B ≥ 70). Grade-nya…", "o": ["B (nilai 82)", "A (nilai 85)", "B (nilai 80)", "C (nilai 70)"], "a": 0, "e": "16 + 21 + 45 = 82 → 70 ≤ 82 < 85 → B.", "t": 5},
 {"q": "Pada rantai if–else if, validasi rentang (nilai &lt; 0 atau &gt; 100) sebaiknya diletakkan…", "o": ["Paling awal", "Paling akhir", "Di tengah", "Tidak perlu"], "a": 0, "e": "Validasi di awal agar nilai tidak valid tidak ikut mendapat grade.", "t": 5},
 {"q": "<code>for(i=0; i&lt;5; i++)</code> menjalankan badan loop sebanyak…", "o": ["5 kali", "4 kali", "6 kali", "0 kali"], "a": 0, "e": "i = 0,1,2,3,4 → 5 kali.", "t": 6},
 {"q": "Jika kondisi <code>while</code> sudah salah sejak awal, badan loop dijalankan…", "o": ["0 kali", "1 kali", "Selamanya", "2 kali"], "a": 0, "e": "while cek di awal → bisa 0 kali. do-while minimal 1 kali.", "t": 6},
 {"q": "Keyword <code>continue</code> dalam loop berfungsi…", "o": ["Melompat ke iterasi berikutnya", "Keluar dari loop", "Menghentikan program", "Mengulang dari awal program"], "a": 0, "e": "continue = lompat ke iterasi berikutnya. break = keluar loop.", "t": 6},
 {"q": "<code>jumlah = 0; for(i=1; i&lt;=10; i++) jumlah += i;</code> Nilai jumlah…", "o": ["55", "45", "50", "10"], "a": 0, "e": "1 + 2 + … + 10 = 55.", "t": 6},
 {"q": "Pada program soal HOTS 4 (<code>for(i=1;i&lt;=10;i+=2)</code>, cetak “habis dibagi 3” jika i%3==0), baris itu muncul…", "o": ["2 kali (i = 3 dan 9)", "3 kali", "1 kali", "5 kali"], "a": 0, "e": "i ganjil: 1,3,5,7,9 → yang habis dibagi 3 hanya 3 dan 9.", "t": 6},
 {"q": "Jika program soal HOTS 4 diubah jadi <code>i++</code>, baris “habis dibagi 3” muncul…", "o": ["3 kali (3, 6, 9)", "2 kali", "5 kali", "10 kali"], "a": 0, "e": "i = 1..10 → 3, 6, 9.", "t": 6},
 {"q": "Membuat pola segitiga bintang atau tabel perkalian biasanya memakai…", "o": ["Perulangan bersarang", "switch-case", "Satu if saja", "Fungsi rekursif wajib"], "a": 0, "e": "Pola/tabel = loop di dalam loop (nested).", "t": 6},
 {"q": "Simbol persegi panjang pada flowchart berfungsi untuk…", "o": ["Proses (perhitungan/assignment)", "Input/Output", "Keputusan", "Terminal"], "a": 0, "e": "Persegi = proses. Jajar genjang = I/O.", "t": 7},
 {"q": "Simbol lingkaran kecil pada flowchart adalah…", "o": ["Konektor (penghubung di halaman yang sama)", "Terminal", "Proses", "Keputusan"], "a": 0, "e": "Lingkaran = konektor.", "t": 7},
 {"q": "Kesalahan flowchart: “Input nilai” digambar dengan persegi panjang. Seharusnya memakai…", "o": ["Jajar genjang (I/O)", "Belah ketupat", "Oval", "Lingkaran"], "a": 0, "e": "Input/output → jajar genjang.", "t": 7},
 {"q": "Flowchart if–else yang benar harus…", "o": ["Kedua cabang bertemu dan berakhir di satu terminal Selesai", "Cabang boleh menggantung", "Tanpa terminal Mulai", "Memakai oval untuk kondisi"], "a": 0, "e": "Semua cabang harus berakhir di satu Selesai.", "t": 7},
 {"q": "Pada <code>int contoh[5]</code>, mengakses <code>contoh[5]</code> berarti…", "o": ["Di luar batas array (out of bounds)", "Elemen terakhir", "Elemen pertama", "Elemen ke-6 yang valid"], "a": 0, "e": "Indeks valid 0–4. Indeks 5 di luar batas.", "t": 8},
 {"q": "Elemen pertama array diakses dengan indeks…", "o": ["0", "1", "−1", "Sesuai ukuran"], "a": 0, "e": "Indeks array C dimulai dari 0.", "t": 8},
 {"q": "<code>int m[2][3]</code> adalah matriks dengan…", "o": ["2 baris, 3 kolom (6 elemen)", "3 baris, 2 kolom (5 elemen)", "2 elemen", "23 elemen"], "a": 0, "e": "m[baris][kolom] → 2 × 3 = 6.", "t": 8},
 {"q": "Mengapa memakai array untuk menyimpan 1000 nilai sejenis?", "o": ["Tidak praktis membuat 1000 variabel terpisah", "Array lebih lambat", "Array bisa campur tipe", "Wajib di C"], "a": 0, "e": "Array menyimpan banyak nilai sejenis dalam satu nama.", "t": 8},
 {"q": "<code>int tambah(int a, int b){ return a + b; }</code> Hasil <code>tambah(3, 4)</code> adalah…", "o": ["7", "34", "12", "1"], "a": 0, "e": "a = 3, b = 4 → return 7.", "t": 9},
 {"q": "Prototype fungsi adalah…", "o": ["Deklarasi fungsi yang ditulis di atas main", "Isi badan fungsi", "Nilai keluaran fungsi", "Parameter fungsi"], "a": 0, "e": "Prototype = deklarasi di atas main supaya fungsi bisa dipanggil sebelum didefinisikan.", "t": 9},
 {"q": "Fungsi diibaratkan “kotak gelap” karena…", "o": ["Isi dalamnya privat, hanya diakses lewat parameter & return value", "Tidak bisa dipanggil", "Selalu mengembalikan 0", "Tidak punya nama"], "a": 0, "e": "Bagian lain program hanya berinteraksi lewat parameter & return.", "t": 9},
 {"q": "Binary search pada {3, 8, 12, 20, 25, 31, 40} mencari 31. Berapa elemen yang dibandingkan sampai ketemu?", "o": ["2 (20, lalu 31)", "1", "4", "6"], "a": 0, "e": "bawah=0, atas=6 → tengah 3 (20) < 31 → bawah=4 → tengah (4+6)/2 = 5 → 31 ketemu.", "t": 10},
 {"q": "Cara kerja binary search diibaratkan seperti…", "o": ["Mencari nama di buku telepon: buka tengah dulu", "Membaca buku dari halaman 1", "Antrean kasir", "Menumpuk piring"], "a": 0, "e": "Buka tengah, lalu persempit setengah tiap langkah.", "t": 10},
 {"q": "Sequential search paling cocok dipakai saat…", "o": ["Data sedikit atau belum terurut", "Data sangat besar dan terurut", "Data harus dibagi dua", "Data berbentuk matriks saja"], "a": 0, "e": "Sequential tidak butuh data urut, tapi lambat untuk data besar.", "t": 10},
 {"q": "Pada binary search, jika elemen yang dicari lebih kecil dari elemen tengah, maka…", "o": ["Pencarian dilanjutkan ke bagian kiri", "Pencarian dilanjutkan ke kanan", "Pencarian berhenti", "Mulai dari awal"], "a": 0, "e": "Lebih kecil → kiri (atas = tengah − 1). Lebih besar → kanan.", "t": 10},
 {"q": "Enqueue 5, 7, 9 ke queue kosong, lalu dequeue 2 kali. Elemen di FRONT sekarang…", "o": ["9", "5", "7", "Kosong"], "a": 0, "e": "FIFO: 5 lalu 7 keluar → tinggal 9.", "t": 11},
 {"q": "Saat queue kosong, FRONT dan REAR menunjuk ke…", "o": ["NULL", "Indeks 0", "Elemen terakhir", "Elemen pertama"], "a": 0, "e": "Queue kosong → FRONT & REAR = NULL.", "t": 11},
 {"q": "Implementasi queue yang lebih fleksibel (tidak perlu tahu ukuran maksimal) memakai…", "o": ["Linked list", "Array statis", "Matriks", "Konstanta"], "a": 0, "e": "Array harus tahu ukuran maksimal. Linked list fleksibel.", "t": 11},
 {"q": "Struktur data dengan prinsip LIFO (Last In First Out) adalah…", "o": ["Stack", "Queue", "Array", "Binary search"], "a": 0, "e": "Stack = LIFO (seperti tumpukan piring). Queue = FIFO.", "t": 11},

 /* Searching lengkap */
 {q:"Sequential search mencari 3 pada {7, 3, 9, 3, 5} dengan kode <code>if (a[i] == x) return i;</code>. Nilai yang dikembalikan…",o:["1","3","2","−1"],a:0,e:"Loop dari indeks 0 dan langsung return di kemunculan PERTAMA: a[1] = 3 → return 1.",t:10},
 {q:"Sequential search pada 100 data, kasus terburuk membutuhkan … perbandingan.",o:["100","50","7","1"],a:0,e:"Terburuk: data ada di paling akhir atau tidak ada → semua 100 dicek. O(n).",t:10},
 {q:"Fungsi searching biasanya mengembalikan −1 jika data tidak ditemukan karena…",o:["−1 bukan indeks array yang valid (indeks mulai 0)","−1 artinya data ada di akhir","Wajib di bahasa C","Agar loop berhenti"],a:0,e:"Indeks valid 0 … n−1, jadi −1 aman dipakai sebagai tanda 'tidak ketemu'.",t:10},
 {q:"Binary search pada {2, 5, 8, 12, 16, 23, 38, 56, 72, 91} mencari 23. Elemen tengah yang dibandingkan berturut-turut adalah…",o:["16, 56, 23","16, 23","12, 23","2, 5, 8, 12, 16, 23"],a:0,e:"bawah=0, atas=9 → tengah 4 (16) < 23 → bawah=5 · tengah (5+9)/2=7 (56) > 23 → atas=6 · tengah (5+6)/2=5 (23) ketemu.",t:10},
 {q:"Lengkapi binary search: <code>else if (x &lt; a[tengah]) ______;</code>",o:["atas = tengah - 1","bawah = tengah + 1","atas = tengah + 1","tengah = tengah - 1"],a:0,e:"x lebih kecil → cari di bagian KIRI, jadi batas atas digeser: atas = tengah − 1.",t:10},
 {q:"Kondisi perulangan binary search yang benar adalah…",o:["while (bawah <= atas)","while (bawah < n)","while (tengah != x)","while (atas > 0)"],a:0,e:"Pencarian lanjut selama rentang masih ada (bawah ≤ atas). Kalau bawah > atas → tidak ketemu.",t:10},
 {q:"1000 data terurut dicari dengan binary search. Paling banyak sekitar … perbandingan.",o:["10","500","1000","100"],a:0,e:"Tiap langkah membuang setengah: 1000 → 500 → 250 → … → 1, sekitar 10 langkah (2¹⁰ = 1024). O(log n).",t:10},
 {q:"Pada sequential search dengan sentinel, sentinel adalah…",o:["Data yang dicari, ditaruh di ujung array supaya loop pasti berhenti","Elemen tengah array","Indeks −1","Variabel penghitung"],a:0,e:"Sentinel = penjaga. Karena data pasti 'ketemu' di ujung, loop tak perlu cek i < n. Berhenti di posisi sentinel = tidak ketemu.",t:10},
 {q:"Interpolation search cocok untuk data yang…",o:["Terurut dan nilainya tersebar merata","Belum terurut","Berisi huruf saja","Ukurannya sangat kecil"],a:0,e:"Posisi ditebak pakai proporsi nilai (seperti buka kamus). Butuh data terurut & merata.",t:10},
 {q:"Jump search melompat sejauh … elemen tiap langkah.",o:["√n","n/2","1","log n"],a:0,e:"Lompat per √n sampai kelewatan, lalu sequential di blok tersebut → O(√n).",t:10},

 /* Sorting dasar */
 {q:"Data {5, 3, 8, 1, 4} diurutkan ascending dengan <b>bubble sort</b>. Hasil setelah pass pertama…",o:["3 5 1 4 8","1 3 8 5 4","3 5 8 1 4","1 3 4 5 8"],a:0,e:"5↔3 → 3 5 8 1 4 · 5,8 tetap · 8↔1 → 3 5 1 8 4 · 8↔4 → 3 5 1 4 8. Yang terbesar (8) sudah di kanan.",t:12},
 {q:"Data {5, 3, 8, 1, 4} diurutkan ascending dengan <b>selection sort</b>. Hasil setelah pass pertama…",o:["1 3 8 5 4","3 5 1 4 8","3 5 8 1 4","1 5 3 8 4"],a:0,e:"Minimum seluruh array = 1 (indeks 3), ditukar dengan a[0] = 5 → 1 3 8 5 4.",t:12},
 {q:"Data {5, 3, 8, 1, 4} diurutkan ascending dengan <b>insertion sort</b>. Hasil setelah nilai 1 (elemen ke-4) disisipkan…",o:["1 3 5 8 4","1 5 3 8 4","3 5 1 4 8","1 3 4 5 8"],a:0,e:"3 5 8 1 4 → 3 5 8 1 4 → 1 disisipkan paling depan (geser 8, 5, 3) → 1 3 5 8 4.",t:12},
 {q:"Berapa kali pertukaran terjadi saat bubble sort ascending pada {5, 3, 8, 1, 4} sampai urut?",o:["6","4","3","10"],a:0,e:"Pass 1: 3 tukar · pass 2: 2 tukar · pass 3: 1 tukar · pass 4: 0 → total 6.",t:12},
 {q:"Pada bubble sort ascending, setelah pass pertama selesai, elemen <b>terbesar</b> berada di…",o:["Paling kanan (indeks terakhir)","Paling kiri","Tengah array","Belum pasti"],a:0,e:"Elemen terbesar terus ditukar ke kanan ('menggelembung'), jadi setelah pass 1 pasti di indeks n−1.",t:12},
 {q:"Untuk 6 data, bubble sort membutuhkan paling banyak … pass.",o:["5","6","3","36"],a:0,e:"n data → n − 1 pass. Setelah itu elemen terkecil otomatis tersisa di depan.",t:12},
 {q:"Pada loop dalam bubble sort <code>for (j = 0; j &lt; n - 1 - i; j++)</code>, gunanya <code>- i</code> adalah…",o:["i elemen terakhir sudah di posisi akhir, tak perlu dibandingkan lagi","Supaya loop tidak pernah berhenti","Agar hasilnya descending","Untuk menukar elemen"],a:0,e:"Tiap pass mengunci satu elemen terbesar di kanan. Setelah i pass, i elemen terakhir sudah fix.",t:12},
 {q:"Lengkapi kode tukar: <code>temp = a[j]; a[j] = a[j+1]; ______;</code>",o:["a[j+1] = temp","a[j] = temp","temp = a[j+1]","a[j+1] = a[j]"],a:0,e:"Tukar 3 langkah: simpan a[j] ke temp, timpa a[j] dengan a[j+1], lalu isi a[j+1] dengan temp.",t:12},
 {q:"Agar bubble sort menghasilkan urutan <b>descending</b> (besar → kecil), kondisi <code>if</code> diubah menjadi…",o:["if (a[j] < a[j+1])","if (a[j] > a[j+1])","if (a[j] == a[j+1])","if (a[j] >= a[j+1])"],a:0,e:"Tukar kalau kiri LEBIH KECIL dari kanan → yang besar pindah ke kiri → descending.",t:12},
 {q:"Lengkapi selection sort: <code>if (a[j] &lt; a[min]) ______;</code>",o:["min = j","min = a[j]","a[min] = a[j]","j = min"],a:0,e:"min menyimpan INDEKS elemen terkecil, bukan nilainya. Tukar baru dilakukan setelah loop dalam selesai.",t:12},
 {q:"Pada insertion sort, setelah loop <code>while</code> (geser) selesai, baris yang tepat adalah…",o:["a[j + 1] = key;","a[j] = key;","a[i] = key;","key = a[j + 1];"],a:0,e:"Loop berhenti di j yang a[j] ≤ key (atau j = −1), jadi celah kosongnya ada di j + 1.",t:12},
 {q:"Algoritma sorting yang cara kerjanya mirip menyusun kartu remi di tangan adalah…",o:["Insertion sort","Bubble sort","Selection sort","Quick sort"],a:0,e:"Ambil satu kartu, sisipkan ke posisi yang tepat di antara kartu yang sudah urut.",t:12},
 {q:"Sorting yang setiap pass-nya paling banyak melakukan <b>satu</b> kali pertukaran adalah…",o:["Selection sort","Bubble sort","Insertion sort","Shell sort"],a:0,e:"Selection: cari minimum dulu, baru tukar sekali di akhir pass. Total tukar ≤ n − 1.",t:12},
 {q:"Bubble sort versi <b>flag</b> (berhenti jika satu pass tidak ada pertukaran) pada data yang sudah urut membutuhkan…",o:["1 pass → O(n)","n − 1 pass","0 pass","n² pass"],a:0,e:"Pass pertama tidak ada tukar → flag tetap 'sudah urut' → berhenti. Best case O(n).",t:12},
 {q:"Kompleksitas waktu rata-rata bubble, selection, dan insertion sort adalah…",o:["O(n²)","O(n log n)","O(log n)","O(n)"],a:0,e:"Ketiganya memakai dua loop bersarang → O(n²). Cocok untuk data kecil.",t:12},

 /* Sorting lanjutan */
 {q:"Shell sort dengan n = 8 memakai gap (jarak) berturut-turut…",o:["4, 2, 1","8, 4, 2","2, 4, 8","3, 2, 1"],a:0,e:"Gap awal n/2 = 4, lalu dibagi 2 terus: 2, lalu 1. Gap terakhir selalu 1.",t:13},
 {q:"Shell sort ascending pada {8, 5, 3, 9, 1, 6, 2, 7}. Hasil setelah putaran gap 4…",o:["1 5 2 7 8 6 3 9","1 2 3 5 6 7 8 9","5 3 8 1 6 2 7 9","1 5 2 6 3 7 8 9"],a:0,e:"Pasangan berjarak 4: (8,1) tukar · (5,6) tetap · (3,2) tukar · (9,7) tukar → 1 5 2 7 8 6 3 9.",t:13},
 {q:"Shell sort merupakan pengembangan dari…",o:["Insertion sort","Bubble sort","Merge sort","Binary search"],a:0,e:"Shell sort = insertion sort dengan jarak (gap) yang makin mengecil sampai 1.",t:13},
 {q:"Prinsip yang dipakai merge sort dan quick sort adalah…",o:["Divide and conquer","Brute force","Greedy","Sequential"],a:0,e:"Masalah dibagi jadi bagian kecil, diselesaikan, lalu digabung.",t:13},
 {q:"Merge sort: menggabungkan {3, 27, 38} dan {9, 10, 43} menghasilkan…",o:["3 9 10 27 38 43","3 27 38 9 10 43","9 10 43 3 27 38","3 9 27 10 38 43"],a:0,e:"Merge: bandingkan elemen terdepan kedua bagian, ambil yang lebih kecil, ulangi.",t:13},
 {q:"Kelemahan utama merge sort adalah…",o:["Butuh memori tambahan (array sementara)","Selalu O(n²)","Tidak bisa mengurutkan angka negatif","Tidak stabil"],a:0,e:"Merge sort selalu O(n log n) dan stabil, tapi butuh array bantu untuk proses penggabungan.",t:13},
 {q:"Quick sort pada {7, 2, 9, 4, 3} dengan pivot = 3 (elemen terakhir). Hasil setelah partisi pertama…",o:["2 3 9 4 7","2 3 4 7 9","3 2 9 4 7","7 2 9 4 3"],a:0,e:"Yang ≤ 3 (cuma 2) ke kiri, pivot ditaruh setelahnya, sisanya di kanan: 2 3 9 4 7. Bagian kanan belum urut.",t:13},
 {q:"Quick sort mencapai kasus terburuk O(n²) ketika…",o:["Pivot selalu elemen terkecil/terbesar (mis. data sudah urut dan pivot di ujung)","Data acak","Pivot elemen tengah","Data sedikit"],a:0,e:"Partisi jadi tidak seimbang (0 dan n−1 elemen), sehingga butuh n tingkat rekursi.",t:13},
 {q:"Algoritma sorting berikut yang <b>tidak stabil</b> adalah…",o:["Selection sort","Bubble sort","Insertion sort","Merge sort"],a:0,e:"Tidak stabil: selection, shell, quick, heap. Stabil: bubble, insertion, merge.",t:13},
 {q:"Algoritma sorting yang kompleksitasnya <b>selalu</b> O(n log n) (terbaik, rata-rata, terburuk) adalah…",o:["Merge sort","Quick sort","Bubble sort","Insertion sort"],a:0,e:"Merge selalu membagi dua sama besar → O(n log n). Quick bisa jatuh ke O(n²).",t:13},
 {q:"Sorting yang membandingkan elemen ke-i dengan <b>semua</b> elemen sesudahnya lalu menukar jika salah urutan disebut…",o:["Exchange sort","Insertion sort","Merge sort","Shell sort"],a:0,e:"Exchange sort mirip bubble, bedanya pembanding tetap di posisi i (bukan tetangga).",t:13},

 /* Soal kode: tebak output & isi yang kosong */
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {4, 2, 7, 1, 3};\nint i, j, temp;\nfor (i = 0; i &lt; 2; i++)\n    for (j = 0; j &lt; 4 - i; j++)\n        if (a[j] &gt; a[j+1]) {\n            temp = a[j]; a[j] = a[j+1]; a[j+1] = temp;\n        }\nfor (i = 0; i &lt; 5; i++) printf(\"%d \", a[i]);</pre>",o:["2 1 3 4 7","1 2 3 4 7","2 4 1 3 7","7 4 3 2 1"],a:0,e:"Loop luar cuma 2 pass. Pass 1 → 2 4 1 3 7. Pass 2 → 2 1 3 4 7. Belum urut sempurna.",t:14},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {3, 9, 4, 1, 6};\nint i, j, temp;\nfor (i = 0; i &lt; 4; i++)\n    for (j = 0; j &lt; 4 - i; j++)\n        if (a[j] &lt; a[j+1]) {\n            temp = a[j]; a[j] = a[j+1]; a[j+1] = temp;\n        }\nprintf(\"%d %d\", a[0], a[4]);</pre>",o:["9 1","1 9","3 6","9 6"],a:0,e:"Kondisi < → descending: 9 6 4 3 1. a[0] = 9, a[4] = 1.",t:14},
 {q:"Lengkapi kode agar menjadi bubble sort ascending yang benar:<pre class=\"code\">for (i = 0; i &lt; n - 1; i++)\n    for (j = 0; j &lt; ______; j++)\n        if (a[j] &gt; a[j+1]) { ... }</pre>",o:["n - 1 - i","n","i","n + 1"],a:0,e:"j + 1 harus tetap < n dan i elemen terakhir sudah fix → j < n − 1 − i. Pakai n akan mengakses a[n] (di luar batas).",t:14},
 {q:"Lengkapi insertion sort:<pre class=\"code\">key = a[i];\nj = i - 1;\nwhile (j &gt;= 0 &amp;&amp; ______) {\n    a[j + 1] = a[j];\n    j--;\n}\na[j + 1] = key;</pre>",o:["a[j] > key","a[j] < key","a[i] > key","j > key"],a:0,e:"Geser ke kanan selama elemen kiri LEBIH BESAR dari key (ascending).",t:14},
 {q:"Lengkapi binary search:<pre class=\"code\">while (bawah &lt;= atas) {\n    tengah = ______;\n    ...\n}</pre>",o:["(bawah + atas) / 2","(atas - bawah) * 2","bawah + atas","n / 2"],a:0,e:"Indeks tengah = (bawah + atas) / 2, pembagian int dibulatkan ke bawah.",t:14},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[6] = {12, 7, 25, 7, 3, 18};\nint i, pos = -1;\nfor (i = 0; i &lt; 6; i++)\n    if (a[i] == 7) pos = i;\nprintf(\"%d\", pos);</pre>",o:["3","1","−1","7"],a:0,e:"Tidak ada break/return, jadi pos terus ditimpa: i=1 → pos=1, i=3 → pos=3. Yang tersisa kemunculan TERAKHIR = 3.",t:14},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {6, 2, 9, 4, 5};\nint i, j, min, temp;\nfor (i = 0; i &lt; 2; i++) {\n    min = i;\n    for (j = i + 1; j &lt; 5; j++)\n        if (a[j] &lt; a[min]) min = j;\n    temp = a[i]; a[i] = a[min]; a[min] = temp;\n}\nfor (i = 0; i &lt; 5; i++) printf(\"%d \", a[i]);</pre>",o:["2 4 9 6 5","2 4 5 6 9","2 6 9 4 5","2 9 6 4 5"],a:0,e:"Selection 2 pass. Pass 1: min 2 ↔ 6 → 2 6 9 4 5. Pass 2: min sisa = 4 ↔ 6 → 2 4 9 6 5.",t:14},
 {q:"Pada soal 'isi kode kosong' selection sort, baris yang tepat di awal setiap pass (sebelum loop dalam) adalah…",o:["min = i;","min = 0;","min = a[i];","min = n;"],a:0,e:"Tiap pass, anggap dulu elemen di posisi i yang terkecil (simpan indeksnya).",t:14},

 /* Library / header file C */
 {q:"Fungsi printf dan scanf berasal dari header file…",o:["stdio.h","stdlib.h","string.h","conio.h"],a:0,e:"stdio.h = standard input output: printf, scanf, puts, gets/fgets, getchar, putchar.",t:15},
 {q:"Perbedaan <code>#include &lt;stdio.h&gt;</code> dan <code>#include \"hitung.h\"</code> adalah…",o:["< > untuk library standar, \" \" untuk header buatan sendiri","Tidak ada bedanya","< > untuk C++, \" \" untuk C","\" \" hanya untuk stdio"],a:0,e:"< > dicari di folder library compiler; \" \" dicari di folder project dulu (file buatan sendiri).",t:15},
 {q:"Fungsi untuk menghitung panjang string ada di header…",o:["string.h","stdio.h","math.h","ctype.h"],a:0,e:"strlen, strcpy, strcat, strcmp ada di string.h.",t:15},
 {q:"<code>printf(\"%d\", strlen(\"Halo\"));</code> mencetak…",o:["4","5","3","Halo"],a:0,e:"strlen menghitung karakter tanpa '\\0' penutup → H-a-l-o = 4.",t:15},
 {q:"<code>strcmp(\"abc\", \"abc\")</code> menghasilkan…",o:["0","1","−1","true"],a:0,e:"strcmp mengembalikan 0 kalau kedua string SAMA. Bukan 1!",t:15},
 {q:"Untuk menyalin string b ke a, cara yang benar adalah…",o:["strcpy(a, b);","a = b;","strcat(a, b);","strcmp(a, b);"],a:0,e:"Array string tidak bisa di-assign dengan =. Pakai strcpy dari string.h. strcat = menyambung.",t:15},
 {q:"Fungsi pow, sqrt, ceil, dan floor berasal dari header…",o:["math.h","stdlib.h","stdio.h","ctype.h"],a:0,e:"math.h. Semua hasilnya bertipe double.",t:15},
 {q:"<code>printf(\"%f\", sqrt(16));</code> mencetak…",o:["4.000000","4","16.000000","4.0"],a:0,e:"sqrt menghasilkan double; %f default 6 angka di belakang koma → 4.000000.",t:15},
 {q:"<code>printf(\"%.0f\", pow(2, 5));</code> mencetak…",o:["32","10","25","7"],a:0,e:"pow(2, 5) = 2⁵ = 32 (double). %.0f = tanpa angka desimal.",t:15},
 {q:"Hasil <code>ceil(4.2)</code> dan <code>floor(4.8)</code> berturut-turut…",o:["5.0 dan 4.0","4.0 dan 5.0","4.0 dan 4.0","5.0 dan 5.0"],a:0,e:"ceil = bulat ke ATAS (4.2 → 5). floor = bulat ke BAWAH (4.8 → 4).",t:15},
 {q:"Fungsi toupper, tolower, isdigit, dan isalpha ada di header…",o:["ctype.h","string.h","stdlib.h","math.h"],a:0,e:"ctype.h = cek & ubah satu karakter.",t:15},
 {q:"<code>printf(\"%c\", toupper('g'));</code> mencetak…",o:["G","g","71","error"],a:0,e:"toupper mengubah huruf kecil jadi besar → 'G'.",t:15},
 {q:"Fungsi malloc, free, rand, atoi, dan exit berasal dari header…",o:["stdlib.h","stdio.h","string.h","time.h"],a:0,e:"stdlib.h = standard library: memori dinamis, angka acak, konversi string, exit, system.",t:15},
 {q:"<code>rand() % 6</code> menghasilkan angka acak dalam rentang…",o:["0 sampai 5","1 sampai 6","0 sampai 6","1 sampai 5"],a:0,e:"Sisa bagi 6 selalu 0–5. Untuk 1–6 pakai rand() % 6 + 1.",t:15},
 {q:"<code>atoi(\"250\") + 5</code> bernilai…",o:["255","2505","\"2505\"","error"],a:0,e:"atoi mengubah string \"250\" jadi int 250, lalu + 5 = 255.",t:15},
 {q:"Agar angka acak dari rand() berbeda setiap program dijalankan, dipakai…",o:["srand(time(NULL)) dengan time.h","system(\"cls\")","getch()","strlen()"],a:0,e:"srand menanam seed; time(NULL) dari time.h membuat seed beda tiap detik.",t:15},
 {q:"Fungsi getch() dan clrscr() berasal dari header…",o:["conio.h","stdio.h","stdlib.h","string.h"],a:0,e:"conio.h (console I/O), khas Turbo C / Windows, BUKAN bagian standar C.",t:15},
 {q:"Fungsi untuk membaca SATU karakter dari keyboard yang ada di stdio.h adalah…",o:["getchar()","getch()","gets()","puts()"],a:0,e:"getchar() dari stdio.h (perlu Enter). getch() dari conio.h (tanpa Enter, tidak standar).",t:15},
 {q:"Header <code>&lt;iostream&gt;</code> (cout, cin) adalah milik bahasa…",o:["C++","C","Java","Python"],a:0,e:"iostream itu C++. Di C, input-output pakai stdio.h (printf, scanf).",t:15},
 {q:"Baris <code>#include</code> diproses pada tahap…",o:["Preprocessor (sebelum kompilasi)","Linker","Saat program dijalankan","Setelah return 0"],a:0,e:"Alur: kode.c → preprocessor (proses #include & #define) → compiler → linker → program.",t:15},

 /* Teori jenis algoritma & analogi */
 {q:"Sorting yang mengurutkan dari nilai terbesar ke terkecil disebut…",o:["Descending","Ascending","Searching","Merging"],a:0,e:"Descending = besar → kecil. Ascending = kecil → besar.",t:12},
 {q:"Yang dimaksud satu <b>pass</b> pada sorting adalah…",o:["Satu putaran penuh loop luar (satu kali menelusuri data)","Satu kali pertukaran","Satu elemen array","Satu kali printf"],a:0,e:"Pass = satu putaran loop luar. Dalam satu pass bisa terjadi beberapa pertukaran.",t:12},
 {q:"Sorting <b>internal</b> berbeda dengan sorting <b>eksternal</b> karena…",o:["Internal: semua data muat di memori utama (RAM); eksternal: data terlalu besar, sebagian di media penyimpanan","Internal lebih lambat","Eksternal hanya untuk huruf","Tidak ada bedanya"],a:0,e:"Bubble/selection/insertion pada array = sorting internal. Data raksasa di disk butuh sorting eksternal (biasanya berbasis merge).",t:12},
 {q:"Algoritma searching yang WAJIB memakai data terurut adalah…",o:["Binary search","Sequential search","Sentinel search","Semua searching"],a:0,e:"Binary (juga interpolation & jump) butuh data terurut. Sequential tidak.",t:10},
 {q:"Kelompok algoritma berikut yang semuanya termasuk algoritma <b>sorting</b> adalah…",o:["Bubble, Selection, Insertion, Shell","Sequential, Binary, Bubble, Queue","Binary, Interpolation, Jump","Stack, Queue, Array"],a:0,e:"Sorting: bubble, selection, insertion, shell, merge, quick, heap. Searching: sequential, binary, interpolation, jump.",t:13},
 {q:"Kelompok algoritma berikut yang semuanya termasuk algoritma <b>searching</b> adalah…",o:["Sequential, Binary, Interpolation, Jump","Bubble, Selection, Merge","Quick, Shell, Heap","Push, Pop, Enqueue"],a:0,e:"Searching mencari posisi data; sorting mengurutkan data.",t:10},
 {q:"Perbedaan utama sorting dan searching adalah…",o:["Sorting mengurutkan data; searching mencari letak data","Sorting mencari data; searching mengurutkan","Keduanya sama","Searching hanya untuk huruf"],a:0,e:"Sorting = mengurutkan. Searching = mencari. Data yang sudah di-sort bisa dicari pakai binary search yang lebih cepat.",t:10},
 {q:"Algoritma sorting yang <b>paling sederhana</b> dan biasanya diajarkan pertama, dengan cara menukar elemen bersebelahan, adalah…",o:["Bubble sort","Quick sort","Merge sort","Heap sort"],a:0,e:"Bubble sort: bandingkan & tukar tetangga.",t:12},
 {q:"Sorting yang membagi data menjadi dua bagian berdasarkan sebuah <b>pivot</b> adalah…",o:["Quick sort","Merge sort","Selection sort","Shell sort"],a:0,e:"Quick sort: elemen < pivot di kiri, > pivot di kanan.",t:13},
 {q:"Sorting yang memakai <b>jarak/gap</b> yang makin mengecil adalah…",o:["Shell sort","Bubble sort","Merge sort","Quick sort"],a:0,e:"Shell sort: gap n/2, n/4, …, 1.",t:13},
 {q:"Analogi “menyusun kartu remi di tangan satu per satu” paling tepat untuk…",o:["Insertion sort","Bubble sort","Binary search","Queue"],a:0,e:"Ambil kartu, selipkan ke posisi yang pas di bagian yang sudah urut.",t:12},
 {q:"Analogi “mencari kata di kamus dengan membuka halaman tengah lebih dulu” paling tepat untuk…",o:["Binary search","Sequential search","Selection sort","Stack"],a:0,e:"Buka tengah, buang setengah yang tidak mungkin, ulangi.",t:10},
 {q:"Analogi “gelembung besar naik ke permukaan air” dipakai untuk menjelaskan…",o:["Bubble sort","Quick sort","Queue","Merge sort"],a:0,e:"Elemen terbesar 'menggelembung' ke ujung array tiap pass.",t:12},
 {q:"Analogi “tiap putaran memilih murid paling pendek lalu menaruhnya di barisan depan” paling tepat untuk…",o:["Selection sort","Insertion sort","Bubble sort","Shell sort"],a:0,e:"Pilih (select) minimum, taruh di depan.",t:12},
 {q:"Analogi “tumpukan kertas dibagi dua terus sampai selembar, lalu digabung sambil diurutkan” paling tepat untuk…",o:["Merge sort","Quick sort","Bubble sort","Binary search"],a:0,e:"Divide (bagi dua) lalu merge (gabung terurut).",t:13},
 {q:"Analogi “mencari kunci di laci dengan memeriksa barang satu per satu dari depan” paling tepat untuk…",o:["Sequential search","Binary search","Insertion sort","Stack"],a:0,e:"Periksa berurutan dari awal sampai ketemu.",t:10},
 {q:"Analogi “antre di loket: yang datang duluan dilayani duluan” menggambarkan…",o:["Queue (FIFO)","Stack (LIFO)","Binary search","Bubble sort"],a:0,e:"First In First Out.",t:11},
 {q:"Analogi “tombol Undo: perubahan terakhir dibatalkan duluan” menggambarkan…",o:["Stack (LIFO)","Queue (FIFO)","Sequential search","Merge sort"],a:0,e:"Last In First Out.",t:11},

 /* Bank soal tambahan remedial (kode sudah diuji compile + run) */
 {q:"Output program berikut adalah…<pre class=\"code\">char c = 'A' + 2;\nprintf(\"%c\", c);</pre>",o:["C", "A2", "B", "67"],a:0,e:"Karakter disimpan sebagai angka ASCII: 'A' = 65, +2 = 67 = 'C'.",t:2},
 {q:"Output program berikut adalah…<pre class=\"code\">#define N 5\nint main() {\n    printf(\"%d\", N * N + 1);\n    return 0;\n}</pre>",o:["26", "30", "36", "25"],a:0,e:"#define N 5 mengganti N dengan 5 sebelum kompilasi: 5 × 5 + 1 = 26 (kali dulu baru tambah).",t:2},
 {q:"Output program berikut adalah…<pre class=\"code\">printf(\"%c\", 65);</pre>",o:["A", "65", "a", "error"],a:0,e:"%c mencetak karakter dengan kode ASCII 65 = 'A'.",t:3},
 {q:"Output program berikut adalah…<pre class=\"code\">printf(\"%d\", 'a' - 'A');</pre>",o:["32", "0", "1", "26"],a:0,e:"'a' = 97, 'A' = 65 → 97 − 65 = 32. Selisih huruf kecil dan besar selalu 32.",t:3},
 {q:"Output program berikut adalah…<pre class=\"code\">printf(\"[%5.2f]\", 3.14159);</pre>",o:["[ 3.14]", "[3.14]", "[3.14159]", "[03.14]"],a:0,e:"%5.2f: lebar total 5 karakter, 2 angka di belakang koma. \"3.14\" cuma 4 karakter → ditambah 1 spasi di depan.",t:3},
 {q:"Output program berikut adalah…<pre class=\"code\">int a = 10, b = 3;\nprintf(\"%d %d\", a / b, a % b);</pre>",o:["3 1", "3.33 1", "3 0", "1 3"],a:0,e:"10 / 3 = 3 (int, pecahan dibuang). 10 % 3 = sisa bagi = 1.",t:4},
 {q:"Output program berikut adalah…<pre class=\"code\">int x = 5;\nx += 3;\nx *= 2;\nx -= 4;\nprintf(\"%d\", x);</pre>",o:["12", "16", "6", "8"],a:0,e:"x = 5 → +3 = 8 → ×2 = 16 → −4 = 12.",t:4},
 {q:"Output program berikut adalah…<pre class=\"code\">float f = 7 / 2;\nprintf(\"%.1f\", f);</pre>",o:["3.0", "3.5", "3", "4.0"],a:0,e:"7 / 2 dihitung sebagai int dulu = 3, baru disimpan ke float → 3.0. Supaya 3.5 harus (float)7 / 2.",t:4},
 {q:"Output program berikut adalah…<pre class=\"code\">printf(\"%d\", 2 + 3 * 4 - 6 / 2);</pre>",o:["11", "7", "17", "14"],a:0,e:"Kali dan bagi dulu: 3 × 4 = 12, 6 / 2 = 3. Lalu 2 + 12 − 3 = 11.",t:4},
 {q:"Output program berikut adalah…<pre class=\"code\">int a = 4, b = 7;\nprintf(\"%d %d\", a &gt; b || b &gt; 5, a &gt; b &amp;&amp; b &gt; 5);</pre>",o:["1 0", "0 1", "1 1", "true false"],a:0,e:"|| benar kalau salah satu benar: 0 || 1 = 1. && benar kalau dua-duanya benar: 0 && 1 = 0.",t:4},
 {q:"Output program berikut adalah…<pre class=\"code\">int n = 15;\nif (n % 3 == 0 &amp;&amp; n % 5 == 0)\n    printf(\"FizzBuzz\");\nelse if (n % 3 == 0)\n    printf(\"Fizz\");\nelse\n    printf(\"%d\", n);</pre>",o:["FizzBuzz", "Fizz", "15", "FizzFizzBuzz"],a:0,e:"15 habis dibagi 3 DAN 5 → kondisi pertama benar → FizzBuzz, cabang lain dilewati.",t:5},
 {q:"Output program berikut adalah…<pre class=\"code\">int a = 7;\nif (a &gt; 5) printf(\"A\");\nif (a &gt; 3) printf(\"B\");\nelse printf(\"C\");</pre>",o:["AB", "A", "B", "AC"],a:0,e:"Dua if TERPISAH (bukan else if), jadi dua-duanya dicek: 7 > 5 → A, 7 > 3 → B.",t:5},
 {q:"Output program berikut adalah…<pre class=\"code\">char g = 'B';\nswitch (g) {\n    case 'A': printf(\"4\");\n    case 'B': printf(\"3\");\n    case 'C': printf(\"2\"); break;\n    default:  printf(\"0\");\n}</pre>",o:["32", "3", "320", "4320"],a:0,e:"Masuk di case 'B' → cetak 3. Tidak ada break → jatuh ke case 'C' → cetak 2, lalu break.",t:5},
 {q:"Output program berikut adalah…<pre class=\"code\">int x = 0;\nif (x = 5)\n    printf(\"benar %d\", x);\nelse\n    printf(\"salah %d\", x);</pre>",o:["benar 5", "salah 0", "salah 5", "benar 0"],a:0,e:"Jebakan: x = 5 itu ASSIGNMENT (bukan ==). x jadi 5, dan nilai 5 ≠ 0 dianggap benar.",t:5},
 {q:"Output program berikut adalah…<pre class=\"code\">int i;\nfor (i = 10; i &gt; 0; i -= 3)\n    printf(\"%d \", i);</pre>",o:["10 7 4 1", "10 7 4", "10 7 4 1 -2", "7 4 1"],a:0,e:"i = 10, 7, 4, 1. Berikutnya −2 > 0 salah → berhenti.",t:6},
 {q:"Output program berikut adalah…<pre class=\"code\">int i = 1, s = 0;\nwhile (i &lt;= 5) {\n    s += i * i;\n    i++;\n}\nprintf(\"%d\", s);</pre>",o:["55", "15", "25", "30"],a:0,e:"s = 1 + 4 + 9 + 16 + 25 = 55 (jumlah kuadrat 1 sampai 5).",t:6},
 {q:"Output program berikut adalah…<pre class=\"code\">int i, j;\nfor (i = 1; i &lt;= 3; i++) {\n    for (j = 1; j &lt;= i; j++)\n        printf(\"%d\", j);\n    printf(\" \");\n}</pre>",o:["1 12 123", "1 22 333", "123 123 123", "1 2 3"],a:0,e:"Baris ke-i mencetak angka 1 sampai i: 1 · 12 · 123.",t:6},
 {q:"Output program berikut adalah…<pre class=\"code\">int i, f = 1;\nfor (i = 1; i &lt;= 5; i++)\n    f *= i;\nprintf(\"%d\", f);</pre>",o:["120", "15", "24", "720"],a:0,e:"f = 1 × 2 × 3 × 4 × 5 = 120 (faktorial 5).",t:6},
 {q:"Output program berikut adalah…<pre class=\"code\">int x = 0;\ndo {\n    x += 2;\n} while (x &lt; 7);\nprintf(\"%d\", x);</pre>",o:["8", "6", "7", "2"],a:0,e:"x = 2, 4, 6 (masih < 7, ulang), 8 (8 < 7 salah → berhenti). Output 8.",t:6},
 {q:"Output program berikut adalah…<pre class=\"code\">int i, c = 0;\nfor (i = 1; i &lt;= 20; i++)\n    if (i % 4 == 0) c++;\nprintf(\"%d\", c);</pre>",o:["5", "4", "20", "6"],a:0,e:"Kelipatan 4 dari 1–20: 4, 8, 12, 16, 20 → 5.",t:6},
 {q:"Output program berikut adalah…<pre class=\"code\">int i;\nfor (i = 1; i &lt;= 10; i++) {\n    if (i == 4) continue;\n    if (i == 7) break;\n    printf(\"%d\", i);\n}</pre>",o:["12356", "123", "123456", "1235678910"],a:0,e:"i = 4 dilompati (continue), di i = 7 keluar loop (break) → 1 2 3 5 6.",t:6},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[] = {2, 4, 6, 8, 10};\nint i;\nfor (i = 4; i &gt;= 0; i -= 2)\n    printf(\"%d \", a[i]);</pre>",o:["10 6 2", "2 6 10", "10 8 6 4 2", "8 4"],a:0,e:"i = 4, 2, 0 → a[4] = 10, a[2] = 6, a[0] = 2.",t:8},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {1, 2, 3};\nprintf(\"%d %d\", a[2], a[4]);</pre>",o:["3 0", "2 0", "3 3", "3 error"],a:0,e:"Elemen yang tidak diisi saat inisialisasi otomatis 0. a[2] = 3 (indeks mulai 0), a[4] = 0.",t:8},
 {q:"Output program berikut adalah…<pre class=\"code\">int m[2][3] = {{1, 2, 3}, {4, 5, 6}};\nprintf(\"%d\", m[1][2] + m[0][1]);</pre>",o:["8", "7", "9", "5"],a:0,e:"m[1][2] = baris 1 kolom 2 = 6. m[0][1] = 2. Total 8.",t:8},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {1, 2, 3, 4, 5}, i, t;\nfor (i = 0; i &lt; 2; i++) {\n    t = a[i];\n    a[i] = a[4 - i];\n    a[4 - i] = t;\n}\nfor (i = 0; i &lt; 5; i++) printf(\"%d \", a[i]);</pre>",o:["5 4 3 2 1", "1 2 3 4 5", "5 2 3 4 1", "5 4 3 4 5"],a:0,e:"Tukar ujung-ujungnya: a[0]↔a[4], a[1]↔a[3]. a[2] di tengah tetap → array terbalik.",t:8},
 {q:"Output program berikut adalah…<pre class=\"code\">int m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint i, s = 0;\nfor (i = 0; i &lt; 3; i++)\n    s += m[i][i];\nprintf(\"%d\", s);</pre>",o:["15", "45", "12", "6"],a:0,e:"m[i][i] = diagonal utama: 1 + 5 + 9 = 15.",t:8},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {7, 3, 9, 3, 5}, i, p = 0;\nfor (i = 1; i &lt; 5; i++)\n    if (a[i] &lt; a[p]) p = i;\nprintf(\"%d\", p);</pre>",o:["1", "3", "0", "4"],a:0,e:"p = indeks nilai terkecil. a[1] = 3 lebih kecil dari 7 → p = 1. a[3] = 3 tidak LEBIH kecil (cuma sama) → p tetap 1.",t:8},
 {q:"Output program berikut adalah…<pre class=\"code\">int kuadrat(int x) {\n    return x * x;\n}\n\nint main() {\n    printf(\"%d\", kuadrat(3) + kuadrat(4));\n    return 0;\n}</pre>",o:["25", "49", "14", "7"],a:0,e:"kuadrat(3) = 9, kuadrat(4) = 16 → 25.",t:9},
 {q:"Output program berikut adalah…<pre class=\"code\">void ubah(int x) {\n    x = 100;\n}\n\nint main() {\n    int a = 5;\n    ubah(a);\n    printf(\"%d\", a);\n    return 0;\n}</pre>",o:["5", "100", "0", "error"],a:0,e:"Call by value: fungsi menerima SALINAN nilai a. Mengubah x tidak mengubah a → tetap 5.",t:9},
 {q:"Output program berikut adalah…<pre class=\"code\">int total(int a[], int n) {\n    int i, s = 0;\n    for (i = 0; i &lt; n; i++)\n        s += a[i];\n    return s;\n}\n\nint main() {\n    int d[4] = {3, 5, 7, 9};\n    printf(\"%d\", total(d, 3));\n    return 0;\n}</pre>",o:["15", "24", "12", "9"],a:0,e:"n = 3 → hanya d[0..2] yang dijumlah: 3 + 5 + 7 = 15.",t:9},
 {q:"Output program berikut adalah…<pre class=\"code\">int maks(int a, int b) {\n    return (a &gt; b) ? a : b;\n}\n\nint main() {\n    printf(\"%d\", maks(maks(4, 9), 7));\n    return 0;\n}</pre>",o:["9", "7", "4", "20"],a:0,e:"Dalam dulu: maks(4, 9) = 9, lalu maks(9, 7) = 9.",t:9},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[6] = {4, 9, 1, 7, 3, 8};\nint i = 0, x = 7;\nwhile (i &lt; 6 &amp;&amp; a[i] != x)\n    i++;\nprintf(\"%d\", i);</pre>",o:["3", "4", "7", "6"],a:0,e:"Sequential: i maju selama a[i] bukan 7. a[3] = 7 → berhenti, i = 3.",t:10},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[6] = {4, 9, 1, 7, 3, 8};\nint i = 0, x = 5;\nwhile (i &lt; 6 &amp;&amp; a[i] != x)\n    i++;\nif (i == 6) printf(\"tidak ada\");\nelse printf(\"indeks %d\", i);</pre>",o:["tidak ada", "indeks 5", "indeks 6", "indeks -1"],a:0,e:"5 tidak ada di array → i terus naik sampai 6 → cetak \"tidak ada\".",t:10},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[7] = {2, 4, 6, 8, 10, 12, 14};\nint b = 0, t = 6, m, x = 4, c = 0;\nwhile (b &lt;= t) {\n    m = (b + t) / 2;\n    c++;\n    if (a[m] == x) break;\n    else if (x &lt; a[m]) t = m - 1;\n    else b = m + 1;\n}\nprintf(\"%d %d\", m, c);</pre>",o:["1 2", "2 2", "1 1", "3 2"],a:0,e:"m = (0+6)/2 = 3 → a[3] = 8 > 4 → t = 2. m = (0+2)/2 = 1 → a[1] = 4 ketemu. Indeks 1, 2 kali cek.",t:10},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[8] = {3, 6, 9, 12, 15, 18, 21, 24};\nint b = 0, t = 7, m, x = 20, c = 0, pos = -1;\nwhile (b &lt;= t) {\n    m = (b + t) / 2;\n    c++;\n    if (a[m] == x) { pos = m; break; }\n    else if (x &lt; a[m]) t = m - 1;\n    else b = m + 1;\n}\nprintf(\"%d %d\", pos, c);</pre>",o:["-1 3", "-1 8", "6 3", "-1 4"],a:0,e:"m = 3 (12) → b = 4 · m = 5 (18) → b = 6 · m = 6 (21) → t = 5 · b > t → berhenti. Tidak ketemu (−1) setelah 3 kali cek.",t:10},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[4] = {3, 1, 4, 2}, i, j, t;\nfor (i = 0; i &lt; 3; i++)\n    for (j = 0; j &lt; 3 - i; j++)\n        if (a[j] &lt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n        }\nfor (i = 0; i &lt; 4; i++) printf(\"%d \", a[i]);</pre>",o:["4 3 2 1", "1 2 3 4", "3 4 2 1", "4 3 1 2"],a:0,e:"Kondisi < → descending. Bubble sort penuh (3 pass untuk 4 data) → 4 3 2 1.",t:12},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[4] = {4, 3, 2, 1}, i, j, t, tukar = 0;\nfor (i = 0; i &lt; 3; i++)\n    for (j = 0; j &lt; 3 - i; j++)\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n            tukar++;\n        }\nprintf(\"%d\", tukar);</pre>",o:["6", "3", "4", "12"],a:0,e:"Data terbalik total: pass 1 = 3 tukar, pass 2 = 2, pass 3 = 1 → 6. Rumus kasus terburuk n(n−1)/2 = 4 × 3 / 2 = 6.",t:12},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {3, 8, 2, 9, 5}, j, mx = 0, t;\nfor (j = 1; j &lt; 5; j++)\n    if (a[j] &gt; a[mx]) mx = j;\nt = a[0]; a[0] = a[mx]; a[mx] = t;\nfor (j = 0; j &lt; 5; j++) printf(\"%d \", a[j]);</pre>",o:["9 8 2 3 5", "9 3 8 2 5", "2 8 3 9 5", "9 8 5 3 2"],a:0,e:"Pass pertama selection sort DESCENDING: cari MAKSIMUM (9 di indeks 3), tukar dengan a[0] = 3.",t:12},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[4] = {2, 7, 4, 9}, i, j, key;\nfor (i = 1; i &lt; 4; i++) {\n    key = a[i];\n    j = i - 1;\n    while (j &gt;= 0 &amp;&amp; a[j] &lt; key) {\n        a[j + 1] = a[j];\n        j--;\n    }\n    a[j + 1] = key;\n}\nfor (i = 0; i &lt; 4; i++) printf(\"%d \", a[i]);</pre>",o:["9 7 4 2", "2 4 7 9", "7 2 4 9", "9 4 7 2"],a:0,e:"Kondisi a[j] < key → geser yang lebih KECIL → insertion sort descending: 9 7 4 2.",t:12},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {1, 2, 4, 3, 5}, j, t, tukar, pass = 0;\ndo {\n    tukar = 0;\n    pass++;\n    for (j = 0; j &lt; 4; j++)\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n            tukar = 1;\n        }\n} while (tukar);\nprintf(\"%d\", pass);</pre>",o:["2", "1", "4", "5"],a:0,e:"Bubble sort pakai flag. Pass 1 menukar 4↔3 (tukar = 1) → data sudah urut. Pass 2 tidak ada tukar → berhenti. Total 2 pass.",t:12},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {5, 1, 4, 2, 8}, i, j, t;\nfor (i = 0; i &lt; 4; i++)\n    for (j = i + 1; j &lt; 5; j++)\n        if (a[i] &gt; a[j]) {\n            t = a[i]; a[i] = a[j]; a[j] = t;\n        }\nprintf(\"%d %d\", a[0], a[1]);</pre>",o:["1 2", "1 5", "5 1", "1 4"],a:0,e:"Ini exchange sort (a[i] dibandingkan dengan semua a[j] sesudahnya). Hasil akhirnya urut ascending: 1 2 4 5 8 → a[0] = 1, a[1] = 2.",t:12},
 {q:"Output program berikut adalah…<pre class=\"code\">int gap;\nfor (gap = 10 / 2; gap &gt; 0; gap /= 2)\n    printf(\"%d \", gap);</pre>",o:["5 2 1", "5 2.5 1", "10 5 2 1", "5 3 1"],a:0,e:"Gap shell sort untuk n = 10: 5, lalu 5/2 = 2 (int), lalu 2/2 = 1.",t:13},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {9, 4, 7, 1, 6}, i = -1, j, t, p = a[4];\nfor (j = 0; j &lt; 4; j++)\n    if (a[j] &lt;= p) {\n        i++;\n        t = a[i]; a[i] = a[j]; a[j] = t;\n    }\nt = a[i + 1]; a[i + 1] = a[4]; a[4] = t;\nfor (j = 0; j &lt; 5; j++) printf(\"%d \", a[j]);</pre>",o:["4 1 6 9 7", "1 4 6 7 9", "4 1 6 7 9", "6 4 1 9 7"],a:0,e:"Partisi quick sort, pivot = 6: yang ≤ 6 (4, 1) dikumpulkan ke kiri, lalu pivot ditaruh setelahnya. Kiri pivot < 6, kanan > 6, tapi bagian kanan (9 7) belum urut.",t:13},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[3] = {1, 5, 9}, b[3] = {2, 3, 10}, c[6];\nint i = 0, j = 0, k = 0;\nwhile (i &lt; 3 &amp;&amp; j &lt; 3)\n    c[k++] = (a[i] &lt; b[j]) ? a[i++] : b[j++];\nwhile (i &lt; 3) c[k++] = a[i++];\nwhile (j &lt; 3) c[k++] = b[j++];\nfor (k = 0; k &lt; 6; k++) printf(\"%d \", c[k]);</pre>",o:["1 2 3 5 9 10", "1 5 9 2 3 10", "1 2 5 3 9 10", "10 9 5 3 2 1"],a:0,e:"Ini proses MERGE: bandingkan elemen terdepan a dan b, ambil yang lebih kecil, ulangi. Sisa b (10) disalin di akhir.",t:13},
 {q:"Output program berikut adalah…<pre class=\"code\">int s[5], top = -1;\ns[++top] = 4;\ns[++top] = 7;\ns[++top] = 9;\ntop--;\nprintf(\"%d\", s[top]);</pre>",o:["7", "9", "4", "2"],a:0,e:"Stack (LIFO): push 4, 7, 9 → top menunjuk 9. top-- = pop (9 keluar) → yang di atas sekarang 7.",t:11},
 {q:"Output program berikut adalah…<pre class=\"code\">int q[5], f = 0, r = -1;\nq[++r] = 3;\nq[++r] = 6;\nq[++r] = 8;\nf++;\nprintf(\"%d %d\", q[f], q[r]);</pre>",o:["6 8", "3 8", "3 6", "8 6"],a:0,e:"Queue (FIFO): enqueue 3, 6, 8. f++ = dequeue (3 keluar dari depan). FRONT = 6, REAR = 8.",t:11},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[4] = {5, 10, 15, 20}, i = 3;\nwhile (i &gt;= 0) {\n    printf(\"%d \", a[i] / 5);\n    i--;\n}</pre>",o:["4 3 2 1", "1 2 3 4", "20 15 10 5", "4 3 2"],a:0,e:"Dicetak dari belakang (i = 3 sampai 0), tiap elemen dibagi 5: 20/5, 15/5, 10/5, 5/5.",t:14},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {2, 8, 4, 6, 10}, i, s = 0, c = 0;\nfor (i = 0; i &lt; 5; i++) s += a[i];\nfor (i = 0; i &lt; 5; i++)\n    if (a[i] &gt; s / 5) c++;\nprintf(\"%d %d\", s / 5, c);</pre>",o:["6 2", "6 3", "30 2", "6 1"],a:0,e:"s = 30, rata-rata = 30 / 5 = 6. Yang LEBIH dari 6: 8 dan 10 → 2 (6 sendiri tidak dihitung).",t:14},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[6] = {3, 8, 2, 8, 5, 1}, i, mx = a[0], c = 0;\nfor (i = 1; i &lt; 6; i++)\n    if (a[i] &gt; mx) mx = a[i];\nfor (i = 0; i &lt; 6; i++)\n    if (a[i] == mx) c++;\nprintf(\"%d %d\", mx, c);</pre>",o:["8 2", "8 1", "5 2", "3 1"],a:0,e:"Nilai maksimum = 8, dan 8 muncul 2 kali (indeks 1 dan 3).",t:14},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {4, 7, 1, 9, 2}, i, genap = 0, ganjil = 0;\nfor (i = 0; i &lt; 5; i++) {\n    if (a[i] % 2 == 0) genap += a[i];\n    else ganjil += a[i];\n}\nprintf(\"%d %d\", genap, ganjil);</pre>",o:["6 17", "17 6", "2 3", "6 16"],a:0,e:"Genap: 4 + 2 = 6. Ganjil: 7 + 1 + 9 = 17.",t:14},
 {q:"Output program berikut adalah…<pre class=\"code\">char s[10] = \"AB\";\nstrcat(s, \"CD\");\nprintf(\"%s %d\", s, strlen(s));</pre>",o:["ABCD 4", "AB 2", "CDAB 4", "ABCD 5"],a:0,e:"strcat menyambung \"CD\" ke belakang \"AB\" → \"ABCD\", panjangnya 4.",t:15},
 {q:"Output program berikut adalah…<pre class=\"code\">char a[10];\nstrcpy(a, \"Hai\");\nprintf(\"%c\", a[1]);</pre>",o:["a", "H", "i", "Hai"],a:0,e:"strcpy menyalin \"Hai\" ke a. a[1] = karakter kedua (indeks mulai 0) = 'a'.",t:15},
 {q:"Output program berikut adalah…<pre class=\"code\">printf(\"%d %d\", isdigit('7') != 0, isalpha('7') != 0);</pre>",o:["1 0", "0 1", "1 1", "7 0"],a:0,e:"'7' adalah digit (isdigit benar → 1), bukan huruf (isalpha salah → 0).",t:15},
 {q:"Output program berikut adalah…<pre class=\"code\">printf(\"%.2f\", fabs(-3.5) + floor(1.9));</pre>",o:["4.50", "5.50", "5.40", "1.60"],a:0,e:"fabs(-3.5) = 3.5, floor(1.9) = 1.0 (bulat ke bawah) → 4.50.",t:15},
 {q:"Output program berikut adalah…<pre class=\"code\">printf(\"%c%c\", tolower('A'), toupper('z'));</pre>",o:["aZ", "Az", "AZ", "az"],a:0,e:"tolower('A') = 'a', toupper('z') = 'Z'.",t:15},
 {q:"Output program berikut adalah…<pre class=\"code\">char s[] = \"kode\";\nint i;\nfor (i = 0; i &lt; strlen(s); i++)\n    s[i] = toupper(s[i]);\nprintf(\"%s\", s);</pre>",o:["KODE", "kode", "Kode", "K"],a:0,e:"Loop sepanjang string, tiap huruf diubah jadi besar oleh toupper → \"KODE\".",t:15},
 {q:"Algoritma yang langkahnya tidak pernah selesai melanggar karakteristik…",o:["Berakhir (finite)", "Definitif", "Ada masukan", "Efektif"],a:0,e:"Algoritma harus berhenti setelah jumlah langkah terbatas.",t:0},
 {q:"Bubble sort tanpa flag pada 5 data melakukan berapa perbandingan?",o:["10", "5", "25", "4"],a:0,e:"4 + 3 + 2 + 1 = 10. Rumus: n(n − 1)/2 = 5 × 4 / 2 = 10.",t:12},
 {q:"Selection sort pada 6 data melakukan berapa kali perbandingan?",o:["15", "6", "36", "5"],a:0,e:"5 + 4 + 3 + 2 + 1 = 15 = n(n − 1)/2. Selection selalu segini walau datanya sudah urut.",t:12},
 {q:"Pada selection sort ascending, setelah pass ke-2 selesai, apa yang pasti benar?",o:["Dua elemen terkecil sudah di indeks 0 dan 1", "Dua elemen terbesar sudah di kanan", "Array sudah urut", "Belum ada yang pasti"],a:0,e:"Tiap pass selection mengunci elemen terkecil berikutnya di depan.",t:12},
 {q:"Pada bubble sort ascending, setelah pass ke-2 selesai, apa yang pasti benar?",o:["Dua elemen terbesar sudah di posisi paling kanan", "Dua elemen terkecil sudah di kiri", "Array sudah urut", "Elemen tengah sudah urut"],a:0,e:"Tiap pass bubble mengunci elemen terbesar berikutnya di kanan.",t:12},
 {q:"Pada insertion sort, setelah langkah ke-k (i = k), bagian yang pasti sudah urut adalah…",o:["a[0] sampai a[k] (bagian kiri)", "Seluruh array", "k elemen terbesar di kanan", "Hanya a[k]"],a:0,e:"Insertion menjaga bagian kiri tetap urut, tapi isinya belum tentu nilai final (elemen kanan bisa masih disisipkan).",t:12},
 {q:"Data {1, 2, 3, 4, 5} (sudah urut) paling cepat diurutkan oleh…",o:["Insertion sort (tidak ada yang digeser)", "Selection sort", "Quick sort dengan pivot elemen terakhir", "Semua sama cepat"],a:0,e:"Insertion: tiap key langsung lebih besar dari kiri, jadi O(n). Selection tetap O(n²); quick sort pivot ujung justru kasus terburuk.",t:12},
 {q:"Merge sort terus membagi data sampai setiap bagian berisi…",o:["1 elemen", "2 elemen", "Setengah data", "Pivot saja"],a:0,e:"Bagian berisi 1 elemen sudah pasti urut, lalu digabung (merge) naik ke atas.",t:13},
 {q:"Yang dimaksud pivot pada quick sort adalah…",o:["Elemen acuan; yang lebih kecil ditaruh di kiri, yang lebih besar di kanan", "Elemen terakhir yang sudah urut", "Jarak antar elemen", "Array sementara untuk menggabung"],a:0,e:"Pivot = patokan pembanding saat partisi.",t:13},
 {q:"Algoritma sorting yang memakai prinsip divide and conquer adalah…",o:["Merge sort dan quick sort", "Bubble sort dan selection sort", "Insertion sort dan shell sort", "Binary sort dan bubble sort"],a:0,e:"Divide and conquer: bagi masalah jadi bagian kecil, selesaikan, gabungkan.",t:13},
 {q:"Untuk mengurutkan data sangat banyak (jutaan), pilihan yang paling tepat adalah…",o:["Merge sort / quick sort (O(n log n))", "Bubble sort", "Selection sort", "Insertion sort"],a:0,e:"O(n²) jadi sangat lambat untuk data besar. O(n log n) jauh lebih cepat.",t:13},
 {q:"Binary search pada 16 data terurut paling banyak membutuhkan … perbandingan.",o:["5", "16", "8", "4"],a:0,e:"16 → 8 → 4 → 2 → 1: maksimal 5 kali cek (log₂16 + 1).",t:10},
 {q:"Pada sequential search terhadap data TERURUT ascending, pencarian bisa dihentikan lebih awal saat…",o:["Bertemu elemen yang lebih besar dari data yang dicari", "Bertemu elemen yang lebih kecil", "Sampai di tengah array", "Tidak bisa dihentikan lebih awal"],a:0,e:"Kalau a[i] sudah > x, x pasti tidak ada di sisa array.",t:10},
 {q:"Binary search pada data {12, 3, 25, 7, 18} (belum urut) akan…",o:["Bisa gagal menemukan data yang sebenarnya ada", "Tetap selalu benar", "Otomatis mengurutkan data dulu", "Error saat compile"],a:0,e:"Binary search mengandalkan urutan untuk membuang setengah data. Tanpa urutan, bagian yang dibuang bisa justru berisi data yang dicari.",t:10},
 {q:"Stack kosong, lalu push(5), push(8), pop(), push(2). Elemen paling atas sekarang…",o:["2", "8", "5", "Kosong"],a:0,e:"push 5, 8 → pop buang 8 → push 2. Top = 2.",t:11},
 {q:"Operasi menambah elemen ke stack disebut … dan mengambilnya disebut …",o:["push; pop", "enqueue; dequeue", "insert; delete di FRONT", "pop; push"],a:0,e:"Stack: push/pop di TOP. Queue: enqueue di REAR, dequeue di FRONT.",t:11},
 {q:"Fungsi untuk mengubah string \"123\" menjadi angka int 123 adalah…",o:["atoi() dari stdlib.h", "strlen() dari string.h", "toupper() dari ctype.h", "pow() dari math.h"],a:0,e:"atoi = ASCII to integer.",t:15},
 {q:"Fungsi untuk membandingkan dua string dengan benar di C adalah…",o:["strcmp(a, b) == 0", "a == b", "strcpy(a, b)", "strlen(a) == strlen(b)"],a:0,e:"a == b membandingkan ALAMAT array, bukan isinya. Pakai strcmp; hasil 0 artinya sama.",t:15},
 {q:"Pasangan fungsi dan header yang BENAR adalah…",o:["sqrt → math.h", "printf → stdlib.h", "strlen → stdio.h", "toupper → string.h"],a:0,e:"printf → stdio.h · strlen → string.h · toupper → ctype.h · sqrt → math.h.",t:15},

 /* Bank soal tambahan remedial (kode sudah diuji compile + run) */
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {6, 2, 9, 1, 5}, i, j, t;\nfor (i = 0; i &lt; 1; i++)\n    for (j = 0; j &lt; 4 - i; j++)\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n        }\nfor (i = 0; i &lt; 5; i++) printf(\"%d \", a[i]);</pre>",o:["2 6 1 5 9", "1 6 2 9 5", "2 1 5 6 9", "1 2 5 6 9"],a:0,e:"Cuma 1 pass (versi dari depan): 6↔2, 6–9 tetap, 9↔1, 9↔5 → 2 6 1 5 9. Angka terbesar (9) sudah di kanan.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {6, 2, 9, 1, 5}, i, j, t;\nfor (i = 0; i &lt; 1; i++)\n    for (j = 4; j &gt; i; j--)\n        if (a[j] &lt; a[j - 1]) {\n            t = a[j]; a[j] = a[j - 1]; a[j - 1] = t;\n        }\nfor (i = 0; i &lt; 5; i++) printf(\"%d \", a[i]);</pre>",o:["1 6 2 9 5", "2 6 1 5 9", "1 2 6 5 9", "6 2 1 9 5"],a:0,e:"Versi dari BELAKANG (j mundur): yang terkecil (1) menggelembung ke depan: 1↔9, 1↔2, 1↔6 → 1 6 2 9 5.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[6] = {5, 1, 6, 2, 4, 3}, i, j, t;\nfor (i = 0; i &lt; 2; i++)\n    for (j = 0; j &lt; 5 - i; j++)\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n        }\nfor (i = 0; i &lt; 6; i++) printf(\"%d \", a[i]);</pre>",o:["1 2 4 3 5 6", "1 5 2 4 3 6", "1 2 3 4 5 6", "1 2 5 4 3 6"],a:0,e:"Pass 1 → 1 5 2 4 3 6 (6 ke kanan). Pass 2 → 1 2 4 3 5 6 (5 ke kanan). Belum urut karena cuma 2 pass.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {1, 2, 3, 4, 5}, i, j, t, c = 0;\nfor (i = 0; i &lt; 4; i++)\n    for (j = 0; j &lt; 4 - i; j++) {\n        c++;\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n        }\n    }\nprintf(\"%d\", c);</pre>",o:["10", "0", "4", "5"],a:0,e:"c dihitung di LUAR if → menghitung PERBANDINGAN, bukan tukar. Tanpa flag tetap 4 + 3 + 2 + 1 = 10, walau data sudah urut.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {5, 4, 3, 2, 1}, i, j, t, c = 0;\nfor (i = 0; i &lt; 4; i++)\n    for (j = 0; j &lt; 4 - i; j++)\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n            c++;\n        }\nprintf(\"%d\", c);</pre>",o:["10", "4", "5", "20"],a:0,e:"Data terbalik total → setiap perbandingan pasti tukar. Tukar = n(n − 1)/2 = 5 × 4 / 2 = 10.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {2, 9, 4, 7, 1}, i, j, t;\nfor (i = 0; i &lt; 4; i++)\n    for (j = 0; j &lt; 4 - i; j++)\n        if (a[j] &lt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n        }\nprintf(\"%d %d %d\", a[0], a[2], a[4]);</pre>",o:["9 4 1", "1 4 9", "9 7 1", "2 4 1"],a:0,e:"Tanda < → DESCENDING: 9 7 4 2 1. a[0] = 9, a[2] = 4, a[4] = 1.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[4] = {3, 1, 2, 4}, j, t, tukar, pass = 0;\ndo {\n    tukar = 0;\n    pass++;\n    for (j = 0; j &lt; 3; j++)\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n            tukar = 1;\n        }\n} while (tukar);\nprintf(\"%d\", pass);</pre>",o:["2", "3", "1", "4"],a:0,e:"Pass 1: 3↔1, 3↔2 → 1 2 3 4 (ada tukar, tukar = 1 → ulang). Pass 2: tidak ada tukar → tukar = 0 → berhenti. Total 2 pass.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[5] = {4, 1, 3, 2, 5}, i, j, t;\nfor (i = 0; i &lt; 4; i++) {\n    for (j = 0; j &lt; 4 - i; j++)\n        if (a[j] &gt; a[j + 1]) {\n            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n        }\n    printf(\"%d \", a[4 - i]);\n}</pre>",o:["5 4 3 2", "4 3 2 1", "5 4 3 2 1", "2 3 4 5"],a:0,e:"Setelah tiap pass, elemen di posisi 4 − i sudah fix: pass 1 → a[4] = 5, pass 2 → a[3] = 4, pass 3 → a[2] = 3, pass 4 → a[1] = 2.",t:16},
 {q:"Output program berikut adalah…<pre class=\"code\">int a[3] = {7, 3, 5}, j, t;\nfor (j = 0; j &lt; 2; j++)\n    if (a[j] &gt; a[j + 1]) {\n        a[j] = a[j + 1];\n        a[j + 1] = a[j];\n    }\nprintf(\"%d %d %d\", a[0], a[1], a[2]);</pre>",o:["3 3 5", "3 5 7", "3 7 5", "3 3 3"],a:0,e:"Tukar SALAH tanpa temp. j = 0: 7 > 3 → a[0] = 3, lalu a[1] = a[0] = 3 (nilai 7 hilang!). j = 1: 3 > 5? tidak. Hasil 3 3 5. Makanya tukar wajib pakai temp.",t:16},
 {q:"Bubble sort membandingkan elemen yang…",o:["Bersebelahan (a[j] dan a[j+1])", "Paling kecil dengan paling besar", "Berjarak gap tertentu", "Ada di tengah array"],a:0,e:"Itu ciri khas bubble: selalu tetangga. Yang pakai jarak/gap itu shell sort.",t:16},
 {q:"Pada bubble sort versi dari belakang (j mundur, a[j] < a[j−1] → tukar), setelah pass pertama yang pasti sudah di posisinya adalah…",o:["Elemen terkecil di indeks 0", "Elemen terbesar di indeks terakhir", "Elemen tengah", "Belum ada"],a:0,e:"Versi dari belakang membawa yang terkecil ke depan tiap pass.",t:16},
 {q:"Bubble sort pada 8 data (tanpa flag) membutuhkan berapa pass?",o:["7", "8", "28", "64"],a:0,e:"n − 1 = 8 − 1 = 7 pass.",t:16},
 {q:"Bubble sort pada 8 data (tanpa flag) melakukan berapa perbandingan?",o:["28", "7", "56", "64"],a:0,e:"n(n − 1)/2 = 8 × 7 / 2 = 28.",t:16},
 {q:"Jumlah pertukaran bubble sort ascending pada data {3, 1, 2} adalah…",o:["2", "1", "3", "0"],a:0,e:"Pasangan terbalik: (3,1) dan (3,2) → 2 tukar. Trace: 3↔1 → 1 3 2, 3↔2 → 1 2 3.",t:16},
 {q:"Kenapa pertukaran pada bubble sort butuh variabel temp?",o:["Supaya nilai lama a[j] tidak hilang tertimpa", "Supaya lebih cepat", "Karena wajib di semua loop", "Untuk menghitung jumlah pass"],a:0,e:"Tanpa temp, a[j] = a[j+1] menimpa nilai a[j] sebelum sempat dipindah ke a[j+1].",t:16},
 {q:"Bubble sort ascending pada data yang sudah urut, versi dengan flag, berhenti setelah…",o:["1 pass", "0 pass", "n − 1 pass", "n pass"],a:0,e:"Pass pertama tidak ada tukar → flag tetap 0 → loop berhenti.",t:16},
 {q:"Bubble sort termasuk algoritma sorting yang…",o:["Stabil dengan kompleksitas O(n²)", "Tidak stabil dengan O(n log n)", "Butuh data terurut", "Memakai pivot"],a:0,e:"Bubble hanya menukar kalau a[j] > a[j+1] (bukan ≥), jadi data bernilai sama tidak saling melompati → stabil.",t:16}
];

/* ================= FLASHCARDS ================= */
var FLASHCARDS=[
 {tag:"IIT · Definisi",q:"Triad Senn (3 komponen kekuatan TI)?",a:"Computers · Communications · Know-How (people, application, procedure)."},
 {tag:"IIT · Sejarah",q:"Tahun & peristiwa: ENIAC, ARPANET, TCP/IP, WWW?",a:"1946 ENIAC · 1969 ARPANET (4 node) · 1972 email & TCP/IP · 1992 WWW (CERN)."},
 {tag:"IIT · Hardware",q:"5 generasi komputer berdasarkan komponen inti?",a:"1) Tabung hampa 2) Transistor 3) IC 4) Mikroprosesor (VLSI) 5) Biochip/AI."},
 {tag:"IIT · CPU",q:"Tiga bagian utama CPU & fungsinya?",a:"Control Unit (kendali) · ALU (aritmatika & logika) · Register (memori cepat sementara)."},
 {tag:"IIT · Moore",q:"Isi Hukum Moore?",a:"Jumlah transistor pada chip berlipat ganda ~tiap 18 bulan; biaya per chip relatif konstan."},
 {tag:"IIT · Bilangan",q:"Biner → oktal vs biner → heksa?",a:"Oktal: kelompok 3-bit dari kanan. Heksa: kelompok 4-bit dari kanan."},
 {tag:"IIT · Bilangan",q:"Komplemen-2?",a:"Balik semua bit (komplemen-1) lalu + 1. MSB = sign bit (1 negatif)."},
 {tag:"IIT · Data",q:"Lossy vs Lossless + contoh?",a:"Lossy: tak 100% sama (JPEG, MP3, MPEG). Lossless: sama persis (PNG, GIF, ZIP, RAR)."},
 {tag:"IIT · Jaringan",q:"Hub vs Switch vs Router (layer & baca apa)?",a:"Hub=Physical (broadcast). Switch=Data Link (MAC, privat). Router=Network (IP, rute)."},
 {tag:"IIT · Jaringan",q:"Skala PAN/LAN/MAN/WAN?",a:"PAN ruangan · LAN gedung · MAN kota · WAN negara · Internet global."},
 {tag:"ADS · C",q:"Alur kompilasi C?",a:"kode.c → preprocessor → compiler → linker → program."},
 {tag:"ADS · Tipe",q:"Ukuran & format int, float, double, char?",a:"int 4B %d · float 4B %f · double 8B %lf · char 1B %c · long long 8B %lld."},
 {tag:"ADS · Operator",q:"Hasil 7/2 dan 7%2 (int)?",a:"7/2 = 3 (pecahan dibuang) · 7%2 = 1 (sisa bagi). Casting: (float)7/2 = 3.5."},
 {tag:"ADS · Loop",q:"for vs while vs do-while?",a:"for: iterasi diketahui · while: cek di awal (bisa 0×) · do-while: minimal 1× (cek di akhir)."},
 {tag:"ADS · Percabangan",q:"Kenapa else if dicek dari nilai terbesar?",a:"Berhenti di kondisi benar pertama; dari kecil → nilai tinggi keburu masuk cabang rendah."},
 {tag:"ADS · Flowchart",q:"Simbol: terminal, I/O, proses, keputusan?",a:"Oval=terminal · Jajar genjang=I/O · Persegi=proses · Belah ketupat=keputusan."},
 {tag:"ADS · Algoritma",q:"5 karakteristik algoritma yang baik?",a:"Ada masukan · ada keluaran · definitif · efektif · berakhir (finite)."},
 {tag:"ADS · Array",q:"Indeks array mulai dari berapa & aturan tipe?",a:"Mulai dari 0; semua elemen harus bertipe data sama. a[5] → indeks 0–4."},
 {tag:"ADS · Searching",q:"Sequential vs Binary search?",a:"Sequential: cek satu-satu (lambat). Binary: bagi dua, tengah=(bawah+atas)/2, data HARUS terurut (cepat)."},
 {tag:"ADS · Struktur Data",q:"Queue vs Stack?",a:"Queue = FIFO (tambah di REAR, hapus di FRONT). Stack = LIFO."},
 {tag:"ADS · Fungsi",q:"Parameter vs return value & default tipe?",a:"Parameter/argumen = masukan; return value = keluaran. Tipe default fungsi = int."},
 {tag:"ADS · Searching",q:"Binary search: geser batasnya gimana?",a:"x < a[tengah] → atas = tengah − 1 · x > a[tengah] → bawah = tengah + 1 · loop while (bawah <= atas) · tidak ketemu → return −1."},
 {tag:"ADS · Searching",q:"Kompleksitas metode searching?",a:"Sequential O(n) · Binary O(log n) · Jump O(√n) · Interpolation O(log log n) rata-rata (data urut & merata)."},
 {tag:"ADS · Sorting",q:"Bubble vs Selection vs Insertion (idenya)?",a:"Bubble: tukar tetangga, terbesar ke kanan · Selection: cari minimum, tukar ke depan · Insertion: sisipkan key ke bagian kiri yang sudah urut."},
 {tag:"ADS · Sorting",q:"Hasil pass 1 dari {5, 3, 8, 1, 4}?",a:"Bubble: 3 5 1 4 8 · Selection: 1 3 8 5 4 · Insertion: 3 5 8 1 4."},
 {tag:"ADS · Sorting",q:"Shell sort: gap untuk n = 8?",a:"4 → 2 → 1 (n/2, dibagi 2 terus). Pengembangan insertion sort, oleh Donald Shell."},
 {tag:"ADS · Sorting",q:"Merge sort vs Quick sort?",a:"Keduanya divide & conquer. Merge: bagi dua + gabung, selalu O(n log n), stabil, butuh memori. Quick: pivot + partisi, rata-rata O(n log n), terburuk O(n²)."},
 {tag:"ADS · Sorting",q:"Kompleksitas & stabil/tidak?",a:"O(n²): bubble, selection, insertion · O(n log n): merge, quick (rata-rata), heap. Tidak stabil: selection, shell, quick, heap."},
 {tag:"ADS · Sorting",q:"Kode swap & tanda ascending/descending?",a:"temp = a[j]; a[j] = a[j+1]; a[j+1] = temp; · a[j] > a[j+1] = ascending, a[j] < a[j+1] = descending."},
 {tag:"ADS · Library",q:"stdio.h vs stdlib.h?",a:"stdio.h: printf, scanf, puts, gets/fgets, getchar, putchar, file · stdlib.h: malloc, free, rand, srand, atoi, abs, exit, system."},
 {tag:"ADS · Library",q:"string.h: 4 fungsi utama?",a:"strlen (panjang, tanpa \\0) · strcpy (salin) · strcat (sambung) · strcmp (bandingkan, 0 = sama)."},
 {tag:"ADS · Library",q:"math.h & ctype.h?",a:"math.h: pow, sqrt, ceil (atas), floor (bawah), round, fabs → hasil double · ctype.h: toupper, tolower, isdigit, isalpha, isspace."},
 {tag:"ADS · Library",q:"conio.h, time.h, < > vs \" \"?",a:"conio.h: getch, getche, clrscr (bukan standar) · time.h: time(NULL) untuk srand · < > = library standar, \" \" = header buatan sendiri."}
];

var HITUNG=[
 {t:"Desimal → Biner (bagi 2)", h:`
  <p><b>Metode:</b> bagi terus dengan 2, catat <b>sisa</b>-nya (pasti 0 atau 1), lalu baca sisa <b>dari bawah ke atas</b>.</p>
  <pre class="work">126 ÷ 2 = 63  sisa <b>0</b>   ▲ baca ke atas
 63 ÷ 2 = 31  sisa <b>1</b>   │
 31 ÷ 2 = 15  sisa <b>1</b>   │
 15 ÷ 2 =  7  sisa <b>1</b>   │
  7 ÷ 2 =  3  sisa <b>1</b>   │
  3 ÷ 2 =  1  sisa <b>1</b>   │
  1 ÷ 2 =  0  sisa <b>1</b>   ◀ mulai</pre>
  <p>Baca dari bawah: <span class="res">126₁₀ = 1111110₂</span></p>
  <div class="note">Cara persis sama untuk oktal (bagi 8) dan heksadesimal (bagi 16).</div>
  <details class="try"><summary>Coba sendiri: 45₁₀ → biner</summary><div class="ans"><b>101101₂.</b> Sisa (bawah→atas): 45→1, 22→0, 11→1, 5→1, 2→0, 1→1. Cek: 32+8+4+1 = 45. ✓</div></details>`},

 {t:"Biner → Desimal (nilai posisi)", h:`
  <p><b>Metode:</b> tiap bit dikali 2<sup>posisi</sup> (posisi mulai 0 dari kanan), lalu dijumlahkan. Gampangnya: jumlahkan nilai di bawah tiap bit yang bernilai 1.</p>
  <pre class="work">bit   :  1    1    1    1    1    1    0
posisi:  6    5    4    3    2    1    0
nilai : 64 + 32 + 16 +  8 +  4 +  2 +  0</pre>
  <p>64+32+16+8+4+2 = <span class="res">1111110₂ = 126₁₀</span></p>
  <div class="note">Hafal nilai posisi: 1, 2, 4, 8, 16, 32, 64, 128, 256 … (dikali 2 tiap naik).</div>
  <details class="try"><summary>Coba sendiri: 1011₂ → desimal</summary><div class="ans"><b>11.</b> 8 + 0 + 2 + 1 = 11.</div></details>`},

 {t:"Biner → Oktal & Heksa (pengelompokan)", h:`
  <p><b>Oktal:</b> kelompokkan <b>3-bit</b> dari kanan. <b>Heksa:</b> kelompokkan <b>4-bit</b> dari kanan. Kalau grup paling kiri kurang, tambahkan 0 di depan.</p>
  <pre class="work">Biner: 101101111

Oktal (grup 3-bit):   101  101  111
                       5    5    7      = <b>557₈</b>

Heksa (grup 4-bit):  0001 0110 1111
                       1    6    F      = <b>16F₁₆</b></pre>
  <p>Cek: 557₈ dan 16F₁₆ sama-sama = <span class="res">367₁₀</span>.</p>
  <div class="note">Patokan heksa: 10=A, 11=B, 12=C, 13=D, 14=E, 15=F.</div>
  <details class="try"><summary>Coba sendiri: 11010110₂ → heksa</summary><div class="ans"><b>D6.</b> Grup 4-bit: 1101 0110 → D 6 → D6₁₆.</div></details>`},

 {t:"Desimal → Heksa (bagi 16)", h:`
  <p><b>Metode:</b> bagi terus dengan 16, sisa 10–15 ditulis A–F, baca dari bawah ke atas.</p>
  <pre class="work">126 ÷ 16 = 7  sisa 14 → <b>E</b>   ▲
  7 ÷ 16 = 0  sisa  7 → <b>7</b>   ◀</pre>
  <p>Baca bawah→atas: <span class="res">126₁₀ = 7E₁₆</span></p>
  <details class="try"><summary>Coba sendiri: 255₁₀ → heksa</summary><div class="ans"><b>FF.</b> 255÷16 = 15 sisa 15 (F), 15÷16 = 0 sisa 15 (F) → FF.</div></details>`},

 {t:"Heksa/Oktal → Desimal (nilai posisi)", h:`
  <p><b>Metode:</b> tiap digit dikali basis<sup>posisi</sup> (dari kanan, mulai 0), dijumlahkan.</p>
  <pre class="work">7E₁₆ = 7 × 16¹ + E × 16⁰
     = 7 × 16  + 14 × 1
     = 112     + 14      = <b>126</b></pre>
  <p><span class="res">7E₁₆ = 126₁₀</span>.  (E = 14)</p>
  <details class="try"><summary>Coba sendiri: 2A₁₆ dan 57₈ → desimal</summary><div class="ans"><b>2A = 42</b> (2×16 + 10). <b>57₈ = 47</b> (5×8 + 7).</div></details>`},

 {t:"Penjumlahan Biner (carry)", h:`
  <p><b>Aturan:</b> 0+0=0 · 1+0=1 · 1+1=<b>0 simpan 1</b> (carry) · 1+1+1=1 simpan 1.</p>
  <pre class="work">    1 0 1 1 0   (22)
  + 1 0 1 0 0   (20)
  -----------
  1 0 1 0 1 0   (42)</pre>
  <p><span class="res">= 101010₂ = 42₁₀</span>. Contoh kolom ke-3 dari kanan: 1+1 = 0, simpan carry 1 ke kolom berikutnya.</p>
  <details class="try"><summary>Coba sendiri: 1011 + 110</summary><div class="ans"><b>10001₂ (17).</b> 1011 = 11, 110 = 6, 11+6 = 17.</div></details>`},

 {t:"Komplemen-1 & Komplemen-2", h:`
  <p><b>Komplemen-1:</b> balik semua bit (0↔1). <b>Komplemen-2:</b> komplemen-1 lalu <b>+1</b>.</p>
  <pre class="work">Biner 35     : 0010 0011
Komplemen-1  : 1101 1100   (semua bit dibalik)
Tambah 1     :         + 1
Komplemen-2  : 1101 1101</pre>
  <div class="note"><b>MSB</b> (bit paling kiri) = sign bit: 1 = negatif, 0 = positif. Komputer menyimpan bilangan negatif dalam bentuk komplemen-2.</div>
  <details class="try"><summary>Coba sendiri: komplemen-2 dari 0000 0110 (6)</summary><div class="ans"><b>1111 1010.</b> Komplemen-1: 1111 1001, +1 → 1111 1010 (= −6).</div></details>`},

 {t:"Pengurangan pakai Komplemen-2", h:`
  <p>Komputer tidak mengurang — ia <b>menambah bilangan negatif</b>: 18 − 7 = 18 + (−7).</p>
  <pre class="work">1) Cari −7 (komplemen-2 dari 7):
   7           : 0000 0111
   komplemen-1 : 1111 1000
   + 1         : 1111 1001   (= −7)

2) Jumlahkan 18 + (−7):
     0001 0010   (18)
   + 1111 1001   (−7)
   -------------
   1 0000 1011

3) Buang carry ke-9 (angka 1 paling kiri):
   Hasil = 0000 1011 = <b>11</b></pre>
  <p>Sign bit 0 → positif. <span class="res">18 − 7 = 11</span> ✓</p>`},

 {t:"Penjumlahan BCD", h:`
  <p><b>BCD</b> = tiap digit desimal ditulis 4-bit. Kalau hasil tiap kelompok <b>&gt; 9</b> (atau ada carry), <b>tambahkan 0110 (6)</b> untuk mengoreksi.</p>
  <pre class="work">9 + 5:
     1001   (9)
   + 0101   (5)
   ------
     1110   (= 14 → lebih dari 9, tak valid)
   + 0110   (koreksi +6)
   ------
   1 0100 → 0001 0100 = BCD "<b>14</b>"</pre>
  <div class="note">Hasil BCD 0001 0100 dibaca per 4-bit: 0001 = digit 1, 0100 = digit 4 → “14”.</div>`},

 {t:"Tabel Kebenaran (truth table)", h:`
  <p>n pernyataan tunggal → <b>2ⁿ baris</b>. Contoh (~p ∧ q) → r pakai 3 pernyataan = 8 baris.</p>
  <div class="tblwrap"><table class="tbl"><tr><th>p</th><th>~p</th><th>q</th><th>r</th><th>~p ∧ q</th><th>(~p∧q)→r</th></tr>
   <tr><td>B</td><td>S</td><td>B</td><td>B</td><td>S</td><td>B</td></tr>
   <tr><td>B</td><td>S</td><td>B</td><td>S</td><td>S</td><td>B</td></tr>
   <tr><td>B</td><td>S</td><td>S</td><td>B</td><td>S</td><td>B</td></tr>
   <tr><td>B</td><td>S</td><td>S</td><td>S</td><td>S</td><td>B</td></tr>
   <tr><td>S</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td></tr>
   <tr><td>S</td><td>B</td><td>B</td><td>S</td><td>B</td><td><b>S</b></td></tr>
   <tr><td>S</td><td>B</td><td>S</td><td>B</td><td>S</td><td>B</td></tr>
   <tr><td>S</td><td>B</td><td>S</td><td>S</td><td>S</td><td>B</td></tr>
  </table></div>
  <div class="note"><b>AND (∧)</b> benar hanya jika keduanya benar. <b>Implikasi (→)</b> salah hanya jika depan Benar tapi belakang Salah — lihat baris ke-6 (satu-satunya S).</div>`},

 {t:"Menghitung Waktu Unduh (download)", h:`
  <p><b>Kunci:</b> kecepatan jaringan diukur dalam <b>bit</b>/detik, jadi ubah ukuran file ke bit dulu (×8), baru dibagi.</p>
  <pre class="work">File: 100.000 kata × 5 huruf = 500.000 karakter
1 karakter = 1 Byte          → 500.000 Byte
Byte → bit  (× 8)            → 4.000.000 bit

Waktu = data ÷ kecepatan
      = 4.000.000 bit ÷ 33.600 bps
      ≈ <b>119 detik</b>  (hampir 2 menit)</pre>
  <div class="note">Jebakan: jangan lupa ×8. Kalau langsung 500.000 ÷ 33.600 → salah, karena itu Byte dibagi bit.</div>
  <details class="try"><summary>Coba sendiri: 2.000.000 bit pada 500.000 bps</summary><div class="ans"><b>4 detik.</b> 2.000.000 ÷ 500.000 = 4.</div></details>`},

 {t:"Rasio / Efisiensi Kompresi", h:`
  <p><b>Rumus:</b> efisiensi = 100% − (ukuran_sesudah ÷ ukuran_sebelum × 100%).</p>
  <pre class="work">BMP 2311 KB  →  JPEG 152 KB

= 100% − (152 ÷ 2311 × 100%)
= 100% − (0,0658 × 100%)
= 100% − 6,58%
= <b>93,42%</b></pre>
  <p>Artinya JPEG berhasil memangkas <span class="res">±93%</span> ukuran file.</p>`},

 {t:"Trace Table (prediksi output program)", h:`
  <p>Untuk soal “tentukan output”, buat <b>tabel telusur</b>: tulis nilai variabel di tiap putaran, jangan dikira-kira.</p>
  <pre class="work">for (i = 1; i &lt;= 10; i += 2) {
  if (i % 3 == 0) printf("%d habis dibagi 3", i);
  else            printf("%d", i);
  jumlah += i;
}</pre>
  <div class="tblwrap"><table class="tbl"><tr><th>Putaran</th><th>i</th><th>i % 3</th><th>Cetak</th><th>jumlah</th></tr>
   <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
   <tr><td>2</td><td>3</td><td>0</td><td>3 habis dibagi 3</td><td>4</td></tr>
   <tr><td>3</td><td>5</td><td>2</td><td>5</td><td>9</td></tr>
   <tr><td>4</td><td>7</td><td>1</td><td>7</td><td>16</td></tr>
   <tr><td>5</td><td>9</td><td>0</td><td>9 habis dibagi 3</td><td>25</td></tr>
  </table></div>
  <p>Loop jalan <b>5×</b>. Setelah i = 9 → i += 2 jadi <b>11</b>; kondisi 11 ≤ 10 salah → berhenti. Jadi <span class="res">i akhir = 11, jumlah = 25</span>.</p>`},

 {t:"Jebakan Pembagian int di C", h:`
  <p>Di C, <b>int ÷ int membuang pecahan</b>. Ini penyebab nomor satu salah hitung nilai akhir.</p>
  <pre class="work">20 / 100          = 0        (bukan 0,2!)
20 / 100 * 80     = 0 * 80 = 0

Perbaikan — minimal satu operand pecahan:
0.2 * 80          = 16
20.0 / 100 * 80   = 16
(float)20 / 100*80= 16</pre>
  <p>Pelajaran: kalau pembagian seharusnya menghasilkan pecahan, pastikan salah satu operand bertipe <b>float/double</b>, atau tulis desimalnya langsung (0.2, 0.3, 0.5).</p>`}
];

var KISI_IIT=[
 {t:"Pengenalan Teknologi Informasi", items:[
   "Definisi teknologi & 3 entitas (skill, algoritma, hardware)",
   "Definisi informasi & definisi TI (Williams &amp; Sawyer, Oxford)",
   "Model Triad Senn: Computers, Communications, Know-How",
   "7 faktor pengubah masa depan (James Canton)",
   "Sejarah TI: Sumeria, Hierogliph, papyrus, Gutenberg",
   "Sejarah TI modern: ENIAC, ARPANET, TCP/IP, WWW + tahunnya",
   "Fungsi TI: Capture → Process → Generate → Store/Retrieve → Transmit",
   "Arsitektur informasi: tingkat logis vs fisik (3 dimensi)",
   "Peran manusia dalam TI"
 ]},
 {t:"Evolusi & Perkembangan Komputer", items:[
   "Dua lensa: bisnis (waktu informasi) &amp; hardware (waktu pembuatan)",
   "4 era bisnis: Komputerisasi, TI, Sistem Informasi, Globalisasi",
   "5 generasi hardware + komponen inti tiap generasi",
   "Analogi IBM (mobil 10.000 km/jam $1)",
   "Aplikasi komputer di berbagai bidang"
 ]},
 {t:"Sistem Komputer & Arsitektur", items:[
   "Triad: Hardware, Software, Brainware (+ hierarki brainware)",
   "Arsitektur vs Organisasi komputer",
   "4 subsistem fungsional (model Stallings)",
   "Anatomi CPU: Control Unit, ALU, Register",
   "Hukum Moore",
   "Kategori komputer: super, mainframe, mini, PC",
   "Klasifikasi data: analog, digital, hybrid"
 ]},
 {t:"Sistem Bilangan & Logika", items:[
   "4 basis: desimal, biner, oktal, heksadesimal",
   "Absolute value vs position value",
   "Encoding karakter: SBCDIC, ASCII, EBCDIC",
   "Konversi antar basis (semua arah)",
   "Aritmatika biner: penjumlahan (carry) &amp; pengurangan (borrow)",
   "Penjumlahan BCD (+0110)",
   "Komplemen-1 &amp; Komplemen-2, bilangan negatif",
   "Logika: pernyataan, konjungsi (AND), implikasi (→)",
   "Tabel kebenaran (2ⁿ baris), konvers/invers/kontraposisi"
 ]},
 {t:"Data, Kompresi & Transfer", items:[
   "Bit vs Byte &amp; satuan (KB → EB, ×1024)",
   "Kompresi lossy vs lossless + contoh",
   "Mode dialogue vs retrieval",
   "Format gambar: GIF, PNG, JPEG (kompresi &amp; warna)",
   "Utilitas arsip: ZIP, RAR, KGB",
   "Hitung waktu download (ubah ke bit dulu)",
   "Rasio/efisiensi kompresi",
   "Interfacing: protokol, handshaking, bus"
 ]},
 {t:"Jaringan Komputer", items:[
   "Skala: PAN, LAN, MAN, WAN, Internet",
   "Media kabel: UTP, koaksial, fiber (single vs multi mode)",
   "Evolusi WiFi (802.11 …)",
   "Perangkat: NIC, modem, hub, bridge, switch, router (+ layer)",
   "Topologi: star, ring, bus, tree, mesh",
   "Kabel UTP: T568A/B, straight/crossover/rollover, crimping"
 ]},
 {t:"Interaksi Manusia–Mesin", items:[
   "Uji Turing & 3 entitas (komputer, manusia, interogator)",
   "EdTech & gamifikasi",
   "Paradigma berbalik (mesin menilai manusia)"
 ]}
];
var KISI_ADS=[
 {t:"Konsep Algoritma", items:[
   "Definisi algoritma & Al-Khwarizmi",
   "Siklus IPO (Input–Process–Output)",
   "5 karakteristik: masukan, keluaran, definitif, efektif, berakhir",
   "4 cara penulisan: bahasa alami, flowchart, pseudocode, bahasa program"
 ]},
 {t:"Notasi Flowchart", items:[
   "6 simbol & fungsinya (terminal, I/O, proses, keputusan, dll)",
   "Flowchart percabangan (if) &amp; perulangan",
   "Mengidentifikasi kesalahan notasi flowchart"
 ]},
 {t:"Bahasa C — Dasar (Modul 1–3)", items:[
   "Sejarah C (Dennis Ritchie / UNIX) & alur kompilasi",
   "Struktur program: <code>#include</code>, <code>main()</code>, <code>return</code>",
   "Tipe data dasar, ukuran byte & format specifier",
   "Aturan penamaan variabel (valid/tidak)",
   "<code>const</code> vs <code>#define</code>",
   "I/O: <code>printf</code>, <code>scanf</code> (pakai &amp;), <code>fgets</code>, format width/presisi"
 ]},
 {t:"Operator, Percabangan & Perulangan (Modul 4–6)", items:[
   "Jenis operator (aritmatika, relasional, logika, dll)",
   "Pembagian int membuang pecahan & casting (float)",
   "<code>if</code> / <code>else if</code> & pentingnya urutan kondisi",
   "<code>switch-case</code> (break, default)",
   "<code>for</code>, <code>while</code>, <code>do-while</code> + hitung jumlah iterasi",
   "<code>break</code> &amp; <code>continue</code>, perulangan bersarang",
   "Trace / prediksi output program"
 ]},
 {t:"Array & Matriks", items:[
   "Definisi array, elemen, indeks (mulai 0)",
   "Deklarasi & akses elemen, aturan tipe sama",
   "Matriks (array 2 dimensi)"
 ]},
 {t:"Fungsi & Prosedur", items:[
   "Definisi & manfaat fungsi",
   "Bentuk umum, parameter/argumen, return value",
   "Prototype & tipe default (int)"
 ]},
 {t:"Searching", items:[
   "Sequential / linear search (cek satu-satu, return −1 kalau tidak ketemu)",
   "Sequential dengan sentinel",
   "Binary search (syarat terurut, rumus tengah, geser bawah/atas)",
   "Interpolation &amp; jump search (ide saja)",
   "Kompleksitas: O(n) vs O(log n)"
 ]},
 {t:"Queue (Antrian)", items:[
   "Prinsip FIFO, FRONT & REAR",
   "Operasi enqueue (insert) & dequeue (delete)",
   "Queue vs Stack (FIFO vs LIFO)"
 ]},
 {t:"Sorting", items:[
   "Bubble sort: tukar tetangga, hasil per pass",
   "Selection sort: cari minimum, tukar ke depan",
   "Insertion sort: key, geser, sisipkan",
   "Shell sort: gap n/2 → 1",
   "Merge sort &amp; quick sort (divide and conquer, pivot)",
   "Tabel kompleksitas &amp; stabil/tidak stabil"
 ]},
 {t:"Soal Kode", items:[
   "Tebak output program (trace table)",
   "Isi kode yang kosong (swap, batas loop, kondisi if/while)",
   "Ascending vs descending (&gt; vs &lt;)"
 ]},
 {t:"Library / Header File", items:[
   "<code>#include</code>, &lt; &gt; vs \" \", diproses preprocessor",
   "stdio.h: printf, scanf, puts, gets/fgets, getchar, putchar",
   "stdlib.h: malloc, free, rand, srand, atoi, abs, exit, system",
   "string.h: strlen, strcpy, strcat, strcmp",
   "math.h: pow, sqrt, ceil, floor, round, fabs (double)",
   "ctype.h: toupper, tolower, isdigit, isalpha · conio.h: getch, clrscr · time.h"
 ]},
 {t:"Bubble Sort (detail)", items:[
   "Trace tiap perbandingan per pass",
   "Versi dari depan (terbesar ke kanan) vs dari belakang (terkecil ke kiri)",
   "Rumus pass, perbandingan, jumlah tukar",
   "Descending, flag, loop luar dibatasi"
 ]}
];

/* Contekan tulis tangan: isi untuk disalin ke kertas (IIT). sheet 1 = hitungan, 2 = hafalan */
var CONTEKAN_IIT=[
 {sheet:1,h:"Tabel wajib",pre:
"Des Bin  Hex | Des Bin  Hex\n 0  0000  0  |  8  1000  8\n 1  0001  1  |  9  1001  9\n 2  0010  2  | 10  1010  A\n 3  0011  3  | 11  1011  B\n 4  0100  4  | 12  1100  C\n 5  0101  5  | 13  1101  D\n 6  0110  6  | 14  1110  E\n 7  0111  7  | 15  1111  F\n\n2⁰..2⁵: 1 2 4 8 16 32\n2⁶..2¹⁰: 64 128 256 512 1024"},
 {sheet:1,h:"Konversi",items:[
  "Desimal → basis lain: <b>bagi berulang</b> (÷2 / ÷8 / ÷16), sisa dibaca <b>bawah → atas</b>",
  "Basis lain → desimal: digit × basis<sup>posisi</sup> (posisi dari kanan mulai 0). Contoh 1101₂ = 8+4+0+1 = 13",
  "Biner → oktal: grup <b>3 bit</b> dari kanan",
  "Biner → heksa: grup <b>4 bit</b> dari kanan (kurang → tambah 0 di kiri)",
  "Oktal/heksa → biner: tiap digit dipecah jadi 3 / 4 bit",
  "Oktal ↔ heksa: lewat biner dulu"]},
 {sheet:1,h:"Aritmatika biner",items:[
  "Tambah: 1+1 = 0 simpan 1 · 1+1+1 = 1 simpan 1",
  "Kurang: 0−1 = 1 pinjam 1",
  "<b>Komplemen-1</b> = balik semua bit",
  "<b>Komplemen-2</b> = balik semua bit, lalu <b>+1</b>",
  "MSB (bit paling kiri): 1 = negatif, 0 = positif",
  "Komputer tidak mengurangi: 18−7 = 18 + (−7)",
  "<b>BCD</b>: tiap digit desimal jadi 4 bit. Hasil <b>&gt; 9</b> atau ada carry → <b>tambah 0110</b>"]},
 {sheet:1,h:"Data & unduh",items:[
  "1 Byte = 8 bit · KB → MB → GB → TB → PB → EB, tiap naik <b>×1024</b>",
  "<b>Waktu unduh = (Byte × 8) ÷ bps</b> · B besar = Byte, b kecil = bit · jangan lupa ×8!",
  "<b>Efisiensi kompresi = 100% − (sesudah ÷ sebelum × 100%)</b>"]},
 {sheet:1,h:"Logika",items:[
  "n pernyataan → tabel kebenaran <b>2ⁿ baris</b>",
  "AND (∧): benar hanya kalau dua-duanya B",
  "OR (∨): salah hanya kalau dua-duanya S",
  "<b>p→q salah HANYA saat B→S</b>",
  "Konvers q→p · Invers ~p→~q · Kontraposisi ~q→~p (kontraposisi nilainya <b>sama</b> dengan p→q)"]},
 {sheet:2,h:"Pengenalan TI",items:[
  "<b>TI</b> = komputasi + jalur komunikasi pembawa data, suara, video (Williams &amp; Sawyer)",
  "<b>Teknologi</b> = skill + algoritma (logika berpikir) + hardware",
  "<b>Triad Senn</b>: Computers · Communications · Know-How (people, application, procedure)",
  "<b>Fungsi TI</b>: Capture → Process → Generate → Store/Retrieve → Transmit",
  "1946 ENIAC · 1969 ARPANET (4 node) · 1972 email &amp; TCP/IP · 1992 WWW (CERN)",
  "Arsitektur informasi: apa disimpan, di mana, bagaimana dipindahkan · logis = bisnis, fisik = database/server",
  "James Canton, 7 faktor: energi, pekerjaan, pangan, kesehatan, air, lingkungan, keamanan"]},
 {sheet:2,h:"Evolusi komputer",items:[
  "4 era: Komputerisasi (efisiensi) → TI (efektivitas) → SI (kompetitif) → Globalisasi",
  "Gen 1 tabung hampa · 2 transistor · 3 IC (lahir OS &amp; minicomputer PDP-8) · 4 mikroprosesor (VLSI) · 5 biochip/AI",
  "Analogi IBM: mobil 10.000 km/jam seharga $1"]},
 {sheet:2,h:"Sistem komputer",items:[
  "Hardware · Software · <b>Brainware</b> (Manajer EDP → Analis/Programmer → Operator/User)",
  "<b>Arsitektur</b> = terlihat programmer · <b>Organisasi</b> = fisik, transparan",
  "Stallings: Data Processing · Data Storage · Data Movement · Control",
  "CPU: <b>CU</b> (pengendali) · <b>ALU</b> (aritmatika &amp; logika, pakai komplemen-2) · <b>Register</b> (tercepat)",
  "Hukum Moore: transistor ×2 tiap ~18 bulan",
  "Super (riset) &gt; Mainframe (bank) &gt; Mini (departemen) &gt; PC",
  "Data: Analog (kontinu) · Digital (diskret) · Hybrid (mesin faks)",
  "SBCDIC 6-bit (64) · ASCII 7/8-bit (256) · EBCDIC 8-bit (256)",
  "Absolute value = nilai simbol · Position value = basis<sup>posisi</sup>"]},
 {sheet:2,h:"Kompresi & transfer",items:[
  "<b>Lossy</b> (tidak 100% sama): JPEG, MP3, MPEG",
  "<b>Lossless</b> (sama persis): ZIP, RAR, PNG, GIF",
  "GIF lossless 256 warna (8-bit) · PNG lossless + transparan · JPEG lossy 16,7 juta warna (24-bit)",
  "Dialogue = real-time, delay ≤150 ms (video call) · Retrieval = tidak real-time",
  "Interfacing: Protokol (aturan) · Handshaking (sinyal awal) · Bus (data, address, control)"]},
 {sheet:2,h:"Jaringan",items:[
  "PAN ruangan · LAN gedung · MAN kota · WAN negara",
  "<b>Hub</b> = Physical (broadcast) · <b>Switch/Bridge</b> = Data Link (MAC) · <b>Router</b> = Network (IP)",
  "NIC simpan MAC address · Modem = digital ↔ analog",
  "Star tangguh (1 putus = cuma 1 mati) · Ring 1 putus = lumpuh · Mesh paling anti-gagal, boros kabel · Tree = hierarki",
  "UTP ≤100 m · Fiber single-mode antar kota, multi-mode &lt;3 km",
  "<b>Straight</b> = beda jenis · <b>Crossover</b> = sejenis (568A↔568B) · <b>Rollover</b> = konsol",
  "Crimping: Stripping → Untwisting → Trimming → Crimping → Testing"]},
 {sheet:2,h:"Interaksi Manusia–Mesin",items:[
  "Uji Turing: A komputer · B manusia · C interogator · teks saja biar tak bias wujud fisik",
  "Paradigma berbalik: dulu manusia menilai mesin, kini mesin (EdTech, gamifikasi) menilai manusia"]}
];
