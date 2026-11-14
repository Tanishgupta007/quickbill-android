const CACHE="quickbill-v4";
const FILES=["./","./index.html","./manifest.webmanifest","./icon.svg"];
const QR_LIB="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const url=new URL(e.request.url);
  if(url.href===QR_LIB){
    e.respondWith(caches.open(CACHE).then(async c=>{const cached=await c.match(e.request);if(cached)return cached;try{const r=await fetch(e.request);if(r.ok)c.put(e.request,r.clone());return r}catch(err){return new Response("",{status:503})}}));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{let copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match("./index.html"))));
});
