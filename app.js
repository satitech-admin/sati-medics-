const medicines = [
  {id:1,name:"Dolo 650",salt:"Paracetamol 650 mg",price:15,rx:false,cat:"Fever & Pain"},
  {id:2,name:"Azithral 500",salt:"Azithromycin 500 mg",price:75,rx:true,cat:"Prescription"},
  {id:3,name:"Shelcal 500",salt:"Calcium + Vitamin D3",price:120,rx:false,cat:"Vitamins"},
  {id:4,name:"Glycomet 500",salt:"Metformin 500 mg",price:45,rx:true,cat:"Diabetes"},
  {id:5,name:"Amlodipine 5 mg",salt:"Amlodipine",price:25,rx:true,cat:"Heart Care"},
  {id:6,name:"Limcee",salt:"Vitamin C 500 mg",price:30,rx:false,cat:"Vitamins"},
  {id:7,name:"Cetirizine",salt:"Cetirizine 10 mg",price:22,rx:false,cat:"Allergy"},
  {id:8,name:"Pantop 40",salt:"Pantoprazole 40 mg",price:86,rx:true,cat:"Digestive Care"},
  {id:9,name:"ORS Sachet",salt:"Oral Rehydration Salts",price:24,rx:false,cat:"General Care"},
  {id:10,name:"Volini Gel",salt:"Topical pain relief",price:165,rx:false,cat:"Fever & Pain"},
  {id:11,name:"B-Complex",salt:"Vitamin B Complex",price:95,rx:false,cat:"Vitamins"},
  {id:12,name:"Digital Thermometer",salt:"Healthcare device",price:199,rx:false,cat:"General Care"}
];

const doctors = [
  {name:"Dr. Rohan Sharma",specialty:"General Physician",degree:"MBBS, MD",exp:"9 years",rating:"4.8",fee:299,initials:"RS"},
  {name:"Dr. Neha Verma",specialty:"Gynecologist",degree:"MBBS, MS",exp:"8 years",rating:"4.7",fee:399,initials:"NV"},
  {name:"Dr. Amit Jain",specialty:"Dermatologist",degree:"MBBS, MD",exp:"6 years",rating:"4.6",fee:349,initials:"AJ"},
  {name:"Dr. Priya Nair",specialty:"Pediatrician",degree:"MBBS, DCH",exp:"10 years",rating:"4.9",fee:399,initials:"PN"},
  {name:"Dr. Arjun Mehta",specialty:"Orthopedic",degree:"MBBS, MS Ortho",exp:"12 years",rating:"4.8",fee:499,initials:"AM"},
  {name:"Dr. Sana Khan",specialty:"Mental Wellness",degree:"MD Psychiatry",exp:"7 years",rating:"4.9",fee:549,initials:"SK"}
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
    <div class="page-header"><div><span class="eyebrow">MEDICINE DELIVERY</span><h1>Order medicines</h1><p>Search common medicines and healthcare products. Prescription-only products require valid prescription review before fulfilment.</p></div><button class="secondary-btn" data-nav="prescription">Upload prescription</button></div>
    <div class="info-callout"><b>Important:</b> Product names and prices on this preview are sample catalogue data. Live inventory, price, substitution and delivery availability must come from the connected licensed pharmacy system.</div>
    <div class="toolbar"><input id="medSearch" placeholder="Search medicine, salt or category..." value="${esc(query)}"><select id="catFilter"><option>All categories</option>${[...new Set(medicines.map(m=>m.cat))].map(c=>`<option>${esc(c)}</option>`).join("")}</select></div>
    <div class="product-grid" id="productGrid"></div>
  </section>`;

  const draw=()=>{
    const q=document.getElementById("medSearch").value.toLowerCase();
    const cat=document.getElementById("catFilter").value;
    const list=medicines.filter(m=>(m.name+" "+m.salt+" "+m.cat).toLowerCase().includes(q)&&(cat==="All categories"||m.cat===cat));
    document.getElementById("productGrid").innerHTML=list.map(m=>`<article class="card">
      <div class="product-image">${m.rx?"Rx":"OTC"}</div>
      <div style="margin-top:12px"><span class="badge ${m.rx?"warn":""}">${m.rx?"Prescription review required":"Non-Rx / wellness sample"}</span><h3>${esc(m.name)}</h3><small>${esc(m.salt)}</small></div>
      <div class="price-row"><span class="price">${money(m.price)}</span><button class="pill-btn" data-add="${m.id}">Add +</button></div>
    </article>`).join("") || '<div class="empty"><h2>No matching item</h2><p>Try another medicine, salt or category.</p></div>';
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
      <div class="doctor-head" style="margin-top:12px"><div class="doctor-avatar">${esc(d.initials)}</div><div><h3>${esc(d.name)}</h3><small>${esc(d.specialty)}</small></div></div>
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
  view.innerHTML=`<section class="page">
    <button class="outline-btn" onclick="nav('consult')">← Back to doctors</button>
    <div class="consult-panel" style="margin-top:16px">
      <div class="consult-form">
        <span class="eyebrow">BOOK CONSULTATION</span>
        <h2 style="margin:8px 0 5px">${esc(doc.name)}</h2>
        <p style="margin:0 0 18px;color:var(--muted);font-size:10px">${esc(doc.specialty)} • Sample provider profile</p>
        <div class="form-grid">
          <input id="patientName" placeholder="Patient name">
          <input id="patientAge" type="number" min="0" max="120" placeholder="Age">
          <select id="mode"><option>Video consultation</option><option>Audio consultation</option><option>Chat consultation</option></select>
          <input id="slot" type="datetime-local">
          <textarea id="symptoms" rows="5" placeholder="Briefly describe the health concern (do not use this form for emergencies)"></textarea>
          <label style="font-size:9px;color:var(--muted);display:flex;gap:8px;align-items:flex-start"><input id="consultConsent" type="checkbox"> I understand this preview booking is not an emergency service and live consultations require verified provider onboarding.</label>
          <button class="primary-btn" id="confirmConsult">Confirm preview booking • ${money(doc.fee)}</button>
        </div>
      </div>
      <div class="video-mock"><div class="video-screen"><div><div class="avatar">${esc(doc.initials)}</div><h2 style="color:white">${esc(doc.name)}</h2><p>Secure consultation-room preview</p><p style="opacity:.72">Production video/audio service requires a compliant real-time communications integration.</p></div></div></div>
    </div>
  </section>`;
  document.getElementById("confirmConsult").onclick=()=>{
    const name=document.getElementById("patientName").value.trim();
    const slot=document.getElementById("slot").value;
    if(!name||!slot) return toast("Add patient name and consultation slot");
    if(!document.getElementById("consultConsent").checked) return toast("Please accept the consultation acknowledgement");
    localStorage.setItem("satiMedicsConsult",JSON.stringify({doctor:doc.name,specialty:doc.specialty,slot,mode:document.getElementById("mode").value,patient:name}));
    toast("Preview consultation booked");
    setTimeout(()=>nav("orders"),650);
  };
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
  view.innerHTML=`<section class="page"><button class="outline-btn" onclick="nav('labs')">← Back to tests</button>
    <div class="section-block" style="max-width:760px;margin-top:16px"><span class="eyebrow">HOME COLLECTION REQUEST</span><h2 style="margin:8px 0 5px">${esc(lab.name)}</h2><p style="font-size:10px;color:var(--muted)">${esc(lab.tests)}</p>
      <div class="form-grid" style="margin-top:18px"><input id="labPatient" placeholder="Patient name"><input id="labPhone" inputmode="tel" placeholder="Mobile number"><input id="labDate" type="date"><textarea id="labAddress" rows="3" placeholder="Collection address in ${esc(citySelect.value)}"></textarea><button class="primary-btn" id="confirmLab">Request collection • ${money(lab.price)}</button></div>
    </div></section>`;
  document.getElementById("confirmLab").onclick=()=>{
    const patient=document.getElementById("labPatient").value.trim(),date=document.getElementById("labDate").value,address=document.getElementById("labAddress").value.trim();
    if(!patient||!date||!address) return toast("Fill patient, date and collection address");
    localStorage.setItem("satiMedicsLab",JSON.stringify({...lab,patient,date,city:citySelect.value}));
    toast("Lab collection request saved");
    setTimeout(()=>nav("orders"),650);
  };
}

function renderPrescription(){
  view.innerHTML=`<section class="page">
    <div class="page-header"><div><span class="eyebrow">PRESCRIPTION ORDER</span><h1>Upload a prescription</h1><p>Submit a clear prescription for review before ordering medicines that legally require one.</p></div></div>
    <div class="section-block" style="max-width:760px">
      <div class="info-callout" style="margin-top:0"><b>Prototype notice:</b> The current static preview does not upload health documents to a server. It only validates the UI flow locally. A secure production backend is required before accepting real prescriptions.</div>
      <div class="form-grid"><input id="rxFile" type="file" accept="image/*,.pdf"><input id="rxPatient" placeholder="Patient name"><textarea id="rxNote" rows="4" placeholder="Optional note for pharmacist"></textarea><label style="font-size:9px;color:var(--muted);display:flex;gap:8px"><input id="rxConsent" type="checkbox"> I understand prescription-only medicines require pharmacist review and may not be fulfilled if the prescription is invalid or unavailable.</label><button class="primary-btn" id="submitRx">Submit preview request</button></div>
    </div>
  </section>`;
  document.getElementById("submitRx").onclick=()=>{
    const file=document.getElementById("rxFile").files[0];
    const patient=document.getElementById("rxPatient").value.trim();
    if(!file||!patient) return toast("Choose a prescription file and patient name");
    if(!document.getElementById("rxConsent").checked) return toast("Please accept the prescription acknowledgement");
    localStorage.setItem("satiMedicsRxMeta",JSON.stringify({name:file.name,type:file.type,patient,date:new Date().toISOString()}));
    toast("Prescription preview request saved");
  };
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
  view.innerHTML=`<section class="page"><button class="outline-btn" onclick="nav('cart')">← Back to cart</button>
    <div class="section-block" style="max-width:760px;margin-top:16px"><span class="eyebrow">DELIVERY DETAILS</span><h2 style="margin:8px 0 5px">Deliver in ${esc(citySelect.value)}</h2><p style="font-size:10px;color:var(--muted)">This checkout is a functional front-end prototype. Live orders require inventory, payment, pharmacy and rider integrations.</p>
      <div class="form-grid" style="margin-top:18px"><input id="custName" placeholder="Full name"><input id="phone" inputmode="tel" placeholder="Mobile number"><input id="pincode" inputmode="numeric" placeholder="Pincode"><textarea id="address" rows="4" placeholder="Full delivery address"></textarea><select id="pay"><option>Cash on delivery</option><option>UPI on delivery</option><option>Online payment (gateway integration required)</option></select><label style="font-size:9px;color:var(--muted);display:flex;gap:8px"><input id="orderConsent" type="checkbox"> I agree that prescription medicines, final stock, price and delivery promise are subject to live verification.</label><button class="primary-btn" id="placeOrder">Place preview order</button></div>
    </div></section>`;
  document.getElementById("placeOrder").onclick=()=>{
    const name=document.getElementById("custName").value.trim(),phone=document.getElementById("phone").value.trim(),pin=document.getElementById("pincode").value.trim(),address=document.getElementById("address").value.trim();
    if(!name||!phone||!pin||!address) return toast("Fill all delivery details");
    if(!document.getElementById("orderConsent").checked) return toast("Please accept the order acknowledgement");
    const order={id:"SM"+Date.now().toString().slice(-6),time:new Date().toISOString(),items:cart,status:2,city:citySelect.value,total:cart.reduce((a,b)=>a+b.price*b.qty,0)};
    localStorage.setItem("satiMedicsOrder",JSON.stringify(order));
    cart=[]; saveCart(); toast("Preview order placed"); setTimeout(()=>nav("orders"),650);
  };
}

function renderOrders(){
  const order=JSON.parse(localStorage.getItem("satiMedicsOrder")||"null");
  const consult=JSON.parse(localStorage.getItem("satiMedicsConsult")||"null");
  const lab=JSON.parse(localStorage.getItem("satiMedicsLab")||"null");
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">ACTIVITY</span><h1>Orders & appointments</h1><p>Your preview activity stored on this device.</p></div></div>
  ${order?`<div class="section-block"><div class="section-title"><div><span class="badge">Preview order #${esc(order.id)}</span><h2>Out for delivery</h2><p>Sample order tracking in ${esc(order.city)}</p></div><span class="product-image" style="width:70px;height:70px">GO</span></div><div class="timeline">${["Order confirmed","Packed at pharmacy","Out for delivery","Delivered"].map((s,i)=>`<div class="timeline-step ${i<=order.status?"done":""}"><div class="timeline-dot">${i<=order.status?"✓":i+1}</div><div><strong>${s}</strong><small style="display:block;color:var(--muted);margin-top:4px">${i<=order.status?"Completed in preview":"Pending"}</small></div></div>`).join("")}</div></div>`:'<div class="empty"><h2>No medicine orders yet</h2><p>Place a preview medicine order to see the tracking experience.</p><button class="primary-btn" onclick="nav(\'medicines\')">Order medicines</button></div>'}
  ${consult?`<div class="section-block"><span class="badge">Consultation</span><h2 style="margin-top:10px">${esc(consult.doctor)}</h2><p style="font-size:10px;color:var(--muted)">${esc(consult.specialty)} • ${new Date(consult.slot).toLocaleString()} • ${esc(consult.mode||"Online")}</p></div>`:""}
  ${lab?`<div class="section-block"><span class="badge">Lab collection</span><h2 style="margin-top:10px">${esc(lab.name)}</h2><p style="font-size:10px;color:var(--muted)">Requested for ${esc(lab.date)} • ${esc(lab.city||citySelect.value)}</p></div>`:""}
  </section>`;
}

function renderProfile(){
  const profile=JSON.parse(localStorage.getItem("satiMedicsProfile")||"{}");
  const reminder=JSON.parse(localStorage.getItem("satiMedicsReminder")||"null");
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">ACCOUNT</span><h1>My health profile</h1><p>Prototype profile data is stored only in this browser. Do not use this preview to store sensitive real medical records.</p></div></div>
    <div class="profile-grid">
      <div class="profile-card">
        <div class="profile-hero"><div class="profile-avatar">${profile.name?esc(profile.name.slice(0,2).toUpperCase()):"SM"}</div><div><h2>${profile.name?esc(profile.name):"Create your profile"}</h2><p style="color:var(--muted);font-size:10px">Family healthcare, reminders and activity in one place.</p></div></div>
        <div class="form-grid" style="margin-top:20px"><input id="profileName" placeholder="Full name" value="${esc(profile.name||"")}"><input id="profileMobile" inputmode="tel" placeholder="Mobile number" value="${esc(profile.mobile||"")}"><select id="profileLang"><option ${profile.lang==="English"?"selected":""}>English</option><option ${profile.lang==="हिन्दी"?"selected":""}>हिन्दी</option></select><button class="primary-btn" id="saveProfile">Save local profile</button></div>
        <div class="program-grid" style="margin-top:20px"><article><span class="program-icon">FM</span><div><strong>Family profiles</strong><small>Structure care for parents and children</small></div></article><article><span class="program-icon">HR</span><div><strong>Health records</strong><small>Prescription and report workflow</small></div></article><article><span class="program-icon">RR</span><div><strong>Refill reminders</strong><small>${reminder?esc(reminder.medicine)+" • "+esc(reminder.date):"Set your first reminder"}</small></div></article></div>
      </div>
      <div class="settings-card"><h2>Quick actions</h2><div class="settings-list"><button id="setReminder">Set medicine reminder</button><button data-nav="orders">Orders & appointments</button><button data-nav="prescription">Prescription upload</button><button data-nav="privacy">Privacy & security</button><button data-nav="support">Help & support</button></div></div>
    </div>
  </section>`;
  document.getElementById("saveProfile").onclick=()=>{
    const name=document.getElementById("profileName").value.trim(),mobile=document.getElementById("profileMobile").value.trim(),lang=document.getElementById("profileLang").value;
    if(!name) return toast("Add your name");
    localStorage.setItem("satiMedicsProfile",JSON.stringify({name,mobile,lang}));
    toast("Local profile saved");
    renderProfile();
  };
  document.getElementById("setReminder").onclick=()=>showModal("Medicine reminder",`<div class="form-grid"><input id="remMed" placeholder="Medicine name"><input id="remDate" type="date"><button class="primary-btn" id="saveReminder">Save reminder</button></div>`);
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
  view.innerHTML=`<section class="page"><div class="page-header"><div><span class="eyebrow">HELP & SUPPORT</span><h1>How can we help?</h1><p>Use the support flow for account, order, appointment or technical questions. Emergency medical situations should go directly to emergency services.</p></div></div><div class="support-grid"><div class="support-card"><h2>Support request</h2><p>This preview saves the request locally only; connect your CRM/helpdesk before launch.</p><div class="form-grid"><select id="supportType"><option>Medicine order</option><option>Doctor consultation</option><option>Lab test</option><option>Account</option><option>Technical issue</option></select><input id="supportName" placeholder="Your name"><textarea id="supportMsg" rows="5" placeholder="Describe the issue"></textarea><button class="primary-btn" id="submitSupport">Submit preview request</button></div></div><div class="support-card"><h2>Need urgent medical help?</h2><p>Sati Medics is not an ambulance or emergency response service. In India, call <b>112</b> or seek immediate care from the nearest appropriate emergency facility.</p><h2 style="margin-top:24px">Common actions</h2><div class="settings-list"><button data-nav="orders">Track an order</button><button data-nav="prescription">Prescription help</button><button data-nav="consult">Doctor consultation</button><button data-nav="labs">Lab booking</button></div></div></div></section>`;
  document.getElementById("submitSupport").onclick=()=>{
    const name=document.getElementById("supportName").value.trim(),msg=document.getElementById("supportMsg").value.trim();
    if(!name||!msg) return toast("Add your name and issue");
    localStorage.setItem("satiMedicsSupport",JSON.stringify({name,msg,type:document.getElementById("supportType").value,date:new Date().toISOString()}));
    toast("Preview support request saved");
  };
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

document.addEventListener("click",e=>{
  const navButton=e.target.closest("[data-nav]");
  if(navButton){ e.preventDefault(); nav(navButton.dataset.nav); return; }
  const specialty=e.target.closest("[data-specialty]");
  if(specialty){ e.preventDefault(); nav("consult",{specialty:specialty.dataset.specialty}); return; }
  const city=e.target.closest("[data-city]");
  if(city){ citySelect.value=city.dataset.city;localStorage.setItem("satiMedicsCity",city.dataset.city);toast("Service city set to "+city.dataset.city); }
  if(e.target.id==="saveReminder"){
    const med=document.getElementById("remMed").value.trim(),date=document.getElementById("remDate").value;
    if(!med||!date) return toast("Add medicine and reminder date");
    localStorage.setItem("satiMedicsReminder",JSON.stringify({medicine:med,date}));
    closeModal(); toast("Reminder saved locally"); renderProfile();
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