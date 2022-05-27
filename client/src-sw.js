const { StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

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
