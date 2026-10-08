const medicines = [
  {id:1,name:"Dolo 650",brand:"Micro Labs",salt:"Paracetamol 650 mg",price:32,rx:false,cat:"Fever & Pain",tag:"Popular",image:"https://ayushcare.in/cdn/shop/products/Dolo650.jpg?v=1747141378&width=1445"},
  {id:2,name:"Crocin Advance 500",brand:"GSK",salt:"Paracetamol 500 mg",price:19,rx:false,cat:"Fever & Pain",tag:"Popular",image:"https://cdn01.pharmeasy.in/dam/products_otc/049311/crocin-advance-500mg-strip-of-15-tablets-1.jpg"},
  {id:3,name:"Saridon",brand:"Piramal",salt:"Paracetamol + Caffeine",price:55,rx:false,cat:"Fever & Pain",tag:"Bestseller",image:"https://cdn.farmako.ai/inventory/images/b0a526a7-7b96-438d-be46-504608b53e53/fcd3fbce-439e-4181-9b5d-419b6e4c610b.png"},
  {id:4,name:"Volini Pain Relief Gel",brand:"Sun Pharma",salt:"Topical pain relief gel",price:245,rx:false,cat:"Pain Relief",tag:"Popular",image:"https://images.apollo247.in/pub/media/catalog/product/v/o/vol0149_11_1_.jpg"},
  {id:5,name:"Moov Pain Relief Cream",brand:"Reckitt",salt:"Topical pain relief cream",price:155,rx:false,cat:"Pain Relief",tag:"Popular",image:"https://www.vamacy.com/cdn/shop/files/MOO30G.jpg?v=1756288163"},
  {id:6,name:"Iodex Fast Relief Balm",brand:"GSK",salt:"Topical pain relief balm",price:105,rx:false,cat:"Pain Relief",tag:"Popular",image:"https://m237.apollo247.com/pub/media/catalog/product/I/O/IOD0007_1-AUG23_1.jpg"},
  {id:7,name:"Digene Gel",brand:"Abbott",salt:"Antacid / anti-gas gel",price:145,rx:false,cat:"Digestive Care",tag:"Popular",image:"https://imgwlns.gumlet.io/images/products/320465-2.jpg"},
  {id:8,name:"Gelusil MPS",brand:"Pfizer",salt:"Antacid oral liquid",price:173,rx:false,cat:"Digestive Care",tag:"Popular",image:"https://www.jeevandip.com/media/product/image/720/gelusil-mps-syrup-mainimage-yancjdi9dsgy137lrlw8d1ec.webp"},
  {id:9,name:"Hajmola Regular",brand:"Dabur",salt:"Digestive tablets",price:68,rx:false,cat:"Digestive Care",tag:"Popular",image:"https://www.silkrute.ca/images/detailed/3077/Dabur-Hajmola-Digestive-Tablets_1500x.jpg"},
  {id:10,name:"Electral ORS",brand:"FDC",salt:"Oral rehydration salts",price:25,rx:false,cat:"Hydration",tag:"Essential",image:"https://i.ebayimg.com/images/g/4kgAAeSwsh9ojJDs/s-l1200.jpg"},
  {id:11,name:"Limcee 500",brand:"Abbott",salt:"Vitamin C 500 mg",price:25,rx:false,cat:"Vitamins",tag:"Popular",image:"https://ik.imagekit.io/wlfr/wellness/images/products/207125-1.jpg"},
  {id:12,name:"Shelcal 500",brand:"Torrent",salt:"Calcium + Vitamin D3",price:132,rx:false,cat:"Vitamins",tag:"Popular",image:"https://www.clickoncare.com/cdn/shop/files/shelcal_tablets_online_on_clickoncare.jpg?v=1757866731"},
  {id:13,name:"Evion 400",brand:"P&G Health",salt:"Vitamin E 400 mg",price:99,rx:false,cat:"Vitamins",tag:"Popular",image:"https://www.delmeds.com/cdn/shop/files/Evion_400_Vitamin_E_Capsule_New.jpg"},
  {id:14,name:"Vicks VapoRub",brand:"P&G",salt:"Cold symptom relief balm",price:165,rx:false,cat:"Cold & Cough",tag:"Popular",image:"https://asiangroceryuk.co.uk/cdn/shop/products/vicks-vapor-rub-50g-8250447.jpg?crop=center&height=1200&v=1766451675&width=1200"},
  {id:15,name:"Otrivin Oxy",brand:"GSK",salt:"Oxymetazoline nasal spray",price:112,rx:false,cat:"Cold & Cough",tag:"Popular",image:"https://5.imimg.com/data5/SELLER/Default/2025/4/503069451/WF/TP/YD/157167112/oxymetazoline-nasal-spray-500x500.jpg"},
  {id:16,name:"Cofsils Ginger Lemon",brand:"Cipla Health",salt:"Throat lozenges",price:36,rx:false,cat:"Cold & Cough",tag:"Popular",image:"https://images.apollo247.in/pub/media/catalog/product/C/O/COF0237_1.jpg"},
  {id:17,name:"Strepsils Orange",brand:"Reckitt",salt:"Throat lozenges",price:35,rx:false,cat:"Cold & Cough",tag:"Popular",image:"https://cpimg.tistatic.com/11589438/b/4/Strepsils-Strip..png"},
  {id:18,name:"Benadryl Cough Formula",brand:"Kenvue",salt:"Cough formula 150 ml",price:136,rx:false,cat:"Cold & Cough",tag:"Popular",image:"https://static2.medplusmart.com/products/_41f800_/BENA0012_L.jpg"},
  {id:19,name:"Betadine Ointment",brand:"Win-Medicare",salt:"Povidone-Iodine 10% w/w",price:132,rx:false,cat:"First Aid",tag:"Essential",image:"https://imgwlns.gumlet.io/images/products/368758-1.jpg"},
  {id:20,name:"Candid Dusting Powder",brand:"Glenmark",salt:"Clotrimazole dusting powder",price:162,rx:false,cat:"Skin Care",tag:"Popular",image:"https://cdn.pixelbin.io/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/original/P35i2Kyrkv-candid_dusting_powder_120_gm_0_0.jpg"},
  {id:21,name:"Refresh Tears",brand:"Allergan",salt:"Carboxymethylcellulose eye drops",price:119,rx:false,cat:"Eye Care",tag:"Popular",image:"https://tiimg.tistatic.com/fp/3/007/851/refresh-tears-eye-drop-10ml-616.jpg"},
  {id:22,name:"Soframycin Skin Cream",brand:"Sanofi",salt:"Framycetin skin cream",price:55,rx:true,cat:"Skin Care",tag:"Rx",image:"https://omhealthcart.com/media/catalog/product/cache/94963f09fbd8a8dba3cc97c9485e8b36/s/o/soframycin-skin-cream_1.jpg"},
  {id:23,name:"PAN 40",brand:"Alkem",salt:"Pantoprazole 40 mg",price:193,rx:true,cat:"Prescription",tag:"Rx",image:"https://www.practostatic.com/practopedia-images/v3/res-750/pan-40mg-tablet-15-s_e0c8cd8e-1788-4c84-8491-99aa23ab675a.JPG"},
  {id:24,name:"Allegra 120",brand:"Sanofi",salt:"Fexofenadine 120 mg",price:246,rx:true,cat:"Prescription",tag:"Rx",image:"https://aajpharmacy.com/uploads/1611680894_0_0.0.jpg"},
  {id:25,name:"Azithral 500",brand:"Alembic",salt:"Azithromycin 500 mg",price:125,rx:true,cat:"Prescription",tag:"Rx",image:"https://www.practostatic.com/practopedia-images/v3/res-750/azithral-500mg-tablet-5-s_f6ba2cec-3738-4978-9a6c-751392ff2141.JPG"},
  {id:26,name:"Augmentin 625 Duo",brand:"GSK",salt:"Amoxicillin + Clavulanic Acid",price:195,rx:true,cat:"Prescription",tag:"Rx",image:"https://images.apollo247.in/pub/media/catalog/product/a/u/aug0004_2.jpg"},
  {id:27,name:"Meftal-Spas",brand:"Blue Cross",salt:"Mefenamic Acid + Dicyclomine",price:52,rx:true,cat:"Prescription",tag:"Rx",image:"https://cdn.dotpe.in/longtail/store-items/8518100/qQeKJvGK.webp"},
  {id:28,name:"Glycomet 500",brand:"USV",salt:"Metformin 500 mg",price:20,rx:true,cat:"Diabetes Care",tag:"Rx",image:"https://images.apollo247.in/pub/media/catalog/product/G/L/GLY0024_1.jpg?tr=q-85"},
  {id:29,name:"Telma 40",brand:"Glenmark",salt:"Telmisartan 40 mg",price:114,rx:true,cat:"Heart & BP Care",tag:"Rx",image:"https://ik.imagekit.io/wlfr/wellness/images/products/298416-1.jpg"},
  {id:30,name:"Ecosprin 75",brand:"USV",salt:"Aspirin gastro-resistant 75 mg",price:6,rx:true,cat:"Heart & BP Care",tag:"Rx",image:"https://images.apollo247.in/pub/media/catalog/product/E/C/ECO0005_1_1.jpg?tr=q-80"},
  {id:31,name:"Thyronorm 50 mcg",brand:"Abbott",salt:"Thyroxine Sodium 50 mcg",price:180,rx:true,cat:"Thyroid Care",tag:"Rx",image:"https://cdn.pixelbin.io/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/original/Gbmx7ZA-zv-thyronorm_50mcg_tablet_120s_129033_0_1.jpg"},
  {id:32,name:"Stamlo 5",brand:"Dr. Reddy's",salt:"Amlodipine 5 mg",price:110,rx:true,cat:"Heart & BP Care",tag:"Rx",image:"https://www.getomeds.com/ryno-includes/source/products/stamlo-5-tablet/stamlo-5-tablet-1.jpg"}
];

const doctors = [
  {name:"Dr. Rohan Sharma",specialty:"General Physician",degree:"MBBS, MD",exp:"9 years",rating:"4.8",fee:299,initials:"RS",photo:"https://images.pexels.com/photos/27298085/pexels-photo-27298085/free-photo-of-portrait-clinic-doctor-healthcare.jpeg?auto=compress&cs=tinysrgb&w=700"},
  {name:"Dr. Neha Verma",specialty:"Gynecologist",degree:"MBBS, MS",exp:"8 years",rating:"4.7",fee:399,initials:"NV",photo:"https://images.pexels.com/photos/32428850/pexels-photo-32428850/free-photo-of-professional-female-doctor-portrait-in-clinic.jpeg?auto=compress&cs=tinysrgb&w=700"},
  {name:"Dr. Amit Jain",specialty:"Dermatologist",degree:"MBBS, MD",exp:"6 years",rating:"4.6",fee:349,initials:"AJ",photo:"https://images.pexels.com/photos/27298085/pexels-photo-27298085/free-photo-of-portrait-clinic-doctor-healthcare.jpeg?auto=compress&cs=tinysrgb&w=700"},
  {name:"Dr. Priya Nair",specialty:"Pediatrician",degree:"MBBS, DCH",exp:"10 years",rating:"4.9",fee:399,initials:"PN",photo:"https://images.pexels.com/photos/5998477/pexels-photo-5998477.jpeg?auto=compress&cs=tinysrgb&w=700"},
  {name:"Dr. Arjun Mehta",specialty:"Orthopedic",degree:"MBBS, MS Ortho",exp:"12 years",rating:"4.8",fee:499,initials:"AM",photo:"https://images.pexels.com/photos/27298085/pexels-photo-27298085/free-photo-of-portrait-clinic-doctor-healthcare.jpeg?auto=compress&cs=tinysrgb&w=700"},
  {name:"Dr. Sana Khan",specialty:"Mental Wellness",degree:"MD Psychiatry",exp:"7 years",rating:"4.9",fee:549,initials:"SK",photo:"https://images.pexels.com/photos/32428850/pexels-photo-32428850/free-photo-of-professional-female-doctor-portrait-in-clinic.jpeg?auto=compress&cs=tinysrgb&w=700"}
];

const labs = [
  {name:"Full Body Basic",tests:"CBC, LFT, KFT, Lipid Profile, Blood Sugar",price:799,time:"Typical report window: 24 hrs"},
  {name:"Diabetes Care",tests:"HbA1c, FBS, PPBS",price:499,time:"Typical report window: 12 hrs"},
  {name:"Thyroid Profile",tests:"T3, T4, TSH",price:399,time:"Typical report window: 18 hrs"},
  {name:"Heart Health",tests:"Lipid Profile, hs-CRP + ECG booking request",price:999,time:"Typical report window: 24 hrs"},
  {name:"Vitamin Check",tests:"Vitamin D, Vitamin B12",price:899,time:"Typical report window: 24 hrs"},
  {name:"Women's Wellness",tests:"CBC, Thyroid, Iron profile",price:1099,time:"Typical report window: 24 hrs"}
];

const cityData = [
  {name:"Betul",stage:"Launch hub",note:"Core market for pharmacy-led local fulfilment and consultation onboarding."},
  {name:"Itarsi",stage:"Regional rollout",note:"City-level partner activation for medicines, diagnostics and consultations."},
  {name:"Harda",stage:"Regional rollout",note:"Local network model with same-day fulfilment where operationally available."},
  {name:"Narmadapuram",stage:"Regional rollout",note:"Local pharmacy and diagnostics partner coverage planned city-wise."},
  {name:"Bhopal",stage:"Scale market",note:"Larger urban market requiring broader provider and fulfilment coverage."},
  {name:"Nagpur",stage:"Scale market",note:"High-volume expansion market with stronger service-level requirements."},
  {name:"Indore",stage:"Scale market",note:"Major urban expansion market for medicine, consultation and diagnostics."}
];

const healthPrograms = [
  {code:"DB",title:"Diabetes Care",copy:"Coordinate routine medicine refills, periodic tests and doctor follow-ups.",items:["Refill reminders","HbA1c / glucose test booking","Doctor follow-up workflow","Family-accessible records"]},
  {code:"BP",title:"Heart & BP Care",copy:"Keep recurring BP and heart-care tasks organized in one place.",items:["Routine medicine reminders","BP-related follow-ups","Lipid profile booking","Care history"]},
  {code:"SC",title:"Senior Care",copy:"A family-friendly workflow for parents and older adults who need recurring support.",items:["Family profiles","Repeat-order support","Appointment tracking","Reports in one timeline"]},
  {code:"WC",title:"Women's Care",copy:"Access relevant consultations, diagnostics and wellness support.",items:["Gynecology consultations","Diagnostic booking","Report organization","Follow-up reminders"]},
  {code:"CC",title:"Child Care",copy:"Organize pediatric appointments and health records for children.",items:["Pediatric consultation","Prescription history","Diagnostic reports","Family account access"]},
  {code:"MW",title:"Mental Wellness",copy:"Private access to professional consultation workflows for mental wellness.",items:["Appointment booking","Video/chat options","Follow-up schedule","Private care history"]}
];

let cart = JSON.parse(localStorage.getItem("satiMedicsCart") || "[]");
let activeView = "home";
let deferredInstallPrompt = null;
const view = document.getElementById("view");
const citySelect = document.getElementById("citySelect");

function money(n){ return "₹" + Number(n).toFixed(0); }
function esc(value=""){ return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c])); }
function saveCart(){ localStorage.setItem("satiMedicsCart", JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){ document.getElementById("cartCount").textContent = cart.reduce((a,b)=>a+b.qty,0); }
function toast(message){
  const t=document.getElementById("toast");
  t.textContent=message;
  t.classList.add("show");
  clearTimeout(window.__satiToastTimer);
  window.__satiToastTimer=setTimeout(()=>t.classList.remove("show"),2200);
}
function setActiveNav(name){
  const map={labs:"home",prescription:"home",health:"home",cities:"home",about:"home",support:"home",privacy:"home",terms:"home",disclaimer:"home",cart:"medicines"};
  const target=map[name] || name;
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.nav===target));
}
function nav(name,data={}){
  activeView=name;
  setActiveNav(name);
  window.scrollTo({top:0,behavior:"smooth"});
  const routes={
    home:()=>renderHome(),
    medicines:()=>renderMedicines(data.query||""),
    consult:()=>renderConsult(data.specialty||""),
    labs:()=>renderLabs(),
    prescription:()=>renderPrescription(),
    cart:()=>renderCart(),
    orders:()=>renderOrders(),
    profile:()=>renderProfile(),
    health:()=>renderHealthPrograms(),
    cities:()=>renderCities(),
    about:()=>renderAbout(),
    support:()=>renderSupport(),
    privacy:()=>renderLegal("privacy"),
    terms:()=>renderLegal("terms"),
    disclaimer:()=>renderLegal("disclaimer")
  };
  (routes[name] || routes.home)();
}
function showModal(title,body){
  const wrap=document.getElementById("modalBackdrop");
  const card=document.getElementById("modalCard");
  card.innerHTML=`<div class="modal-head"><h2>${esc(title)}</h2><button class="modal-close" aria-label="Close">×</button></div><div>${body}</div>`;
  wrap.hidden=false;
  card.querySelector(".modal-close").onclick=()=>wrap.hidden=true;
}
function closeModal(){ document.getElementById("modalBackdrop").hidden=true; }

function getProfileDefaults(){
  try{return JSON.parse(localStorage.getItem("satiMedicsProfile")||"{}");}catch{return {};}
}
function phone10(value=""){
  let digits=String(value).replace(/\D/g,"");
  if(digits.length===12 && digits.startsWith("91")) digits=digits.slice(2);
  return digits;
}
function validMobile(value){ return /^[6-9]\d{9}$/.test(phone10(value)); }
function validPincode(value){ return /^[1-9]\d{5}$/.test(String(value).replace(/\D/g,"")); }
function validEmail(value){ return !value || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value); }
function validName(value){ return String(value).trim().length>=2 && String(value).trim().length<=70; }
function todayISO(){
  const d=new Date(); d.setMinutes(d.getMinutes()-d.getTimezoneOffset()); return d.toISOString().slice(0,10);
}
function minDateTimeLocal(minutes=30){
  const d=new Date(Date.now()+minutes*60000); d.setMinutes(d.getMinutes()-d.getTimezoneOffset()); return d.toISOString().slice(0,16);
}
function futureDateTime(value,minutes=20){
  const t=new Date(value).getTime(); return Number.isFinite(t) && t>=Date.now()+minutes*60000;
}
function clearFormErrors(form){
  if(!form) return;
  form.querySelectorAll(".input-error").forEach(el=>el.classList.remove("input-error"));
  form.querySelectorAll(".form-error").forEach(el=>el.remove());
  const alert=form.querySelector(".form-status"); if(alert){alert.textContent="";alert.className="form-status";}
}
function failField(id,message){
  const el=document.getElementById(id);
  if(!el){toast(message);return false;}
  el.classList.add("input-error");
  const field=el.closest(".field")||el.parentElement;
  const old=field.querySelector(".form-error"); if(old) old.remove();
  const err=document.createElement("div"); err.className="form-error"; err.textContent=message; field.appendChild(err);
  if(document.activeElement!==el) el.focus({preventScroll:true});
  el.scrollIntoView({behavior:"smooth",block:"center"});
  return false;
}
function formStatus(form,message,type="error"){
  const box=form.querySelector(".form-status");
  if(box){box.textContent=message;box.className="form-status "+type;}
  if(type==="error") toast(message);
}
function saveList(key,item){
  let list=[]; try{list=JSON.parse(localStorage.getItem(key)||"[]");if(!Array.isArray(list))list=[];}catch{}
  list.unshift(item); localStorage.setItem(key,JSON.stringify(list.slice(0,25))); return list;
}
function makeId(prefix){ return prefix+Date.now().toString().slice(-7); }
function setBusy(button,busy,label){
  if(!button) return;
  if(busy){button.dataset.label=button.textContent;button.disabled=true;button.textContent=label||"Saving…";}
  else{button.disabled=false;button.textContent=button.dataset.label||button.textContent;}
}
function formatWhen(value){
  try{return new Date(value).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"});}catch{return value;}
}
function hasPrescriptionAttachment(){
  try{return !!JSON.parse(localStorage.getItem("satiMedicsRxMeta")||"null");}catch{return false;}
}

function renderHome(){
  const tpl=document.getElementById("homeTemplate").content.cloneNode(true);
  view.innerHTML="";
  view.appendChild(tpl);

  const year=document.getElementById("footerYear");
  if(year) year.textContent=new Date().getFullYear();

  const search=document.getElementById("globalSearch");
  const runSearch=()=>{
    const q=search.value.trim();
    if(!q) return toast("Type a medicine, doctor, specialty or test");
    const low=q.toLowerCase();
    if(/doctor|physician|gyne|skin|derma|ortho|child|pediatric|mental|consult/.test(low)) nav("consult");
    else if(/test|lab|cbc|thyroid|sugar|hba1c|lipid/.test(low)) nav("labs");
    else nav("medicines",{query:q});
  };
  document.getElementById("globalSearchBtn").onclick=runSearch;
  search.addEventListener("keydown",e=>{if(e.key==="Enter")runSearch();});

  document.querySelectorAll("[data-specialty]").forEach(b=>b.onclick=()=>nav("consult",{specialty:b.dataset.specialty}));
  document.querySelectorAll("[data-city]").forEach(b=>b.onclick=()=>{
    citySelect.value=b.dataset.city;
    localStorage.setItem("satiMedicsCity",b.dataset.city);
    toast("Service city set to " + b.dataset.city);
  });
  const homeInstall=document.getElementById("homeInstallBtn");
  if(homeInstall) homeInstall.onclick=installApp;
}

function renderMedicines(query=""){
  view.innerHTML=`<section class="page">
    <div class="page-header"><div><span class="eyebrow">MEDICINE DELIVERY</span><h1>Medicines & healthcare essentials</h1><p>Browse a broad catalogue of commonly purchased Indian pharmacy brands and essentials. Prescription products stay behind Rx review.</p></div><button class="secondary-btn" data-nav="prescription">Upload prescription</button></div>
    <div class="catalog-note"><strong>Real product catalogue preview</strong><span>Product photos match the listed brand/medicine. Price and city stock remain indicative until live pharmacy inventory is connected.</span></div>
    <div class="toolbar"><input id="medSearch" placeholder="Search medicine, brand, salt or category..." value="${esc(query)}"><select id="catFilter"><option>All categories</option>${[...new Set(medicines.map(m=>m.cat))].map(c=>`<option>${esc(c)}</option>`).join("")}</select></div>
    <div class="product-grid" id="productGrid"></div>
  </section>`;

  const draw=()=>{
    const q=document.getElementById("medSearch").value.toLowerCase();
    const cat=document.getElementById("catFilter").value;
    const list=medicines.filter(m=>(m.name+" "+m.brand+" "+m.salt+" "+m.cat).toLowerCase().includes(q)&&(cat==="All categories"||m.cat===cat));
    document.getElementById("productGrid").innerHTML=list.map(m=>`<article class="card medicine-card">
      <div class="medicine-image-wrap">
        <img class="medicine-image" src="${esc(m.image)}" alt="${esc(m.name)} product pack" loading="lazy" onerror="this.closest('.medicine-image-wrap').classList.add('image-fallback');this.remove()">
        <span class="medicine-tag ${m.rx?"rx-tag":""}">${m.rx?"Rx required":esc(m.tag||"Popular")}</span>
      </div>
      <div class="medicine-copy">
        <small class="medicine-brand">${esc(m.brand)}</small>
        <h3>${esc(m.name)}</h3>
        <small>${esc(m.salt)}</small>
      </div>
      <div class="medicine-meta"><span>Available by city stock</span><span>${m.rx?"Prescription review":"Common retail item"}</span></div>
      <div class="price-row"><div><span class="price">${money(m.price)}</span><small class="indicative">indicative</small></div><button class="pill-btn" data-add="${m.id}">Add +</button></div>
    </article>`).join("") || '<div class="empty"><h2>No matching product</h2><p>Try another medicine, brand, salt or category.</p></div>';
    document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>addToCart(+b.dataset.add));
  };
  draw();
  document.getElementById("medSearch").oninput=draw;
  document.getElementById("catFilter").onchange=draw;
}
function addToCart(id){
  const m=medicines.find(x=>x.id===id);
  const row=cart.find(x=>x.id===id);
  if(row) row.qty++; else cart.push({...m,qty:1});
  saveCart();
  toast(m.name+" added to cart");
}

function renderConsult(specialty=""){
  view.innerHTML=`<section class="page">
    <div class="page-header"><div><span class="eyebrow">DOCTOR CONSULTATION</span><h1>Consult by specialty</h1><p>Choose a specialty and consultation mode. Provider profiles below are sample UI data until verified doctors are formally onboarded.</p></div></div>
    <div class="info-callout"><b>Not for emergencies:</b> Sati Medics is designed for routine and non-emergency care. For urgent or life-threatening situations in India, call 112 or seek immediate local emergency care.</div>
    <div class="toolbar"><select id="docFilter"><option>All specialties</option>${[...new Set(doctors.map(d=>d.specialty))].map(s=>`<option ${s===specialty?"selected":""}>${esc(s)}</option>`).join("")}</select></div>
    <div class="doctor-grid" id="doctorGrid"></div>
  </section>`;
  const draw=()=>{
    const f=document.getElementById("docFilter").value;
    const list=doctors.filter(d=>f==="All specialties"||d.specialty===f);
    document.getElementById("doctorGrid").innerHTML=list.map(d=>`<article class="card">
      <span class="badge">Sample provider profile</span>
      <div class="doctor-head" style="margin-top:12px"><div class="doctor-avatar"><img src="${esc(d.photo)}" alt="${esc(d.name)}" loading="lazy"></div><div><h3>${esc(d.name)}</h3><small>${esc(d.specialty)}</small></div></div>
      <p>${esc(d.degree)} • ${esc(d.exp)}</p>
      <div class="rating">★ ${esc(d.rating)} sample rating display</div>
      <div class="price-row"><span class="price">${money(d.fee)}</span><button class="pill-btn" data-book="${doctors.indexOf(d)}">Consult now</button></div>
    </article>`).join("");
    document.querySelectorAll("[data-book]").forEach(b=>b.onclick=()=>renderBooking(doctors[+b.dataset.book]));
  };
  draw();
  document.getElementById("docFilter").onchange=draw;
}
function renderBooking(doc){
  const profile=getProfileDefaults();
  const minSlot=minDateTimeLocal(30);
  view.innerHTML=`<section class="page">
    <button class="outline-btn" onclick="nav('consult')">← Back to doctors</button>
    <div class="consult-panel" style="margin-top:16px">
      <div class="consult-form">
        <span class="eyebrow">BOOK CONSULTATION</span>
        <h2 style="margin:8px 0 5px">${esc(doc.name)}</h2>
        <p style="margin:0 0 18px;color:var(--muted);font-size:10px">${esc(doc.specialty)} • Provider profile shown for product preview</p>
        <form class="smart-form" id="consultForm" novalidate>
          <div class="form-status" aria-live="polite"></div>
          <div class="field-grid two">
            <div class="field"><label for="patientName">Patient full name <span>*</span></label><input id="patientName" autocomplete="name" maxlength="70" value="${esc(profile.name||"")}" placeholder="e.g. Nikhil Baraskar"></div>
            <div class="field"><label for="consultMobile">Mobile number <span>*</span></label><input id="consultMobile" inputmode="tel" autocomplete="tel" maxlength="14" value="${esc(profile.mobile||"")}" placeholder="10-digit mobile number"></div>
            <div class="field"><label for="patientAge">Age <span>*</span></label><input id="patientAge" type="number" min="1" max="120" inputmode="numeric" placeholder="Age in years"></div>
            <div class="field"><label for="patientGender">Gender</label><select id="patientGender"><option value="">Prefer not to say</option><option>Male</option><option>Female</option><option>Other</option></select></div>
            <div class="field"><label for="mode">Consultation mode <span>*</span></label><select id="mode"><option>Video consultation</option><option>Audio consultation</option><option>Chat consultation</option></select></div>
            <div class="field"><label for="slot">Preferred slot <span>*</span></label><input id="slot" type="datetime-local" min="${minSlot}"><small>Choose a time at least 30 minutes from now.</small></div>
          </div>
          <div class="field"><label for="symptoms">Health concern <span>*</span></label><textarea id="symptoms" rows="5" maxlength="700" placeholder="Describe symptoms, duration and any relevant context. Do not use this form for emergencies."></textarea><small>Minimum 10 characters. Avoid sharing unrelated sensitive information.</small></div>
          <label class="consent-row"><input id="consultConsent" type="checkbox"><span>I understand Sati Medics is not an emergency service and that a live consultation requires a verified provider.</span></label>
          <div class="form-actions"><button class="primary-btn" id="confirmConsult" type="submit">Book consultation • ${money(doc.fee)}</button><small>No payment is collected in this preview.</small></div>
        </form>
      </div>
      <div class="video-mock"><div class="video-screen"><div><div class="avatar"><img src="${esc(doc.photo)}" alt="${esc(doc.name)}"></div><h2 style="color:white">${esc(doc.name)}</h2><p>Secure consultation-room preview</p><p style="opacity:.72">Production video/audio service requires compliant real-time communications, identity and consent controls.</p></div></div></div>
    </div>
  </section>`;

  const form=document.getElementById("consultForm");
  form.addEventListener("submit",e=>{
    e.preventDefault(); clearFormErrors(form);
    const name=document.getElementById("patientName").value.trim();
    const mobile=document.getElementById("consultMobile").value.trim();
    const age=Number(document.getElementById("patientAge").value);
    const slot=document.getElementById("slot").value;
    const symptoms=document.getElementById("symptoms").value.trim();
    if(!validName(name)) return failField("patientName","Enter the patient's full name.");
    if(!validMobile(mobile)) return failField("consultMobile","Enter a valid 10-digit Indian mobile number.");
    if(!Number.isInteger(age)||age<1||age>120) return failField("patientAge","Enter a valid age between 1 and 120.");
    if(!slot||!futureDateTime(slot,25)) return failField("slot","Choose a future slot at least 30 minutes from now.");
    if(symptoms.length<10) return failField("symptoms","Please describe the health concern in at least 10 characters.");
    if(!document.getElementById("consultConsent").checked){formStatus(form,"Please accept the consultation acknowledgement.");return;}
    const btn=document.getElementById("confirmConsult"); setBusy(btn,true,"Booking…");
    const booking={id:makeId("SC"),doctor:doc.name,specialty:doc.specialty,slot,mode:document.getElementById("mode").value,patient:name,mobile:phone10(mobile),age,gender:document.getElementById("patientGender").value,symptoms,fee:doc.fee,status:"Requested",createdAt:new Date().toISOString()};
    localStorage.setItem("satiMedicsConsult",JSON.stringify(booking));
    saveList("satiMedicsConsultations",booking);
    setTimeout(()=>{setBusy(btn,false);toast("Consultation request saved");nav("orders");},450);
  });
}
function renderLabs(){
  view.innerHTML=`<section class="page">
    <div class="page-header"><div><span class="eyebrow">DIAGNOSTICS</span><h1>Lab tests at home</h1><p>Browse sample diagnostic packages and create a home-collection booking request for ${esc(citySelect.value)}.</p></div></div>
    <div class="info-callout"><b>Preview data:</b> Test prices, report windows and availability are placeholders until a certified diagnostic partner and live catalogue are integrated.</div>
    <div class="lab-grid">${labs.map((l,i)=>`<article class="card"><div class="product-image">LAB</div><h3>${esc(l.name)}</h3><p>${esc(l.tests)}</p><small>${esc(l.time)}</small><div class="price-row"><span class="price">${money(l.price)}</span><button class="pill-btn" data-lab="${i}">Book test</button></div></article>`).join("")}</div>
  </section>`;
  document.querySelectorAll("[data-lab]").forEach(b=>b.onclick=()=>renderLabBooking(labs[+b.dataset.lab]));
}
function renderLabBooking(lab){
  const profile=getProfileDefaults();
  view.innerHTML=`<section class="page"><button class="outline-btn" onclick="nav('labs')">← Back to tests</button>
    <div class="section-block form-card" style="max-width:780px;margin-top:16px">
      <span class="eyebrow">HOME COLLECTION REQUEST</span><h2 style="margin:8px 0 5px">${esc(lab.name)}</h2><p style="font-size:10px;color:var(--muted)">${esc(lab.tests)}</p>
      <form class="smart-form" id="labForm" novalidate>
        <div class="form-status" aria-live="polite"></div>
        <div class="field-grid two">
          <div class="field"><label for="labPatient">Patient full name <span>*</span></label><input id="labPatient" autocomplete="name" maxlength="70" value="${esc(profile.name||"")}" placeholder="Patient name"></div>
          <div class="field"><label for="labPhone">Mobile number <span>*</span></label><input id="labPhone" inputmode="tel" autocomplete="tel" maxlength="14" value="${esc(profile.mobile||"")}" placeholder="10-digit mobile number"></div>
          <div class="field"><label for="labDate">Collection date <span>*</span></label><input id="labDate" type="date" min="${todayISO()}"></div>
          <div class="field"><label for="labSlot">Preferred time <span>*</span></label><select id="labSlot"><option value="">Select a slot</option><option>06:00 AM – 08:00 AM</option><option>08:00 AM – 10:00 AM</option><option>10:00 AM – 12:00 PM</option><option>04:00 PM – 06:00 PM</option></select></div>
          <div class="field"><label for="labPincode">Pincode <span>*</span></label><input id="labPincode" inputmode="numeric" maxlength="6" placeholder="6-digit pincode"></div>
          <div class="field"><label>Service city</label><input value="${esc(citySelect.value)}" disabled></div>
        </div>
        <div class="field"><label for="labAddress">Collection address <span>*</span></label><textarea id="labAddress" rows="3" maxlength="280" placeholder="House/flat, street, area and nearby landmark"></textarea></div>
        <label class="consent-row"><input id="labConsent" type="checkbox"><span>I understand the collection request is subject to diagnostic-partner availability and final confirmation.</span></label>
        <div class="form-actions"><button class="primary-btn" id="confirmLab" type="submit">Request collection • ${money(lab.price)}</button><small>Price and report timing are indicative until a live lab partner is connected.</small></div>
      </form>
    </div></section>`;
  const form=document.getElementById("labForm");
  form.addEventListener("submit",e=>{
    e.preventDefault(); clearFormErrors(form);
    const patient=document.getElementById("labPatient").value.trim();
    const phone=document.getElementById("labPhone").value.trim();
    const date=document.getElementById("labDate").value;
    const slot=document.getElementById("labSlot").value;
    const pin=document.getElementById("labPincode").value.trim();
    const address=document.getElementById("labAddress").value.trim();
    if(!validName(patient)) return failField("labPatient","Enter the patient's full name.");
    if(!validMobile(phone)) return failField("labPhone","Enter a valid 10-digit Indian mobile number.");
    if(!date||date<todayISO()) return failField("labDate","Choose today or a future collection date.");
    if(!slot) return failField("labSlot","Select a preferred collection time.");
    if(date===todayISO()){
      const endHour={"06:00 AM – 08:00 AM":8,"08:00 AM – 10:00 AM":10,"10:00 AM – 12:00 PM":12,"04:00 PM – 06:00 PM":18}[slot];
      if(endHour!==undefined && new Date().getHours()>=endHour) return failField("labSlot","That collection window has already passed today. Choose a later slot or another date.");
    }
    if(!validPincode(pin)) return failField("labPincode","Enter a valid 6-digit pincode.");
    if(address.length<10) return failField("labAddress","Enter a complete collection address.");
    if(!document.getElementById("labConsent").checked){formStatus(form,"Please accept the collection acknowledgement.");return;}
    const btn=document.getElementById("confirmLab"); setBusy(btn,true,"Saving request…");
    const booking={id:makeId("SL"),...lab,patient,mobile:phone10(phone),date,slot,pincode:pin,address,city:citySelect.value,status:"Requested",createdAt:new Date().toISOString()};
    localStorage.setItem("satiMedicsLab",JSON.stringify(booking)); saveList("satiMedicsLabs",booking);
    setTimeout(()=>{setBusy(btn,false);toast("Lab collection request saved");nav("orders");},450);
  });
}
function renderPrescription(){
  const profile=getProfileDefaults();
  const existing=(()=>{try{return JSON.parse(localStorage.getItem("satiMedicsRxMeta")||"null");}catch{return null;}})();
  view.innerHTML=`<section class="page">
    <div class="page-header"><div><span class="eyebrow">PRESCRIPTION ORDER</span><h1>Upload a prescription</h1><p>Attach a clear prescription for review before fulfilment of medicines that require one.</p></div></div>
    <div class="section-block form-card" style="max-width:780px">
      ${existing?`<div class="form-status success">Prescription attached for ${esc(existing.patient||"patient")} • ${esc(existing.name||"file")}</div>`:""}
      <div class="info-callout" style="margin-top:0"><b>Privacy notice:</b> This GitHub Pages prototype does not upload the file to a healthcare backend. Only filename/type metadata is stored locally for the demo flow.</div>
      <form class="smart-form" id="rxForm" novalidate>
        <div class="form-status" aria-live="polite"></div>
        <div class="field"><label for="rxFile">Prescription image or PDF <span>*</span></label><input id="rxFile" type="file" accept=".pdf,image/jpeg,image/png,image/webp"><small>PDF/JPG/PNG/WEBP, up to 8 MB. Upload a readable, uncropped prescription.</small></div>
        <div class="field-grid two">
          <div class="field"><label for="rxPatient">Patient full name <span>*</span></label><input id="rxPatient" autocomplete="name" maxlength="70" value="${esc(profile.name||"")}" placeholder="Patient name"></div>
          <div class="field"><label for="rxMobile">Mobile number <span>*</span></label><input id="rxMobile" inputmode="tel" autocomplete="tel" maxlength="14" value="${esc(profile.mobile||"")}" placeholder="10-digit mobile number"></div>
          <div class="field"><label for="rxDoctor">Prescribing doctor</label><input id="rxDoctor" maxlength="80" placeholder="Doctor name (optional)"></div>
          <div class="field"><label for="rxDate">Prescription date</label><input id="rxDate" type="date" max="${todayISO()}"></div>
        </div>
        <div class="field"><label for="rxNote">Note for pharmacist</label><textarea id="rxNote" rows="4" maxlength="500" placeholder="Optional note about requested medicines or availability"></textarea></div>
        <label class="consent-row"><input id="rxConsent" type="checkbox"><span>I understand prescription-only medicines require pharmacist review and may be changed, declined or held if the prescription is unclear, invalid or unavailable.</span></label>
        <div class="form-actions"><button class="primary-btn" id="submitRx" type="submit">Attach for pharmacist review</button><button class="outline-btn" type="button" data-nav="cart">Back to cart</button></div>
      </form>
    </div>
  </section>`;
  const form=document.getElementById("rxForm");
  form.addEventListener("submit",e=>{
    e.preventDefault(); clearFormErrors(form);
    const file=document.getElementById("rxFile").files[0];
    const patient=document.getElementById("rxPatient").value.trim();
    const mobile=document.getElementById("rxMobile").value.trim();
    if(!file) return failField("rxFile","Choose a prescription image or PDF.");
    const allowed=["application/pdf","image/jpeg","image/png","image/webp"];
    if(file.type && !allowed.includes(file.type)) return failField("rxFile","Use PDF, JPG, PNG or WEBP format.");
    if(file.size>8*1024*1024) return failField("rxFile","Prescription file must be 8 MB or smaller.");
    if(!validName(patient)) return failField("rxPatient","Enter the patient's full name.");
    if(!validMobile(mobile)) return failField("rxMobile","Enter a valid 10-digit Indian mobile number.");
    if(!document.getElementById("rxConsent").checked){formStatus(form,"Please accept the prescription acknowledgement.");return;}
    const btn=document.getElementById("submitRx"); setBusy(btn,true,"Attaching…");
    const meta={id:makeId("RX"),name:file.name,type:file.type||"unknown",size:file.size,patient,mobile:phone10(mobile),doctor:document.getElementById("rxDoctor").value.trim(),prescriptionDate:document.getElementById("rxDate").value,note:document.getElementById("rxNote").value.trim(),date:new Date().toISOString(),status:"Pending pharmacist review"};
    localStorage.setItem("satiMedicsRxMeta",JSON.stringify(meta)); saveList("satiMedicsPrescriptions",meta);
    setTimeout(()=>{setBusy(btn,false);formStatus(form,"Prescription attached. Return to cart to continue.","success");toast("Prescription attached for review");},400);
  });
}
function renderCart(){
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">YOUR CART</span><h1>Medicine cart</h1><p>Review items before entering delivery details.</p></div></div><div id="cartBody"></div></section>`;
  drawCart();
}
function drawCart(){
  const body=document.getElementById("cartBody");
  if(!cart.length){
    body.innerHTML='<div class="empty"><div class="product-image" style="width:90px;height:90px;margin:0 auto 15px">CART</div><h2>Your cart is empty</h2><p>Add medicines or health products to continue.</p><button class="primary-btn" onclick="nav(\'medicines\')">Browse medicines</button></div>';
    return;
  }
  const total=cart.reduce((a,b)=>a+b.price*b.qty,0);
  const rxCount=cart.filter(x=>x.rx).reduce((a,b)=>a+b.qty,0);
  body.innerHTML=`<div class="cart-list">${cart.map((m,i)=>`<div class="cart-item"><div><span class="badge ${m.rx?"warn":""}">${m.rx?"Rx review":"Standard item"}</span><strong style="display:block;margin-top:6px">${esc(m.name)}</strong><small style="display:block;color:var(--muted)">${esc(m.salt)}</small></div><div style="display:flex;align-items:center;gap:9px"><button class="outline-btn" data-minus="${i}">−</button><strong>${m.qty}</strong><button class="outline-btn" data-plus="${i}">+</button><strong style="min-width:60px">${money(m.price*m.qty)}</strong></div></div>`).join("")}</div>
    ${rxCount?`<div class="info-callout"><b>${rxCount} prescription item(s)</b> in this cart will require prescription validation before live fulfilment.</div>`:""}
    <div class="section-block"><div class="price-row"><div><small>Sample subtotal</small><h2>${money(total)}</h2><small style="color:var(--muted)">Final price and delivery fee depend on live pharmacy data.</small></div><button class="primary-btn" id="checkoutBtn">Proceed to delivery</button></div></div>`;
  document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>{const i=+b.dataset.minus;cart[i].qty--;if(cart[i].qty<=0)cart.splice(i,1);saveCart();drawCart();});
  document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>{cart[+b.dataset.plus].qty++;saveCart();drawCart();});
  document.getElementById("checkoutBtn").onclick=renderCheckout;
}
function renderCheckout(){
  const profile=getProfileDefaults();
  const rxItems=cart.filter(item=>item.rx);
  const total=cart.reduce((a,b)=>a+b.price*b.qty,0);
  const rxAttached=hasPrescriptionAttachment();
  if(!cart.length){nav("cart");return;}
  view.innerHTML=`<section class="page"><button class="outline-btn" onclick="nav('cart')">← Back to cart</button>
    <div class="checkout-layout" style="margin-top:16px">
      <div class="section-block form-card" style="margin:0">
        <span class="eyebrow">DELIVERY DETAILS</span><h2 style="margin:8px 0 5px">Deliver in ${esc(citySelect.value)}</h2><p style="font-size:10px;color:var(--muted)">Enter complete contact and address details so the order can be reviewed correctly.</p>
        ${rxItems.length&&!rxAttached?`<div class="form-status error">This cart contains ${rxItems.length} prescription medicine(s). Attach a prescription before placing the order. <button type="button" class="text-btn" data-nav="prescription">Upload prescription →</button></div>`:""}
        ${rxItems.length&&rxAttached?`<div class="form-status success">Prescription attachment found. Rx items will remain subject to pharmacist review.</div>`:""}
        <form class="smart-form" id="checkoutForm" novalidate>
          <div class="form-status" aria-live="polite"></div>
          <div class="field-grid two">
            <div class="field"><label for="custName">Full name <span>*</span></label><input id="custName" autocomplete="name" maxlength="70" value="${esc(profile.name||"")}" placeholder="Recipient name"></div>
            <div class="field"><label for="phone">Mobile number <span>*</span></label><input id="phone" inputmode="tel" autocomplete="tel" maxlength="14" value="${esc(profile.mobile||"")}" placeholder="10-digit mobile number"></div>
            <div class="field"><label for="email">Email</label><input id="email" type="email" autocomplete="email" value="${esc(profile.email||"")}" placeholder="For invoice/updates (optional)"></div>
            <div class="field"><label for="pincode">Pincode <span>*</span></label><input id="pincode" inputmode="numeric" autocomplete="postal-code" maxlength="6" placeholder="6-digit pincode"></div>
            <div class="field"><label for="house">House / flat / building <span>*</span></label><input id="house" autocomplete="address-line1" maxlength="100" placeholder="House no., flat or building"></div>
            <div class="field"><label for="area">Street / area <span>*</span></label><input id="area" autocomplete="address-line2" maxlength="120" placeholder="Street, colony or area"></div>
            <div class="field"><label for="landmark">Landmark</label><input id="landmark" maxlength="100" placeholder="Nearby landmark (optional)"></div>
            <div class="field"><label>City</label><input value="${esc(citySelect.value)}" disabled></div>
          </div>
          <div class="field-grid two">
            <div class="field"><label for="addressType">Address type</label><select id="addressType"><option>Home</option><option>Work</option><option>Other</option></select></div>
            <div class="field"><label for="pay">Payment preference <span>*</span></label><select id="pay"><option value="cod">Cash on delivery</option><option value="upi">UPI on delivery</option><option value="online" disabled>Online payment — available after gateway integration</option></select></div>
          </div>
          <div class="field"><label for="deliveryNote">Delivery instructions</label><textarea id="deliveryNote" rows="3" maxlength="250" placeholder="Gate, floor, call-before-delivery, etc. (optional)"></textarea></div>
          <label class="consent-row"><input id="orderConsent" type="checkbox"><span>I agree that final stock, price, prescription approval and delivery estimate are confirmed only after live pharmacy review.</span></label>
          <div class="form-actions"><button class="primary-btn" id="placeOrder" type="submit" ${rxItems.length&&!rxAttached?"disabled":""}>Place order request</button><small>No real payment is collected in this preview.</small></div>
        </form>
      </div>
      <aside class="checkout-summary">
        <span class="eyebrow">ORDER SUMMARY</span><h3>${cart.reduce((a,b)=>a+b.qty,0)} item(s)</h3>
        <div class="summary-items">${cart.map(item=>`<div class="summary-item"><div><b>${esc(item.name)}</b><small>${item.qty} × ${money(item.price)}</small></div><strong>${money(item.price*item.qty)}</strong></div>`).join("")}</div>
        <div class="summary-total"><span>Indicative subtotal</span><strong>${money(total)}</strong></div>
        <small>Final bill can change after live stock, tax, substitution, discount and delivery validation.</small>
      </aside>
    </div></section>`;
  const form=document.getElementById("checkoutForm");
  form.addEventListener("submit",e=>{
    e.preventDefault(); clearFormErrors(form);
    if(rxItems.length&&!hasPrescriptionAttachment()){formStatus(form,"Attach a prescription before placing an Rx order.");return;}
    const name=document.getElementById("custName").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const email=document.getElementById("email").value.trim();
    const pin=document.getElementById("pincode").value.trim();
    const house=document.getElementById("house").value.trim();
    const area=document.getElementById("area").value.trim();
    if(!validName(name)) return failField("custName","Enter the recipient's full name.");
    if(!validMobile(phone)) return failField("phone","Enter a valid 10-digit Indian mobile number.");
    if(!validEmail(email)) return failField("email","Enter a valid email address or leave it blank.");
    if(!validPincode(pin)) return failField("pincode","Enter a valid 6-digit pincode.");
    if(house.length<2) return failField("house","Enter house, flat or building details.");
    if(area.length<3) return failField("area","Enter street, colony or area.");
    if(!document.getElementById("orderConsent").checked){formStatus(form,"Please accept the order acknowledgement.");return;}
    const btn=document.getElementById("placeOrder"); setBusy(btn,true,"Placing order…");
    const hasRx=rxItems.length>0;
    const order={id:makeId("SM"),time:new Date().toISOString(),items:cart.map(x=>({...x})),status:0,statusText:hasRx?"Awaiting pharmacist review":"Order requested",city:citySelect.value,total,customer:{name,mobile:phone10(phone),email},delivery:{pincode:pin,house,area,landmark:document.getElementById("landmark").value.trim(),type:document.getElementById("addressType").value,note:document.getElementById("deliveryNote").value.trim()},payment:document.getElementById("pay").value,rxRequired:hasRx,rxAttached:hasRx?hasPrescriptionAttachment():false};
    localStorage.setItem("satiMedicsOrder",JSON.stringify(order)); saveList("satiMedicsOrders",order);
    cart=[]; saveCart();
    setTimeout(()=>{setBusy(btn,false);toast("Order request placed");nav("orders");},500);
  });
}
function renderOrders(){
  const order=(()=>{try{return JSON.parse(localStorage.getItem("satiMedicsOrder")||"null");}catch{return null;}})();
  const consult=(()=>{try{return JSON.parse(localStorage.getItem("satiMedicsConsult")||"null");}catch{return null;}})();
  const lab=(()=>{try{return JSON.parse(localStorage.getItem("satiMedicsLab")||"null");}catch{return null;}})();
  const orderTitle=order?(order.statusText||"Order requested"):"";
  const steps=order?.rxRequired?["Order request received","Prescription / pharmacist review","Packed at pharmacy","Out for delivery","Delivered"]:["Order request received","Pharmacy confirmation","Packed at pharmacy","Out for delivery","Delivered"];
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">ACTIVITY</span><h1>Orders & appointments</h1><p>Your latest preview activity stored on this device.</p></div></div>
  ${order?`<div class="section-block"><div class="section-title"><div><span class="badge">Order #${esc(order.id)}</span><h2>${esc(orderTitle)}</h2><p>${esc(order.city)} • ${formatWhen(order.time)}</p></div><span class="product-image" style="width:70px;height:70px">RX</span></div><div class="timeline">${steps.map((label,i)=>`<div class="timeline-step ${i<=Number(order.status||0)?"done":""}"><div class="timeline-dot">${i<=Number(order.status||0)?"✓":i+1}</div><div><strong>${label}</strong><small style="display:block;color:var(--muted);margin-top:4px">${i<=Number(order.status||0)?"Recorded":"Pending confirmation"}</small></div></div>`).join("")}</div><div class="summary-total" style="margin-top:10px"><span>Indicative order value</span><strong>${money(order.total||0)}</strong></div></div>`:'<div class="empty"><h2>No medicine orders yet</h2><p>Place a medicine order request to see the tracking flow.</p><button class="primary-btn" onclick="nav(\'medicines\')">Order medicines</button></div>'}
  ${consult?`<div class="section-block"><span class="badge">Consultation ${esc(consult.id||"")}</span><h2 style="margin-top:10px">${esc(consult.doctor)}</h2><p style="font-size:10px;color:var(--muted)">${esc(consult.patient||"Patient")} • ${esc(consult.specialty)} • ${formatWhen(consult.slot)} • ${esc(consult.mode||"Online")} • ${esc(consult.status||"Requested")}</p></div>`:""}
  ${lab?`<div class="section-block"><span class="badge">Lab ${esc(lab.id||"")}</span><h2 style="margin-top:10px">${esc(lab.name)}</h2><p style="font-size:10px;color:var(--muted)">${esc(lab.patient||"Patient")} • ${esc(lab.date)} • ${esc(lab.slot||"")} • ${esc(lab.city||citySelect.value)} • ${esc(lab.status||"Requested")}</p></div>`:""}
  </section>`;
}
function renderProfile(){
  const profile=getProfileDefaults();
  let reminders=[]; try{reminders=JSON.parse(localStorage.getItem("satiMedicsReminders")||"[]");if(!Array.isArray(reminders))reminders=[];}catch{}
  const nextReminder=reminders[0];
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">ACCOUNT</span><h1>My health profile</h1><p>Profile data in this prototype is stored only in this browser. Do not use this static preview as a real medical-record vault.</p></div></div>
    <div class="profile-grid">
      <div class="profile-card">
        <div class="profile-hero"><div class="profile-avatar">${profile.name?esc(profile.name.slice(0,2).toUpperCase()):"SM"}</div><div><h2>${profile.name?esc(profile.name):"Create your profile"}</h2><p style="color:var(--muted);font-size:10px">Use basic details to prefill booking and delivery forms.</p></div></div>
        <form class="smart-form" id="profileForm" novalidate style="margin-top:20px">
          <div class="form-status" aria-live="polite"></div>
          <div class="field-grid two">
            <div class="field"><label for="profileName">Full name <span>*</span></label><input id="profileName" autocomplete="name" maxlength="70" placeholder="Full name" value="${esc(profile.name||"")}"></div>
            <div class="field"><label for="profileMobile">Mobile number <span>*</span></label><input id="profileMobile" inputmode="tel" autocomplete="tel" maxlength="14" placeholder="10-digit mobile number" value="${esc(profile.mobile||"")}"></div>
            <div class="field"><label for="profileEmail">Email</label><input id="profileEmail" type="email" autocomplete="email" placeholder="Email (optional)" value="${esc(profile.email||"")}"></div>
            <div class="field"><label for="profileLang">Preferred language</label><select id="profileLang"><option ${profile.lang==="English"?"selected":""}>English</option><option ${profile.lang==="हिन्दी"?"selected":""}>हिन्दी</option></select></div>
          </div>
          <div class="form-actions"><button class="primary-btn" id="saveProfile" type="submit">Save profile</button></div>
        </form>
        <div class="program-grid" style="margin-top:20px"><article><span class="program-icon">FM</span><div><strong>Family profiles</strong><small>Structure care for parents and children</small></div></article><article><span class="program-icon">HR</span><div><strong>Health records</strong><small>Prescription and report workflow</small></div></article><article><span class="program-icon">RR</span><div><strong>Refill reminders</strong><small>${nextReminder?esc(nextReminder.medicine)+" • "+esc(nextReminder.date)+" "+esc(nextReminder.time):"Set your first reminder"}</small></div></article></div>
      </div>
      <div class="settings-card"><h2>Quick actions</h2><div class="settings-list"><button id="setReminder">Set medicine reminder</button><button data-nav="orders">Orders & appointments</button><button data-nav="prescription">Prescription upload</button><button data-nav="privacy">Privacy & security</button><button data-nav="support">Help & support</button></div></div>
    </div>
  </section>`;
  const form=document.getElementById("profileForm");
  form.addEventListener("submit",e=>{
    e.preventDefault();clearFormErrors(form);
    const name=document.getElementById("profileName").value.trim(),mobile=document.getElementById("profileMobile").value.trim(),email=document.getElementById("profileEmail").value.trim(),lang=document.getElementById("profileLang").value;
    if(!validName(name)) return failField("profileName","Enter your full name.");
    if(!validMobile(mobile)) return failField("profileMobile","Enter a valid 10-digit Indian mobile number.");
    if(!validEmail(email)) return failField("profileEmail","Enter a valid email address or leave it blank.");
    localStorage.setItem("satiMedicsProfile",JSON.stringify({name,mobile:phone10(mobile),email,lang}));
    formStatus(form,"Profile saved on this device.","success");toast("Profile saved");
  });
  document.getElementById("setReminder").onclick=()=>showModal("Medicine reminder",`<form class="smart-form" id="reminderForm" novalidate><div class="form-status" aria-live="polite"></div><div class="field"><label for="remMed">Medicine name <span>*</span></label><input id="remMed" maxlength="80" placeholder="Medicine name"></div><div class="field-grid two"><div class="field"><label for="remDate">Start date <span>*</span></label><input id="remDate" type="date" min="${todayISO()}"></div><div class="field"><label for="remTime">Reminder time <span>*</span></label><input id="remTime" type="time"></div></div><div class="field"><label for="remFrequency">Frequency</label><select id="remFrequency"><option>Once daily</option><option>Twice daily</option><option>Three times daily</option><option>Weekly</option><option>Custom / as advised</option></select></div><button class="primary-btn" id="saveReminder" type="submit">Save reminder</button></form>`);
}
function renderHealthPrograms(){
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">HEALTH PROGRAMS</span><h1>Care that continues</h1><p>Sati Medics can bring medicine refills, diagnostics, consultations and reminders into disease- and life-stage-focused programs.</p></div></div><div class="health-programs-grid">${healthPrograms.map(p=>`<article class="health-program-card"><span class="program-icon">${esc(p.code)}</span><h3>${esc(p.title)}</h3><p>${esc(p.copy)}</p><ul>${p.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul><button class="secondary-btn" data-nav="consult">Talk to a doctor</button></article>`).join("")}</div><div class="info-callout"><b>Clinical scope:</b> Health programs organize access and follow-up; they do not guarantee treatment outcomes and should not replace individualized medical advice.</div></section>`;
}

function renderCities(){
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">REGIONAL NETWORK</span><h1>City-by-city service model</h1><p>Sati Medics is designed for local fulfilment rather than promising same-day delivery from one central location to every city.</p></div></div>
    <div class="city-grid">${cityData.map(c=>`<article class="city-card"><strong>${esc(c.name)}</strong><small>${esc(c.note)}</small><span>${esc(c.stage)}</span><button class="text-btn" style="display:block;margin-top:14px" data-city="${esc(c.name)}">Select ${esc(c.name)} →</button></article>`).join("")}</div>
    <div class="info-callout"><b>Coverage note:</b> A city should only be marked live after local pharmacy, delivery, doctor and/or diagnostics partners relevant to that service are operational and verified.</div>
  </section>`;
  document.querySelectorAll("[data-city]").forEach(b=>b.onclick=()=>{citySelect.value=b.dataset.city;localStorage.setItem("satiMedicsCity",b.dataset.city);toast("Selected "+b.dataset.city);});
}

function renderAbout(){
  view.innerHTML=`<section class="page legal-page"><div class="page-header"><div><span class="eyebrow">ABOUT SATI MEDICS</span><h1>A regional healthcare access platform</h1><p>One app connecting medicine ordering, consultation, diagnostics and family health workflows.</p></div></div><div class="legal-card"><h2>What Sati Medics is being built to do</h2><p>Sati Medics is designed as a multi-service healthcare platform with city-level fulfilment. Instead of functioning only as a medicine catalogue, the product brings together medicine ordering, prescription workflows, online consultation, diagnostic booking, family profiles, reminders and order tracking.</p><h2>Operating model</h2><p>Same-day medicine fulfilment should be handled by licensed local pharmacy partners in each active service area. Doctor consultations should use verified provider onboarding, while lab bookings should be routed only to appropriately certified diagnostic partners.</p><h2>Regional vision</h2><p>The product architecture supports Betul, Itarsi, Harda, Narmadapuram, Bhopal, Nagpur and Indore, with each city activated according to real operational capacity rather than a blanket delivery promise.</p><h2>Current build status</h2><p>This GitHub Pages build is a functional front-end product prototype. Real transactions require secure backend services, authentication, databases, payments, provider verification, prescription storage, pharmacy inventory, delivery operations, notifications and compliance review.</p></div></section>`;
}

function renderSupport(){
  const profile=getProfileDefaults();
  const currentOrder=(()=>{try{return JSON.parse(localStorage.getItem("satiMedicsOrder")||"null");}catch{return null;}})();
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">HELP & SUPPORT</span><h1>How can we help?</h1><p>Use this form for order, appointment, account or technical support. Medical emergencies should go directly to emergency services.</p></div></div>
    <div class="support-grid"><div class="support-card"><h2>Support request</h2><p>This preview stores the request locally. Connect a real helpdesk/CRM before launch.</p>
      <form class="smart-form" id="supportForm" novalidate><div class="form-status" aria-live="polite"></div>
        <div class="field"><label for="supportType">Issue type <span>*</span></label><select id="supportType"><option>Medicine order</option><option>Doctor consultation</option><option>Lab test</option><option>Prescription</option><option>Account</option><option>Technical issue</option></select></div>
        <div class="field-grid two"><div class="field"><label for="supportName">Your name <span>*</span></label><input id="supportName" autocomplete="name" maxlength="70" value="${esc(profile.name||"")}" placeholder="Full name"></div><div class="field"><label for="supportMobile">Mobile number <span>*</span></label><input id="supportMobile" inputmode="tel" autocomplete="tel" maxlength="14" value="${esc(profile.mobile||"")}" placeholder="10-digit mobile number"></div></div>
        <div class="field"><label for="supportRef">Order / booking ID</label><input id="supportRef" maxlength="30" value="${esc(currentOrder?.id||"")}" placeholder="Optional reference ID"></div>
        <div class="field"><label for="supportMsg">Describe the issue <span>*</span></label><textarea id="supportMsg" rows="5" maxlength="1000" placeholder="Tell us what happened and what help you need"></textarea><small>Do not submit emergency symptoms or unnecessary medical records here.</small></div>
        <div class="form-actions"><button class="primary-btn" id="submitSupport" type="submit">Submit support request</button></div>
      </form>
    </div><div class="support-card"><h2>Need urgent medical help?</h2><p>Sati Medics is not an ambulance or emergency response service. In India, call <b>112</b> or seek immediate care from the nearest appropriate emergency facility.</p><h2 style="margin-top:24px">Common actions</h2><div class="settings-list"><button data-nav="orders">Track an order</button><button data-nav="prescription">Prescription help</button><button data-nav="consult">Doctor consultation</button><button data-nav="labs">Lab booking</button></div></div></div>
  </section>`;
  const form=document.getElementById("supportForm");
  form.addEventListener("submit",e=>{
    e.preventDefault();clearFormErrors(form);
    const name=document.getElementById("supportName").value.trim(),mobile=document.getElementById("supportMobile").value.trim(),msg=document.getElementById("supportMsg").value.trim();
    if(!validName(name)) return failField("supportName","Enter your full name.");
    if(!validMobile(mobile)) return failField("supportMobile","Enter a valid 10-digit Indian mobile number.");
    if(msg.length<12) return failField("supportMsg","Describe the issue in at least 12 characters.");
    const ticket={id:makeId("SS"),name,mobile:phone10(mobile),type:document.getElementById("supportType").value,ref:document.getElementById("supportRef").value.trim(),message:msg,date:new Date().toISOString(),status:"Open"};
    localStorage.setItem("satiMedicsSupport",JSON.stringify(ticket));saveList("satiMedicsSupportTickets",ticket);
    form.reset();formStatus(form,"Support request saved. Reference: "+ticket.id,"success");toast("Support request saved");
  });
}
function renderLegal(type){
  const docs={
    privacy:{title:"Privacy",intro:"How health and account information should be handled in the production Sati Medics platform.",sections:[["Privacy by design","Production systems should collect only information needed to deliver healthcare services, use clear consent, restrict access by role and encrypt sensitive data in transit and at rest."],["Health information","Prescriptions, reports, consultation information and family profile data are sensitive. The current static prototype stores only limited demo state in the user's browser and is not suitable for real medical records."],["Third-party providers","Before launch, privacy disclosures should clearly identify how licensed pharmacies, verified doctors, diagnostic partners, payment providers and communication vendors process information."],["User controls","Production accounts should support secure authentication, consent management, data correction, account access controls and legally required data-rights workflows."]]},
    terms:{title:"Terms of Use",intro:"Core product terms to be finalized with legal counsel before commercial launch.",sections:[["Service availability","Medicine, consultation, diagnostics and delivery services are subject to city coverage, partner availability, stock, provider schedules and operational constraints."],["Prescription medicines","Items requiring a prescription may only be fulfilled after appropriate validation. Sati Medics should not bypass pharmacy or prescribing requirements."],["Pricing and fulfilment","Catalogue pricing and delivery estimates shown in this prototype are illustrative. Live prices, taxes, fees, substitutions and delivery windows must be confirmed during production checkout."],["Acceptable use","Users should provide accurate information, use the platform lawfully and avoid submitting fraudulent prescriptions, false identities or abusive requests."]]},
    disclaimer:{title:"Medical Disclaimer",intro:"Sati Medics supports access to healthcare services; it does not replace emergency care or individualized clinical judgement.",sections:[["No emergency service","Do not use Sati Medics for a medical emergency. In India, call 112 or seek immediate care from an appropriate emergency facility."],["Doctor consultation","Information provided through a clinician should be based on the actual consultation. General app content should not be treated as a diagnosis or personalized treatment plan."],["Medicine information","Medicine listings, reminders and search tools are organizational features. Prescription requirements, contraindications, dosing and suitability must be handled by qualified professionals."],["Diagnostics","Test packages and report displays do not by themselves diagnose disease. Results should be interpreted in appropriate clinical context by qualified healthcare professionals."]]}
  };
  const d=docs[type]||docs.disclaimer;
  view.innerHTML=`<section class="page legal-page"><div class="page-header"><div><span class="eyebrow">SAFETY & LEGAL</span><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p></div></div><div class="legal-card">${d.sections.map(([h,p])=>`<h2>${esc(h)}</h2><p>${esc(p)}</p>`).join("")}</div></section>`;
}

async function installApp(){
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    const choice=await deferredInstallPrompt.userChoice;
    if(choice.outcome==="accepted") toast("Sati Medics installation started");
    deferredInstallPrompt=null;
  }else{
    showModal("Install Sati Medics","<p>On supported browsers, open the browser menu and choose <b>Install app</b> or <b>Add to Home screen</b>. If Sati Medics is already installed, no install prompt will appear.</p>");
  }
}

document.addEventListener("submit",e=>{
  if(e.target&&e.target.id==="reminderForm"){
    e.preventDefault();
    const save=document.getElementById("saveReminder"); if(save) save.click();
  }
});
document.addEventListener("click",e=>{
  const navButton=e.target.closest("[data-nav]");
  if(navButton){ e.preventDefault(); nav(navButton.dataset.nav); return; }
  const specialty=e.target.closest("[data-specialty]");
  if(specialty){ e.preventDefault(); nav("consult",{specialty:specialty.dataset.specialty}); return; }
  const city=e.target.closest("[data-city]");
  if(city){ citySelect.value=city.dataset.city;localStorage.setItem("satiMedicsCity",city.dataset.city);toast("Service city set to "+city.dataset.city); }
  if(e.target.id==="saveReminder"){
    e.preventDefault();
    const form=document.getElementById("reminderForm"); clearFormErrors(form);
    const med=document.getElementById("remMed").value.trim(),date=document.getElementById("remDate").value,time=document.getElementById("remTime").value,frequency=document.getElementById("remFrequency").value;
    if(med.length<2) return failField("remMed","Enter the medicine name.");
    if(!date||date<todayISO()) return failField("remDate","Choose today or a future date.");
    if(!time) return failField("remTime","Choose a reminder time.");
    if(date===todayISO() && new Date(date+"T"+time).getTime()<=Date.now()) return failField("remTime","Choose a future time for today's reminder.");
    const reminder={id:makeId("RM"),medicine:med,date,time,frequency,createdAt:new Date().toISOString()};
    localStorage.setItem("satiMedicsReminder",JSON.stringify(reminder)); saveList("satiMedicsReminders",reminder);
    closeModal(); toast("Medicine reminder saved"); renderProfile();
  }
});
document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal();});
document.getElementById("notificationBtn").onclick=()=>showModal("Notifications","<p>No new live notifications. Production notifications will include order updates, appointment reminders, report alerts and opt-in refill reminders.</p>");
document.getElementById("installBtn").onclick=installApp;
citySelect.value=localStorage.getItem("satiMedicsCity") || "Betul";
citySelect.onchange=e=>{localStorage.setItem("satiMedicsCity",e.target.value);toast("Service city changed to "+e.target.value);};
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;});
window.addEventListener("appinstalled",()=>toast("Sati Medics installed"));

updateCartCount();
renderHome();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}