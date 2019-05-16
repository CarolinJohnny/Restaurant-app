if (navigator.serviceWorker) {
  navigator.serviceWorker.register('js/sw.js')
    .then(function() {
      console.log('Yay!');
    })
    .catch(function() {
      console.log('Boo!');
    });
}
