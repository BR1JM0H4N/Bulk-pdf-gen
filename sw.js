const CACHE_NAME = "pdf-gen-v1";

const APP_FILES = [
  "./",
  "./index.html",

  // libs
  "./pdf-lib.min.js",
  "./fontkit.umd.min.js",
  "./jszip.min.js",
  "./filesaver.js",
  "./pdf.min.js",
  "./pdf.worker.min.js",

  // manifest & icons
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
