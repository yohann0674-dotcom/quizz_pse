self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('sdis-quiz-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'questions.js',
        'script.js',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});