if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/cioccolata/sw.js', { scope: '/cioccolata/' })})}