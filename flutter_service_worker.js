'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js": "4856a6883de2dd1b21c85ae829c8b242",
"version.json": "d6d4f499b644c152b19f89acd820d57e",
"assets/assets/icons/arrow_drop_down.png": "cb89061be0cdf94fb4e89b37e9449ca3",
"assets/assets/icons/arrow_drop_left.png": "43999c705b1daa218ea0ddde08d41dd9",
"assets/assets/icons/arrow_drop_up.png": "74cc9702dcd1951aa224c74d49a97f4f",
"assets/assets/icons/arrow_drop_rigth.png": "8fb9acfb4836d28aecae25f44897a688",
"assets/assets/icons/flutter.png": "134c20fce1144d5bc15a081935448a62",
"assets/assets/icons/github.png": "6b93f90c8bb61dcd4a4cc6dc879f9349",
"assets/assets/icons/github_png256.png": "a1052e37d94f4772ab5d481ffc4a21b4",
"assets/assets/icons/handwave.png": "945966e1e2e2a9015825ed6cbe97648f",
"assets/assets/icons/instagram.png": "5308f52f9a75e8b6cc4d92173304f567",
"assets/assets/icons/icon_flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/icons/linkedin.png": "6eb93795997b9dba0fd01d710559872b",
"assets/assets/icons/markdown.webp": "eac4f21018dd0534707621824dda0885",
"assets/assets/icons/twitter.png": "49bd325c5c078d42dd39979579c08aae",
"assets/assets/icons/yana-darelova.png": "f128791c5cdb9e1fb151b8cea1196e89",
"assets/assets/images/project.png": "d48754d426054a34ad5289f58e03a767",
"assets/assets/images/logored.png": "d6a70ba506606cb9317ec76751019966",
"assets/assets/images/redrodrigo.png": "ebc2fc1dedfdb712f7e54f47fd281d0e",
"assets/assets/images/orbe.png": "98e5077a897739b76b690c52e08095e1",
"assets/assets/images/breve.jpg": "cf63102a27710c5df552202ae682d198",
"assets/assets/markdowns/intro.md": "e426e8140d6a810bcc1c4f4f9baf457e",
"assets/assets/markdowns/detalhes_educacao.md": "f6872487d2b9ae6dae361dd42609fa7c",
"assets/assets/markdowns/interesses.md": "d500e4aa5ec8999c58741f4c52c4704d",
"assets/assets/markdowns/pregressao_carreira.md": "6f0a78fdd2a99dba16b17c53094446e6",
"assets/assets/markdowns/conquistas.md": "1d7a3040ff7068e8d8e219ad35e9b1e7",
"assets/assets/markdowns/skills.md": "a485e7323afa0b32f31cc80d8878d73f",
"assets/fonts/FiraCode-VariableFont_wght.ttf": "ca3ebb34ddd32492162f9ff9b0ab1345",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "82235e11b6da1a40967e84dfe2ee33df",
"assets/FontManifest.json": "e6d3d2f95424251fd7e08a929352ce0b",
"assets/NOTICES": "1280cda25b3eaac977e37a1533cc183d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logored.png": "d6a70ba506606cb9317ec76751019966",
"icons/red.png": "df41128876b41bb0f95a5fa10b6da77e",
"index.html": "b2139aea0c35ee579dd239ba414900ad",
"/": "b2139aea0c35ee579dd239ba414900ad",
"manifest.json": "5319fcca24db85c0d60111a19ba18eee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
