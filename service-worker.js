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
    "revision": "a9d8887ee18f2a9030d00aa024615e9e"
  },
  {
    "url": "assets/css/0.styles.42373c9e.css",
    "revision": "2e4323fd5f1421ab61bbd1deef8744a9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41dbd96c.js",
    "revision": "d35947b6372b678128cd9760ad324d64"
  },
  {
    "url": "assets/js/100.6a22a43b.js",
    "revision": "1e4c9704a626a45dc4d72b5ea352cbe3"
  },
  {
    "url": "assets/js/101.4c2772ce.js",
    "revision": "77e44d39b5180743e34ad279a9c7bb4a"
  },
  {
    "url": "assets/js/102.dd43ddb2.js",
    "revision": "af536d511f40cbc68350b9184eda9453"
  },
  {
    "url": "assets/js/103.89c682e8.js",
    "revision": "de59c9aa0d8d9dc0e2c3f2c546e8ebdb"
  },
  {
    "url": "assets/js/104.f41e3837.js",
    "revision": "978508a2b9e593902e3daf2bc9150a5e"
  },
  {
    "url": "assets/js/105.41f77b62.js",
    "revision": "485068c8c07e89f72bc51c4407287885"
  },
  {
    "url": "assets/js/106.3fc0a1f1.js",
    "revision": "8b9221d3762787ec3747d43749a8b8a0"
  },
  {
    "url": "assets/js/107.83aed4aa.js",
    "revision": "d07f339c3080b4d9a53f22916629badb"
  },
  {
    "url": "assets/js/108.6bcf1f4c.js",
    "revision": "e5ec96dc7bbbb3f58868953175737b2e"
  },
  {
    "url": "assets/js/109.5d9ea512.js",
    "revision": "119a9e3f15bfddc7eeb2f7c12b6c41e4"
  },
  {
    "url": "assets/js/11.59051f17.js",
    "revision": "fc636188dfaa5776ac9fbece1167d6c1"
  },
  {
    "url": "assets/js/110.59622260.js",
    "revision": "819a2e76b4fd086462d48bd713bcf9bc"
  },
  {
    "url": "assets/js/111.82aacd80.js",
    "revision": "6c03502c73a3eab01701a084be014f61"
  },
  {
    "url": "assets/js/112.b8a6834d.js",
    "revision": "2a6a72a7772636cf63372d7eeef9c805"
  },
  {
    "url": "assets/js/113.bc961dc5.js",
    "revision": "85bafead6ab5a1af66ab8c8a30aa612f"
  },
  {
    "url": "assets/js/114.d91c2b3d.js",
    "revision": "f6a2bc0f6c66aa61ecf3f6b2d3c9a8f4"
  },
  {
    "url": "assets/js/115.d1d9c73c.js",
    "revision": "4931f9d22279912780ae2bee6b28ed04"
  },
  {
    "url": "assets/js/116.a7bbc54c.js",
    "revision": "74f0e721839f9a4723f3847cef7b25fe"
  },
  {
    "url": "assets/js/117.0f6bac51.js",
    "revision": "3f7a10d453603fa99710d780958b8b65"
  },
  {
    "url": "assets/js/118.22019263.js",
    "revision": "edb483420398e4b14c22603a9054318b"
  },
  {
    "url": "assets/js/119.256a8727.js",
    "revision": "16c8b578c7d36025dedc249f0adcd1c1"
  },
  {
    "url": "assets/js/12.228741a5.js",
    "revision": "b4f7be223f3adb8ca92f9889333105da"
  },
  {
    "url": "assets/js/120.363f8c8e.js",
    "revision": "d2f1762c6ff9fe05e1fbe71cf9cbd55c"
  },
  {
    "url": "assets/js/121.e136467b.js",
    "revision": "e83980ab9fe2145b1485ae39a665e04e"
  },
  {
    "url": "assets/js/122.c9e7c5da.js",
    "revision": "ba467d0e14c0c84b25f9f89acc337757"
  },
  {
    "url": "assets/js/123.11e9bcd8.js",
    "revision": "f5baabceaae961ed6ea2375ff94f4216"
  },
  {
    "url": "assets/js/124.b476d09d.js",
    "revision": "2e06750a838d9640c84aa618370876fb"
  },
  {
    "url": "assets/js/125.6ad01b54.js",
    "revision": "6aba71b66eb03e6b7a968ec1c957a9d1"
  },
  {
    "url": "assets/js/126.8f53687a.js",
    "revision": "5d75569d50ba236c35cae2683a93568b"
  },
  {
    "url": "assets/js/127.5e49c169.js",
    "revision": "63074a3fda82e06b5900bc84dde29be6"
  },
  {
    "url": "assets/js/128.11614fd9.js",
    "revision": "8aa4ce6807defef64c827913a9823e8f"
  },
  {
    "url": "assets/js/129.e0e77449.js",
    "revision": "b6c8b1f3ec076dd412cf2f720fad7a78"
  },
  {
    "url": "assets/js/13.1e8df012.js",
    "revision": "b13c172102ef83747bdd12b42f691c75"
  },
  {
    "url": "assets/js/130.53aabc7b.js",
    "revision": "cf14443741bd8ab33153e11fd0b17469"
  },
  {
    "url": "assets/js/131.3b916617.js",
    "revision": "71cfd7864ff70f1add16fb7deb70ff04"
  },
  {
    "url": "assets/js/132.c046a2c4.js",
    "revision": "db869c5e7e4b17b211a74e77639a6c8d"
  },
  {
    "url": "assets/js/133.d0264147.js",
    "revision": "5bdd2f0142c5c6cb4b7cc5e2aae570a4"
  },
  {
    "url": "assets/js/134.b3e5ffdc.js",
    "revision": "4522512355472a80d1a84a667f757c56"
  },
  {
    "url": "assets/js/135.46286965.js",
    "revision": "25cfadb7586cb5ce8d9fc88d1b7feef3"
  },
  {
    "url": "assets/js/136.b8d3df9f.js",
    "revision": "6eb92fb2104f0c68e48efffbbf73e5a6"
  },
  {
    "url": "assets/js/137.53fc330b.js",
    "revision": "5e6efeafcba4e50afe93d90d1b22ae82"
  },
  {
    "url": "assets/js/138.a9174b9e.js",
    "revision": "ea93e23db3469b3d0b14fcc55decff6b"
  },
  {
    "url": "assets/js/139.2ca5361c.js",
    "revision": "dc4785ee0ee83921f0f0278202722cea"
  },
  {
    "url": "assets/js/14.febfef5a.js",
    "revision": "da3bd47e1b553417caa8467a6423479f"
  },
  {
    "url": "assets/js/140.f798ae25.js",
    "revision": "615becbb864ec61f5205151c6aa929a2"
  },
  {
    "url": "assets/js/141.8a6e36fd.js",
    "revision": "d5d177df9ccb17c6661c3eecb3c2d470"
  },
  {
    "url": "assets/js/142.8fb39d68.js",
    "revision": "c8fb62fd34dc52b78af1dfeb89cc27e4"
  },
  {
    "url": "assets/js/143.62c1d509.js",
    "revision": "37279b9390fda356c59e425f72fb7a63"
  },
  {
    "url": "assets/js/144.a052aa7c.js",
    "revision": "b9d3db01cd33312f9429ee6ad1cf0584"
  },
  {
    "url": "assets/js/145.7546262a.js",
    "revision": "19cca7780002e9f5dac97fd07e1b0cd3"
  },
  {
    "url": "assets/js/146.d316f522.js",
    "revision": "9c8df4e9072b192a175207b4d304e002"
  },
  {
    "url": "assets/js/147.ba4b6b6a.js",
    "revision": "b457164187675840360d1506f45b2891"
  },
  {
    "url": "assets/js/148.6a109d2a.js",
    "revision": "54f9af3020072c5b5bf48d6c2352851e"
  },
  {
    "url": "assets/js/149.7c0632c5.js",
    "revision": "e50e9a111e2ed62c0a156612a9bfc30a"
  },
  {
    "url": "assets/js/15.ec15ac92.js",
    "revision": "6b885cfee0afac6125e6e3d49353a546"
  },
  {
    "url": "assets/js/150.45b46d44.js",
    "revision": "4e28161d8fad1f7a71a9a557d6993e07"
  },
  {
    "url": "assets/js/151.d104651d.js",
    "revision": "dcf09342a42ecde50bdf8744c2fabc47"
  },
  {
    "url": "assets/js/152.4f2c4d2c.js",
    "revision": "3e45b8c2023955870c0be6ff3f6a91c2"
  },
  {
    "url": "assets/js/153.b66ed7a0.js",
    "revision": "07621e1315a6a70729ee554d57938993"
  },
  {
    "url": "assets/js/154.7f4f8cd5.js",
    "revision": "2bc9a23d68a7cfcd1e521f3a8065f376"
  },
  {
    "url": "assets/js/155.cdaf5c57.js",
    "revision": "fc3a8d317635d3f194cc750f6acf6171"
  },
  {
    "url": "assets/js/156.f64955fd.js",
    "revision": "ae8e74da83a8fa6da61217a525b4adcb"
  },
  {
    "url": "assets/js/157.22fb2059.js",
    "revision": "0af8dca27420f6a4659ba6f9926d865b"
  },
  {
    "url": "assets/js/158.3f1284f1.js",
    "revision": "9de60d87e8a55cca9bd1c223c79bfd72"
  },
  {
    "url": "assets/js/159.db1a0a87.js",
    "revision": "3a72e2efaf1d5138f8d069027bff10a7"
  },
  {
    "url": "assets/js/16.20b6666b.js",
    "revision": "957762fb1076ac233993547cc4846f16"
  },
  {
    "url": "assets/js/160.952689a9.js",
    "revision": "c8d7d0a207c99e71a329dc6dab045f43"
  },
  {
    "url": "assets/js/161.0154148d.js",
    "revision": "bba32144bd7f6a8be3896f632590f480"
  },
  {
    "url": "assets/js/162.8d2c7b86.js",
    "revision": "4150b863971f0b0c39a5eb91d20a896c"
  },
  {
    "url": "assets/js/163.56ab1a17.js",
    "revision": "e54fbfc9bb7ab0e4de1ad74b934e3a86"
  },
  {
    "url": "assets/js/164.51d7be13.js",
    "revision": "0f03b4a6cdae9f48cfb46b0376a2a37c"
  },
  {
    "url": "assets/js/165.4b4ae73d.js",
    "revision": "2659500d6270aa3cad649507ff2efabd"
  },
  {
    "url": "assets/js/166.84f5b4f8.js",
    "revision": "25e5c266d1662541dde5d89053af7ad6"
  },
  {
    "url": "assets/js/167.64ffe161.js",
    "revision": "7e2ffd1410fbc342dec5d68ac68a5279"
  },
  {
    "url": "assets/js/17.c2e9a215.js",
    "revision": "f060afb9f290c46cce986c7829eb1cad"
  },
  {
    "url": "assets/js/18.57746ff0.js",
    "revision": "7b1458125ed64a89c106719746e0a1c4"
  },
  {
    "url": "assets/js/19.e636e2f0.js",
    "revision": "c8e535df9a11e906975c97fd6a40bfed"
  },
  {
    "url": "assets/js/2.f2881f60.js",
    "revision": "caf7f1967295c3d438c091701432371e"
  },
  {
    "url": "assets/js/20.8959fb99.js",
    "revision": "f43ea04162b8efcde70c3b9fd7b36f36"
  },
  {
    "url": "assets/js/21.843f2878.js",
    "revision": "f8030561f820a0e5b746bc839bda37f5"
  },
  {
    "url": "assets/js/22.0260b0a8.js",
    "revision": "a062be4c2b2d77a0f15c169585575a1d"
  },
  {
    "url": "assets/js/23.a0ff7a4c.js",
    "revision": "de12b7d5e78757795d43da8584dbc153"
  },
  {
    "url": "assets/js/24.fc19ac9f.js",
    "revision": "f159b5427c3f8110492d02a91da41993"
  },
  {
    "url": "assets/js/25.84c98456.js",
    "revision": "9ca633430077683f02ef2627105f7df1"
  },
  {
    "url": "assets/js/26.acb20f2f.js",
    "revision": "f274dfb835ebdd2ec534df2e7b4d52c4"
  },
  {
    "url": "assets/js/27.5bb12904.js",
    "revision": "f0eb09370afc9a62c8dc4d9974b4edf2"
  },
  {
    "url": "assets/js/28.4361691a.js",
    "revision": "3b2f90c9a0fa1aeb4cfe40d50b0e8dc9"
  },
  {
    "url": "assets/js/29.6eeddad5.js",
    "revision": "d061361e00a1cb16419d9340f1dd7f15"
  },
  {
    "url": "assets/js/3.2482c351.js",
    "revision": "d5ad98dc2620addb133fdc9f36d7280a"
  },
  {
    "url": "assets/js/30.29829b00.js",
    "revision": "675ff50564e4b6e235791fbe93fb3ebc"
  },
  {
    "url": "assets/js/31.3760ed61.js",
    "revision": "9370058084b922b70af9190335e93f1b"
  },
  {
    "url": "assets/js/32.4842452d.js",
    "revision": "f12ba3c09a819fe1193d1b1d2904dda5"
  },
  {
    "url": "assets/js/33.1f557708.js",
    "revision": "90199c5c8755b797a524c55da76dc6c4"
  },
  {
    "url": "assets/js/34.179bca21.js",
    "revision": "3f657358ddf39b6cb2039730d0bce9fd"
  },
  {
    "url": "assets/js/35.a1980271.js",
    "revision": "b811af908b5a77739666e5ca81f756c4"
  },
  {
    "url": "assets/js/36.1e61213c.js",
    "revision": "4d23d91ceb74d669321436d12fcab78b"
  },
  {
    "url": "assets/js/37.caa1a215.js",
    "revision": "ba47c4ac07aef6b8f4106df027dd3d5e"
  },
  {
    "url": "assets/js/38.292e7b0d.js",
    "revision": "ab130696607daac8ed4b5a5308641ac1"
  },
  {
    "url": "assets/js/39.8b286afa.js",
    "revision": "05d576134e88882e9d252ad1aa7393ff"
  },
  {
    "url": "assets/js/4.6561383e.js",
    "revision": "ffc8e5c537bab8ee1f15c3cd9bfc8f3a"
  },
  {
    "url": "assets/js/40.225f31d1.js",
    "revision": "3540a9284c688d73016f89706bbb9bf8"
  },
  {
    "url": "assets/js/41.9d7c6c31.js",
    "revision": "85c72604a388191cb85f27a8c397436f"
  },
  {
    "url": "assets/js/42.bcb8e51b.js",
    "revision": "ddc8e1e3b0f37d638085fce021652d23"
  },
  {
    "url": "assets/js/43.4d5c1e8d.js",
    "revision": "a6df927aafa1602f6e443c6ed2cfe6c2"
  },
  {
    "url": "assets/js/44.fa533f44.js",
    "revision": "f463038251105529d35ba5c65d5a0b94"
  },
  {
    "url": "assets/js/45.fb5b787d.js",
    "revision": "f6abfd121553ae9dbec7328730d2de6a"
  },
  {
    "url": "assets/js/46.9e5b1ed5.js",
    "revision": "6065c57c49cfb98189ec2561e8e7d53c"
  },
  {
    "url": "assets/js/47.66f52936.js",
    "revision": "808be0063338e454c1c5bbbcf56fb373"
  },
  {
    "url": "assets/js/48.9e8e0eea.js",
    "revision": "dad7469e3237e20592363a025831a6e6"
  },
  {
    "url": "assets/js/49.d1a131bd.js",
    "revision": "8b1c25b0ed73b124a2f62c5ca38cc942"
  },
  {
    "url": "assets/js/5.a692a018.js",
    "revision": "41db3e91d2c6c18dc98238540cf5de91"
  },
  {
    "url": "assets/js/50.0997f7ca.js",
    "revision": "90825f8f9bbee51d4a4bb88a0de6e0ae"
  },
  {
    "url": "assets/js/51.ba22fc5b.js",
    "revision": "277d1f8a19ba1c4eb728825af8ac400d"
  },
  {
    "url": "assets/js/52.1a949406.js",
    "revision": "1c71a25a808180caac65287682264f4c"
  },
  {
    "url": "assets/js/53.7e3f7c46.js",
    "revision": "2ad78aba9830ba4775fa92ff4cfa402a"
  },
  {
    "url": "assets/js/54.d554d904.js",
    "revision": "ce43bb4e2bc9bb987b0045d17ab8d783"
  },
  {
    "url": "assets/js/55.c158d369.js",
    "revision": "15bb47fab7ed4a99ec10a4f86f2d3b9f"
  },
  {
    "url": "assets/js/56.df00fc74.js",
    "revision": "3d86592aaceff16fb824a8a7c705672f"
  },
  {
    "url": "assets/js/57.53f0ddb3.js",
    "revision": "2f3c071d03d86fea64ca0cb34e8326b5"
  },
  {
    "url": "assets/js/58.07619a0b.js",
    "revision": "fbd85404416efeb923915bb549317fd2"
  },
  {
    "url": "assets/js/59.ece1d426.js",
    "revision": "3d2f3e4d45a48ccb05f261460efd28e1"
  },
  {
    "url": "assets/js/6.f2db52e6.js",
    "revision": "8b0893d3aeb1b192a8d753a11fd3f0f9"
  },
  {
    "url": "assets/js/60.0037383f.js",
    "revision": "544609eb13446b08b591fd5c21671838"
  },
  {
    "url": "assets/js/61.592f5a55.js",
    "revision": "4725ff213165f6cb83319be92bd9c32b"
  },
  {
    "url": "assets/js/62.75c749d7.js",
    "revision": "46895f89e6153f2ece7632dde36937e8"
  },
  {
    "url": "assets/js/63.3b4a3976.js",
    "revision": "375d8e52d3d28260c7fbf819c226f0af"
  },
  {
    "url": "assets/js/64.f27707c1.js",
    "revision": "334a9119b0fb330b9c7966bf0c9585ee"
  },
  {
    "url": "assets/js/65.465f912d.js",
    "revision": "cbb01f07fb79e78ac17f6e37f8f264a3"
  },
  {
    "url": "assets/js/66.7919cd15.js",
    "revision": "e3dfc7f4360923c11c9e96814f80ae5b"
  },
  {
    "url": "assets/js/67.adc0a75a.js",
    "revision": "a9ffd4671004cefad63663502ab1f149"
  },
  {
    "url": "assets/js/68.a96d0770.js",
    "revision": "1e1834c607fd5dff4254346abe19c954"
  },
  {
    "url": "assets/js/69.68a7d7fd.js",
    "revision": "3cd04ee0357158123dae7486057707a5"
  },
  {
    "url": "assets/js/7.eee03784.js",
    "revision": "072ccfc800e021fbe4f442bc867fc7a7"
  },
  {
    "url": "assets/js/70.82d609b5.js",
    "revision": "b0f95d56e4dc9d01c3fcc9a6c13ab923"
  },
  {
    "url": "assets/js/71.548aeea0.js",
    "revision": "1ecb5a686e27725bfc828c8ee7d10b59"
  },
  {
    "url": "assets/js/72.3cb4b134.js",
    "revision": "96dee4feded7c1cdfed47a6a8350c52c"
  },
  {
    "url": "assets/js/73.23f4d7d7.js",
    "revision": "428e9ecd9d4e75037e81d49703567ed4"
  },
  {
    "url": "assets/js/74.71a8ee7e.js",
    "revision": "c75802cef5dd178bc9b7e164c421c49d"
  },
  {
    "url": "assets/js/75.b612425d.js",
    "revision": "5d1de15382ed228b1295655f0a0bc0c1"
  },
  {
    "url": "assets/js/76.14e0aa96.js",
    "revision": "04c7a49ae9e7bad819802140ad47ec30"
  },
  {
    "url": "assets/js/77.be97536b.js",
    "revision": "dc6256cdd92402f3a741dee99fc091a9"
  },
  {
    "url": "assets/js/78.d868e135.js",
    "revision": "516f03dabc5faf51981d2ca21a0352cf"
  },
  {
    "url": "assets/js/79.67bf7af8.js",
    "revision": "4d0e9e96507c3bebbb8a8ca74b5e97cf"
  },
  {
    "url": "assets/js/8.10bee0ee.js",
    "revision": "08542b26ac3fd0ae7fc7ea11c972bef6"
  },
  {
    "url": "assets/js/80.3cd53a17.js",
    "revision": "ddc901ba06638fa68ad162459c6c567f"
  },
  {
    "url": "assets/js/81.cc766dda.js",
    "revision": "fa1d1998bdf63dc6c7c951b78d0b6b3c"
  },
  {
    "url": "assets/js/82.7c1c4a16.js",
    "revision": "bdc308b4ec36287173c324239f164b52"
  },
  {
    "url": "assets/js/83.26d3d54d.js",
    "revision": "6a8eff1835a11555585df715296f403f"
  },
  {
    "url": "assets/js/84.7f6cb376.js",
    "revision": "c45ac4f368e61e83453335c1ca66059a"
  },
  {
    "url": "assets/js/85.a4e85829.js",
    "revision": "9ccdcb146284e8b4725611c3ab53b352"
  },
  {
    "url": "assets/js/86.4d8fa898.js",
    "revision": "9b67cf59bcda0d9beb8d3b638b004e17"
  },
  {
    "url": "assets/js/87.84c76a53.js",
    "revision": "67e789594ee5c49da85a2d2ce8fb57b5"
  },
  {
    "url": "assets/js/88.a06aeea2.js",
    "revision": "bf3c4f0986c2a231082e13ef87865263"
  },
  {
    "url": "assets/js/89.5dfd4600.js",
    "revision": "5f7b3b4a8c6d3dbea93341d68445ca99"
  },
  {
    "url": "assets/js/9.70045519.js",
    "revision": "c01655b448188d35951840107de816d2"
  },
  {
    "url": "assets/js/90.e623bcd0.js",
    "revision": "8063966d006f6883a9916fca2ba17acf"
  },
  {
    "url": "assets/js/91.bb2cd9f5.js",
    "revision": "33b9108b0b7a1f0669d12aeffd432baf"
  },
  {
    "url": "assets/js/92.2d2dba4d.js",
    "revision": "bea6e3d3420f799ab5a3714b9ee18872"
  },
  {
    "url": "assets/js/93.92e36aca.js",
    "revision": "7c39335e9d7ba89ca434c367a24c8dcc"
  },
  {
    "url": "assets/js/94.f5e39a45.js",
    "revision": "d4f590091ccc6645577c53fc9fb3e5db"
  },
  {
    "url": "assets/js/95.4207a081.js",
    "revision": "91d27dc7ceea9baa9cf3e628b295166c"
  },
  {
    "url": "assets/js/96.3b4e2da1.js",
    "revision": "482ef62a0329d1c91b64c01244cccd46"
  },
  {
    "url": "assets/js/97.5f195684.js",
    "revision": "12622b36f300ed89f8b453110298f17a"
  },
  {
    "url": "assets/js/98.26ac30d7.js",
    "revision": "2841c05e7cbcff95a2022daa8dbb675c"
  },
  {
    "url": "assets/js/99.831e01fb.js",
    "revision": "ab038fb4b2f09fd99fa175542d75f581"
  },
  {
    "url": "assets/js/app.9d47bfcf.js",
    "revision": "ea0615108a7f716ac9c3be50de1133b4"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "83408b51aabda97d58aa48ee684d33f9"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "1a14ba8a7506d14f33ae23f6270fa846"
  },
  {
    "url": "guide/index.html",
    "revision": "2baa1c6716947e1e755375a6fe727f6f"
  },
  {
    "url": "index.html",
    "revision": "d6f68ae5266cdf78a25b5537f89e1f75"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "56f52e471469de5f75d7f3d55f729c94"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "474eca9c7cad72749edf1180ff451cc7"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "f45ee1bd792998044abb9842db4f2ab0"
  },
  {
    "url": "notes/待整理.html",
    "revision": "ad11902f90af713f837bd3a9ebb51079"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "f629d8e80f1803833b8cf83144278281"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "468c872453b01f51283c87ac58c6cfee"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "86c09968d286db8f6834d61b85834d95"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "3e4c0499482f00159c8336b2bdb1677f"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "ac1fe77891e3786f4a9f35632d12568c"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "2a0fbf11d514c016d1fe1b720be25369"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "ae358262d67fafcb8caeddc7901dcede"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "bd642e79fa265e495bde9fc8527cc2a9"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "ad123b50f9faafb8709839c3f82d4883"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "735bb11593a21d9731b579f0232960a3"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "1125bc644ff1d963531514d303116355"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "d9e519ebed99af2ac331737b8ebf9925"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "3ea7a1fedd180baa2f8b05d84455b4ce"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "b54f6f979e64822e601697b78a8fc045"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "6a952258cd05a48046661de1dd0f0d61"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "ce25181659504d467ed68427694ec507"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "97f77e28d832a3898c894515adab9c89"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "033c873d865ae2f711909da7ff0203c2"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "addd3bc97c7a0247f570f9dfba813134"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "e33873b17ce0598d3f9c44c8a5580f47"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "f4943836ce1f8a7536aace1353e48212"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "942da5fdbdfd31bcc8de9378b31d5617"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "9a4527cd1f9af46a33cfab0f5b7487dc"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "256a66fa586fb9a145ee0d24fb29c356"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "b369db987c1f11e2366a5652b0f01bed"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "6ca206ffb198a2be8695b10106088c36"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "806e9531ae75cfc1a8105e2f33ac9669"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "d0e05b38c70598e3b422b09e453db1ce"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "56f46a579f77620eb907904f2ea42cfd"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "2e027c0962b76a7d2e3b479e96710f97"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "39cd2ef935d3841e59682f602b0ce1c3"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "60cd00e1370a771ef884d88a27d80eb2"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "a0b8da61d301e120ead780fecb7665b2"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "e8e91c369f818263c41eb1f9c556f10e"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "4a3897192181749857b6609c5645ad82"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "c57b6d9892ae2b3020adbcf2963cd4ca"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "d39f0cb26b7a5acdddbf3586f674281f"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "334219a9560a50f2faf37b996bfbd163"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "cc61cc4366b44b7b1e85e2cf3e2ab8ee"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "8d3b1aa2a3eed9bb82f46454d1296c92"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "cc42de23f8f3adda9ac3c74ab81c4508"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "a74cc168d754840e62a10a9c2c4be869"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "8d8b59dfa8f43efe2631297578eb115d"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "cad34616ab258f6a2e8732099311065e"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "117ffd063d00f22b8095587356b02c1f"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "10567654ac4cea6b0d84c03012e5428f"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "5fb19458229b0b4f2168529fe653f87c"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "f610139fb80660df41aaaf99eab1c453"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "4bc871d6b176a3b738389ede1beb3203"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "f964550ae3276986b8e34acf73daf68d"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "4816f806ffeef6e3c231b6d8a0783e51"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "c015f9549292701f81b0e964d699000c"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "aba98b2a5d0a25fdfde9436494992704"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "778e64bad7dc292b02f207402d5fb98b"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "0e37a07d3add8f1a7b88cd249cc676b5"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "7de29feee66644de6691202aa8b09b7d"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "0194811e86750a1fe716cc9ee267e5ba"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "7a7ca1dc18ae19b942cbabefdeb29d9a"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "1414430cba3827606b3db57b69adc976"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "b2c804bd8fe7ae4a9549b413207780ee"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "f8f2b0c82a555484ffc89024ff683c6d"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "a1aa9c4795acd5a80183c0d73904251d"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "519acbd785d60de03b474506d58a4db6"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "2edd534df62c1111627d3927ccfcd3ea"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "ddfea9f236cfd57946112478e7a2fcec"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "e3ca94177222610cd0086df2e8b1689a"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "983cdea0cdce193cd81c7de82f55dccd"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "5746733d95881297f14a7685eed21ec3"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "fafde01c98fb5d921e44bfdbb4340c01"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "03fa705ae9db741090c93ec16a1ddb34"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "a4d21bfb2cd73825b35c20894cb30532"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "b4c5a447ce27b48d21bc4a3ba2d494e6"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "4866afd10a774f93223e5d25c385d83b"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "95fc55abb387e6a04bc030c6930c6af4"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "e5f0d552017443a90ef15cc928ef6c3a"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "751943aa928176cf9b38d3fb0905173c"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "50d65797a2078ecd45857665569e5f54"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "3369044dd4522692e3ea30db2e3c4b3b"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "a550fd7c3333abd262e33ac8da296667"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "296a267e358f55498a21893d17143e36"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "b06f2b350bd57388ea36db4691aed006"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "ce650811acb959df73405200b67995f7"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "77123f5e1562319c516fe677a869c477"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "2f4a971fb932c3a1970c57f2f1cfc61b"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "632f215f7be492c209ee2f4bedf8dd3d"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "c4ad9de55ec564df3731017f7d64f191"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "60b32b62c0ebc1b83fa4f5c2e82a824a"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "3346fb95ef70f04dfb7842a4dc5321aa"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "9c5969c909e72e64688c22c57cbc9473"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "9d9d33748d36818500dcc28570b28d3c"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "e2c3bf6140f6bd20ce1c03056f4cd0a0"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "66c7d2274ebae60a247f5a675bc1f059"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "24ee9048fc163ccf90080fbeb4854634"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "d989abe4be2598c91f0a7fd0735e18fd"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "9ea23f9a1ef3ed47a6f2c40376dfbaad"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "37c1badad70208398e1eca89a2d7ea8b"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "0e92c8047074a720c074804c81c8a8b5"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "67fe7439bca90c261a9497b5926fed31"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "30f5d0c9d26baec965301c16807305bb"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "548547b474744a59a8e96fd577b9348e"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "425aff9bdf1fb89e176de5ae290ddb60"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "6f94b5695aff1a0c3e1716817e44df10"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "d5b64476194cc10b0ad0170a86007cb1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "9b93d8cbbc900717fa60fc1d80a73ccf"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "bc62a13c84b8a01e3b921900a5c80345"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "6d3eed186cfe1ada504d25938cc59c55"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "1f53ed8c65b0e5d362d6cc93e9a4dae1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "450209dfbcc8b1cbb65a887500993c98"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "7878e687c48060f7e89770a0d398f217"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "8d1ac1feb349ea7d3ab23762ff99a476"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "b8ba101da3699d9df99e05477768554c"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "1d59b8b3132c29c624bdebe77c1e8dae"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "d95fd7b42c50eaaa386b454e632e3b8b"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "5ac2bc8f63168c59b1a7540b20f48772"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "18004f8f54ab197e364ce2c98f83144e"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "92944fce388c3375b62a6dca5c94a7fc"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "8c16dd7126c91b724f8c3c06b66cce67"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "7c0962e47a12d7f14a8c6140b388e586"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "79cbe0db7070b81f9c06f76a32cb23f5"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "206446daec9aa212e2b942cb465125c6"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "e22fe5e2f666321e31d8f724883e32a0"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "82435bf621a86bce854ed6baca8c6e66"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "026af75d2c7bf221beb3b105452e7028"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "b7196873d6bc08ee301be0d3b06c4d7f"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "649f17bd8964e2c77869e1f5b07cdf3f"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "19e567a06e0607b8679bc08b34f16a37"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "fd05accf319ecdb4b1fc6dec8da18951"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "4761b837a857123fdc6e022c5303426f"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "e84a166705397da2516e555a88a69bd9"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "70210114af9cfeeeb33cd778466e2090"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "c9d9b38fa29f498698be4d73e540db48"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "a81f29f91bd0969169e3328e02ba39ff"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "ac76f196c517eacf60fe3b124f060079"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "4aa4c49ac0597a0de0a8e31106deb357"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "a3adac8ac034be9e9af8bdb3b7e3703f"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "c4141984f8fde26c9564d3b0a6604e05"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "dc59b0373b649424ed11028fcdf271f2"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "71c3995341e110a91c1c2142c68565fb"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "aa93e4315651af17a03b9f3f0fc24f4b"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "f3d307f34ba3f103245df21735d23cac"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "466acb86c09698db825a3253145c9382"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "8c8bc47553e2ed7caf9007cc700a9b06"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "23fa905e47129d7b520804a1ced7892e"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "84baaadead1e06a3d9a694af5042e636"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "2630086eace84e46bee94bb25bf3cadc"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "abc447e2dbd2ca8fbe18e6a56f51a05a"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "f968af049ac43204781ccb60270c1650"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "57edc8017bf40547c9e97912c6ca23a5"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "46462ee8d5021523ab82f510f9650be6"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "536f01f105967accbef832be42f1a627"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "46a9ce0eb242448aeb1d7bb630dc0e81"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "ecc24e745bd1fbc4228a0ffc2cdf1297"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "87743f97db47be287bc8716823d2f51e"
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
