const CACHE="sati-medics-v4";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./assets/sati-medics-logo.svg","./assets/icon.svg"];
self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
self.addEventListener("activate",event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  event.respondWith(
    caches.match(event.request).then(cached=>cached || fetch(event.request).then(response=>{
      if(!response || response.status!==200 || response.type==="opaque") return response;
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      return response;
    }).catch(()=>caches.match("./index.html")))
  );
});