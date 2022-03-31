'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0a3e1e264ed2c6af8175f224bebf5446",
".git/config": "c1d89cab949dfd953efddfa34e84689f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ddd3e903c1941d7acdc4d7cb61decd7e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e108d46de11a84a313b0594765d3e6b7",
".git/logs/refs/heads/main": "e108d46de11a84a313b0594765d3e6b7",
".git/logs/refs/remotes/origin/main": "1996c7a61454ae0748a1b3171ec38626",
".git/objects/06/de12c2af58bf13f26063d4fa59af21719e2407": "ec7380c6f41fe2b4e3d566c9d8f25852",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/17/5d7dc9e88f7d069210e81cba154355a7f62642": "30cf3cf881bcf40c1438ea6aa0fcf054",
".git/objects/1c/9b323ce8082dff57ca27ba26ad66870e5f2f8b": "c56a24530da455b4fc2734a451370883",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/e6654c565c909902665877d5457c8bc23b19f9": "8aa7f7cd999f13b07850d993792f6d96",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/29/a7ca378401c0786219003a5e5a67a60a9e5e6f": "64a6ca10c8a56c2b74b6b3eff302756b",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2f/82be15c1f2129d9d700199e72efdf60022b539": "b704d21309791280d9580abe87363b85",
".git/objects/36/dbeccf33fce31882da16794abe5b42604f7c9e": "4af6e521515cecf9dfcbc5711bcbc62a",
".git/objects/3a/8e1970d6bcba94f198553e4f488caec56f30de": "a76084eec0f263b212872e59739c7b85",
".git/objects/3f/90cc5b14dd7209ed525ee540be75db80e46eb1": "4372b7817a8758b225140ff430540855",
".git/objects/4d/3f6bf5c882ff86b305239dcb51fbdeceb9aa82": "7c3b36eb269bf227f9e5f1ec7b9807e4",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/59/7786b3b0bd234a0f65f9af4fece703a75115cd": "30666de11b9d45c64ddbfb7b35461dba",
".git/objects/67/ac8c5024c0307ad8647b8d9da2171607cd3589": "4101cf52cf9d7e09dc4208126ffff8d8",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/70/fa3c50abe5fbc853de05763d759b8ba9785094": "016336075586c500cc9df29663a136dc",
".git/objects/72/ef6374e61122bea727d60528859fa1f8f02fb8": "18f20a8c564372e5c3b31b5aff8ed33a",
".git/objects/73/ced2827f5734b29ca95a8a406cb88a0e698dc2": "38c686117f69a385684f6ce12cfa8b4d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/9c6afa2778d2d1e6d3d9abcf7070e1bb19f6f5": "a52abc6e474996938b56030169c8a2e2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/bfb80021f13de3fc523e5eb06b9af8af3b5f50": "1a39092bbf094857584c2ecc36a4004e",
".git/objects/83/049e210bd296c117fd7b78275a300240213f95": "d92de47309980ec2f371a62e49aa030f",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/88/0c470c0a4562b97262342f6b358c6441d67bef": "a36ac9d477adcf0b70b8bc972dd20257",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/930b6d0000572b35d697c5ee5e015193792c76": "bf2415d5756b5fa05869a0971c5952eb",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/94/dd0970bdd331ebb62410e9177fe3becd58e252": "3f10961c77d22e6cad0c7ec4adecec9f",
".git/objects/97/394432189286a26e595fae78a98d71792bb196": "15347ee0b015115078bdaf43bf683506",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/1f89fbefea989732417f48236cc0fff3aead20": "6c3ee30065208469f3550e4c2b91395e",
".git/objects/b6/1e283a7389560fcbbcad36c06989de0c917a14": "25245789f2e7fa7fb3b70ce8b0a39eb5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/960d062e1b5ee57569196d9b38cc04e1ee9a17": "cf0b4d108c2386adc90bc30be7fc2b67",
".git/objects/be/b0c5e4be130f73963765692f22821276e3fa46": "96d6b97e928ec0ef67551aa06039cae5",
".git/objects/c2/3d81cc9e0531a5c9de75dffffdc127ed9e7f07": "8454a37e757b2812c5b3594873ce8c72",
".git/objects/c8/57fe0550a2a1c6b12609ca764cc562e1a2c285": "bd2d8282f0763fa3a1a19e19650db5fe",
".git/objects/cb/f45570973586c72bb2cda87e4cb2eb83f32d0c": "b5123284fdf1eacfac7691656eec8c12",
".git/objects/d3/5635fa1e1e56c7c45618353b12d606493fd917": "f04c1ea17b5386c357b63dcfede6e6e4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5a40960586bc5a787c5431ae2fd178c890bfc0": "a560eff6bdd8aad76249d647fb0d945e",
".git/objects/da/1a088355345321d15f886a5fcaa5170000b41a": "2d61404689fb825f9e770ed91002417a",
".git/objects/df/9cb85f056431d8b58953911c197292405c97b5": "e37c978ff584e64a65b9f8a60b5ceffc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/d54d097726eb286522f95ef5410fd8851dc0de": "e693c9429369ec0bae83e04df22415c4",
".git/objects/ff/8d7d4a347f1d5307ffd96ca232dca8b6a31850": "5072023b3936819a7aeda32c476323f2",
".git/refs/heads/main": "5f8c11c24a1065353342589b8c336429",
".git/refs/remotes/origin/main": "5f8c11c24a1065353342589b8c336429",
"assets/AssetManifest.json": "90a0495ebc859636a96dee3a88c7e0c1",
"assets/FontManifest.json": "4420a11c7aa41439f72598e974b623bc",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Stamping-Nico.ttf": "d8cfb1b53c160528e819dffce2f0b075",
"assets/images/back1.jpeg": "9d016b828e789efef4baabc8fd377fa8",
"assets/images/back2": "c0727b95d6316739d285b0573879a4e4",
"assets/images/back2.png": "c0727b95d6316739d285b0573879a4e4",
"assets/images/capa.png": "a5bbe94e1c36283c2eaf2fc97267afde",
"assets/images/flutter.png": "c30236dd759f7f97d3586477046af7e8",
"assets/images/music.png": "eb536651ab55a181134a25ebdf578ce3",
"assets/images/orbe.png": "134f555bf4ef0c3062c9faf64303edbd",
"assets/images/telas.png": "351b3eb957abce94f7eb8b84f1ade174",
"assets/NOTICES": "3148729ebbe119b4dceadb3f709d34f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "53a741c59b2d39e91d428667f7b0b631",
"/": "53a741c59b2d39e91d428667f7b0b631",
"main.dart.js": "afc67151aef55a95e97ae5c0a5278258",
"manifest.json": "820992125c16e6387cb2dbe6bf757e6e",
"version.json": "ee68e2e217e48c590256594676e720c3"
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
