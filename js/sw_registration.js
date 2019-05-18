if (navigator.serviceWorker) {
  navigator.serviceWorker.register('js/sw.js')
    .then(function() {
      console.log('Yay!');
    })
    .catch(function() {
      console.log('Boo!');
    });
}
/* navigator.serviceWorker.register('js/sw.js').then(function(registration) {
    if (registration.installing) {
        // Service Worker is Installing
    }
})

navigator.serviceWorker.register('js/sw.js').then(function(registration) {
    if (registration.waiting) {
        // Service Worker is Waiting
    }
})

navigator.serviceWorker.register('js/sw.js').then(function(registration) {
    if (registration.active) {
        // Service Worker is Active
    }
})  */
