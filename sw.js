const CACHE_NAME = "monster-hunter-atlas-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/monster-mark.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  // Card art never changes once published, so serve it from the cache and only
  // hit the network the first time.
  if (url.pathname.includes("/cards/")) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetchAndCache(event.request))
    );
    return;
  }

  // Everything else is the app itself. Network first, so a deploy shows up on
  // the next load instead of living in the cache forever; the cache is only
  // the offline fallback.
  event.respondWith(
    // cache: "no-cache" revalidates with the server (a cheap 304 when nothing
    // changed) so the browser's own HTTP cache can't hand back a stale file.
    fetchAndCache(new Request(event.request, { cache: "no-cache" }))
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match("./index.html"))
      )
  );
});

function fetchAndCache(request) {
  return fetch(request).then((response) => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
    }
    return response;
  });
}
