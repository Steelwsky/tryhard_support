'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bba26a78cabefaf0756f7536bcfad60b",
"index.html": "fc8b4efa453145d7f370b0c7df6a6c1a",
"/": "fc8b4efa453145d7f370b0c7df6a6c1a",
"main.dart.js": "bb87e2560315a4b79596b9d299bc1441",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "dd83f9aa838920e889035b9b5b6f13cc",
"icons/Icon-192.png": "d4cf2a4942682fcfa01b1ea059bf2db6",
"icons/Icon-maskable-192.png": "d4cf2a4942682fcfa01b1ea059bf2db6",
"icons/Icon-maskable-512.png": "632fc23ef203a0b686ac73511aeadb22",
"icons/Icon-512.png": "632fc23ef203a0b686ac73511aeadb22",
"manifest.json": "87531207dc8e99613b3d4ff5ba7eba01",
".git/config": "992e48a2ffa16d9f028e5279f6e768a2",
".git/objects/50/6b121551a8d593bde7ce4da50853633f1d272e": "75ab335f20d63748e4e2de18cb1780c5",
".git/objects/68/747e832fbf2cd8f7fa4af14915c2a66fdc416d": "634ff4703f6815120f8e27975b1ef820",
".git/objects/57/185546bdcf0fd7a951e62c6badb0282d6fb9e8": "f34da63a78f6653bc8ad5634e24de276",
".git/objects/3d/89861e400a71a11ec15f268a9c138ef862c907": "44f9bcdd21b3fdad614297f6ef4c0a45",
".git/objects/0b/440307434ee3c2fb8ad0afca3c05726397549b": "d01dd328f8863a9fb42e914f594670ed",
".git/objects/94/9cb0840540f17d0bc52b8c838116bb7c4a88f6": "c264b5702107c420333ab76e41d0c001",
".git/objects/0e/116f1792288c4762ea1a3feb6e6fa77c004118": "4c35278aaf4c0b0d6f5d0535c697184c",
".git/objects/5a/52eb047427af37a8905dad80e2b0733a3c3403": "896d25edc4a12f545084641a927475a7",
".git/objects/5a/9bede9b39f227b78419f15a608e575ecc6a807": "b7448fcc26e6491269f35e90215e010c",
".git/objects/9c/92385ddbcfe26cc284cb270e5bf5bc0141c68f": "8614b434612130f4b874145622b54400",
".git/objects/d0/abdf39bb40b36b8ad6034880534c708511d20e": "24e612c5ce1e20f9b1aee1b4f01789a4",
".git/objects/a5/7204c7efc50e4c02ecec91baaedf0d4c955513": "3f8889c4813860fb3e7c99ed85efecac",
".git/objects/d8/fadb33f917238cb2650ac3d21213caf4a66b26": "b3de1c3320cc75b3ba61c218365c7fa8",
".git/objects/d8/61ab79fcced35c24a8fd3be4a439069d6834ca": "6318258fcbec28ec22de94654d036764",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c0/e7368a2ce9e89595f062d7b3357e52357fb31c": "46f37662abd5d214614d7378cb11c1b7",
".git/objects/c0/70f105abfbffda770b4bff9360ce7e6fc07121": "b99e6c713c3c5529b99c4027886ed067",
".git/objects/ca/8cf4879aebbaac967fd71e17ee7586aef004e9": "6aaa831b85fc9b7126b1c240187d65e6",
".git/objects/ca/8d6c501c111c18c91a476af398e5d2a8fbebe0": "8cd9bc0a2992cbcf5fd1d9c5369f81d2",
".git/objects/ed/57e5e00f9e639af8ada292d93a90fcb6914f17": "6233d45267cab5235b818fcf2d9a2b21",
".git/objects/4b/cfb9376b3bde1c3fb6439a9681c3dc9c74b293": "7014d4d6d6796a7e0da38a227e2f0a80",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/1f/02ebde2a3d97f08fd7b6bdf29fa3395021da23": "151a28360771d4e7a0212ae18d8a1a5b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8f/955dab7f43a699a20bb13f8b39b1f7b6377283": "860df6af1da071f058439d0d0962d6d4",
".git/objects/8a/b1142d9d661bd1da569c4ce87c0713ef0e7877": "b36a6bb7b809936ad2dca652f691f7ce",
".git/objects/8a/0d9c0f73c71bef7be94094824f8184ec6e387a": "8e50158a2df02e3f98d15a3a8b2a38bf",
".git/objects/44/713ddd0ac68d5cc4637e7fe26d9b1a95f111b5": "24c30f82c0cf04b6fd3cbad0f4b46d85",
".git/objects/2f/58e08affc17540a8cfb04c2a1007d535305db4": "4c2fb9a65bcd227785ba737968e13ef8",
".git/objects/00/b5e3360b8cc4623e353a83be0f12961ccfdbe2": "d5d7883afc3efb83716252a3f8a42df4",
".git/objects/91/bf336163533ae3ebb2df5dd8a1ebb3b38f70a4": "2e4f959d6c9917a05965cb6b5d231c96",
".git/objects/53/19a6f7ed7578ca2fcf6e5aefb05750f3cd176b": "2ac591240edb78bda86f19664bfc7b24",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/97/1d995997c286ee9afeb4bed15130cbb3b8fbd5": "377909cb0d88295105af237ee5f29bb0",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d3/bb7193e25bd935dea5f972701e77669706208b": "6a541224d1a614dbe69c113b22d03e10",
".git/objects/d3/ca3735bb0475a9f839e61cac930a727369837b": "878db0eb0dc46cc47bb10749e735e385",
".git/objects/af/e0e3c84801f496916501fa6e788ad0408dc233": "0e19cea4abbbb9dca0a2a07474e9a1ff",
".git/objects/db/11fc746ff55bd8b81f54d3c8e489620a9570dd": "9658e47e59212a35903da31acdb4ebe1",
".git/objects/de/3781880dec303ba24d5a478fbb68e9015c15dd": "b6f9845d4fe64b5401c7b36b3d7397cc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/0e96040429cd894c81fbdbda584d94bf532370": "60eb99839ec391e8083ab3f1e7dc66c3",
".git/objects/c3/e41d5107d7311df1d856d04aae9a6635202aa2": "90fc3f2730f584adb81e65fe3d85591c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/fa/f20734f15655b0784ab1852a42b33d75641a3c": "06cb38fedc70ceedef35d56e851d1e14",
".git/objects/e0/0aa378ec82d63507e82692fbf6f1cc63d6a644": "e518efd08ec7de8294270632d152de2f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/7d27b896aaf737b44657eb4d5c9944afe870dd": "861b00fa49819e4bd4f1bff164c2ec55",
".git/objects/77/4f920cddfc7aeef0760f524f9bbf555a52fa67": "f588038c9b7a62a17ce70988770410c9",
".git/objects/24/5f0a91fe1abb9c022e4f1f8bade869e830af71": "19a8425f0e573af003658d38e8ccfc5d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7f/4193b5d2b1499fe80de841a1039266f330a908": "186a7619c136530df4bd2ee3d183ffc5",
".git/objects/8e/c9671839fafba871d8a459d36fcb2cd71f9f72": "3703726eb0a84c04a8b4640be293048e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1bcbc7860addd8749d0491f061a85892",
".git/logs/refs/heads/main": "c652b49e439ea86fe0b808b56ff1ccd3",
".git/logs/refs/remotes/origin/main": "ec7480a73482eac9aa34eeca12692880",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "54c799fed45c6ea23ffb517c317b8564",
".git/refs/remotes/origin/main": "ae57f5933662012bc7a149900078800c",
".git/index": "5e40a25501b79609c2ef49736bb05d57",
".git/COMMIT_EDITMSG": "edf1eba65907bacbde6b406900e52bf7",
".git/FETCH_HEAD": "129fc9cc3b4f1f85ed8ccddac1c7fab1",
"assets/AssetManifest.json": "682ad1cfd84eeb2fbc909826145b3d8f",
"assets/NOTICES": "d97ac0aa1584e45dba2b56f2edc69c03",
"assets/FontManifest.json": "772d4e7155c5e79fa292a950f39e8e66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "5b03f70cfff997427ab8f18379494522",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon.png": "887988483c92d380d00d27d2f69e9fcb",
"assets/assets/img.png": "d19da534b2dbf985323c5f4fd04d39bb",
"assets/assets/logo.png": "1eff8bb47ec2c46bf6d4b42e25458e0e",
"assets/assets/fonts/SairaSemiCondensed-Black.ttf": "450165429a943dba451afe6a572b32bc",
"assets/assets/fonts/SairaSemiCondensed-Medium.ttf": "955ab583fce2a921d5de2cc9da18524f",
"assets/assets/fonts/SairaSemiCondensed-Bold.ttf": "57b6b6335405eddcc8132ed222c81cb3",
"assets/assets/fonts/SairaSemiCondensed-Thin.ttf": "625f093228e19b118e32d31b39661fa3",
"assets/assets/fonts/SairaSemiCondensed-Regular.ttf": "2852694b57e3ad5f16529e623ecb1c39",
"assets/assets/fonts/SairaSemiCondensed-SemiBold.ttf": "a78d79f641f1a5a701f4c2e4f30d9273",
"assets/assets/fonts/SairaSemiCondensed-Light.ttf": "7baa3c81b28d21dd2192560c04aaa4f3",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
