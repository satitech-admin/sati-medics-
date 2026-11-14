const CACHE="sati-medics-v7";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./assets/sati-medics-logo.svg","./assets/icon.svg"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("sati-medics-") && key!==CACHE).map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET" || new URL(req.url).origin!==self.location.origin) return;
  if(req.mode==="navigate"){
    event.respondWith(fetch(req).catch(()=>caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached || fetch(req)));
});