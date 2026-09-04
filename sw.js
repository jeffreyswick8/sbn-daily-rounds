var CACHE_NAME = 'sbn-rounds-v5';
var urlsToCache = [
  '/SBN-Daily-Rounds/',
  '/SBN-Daily-Rounds/index.html',
  '/SBN-Daily-Rounds/manifest.json',
  '/SBN-Daily-Rounds/icon-192.png',
  '/SBN-Daily-Rounds/icon-512.png',
  '/SBN-Daily-Rounds/app.js'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(networkResponse) {
      if (networkResponse && networkResponse.status === 200) {
        var responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseClone);
        });
      }
      return networkResponse;
    }).catch(function() {
      return caches.match(event.request).then(function(cached) {
        return cached || caches.match('/SBN-Daily-Rounds/index.html');
      });
    })
  );
});
