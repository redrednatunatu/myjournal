const cacheName = "quote-app-v1";
const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  "./images/bg1.jpg",
  "./images/bg2.jpg",
  "./images/bg3.jpg",
  "./images/bg4.jpg",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
