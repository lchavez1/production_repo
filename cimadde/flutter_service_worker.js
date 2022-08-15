'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "09786704863d28e391bbbe3df8aeac63",
"assets/assets/icons/Favicon1.png": "2372e4cd98df7372be15e3a1f431735f",
"assets/assets/icons/Favicon2.png": "38dbf241110874abf5b917bc1738a4b7",
"assets/assets/icons/icons8-filtro-de-correo-50.png": "c85a0db24588f678d4756f01b7243161",
"assets/assets/icons/icons8_location_100px.png": "8d8c7122bd89e2f86c47abaefa91a616",
"assets/assets/icons/icons8_mail_100px.png": "eebdb601ae36a1919ad576a6f21bffc9",
"assets/assets/icons/icons8_phone_100px.png": "a25fe4ea0ff5fd5693b597b1cc4138b2",
"assets/assets/icons/menu.png": "d42b36a10f3b373df1ef36b117f5bfc1",
"assets/assets/images/banner1.jpg": "55a02df88ee4581029af1d9076d1737c",
"assets/assets/images/banner2.jpg": "f90d844907c6a8df723e819c4713876d",
"assets/assets/images/banner3.jpg": "cc04abf95f2398d70b8bb4c2dc25336a",
"assets/assets/images/Estructura%2520metalica%25201.jpg": "92abc82d7255b9b038118b299c7da528",
"assets/assets/images/Grupo%252013.png": "8ed7906d985b6cd8f99920d6c55d1c8e",
"assets/assets/images/industrial%2520painting%25202.jpg": "c86ce169e6fcdba577565c07de895186",
"assets/assets/images/industrial%2520painting%25203.jpg": "f26f49073ee5ec700d9d138cb3a3609d",
"assets/assets/images/industrial%2520painting%25204.jpg": "2abe18922691ecbafb05426a26bf3ca7",
"assets/assets/images/industrial%2520painting%25205.jpg": "16e3382ac329188bfea321c9be3ddcf9",
"assets/assets/images/logoblanco.png": "24f49edf0a557361217e873dd5a51746",
"assets/assets/images/logonegro.png": "9b760ab743bf823923d76629367063e6",
"assets/assets/images/servicios%25201.png": "7e6ae987877de4b5d7a7819a80e3ecc5",
"assets/assets/images/servicios%25202.png": "40fac75956e5169805a26adf7250dbc2",
"assets/assets/images/servicios%25203.png": "c08d359b3d775e791c87b0ec2260e9b0",
"assets/assets/images/soldadura%2520de%2520electrodo.jpg": "00baa0917a62dab37ecd55ef2c65c90c",
"assets/assets/images/tipos-de-tuberias-de-agua.jpg": "97fb3fee18194a376d7d68c575d5fb4d",
"assets/assets/images/tueberias%2520acero%2520al%2520carbon.jpg": "caca8e21d71df73da39268eae2d61198",
"assets/FontManifest.json": "a1734d28f5be9a34ab73ffd127929199",
"assets/fonts/AgencyFBBold.ttf": "f0d9cc320ea56aec6a4d5e2651115af0",
"assets/fonts/Barlow-Medium.ttf": "6fcea11ee0a3dae626d94f5fce77d9cd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0c467ec5590bbdb71996cccace4dcf66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Favicon1.ico": "b8e51e4146d5af2049107e86d06da7b5",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a07bf5e61cae818b9c9e4c35af827b2",
"/": "7a07bf5e61cae818b9c9e4c35af827b2",
"main.dart.js": "2f1eb8f494185b5d7a99901b393b0af9",
"manifest.json": "14b848d7cec0272b33a52fa6efae1183",
"version.json": "7c48a1acb9add0e6adef1a2e32801ac6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
