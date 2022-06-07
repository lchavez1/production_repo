'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c9f23e2de7b8d47d1e81a5ae17f87db5",
"assets/assets/images/app_screen.png": "f28fbb4fe03d756468ad32af27126faf",
"assets/assets/images/app_store_badge.png": "6fc6b9412e271f1cf7a640202f8fab37",
"assets/assets/images/google_play_badge.png": "169b034cb3769605f8623a0228824db6",
"assets/assets/images/icons/alta-calidad.png": "58ceb7685a82bba17c0526bfc888c87b",
"assets/assets/images/icons/construccion.png": "ccdff22571110c57e1a6b5efd0d628ca",
"assets/assets/images/icons/control-de-calidad.png": "6cbe4e3eb966754c1cd37341d9753428",
"assets/assets/images/icons/conversacion.png": "7452f7cff6c455b53b6bca6efed3aa35",
"assets/assets/images/icons/el-respeto.png": "059db8334ddeb403b1df561eed6a05e2",
"assets/assets/images/icons/email.png": "1aab72862f5e02335edbc9db1d47a6d0",
"assets/assets/images/icons/globo.png": "32e46a9608e0a557561b02193f353976",
"assets/assets/images/icons/ingeniero.png": "baeef8b7e84bf7aefb77dbbf6ef0650a",
"assets/assets/images/icons/iphone.png": "0e9ff0e9cb9a557e20297765dbf7baaa",
"assets/assets/images/icons/llamada-telefonica.png": "51e5a9becf9e063eada221d233279162",
"assets/assets/images/icons/location.png": "d13e9f802c077f8d574c7e086b61084a",
"assets/assets/images/icons/mejor-empleado.png": "a1b21a6e394e99487f903e5bd3bb7f70",
"assets/assets/images/icons/mision.png": "5c0e013e793b3417e4e0cefcfcc24f26",
"assets/assets/images/icons/objetivo.png": "7fdb7b8c0d133254ab1927de63db5f51",
"assets/assets/images/icons/red-mundial.png": "07e7428a89597a7280c5340e1639d0c9",
"assets/assets/images/icons/rendimiento.png": "b36975fefac11c31b26709925aac6494",
"assets/assets/images/icons/trabajar-como-voluntario.png": "c3d2441051ea4ceaf75f4285e4517676",
"assets/assets/images/icons/ubicacion.png": "5a8b6b421085e91d814c9db77d88f505",
"assets/assets/images/icons/unido.png": "0bc7cd5993523204dfed11ed59107b5b",
"assets/assets/images/icons/vision-estrategica.png": "529a292c9bcddd2283daa7b431509c72",
"assets/assets/images/icons/whatsapp.png": "91d403ea454c3c6c387223d09ea8fb8a",
"assets/assets/images/logo.png": "c59d6717df493bd510b4946289f42af3",
"assets/assets/images/modelos-de-logotipos-empresas.png": "cb4c0364bcaa60885a69cd1ad33d557b",
"assets/assets/images/screenshots/screen1.png": "25526fbb5b7edba3357551f61ba92e33",
"assets/assets/images/screenshots/screen2.png": "d3beb2781849a14ce0001c16f5aae512",
"assets/assets/images/screenshots/screen3.png": "389b79fcf550c15f529a5e2272eb47e9",
"assets/assets/images/screenshots/screen4.png": "98fbbe190e11a1da27061c681c3b3a87",
"assets/assets/images/screenshots/screen5.png": "b752bd047b7a2819a0e3778b47e65830",
"assets/assets/images/screenshots/screen6.png": "25526fbb5b7edba3357551f61ba92e33",
"assets/assets/images/screenshots/screen7.png": "d3beb2781849a14ce0001c16f5aae512",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "28590bc8076c595c372225f47a667ddf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "c659f783059b07706440485a2de3f9d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d83e68e3b819adeb2657de5552b5fdcc",
"/": "d83e68e3b819adeb2657de5552b5fdcc",
"main.dart.js": "dc4262644e6de7b6d18378a13bb2087f",
"manifest.json": "6ad3fa99d8393844554600af79ae6d57",
"stylewsp.css": "34b04ee24d35a577eab9c86328a2e914",
"version.json": "788c720b9e9736831110ee51e7cd66c8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
