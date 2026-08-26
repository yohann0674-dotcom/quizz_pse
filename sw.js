const CACHE_NAME = 'sdis-quiz-v2';

// Liste complète de tous vos fichiers à mettre en cache
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'script.js',
  'questions.js',
  'questions-chef-agres.js',
  'questions-isp.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// 1. Installation : mise en cache des nouveaux fichiers
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force le nouveau Service Worker à s'activer immédiatement
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activation : suppression automatique des anciens caches (ex: v1)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Stratégie "Network First" (Réseau d'abord, puis Cache)
// Récupère toujours la dernière version en ligne si connecté, sinon bascule sur le cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // En cas de perte de connexion, on sert le fichier depuis le cache hors-ligne
        return caches.match(event.request);
      })
  );
});