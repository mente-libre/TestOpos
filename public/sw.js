const CACHE_NAME = 'testopos-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Añade aquí otras rutas y recursos estáticos que quieras cachear
  // Por ejemplo, las páginas principales:
  '/login',
  '/generate',
  '/stats',
  // Es importante no cachear rutas dinámicas como /category/[id] o /exam/[id] aquí
  // a menos que sepas exactamente qué hacer con ellas.
];

self.addEventListener('install', (event) => {
  // Realiza la instalación del Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en la caché, lo devuelve
        if (response) {
          return response;
        }

        // Si no está en caché, lo busca en la red
        return fetch(event.request).then(
          (response) => {
            // Comprueba si hemos recibido una respuesta válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona la respuesta. Una respuesta es un flujo y solo se puede consumir una vez.
            // Necesitamos una copia para la caché y otra para el navegador.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Borra las cachés antiguas
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
