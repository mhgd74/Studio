const CACHE_NAME = 'mh-studio-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/styles/critical.css',
    '/styles/main.css',
    '/js/main.js',
    '/js/testimonials.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
