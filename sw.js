const CACHE_NAME = "peso-app-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png"
];

self.addEventListener("install", event => {

self.skipWaiting();

event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", event => {
event.waitUntil(clients.claim());
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
