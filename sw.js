var CACHE_NAME = "cache-saya-1",
    FILES_TO_CACHE = ["/",
        "index.html",
        "assets/css/style.min.css",
        "assets/css/aos.min.css",
        "assets/img/gambar.png",
        "assets/img/profil.webp",
        "assets/img/launcher-icon-1x.png",
        "assets/img/launcher-icon-2x.png",
        "assets/img/launcher-icon-4x.png",
        "assets/img/launcher-icon-5x.png",
        "assets/img/projects/project1.webp",
        "assets/img/projects/project2.webp",
        "assets/img/projects/project3.webp",
        "assets/img/projects/project4.webp",
        "assets/img/projects/project5.webp",
        "assets/img/projects/project6.webp",
        "assets/img/experience/expe1.png",
        "assets/img/experience/expe2.png",
        "assets/img/experience/expe3.png",
        "assets/img/experience/expe4.png",
        "assets/font-awesome/css/font-awesome.min.css",
        "assets/font-awesome/fonts/fontawesome-webfont.woff",
        "assets/font-awesome/fonts/fontawesome-webfont.woff2",
        "assets/font-awesome/fonts/fontawesome-webfont.ttf",
        "assets/bootstrap-4.5.0/css/bootstrap.min.css",
        "assets/bootstrap-4.5.0/js/bootstrap.min.js",
        "assets/js/jquery.min.js",
        "assets/js/jquery.easing.min.js",
        "assets/js/jquery.easypiechart.min.js",
        "assets/js/typed.min.js",
        "assets/js/dinamis.min.js",
        "assets/js/aos.min.js",
        "assets/js/app.min.js",
        "manifest.json"
    ];
self.addEventListener("install", function (s) {
    s.waitUntil(caches.open(CACHE_NAME).then(function (s) {
        return console.log("Menyimpan file cache untuk offline"), s.addAll(FILES_TO_CACHE)
    }))
}), self.addEventListener("fetch", function (s) {
    s.respondWith(caches.match(s.request).then(function (e) {
        return e || fetch(s.request)
    }))
}), self.addEventListener("activate", function (s) {
    s.waitUntil(caches.keys().then(s => Promise.all(s.map(s => {
        if (s !== CACHE_NAME) return console.log("menghapus cache lama", s), caches.delete(s)
    })))), s.waitUntil(self.clients.claim()), console.log("Service Worker activating.")
});