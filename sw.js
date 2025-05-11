self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('planificador-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                'https://cdn.tailwindcss.com'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});