// Service Worker for 資料作成アプリ PWA
// このService Workerは、PWAとしてインストールするために必要な最小限の実装です

const CACHE_NAME = 'shiryou-app-v1';

// インストール時
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// アクティベーション時
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// フェッチイベント - ネットワークファーストで動作
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
