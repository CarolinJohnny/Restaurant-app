
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open("cacheRestaurantReview".then(function(cache){
      return cache.addAll([
        './',
        './index.html',
        '/restaurant.html',
        '/css/styles.css',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        '/img/10.jpg',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/sw_registration.js',
      ]);
    });
  );
});

 self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(allCaches){
      return Promise.all(
        allCaches.filter(function(cacheName){
         return cacheName === "cacheRestaurantReview";
        }).map(function(cacheName){
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (response) {
    return response;
  }
  return caches.open('cacheRestaurantReview').then(cache => {
    cache.put(event.request.url, networkResponse.clone());
    return networkResponse;
  }).catch(error => {
    console.log(error);
    return;
  })
});
