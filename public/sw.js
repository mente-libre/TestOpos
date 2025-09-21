// Service Worker
const CACHE_NAME = 'testopos-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  // Es mejor no cachear los JS y CSS de Next.js directamente por sus hashes,
  // pero el fetch se encargará de cachearlos dinámicamente.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si la respuesta está en la caché, la devolvemos
        if (response) {
          return response;
        }

        // Si no, la buscamos en la red
        return fetch(event.request).then(
          response => {
            // Si la respuesta no es válida, la devolvemos tal cual
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonamos la respuesta porque es un stream y solo se puede consumir una vez
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
