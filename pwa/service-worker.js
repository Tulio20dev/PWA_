self.addEventListener('install', event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "style.css",
        "app.js",
        "imgs/icon_192x192.png",
        "imgs/icon_512x512.png",
        "imgs/imgManha.png",
        "imgs/anoitecer_512.png",
        "imgs/entardecer_512.png",
        "imgs/mug-hot-alt.png",
        "imgs/cloud-sun.png",
        "imgs/moon-stars.png"
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
  caches.match(event.request).then(response => response || fetch(event.request))
  );
});