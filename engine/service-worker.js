
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('shrine-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/script.js',
                '/style.css',
                '/icons/icon-192x192.png',
                '/icons/icon-512x512.png',
                '/offline.html'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
