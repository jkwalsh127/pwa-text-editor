const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

//CacheFirst relies on the cache, falling back to network only if response is not available in cache. The network response will be cached for later use
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    // cache any requests with a status code between 0 and 200
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    // restricts caching responses with these headers to a max of 30 days
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});
// recipe to load provided URLs during service worker's install. 
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === "navigate", pageCache);

registerRoute(
  // matching function to determine if the route should be a match to the request
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  // caching strategy to respond from cache if possible, otherwise falling back to network response, which will then update cache. Cache is always revalidated.
  new StaleWhileRevalidate({
    // static resources for service worker to respond with (specifically CSS, JS, Web Worker)
    cacheName: 'asset-cache',
    plugins: [
      // cache any requests with a status code between 0 and 200
      new CacheableResponsePlugin({ statuses: [0, 200] })
    ],
  })
);
