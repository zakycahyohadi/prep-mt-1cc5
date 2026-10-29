/* Prep MT 1CC5 — logika aplikasi (router hash, progres, latihan, simulasi, alat hitung). Konten ada di data.js. */
(function(){
"use strict";

/* ================= util ================= */
const $=(s,el)=>(el||document).querySelector(s);
const $$=(s,el)=>Array.from((el||document).querySelectorAll(s));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad=n=>String(n).padStart(2,"0");
const rand=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const textOf=h=>h.replace(/<[^>]+>/g," ").replace(/&[a-z]+;/g," ");
const mmss=s=>pad(Math.floor(s/60))+":"+pad(s%60);
const reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ================= state (localStorage) ================= */
const KEY="mtprep-v2";
const fresh=()=>({done:{},q:{},sims:[]});
let S=fresh();
try{Object.assign(S,JSON.parse(localStorage.getItem(KEY)||"{}"));}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}};
function record(key,ok){if(key.startsWith("g-"))return;S.q[key]=ok?1:0;save();}

/* ================= model ================= */
const SUBJ={
  iit:{short:"IIT",name:"Introduction to IT",cls:"s-iit",topics:IIT_TOPICS,bank:QUIZ_IIT},
  ads:{short:"ADS",name:"Algorithm & Data Structure",cls:"s-ads",topics:ADS_TOPICS,bank:QUIZ_ADS}
};
const ALLQ=[];
for(const k in SUBJ)SUBJ[k].bank.forEach((q,i)=>ALLQ.push(Object.assign({},q,{subj:k,key:k+"-"+i})));
const qOfTopic=(subj,t)=>ALLQ.filter(q=>q.subj===subj&&q.t===t);
const CHECK_N=8; // soal cek pemahaman per langkah; sisanya lewat Bank Soal
const checkN=(subj,t)=>Math.min(CHECK_N,qOfTopic(subj,t).length);

/* Jenis & bobot soal statis: hitungan IIT / kode ADS = 2 poin, multi-langkah = 3, konsep = 1. */
const CALC_RE=/[₀-₉]|biner|desimal|heksa|oktal|komplemen|BCD|detik|efisiensi|pernyataan tunggal|\d{3,}/i;
const HEAVY_RE=/BCD|18 − 7|bps|fisiensi|switch\(|Tugas 80|umur 3\/10|Berapa elemen|habis dibagi 3/;
ALLQ.forEach(q=>{
  q.kind=q.subj==="iit"?(CALC_RE.test(q.q)?"calc":"konsep"):(/<code>|<pre|printf|scanf|for\(/.test(q.q)?"code":"konsep");
  q.w=q.w||(HEAVY_RE.test(q.q)?3:q.kind==="konsep"?1:2);
});
const KINDS={all:"Semua jenis",calc:"🧮 Hitungan (IIT)",code:"💻 Kode & output (ADS)",konsep:"📖 Konsep & hafalan"};

/* Soal acak dari soalgen.js (tanpa batas). Tidak dicatat di riwayat "pernah salah". */
const GENS={iit:GENQ.iit.map(g=>Object.assign({subj:"iit",kind:"calc"},g)),ads:GENQ.ads.map(g=>Object.assign({subj:"ads",kind:"code"},g))};
let gseq=0;
function genQ(g){const r=g.make();return Object.assign({subj:g.subj,t:g.t,kind:g.kind},r,{w:r.w||g.w,gen:g.id,key:"g-"+g.id+"-"+(++gseq)});}
function genMany(list,n){const out=[];let bag=[];while(out.length<n&&list.length){if(!bag.length)bag=shuffle(list);out.push(genQ(bag.pop()));}return out;}

const HITUNG_GEN=["dec2bin","bin2dec","bin2oct","dec2hex","hex2dec","binadd","comp2","comp2",null,null,"download",null,null,null];
const STAGES=[
  {id:"iit",cls:"s-iit",ic:"💡",name:"Introduction to IT",mins:70,desc:"Konsep TI, evolusi komputer, arsitektur, bilangan & logika, data, jaringan, interaksi manusia–mesin.",
   items:IIT_TOPICS.map((t,i)=>({title:t.t,html:t.h,keys:t.k,subj:"iit",topic:i}))},
  {id:"hitung",cls:"s-hitung",ic:"🧮",name:"Lab Hitung",mins:50,desc:"Konversi basis, komplemen-2, BCD, tabel kebenaran, waktu unduh, trace table. Pelan-pelan, baris per baris.",
   items:HITUNG.map((t,i)=>({title:t.t,html:t.h,gen:HITUNG_GEN[i]}))},
  {id:"ads",cls:"s-ads",ic:"🧩",name:"Algorithm & Data Structure",mins:150,desc:"Algoritma & flowchart, dasar bahasa C, operator, percabangan, perulangan, array, fungsi, searching, queue, sorting, soal kode isian, library C.",
   items:ADS_TOPICS.map((t,i)=>({title:t.t,html:t.h,keys:t.k,subj:"ads",topic:i}))},
  {id:"bedah",cls:"s-bedah",ic:"🔍",name:"Bedah Soal HOTS",mins:30,desc:"5 soal HOTS dari quiz dosen dikupas tuntas: flowchart, tipe data, studi kasus, trace, nilai akhir.",
   items:ADS_BEDAH.map(t=>({title:t.t,html:t.h}))}
];
const LESSONS=[],BYID={};
STAGES.forEach(st=>st.items.forEach((it,i)=>{
  it.id=st.id+"-"+i;it.stage=st;it.idx=i;it.g=LESSONS.length;
  it.mins=Math.max(3,Math.round(textOf(it.html).split(/\s+/).length/120));
  LESSONS.push(it);BYID[it.id]=it;
}));
const doneCount=()=>LESSONS.filter(l=>S.done[l.id]).length;
const nextLesson=()=>LESSONS.find(l=>!S.done[l.id]);
const stageDone=st=>st.items.filter(l=>S.done[l.id]).length;
function mastery(subj,t){
  const qs=qOfTopic(subj,t);let a=0,c=0;
  qs.forEach(q=>{if(q.key in S.q){a++;if(S.q[q.key])c++;}});
  return {n:qs.length,a,c,pct:a?Math.round(c/a*100):null};
}
function mastChip(subj,t){
  if(!subj)return "";
  const m=mastery(subj,t);
  if(m.pct===null)return `<span class="mast" title="Belum dikerjakan">${m.n} soal</span>`;
  const cl=m.pct>=80?"hi":m.pct>=50?"mid":"lo";
  return `<span class="mast ${cl}" title="${m.c} dari ${m.a} soal benar">${m.pct}%</span>`;
}
const bestSim=()=>S.sims.length?Math.max(...S.sims.map(s=>s.pct)):null;

/* ================= UI helpers ================= */
let toastT;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),2400);}
function confetti(){
  if(reduceMotion)return;
  const box=document.createElement("div");box.className="confetti";
  const cols=["#5b54e8","#7c3aed","#e11d48","#0d9488","#d97706","#16a34a"];
  for(let i=0,n=innerWidth<700?40:90;i<n;i++){
    const p=document.createElement("i");
    p.style.left=Math.random()*100+"vw";p.style.background=pick(cols);
    p.style.setProperty("--dx",(Math.random()*160-80)+"px");p.style.setProperty("--rot",(Math.random()*720-360)+"deg");
    p.style.animationDelay=Math.random()*.4+"s";p.style.animationDuration=(1.2+Math.random()*.9)+"s";
    box.appendChild(p);
  }
  document.body.appendChild(box);setTimeout(()=>box.remove(),2600);
}
function updateTop(){
  const p=Math.round(doneCount()/LESSONS.length*100);
  $("#topPct").textContent=p+"%";$("#topBar").style.width=p+"%";
}

/* Kartu soal dengan feedback langsung (dipakai di halaman materi & bank soal). */
function questionCard(q,opt){
  opt=opt||{};
  const topic=SUBJ[q.subj].topics[q.t].t;
  const el=document.createElement("div");el.className="q "+SUBJ[q.subj].cls;
  const perm=shuffle(q.o.map((_,i)=>i));
  const prev=q.key in S.q?(S.q[q.key]?`<span class="mast hi">pernah benar</span>`:`<span class="mast lo">pernah salah</span>`):"";
  el.innerHTML=`<div class="qmeta">${opt.num?`<span class="qn">SOAL ${pad(opt.num)}</span>`:""}${opt.showSubj?`<span class="chip">${SUBJ[q.subj].short} · ${esc(topic)}</span>`:""}<span class="mast" title="Bobot soal">${"⭐".repeat(q.w)} ${q.w} poin</span>${q.gen?'<span class="mast">🎲 soal acak</span>':""}${opt.showPrev?prev:""}</div>
    <div class="qt">${q.q}</div>
    <div class="opts">${perm.map((oi,i)=>`<button class="opt" data-i="${i}"><span class="mk">${"ABCDE"[i]}</span><span class="ot">${esc(q.o[oi])}</span></button>`).join("")}</div>`;
  const btns=$$(".opt",el);let answered=false;
  function choose(i){
    if(answered||i<0||i>=q.o.length)return;
    answered=true;const ok=perm[i]===q.a;record(q.key,ok);
    btns.forEach((b,j)=>{b.disabled=true;if(perm[j]===q.a)b.classList.add("correct");else if(j===i)b.classList.add("wrong");else b.classList.add("dim");});
    el.classList.add(ok?"pop":"shake");
    const ex=document.createElement("div");ex.className="exp "+(ok?"ok":"no");
    ex.innerHTML=`<b>${ok?"✓ Benar!":"✗ Belum tepat."}</b> ${esc(q.e)}${opt.showLink?`<br><a href="#l/${q.subj}-${q.t}">📖 Pelajari materinya: ${esc(topic)} →</a>`:""}`;
    el.appendChild(ex);
    if(opt.onAnswer)opt.onAnswer(ok);
  }
  btns.forEach(b=>b.addEventListener("click",()=>choose(+b.dataset.i)));
  el.choose=choose;el.answered=()=>answered;
  return el;
}

function stepList(st,curId){
  const nx=nextLesson();
  return `<ol class="steps">${st.items.map(l=>{
    const d=S.done[l.id],cur=curId?l.id===curId:nx&&nx.id===l.id;
    return `<li><a href="#l/${l.id}" class="${d?"done":""} ${cur?"cur":""}"><span class="dot">${d?"✓":l.idx+1}</span><span class="st">${esc(l.title)}<small>~${l.mins} menit${l.subj?" · "+checkN(l.subj,l.topic)+" soal cek":""}</small></span>${curId?"":mastChip(l.subj,l.topic)}</a></li>`;
  }).join("")}</ol>`;
}

/* ================= HOME ================= */
function renderHome(el){
  const tot=LESSONS.length,dn=doneCount(),pct=Math.round(dn/tot*100),nx=nextLesson();
  const ans=Object.keys(S.q).length,ok=Object.values(S.q).filter(Boolean).length,best=bestSim();
  const stageCard=(st,i)=>{
    const d=stageDone(st),n=st.items.length,go=st.items.find(l=>!S.done[l.id])||st.items[0];
    return `<a class="card stage ${st.cls} ${d===n?"done":""}" href="#l/${go.id}">
      <div class="num">${st.ic}</div>
      <div class="grow"><div class="eyebrow">Tahap ${i+1} · ±${st.mins} menit</div><h3>${st.name}</h3><p>${st.desc}</p>
        <div class="row"><div class="bar"><i style="width:${d/n*100}%"></i></div><span class="count">${d}/${n} langkah</span></div></div>
      <span class="go">→</span></a>`;
  };
  el.innerHTML=`
  <div class="hero">
    <div>
      <div class="eyebrow">Modul Test · Kelas 1CC5</div>
      <h1>Belajar MT, <span class="grad">step by step</span> sampai paham.</h1>
      <p class="lead">Materi <b>Introduction to IT</b> dan <b>Algorithm &amp; Data Structure</b> dipecah jadi ${tot} langkah kecil. Tiap langkah: baca inti, pahami detailnya, lalu langsung tes. Penutupnya simulasi MT pakai timer.</p>
      <div class="cta">
        ${nx?`<a class="btn primary" href="#l/${nx.id}">${dn?"Lanjutkan belajar":"Mulai dari langkah 1"} →</a>`:`<a class="btn primary" href="#simulasi">Gas simulasi MT →</a>`}
        <a class="btn" href="#simulasi">⏱️ Simulasi MT</a>
        <a class="btn" href="#ringkasan">⚡ Ringkasan kilat</a>
      </div>
      <p class="next">${nx?`Berikutnya: <b>${nx.stage.name} · ${esc(nx.title)}</b>`:"Semua langkah selesai 🎉. Tinggal simulasi & baca ringkasan kilat."}</p>
    </div>
    <div class="ringcard">
      <div class="ring"><svg viewBox="0 0 170 170"><circle class="trk" cx="85" cy="85" r="70"/><circle class="val" cx="85" cy="85" r="70" stroke-dasharray="439.8" stroke-dashoffset="439.8" data-p="${pct}"/></svg>
        <div class="lbl"><b>${pct}%</b><span>${dn}/${tot} langkah</span></div></div>
      <div class="ministats">
        <div><b>${ans}</b><span>soal dikerjakan</span></div>
        <div><b>${ans?Math.round(ok/ans*100)+"%":"–"}</b><span>akurasi</span></div>
        <div><b>${best===null?"–":best}</b><span>simulasi terbaik</span></div>
      </div>
    </div>
  </div>

  <div class="sectiontitle"><div><div class="eyebrow">Rencana belajar</div><h2>5 tahap menuju MT</h2></div><a class="btn sm ghost" href="#belajar">Lihat semua langkah →</a></div>
  <div class="plan">
    ${STAGES.map(stageCard).join("")}
    <a class="card stage s-acc ${best!==null&&best>=80?"done":""}" href="#simulasi">
      <div class="num">⏱️</div>
      <div class="grow"><div class="eyebrow">Tahap 5 · ±45–90 menit</div><h3>Simulasi MT</h3><p>Format MT: 30 soal IIT + 30 soal ADS, pakai timer, tanpa contekan. Hasilnya menunjukkan topik yang masih lemah.</p>
        <div class="row"><div class="bar"><i style="width:${best||0}%"></i></div><span class="count">${best===null?"belum dicoba":"terbaik "+best}</span></div></div>
      <span class="go">→</span></a>
  </div>

  <div class="sectiontitle"><div><div class="eyebrow">Alat bantu</div><h2>Latihan bebas</h2></div></div>
  <div class="quick">
    <a class="card qk s-acc" href="#latihan/soal"><span class="ic">✍️</span><div><b>Bank Soal</b><span>${ALLQ.length} soal + soal hitung &amp; kode acak tanpa batas.</span></div></a>
    <a class="card qk s-hitung" href="#latihan/hitung"><span class="ic">🧮</span><div><b>Hitung Acak</b><span>Soal konversi & komplemen-2 tanpa batas, lengkap dengan caranya.</span></div></a>
    <a class="card qk s-ads" href="#latihan/flash"><span class="ic">🃏</span><div><b>Flashcard</b><span>${FLASHCARDS.length} kartu hafalan cepat IIT + ADS.</span></div></a>
    <a class="card qk s-iit" href="#latihan/konv"><span class="ic">🔁</span><div><b>Konverter</b><span>Desimal ↔ biner ↔ oktal ↔ heksa buat cek jawaban.</span></div></a>
    <a class="card qk s-bedah" href="#ringkasan"><span class="ic">⚡</span><div><b>Ringkasan Kilat</b><span>Semua inti + rumus di satu halaman. Baca pagi sebelum tes.</span></div></a>
    <a class="card qk s-acc" href="#ringkasan/kisi"><span class="ic">✅</span><div><b>Kisi-kisi</b><span>Checklist sub-topik, bisa disalin ke WhatsApp.</span></div></a>
  </div>

  <div class="sectiontitle"></div>
  <div class="tips">
    <div class="eyebrow">Strategi H-1</div>
    <ol>
      <li><b>Ikuti Jalur Belajar sesuai urutan.</b> Di tiap langkah, baca kotak 🎯 <i>Inti</i> dulu, baru detailnya, lalu kerjakan <i>Cek Pemahaman</i>.</li>
      <li><b>Salah itu bagus, asal dibaca pembahasannya.</b> Di Bank Soal, nyalakan “Hanya yang pernah salah” buat mengulang.</li>
      <li><b>Soal hitungan itu poin pasti.</b> Latih di Hitung Acak sampai bisa benar 5× beruntun.</li>
      <li><b>Tutup dengan Simulasi MT.</b> Targetkan ≥ 80. Kalau belum tercapai, ulangi topik yang merah di hasilnya.</li>
      <li><b>Besok pagi</b> baca Ringkasan Kilat 15 menit sebelum masuk. Malam ini tidur cukup ya 😴</li>
    </ol>
  </div>
  ${footer()}`;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{const c=$(".ring .val",el);if(c)c.style.strokeDashoffset=439.8*(1-pct/100);}));
}
function footer(){
  return `<p class="footer">Dibuat dari slide &amp; modul dosen (Pak Reza) + quiz HOTS resmi · untuk kelas 1CC5.<br>Progres tersimpan otomatis di browser ini. <button type="button" data-reset>Reset progres</button></p>`;
}

/* ================= JALUR BELAJAR ================= */
function renderBelajar(el){
  const tot=LESSONS.length,dn=doneCount();
  el.innerHTML=`
  <div class="pagehead">
    <div class="eyebrow">Jalur belajar</div>
    <h1>Satu langkah tiap kali.</h1>
    <p class="lead">Urutannya sudah diatur dari dasar ke yang paling sering keluar. Langkah yang selesai diberi ✓, dan angka persen menunjukkan skor cek pemahaman di topik itu.</p>
    <div class="row" style="margin-top:16px;max-width:520px"><div class="bar"><i style="width:${dn/tot*100}%"></i></div><b>${dn}/${tot}</b></div>
  </div>
  <div class="path">
    ${STAGES.map((st,i)=>`<section class="card pstage ${st.cls}">
      <header><div class="num">${st.ic}</div><div class="grow"><div class="eyebrow">Tahap ${i+1} · ±${st.mins} menit</div><h2>${st.name}</h2><p>${st.desc}</p></div><span class="chip">${stageDone(st)}/${st.items.length}</span></header>
      ${stepList(st)}</section>`).join("")}
    <section class="card pstage s-acc"><header><div class="num">⏱️</div><div class="grow"><div class="eyebrow">Tahap 5 · ±45–90 menit</div><h2>Simulasi MT</h2><p>Ujian percobaan pakai timer. Cara paling jujur buat tahu kamu sudah siap atau belum.</p></div><a class="btn sm primary" href="#simulasi">Mulai</a></header></section>
  </div>
  ${footer()}`;
}

/* ================= LESSON ================= */
function renderLesson(el,id){
  const L=BYID[id],st=L.stage,n=st.items.length;
  const prev=LESSONS[L.g-1],next=LESSONS[L.g+1];
  const allq=L.subj?qOfTopic(L.subj,L.topic):[],qs=allq.slice(0,CHECK_N);
  el.innerHTML=`
  <div class="lesson ${st.cls}">
    <aside class="card lside">
      <h3>${st.ic} ${st.name}</h3>
      ${stepList(st,id)}
      <div class="others">${STAGES.filter(s=>s!==st).map(s=>`<a href="#l/${(s.items.find(l=>!S.done[l.id])||s.items[0]).id}">${s.ic} ${s.name}</a>`).join("")}<a href="#simulasi">⏱️ Simulasi MT</a></div>
    </aside>
    <article class="lmain">
      <div class="crumb"><a href="#belajar">Jalur Belajar</a><span>›</span><span>${st.name}</span></div>
      <div class="mobilesteps" style="margin-top:12px"><select id="lsel" aria-label="Pilih langkah">${st.items.map(l=>`<option value="${l.id}" ${l.id===id?"selected":""}>${S.done[l.id]?"✓ ":""}${l.idx+1}. ${esc(l.title)}</option>`).join("")}</select></div>
      <div class="lprog"><span>Langkah ${L.idx+1} dari ${n}</span><div class="bar"><i style="width:${(L.idx+1)/n*100}%"></i></div></div>
      <h1>${esc(L.title)}</h1>
      <div class="lmeta"><span>⏱ ~${L.mins} menit baca</span>${qs.length?`<span>✍️ ${qs.length} soal cek pemahaman</span>`:""}${S.done[id]?`<span class="donebadge">✓ Sudah selesai</span>`:""}</div>
      ${L.keys?`<div class="keys"><h3>🎯 Inti yang wajib nempel</h3><ul>${L.keys.map(k=>`<li><span>${k}</span></li>`).join("")}</ul></div>`:""}
      <div class="prose">${L.html}</div>
      ${L.gen?`<div class="note" style="margin-top:22px"><b>Mau latihan tipe ini lagi?</b> Hitung Acak bikin soal baru tanpa batas, lengkap dengan caranya. <a href="#latihan/hitung" data-gen="${L.gen}">Latih sekarang →</a></div>`:""}
      ${qs.length?`<section class="lsec"><h2>✍️ Cek pemahaman</h2><p>Jawab dulu sebelum lanjut. Pembahasannya langsung muncul setelah kamu memilih.</p><div class="qlist" id="lq"></div><p class="faint" id="lqs" style="margin-top:12px;font-size:13.5px;font-weight:700"></p>${allq.length>qs.length?`<a class="btn soft" style="margin-top:12px" href="#latihan/soal" data-drill="${L.subj}-${L.topic}">✍️ Latih semua ${allq.length} soal topik ini →</a>`:""}</section>`:""}
      <div class="lnav">
        ${prev?`<a class="btn" href="#l/${prev.id}">← <span class="t">${esc(prev.title)}</span></a>`:"<span></span>"}
        <button class="btn primary" id="ldone">✓ ${next?"Selesai, lanjut":"Selesai, ke Simulasi MT"} →</button>
      </div>
    </article>
  </div>`;
  if(qs.length){
    const box=$("#lq",el),sum=$("#lqs",el);let a=0,c=0;
    qs.forEach((q,k)=>box.appendChild(questionCard(q,{num:k+1,onAnswer:ok=>{a++;if(ok)c++;sum.textContent=`Skor cek: ${c}/${a}${a===qs.length?(c===a?" · Sempurna! 🎉":" · Baca lagi pembahasan yang salah ya."):""}`;if(a===qs.length&&c===a)confetti();}})));
  }
  $("#lsel",el).addEventListener("change",e=>{location.hash="#l/"+e.target.value;});
  $("#ldone",el).addEventListener("click",()=>{
    const was=stageDone(st);S.done[id]=1;save();
    if(stageDone(st)===n&&was<n){confetti();toast(`Tahap “${st.name}” selesai! 🎉`);}
    else toast("Langkah selesai ✓");
    location.hash=next?"#l/"+next.id:"#simulasi";
  });
}

/* ================= LATIHAN ================= */
const P={subj:"all",topic:-1,kind:"all",onlyWrong:false,queue:null,pos:0,ok:0,done:0,streak:0,best:0,wrongs:[],card:null};
function pool(){
  const st=ALLQ.filter(q=>(P.subj==="all"||q.subj===P.subj)&&(P.topic<0||q.t===P.topic)&&(P.kind==="all"||q.kind===P.kind)&&(!P.onlyWrong||S.q[q.key]===0));
  if(P.onlyWrong||P.kind==="konsep")return st;
  const gl=[].concat(P.subj!=="ads"?GENS.iit:[],P.subj!=="iit"?GENS.ads:[]).filter(g=>(P.topic<0||g.t===P.topic)&&(P.kind==="all"||g.kind===P.kind));
  return st.concat(genMany(gl,gl.length?Math.min(40,Math.max(15,gl.length*2)):0));
}
function newQueue(list){P.queue=shuffle(list||pool());P.pos=0;P.ok=0;P.done=0;P.streak=0;P.wrongs=[];}

function renderLatihan(el,sub){
  sub=["soal","hitung","flash","konv"].includes(sub)?sub:"soal";
  el.innerHTML=`
  <div class="pagehead">
    <div class="eyebrow">Latihan</div>
    <h1>Asah sampai refleks.</h1>
    <p class="lead">Kerjakan soal sebanyak mungkin. Jawaban salah tercatat otomatis, jadi nanti bisa diulang khusus yang salah saja.</p>
  </div>
  <nav class="seg tabs4" aria-label="Jenis latihan">
    <a href="#latihan/soal" ${sub==="soal"?'aria-current="page"':""}><span class="si">✍️</span>Bank Soal</a>
    <a href="#latihan/hitung" ${sub==="hitung"?'aria-current="page"':""}><span class="si">🧮</span>Hitung Acak</a>
    <a href="#latihan/flash" ${sub==="flash"?'aria-current="page"':""}><span class="si">🃏</span>Flashcard</a>
    <a href="#latihan/konv" ${sub==="konv"?'aria-current="page"':""}><span class="si">🔁</span>Konverter</a>
  </nav>
  <div id="latbody" style="margin-top:20px"></div>`;
  const body=$("#latbody",el);
  ({soal:renderBank,hitung:renderGen,flash:renderFlash,konv:renderConv})[sub](body);
}

function renderBank(body){
  if(!P.queue)newQueue();
  const wrongN=ALLQ.filter(q=>S.q[q.key]===0).length;
  const topics=P.subj==="all"?[]:SUBJ[P.subj].topics;
  body.innerHTML=`
  <div class="focus">
    <div class="toolbar">
      <select id="bsubj" aria-label="Mata kuliah"><option value="all">Semua mapel</option><option value="iit">IIT</option><option value="ads">ADS</option></select>
      <select id="btopic" aria-label="Topik" ${P.subj==="all"?"disabled":""}><option value="-1">Semua topik</option>${topics.map((t,i)=>`<option value="${i}">${i+1}. ${esc(t.t)}</option>`).join("")}</select>
      <select id="bkind" aria-label="Jenis soal">${Object.entries(KINDS).map(([k,l])=>`<option value="${k}">${l}</option>`).join("")}</select>
      <label class="toggle"><input type="checkbox" id="bwrong" ${P.onlyWrong?"checked":""}> Hanya yang pernah salah (${wrongN})</label>
      <button class="btn sm ghost" id="bshuf">↻ Acak ulang</button>
    </div>
    <div class="fstats" id="bstats"></div>
    <div class="bar" style="margin-bottom:16px"><i id="bfill"></i></div>
    <div id="bcard"></div>
  </div>`;
  $("#bsubj",body).value=P.subj;$("#btopic",body).value=String(P.topic);$("#bkind",body).value=P.kind;
  $("#bkind",body).addEventListener("change",e=>{P.kind=e.target.value;newQueue();renderBank(body);});
  $("#bsubj",body).addEventListener("change",e=>{P.subj=e.target.value;P.topic=-1;newQueue();renderBank(body);});
  $("#btopic",body).addEventListener("change",e=>{P.topic=+e.target.value;newQueue();renderBank(body);});
  $("#bwrong",body).addEventListener("change",e=>{P.onlyWrong=e.target.checked;newQueue();renderBank(body);});
  $("#bshuf",body).addEventListener("click",()=>{newQueue();renderBank(body);});
  bankStep(body);
}
function bankStats(body){
  const n=P.queue.length;
  $("#bstats",body).innerHTML=`<span class="fstat"><b>${Math.min(P.pos+1,n)}</b>/ ${n} soal</span><span class="fstat"><b>${P.ok}</b>benar</span><span class="fstat fire"><b>🔥 ${P.streak}</b>beruntun</span><span class="fstat"><b>${P.done?Math.round(P.ok/P.done*100):0}%</b>akurasi</span>`;
  $("#bfill",body).style.width=(n?P.done/n*100:0)+"%";
}
function bankStep(body){
  const box=$("#bcard",body);bankStats(body);P.card=null;
  if(!P.queue.length){
    box.innerHTML=`<div class="card summary"><div class="big">${P.onlyWrong?"🎉":"🤔"}</div><h2>${P.onlyWrong?"Tidak ada soal yang pernah salah":"Tidak ada soal di filter ini"}</h2><p class="muted">${P.onlyWrong?"Mantap! Matikan filter untuk latihan semua soal.":"Coba ganti filternya."}</p></div>`;return;
  }
  if(P.pos>=P.queue.length){
    const pct=Math.round(P.ok/P.done*100);
    const weak={};P.wrongs.forEach(q=>{const k=q.subj+"-"+q.t;weak[k]=(weak[k]||0)+1;});
    const wk=Object.keys(weak).sort((a,b)=>weak[b]-weak[a]).slice(0,4);
    box.innerHTML=`<div class="card summary"><div class="big">${pct}%</div><h2>${pct>=85?"Keren, hampir sempurna! 🔥":pct>=65?"Bagus, tinggal dipoles 💪":"Lumayan, ayo ulangi yang salah 📚"}</h2>
      <p class="muted">${P.ok} dari ${P.done} benar · streak terbaik ${P.best}</p>
      ${wk.length?`<p class="muted" style="margin-top:14px">Topik yang perlu dibaca ulang:<br>${wk.map(k=>{const[s,t]=k.split("-");return `<a href="#l/${k}">${SUBJ[s].short} · ${esc(SUBJ[s].topics[t].t)}</a>`;}).join(" · ")}</p>`:""}
      <div class="row">${P.wrongs.length?`<button class="btn primary" id="bredo">Ulangi ${P.wrongs.length} yang salah</button>`:""}<button class="btn" id="bagain">Acak lagi</button></div></div>`;
    if(P.ok===P.done)confetti();
    const r=$("#bredo",box);if(r)r.addEventListener("click",()=>{newQueue(P.wrongs);bankStep(body);});
    $("#bagain",box).addEventListener("click",()=>{newQueue();bankStep(body);});
    return;
  }
  const q=P.queue[P.pos];
  const card=questionCard(q,{showSubj:true,showLink:true,showPrev:true,onAnswer:ok=>{
    P.done++;if(ok){P.ok++;P.streak++;P.best=Math.max(P.best,P.streak);if(P.streak&&P.streak%10===0){confetti();toast(`🔥 ${P.streak} benar beruntun!`);}}else{P.streak=0;P.wrongs.push(q);}
    bankStats(body);nb.disabled=false;nb.focus({preventScroll:true});
  }});
  box.innerHTML="";box.appendChild(card);
  const nav=document.createElement("div");nav.className="fnext";
  nav.innerHTML=`<span class="kbd">Keyboard: <kbd>A</kbd>–<kbd>D</kbd> pilih · <kbd>Enter</kbd> lanjut</span><button class="btn primary" id="bnext" disabled>${P.pos+1>=P.queue.length?"Lihat hasil":"Lanjut"} →</button>`;
  box.appendChild(nav);
  const nb=$("#bnext",nav);
  nb.addEventListener("click",()=>{P.pos++;bankStep(body);window.scrollTo({top:body.offsetTop-90,behavior:reduceMotion?"auto":"smooth"});});
  P.card=card;P.next=nb;
}

/* ---------- Hitung Acak ---------- */
const SUP="⁰¹²³⁴⁵⁶⁷⁸⁹";
const sup=n=>String(n).split("").map(d=>SUP[d]).join("");
const nf=n=>n.toLocaleString("id-ID");
const n8=s=>s.slice(0,4)+" "+s.slice(4);
function divSteps(n,base){
  const rows=[];let x=n;const w=String(n).length;
  while(x>0){const q=Math.floor(x/base),r=x%base;
    rows.push(`${String(x).padStart(w)} ÷ ${base} = ${String(q).padStart(w)}  sisa ${base===16&&r>9?`${String(r).padStart(2)} → <b>${r.toString(16).toUpperCase()}</b>`:`<b>${r}</b>`}`);x=q;}
  rows[0]+="   ▲ baca ke atas";rows[rows.length-1]+="   ◀ mulai dari sini";
  return `<pre class="work">${rows.join("\n")}</pre><p>Sisa dibaca dari bawah ke atas → <span class="res">${n.toString(base).toUpperCase()}<sub>${base}</sub></span></p>`;
}
function posSteps(s,base){
  const d=s.toUpperCase().split(""),L=d.length,rows=[],vals=[];
  d.forEach((ch,i)=>{const p=L-1-i,v=parseInt(ch,base);if(!v)return;const pv=Math.pow(base,p);
    rows.push(`${ch}${v>9?"("+v+")":""} × ${base}${sup(p)} = ${v} × ${pv} = <b>${v*pv}</b>`);vals.push(v*pv);});
  return `<pre class="work">${rows.join("\n")}</pre><p>Jumlahkan: ${vals.join(" + ")} = <span class="res">${parseInt(s,base)}<sub>10</sub></span></p>`;
}
function groupSteps(bin,k,base){
  const p=bin.padStart(Math.ceil(bin.length/k)*k,"0"),g=p.match(new RegExp(".{"+k+"}","g"));
  const dg=g.map(x=>parseInt(x,2).toString(base).toUpperCase());
  const mid=Math.floor((k-1)/2);
  const l2=g.map((x,i)=>(" ".repeat(mid)+dg[i]).padEnd(k)).join("  ");
  return `<pre class="work">Biner       : ${bin}${p!==bin?`\nTambah 0    : ${p}`:""}\nGrup ${k}-bit  : ${g.join("  ")}\nTiap grup   : <b>${l2}</b></pre><p>Gabungkan → <span class="res">${dg.join("")}<sub>${base}</sub></span>${base===16?" (A=10, B=11, C=12, D=13, E=14, F=15)":""}</p>`;
}
const GEN={
  dec2bin:{label:"Desimal → Biner",make(){const n=rand(20,255);return{q:`${n}<sub>10</sub> = ?<sub>2</sub>`,ans:n.toString(2),steps:divSteps(n,2),ph:"mis. 101101"};}},
  bin2dec:{label:"Biner → Desimal",make(){const n=rand(9,255),b=n.toString(2);return{q:`${b}<sub>2</sub> = ?<sub>10</sub>`,ans:String(n),steps:posSteps(b,2),ph:"angka desimal"};}},
  dec2oct:{label:"Desimal → Oktal",make(){const n=rand(10,500);return{q:`${n}<sub>10</sub> = ?<sub>8</sub>`,ans:n.toString(8),steps:divSteps(n,8),ph:"mis. 176"};}},
  dec2hex:{label:"Desimal → Heksa",make(){const n=rand(30,1000);return{q:`${n}<sub>10</sub> = ?<sub>16</sub>`,ans:n.toString(16).toUpperCase(),steps:divSteps(n,16),ph:"mis. 7E"};}},
  hex2dec:{label:"Heksa → Desimal",make(){const n=rand(16,999),h=n.toString(16).toUpperCase();return{q:`${h}<sub>16</sub> = ?<sub>10</sub>`,ans:String(n),steps:posSteps(h,16),ph:"angka desimal"};}},
  oct2dec:{label:"Oktal → Desimal",make(){const n=rand(8,500),o=n.toString(8);return{q:`${o}<sub>8</sub> = ?<sub>10</sub>`,ans:String(n),steps:posSteps(o,8),ph:"angka desimal"};}},
  bin2oct:{label:"Biner → Oktal",make(){const n=rand(40,511),b=n.toString(2);return{q:`${b}<sub>2</sub> = ?<sub>8</sub>`,ans:n.toString(8),steps:groupSteps(b,3,8),ph:"grup 3-bit"};}},
  bin2hex:{label:"Biner → Heksa",make(){const n=rand(40,1023),b=n.toString(2);return{q:`${b}<sub>2</sub> = ?<sub>16</sub>`,ans:n.toString(16).toUpperCase(),steps:groupSteps(b,4,16),ph:"grup 4-bit"};}},
  binadd:{label:"Penjumlahan Biner",make(){const a=rand(5,60),b=rand(5,60),A=a.toString(2),B=b.toString(2),R=(a+b).toString(2),w=R.length;
    return{q:`${A} + ${B} = ?<sub>2</sub>`,ans:R,ph:"hasil biner",steps:`<pre class="work">  ${A.padStart(w)}   (${a})\n+ ${B.padStart(w)}   (${b})\n  ${"-".repeat(w)}\n  <b>${R}</b>   (${a+b})</pre><p>Aturan: 1+1 = 0 simpan 1 · 1+1+1 = 1 simpan 1. Cek desimal: ${a} + ${b} = ${a+b} = <span class="res">${R}<sub>2</sub></span></p>`};}},
  comp2:{label:"Komplemen-2 (8-bit)",make(){const n=rand(1,120),b=n.toString(2).padStart(8,"0"),c1=b.replace(/./g,x=>x==="0"?"1":"0"),c2=(256-n).toString(2);
    return{q:`−${n} dalam komplemen-2 (8-bit) = ?`,ans:c2,ph:"8 bit, mis. 1111 1001",steps:`<pre class="work">${n} dalam 8-bit  : ${n8(b)}\nKomplemen-1     : ${n8(c1)}   (balik semua bit)\nTambah 1        :         + 1\nKomplemen-2     : <b>${n8(c2)}</b></pre><p>MSB = 1 → negatif. Jadi <span class="res">−${n} = ${n8(c2)}</span></p>`};}},
  download:{label:"Waktu Unduh",make(){const sp=pick([8000,16000,20000,33600,40000,56000]),t=rand(5,150),bytes=t*sp/8;
    return{q:`File ${nf(bytes)} Byte, kecepatan ${nf(sp)} bps → ? detik`,ans:String(t),num:true,small:true,ph:"jumlah detik",steps:`<pre class="work">Ubah ke bit : ${nf(bytes)} Byte × 8 = ${nf(bytes*8)} bit\nWaktu       : ${nf(bytes*8)} ÷ ${nf(sp)} bps\n            = <b>${t} detik</b></pre><p>Jebakan: jangan lupa ×8. Kecepatan jaringan selalu dalam <b>bit</b> per detik.</p>`};}}
};
const G={type:"mix",cur:null,curType:null,checked:false,streak:0,ok:0,done:0};
function genNew(){G.curType=G.type==="mix"?pick(Object.keys(GEN)):G.type;G.cur=GEN[G.curType].make();G.checked=false;}
const norm=(s,num)=>num?s.replace(/[^\d]/g,""):s.replace(/\s+/g,"").toUpperCase().replace(/^0+(?=.)/,"");
function renderGen(body){
  if(!G.cur)genNew();
  const c=G.cur;
  body.innerHTML=`
  <div class="gen s-hitung">
    <div class="toolbar">
      <select id="gtype" aria-label="Jenis soal"><option value="mix">🎲 Campur semua</option>${Object.keys(GEN).map(k=>`<option value="${k}">${GEN[k].label}</option>`).join("")}</select>
      <span class="fstat fire"><b>🔥 ${G.streak}</b>beruntun</span><span class="fstat"><b>${G.ok}</b>/ ${G.done} benar</span>
    </div>
    <div class="card">
      <div class="eyebrow">${GEN[G.curType].label}</div>
      <div class="genq" ${c.small?'style="font-size:clamp(17px,3vw,22px)"':""}>${c.q}</div>
      <form class="ansrow" id="gform" autocomplete="off">
        <input class="txt" id="gin" placeholder="${c.ph}" ${c.num||/dec$/.test(G.curType)?'inputmode="numeric"':""} autocapitalize="characters" spellcheck="false" aria-label="Jawaban">
        <button class="btn primary" type="submit" id="gcheck">Cek</button>
      </form>
      <div id="gfb"></div>
      <div class="fnext"><button class="btn ghost" id="gshow">💡 Lihat caranya</button><button class="btn soft" id="gnew">Soal baru →</button></div>
    </div>
    <p class="kbd" style="text-align:center;margin-top:12px"><kbd>Enter</kbd> cek · <kbd>Enter</kbd> lagi untuk soal baru</p>
  </div>`;
  $("#gtype",body).value=G.type;
  const inp=$("#gin",body),fb=$("#gfb",body);
  const reveal=(ok)=>{fb.innerHTML=`${ok===undefined?"":`<div class="exp ${ok?"ok":"no"}"><b>${ok?"✓ Benar!":"✗ Belum tepat."}</b> Jawaban: <span class="res">${c.small?c.ans+" detik":c.ans}</span></div>`}<div class="gensteps"><h4 style="margin-top:14px">Langkah-langkahnya</h4>${c.steps}</div>`;};
  $("#gtype",body).addEventListener("change",e=>{G.type=e.target.value;genNew();renderGen(body);});
  $("#gform",body).addEventListener("submit",e=>{
    e.preventDefault();
    if(G.checked){genNew();renderGen(body);$("#gin",body).focus();return;}
    if(!inp.value.trim()){inp.focus();return;}
    const ok=norm(inp.value,c.num)===norm(c.ans,c.num);
    G.checked=true;G.done++;if(ok){G.ok++;G.streak++;}else G.streak=0;
    inp.classList.add(ok?"ok":"no");inp.readOnly=true;$("#gcheck",body).textContent="Soal baru →";
    reveal(ok);$(".card .fnext",body).hidden=true;
    $$(".fstat",body)[0].innerHTML=`<b>🔥 ${G.streak}</b>beruntun`;$$(".fstat",body)[1].innerHTML=`<b>${G.ok}</b>/ ${G.done} benar`;
    if(ok&&G.streak===5){confetti();toast("5× benar beruntun! Kamu sudah jago 🔥");}
  });
  $("#gshow",body).addEventListener("click",()=>{if(!G.checked)reveal();});
  $("#gnew",body).addEventListener("click",()=>{genNew();renderGen(body);$("#gin",body).focus();});
}

/* ---------- Flashcard ---------- */
const F={filter:"all",order:null,idx:0};
function fcList(){return FLASHCARDS.map((c,i)=>i).filter(i=>F.filter==="all"||FLASHCARDS[i].tag.toLowerCase().startsWith(F.filter));}
function renderFlash(body){
  if(!F.order)F.order=fcList();
  body.innerHTML=`
  <div class="fcwrap">
    <div class="seg" role="tablist">${[["all","Semua"],["iit","IIT"],["ads","ADS"]].map(([k,l])=>`<button role="tab" data-f="${k}" aria-selected="${F.filter===k}">${l}</button>`).join("")}</div>
    <div class="flash" id="flash" tabindex="0" role="button" aria-label="Kartu, ketuk untuk membalik"><div class="inner">
      <div class="face front"><span class="chip" id="fctag"></span><div class="fq" id="fcq"></div><div class="hintflip">Ketuk kartu untuk melihat jawaban</div></div>
      <div class="face back"><span class="chip">Jawaban</span><div class="fa" id="fca"></div></div>
    </div></div>
    <div class="fcctrl"><button class="btn" id="fcprev" aria-label="Sebelumnya">←</button><span class="fccount" id="fccount"></span><button class="btn" id="fcnext" aria-label="Berikutnya">→</button><button class="btn ghost" id="fcshuf">↻ Acak</button></div>
    <p class="kbd"><kbd>Spasi</kbd> balik · <kbd>←</kbd> <kbd>→</kbd> pindah kartu</p>
  </div>`;
  const fl=$("#flash",body);
  const show=()=>{
    const c=FLASHCARDS[F.order[F.idx]];fl.classList.remove("flipped");
    fl.className="flash "+(c.tag.startsWith("IIT")?"s-iit":"s-ads");
    $("#fctag",body).textContent=c.tag;$("#fcq",body).textContent=c.q;$("#fca",body).textContent=c.a;
    $("#fccount",body).textContent=(F.idx+1)+" / "+F.order.length;
  };
  F.flip=()=>fl.classList.toggle("flipped");
  F.go=d=>{F.idx=(F.idx+d+F.order.length)%F.order.length;show();};
  fl.addEventListener("click",F.flip);
  $("#fcprev",body).addEventListener("click",()=>F.go(-1));
  $("#fcnext",body).addEventListener("click",()=>F.go(1));
  $("#fcshuf",body).addEventListener("click",()=>{F.order=shuffle(F.order);F.idx=0;show();});
  $$("[data-f]",body).forEach(b=>b.addEventListener("click",()=>{F.filter=b.dataset.f;F.order=fcList();F.idx=0;renderFlash(body);}));
  show();
}

/* ---------- Konverter ---------- */
function renderConv(body){
  body.innerHTML=`
  <div class="card s-iit" style="max-width:760px;margin:0 auto">
    <div class="eyebrow">Konverter sistem bilangan</div>
    <h2 style="font-size:21px;font-weight:800;margin:6px 0 4px">Desimal ↔ Biner ↔ Oktal ↔ Heksa</h2>
    <p class="muted" style="font-size:14px">Ketik di salah satu kolom, kolom lain langsung mengikuti. Pakai buat ngecek jawaban konversi kamu.</p>
    <div class="conv">
      <div class="field"><label for="cdec">Desimal (basis 10)</label><input class="txt" id="cdec" inputmode="numeric" autocomplete="off" placeholder="126"></div>
      <div class="field"><label for="cbin">Biner (basis 2)</label><input class="txt" id="cbin" inputmode="numeric" autocomplete="off" placeholder="1111110"></div>
      <div class="field"><label for="coct">Oktal (basis 8)</label><input class="txt" id="coct" inputmode="numeric" autocomplete="off" placeholder="176"></div>
      <div class="field"><label for="chex">Heksadesimal (basis 16)</label><input class="txt" id="chex" autocomplete="off" autocapitalize="characters" placeholder="7E"></div>
    </div>
    <p class="convhint" id="chint">Contoh: 126₁₀ = 1111110₂ = 176₈ = 7E₁₆</p>
    <p class="muted" style="font-size:13.5px;margin-top:10px">Mau tahu cara ngitungnya? Buka <a href="#l/hitung-0">Lab Hitung</a> atau latih di <a href="#latihan/hitung">Hitung Acak</a>.</p>
  </div>`;
  const f=[["cdec",10,/^[0-9]+$/],["cbin",2,/^[01]+$/],["coct",8,/^[0-7]+$/],["chex",16,/^[0-9a-f]+$/i]].map(([id,b,re])=>({el:$("#"+id,body),b,re}));
  const hint=$("#chint",body);
  f.forEach(x=>x.el.addEventListener("input",()=>{
    const v=x.el.value.trim();f.forEach(y=>y.el.classList.remove("bad"));
    if(!v){f.forEach(y=>{if(y!==x)y.el.value="";});hint.textContent="Masukkan angka di salah satu kolom.";return;}
    if(!x.re.test(v)){x.el.classList.add("bad");hint.textContent="Digit tidak valid untuk basis "+x.b+".";return;}
    const n=parseInt(v,x.b);
    f.forEach(y=>{if(y!==x)y.el.value=n.toString(y.b).toUpperCase();});
    hint.textContent=`${n}₁₀ = ${n.toString(2)}₂ = ${n.toString(8)}₈ = ${n.toString(16).toUpperCase()}₁₆`;
  }));
}

/* ================= SIMULASI ================= */
const PACKS=[
  {id:"iit",name:"MT IIT",ic:"💡",cls:"s-iit",n:30,min:45,desc:"30 soal: 18 hitungan (konversi, komplemen, BCD, logika, data) + 12 konsep dari ketujuh topik."},
  {id:"ads",name:"MT ADS",ic:"🧩",cls:"s-ads",n:30,min:45,desc:"30 soal: 18 baca kode & tebak output + 12 konsep dari semua topik ADS."},
  {id:"remed",name:"Remedial ADS",ic:"🎯",cls:"s-ads",n:30,min:45,desc:"30 soal fokus kisi-kisi remedial: sorting, searching, isi kode kosong, tebak output, analogi, library C."},
  {id:"mix",name:"Full MT (IIT + ADS)",ic:"🔥",cls:"s-bedah",n:60,min:90,desc:"30 IIT + 30 ADS sekaligus. Latihan ketahanan paling mirip hari H."}
];
let SIM=null,simTick=null;
function startSim(id){
  const p=PACKS.find(x=>x.id===id);
  const items=id==="mix"?simItems("iit").concat(simItems("ads")):simItems(id);
  SIM={pack:p,items,perm:items.map(q=>shuffle(q.o.map((_,i)=>i))),ans:items.map(()=>null),flag:items.map(()=>false),cur:0,start:Date.now(),end:Date.now()+p.min*60000,done:false,filter:"wrong"};
  clearInterval(simTick);simTick=setInterval(tickSim,1000);
}
/* Ambil n soal merata per topik (proporsional dengan jumlah soal tiap topik), urutan topik tetap. */
function take(subj,n,filter){
  const by=SUBJ[subj].topics.map((_,t)=>shuffle(qOfTopic(subj,t).filter(filter||(()=>true))));
  const tot=by.reduce((a,b)=>a+b.length,0);
  const floor=n>=by.filter(b=>b.length).length*2?2:1; // tiap topik minimal muncul 2 soal kalau kuotanya cukup
  const alloc=by.map(b=>Math.min(b.length,Math.max(floor,Math.floor(n*b.length/tot))));
  let left=n-alloc.reduce((a,b)=>a+b,0);
  while(left<0){const t=alloc.indexOf(Math.max(...alloc));alloc[t]--;left++;}
  for(const t of shuffle(by.map((_,i)=>i)))if(left>0&&alloc[t]<by[t].length){alloc[t]++;left--;}
  return by.flatMap((b,t)=>shuffle(b.slice(0,alloc[t])));
}
/* Komposisi paket MT: IIT berat hitungan, ADS berat kode → output. Remedial = topik searching, sorting, soal kode, library. */
const REMED_T=[10,12,13,14,15];
function simItems(subj){
  if(subj==="iit")return shuffle(genMany(GENS.iit,18).concat(take("iit",12,q=>q.kind!=="calc")));
  if(subj==="remed"){const F=q=>REMED_T.includes(q.t),st=shuffle(ALLQ.filter(q=>q.subj==="ads"&&F(q)));
    return shuffle(genMany(GENS.ads.filter(F),14).concat(st.filter(q=>q.kind==="code").slice(0,8),st.filter(q=>q.kind!=="code").slice(0,8)));}
  const sc=shuffle(ALLQ.filter(q=>q.subj==="ads"&&q.kind==="code")).slice(0,6);
  return shuffle(genMany(GENS.ads,12).concat(sc,take("ads",12,q=>q.kind!=="code")));
}
function tickSim(){
  if(!SIM||SIM.done){clearInterval(simTick);return;}
  const left=Math.max(0,Math.round((SIM.end-Date.now())/1000));
  const t=$("#stimer");if(t){t.textContent="⏱ "+mmss(left);t.classList.toggle("low",left<=120);}
  if(left<=0){finishSim();toast("Waktu habis, jawaban otomatis dikumpulkan.");}
}
function finishSim(){
  if(!SIM||SIM.done)return;
  clearInterval(simTick);
  let ok=0,pts=0,max=0;
  SIM.items.forEach((q,i)=>{max+=q.w;if(SIM.ans[i]!==null){const c=SIM.ans[i]===q.a;if(c){ok++;pts+=q.w;}record(q.key,c);}});
  const n=SIM.items.length,pct=Math.round(pts/max*100),secs=Math.round((Math.min(Date.now(),SIM.end)-SIM.start)/1000);
  SIM.done=true;SIM.res={ok,n,pct,secs,pts,max};
  S.sims.unshift({d:Date.now(),p:SIM.pack.id,ok,n,pct,secs});S.sims=S.sims.slice(0,12);save();
  if(pct>=80)setTimeout(confetti,200);
  if(location.hash.startsWith("#simulasi"))renderSim($("#view-simulasi"));
  else toast(`Simulasi selesai: nilai ${pct}. Buka tab Simulasi untuk pembahasan.`);
}
function renderSim(el){
  if(!SIM)return simSetup(el);
  if(!SIM.done)return simExam(el);
  simResult(el);
}
function simSetup(el){
  el.innerHTML=`
  <div class="pagehead">
    <div class="eyebrow">Simulasi MT</div>
    <h1>Uji diri kayak ujian beneran.</h1>
    <p class="lead">Soal diacak dan ada timer. Pembahasan baru muncul setelah jawaban dikumpulkan. Jawaban masih bisa diganti, dan soal yang ragu bisa ditandai 🚩.</p>
    <p class="muted" style="margin-top:10px;font-size:14px"><b>Bobot nilai beda per soal:</b> ⭐ 1 poin konsep/hafalan · ⭐⭐ 2 poin hitung/trace sederhana · ⭐⭐⭐ 3 poin multi-langkah. Nilai akhir = poin yang didapat ÷ total poin × 100. Soal hitungan & kode dibuat acak, jadi tiap simulasi beda.</p>
  </div>
  <div class="packs">${PACKS.map(p=>`<button class="card pack ${p.cls}" data-pack="${p.id}"><span class="ic">${p.ic}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="row"><span class="chip">${p.n} soal</span><span class="chip">${p.min} menit</span></div></button>`).join("")}</div>
  <div class="sectiontitle"><div><div class="eyebrow">Riwayat</div><h2>Percobaan sebelumnya</h2></div></div>
  ${S.sims.length?`<div class="hist">${S.sims.map(s=>`<div><span>${PACKS.find(p=>p.id===s.p).ic} ${PACKS.find(p=>p.id===s.p).name} · <span class="faint">${new Date(s.d).toLocaleString("id-ID",{weekday:"short",hour:"2-digit",minute:"2-digit"})}</span></span><span><b>${s.pct}</b> <span class="faint">(${s.ok}/${s.n} · ${mmss(s.secs)})</span></span></div>`).join("")}</div>`:`<p class="muted">Belum ada. Coba MT IIT atau MT ADS dulu, lalu Full MT sebagai penutup.</p>`}
  ${footer()}`;
  $$("[data-pack]",el).forEach(b=>b.addEventListener("click",()=>{startSim(b.dataset.pack);renderSim(el);window.scrollTo(0,0);}));
}
function simExam(el){
  const i=SIM.cur,q=SIM.items[i],n=SIM.items.length,answered=SIM.ans.filter(a=>a!==null).length;
  const left=Math.max(0,Math.round((SIM.end-Date.now())/1000));
  el.innerHTML=`
  <div class="examtop">
    <span class="timer ${left<=120?"low":""}" id="stimer">⏱ ${mmss(left)}</span>
    <div class="bar"><i style="width:${answered/n*100}%"></i></div>
    <span class="chip">${answered}/${n} dijawab</span>
    <button class="btn sm primary" id="ssubmit">Kumpulkan</button>
  </div>
  <div class="exam">
    <div>
      <div class="q ${SUBJ[q.subj].cls}">
        <div class="qmeta"><span class="qn">SOAL ${i+1} DARI ${n}</span><span class="chip">${SUBJ[q.subj].short}</span><span class="mast">${"⭐".repeat(q.w)} ${q.w} poin</span>${SIM.flag[i]?'<span class="mast mid">🚩 ragu</span>':""}</div>
        <div class="qt">${q.q}</div>
        <div class="opts">${SIM.perm[i].map((oi,j)=>`<button class="opt ${SIM.ans[i]===oi?"sel":""}" data-j="${j}"><span class="mk">${"ABCDE"[j]}</span><span class="ot">${esc(q.o[oi])}</span></button>`).join("")}</div>
      </div>
      <div class="fnext examnav">
        <button class="btn" id="sprev" ${i===0?"disabled":""}>← Sebelumnya</button>
        <button class="btn soft" id="sflag">${SIM.flag[i]?"Hapus tanda":"🚩 Tandai ragu"}</button>
        <button class="btn primary" id="snext">${i===n-1?"Selesai? Kumpulkan":"Berikutnya →"}</button>
      </div>
      <p class="kbd" style="margin-top:12px">Keyboard: <kbd>A</kbd>–<kbd>D</kbd> pilih · <kbd>←</kbd> <kbd>→</kbd> pindah soal</p>
    </div>
    <aside class="card examside">
      <h3>Navigasi soal</h3>
      <div class="qgrid">${SIM.items.map((_,k)=>`<button data-k="${k}" class="${SIM.ans[k]!==null?"ans":""} ${k===i?"cur":""} ${SIM.flag[k]?"flag":""}" aria-label="Soal ${k+1}">${k+1}</button>`).join("")}</div>
      <div class="legend"><span><i style="background:var(--accent-soft)"></i>dijawab</span><span><i style="background:var(--ads);border-radius:50%"></i>ragu</span><span><i style="border:1.5px solid var(--line-2)"></i>kosong</span></div>
      <p class="muted" style="font-size:12.5px;margin-top:12px">${SIM.pack.ic} ${SIM.pack.name}</p>
      <button class="btn sm ghost" id="squit" style="margin-top:6px;padding-left:0">✕ Batalkan simulasi</button>
    </aside>
  </div>`;
  const go=k=>{SIM.cur=Math.max(0,Math.min(n-1,k));simExam(el);if(window.scrollY>80)window.scrollTo(0,0);};
  SIM.go=go;SIM.pickOpt=j=>{if(j<q.o.length){SIM.ans[i]=SIM.perm[i][j];simExam(el);}};
  $$(".opt",el).forEach(b=>b.addEventListener("click",()=>SIM.pickOpt(+b.dataset.j)));
  $$("[data-k]",el).forEach(b=>b.addEventListener("click",()=>go(+b.dataset.k)));
  $("#sprev",el).addEventListener("click",()=>go(i-1));
  $("#snext",el).addEventListener("click",()=>i===n-1?submit():go(i+1));
  $("#sflag",el).addEventListener("click",()=>{SIM.flag[i]=!SIM.flag[i];simExam(el);});
  $("#ssubmit",el).addEventListener("click",submit);
  $("#squit",el).addEventListener("click",()=>{if(confirm("Batalkan simulasi ini? Jawabanmu tidak akan disimpan.")){clearInterval(simTick);SIM=null;renderSim(el);}});
  function submit(){
    const empty=SIM.ans.filter(a=>a===null).length,flags=SIM.flag.filter(Boolean).length;
    const msg=empty?`Masih ada ${empty} soal kosong${flags?" dan "+flags+" ditandai ragu":""}. Tetap kumpulkan?`:flags?`${flags} soal masih ditandai ragu. Tetap kumpulkan?`:"Kumpulkan jawaban sekarang?";
    if(confirm(msg)){finishSim();window.scrollTo(0,0);}
  }
}
function simResult(el){
  const r=SIM.res,p=SIM.pack;
  const by={};
  SIM.items.forEach((q,i)=>{const k=q.subj+"-"+q.t;by[k]=by[k]||{ok:0,n:0,q};by[k].n++;if(SIM.ans[i]===q.a)by[k].ok++;});
  const rows=Object.keys(by).sort((a,b)=>by[a].ok/by[a].n-by[b].ok/by[b].n);
  const msg=r.pct>=85?"Mantap, siap tempur! 🔥":r.pct>=70?"Bagus! Sedikit lagi sempurna 💪":r.pct>=50?"Lumayan. Ulangi topik yang merah ya 📚":"Masih perlu latihan. Ayo ulangi materinya, pasti bisa 💪";
  const wrongIdx=SIM.items.map((q,i)=>i).filter(i=>SIM.ans[i]!==SIM.items[i].a);
  el.innerHTML=`
  <div class="card result ${p.cls}">
    <div class="grade" style="--p:${r.pct}"><b>${r.pct}</b><span>nilai</span></div>
    <div>
      <div class="eyebrow">Hasil simulasi · ${p.name}</div>
      <h2 style="font-size:clamp(22px,4vw,30px);font-weight:800;margin:6px 0 6px">${msg}</h2>
      <p class="muted"><b>${r.pts}/${r.max} poin</b> · ${r.ok} dari ${r.n} soal benar · waktu ${mmss(r.secs)} · ${SIM.ans.filter(a=>a===null).length} tidak dijawab</p>
      <div class="row" style="margin-top:16px"><button class="btn primary" id="sagain">↻ Simulasi baru</button>${wrongIdx.length?`<a class="btn" href="#latihan/soal" id="sdrill">✍️ Latih ulang yang salah</a>`:""}</div>
    </div>
  </div>
  <div class="sectiontitle"><div><div class="eyebrow">Analisis</div><h2>Skor per topik</h2></div><span class="faint" style="font-size:13px">Paling lemah di atas: klik untuk baca ulang materinya</span></div>
  <div class="card breakdown">${rows.map(k=>{const b=by[k],pc=Math.round(b.ok/b.n*100),s=SUBJ[b.q.subj];
    return `<div class="bd ${s.cls}"><a class="n" href="#l/${k}" style="color:inherit">${s.short} · ${esc(s.topics[b.q.t].t)}</a><div class="bar"><i style="width:${pc}%;background:${pc>=80?"var(--good)":pc>=50?"var(--warn)":"var(--bad)"}"></i></div><span class="v">${b.ok}/${b.n}</span></div>`;}).join("")}</div>
  <div class="sectiontitle"><div><div class="eyebrow">Pembahasan</div><h2>Cek jawabanmu</h2></div>
    <div class="seg"><button data-sf="wrong" aria-selected="${SIM.filter==="wrong"}">Salah/kosong (${wrongIdx.length})</button><button data-sf="all" aria-selected="${SIM.filter==="all"}">Semua (${r.n})</button></div></div>
  <div class="qlist">${SIM.items.map((q,i)=>{
    if(SIM.filter==="wrong"&&SIM.ans[i]===q.a)return "";
    const a=SIM.ans[i],ok=a===q.a;
    return `<div class="q ${SUBJ[q.subj].cls}"><div class="qmeta"><span class="qn">SOAL ${i+1}</span><span class="chip">${SUBJ[q.subj].short} · ${esc(SUBJ[q.subj].topics[q.t].t)}</span><span class="mast">${q.w} poin</span>${a===null?'<span class="mast">tidak dijawab</span>':ok?'<span class="mast hi">benar</span>':'<span class="mast lo">salah</span>'}</div>
      <div class="qt">${q.q}</div>
      <div class="opts">${SIM.perm[i].map((oi,j)=>`<button class="opt ${oi===q.a?"correct":oi===a?"wrong":"dim"}" disabled><span class="mk">${"ABCDE"[j]}</span><span class="ot">${esc(q.o[oi])}</span></button>`).join("")}</div>
      <div class="exp ${ok?"ok":"no"}">${esc(q.e)}<br><a href="#l/${q.subj}-${q.t}">📖 Baca materinya →</a></div></div>`;
  }).join("")||`<div class="card summary"><div class="big">💯</div><h2>Semua benar!</h2><p class="muted">Tidak ada yang perlu dibahas. Kamu siap.</p></div>`}</div>
  ${footer()}`;
  $("#sagain",el).addEventListener("click",()=>{SIM=null;renderSim(el);window.scrollTo(0,0);});
  const d=$("#sdrill",el);
  if(d)d.addEventListener("click",()=>{P.subj="all";P.topic=-1;P.onlyWrong=false;newQueue(wrongIdx.map(i=>SIM.items[i]));});
  $$("[data-sf]",el).forEach(b=>b.addEventListener("click",()=>{SIM.filter=b.dataset.sf;simResult(el);}));
}

/* ================= RINGKASAN & KISI ================= */
const FORMULA=[
  ["Desimal → basis n","bagi n berulang, sisa dibaca bawah → atas"],
  ["Biner → desimal","Σ bit × 2^posisi (posisi 0 dari kanan) · 1 2 4 8 16 32 64 128"],
  ["Biner → oktal / heksa","grup 3-bit / 4-bit dari kanan · A=10 … F=15"],
  ["Komplemen-2","balik semua bit, lalu +1 · −7 = 1111 1001"],
  ["Pengurangan biner","A − B = A + (komplemen-2 B), buang carry ke-9"],
  ["Penjumlahan BCD","hasil per 4-bit > 9 → tambah 0110"],
  ["Tabel kebenaran","baris = 2ⁿ · p→q salah hanya saat B→S"],
  ["Waktu unduh","detik = (Byte × 8) ÷ bps"],
  ["Efisiensi kompresi","100% − (sesudah ÷ sebelum × 100%)"],
  ["Satuan data","1 Byte = 8 bit · 1 KB = 1024 Byte"],
  ["Binary search","tengah = (bawah + atas) / 2 · data WAJIB terurut"],
  ["Loop i+=2","for(i=1;i<=10;i+=2) → 5×, i akhir = 11"],
  ["Pembagian int","7/2 = 3 · 7%2 = 1 · (float)7/2 = 3.5"],
  ["Nilai akhir","0.2*tugas + 0.3*uts + 0.5*uas (bukan 20/100!)"]
];
const TRAPS=[
  "<b>int ÷ int membuang pecahan</b>: <code>20/100 = 0</code>, jadi rumus bobot dengan int hasilnya 0.",
  "<b>Nilai i setelah loop</b> <code>for(i=1;i&lt;=10;i+=2)</code> = 11, bukan 9.",
  "<b>Urutan else if</b>: cek nilai terbesar dulu, kalau tidak, 91 bisa dapat C.",
  "<b>scanf butuh &amp;</b>: <code>scanf(\"%d\", &amp;x)</code>. Nama berspasi pakai <code>fgets</code>.",
  "<b>Waktu unduh</b>: lupa ×8 (Byte → bit) = jawaban salah.",
  "<b>Binary search</b> hanya untuk data yang <b>sudah terurut</b>.",
  "<b>Indeks array mulai 0</b>: <code>a[5]</code> → 0–4.",
  "<b>Bubble pass 1</b>: yang terbesar sudah di kanan · <b>Selection pass 1</b>: yang terkecil sudah di kiri · <b>Insertion</b>: cuma bagian kiri yang berubah.",
  "<b>Bubble</b> <code>&gt;</code> = ascending, <code>&lt;</code> = descending. Cek juga batas loop luar: kalau cuma 2 pass, array belum tentu urut.",
  "<b>Selection</b>: <code>min = j</code> (indeks), bukan <code>min = a[j]</code>. <b>Insertion</b>: sisip di <code>a[j+1]</code>.",
  "<b>strcmp = 0 artinya sama</b>. <code>strlen(\"Halo\")</code> = 4 (tanpa \\0). Fungsi math.h hasilnya double → cetak pakai %f.",
  "<b>Flowchart</b>: input pakai jajar genjang, kondisi pakai belah ketupat, harus ada Selesai.",
  "<b>NIM disimpan sebagai string</b>, bukan int (angka 0 di depan hilang).",
  "<b>switch tanpa break</b> → fall-through ke case berikutnya.",
  "<b>Triad Senn</b> (Computers, Communications, Know-How) ≠ triad sistem komputer (Hardware, Software, Brainware).",
  "<b>Hub</b> = Physical (broadcast) · <b>Switch</b> = MAC · <b>Router</b> = IP."
];
function renderRingkasan(el,sub){
  sub=sub==="kisi"||sub==="contekan"?sub:"kilat";
  el.innerHTML=`
  <div class="pagehead">
    <div class="eyebrow">Ringkasan</div>
    <h1>${sub==="kisi"?"Kisi-kisi MT":sub==="contekan"?"Contekan IIT.":"Ringkasan kilat."}</h1>
    <p class="lead">${sub==="contekan"?"Tinggal salin ke kertas. <b>Lembar 1</b> hitungan (paling banyak poin, tulis paling rapi), <b>lembar 2</b> hafalan. Ketuk bagian yang sudah kamu tulis biar dicoret.":sub==="kisi"?"Semua sub-topik dipecah per materi. Tanya teman yang sudah MT, lalu <b>centang yang keluar</b>. Tombol “Salin” mengubahnya jadi teks siap kirim ke WhatsApp.":"Semua inti materi dan rumus dalam satu halaman. Baca 15 menit sebelum masuk ruangan. Bisa juga dicetak atau disimpan sebagai PDF."}</p>
  </div>
  <div class="row noprint" style="margin-bottom:22px">
    <nav class="seg"><a href="#ringkasan" ${sub==="kilat"?'aria-current="page"':""}>⚡ Ringkasan Kilat</a><a href="#ringkasan/contekan" ${sub==="contekan"?'aria-current="page"':""}>📝 Contekan</a><a href="#ringkasan/kisi" ${sub==="kisi"?'aria-current="page"':""}>✅ Kisi-kisi</a></nav>
    ${sub!=="kisi"?`<button class="btn sm" id="rprint">🖨️ Cetak / PDF</button>`:""}
  </div>
  <div id="rbody"></div>`;
  const body=$("#rbody",el);
  if(sub==="kisi")return renderKisi(body);
  $("#rprint",el).addEventListener("click",()=>window.print());
  if(sub==="contekan")return renderContekan(body);
  const sec=(subj)=>{const s=SUBJ[subj];return `<div class="sectiontitle"><div><div class="eyebrow">${s.short}</div><h2>${s.name}</h2></div></div>
    <div class="cheat">${s.topics.map((t,i)=>`<div class="card ${s.cls}"><h3><span class="num">${pad(i+1)}</span><a href="#l/${subj}-${i}">${esc(t.t)}</a></h3><ul>${t.k.map(k=>`<li>${k}</li>`).join("")}</ul></div>`).join("")}</div>`;};
  body.innerHTML=`
  <div class="sectiontitle" style="margin-top:0"><div><div class="eyebrow">Wajib hafal</div><h2>🔢 Rumus &amp; angka penting</h2></div></div>
  <div class="formula s-hitung">${FORMULA.map(([a,b])=>`<div><b>${a}</b><span>${esc(b)}</span></div>`).join("")}</div>
  ${sec("iit")}${sec("ads")}
  <div class="sectiontitle"><div><div class="eyebrow">Hati-hati</div><h2>⚠️ Jebakan favorit dosen</h2></div></div>
  <div class="card s-bedah"><ul class="prose" style="margin:0;padding-left:20px">${TRAPS.map(t=>`<li>${t}</li>`).join("")}</ul></div>
  <div class="tips noprint" style="margin-top:24px;text-align:center"><b>Sudah baca semua?</b> <span class="muted">Tes sekali lagi lewat</span> <a href="#simulasi">Simulasi MT →</a></div>
  ${footer()}`;
}
function renderContekan(body){
  const KC="mtprep-contekan";let done={};
  try{done=JSON.parse(localStorage.getItem(KC)||"{}")||{};}catch(e){}
  const sheet=n=>`<div class="sectiontitle"><div><div class="eyebrow">Lembar ${n}</div><h2>${n===1?"🔢 Hitungan":"🧠 Hafalan"}</h2></div></div>
    <div class="cheat">${CONTEKAN_IIT.map((c,i)=>c.sheet!==n?"":`<div class="card s-iit ctk ${done[i]?"done":""}" data-i="${i}" role="button" tabindex="0" aria-pressed="${!!done[i]}"><h3><span class="num">${done[i]?"✓":pad(i+1)}</span>${c.h}</h3>${c.pre?`<pre class="work">${esc(c.pre)}</pre>`:`<ul>${c.items.map(x=>`<li>${x}</li>`).join("")}</ul>`}</div>`).join("")}</div>`;
  body.innerHTML=`<div class="card kisibar s-iit noprint"><span><span class="pct" id="ccount">0</span> <span class="muted">/ ${CONTEKAN_IIT.length} bagian sudah ditulis</span></span><div class="bar"><i id="cfill"></i></div><button class="btn sm ghost" id="cclear">Reset</button></div>
  ${sheet(1)}${sheet(2)}
  <p class="muted noprint" style="text-align:center;margin-top:24px;font-size:14px">Tips: tabel biner–heksa bikin konversi tinggal lihat, nggak perlu ngitung. Habis nulis, latihan di <a href="#latihan">Hitung Acak</a>.</p>
  ${footer()}`;
  const upd=()=>{const n=Object.keys(done).length;$("#ccount",body).textContent=n;$("#cfill",body).style.width=(n/CONTEKAN_IIT.length*100)+"%";};
  const toggle=c=>{const i=c.dataset.i;if(done[i])delete done[i];else done[i]=1;
    c.classList.toggle("done",!!done[i]);c.setAttribute("aria-pressed",!!done[i]);$(".num",c).textContent=done[i]?"✓":pad(+i+1);
    try{localStorage.setItem(KC,JSON.stringify(done));}catch(e){}upd();};
  $$(".ctk",body).forEach(c=>{c.addEventListener("click",e=>{if(!e.target.closest("a"))toggle(c);});c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle(c);}});});
  $("#cclear",body).addEventListener("click",()=>{done={};try{localStorage.removeItem(KC);}catch(e){}$$(".ctk",body).forEach(c=>{c.classList.remove("done");c.setAttribute("aria-pressed","false");$(".num",c).textContent=pad(+c.dataset.i+1);});upd();});
  upd();
}
function renderKisi(body){
  const KK="mtprep-kisi";let checked={};
  try{checked=JSON.parse(localStorage.getItem(KK)||"{}")||{};}catch(e){}
  const saveK=()=>{try{localStorage.setItem(KK,JSON.stringify(checked));}catch(e){}};
  let total=0;
  const group=(key,label,cls,data)=>`<div class="kisigroup ${cls}"><span class="chip">${label}</span>${data.map((tp,ti)=>`<div class="card kisitopic"><h4><span class="mast">${pad(ti+1)}</span>${tp.t}</h4>${tp.items.map((it,ii)=>{total++;const id=key+"-"+ti+"-"+ii;return `<label class="check ${checked[id]?"on":""}"><input type="checkbox" data-id="${id}" ${checked[id]?"checked":""}><span>${it}</span></label>`;}).join("")}</div>`).join("")}</div>`;
  const groups=group("iit","IIT","s-iit",KISI_IIT)+group("ads","ADS","s-ads",KISI_ADS);
  body.innerHTML=`
  <div class="card kisibar s-iit noprint"><span><span class="pct" id="kcount">0</span> <span class="muted">/ ${total} ditandai keluar</span></span><div class="bar"><i id="kfill"></i></div>
    <button class="btn sm" id="kcopy">📋 Salin</button><button class="btn sm ghost" id="kclear">Bersihkan</button><span class="copied" id="kcopied" hidden>Tersalin ✓</span></div>
  <div id="kwrap">${groups}</div>
  <p class="muted" style="text-align:center;margin-top:24px;font-size:14px">Centang = “kemungkinan keluar di MT”. Setelah tahu, fokuskan belajar di <a href="#belajar">Jalur Belajar</a>.</p>
  ${footer()}`;
  const upd=()=>{const n=Object.keys(checked).length;$("#kcount",body).textContent=n;$("#kfill",body).style.width=(n/total*100)+"%";};
  $$("input[type=checkbox]",body).forEach(b=>b.addEventListener("change",()=>{
    if(b.checked)checked[b.dataset.id]=1;else delete checked[b.dataset.id];
    b.closest(".check").classList.toggle("on",b.checked);saveK();upd();
  }));
  $("#kclear",body).addEventListener("click",()=>{if(!Object.keys(checked).length||confirm("Hapus semua centang?")){checked={};saveK();$$("input[type=checkbox]",body).forEach(b=>{b.checked=false;b.closest(".check").classList.remove("on");});upd();}});
  $("#kcopy",body).addEventListener("click",()=>{
    const lines=["KISI-KISI PREP MT 1CC5","(☑ = ditandai kemungkinan keluar)",""];
    $$(".kisigroup",body).forEach(g=>{
      lines.push("=== "+$(".chip",g).textContent+" ===");
      $$(".kisitopic",g).forEach(c=>{
        lines.push("","# "+$("h4",c).textContent.replace(/^\d+/,"").trim());
        $$(".check",c).forEach(l=>lines.push(($("input",l).checked?"☑ ":"☐ ")+$("span",l).textContent));
      });
      lines.push("");
    });
    const text=lines.join("\n"),note=$("#kcopied",body);
    const flash=()=>{note.hidden=false;setTimeout(()=>note.hidden=true,1800);};
    const fallback=()=>{const ta=document.createElement("textarea");ta.value=text;ta.style.cssText="position:fixed;opacity:0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");flash();}catch(e){}ta.remove();};
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(text).then(flash,fallback);else fallback();
  });
  upd();
}

/* ================= ROUTER ================= */
const VIEWS=["home","belajar","lesson","latihan","simulasi","ringkasan"];
let curView=null;
function route(){
  const h=decodeURIComponent(location.hash.slice(1))||"home";
  const [v,a]=h.split("/");
  let view=VIEWS.includes(v)&&v!=="lesson"?v:"home";
  if(v==="l"&&BYID[a])view="lesson";
  const el=$("#view-"+view);
  ({home:()=>renderHome(el),belajar:()=>renderBelajar(el),lesson:()=>renderLesson(el,a),latihan:()=>renderLatihan(el,a),simulasi:()=>renderSim(el),ringkasan:()=>renderRingkasan(el,a)})[view]();
  VIEWS.forEach(k=>{$("#view-"+k).hidden=k!==view;});
  if(curView!==view||view==="lesson"){el.classList.remove("view");void el.offsetWidth;el.classList.add("view");}
  curView=view;
  const nav=view==="lesson"?"belajar":view;
  $$("[data-nav]").forEach(x=>{if(x.dataset.nav===nav)x.setAttribute("aria-current","page");else x.removeAttribute("aria-current");});
  const titles={home:"",belajar:"Jalur Belajar",lesson:view==="lesson"?BYID[a].title:"",latihan:"Latihan",simulasi:"Simulasi MT",ringkasan:"Ringkasan"};
  document.title=(titles[view]?titles[view]+" · ":"")+"Prep MT 1CC5";
  updateTop();
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);

/* klik global: reset progres, preset jenis Hitung Acak */
document.addEventListener("click",e=>{
  const r=e.target.closest("[data-reset]");
  if(r){if(confirm("Reset semua progres belajar, riwayat soal, dan simulasi di browser ini?")){S=fresh();save();P.queue=null;route();toast("Progres direset.");}return;}
  const dr=e.target.closest("[data-drill]");
  if(dr){const[s,t]=dr.dataset.drill.split("-");P.subj=s;P.topic=+t;P.onlyWrong=false;newQueue();}
  const g=e.target.closest("[data-gen]");
  if(g&&GEN[g.dataset.gen]){G.type=g.dataset.gen;genNew();}
});

/* keyboard shortcut */
document.addEventListener("keydown",e=>{
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  const tag=(e.target.tagName||"").toLowerCase();
  if(tag==="input"||tag==="textarea"||tag==="select")return;
  const h=location.hash.slice(1);const k=e.key.toLowerCase();
  const letter="abcd".indexOf(k),digit="1234".indexOf(k),idx=letter>=0?letter:digit;
  if(h.startsWith("latihan")&&(h==="latihan"||h==="latihan/soal")&&P.card){
    if(idx>=0&&!P.card.answered()){P.card.choose(idx);e.preventDefault();}
    else if((k==="enter"||k==="arrowright")&&P.card.answered()&&e.target!==P.next){P.next.click();e.preventDefault();}
  }else if(h==="latihan/flash"&&F.go){
    if(k===" "){F.flip();e.preventDefault();}else if(k==="arrowright")F.go(1);else if(k==="arrowleft")F.go(-1);
  }else if(h.startsWith("simulasi")&&SIM&&!SIM.done&&SIM.go){
    if(idx>=0){SIM.pickOpt(idx);e.preventDefault();}else if(k==="arrowright")SIM.go(SIM.cur+1);else if(k==="arrowleft")SIM.go(SIM.cur-1);
  }
});

/* peringatan sebelum menutup tab saat simulasi berjalan */
window.addEventListener("beforeunload",e=>{if(SIM&&!SIM.done){e.preventDefault();e.returnValue="";}});

/* tema */
$("#themeBtn").addEventListener("click",()=>{
  const cur=document.documentElement.getAttribute("data-theme");
  const dark=cur?cur==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
  const next=dark?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  try{localStorage.setItem("mtprep-theme",next);}catch(e){}
});

route();
})();
