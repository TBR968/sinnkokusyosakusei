const CACHE_NAME = 'tax-app-cache-v1';
const ASSETS = [
    './',
    './index.html',
    './app.js',
    './manifest.json',
    './icon.svg'
];

// インストール時にキャッシュ
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// オフライン時はキャッシュから返す
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
