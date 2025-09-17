// El nombre de la caché.
const CACHE_NAME = 'testopos-v1';
// La lista de archivos para cachear.
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/logo.png',
  '/icon-192x192.png',
  '/icon-256x256.png',
  '/icon-384x384.png',
  '/icon-512x512.png',
];

// Evento de instalación: se abre la caché y se añaden los archivos.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento fetch: responde con los recursos de la caché si están disponibles.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en la caché, se devuelve.
        if (response) {
          return response;
        }

        // Si no, se busca en la red.
        return fetch(event.request).then(
          response => {
            // Si la respuesta no es válida, se devuelve directamente.
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Se clona la respuesta para poder guardarla en la caché y devolverla.
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

// Evento de activación: limpia cachés antiguas.
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
