/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a22f10e54047f03b641445ff41bfa73"
  },
  {
    "url": "assets/css/0.styles.44111ffa.css",
    "revision": "d1c801059cd377e58df06f26a074cf29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4e6ccf5.js",
    "revision": "df4e5da9504f76107ce2c929aa6bf87f"
  },
  {
    "url": "assets/js/11.2777b637.js",
    "revision": "730f22b2b5f4a11760effa114505e494"
  },
  {
    "url": "assets/js/12.4a067d6a.js",
    "revision": "344e81c2432822c4be4d104e342f1d52"
  },
  {
    "url": "assets/js/13.174cb259.js",
    "revision": "1b9115d31df051f9bf5bf8dd27247589"
  },
  {
    "url": "assets/js/14.2bcf7b7f.js",
    "revision": "f05ed54523a95048963c5de7ef336942"
  },
  {
    "url": "assets/js/15.855f1b8c.js",
    "revision": "1737dc60f92488a99f80515cf8600c7c"
  },
  {
    "url": "assets/js/16.1df4917f.js",
    "revision": "90efc9337d5da7dbf68e0b210680c87a"
  },
  {
    "url": "assets/js/17.efa5af3b.js",
    "revision": "f4081ba790fd9ec4ee866bdc41497956"
  },
  {
    "url": "assets/js/18.f89ce319.js",
    "revision": "a5881b3749d8ddd246d23d9c85242711"
  },
  {
    "url": "assets/js/19.0648d848.js",
    "revision": "ce9af621ea2cfab48e63799d36fbccce"
  },
  {
    "url": "assets/js/2.5f974afc.js",
    "revision": "4c8ba430cbfed9ad18eb4ea7f6fff69b"
  },
  {
    "url": "assets/js/20.593efa88.js",
    "revision": "fc2ab0e064d27c36d4948cff11705e1d"
  },
  {
    "url": "assets/js/21.9937d326.js",
    "revision": "4306544058c64137a5b52c76c9f518b3"
  },
  {
    "url": "assets/js/22.ac939110.js",
    "revision": "52a782224613def7a2718dfe4de574ec"
  },
  {
    "url": "assets/js/3.605daa86.js",
    "revision": "e42f1f7e5398583c8c7836cf28895195"
  },
  {
    "url": "assets/js/4.17fe7f49.js",
    "revision": "f0b70362a728a6e153566f166c951bbc"
  },
  {
    "url": "assets/js/5.90cdf109.js",
    "revision": "7f63f65dbf52974a866bf500a0aaf9f0"
  },
  {
    "url": "assets/js/6.d9897289.js",
    "revision": "55c2e983017baf742e1b9de3fe7258f0"
  },
  {
    "url": "assets/js/7.31f97fee.js",
    "revision": "3dbd5190c6e0df9a7d730a81189a23c1"
  },
  {
    "url": "assets/js/8.09438130.js",
    "revision": "d80d424d041f548e058655944d2f1ffa"
  },
  {
    "url": "assets/js/9.d7c02753.js",
    "revision": "5d29eaa0ec6e4959cc6f73bebd30792e"
  },
  {
    "url": "assets/js/app.6ff58d3f.js",
    "revision": "bd340ba77f2f28f929a14dc73d9499ca"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "606f5ec33ac499670a15987b0a35972d"
  },
  {
    "url": "content/cloud-advocate/deploy-javaee-to-azure-1.html",
    "revision": "ac67ff56590667addf45abeda5f06293"
  },
  {
    "url": "content/cloud-advocate/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "82f8e209c4bfce50a05586aad0a37dc3"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "e193380e1e5f292ae09798b48d634cfa"
  },
  {
    "url": "content/cloud-advocate/index.html",
    "revision": "9ec12ea26ff03d7f31ee7362f58b2424"
  },
  {
    "url": "content/cloud-advocate/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "41180ff8e8f7b1c40dc6d268d6cc99ed"
  },
  {
    "url": "content/cloud-advocate/what-learned-ignite.html",
    "revision": "2831c8f3f90a7d1388f3ea2ac4899e00"
  },
  {
    "url": "content/index.html",
    "revision": "d872ce3aed61662b1e1af2752c873e47"
  },
  {
    "url": "content/tips-tricks/index.html",
    "revision": "9f0c27012bb4645f96bd38761524c788"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "2d951f0985849b639aea9059644f4b80"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "1af9b08ed39ee05f99f72f66ddcc997d"
  },
  {
    "url": "LICENSE.html",
    "revision": "1fed7ca6e612b306e611d99a59412f95"
  },
  {
    "url": "tags.html",
    "revision": "d39be6fd86baba1b03dbdafe11a63af9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
