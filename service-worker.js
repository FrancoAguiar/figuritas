const CACHE_NAME='figuritapp-v17-camera-zoom';
const ASSETS=['./','./index.html','./albumData.js','./service-worker.js','./logo.png','./icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).catch(()=>{})));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
