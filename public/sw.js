// Service Worker para evitar cache e forçar atualização
const CACHE_VERSION = 'v' + Date.now()

self.addEventListener('install', (event) => {
  // Força o service worker a ativar imediatamente
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Deleta todos os caches antigos
            return caches.delete(cacheName)
          }),
        )
      })
      .then(() => {
        // Força o controle de todos os clientes abertos
        return self.clients.claim()
      }),
  )
})

self.addEventListener('fetch', (event) => {
  // Sempre busca da rede, sem usar cache
  event.respondWith(
    fetch(event.request, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    }).catch(() => {
      // Se falhar, tenta do cache como fallback
      return caches.match(event.request)
    }),
  )
})
