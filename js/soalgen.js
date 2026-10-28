/* Generator soal pilihan ganda acak (tanpa batas).
   IIT: soal hitungan (konversi basis, aritmatika biner, komplemen, BCD, logika, data).
   ADS: soal "kode C ini output-nya apa".
   Tiap generator: {id, t (indeks topik), w (poin 1–3), make()} → {q, o, a, e[, w]}.
   Opsi pertama selalu jawaban benar; urutan opsi diacak saat ditampilkan. */
(function(){
"use strict";
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const P=a=>a[Math.floor(Math.random()*a.length)];
const E=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const SUBD="₀₁₂₃₄₅₆₇₈₉",SUPD="⁰¹²³⁴⁵⁶⁷⁸⁹";
const sub=n=>String(n).replace(/\d/g,d=>SUBD[d]);
const sup=n=>String(n).replace(/\d/g,d=>SUPD[d]);
const rev=s=>String(s).split("").reverse().join("");
const nz=s=>s.replace(/^0+(?=.)/,"");
const b2=n=>n.toString(2),o8=n=>n.toString(8),h16=n=>n.toString(16).toUpperCase();
const b8=n=>(((n%256)+256)%256).toString(2).padStart(8,"0");
const bin4=n=>n.toString(2).padStart(4,"0");
const g4=s=>s.replace(/\B(?=(\d{4})+(?!\d))/g," ");
const flip=s=>s.replace(/[01]/g,c=>c==="0"?"1":"0");
const nf=n=>n.toLocaleString("id-ID");
const T=b=>b?"B":"S";
const code=s=>`<pre class="code">${E(s)}</pre>`;
const sum=a=>a.reduce((x,y)=>x+y,0);

/* opsi: jawaban benar + pengecoh unik (min. 2, maks. 4 opsi) */
function Q(q,c,cands,e,fb){
  const o=[String(c)];
  for(const x of cands){const s=String(x);if(o.length<4&&s!==""&&!o.includes(s)&&!/NaN|undefined|Infinity/.test(s))o.push(s);}
  let g=0;while(fb&&o.length<4&&g++<80){const s=String(fb());if(s!==""&&!o.includes(s))o.push(s);}
  return {q,o,a:0,e};
}
function powsum(n){const p=[];for(let v=1<<12;v>=1;v>>=1)if(n&v)p.push(v);return p.join(" + ");}
function divs(n,b){const s=[];let x=n;while(x>0){const r=x%b;s.push(`${x}÷${b}=${Math.floor(x/b)} sisa ${b===16&&r>9?r+" ("+h16(r)+")":r}`);x=Math.floor(x/b);}return s.join(" · ");}
function posv(s,b){
  const d=s.split(""),L=d.length,parts=[],vals=[];
  d.forEach((ch,i)=>{const v=parseInt(ch,b),p=L-1-i;if(v){parts.push(`${v}×${b}${sup(p)}`);vals.push(v*Math.pow(b,p));}});
  return parts.join(" + ")+" = "+vals.join(" + ")+" = "+parseInt(s,b);
}
const grp=(s,k)=>s.padStart(Math.ceil(s.length/k)*k,"0").match(new RegExp(".{"+k+"}","g"));
const leftWrong=(s,k,base)=>s.match(new RegExp(".{1,"+k+"}","g")).map(g=>parseInt(g,2).toString(base).toUpperCase()).join("");
const bcd=n=>String(n).split("").map(d=>bin4(+d)).join(" ");

/* ======================= IIT: HITUNGAN ======================= */
const IIT=[
{id:"d2b",t:3,w:2,make(){const n=R(20,255),c=b2(n);
  return Q(`${n}${sub(10)} dalam biner adalah…`,c,[nz(rev(c)),b2(n+1),b2(n-1),b2(n+2)],`Bagi 2 berulang, sisa dibaca dari bawah ke atas → ${c}₂. Cek nilai posisi: ${powsum(n)} = ${n}.`);}},
{id:"b2d",t:3,w:2,make(){const n=R(20,255),s=b2(n);
  return Q(`${s}${sub(2)} dalam desimal adalah…`,n,[n+1,n-1,parseInt(rev(s),2),n+2,n-2],`Jumlahkan nilai posisi bit yang bernilai 1: ${powsum(n)} = ${n}.`);}},
{id:"d2h",t:3,w:2,make(){const n=R(30,999),c=h16(n),dg=[];let x=n;while(x>0){dg.unshift(x%16);x=Math.floor(x/16);}
  return Q(`${n}${sub(10)} dalam heksadesimal adalah…`,c,[dg.some(d=>d>9)?dg.join(""):h16(n+16),nz(rev(c)),h16(n+1),h16(n-1)],`${divs(n,16)} → sisa dibaca bawah ke atas = ${c}₁₆ (10=A … 15=F).`);}},
{id:"h2d",t:3,w:2,make(){const n=R(30,999),h=h16(n);
  return Q(`${h}${sub(16)} dalam desimal adalah…`,n,[n+16,n-16,parseInt(rev(h),16),n+1,n-1],`${posv(h,16)} (A=10, B=11, C=12, D=13, E=14, F=15).`);}},
{id:"d2o",t:3,w:2,make(){const n=R(10,500),c=o8(n);
  return Q(`${n}${sub(10)} dalam oktal adalah…`,c,[nz(rev(c)),o8(n+1),o8(n-1),o8(n+8)],`${divs(n,8)} → baca sisa dari bawah ke atas = ${c}₈.`);}},
{id:"o2d",t:3,w:2,make(){const n=R(10,500),s=o8(n);
  return Q(`${s}${sub(8)} dalam desimal adalah…`,n,[parseInt(s,10),n+8,n-8,parseInt(rev(s),8),n+1],`${posv(s,8)}. Jangan dibaca sebagai angka desimal biasa.`);}},
{id:"b2o",t:3,w:2,make(){const n=R(64,511),s=b2(n),c=o8(n);
  return Q(`${s}${sub(2)} dalam oktal adalah…`,c,[leftWrong(s,3,8),o8(n+1),o8(n-1),nz(rev(c))],`Grup 3-bit dari KANAN: ${grp(s,3).join(" ")} → ${grp(s,3).map(g=>parseInt(g,2)).join(" ")} = ${c}₈.`,()=>o8(n+R(2,12)));}},
{id:"b2h",t:3,w:2,make(){const n=R(64,1023),s=b2(n),c=h16(n);
  return Q(`${s}${sub(2)} dalam heksadesimal adalah…`,c,[leftWrong(s,4,16),h16(n+1),h16(n-1),nz(rev(c))],`Grup 4-bit dari KANAN: ${grp(s,4).join(" ")} → ${grp(s,4).map(g=>h16(parseInt(g,2))).join(" ")} = ${c}₁₆.`,()=>h16(n+R(2,20)));}},
{id:"h2b",t:3,w:2,make(){const n=R(17,255),h=h16(n),L=h.length*4,f=v=>g4(b2(v).padStart(L,"0"));
  return Q(`${h}${sub(16)} dalam biner adalah…`,f(n),[f(parseInt(rev(h),16)),f(n+1),f(n-1),f(n^8)],`Tiap digit heksa = 4 bit: ${h.split("").map(d=>d+" = "+bin4(parseInt(d,16))).join(", ")} → ${f(n)}.`);}},
{id:"add",t:3,w:2,make(){const a=R(8,60),b=R(8,60),c=b2(a+b);
  return Q(`${b2(a)}${sub(2)} + ${b2(b)}${sub(2)} = …`,c,[b2(a^b),b2(a+b+1),b2(a+b-1),b2(a+b+2)],`${b2(a)} = ${a}, ${b2(b)} = ${b}. ${a} + ${b} = ${a+b} = ${c}₂. Ingat: 1+1 = 0 simpan 1, 1+1+1 = 1 simpan 1.`);}},
{id:"sub",t:3,w:2,make(){const a=R(20,63),b=R(5,a-3),c=b2(a-b);
  return Q(`${b2(a)}${sub(2)} − ${b2(b)}${sub(2)} = …`,c,[b2(a+b),b2(a-b+1),b2(a-b-1),b2(a-b+2)],`${b2(a)} = ${a}, ${b2(b)} = ${b}. ${a} − ${b} = ${a-b} = ${c}₂. Ingat: 0 − 1 = 1 pinjam 1.`);}},
{id:"c1",t:3,w:1,make(){const n=R(1,120),s=b8(n),c=g4(flip(s));
  return Q(`Komplemen-1 dari ${g4(s)} adalah…`,c,[g4(b8(-n)),g4(s),g4(flip(s).slice(0,7)+s[7]),g4(rev(s))],`Komplemen-1 = balik semua bit (0↔1): ${g4(s)} → ${c}.`,()=>g4(b8(R(1,255))));}},
{id:"c2",t:3,w:2,make(){const n=R(1,120),c=g4(b8(-n));
  return Q(`−${n} dalam komplemen-2 (8-bit) adalah…`,c,[g4(flip(b8(n))),g4(b8(n)),g4("1"+b8(n).slice(1)),g4(b8(-n+1))],`${n} = ${g4(b8(n))} → komplemen-1 (balik bit) = ${g4(flip(b8(n)))} → tambah 1 = ${c}. Jebakan: lupa +1.`);}},
{id:"c2d",t:3,w:3,make(){const v=R(2,120),s=b8(-v);
  return Q(`Bilangan 8-bit komplemen-2 <b>${g4(s)}</b> bernilai (desimal)…`,"−"+v,["+"+parseInt(s,2),"−"+(v-1),"−"+(v+1),"+"+v],`MSB = 1 → negatif. Komplemen-2-kan lagi: balik bit → ${g4(flip(s))}, +1 → ${g4(b8(v))} = ${v}. Jadi nilainya −${v}.`);}},
{id:"subc2",t:3,w:3,make(){const A=R(20,100),B=R(5,A-1),r=A-B,c=g4(b8(r));
  return Q(`Hitung ${A} − ${B} memakai komplemen-2 (8-bit). Hasil binernya…`,c,[g4(b8(A+B)),"1 "+c,g4(b8(r+1)),g4(b8(r-1))],`−${B} = ${g4(b8(-B))} (komplemen-2 dari ${B}). ${g4(b8(A))} + ${g4(b8(-B))} = 1 ${c} → buang carry ke-9 → ${c} = ${r}.`);}},
{id:"bcd",t:3,w:1,make(){const n=R(10,999),c=bcd(n);
  return Q(`${n} dalam kode BCD adalah…`,c,[g4(b2(n)),bcd(+rev(n)||n+1),bcd(n+1),bcd(n+10)],`BCD: tiap digit desimal ditulis 4-bit: ${String(n).split("").map(d=>d+" = "+bin4(+d)).join(", ")} → ${c}. Beda dengan biner murni (${g4(b2(n))}).`);}},
{id:"bcdadd",t:3,w:3,make(){const a=R(2,9),b=R(Math.max(1,10-a),9),s=a+b,c="0001 "+bin4(s-10);
  return Q(`${a} + ${b} dalam penjumlahan BCD menghasilkan…`,c,["0000 "+bin4(s),"0001 "+bin4((s-9)%16),"0001 "+bin4((s-11+16)%16)],`${bin4(a)} + ${bin4(b)} = ${b2(s)} (= ${s}, lebih dari 9 → tidak valid) → tambah 0110 → ${g4(b2(s+6))} → ${c} = BCD “${s}”.`);}},
{id:"rows",t:3,w:1,make(){const n=R(2,6),c=2**n;
  return Q(`Tabel kebenaran dengan ${n} pernyataan tunggal memiliki berapa baris?`,c,[2*n,n*n,2**(n-1),2**(n+1)],`Jumlah baris = 2ⁿ = 2${sup(n)} = ${c}.`,()=>R(2,70));}},
{id:"logic",t:3,w:2,make(){
  const p=Math.random()<.5,q=Math.random()<.5,r=Math.random()<.5;
  const X=P([
    ["(p ∧ q) → r",()=>{const a=p&&q,v=!a||r;return[v,`p ∧ q = ${T(a)}; ${T(a)} → ${T(r)} = ${T(v)}`];}],
    ["~p ∨ q",()=>{const a=!p,v=a||q;return[v,`~p = ${T(a)}; ${T(a)} ∨ ${T(q)} = ${T(v)}`];}],
    ["(p → q) ∧ r",()=>{const a=!p||q,v=a&&r;return[v,`p → q = ${T(a)}; ${T(a)} ∧ ${T(r)} = ${T(v)}`];}],
    ["~(p ∧ q)",()=>{const a=p&&q,v=!a;return[v,`p ∧ q = ${T(a)}; negasinya = ${T(v)}`];}],
    ["(~p ∧ q) → r",()=>{const a=!p&&q,v=!a||r;return[v,`~p = ${T(!p)}; ~p ∧ q = ${T(a)}; ${T(a)} → ${T(r)} = ${T(v)}`];}],
    ["p ∨ (q ∧ ~r)",()=>{const a=q&&!r,v=p||a;return[v,`~r = ${T(!r)}; q ∧ ~r = ${T(a)}; ${T(p)} ∨ ${T(a)} = ${T(v)}`];}],
    ["(p ∨ q) → ~r",()=>{const a=p||q,v=!a||!r;return[v,`p ∨ q = ${T(a)}; ~r = ${T(!r)}; ${T(a)} → ${T(!r)} = ${T(v)}`];}]
  ]);
  const [v,st]=X[1]();
  return {q:`Jika p = ${T(p)}, q = ${T(q)}, r = ${T(r)} (B = benar, S = salah), nilai dari <b>${X[0]}</b> adalah…`,o:[v?"Benar (B)":"Salah (S)",v?"Salah (S)":"Benar (B)"],a:0,e:`${st}. Ingat: AND benar hanya jika keduanya B; implikasi salah hanya B → S.`};}},
{id:"combo",t:3,w:1,make(){const n=R(3,10),c=2**n;
  return Q(`Kode ${n}-bit mampu membentuk berapa kombinasi?`,c,[2*n,n*n,2**n-1,2**(n-1)],`Kombinasi = 2ⁿ = 2${sup(n)} = ${c}.`,()=>R(5,999));}},
{id:"posv",t:3,w:1,make(){const dg=[];while(dg.length<4){const d=R(1,9);if(!dg.includes(d))dg.push(d);}const num=+dg.join(""),i=R(0,3),d=dg[i],p=3-i;
  return Q(`Pada bilangan desimal ${nf(num)}, nilai angka ${d} berdasarkan posisinya adalah…`,nf(d*10**p),[nf(d*10**(p+1)),p?nf(d*10**(p-1)):nf(d*100),String(d*p||d*1000),nf(d*10**p+d)],`${d} berada di posisi ${p} (dihitung dari kanan mulai 0) → ${d} × 10${sup(p)} = ${nf(d*10**p)}.`);}},
{id:"dl",t:4,w:2,make(){const sp=P([8000,16000,20000,33600,40000,56000]),t=R(5,150),by=t*sp/8;
  return Q(`File ${nf(by)} Byte diunduh dengan kecepatan ${nf(sp)} bps. Waktu unduhnya…`,t+" detik",[Math.max(1,Math.round(by/sp))+" detik",t*8+" detik",(t+R(3,12))+" detik"],`Ubah ke bit dulu: ${nf(by)} × 8 = ${nf(by*8)} bit. Lalu ${nf(by*8)} ÷ ${nf(sp)} = ${t} detik. Jebakan: lupa ×8.`);}},
{id:"dlkb",t:4,w:3,make(){const sp=P([8192,16384,32768]),t=R(4,60),kb=t*sp/8192;
  return Q(`File ${nf(kb)} KB (1 KB = 1.024 Byte) diunduh pada ${nf(sp)} bps. Waktu unduhnya…`,t+" detik",[(t/8).toFixed(1).replace(".",",")+" detik",t*8+" detik",Math.round(kb*8000/sp)+" detik"],`${nf(kb)} KB × 1.024 = ${nf(kb*1024)} Byte × 8 = ${nf(kb*8192)} bit ÷ ${nf(sp)} bps = ${t} detik.`,()=>(t+R(2,9))+" detik");}},
{id:"comp",t:4,w:2,make(){const B=R(500,5000),A=R(Math.round(B*.03),Math.round(B*.6)),r=+(A/B*100).toFixed(2),eff=+(100-r).toFixed(2),f=x=>x.toFixed(2).replace(".",",")+"%";
  return Q(`Gambar ${nf(B)} KB dikompres menjadi ${nf(A)} KB. Efisiensi kompresinya…`,f(eff),[f(r),f(eff+1.5),f(Math.max(0,eff-2.25))],`100% − (${nf(A)} ÷ ${nf(B)} × 100%) = 100% − ${f(r)} = ${f(eff)}.`,()=>f(Math.max(0,eff+R(-9,9)+.5)));}},
{id:"unit",t:4,w:1,make(){const v=R(0,2),x=R(2,64);
  if(v===0)return Q(`${x} MB sama dengan berapa KB?`,nf(x*1024)+" KB",[nf(x*1000)+" KB",nf(x*8)+" KB",nf(x*1024*1024)+" KB"],`Naik/turun satu tingkat satuan = ×1024 → ${x} × 1.024 = ${nf(x*1024)} KB.`);
  if(v===1)return Q(`${nf(x*1000)} Byte sama dengan berapa bit?`,nf(x*8000)+" bit",[nf(x*1000/8)+" bit",nf(x*1000)+" bit",nf(x*1024*8)+" bit"],`1 Byte = 8 bit → ${nf(x*1000)} × 8 = ${nf(x*8000)} bit.`);
  return Q(`${x} GB sama dengan berapa MB?`,nf(x*1024)+" MB",[nf(x*1000)+" MB",nf(x/1024)+" MB",nf(x*8)+" MB"],`GB → MB dikali 1024 → ${nf(x*1024)} MB.`);}}
];

/* ======================= ADS: KODE → OUTPUT ======================= */
const OUT="Output program berikut adalah…";
const ADS=[
{id:"divmod",t:4,w:1,make(){let a,b;do{a=R(10,99);b=R(2,9);}while(a%b===0);const q=Math.trunc(a/b),r=a%b;
  return Q(OUT+code(`int a = ${a}, b = ${b};\nprintf("%d %d", a / b, a % b);`),`${q} ${r}`,[`${(a/b).toFixed(1)} ${r}`,`${r} ${q}`,`${q+1} ${r}`,`${q} ${b-r}`],`a / b pada int membuang pecahan → ${a}/${b} = ${q}. a % b = sisa bagi → ${r}.`);}},
{id:"divchain",t:4,w:2,make(){let A,B;do{A=R(10,99);B=R(3,9);}while(A%B===0);const c=Math.trunc(A/B)*B;
  return Q(OUT+code(`int x = ${A} / ${B} * ${B};\nprintf("%d", x);`),c,[A,Math.trunc(A/B),A%B,c+B],`Dievaluasi kiri ke kanan: ${A} / ${B} = ${Math.trunc(A/B)} (pecahan dibuang), lalu × ${B} = ${c}. Bukan ${A}!`);}},
{id:"cast",t:4,w:2,make(){const b=P([2,4,5]);let a;do{a=R(5,49);}while(a%b===0);const real=(a/b).toFixed(2),trunc=Math.trunc(a/b).toFixed(2),v=R(0,1);
  return v?Q(OUT+code(`int a = ${a}, b = ${b};\nfloat h = a / b;\nprintf("%.2f", h);`),trunc,[real,String(Math.trunc(a/b)),(a/b).toFixed(1)],`a / b dihitung sebagai int dulu (${Math.trunc(a/b)}), baru disimpan ke float → ${trunc}. Biar ${real}, pakai casting: (float)a / b.`)
          :Q(OUT+code(`int a = ${a}, b = ${b};\nprintf("%.2f", (float)a / b);`),real,[trunc,String(Math.trunc(a/b)),(a/b).toFixed(1)],`Casting (float) membuat pembagian tidak lagi bulat: ${a} / ${b} = ${real}. %.2f = 2 angka desimal.`);}},
{id:"compound",t:4,w:2,make(){let x=R(3,20);const x0=x,lines=[],tr=[x];let prev=x;
  for(let k=0;k<3;k++){let [op,v]=P([["+=",R(1,9)],["-=",R(1,5)],["*=",R(2,4)],["/=",R(2,4)],["%=",R(3,7)]]);
    let nx=op==="+="?x+v:op==="-="?x-v:op==="*="?x*v:op==="/="?Math.trunc(x/v):x%v;
    if(nx<=0){op="+=";nx=x+v;}prev=x;x=nx;lines.push(`x ${op} ${v};`);tr.push(x);}
  return Q(OUT+code(`int x = ${x0};\n${lines.join("\n")}\nprintf("%d", x);`),x,[x+1,x-1,prev,x*2],`Telusuri satu per satu: x = ${tr.join(" → ")}. Ingat /= dan %= pada int: pecahan dibuang / sisa bagi.`,()=>x+R(2,9));}},
{id:"incdec",t:4,w:2,make(){const x=R(2,15),ops={"x++":[x+1,x],"++x":[x+1,x+1],"x--":[x-1,x],"--x":[x-1,x-1]},v=P(Object.keys(ops)),[nx,y]=ops[v];
  return Q(OUT+code(`int x = ${x}, y;\ny = ${v};\nprintf("%d %d", x, y);`),`${nx} ${y}`,Object.values(ops).map(([a,b])=>`${a} ${b}`).concat([`${x} ${x}`]),v.indexOf("x")===0?`${v} (post): y mengambil nilai LAMA x (${x}) dulu, baru x berubah jadi ${nx}.`:`${v} (pre): x berubah dulu jadi ${nx}, baru nilainya dipakai → y = ${y}.`);}},
{id:"relop",t:4,w:1,make(){const a=R(1,15),b=Math.random()<.3?a:R(1,15),r=[+(a>b),+(a===b),+(a!==b)],c=r.join(" ");
  const all=["0 0 0","0 0 1","0 1 0","0 1 1","1 0 0","1 0 1","1 1 0","1 1 1"].filter(s=>s!==c);
  return Q(OUT+code(`int a = ${a}, b = ${b};\nprintf("%d %d %d", a > b, a == b, a != b);`),c,[...all.sort(()=>Math.random()-.5).slice(0,2),r.map(v=>v?"true":"false").join(" ")],`Di C ekspresi relasional menghasilkan 1 (benar) atau 0 (salah): ${a}>${b} = ${r[0]}, ${a}==${b} = ${r[1]}, ${a}!=${b} = ${r[2]}.`);}},
{id:"logic",t:5,w:2,make(){const a=R(1,20),b=R(1,20),c=R(1,20),c1=a>b&&b>c,c2=a>c||b===c,out=c1?"X":c2?"Y":"Z";
  return Q(OUT+code(`int a = ${a}, b = ${b}, c = ${c};\nif (a > b && b > c)\n    printf("X");\nelse if (a > c || b == c)\n    printf("Y");\nelse\n    printf("Z");`),out,["X","Y","Z","XY"],`a > b && b > c → ${a>b?1:0} && ${b>c?1:0} = ${c1?1:0}. ${c1?"Benar → cetak X, sisa cabang dilewati.":`Salah, lanjut: a > c || b == c → ${a>c?1:0} || ${b===c?1:0} = ${c2?1:0} → ${c2?"cetak Y":"masuk else, cetak Z"}.`}`);}},
{id:"ternary",t:4,w:1,make(){if(Math.random()<.5){const a=R(1,50);let b;do{b=R(1,50);}while(b===a);const m=Math.max(a,b);
    return Q(OUT+code(`int a = ${a}, b = ${b};\nint m = (a > b) ? a : b;\nprintf("%d", m);`),m,[Math.min(a,b),a+b,1],`(kondisi) ? nilai_jika_benar : nilai_jika_salah. ${a} > ${b} = ${a>b?"benar → a":"salah → b"} = ${m}.`,()=>R(1,99));}
  const n=R(1,99),g=n%2===0;
  return Q(OUT+code(`int n = ${n};\nprintf("%s", (n % 2 == 0) ? "genap" : "ganjil");`),g?"genap":"ganjil",[g?"ganjil":"genap",String(n%2),"error"],`${n} % 2 = ${n%2} → ${g?"benar → \"genap\"":"salah → \"ganjil\""}.`);}},
{id:"grade",t:5,w:2,make(){const n=R(30,100),g=n>=85?"A":n>=70?"B":n>=55?"C":n>=40?"D":"E";
  return Q(OUT+code(`int nilai = ${n};\nchar grade;\nif (nilai >= 85) grade = 'A';\nelse if (nilai >= 70) grade = 'B';\nelse if (nilai >= 55) grade = 'C';\nelse if (nilai >= 40) grade = 'D';\nelse grade = 'E';\nprintf("%c", grade);`),g,["A","B","C","D","E"].filter(x=>x!==g),`Dicek dari atas, berhenti di kondisi benar pertama: ${n} ≥ ${({A:85,B:70,C:55,D:40,E:"–"})[g]} → ${g}.`);}},
{id:"gradebad",t:5,w:3,make(){const n=R(70,100),first=P([["40","D"],["55","C"]]),proper=n>=85?"A":"B";
  return Q(`Perhatikan urutan kondisinya. `+OUT+code(`int nilai = ${n};\nchar grade;\nif (nilai >= ${first[0]}) grade = '${first[1]}';\nelse if (nilai >= 70) grade = 'B';\nelse if (nilai >= 85) grade = 'A';\nelse grade = 'E';\nprintf("%c", grade);`),first[1],[proper,proper==="A"?"B":"A","E"],`${n} ≥ ${first[0]} sudah BENAR di kondisi pertama → grade = '${first[1]}', cabang lain dilewati. Ini kenapa kondisi harus dicek dari nilai terbesar dulu.`);}},
{id:"switch",t:5,w:3,make(){const x=R(1,4),L=["","A","B","C","D"],brk=[0,1,2,3,4].map(()=>Math.random()<.5);brk[x]=Math.random()<.35?brk[x]:false;
  let out="",k=x,stop=false;for(;k<=4;k++){out+=L[k];if(brk[k]){stop=true;break;}}if(!stop)out+="X";
  const src=[1,2,3,4].map(i=>`    case ${i}: printf("${L[i]}");${brk[i]?" break;":""}`).join("\n");
  return Q(OUT+code(`int x = ${x};\nswitch (x) {\n${src}\n    default: printf("X");\n}`),out,[L[x],L.slice(x).join("")+"X",out.slice(0,-1)||L[x]+"X",L.slice(x).join("")],`Masuk di case ${x}. Tanpa break, eksekusi "jatuh" (fall-through) ke case berikutnya sampai ketemu break atau switch habis → ${out}.`,()=>L[R(1,4)]+L[R(1,4)]+(Math.random()<.5?"X":""));}},
{id:"forsum",t:6,w:2,make(){const s=R(0,3),e=R(8,20),k=R(1,3),v=[];for(let i=s;i<=e;i+=k)v.push(i);const c=sum(v),w=v.filter(i=>i<e);
  const show=v.length>8?v.slice(0,3).join(", ")+", …, "+v[v.length-1]:v.join(", ");
  return Q(OUT+code(`int i, jumlah = 0;\nfor (i = ${s}; i <= ${e}; i += ${k})\n    jumlah += i;\nprintf("%d", jumlah);`),c,[sum(w)===c?c+e:sum(w),c+k,v.length,c-s||c+1],`i = ${show} (${v.length} kali). Jumlah = ${c}.`);}},
{id:"forcount",t:6,w:2,make(){const s=R(0,5),e=R(s+5,s+20),k=R(2,4),op=P(["<","<="]);let i=s,n=0,last=s;while(op==="<"?i<e:i<=e){last=i;n++;i+=k;}
  return Q(`Berapa kali <code>printf</code> dijalankan, dan berapa nilai i setelah loop selesai?`+code(`int i;\nfor (i = ${s}; i ${op} ${e}; i += ${k})\n    printf("*");`),`${n} kali, i = ${i}`,[`${n} kali, i = ${last}`,`${n+1} kali, i = ${i}`,`${n-1} kali, i = ${last}`,`${n} kali, i = ${e}`],`i berjalan ${s}, ${s+k}, … sampai ${last} (${n} kali). Lalu i += ${k} → ${i}, kondisi ${i} ${op} ${e} salah → berhenti. Nilai i akhir = ${i}, bukan ${last}.`);}},
{id:"forprint",t:6,w:2,make(){const s=R(1,5),k=R(2,4),e=R(s+8,s+15),f=(a,b,p)=>{const o=[];for(let i=a;i<=b;i++)if(p(i))o.push(i);return o.join(" ")||"(tidak ada output)";};const c=f(s,e,i=>i%k===0);
  return Q(OUT+code(`int i;\nfor (i = ${s}; i <= ${e}; i++)\n    if (i % ${k} == 0)\n        printf("%d ", i);`),c,[f(s,e-1,i=>i%k===0),f(s,e,i=>i%k===1),f(s,e+k,i=>i%k===0),f(s,e,i=>i%(k+1)===0)],`Cetak i dari ${s} sampai ${e} yang habis dibagi ${k} (sisa bagi 0) → ${c}.`);}},
{id:"digits",t:6,w:3,make(){let n;do{n=R(100,9999);}while(n%10===0);const ds=String(n).split("").map(Number),v=R(0,2);
  if(v===0)return Q(OUT+code(`int n = ${n}, s = 0;\nwhile (n > 0) {\n    s = s + n % 10;\n    n = n / 10;\n}\nprintf("%d", s);`),sum(ds),[ds.length,sum(ds)+1,n%10,sum(ds)-1],`n % 10 mengambil digit paling kanan, n / 10 membuangnya. Jadi s = ${ds.slice().reverse().join(" + ")} = ${sum(ds)} (jumlah digit).`);
  if(v===1)return Q(OUT+code(`int n = ${n}, r = 0;\nwhile (n > 0) {\n    r = r * 10 + n % 10;\n    n = n / 10;\n}\nprintf("%d", r);`),+rev(n),[n,sum(ds),+rev(n)*10,Math.trunc(+rev(n)/10)],`Tiap putaran digit kanan diambil (n % 10) dan disusun ke r → angka dibalik: ${rev(n)}.`);
  return Q(OUT+code(`int n = ${n}, c = 0;\nwhile (n > 0) {\n    c++;\n    n = n / 10;\n}\nprintf("%d", c);`),ds.length,[ds.length+1,ds.length-1,sum(ds)],`n dibagi 10 terus sampai 0: ${n}${ds.map((_,i)=>" → "+Math.trunc(n/10**(i+1))).join("")}. Loop jalan ${ds.length} kali = jumlah digit.`,()=>R(1,9));}},
{id:"dowhile",t:6,w:2,make(){const x=R(5,20),st=P([2,3]),L=Math.random()<.5?R(1,x-1):x+R(3,9),v=[];let y=x;do{v.push(y);y+=st;}while(y<L);const c=v.join(" ");
  return Q(OUT+code(`int x = ${x};\ndo {\n    printf("%d ", x);\n    x += ${st};\n} while (x < ${L});`),c,["(tidak ada output)",v.concat(y).join(" "),v.slice(1).join(" ")||String(x+st),v.slice(0,-1).join(" ")||String(x)],`do-while menjalankan badan dulu, baru cek kondisi → minimal 1 kali. Output: ${c}.`);}},
{id:"brkcont",t:6,w:3,make(){const N=R(6,12),all=sum([...Array(N)].map((_,i)=>i+1));
  if(Math.random()<.5){const K=R(2,4),v=[],sk=[];for(let i=1;i<=N;i++)(i%K===0?sk:v).push(i);
    return Q(OUT+code(`int i, s = 0;\nfor (i = 1; i <= ${N}; i++) {\n    if (i % ${K} == 0) continue;\n    s += i;\n}\nprintf("%d", s);`),sum(v),[all,sum(sk),sum(v)-v[v.length-1]],`continue melompati sisa badan loop saat i habis dibagi ${K} (${sk.join(", ")}). s = ${all} − ${sum(sk)} = ${sum(v)}.`,()=>sum(v)+R(2,9));}
  const K=R(3,N),s=sum([...Array(K-1)].map((_,i)=>i+1));
  return Q(OUT+code(`int i, s = 0;\nfor (i = 1; i <= ${N}; i++) {\n    if (i == ${K}) break;\n    s += i;\n}\nprintf("%d", s);`),s,[s+K,all,all-s],`break langsung keluar loop saat i = ${K}, sebelum s += i. Jadi s = 1 + … + ${K-1} = ${s}.`,()=>s+R(1,9));}},
{id:"nested",t:6,w:2,make(){const A=R(2,6),B=R(2,6);
  if(Math.random()<.5)return Q(OUT+code(`int i, j, c = 0;\nfor (i = 1; i <= ${A}; i++)\n    for (j = 1; j <= ${B}; j++)\n        c++;\nprintf("%d", c);`),A*B,[A+B,A*B+A,(A+1)*(B+1)],`Loop dalam jalan ${B}× untuk setiap putaran loop luar (${A}×) → ${A} × ${B} = ${A*B}.`,()=>R(4,40));
  const c=A*(A+1)/2;
  return {...Q(`Berapa banyak tanda * yang dicetak?`+code(`int i, j;\nfor (i = 1; i <= ${A}; i++) {\n    for (j = 1; j <= i; j++)\n        printf("*");\n    printf("\\n");\n}`),c,[A*A,A*(A-1)/2,A,c+A],`Baris ke-i mencetak i bintang (pola segitiga): ${[...Array(A)].map((_,i)=>i+1).join(" + ")} = ${c}.`,()=>R(3,40)),w:3};}},
{id:"arridx",t:8,w:2,make(){const a=[];while(a.length<5){const v=R(1,60);if(!a.includes(v))a.push(v);}const i=R(1,4);let j;do{j=R(1,4);}while(j===i);
  return Q(OUT+code(`int a[5] = {${a.join(", ")}};\nprintf("%d", a[${i}] + a[${j}]);`),a[i]+a[j],[a[i-1]+a[j-1],i+j,a[i]+a[j]+1,a[i]*2],`Indeks mulai 0: a[${i}] = ${a[i]}, a[${j}] = ${a[j]} → ${a[i]+a[j]}. Jebakan: menghitung indeks dari 1.`);}},
{id:"arrloop",t:8,w:3,make(){const a=[];while(a.length<5){const v=R(1,60);if(!a.includes(v))a.push(v);}const v=R(0,2),L=`int a[5] = {${a.join(", ")}};\nint i`;
  if(v===0){const m=Math.max(...a);return Q(OUT+code(`${L}, mx = a[0];\nfor (i = 1; i < 5; i++)\n    if (a[i] > mx) mx = a[i];\nprintf("%d", mx);`),m,[Math.min(...a),a[0],a[4],sum(a)],`mx menyimpan nilai terbesar yang ditemui sejauh ini → nilai maksimum array = ${m}.`,()=>m+R(1,9));}
  if(v===1)return Q(OUT+code(`${L}, s = 0;\nfor (i = 0; i < 5; i++)\n    s += a[i];\nprintf("%d", s);`),sum(a),[sum(a)-a[0],sum(a)-a[4],sum(a)+5],`i = 0..4 → semua elemen dijumlah: ${a.join(" + ")} = ${sum(a)}.`,()=>sum(a)+R(1,9));
  const ev=a.filter(x=>x%2===0).length;
  return Q(OUT+code(`${L}, c = 0;\nfor (i = 0; i < 5; i++)\n    if (a[i] % 2 == 0) c++;\nprintf("%d", c);`),ev,[5-ev,ev+1,a.filter(x=>x%2===0).reduce((x,y)=>x+y,0)],`Hitung elemen genap (sisa bagi 2 = 0): ${a.filter(x=>x%2===0).join(", ")||"tidak ada"} → ${ev}.`,()=>R(0,5));}},
{id:"func",t:9,w:2,make(){const A=R(2,5),B=R(1,9),k=R(1,6),f=x=>x*A+B,nest=Math.random()<.5,c=nest?f(f(k)):f(k);
  return {...Q(OUT+code(`int f(int x) {\n    return x * ${A} + ${B};\n}\n\nint main() {\n    printf("%d", ${nest?`f(f(${k}))`:`f(${k})`});\n    return 0;\n}`),c,[nest?f(k):k*(A+B),nest?f(k)*A:f(k)+B,c+B,f(k+1)],nest?`Kerjakan dari dalam: f(${k}) = ${k}×${A}+${B} = ${f(k)}, lalu f(${f(k)}) = ${f(k)}×${A}+${B} = ${c}.`:`f(${k}) = ${k} × ${A} + ${B} = ${c}. Perkalian dikerjakan sebelum penjumlahan.`,()=>c+R(1,9)),w:nest?3:2};}},
{id:"func2",t:9,w:2,make(){const x=R(2,9),y=R(2,9),c=x*y+y*2;
  return Q(OUT+code(`int kali(int a, int b) {\n    return a * b;\n}\n\nint main() {\n    printf("%d", kali(${x}, ${y}) + kali(${y}, 2));\n    return 0;\n}`),c,[x*y,x*y+2,(x+y)*2,c+x],`kali(${x}, ${y}) = ${x*y}, kali(${y}, 2) = ${y*2} → ${x*y} + ${y*2} = ${c}.`);}},
{id:"fmt",t:3,w:1,make(){const n=R(1,999),s=String(n),v=P(["%05d","%5d","%-5d|"]),z=s.padStart(5,"0"),sp=s.padStart(5,"␣"),lf=s.padEnd(5,"␣")+"|";
  const c=v==="%05d"?z:v==="%5d"?sp:lf;
  return Q(`Output program berikut adalah… (␣ = spasi)`+code(`printf("${v}", ${n});`),c,[z,sp,lf,s,s+"|"],`${v.replace("|","")}: lebar 5 karakter. 0 → isi nol di depan; tanpa tanda → rata kanan (spasi di depan); tanda − → rata kiri (spasi di belakang).`);}},
{id:"jmd",t:3,w:2,make(){const tot=R(3700,17999),h=Math.trunc(tot/3600),m=Math.trunc(tot%3600/60),s=tot%60,c=`${h}:${m}:${s}`;
  return Q(OUT+code(`int total = ${tot};\nprintf("%d:%d:%d", total / 3600, (total % 3600) / 60, total % 60);`),c,[`${h}:${Math.trunc(tot/60)}:${s}`,`${h}:${s}:${m}`,`${h+1}:${m}:${s}`,`${h}:${m+1}:${s}`],`${tot} / 3600 = ${h} jam · ${tot} % 3600 = ${tot%3600} → / 60 = ${m} menit · ${tot} % 60 = ${s} detik.`);}},
{id:"io",t:3,w:2,make(){const a=R(5,20),b=R(2,9),X=P([["a * b - a",a*b-a],["(a + b) / 2",Math.trunc((a+b)/2)],["a % b + b",a%b+b],["a / b * 2",Math.trunc(a/b)*2],["a - b * 2",a-b*2]]),c=X[1];
  return Q(`Jika user mengetik <b>${a} ${b}</b> lalu Enter, output program berikut adalah…`+code(`int a, b;\nscanf("%d %d", &a, &b);\nprintf("%d", ${X[0]});`),c,[c+1,c-1,c+b,c*2],`scanf mengisi a = ${a}, b = ${b}. ${X[0]} = ${c} (operasi int, * / % dikerjakan sebelum + −).`);}},
{id:"bsearch",t:10,w:3,make(){const n=R(7,9),a=[];let v=R(1,9);for(let i=0;i<n;i++){a.push(v);v+=R(2,9);}const x=P(a);let lo=0,hi=n-1,cnt=0;const mids=[];
  while(lo<=hi){const m=Math.trunc((lo+hi)/2);mids.push(`tengah=(${lo}+${hi})/2=${m} → a[${m}]=${a[m]}`);cnt++;if(a[m]===x)break;if(x<a[m])hi=m-1;else lo=m+1;}
  return Q(`Binary search mencari <b>${x}</b> pada array terurut berikut (tengah = (bawah + atas) / 2). Berapa kali elemen tengah dibandingkan sampai ketemu?`+code(`int a[${n}] = {${a.join(", ")}};`),cnt+" kali",[1,2,3,4].filter(k=>k!==cnt).map(k=>k+" kali").concat([(a.indexOf(x)+1)+" kali"]),mids.join(" · ")+` → ketemu setelah ${cnt} perbandingan.`);}},
{id:"queue",t:11,w:2,make(){const ops=[],q=[],st=[];let val=R(1,5);
  const n=R(5,7);for(let i=0;i<n;i++){if(q.length>1&&Math.random()<.35){ops.push("dequeue()");q.shift();st.pop();}else{val+=R(1,6);ops.push(`enqueue(${val})`);q.push(val);st.push(val);}}
  if(!ops.includes("dequeue()")){ops.push("dequeue()");q.shift();st.pop();}
  const f=a=>a.join(", ")||"(kosong)";
  return Q(`Queue awalnya kosong. Setelah operasi berikut, isi queue dari FRONT ke REAR adalah…`+code(ops.join(";\n")+";"),f(q),[f(st),f(q.slice().reverse()),f(q.slice(1)),f(q.concat(val+1))],`FIFO: enqueue menambah di REAR, dequeue menghapus dari FRONT (yang paling lama masuk). Sisa: ${f(q)}. Kalau ${f(st)}, itu cara kerja stack (LIFO).`);}}
];

window.GENQ={iit:IIT,ads:ADS};
})();
