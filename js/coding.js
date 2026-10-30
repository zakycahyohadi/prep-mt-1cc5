/* Mode Coding — materi pola kode C, template wajib hafal, dipakai app.js.
   ex: c = kode (teks biasa, di-escape saat render), o = output persis, w = penjelasan/trace (HTML).
   Kode tanpa main() dianggap isi main(). Semua contoh sudah dicompile & dijalankan. */
var CODING_BAB=[
{t:"Cara Nge-trace Kode",ic:"🔍",tp:[14,6],
 intro:`<p>Semua soal kode (tebak output maupun isi yang kosong) dikerjakan dengan <b>satu cara: trace pakai tabel</b>. Jangan dibaca sekilas, jalankan kode di kertas seperti komputer.</p>
 <ol><li>Bikin tabel: satu kolom per variabel (<code>i</code>, <code>s</code>, <code>a[...]</code>, …) + satu kolom <b>output</b>.</li>
 <li>Jalankan baris demi baris. Setiap nilai berubah, tulis baris baru di tabel.</li>
 <li>Di loop: cek kondisi <b>dulu</b>, baru isi badan loop, baru update (<code>i++</code>).</li>
 <li>Tulis output <b>persis</b>: spasi, koma, dan <code>\\n</code> (pindah baris).</li></ol>`,
 keys:["Kondisi loop dicek <b>sebelum</b> tiap putaran; kalau salah → keluar loop.","<code>i++</code> tetap jalan di putaran terakhir, jadi nilai i setelah loop = batasnya.","Output ditulis persis: <code>%d </code> (ada spasi) beda dengan <code>%d</code>."],
 ex:[
 {c:`int i, s = 0;
for (i = 1; i <= 4; i++) {
    s = s + i;
    printf("%d ", s);
}
printf("\\ni=%d", i);`,o:`1 3 6 10
i=4`.replace("i=4","i=5"),
  w:`<pre class="work">i | cek i&lt;=4 | s      | output
1 | ya        | 0+1=1  | "1 "
2 | ya        | 1+2=3  | "3 "
3 | ya        | 3+3=6  | "6 "
4 | ya        | 6+4=10 | "10 "
5 | TIDAK → keluar
printf: pindah baris, lalu "i=5"</pre>Jebakan: setelah loop, <b>i = 5</b> (bukan 4) karena i++ jalan dulu baru kondisinya gagal.`},
 {c:`int a = 5, b = 2;
a = a + b;
b = a - b;
a = a - b;
printf("%d %d", a, b);`,o:`2 5`,
  w:`<pre class="work">baris        | a | b
awal         | 5 | 2
a = a + b    | 7 | 2
b = a - b    | 7 | 5
a = a - b    | 2 | 5</pre>Ini trik <b>tukar nilai tanpa temp</b>. Hasilnya a dan b bertukar.`},
 {c:`int x = 10;
while (x > 1) {
    printf("%d ", x);
    x = x / 2;
}`,o:`10 5 2 `,w:`x: 10 → cetak, x=5 → cetak, x=2 → cetak, x=1 → 1 &gt; 1 salah → berhenti. Ingat <b>5/2 = 2</b> (int dibagi int dibulatkan ke bawah).`}
 ]},

{t:"Struktur Program, printf & scanf",ic:"🖨️",tp:[1,3],
 intro:`<p>Kerangka wajib program C:</p>
 <pre class="code">#include &lt;stdio.h&gt;      // library input-output (printf, scanf)
int main() {             // program mulai dari sini
    // isi program
    return 0;            // program selesai normal
}</pre>
 <div class="tblwrap"><table class="tbl"><tr><th>Format</th><th>Untuk</th><th>Contoh → hasil</th></tr>
 <tr><td><code>%d</code> / <code>%i</code></td><td>int</td><td><code>printf("%d", 7)</code> → 7</td></tr>
 <tr><td><code>%f</code></td><td>float/double (6 desimal)</td><td><code>printf("%f", 2.5)</code> → 2.500000</td></tr>
 <tr><td><code>%.2f</code></td><td>2 angka di belakang koma</td><td><code>printf("%.2f", 3.14159)</code> → 3.14</td></tr>
 <tr><td><code>%c</code></td><td>char (1 huruf)</td><td><code>printf("%c", 'A')</code> → A</td></tr>
 <tr><td><code>%s</code></td><td>string</td><td><code>printf("%s", "Hai")</code> → Hai</td></tr>
 <tr><td><code>%5d</code></td><td>lebar 5, rata kanan</td><td><code>printf("[%5d]", 42)</code> → [   42]</td></tr>
 <tr><td><code>%-5d</code></td><td>lebar 5, rata kiri</td><td><code>printf("[%-5d]", 42)</code> → [42   ]</td></tr>
 <tr><td><code>%%</code></td><td>tanda persen</td><td><code>printf("50%%")</code> → 50%</td></tr>
 <tr><td><code>\\n</code> / <code>\\t</code></td><td>baris baru / tab</td><td></td></tr></table></div>
 <p><b>scanf</b> butuh tanda <code>&amp;</code> (alamat variabel): <code>scanf("%d", &amp;x);</code>. Untuk string (array char) <b>tanpa</b> &amp;: <code>scanf("%s", nama);</code></p>`,
 keys:["Setiap program C wajib punya <code>main()</code> dan library <code>stdio.h</code> untuk printf/scanf.","<code>scanf</code> pakai <code>&amp;</code> kecuali untuk string.","<code>%f</code> = 6 angka desimal; <code>%.2f</code> = 2 angka desimal (dibulatkan)."],
 ex:[
 {c:`printf("A");
printf("B\\n");
printf("C\\tD\\n");
printf("%d%d", 1, 2);`,o:`AB
C	D
12`,w:`printf <b>tidak</b> otomatis pindah baris. "A" lalu "B\\n" jadi <b>AB</b> lalu pindah baris. <code>\\t</code> = tab. <code>%d%d</code> tanpa spasi → <b>12</b>.`},
 {c:`float x = 7.0 / 2;
printf("%f\\n", x);
printf("%.2f\\n", x);
printf("%.1f", 2.75);`,o:`3.500000
3.50
2.8`,w:`<code>%f</code> selalu 6 desimal. <code>%.1f</code> membulatkan 2.75 → 2.8.`},
 {c:`int n = 42;
char h = 'Z';
printf("[%5d]\\n", n);
printf("[%-5d]\\n", n);
printf("%c%c\\n", h, 'a');
printf("100%%");`,o:`[   42]
[42   ]
Za
100%`,w:`%5d mengisi spasi di <b>kiri</b> sampai lebar 5. %-5d spasi di <b>kanan</b>. %% mencetak tanda %.`}
 ]},

{t:"Operator Aritmatika & Tipe Data",ic:"➗",tp:[2,4],
 intro:`<div class="tblwrap"><table class="tbl"><tr><th>Ekspresi</th><th>Hasil</th><th>Alasan</th></tr>
 <tr><td><code>7 / 2</code></td><td>3</td><td>int ÷ int → hasil int, desimal dibuang</td></tr>
 <tr><td><code>7.0 / 2</code></td><td>3.5</td><td>salah satu float → hasil float</td></tr>
 <tr><td><code>(float)7 / 2</code></td><td>3.5</td><td>casting dulu baru dibagi</td></tr>
 <tr><td><code>(float)(7 / 2)</code></td><td>3.0</td><td>dibagi dulu (=3), baru dijadikan float</td></tr>
 <tr><td><code>7 % 2</code></td><td>1</td><td>sisa bagi (modulo), hanya untuk int</td></tr>
 <tr><td><code>2 % 5</code></td><td>2</td><td>kalau kiri &lt; kanan, sisanya = kiri</td></tr>
 <tr><td><code>2 + 3 * 4</code></td><td>14</td><td>* / % dikerjakan sebelum + −</td></tr>
 <tr><td><code>int x = 9.8;</code></td><td>x = 9</td><td>disimpan ke int → dipotong, bukan dibulatkan</td></tr>
 </table></div>
 <p>Tipe data: <code>int</code> bilangan bulat (%d), <code>float</code>/<code>double</code> pecahan (%f / %lf), <code>char</code> 1 karakter (%c), yang sebenarnya angka ASCII (<code>'A'</code> = 65, <code>'a'</code> = 97, <code>'0'</code> = 48).</p>`,
 keys:["int / int = int (dibulatkan ke bawah). Mau desimal? casting <code>(float)</code> salah satunya.","<code>%</code> = sisa bagi. <code>x % 2 == 0</code> → genap.","Urutan: kurung → * / % → + − (dari kiri ke kanan)."],
 ex:[
 {c:`int a = 17, b = 5;
printf("%d %d\\n", a / b, a % b);
printf("%d\\n", a / b * b + a % b);
printf("%.1f", (float)a / b);`,o:`3 2
17
3.4`,w:`17/5 = 3 sisa 2. Rumus pasti: <b>(a/b)*b + a%b = a</b> → 3*5+2 = 17. Casting → 17.0/5 = 3.4.`},
 {c:`int x = 10 + 6 / 4 * 2 - 8 % 3;
printf("%d", x);`,o:`10`,w:`6/4 = 1 → 1*2 = 2 → 8%3 = 2 → 10 + 2 − 2 = <b>10</b>.`},
 {c:`int n = 3, s = 7;
float r1 = s / n;
float r2 = (float)s / n;
printf("%.2f %.2f", r1, r2);`,o:`2.00 2.33`,w:`r1: 7/3 dihitung sebagai int dulu = 2, baru disimpan ke float → 2.00. Jebakan favorit soal rata-rata!`},
 {c:`char c = 'A';
printf("%d %c %c", c, c + 2, 'a' - 32);`,o:`65 C A`,w:`char adalah angka ASCII. 'A' = 65, 65+2 = 67 = 'C'. 'a' (97) − 32 = 65 = 'A' (huruf kecil → besar).`}
 ]},

{t:"++, --, += dan Kawan-kawan",ic:"➕",tp:[4],
 intro:`<div class="tblwrap"><table class="tbl"><tr><th>Bentuk</th><th>Artinya</th></tr>
 <tr><td><code>x++</code> (post)</td><td>pakai nilai x <b>dulu</b>, baru tambah 1</td></tr>
 <tr><td><code>++x</code> (pre)</td><td>tambah 1 <b>dulu</b>, baru dipakai</td></tr>
 <tr><td><code>x += 3</code></td><td>x = x + 3 (juga -=, *=, /=, %=)</td></tr></table></div>
 <p>Kalau <code>x++</code> berdiri sendiri di satu baris, pre/post <b>sama saja</b>. Bedanya hanya terasa kalau dipakai di dalam ekspresi (misal <code>y = x++;</code>).</p>`,
 keys:["<code>y = x++</code> → y dapat nilai lama. <code>y = ++x</code> → y dapat nilai baru.","Dua-duanya tetap menambah x jadi +1.","<code>x *= 2 + 1</code> artinya x = x * (2 + 1)."],
 ex:[
 {c:`int x = 5, y;
y = x++;
printf("%d %d\\n", x, y);
y = ++x;
printf("%d %d", x, y);`,o:`6 5
7 7`,w:`y = x++ → y dapat 5, lalu x jadi 6. y = ++x → x jadi 7 dulu, y dapat 7.`},
 {c:`int a = 3;
int b = a++ + 2;
int c = --a * 2;
printf("%d %d %d", a, b, c);`,o:`3 5 6`,w:`b = 3 + 2 = 5, lalu a jadi 4. --a → a jadi 3 dulu, c = 3*2 = 6.`},
 {c:`int x = 4;
x += 3;
x *= 2;
x -= 5;
x %= 4;
printf("%d", x);`,o:`1`,w:`4 → 7 → 14 → 9 → 9 % 4 = <b>1</b>.`},
 {c:`int x = 10;
x *= 2 + 3;
printf("%d", x);`,o:`50`,w:`Jebakan: <code>x *= 2 + 3</code> = x * (2+3) = 10 * 5 = 50, bukan 10*2+3.`}
 ]},

{t:"Relasional, Logika & Ternary",ic:"⚖️",tp:[4,5],
 intro:`<p>Di C, kondisi bernilai <b>1 (benar)</b> atau <b>0 (salah)</b>. Semua angka selain 0 dianggap benar.</p>
 <div class="tblwrap"><table class="tbl"><tr><th>Operator</th><th>Arti</th><th>Contoh</th></tr>
 <tr><td><code>==</code> / <code>!=</code></td><td>sama / tidak sama</td><td><code>5 == 5</code> → 1</td></tr>
 <tr><td><code>&gt; &lt; &gt;= &lt;=</code></td><td>perbandingan</td><td><code>3 &gt;= 4</code> → 0</td></tr>
 <tr><td><code>&amp;&amp;</code></td><td>DAN: benar kalau dua-duanya benar</td><td><code>1 &amp;&amp; 0</code> → 0</td></tr>
 <tr><td><code>||</code></td><td>ATAU: benar kalau salah satu benar</td><td><code>1 || 0</code> → 1</td></tr>
 <tr><td><code>!</code></td><td>NOT: membalik</td><td><code>!5</code> → 0</td></tr>
 <tr><td><code>k ? a : b</code></td><td>ternary: kalau k benar → a, salah → b</td><td><code>(4&gt;2) ? 10 : 20</code> → 10</td></tr></table></div>
 <p><b>Jebakan <code>=</code> vs <code>==</code>:</b> <code>if (x = 0)</code> itu <i>mengisi</i> x dengan 0 → kondisinya 0 → salah. Yang benar membandingkan: <code>if (x == 0)</code>.</p>`,
 keys:["Benar = 1, salah = 0. Bisa langsung dicetak dengan %d.","&amp;&amp; butuh semua benar, || cukup satu benar.","<code>=</code> mengisi, <code>==</code> membandingkan."],
 ex:[
 {c:`int a = 5, b = 8;
printf("%d %d %d\\n", a > b, a != b, a == 5);
printf("%d %d %d", a > 3 && b < 5, a > 3 || b < 5, !(a > b));`,o:`0 1 1
0 1 1`,w:`a&gt;3 benar tapi b&lt;5 salah → &amp;&amp; = 0, || = 1. a&gt;b = 0, dibalik ! jadi 1.`},
 {c:`int n = 7;
printf("%s\\n", n % 2 == 0 ? "genap" : "ganjil");
int m = (n > 5) ? n * 2 : n + 2;
printf("%d", m);`,o:`ganjil
14`,w:`7 % 2 = 1 ≠ 0 → "ganjil". 7 &gt; 5 benar → m = 7*2 = 14.`},
 {c:`int x = 3;
if (x = 0)
    printf("nol");
else
    printf("bukan nol, x=%d", x);`,o:`bukan nol, x=0`,w:`<code>x = 0</code> mengisi x jadi 0, nilai ekspresinya 0 (salah) → masuk else. Dan x sekarang sudah 0!`}
 ]},

{t:"if, else if, switch",ic:"🔀",tp:[5],
 intro:`<p><b>else if</b> dicek dari atas ke bawah; begitu ada yang benar, sisanya <b>dilewati</b>. Makanya urutan kondisi penting (cek nilai terbesar dulu untuk grade).</p>
 <p><b>switch</b> lompat ke <code>case</code> yang cocok, lalu jalan terus ke bawah <b>sampai ketemu break</b> (fall-through). <code>default</code> dijalankan kalau tidak ada case yang cocok.</p>
 <pre class="code">switch (pilihan) {
    case 1: printf("Satu"); break;
    case 2: printf("Dua");  break;
    default: printf("Lainnya");
}</pre>`,
 keys:["else if: berhenti di kondisi benar <b>pertama</b>.","switch tanpa <code>break</code> → case di bawahnya ikut jalan.","<code>if</code> tanpa kurung kurawal hanya membawahi <b>1 statement</b> berikutnya."],
 ex:[
 {c:`int nilai = 78;
if (nilai >= 85) printf("A");
else if (nilai >= 70) printf("B");
else if (nilai >= 55) printf("C");
else printf("D");`,o:`B`,w:`78 ≥ 85? tidak. 78 ≥ 70? <b>ya</b> → cetak B, sisanya dilewati.`},
 {c:`int k = 2;
switch (k) {
    case 1: printf("satu ");
    case 2: printf("dua ");
    case 3: printf("tiga ");
        break;
    case 4: printf("empat ");
    default: printf("lain");
}`,o:`dua tiga `,w:`Masuk di case 2, tidak ada break → lanjut ke case 3, baru ketemu break → berhenti.`},
 {c:`int x = 5;
if (x > 10)
    printf("A");
    printf("B");
printf("C");`,o:`BC`,w:`Tanpa { }, if hanya membawahi printf("A"). printf("B") selalu jalan walaupun menjorok (indentasi tidak berpengaruh di C).`},
 {c:`int a = 4, b = 9;
if (a > b) {
    if (a > 0) printf("X");
} else {
    if (b % 3 == 0) printf("Y");
    else printf("Z");
}`,o:`Y`,w:`4 &gt; 9 salah → else. 9 % 3 = 0 → cetak Y.`}
 ]},

{t:"for, while, do-while",ic:"🔁",tp:[6],
 intro:`<pre class="code">for (awal; kondisi; update) { ... }   // tahu berapa kali
while (kondisi) { ... }               // cek dulu, bisa 0 kali
do { ... } while (kondisi);           // jalan dulu, minimal 1 kali</pre>
 <p><b>Rumus jumlah putaran</b>: <code>for (i = a; i &lt;= b; i++)</code> → <b>b − a + 1</b> kali. <code>for (i = a; i &lt; b; i++)</code> → <b>b − a</b> kali. Kalau langkahnya k: hitung saja nilai i satu per satu.</p>`,
 keys:["for &amp; while cek kondisi dulu → bisa tidak jalan sama sekali.","do-while <b>minimal 1 kali</b> jalan.","Titik koma setelah for <code>for(...);</code> → badan loop kosong!"],
 ex:[
 {c:`int i;
for (i = 10; i > 0; i -= 3)
    printf("%d ", i);
printf("| %d", i);`,o:`10 7 4 1 | -2`,w:`10 → 7 → 4 → 1 → −2 (−2 &gt; 0 salah, keluar). Setelah loop i = −2.`},
 {c:`int i = 1, n = 0;
while (i < 100) {
    i = i * 3;
    n++;
}
printf("%d %d", i, n);`,o:`243 5`,w:`i: 1→3→9→27→81→243 (5 kali). 243 &lt; 100 salah → berhenti.`},
 {c:`int x = 10;
do {
    printf("%d ", x);
    x++;
} while (x < 5);`,o:`10 `,w:`do-while jalan dulu (cetak 10), baru cek 11 &lt; 5 → salah → berhenti. Kalau pakai while biasa, tidak ada output.`},
 {c:`int i, s = 0;
for (i = 1; i <= 5; i++);
    s = s + i;
printf("%d", s);`,o:`6`,w:`Ada <b>;</b> setelah for → loop kosong yang hanya menaikkan i sampai 6. <code>s = s + i</code> jalan sekali: 0 + 6 = 6.`},
 {c:`int n = 1234, jum = 0;
while (n > 0) {
    jum += n % 10;
    n /= 10;
}
printf("%d", jum);`,o:`10`,w:`Pola <b>ambil digit</b>: n%10 = digit terakhir, n/10 = buang digit terakhir. 4+3+2+1 = 10.`}
 ]},

{t:"break, continue & Nested Loop",ic:"🪆",tp:[6],
 intro:`<p><code>break</code> = keluar dari loop <b>terdekat</b>. <code>continue</code> = lewati sisa badan loop, lanjut ke putaran berikutnya (di for, update i++ tetap jalan).</p>
 <p><b>Nested loop</b>: loop dalam selesai penuh untuk <b>setiap</b> putaran loop luar. Total putaran = luar × dalam (kalau batasnya tetap). Polanya: <b>i = baris, j = kolom</b>.</p>`,
 keys:["break hanya keluar dari 1 loop (yang paling dalam).","continue melompat ke update/kondisi berikutnya.","Pola bintang: jumlah bintang per baris ditentukan batas loop j."],
 ex:[
 {c:`int i;
for (i = 1; i <= 10; i++) {
    if (i % 3 == 0) continue;
    if (i > 7) break;
    printf("%d ", i);
}`,o:`1 2 4 5 7 `,w:`3 dan 6 dilewati (continue). i = 8 → 8 &gt; 7 → break. 9 juga habis dibagi 3 tapi loop sudah berhenti.`},
 {c:`int i, j;
for (i = 1; i <= 4; i++) {
    for (j = 1; j <= i; j++)
        printf("*");
    printf("\\n");
}`,o:`*
**
***
****
`,w:`Baris i mencetak i bintang. Ganti <code>j &lt;= i</code> jadi <code>j &lt;= 5 - i</code> → segitiga terbalik.`},
 {c:`int i, j, c = 0;
for (i = 0; i < 3; i++)
    for (j = 0; j < 4; j++)
        c++;
printf("%d", c);`,o:`12`,w:`3 putaran luar × 4 putaran dalam = 12.`},
 {c:`int i, j;
for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
        if (j == 2) break;
        printf("%d%d ", i, j);
    }
}`,o:`11 21 31 `,w:`break hanya keluar dari loop j. Tiap i, hanya j = 1 yang tercetak.`},
 {c:`int i, j;
for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++)
        printf("%d ", i * j);
    printf("\\n");
}`,o:`1 2 3
2 4 6
3 6 9
`,w:`Tabel perkalian: isi baris i kolom j = i × j.`}
 ]},

{t:"Array",ic:"📦",tp:[8],
 intro:`<p>Array = kumpulan data <b>bertipe sama</b>, diakses lewat indeks yang <b>mulai dari 0</b>. Array berisi n elemen → indeks 0 sampai <b>n − 1</b>.</p>
 <pre class="code">int a[5] = {4, 7, 1, 9, 3};   // a[0]=4 ... a[4]=3
int b[5] = {1, 2};             // sisanya otomatis 0 → {1,2,0,0,0}
int n = sizeof(a) / sizeof(a[0]);   // jumlah elemen = 5</pre>
 <p>Pola wajib: <b>jumlah</b>, <b>rata-rata</b>, <b>maks/min</b>, <b>balik</b>, <b>hitung yang memenuhi syarat</b>. Lihat contoh di bawah.</p>`,
 keys:["Indeks mulai 0; elemen terakhir di <code>a[n-1]</code>.","Loop array standar: <code>for (i = 0; i &lt; n; i++)</code>.","Maks: mulai dari <code>mx = a[0]</code>, lalu bandingkan dengan sisanya."],
 ex:[
 {c:`int a[5] = {4, 7, 1, 9, 3};
printf("%d %d %d\\n", a[0], a[4], a[1] + a[3]);
a[2] = a[0] * 2;
printf("%d", a[2]);`,o:`4 3 16
8`,w:`a[1] + a[3] = 7 + 9 = 16. a[2] diganti 4*2 = 8.`},
 {c:`int a[6] = {5, 2, 8, 1, 9, 4};
int i, s = 0, mx = a[0], mn = a[0];
for (i = 0; i < 6; i++) {
    s += a[i];
    if (a[i] > mx) mx = a[i];
    if (a[i] < mn) mn = a[i];
}
printf("%d %d %d %.2f", s, mx, mn, (float)s / 6);`,o:`29 9 1 4.83`,w:`Jumlah 5+2+8+1+9+4 = 29, maks 9, min 1, rata-rata 29/6 = 4.83 (pakai casting).`},
 {c:`int a[5] = {1, 2, 3, 4, 5};
int i;
for (i = 4; i >= 0; i--)
    printf("%d ", a[i]);`,o:`5 4 3 2 1 `,w:`Cetak terbalik: mulai dari indeks terakhir (n−1 = 4) turun ke 0.`},
 {c:`int a[7] = {3, 8, 5, 12, 7, 6, 10};
int i, genap = 0;
for (i = 0; i < 7; i++)
    if (a[i] % 2 == 0) genap++;
printf("%d", genap);`,o:`4`,w:`Genap: 8, 12, 6, 10 → 4 buah.`},
 {c:`int a[5] = {1, 2, 3, 4, 5};
int i, t;
for (i = 0; i < 5 / 2; i++) {
    t = a[i];
    a[i] = a[4 - i];
    a[4 - i] = t;
}
for (i = 0; i < 5; i++) printf("%d", a[i]);`,o:`54321`,w:`Membalik isi array: tukar a[0]↔a[4], a[1]↔a[3]. 5/2 = 2 putaran, a[2] tetap di tengah.`},
 {c:`int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
int i, d = 0;
for (i = 0; i < 3; i++) d += a[i][i];
printf("%d %d", a[1][2], d);`,o:`6 15`,w:`Array 2 dimensi: a[baris][kolom]. a[1][2] = baris ke-2 kolom ke-3 = 6. Diagonal 1+5+9 = 15.`}
 ]},

{t:"Fungsi & Rekursi",ic:"🧮",tp:[9],
 intro:`<pre class="code">tipe_kembali nama(parameter) {
    ...
    return nilai;      // void tidak perlu return nilai
}</pre>
 <p>Parameter biasa dikirim <b>by value</b>: fungsi menerima <b>salinan</b>, jadi mengubahnya di dalam fungsi <b>tidak</b> mengubah variabel asli. Untuk mengubah aslinya pakai pointer (<code>int *p</code>, dipanggil dengan <code>&amp;x</code>). Array selalu dikirim sebagai alamat, jadi isinya bisa berubah.</p>
 <p><b>Rekursi</b> = fungsi memanggil dirinya sendiri. Wajib ada <b>base case</b> (kondisi berhenti).</p>`,
 keys:["return langsung mengakhiri fungsi.","By value: variabel asli tidak berubah. Pointer/array: berubah.","Rekursi: base case + pemanggilan dengan nilai yang makin kecil."],
 ex:[
 {c:`#include <stdio.h>
int kuadrat(int x) {
    return x * x;
}
int main() {
    int a = 3;
    printf("%d %d", kuadrat(a), kuadrat(a + 1));
    return 0;
}`,o:`9 16`,w:`kuadrat(3) = 9, kuadrat(4) = 16.`},
 {c:`#include <stdio.h>
void ubah(int x) {
    x = 100;
}
void ubahPtr(int *x) {
    *x = 100;
}
int main() {
    int a = 5, b = 5;
    ubah(a);
    ubahPtr(&b);
    printf("%d %d", a, b);
    return 0;
}`,o:`5 100`,w:`ubah(a) hanya mengubah salinan → a tetap 5. ubahPtr menerima alamat b → b benar-benar jadi 100.`},
 {c:`#include <stdio.h>
int fak(int n) {
    if (n <= 1) return 1;
    return n * fak(n - 1);
}
int main() {
    printf("%d", fak(5));
    return 0;
}`,o:`120`,w:`fak(5) = 5 × fak(4) = 5 × 4 × fak(3) = … = 5×4×3×2×1 = 120. Base case: n ≤ 1 → 1.`},
 {c:`#include <stdio.h>
int f(int n) {
    if (n == 0) return 0;
    printf("%d ", n);
    return n + f(n - 2);
}
int main() {
    printf("= %d", f(6));
    return 0;
}`,o:`6 4 2 = 12`,w:`f(6) cetak 6, panggil f(4) cetak 4, f(2) cetak 2, f(0) = 0. Total 6+4+2+0 = 12.`},
 {c:`#include <stdio.h>
int maks(int a, int b) {
    if (a > b) return a;
    return b;
}
int main() {
    printf("%d", maks(maks(3, 8), maks(6, 2)));
    return 0;
}`,o:`8`,w:`maks(3,8) = 8, maks(6,2) = 6, maks(8,6) = 8.`}
 ]},

{t:"String & Library C",ic:"🔤",tp:[15],
 intro:`<p>String di C = array <code>char</code> yang diakhiri karakter <code>'\\0'</code>. <code>char s[] = "AKU";</code> makan 4 byte (A, K, U, \\0) tapi panjangnya 3.</p>
 <div class="tblwrap"><table class="tbl"><tr><th>Fungsi</th><th>Library</th><th>Guna</th></tr>
 <tr><td><code>strlen(s)</code></td><td>string.h</td><td>panjang string (tanpa \\0)</td></tr>
 <tr><td><code>strcpy(t, s)</code></td><td>string.h</td><td>salin s ke t</td></tr>
 <tr><td><code>strcat(t, s)</code></td><td>string.h</td><td>sambung s di belakang t</td></tr>
 <tr><td><code>strcmp(a, b)</code></td><td>string.h</td><td>0 kalau sama</td></tr>
 <tr><td><code>sqrt, pow, abs</code></td><td>math.h / stdlib.h</td><td>akar, pangkat, nilai mutlak</td></tr>
 <tr><td><code>toupper, tolower, isdigit</code></td><td>ctype.h</td><td>ubah/cek karakter</td></tr>
 <tr><td><code>printf, scanf, gets</code></td><td>stdio.h</td><td>input-output</td></tr>
 <tr><td><code>getch, clrscr</code></td><td>conio.h</td><td>tahan layar, bersihkan layar</td></tr></table></div>`,
 keys:["String diakhiri <code>'\\0'</code>; strlen tidak menghitungnya.","Bandingkan string pakai <code>strcmp</code>, bukan <code>==</code>.","Hafalkan library tiap fungsi (sering keluar)."],
 ex:[
 {c:`char s[20] = "Algo";
char t[] = "ritma";
strcat(s, t);
printf("%s %d", s, (int)strlen(s));`,o:`Algoritma 9`,w:`strcat menyambung "ritma" ke "Algo". Panjangnya 9 huruf.`},
 {c:`char s[] = "DATA";
int i;
for (i = 3; i >= 0; i--)
    printf("%c", s[i]);
printf(" %c", s[1] + 1);`,o:`ATAD B`,w:`Cetak terbalik dari indeks 3. s[1] = 'A', 'A'+1 = 'B'.`},
 {c:`char s[] = "Halo Dunia";
int i, v = 0;
for (i = 0; s[i] != '\\0'; i++)
    if (s[i] == 'a' || s[i] == 'u') v++;
printf("%d", v);`,o:`3`,w:`Loop sampai ketemu '\\0'. Huruf a/u kecil: H<b>a</b>lo D<b>u</b>ni<b>a</b> → 3.`},
 {c:`printf("%d %.0f %d", abs(-7), pow(2, 5), (int)sqrt(49));`,o:`7 32 7`,w:`abs (stdlib.h) → 7. pow(2,5) = 32 (math.h, hasilnya double). sqrt(49) = 7.`}
 ]},

{t:"Kode Searching",ic:"🔎",tp:[10],
 intro:`<p><b>Sequential</b>: cek satu per satu dari depan; data <b>tidak</b> perlu urut. <b>Binary</b>: data <b>wajib urut</b>; bandingkan dengan elemen tengah, buang separuh tiap langkah.</p>
 <pre class="code">int seqSearch(int a[], int n, int x) {
    int i;
    for (i = 0; i &lt; n; i++)
        if (a[i] == x) return i;   // ketemu → kembalikan indeks
    return -1;                     // tidak ketemu
}

int binSearch(int a[], int n, int x) {
    int bawah = 0, atas = n - 1, tengah;
    while (bawah &lt;= atas) {
        tengah = (bawah + atas) / 2;
        if (a[tengah] == x) return tengah;
        else if (x &lt; a[tengah]) atas = tengah - 1;
        else bawah = tengah + 1;
    }
    return -1;
}</pre>`,
 keys:["Sequential: return indeks saat ketemu, <code>-1</code> setelah loop selesai.","Binary: <code>while (bawah &lt;= atas)</code>, <code>tengah = (bawah + atas) / 2</code>.","x lebih kecil → <code>atas = tengah - 1</code>; lebih besar → <code>bawah = tengah + 1</code>."],
 ex:[
 {c:`int a[6] = {7, 3, 9, 3, 5, 1};
int i, x = 3, pos = -1, cek = 0;
for (i = 0; i < 6; i++) {
    cek++;
    if (a[i] == x) { pos = i; break; }
}
printf("%d %d", pos, cek);`,o:`1 2`,w:`Sequential berhenti di kemunculan <b>pertama</b>: a[1] = 3, setelah 2 perbandingan.`},
 {c:`int a[8] = {2, 5, 8, 12, 16, 23, 38, 56};
int bawah = 0, atas = 7, tengah, x = 23;
while (bawah <= atas) {
    tengah = (bawah + atas) / 2;
    printf("%d ", tengah);
    if (a[tengah] == x) break;
    else if (x < a[tengah]) atas = tengah - 1;
    else bawah = tengah + 1;
}`,o:`3 5 `,w:`<pre class="work">bawah atas tengah a[tengah]
0     7    3      12  → 23 &gt; 12, bawah = 4
4     7    5      23  → ketemu!</pre>`},
 {c:`int a[7] = {1, 3, 5, 7, 9, 11, 13};
int bawah = 0, atas = 6, tengah, x = 4, n = 0;
while (bawah <= atas) {
    tengah = (bawah + atas) / 2;
    n++;
    if (a[tengah] == x) break;
    else if (x < a[tengah]) atas = tengah - 1;
    else bawah = tengah + 1;
}
printf("%d %d %d", n, bawah, atas);`,o:`3 2 1`,w:`tengah 3 (7) → atas=2; tengah 1 (3) → bawah=2; tengah 2 (5) → atas=1. bawah &gt; atas → <b>tidak ketemu</b> setelah 3 kali.`}
 ]},

{t:"Kode Sorting",ic:"📶",tp:[12,13,16,14],
 intro:`<p>Empat kode yang <b>wajib bisa ditulis</b>. Latih di tab <b>🧩 Hafal Template</b> sampai lancar.</p>
 <pre class="code">// BUBBLE: tukar 2 tetangga, yang terbesar "menggelembung" ke belakang
for (i = 0; i &lt; n - 1; i++)
    for (j = 0; j &lt; n - 1 - i; j++)
        if (a[j] &gt; a[j + 1]) {
            temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
        }

// SELECTION: cari indeks minimum, tukar ke depan (1 tukar per pass)
for (i = 0; i &lt; n - 1; i++) {
    min = i;
    for (j = i + 1; j &lt; n; j++)
        if (a[j] &lt; a[min]) min = j;
    temp = a[i]; a[i] = a[min]; a[min] = temp;
}

// INSERTION: ambil key, geser yang lebih besar ke kanan, sisipkan
for (i = 1; i &lt; n; i++) {
    key = a[i];
    j = i - 1;
    while (j &gt;= 0 &amp;&amp; a[j] &gt; key) {
        a[j + 1] = a[j];
        j--;
    }
    a[j + 1] = key;
}

// SHELL: seperti insertion, tapi lompat sejauh gap
for (gap = n / 2; gap &gt; 0; gap /= 2)
    for (i = gap; i &lt; n; i++) {
        temp = a[i];
        for (j = i; j &gt;= gap &amp;&amp; a[j - gap] &gt; temp; j -= gap)
            a[j] = a[j - gap];
        a[j] = temp;
    }</pre>
 <p><b>Descending</b>: cukup balik tanda perbandingannya (<code>&gt;</code> jadi <code>&lt;</code>).</p>`,
 keys:["Bubble: loop dalam <code>j &lt; n - 1 - i</code>, bandingkan <code>a[j]</code> dengan <code>a[j+1]</code>.","Selection: <code>min = i</code> di awal pass, tukar <b>setelah</b> loop dalam.","Insertion: <code>while (j &gt;= 0 &amp;&amp; a[j] &gt; key)</code> lalu <code>a[j+1] = key</code>."],
 ex:[
 {c:`int a[5] = {5, 3, 8, 1, 4};
int i, j, k, temp, n = 5;
for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - 1 - i; j++)
        if (a[j] > a[j + 1]) {
            temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
        }
    for (k = 0; k < n; k++) printf("%d ", a[k]);
    printf("\\n");
}`,o:`3 5 1 4 8
3 1 4 5 8
1 3 4 5 8
1 3 4 5 8
`,w:`Bubble: tiap pass, angka terbesar yang tersisa pindah ke ujung kanan (8, lalu 5, lalu 4…).`},
 {c:`int a[5] = {5, 3, 8, 1, 4};
int i, j, k, min, temp, n = 5;
for (i = 0; i < n - 1; i++) {
    min = i;
    for (j = i + 1; j < n; j++)
        if (a[j] < a[min]) min = j;
    temp = a[i]; a[i] = a[min]; a[min] = temp;
    for (k = 0; k < n; k++) printf("%d ", a[k]);
    printf("\\n");
}`,o:`1 3 8 5 4
1 3 8 5 4
1 3 4 5 8
1 3 4 5 8
`,w:`Selection: pass 1 minimum = 1 ditukar dengan a[0] = 5. Pass 2: 3 sudah di tempatnya (tukar dengan dirinya sendiri). Pass 3: minimum 4 ditukar dengan 8.`},
 {c:`int a[5] = {5, 3, 8, 1, 4};
int i, j, k, key, n = 5;
for (i = 1; i < n; i++) {
    key = a[i];
    j = i - 1;
    while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j--;
    }
    a[j + 1] = key;
    for (k = 0; k < n; k++) printf("%d ", a[k]);
    printf("\\n");
}`,o:`3 5 8 1 4
3 5 8 1 4
1 3 5 8 4
1 3 4 5 8
`,w:`Insertion: bagian kiri selalu sudah urut. key = 3 disisip sebelum 5; key = 8 tetap; key = 1 digeser ke paling depan; key = 4 disisip setelah 3.`},
 {c:`int a[6] = {6, 2, 9, 1, 5, 3};
int i, j, temp, tukar = 0, n = 6;
for (i = 0; i < n - 1; i++)
    for (j = 0; j < n - 1 - i; j++)
        if (a[j] < a[j + 1]) {
            temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
            tukar++;
        }
for (i = 0; i < n; i++) printf("%d ", a[i]);
printf("| %d", tukar);`,o:`9 6 5 3 2 1 | 6`,w:`Tanda <code>&lt;</code> → <b>descending</b>. Jumlah tukar bubble = jumlah pasangan yang terbalik (inversi) = 6.`},
 {c:`int a[6] = {8, 5, 2, 9, 1, 4};
int n = 6, gap, i, j, k, temp;
for (gap = n / 2; gap > 0; gap /= 2) {
    for (i = gap; i < n; i++) {
        temp = a[i];
        for (j = i; j >= gap && a[j - gap] > temp; j -= gap)
            a[j] = a[j - gap];
        a[j] = temp;
    }
    printf("gap %d: ", gap);
    for (k = 0; k < n; k++) printf("%d ", a[k]);
    printf("\\n");
}`,o:`gap 3: 8 1 2 9 5 4
gap 1: 1 2 4 5 8 9
`,w:`Gap 3: bandingkan pasangan berjarak 3 → (8,9) tetap, (5,1) tukar, (2,4) tetap. Gap 3/2 = 1 → insertion biasa sampai urut.`}
 ]}
];

/* Template wajib hafal. «jawaban» = bagian yang bisa dikosongkan; alternatif jawaban dipisah "||". */
var CODING_TPL=[
{id:"swap",t:"Tukar 2 nilai (swap)",code:`temp = «a»;
a = «b»;
b = «temp»;`},
{id:"jumlah",t:"Jumlah & rata-rata array",code:`int s = «0»;
for (i = 0; i «<» n; i++)
    s «+=» a[i];
rata = «(float)» s / n;`},
{id:"maks",t:"Cari nilai maksimum",code:`mx = «a[0]»;
for (i = «1»; i < n; i++)
    if (a[i] «>» mx)
        mx = «a[i]»;`},
{id:"genap",t:"Hitung bilangan genap",code:`c = 0;
for (i = 0; i < n; i++)
    if (a[i] «%» 2 «==» 0)
        «c++||c+=1||c=c+1||++c»;`},
{id:"digit",t:"Jumlah digit angka",code:`jum = 0;
while (n «>» 0) {
    jum += n «%» 10;
    n «/=» 10;
}`},
{id:"bintang",t:"Pola segitiga bintang",code:`for (i = 1; i <= n; i++) {
    for (j = 1; j «<=» «i»; j++)
        printf("*");
    printf(«"\\n"»);
}`},
{id:"fak",t:"Faktorial (loop & rekursi)",code:`f = «1»;
for (i = 1; i <= n; i++)
    f «*=» i;

int fak(int n) {
    if (n <= 1) return «1»;
    return n * «fak(n - 1)||fak(n-1)»;
}`},
{id:"balik",t:"Membalik array",code:`for (i = 0; i < n «/» 2; i++) {
    t = a[i];
    a[i] = a[«n - 1 - i||n-1-i»];
    a[n - 1 - i] = «t»;
}`},
{id:"seq",t:"Sequential search",code:`int seqSearch(int a[], int n, int x) {
    int i;
    for (i = «0»; i < «n»; i++)
        if (a[i] «==» x)
            return «i»;
    return «-1»;
}`},
{id:"bin",t:"Binary search",code:`int bawah = 0, atas = «n - 1||n-1», tengah;
while (bawah «<=» atas) {
    tengah = «(bawah + atas) / 2||(bawah+atas)/2»;
    if (a[tengah] == x) return «tengah»;
    else if (x < a[tengah]) atas = «tengah - 1||tengah-1»;
    else bawah = «tengah + 1||tengah+1»;
}
return -1;`},
{id:"bubble",t:"Bubble sort (ascending)",code:`for (i = 0; i < «n - 1||n-1»; i++)
    for (j = 0; j < «n - 1 - i||n-1-i||n-i-1||n - i - 1»; j++)
        if (a[j] «>» a[«j + 1||j+1»]) {
            temp = «a[j]»;
            a[j] = «a[j + 1]||a[j+1]»;
            a[j + 1] = «temp»;
        }`},
{id:"bubflag",t:"Bubble sort + flag (berhenti kalau sudah urut)",code:`for (i = 0; i < n - 1; i++) {
    tukar = «0»;
    for (j = 0; j < n - 1 - i; j++)
        if (a[j] > a[j + 1]) {
            temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
            tukar = «1»;
        }
    if (tukar == 0) «break»;
}`},
{id:"selection",t:"Selection sort",code:`for (i = 0; i < n - 1; i++) {
    min = «i»;
    for (j = «i + 1||i+1»; j < «n»; j++)
        if (a[j] «<» a[min])
            min = «j»;
    temp = a[i];
    a[i] = «a[min]»;
    a[min] = «temp»;
}`},
{id:"insertion",t:"Insertion sort",code:`for (i = «1»; i < n; i++) {
    key = «a[i]»;
    j = «i - 1||i-1»;
    while (j «>=» 0 «&&» a[j] «>» key) {
        a[«j + 1||j+1»] = a[j];
        «j--||j-=1||j=j-1||--j»;
    }
    a[j + 1] = «key»;
}`},
{id:"shell",t:"Shell sort",code:`for (gap = «n / 2||n/2»; gap > 0; gap «/=» 2)
    for (i = «gap»; i < n; i++) {
        temp = a[i];
        for (j = i; j >= gap && a[«j - gap||j-gap»] > temp; j «-=» gap)
            a[j] = a[j - gap];
        a[j] = «temp»;
    }`},
{id:"queue",t:"Queue: enqueue & dequeue (array)",code:`void enqueue(int x) {
    if (rear == «MAX - 1||MAX-1») printf("Penuh");
    else { rear«++»; q[«rear»] = x; }
}
int dequeue() {
    int x = q[«front»];
    front«++»;
    return x;
}`},
{id:"main",t:"Kerangka program + input",code:`#include <«stdio.h»>
int «main»() {
    int x;
    scanf("«%d»", «&x»);
    printf("Nilai: %d\\n", x);
    return «0»;
}`}
];
