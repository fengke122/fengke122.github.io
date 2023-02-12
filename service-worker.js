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
    "revision": "400d5c464e35e22da2623898fa054d9d"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.6937b529.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.1fee933b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.f4f346f3.js",
    "revision": "18dc333ff81e24c1e94e5539cf6cc274"
  },
  {
    "url": "assets/js/13.479b8c75.js",
    "revision": "9f262f86ffc6d62586cac6b41a40a320"
  },
  {
    "url": "assets/js/14.7410e8f6.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.a03caf7f.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.083f9e2b.js",
    "revision": "d033044aaec6b34224e8ed3d4b86549a"
  },
  {
    "url": "assets/js/17.c8b9067b.js",
    "revision": "13a68ee4e2168c9ffccac54e4705a7c8"
  },
  {
    "url": "assets/js/18.3a516922.js",
    "revision": "2f98574d23998e4192e127bcb7188b70"
  },
  {
    "url": "assets/js/4.73602618.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.524902b1.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.3f86ec79.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.f5f4255e.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.d73a55bb.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.f94b0836.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.5c14d8fd.js",
    "revision": "fa8823e9af0b11f7bc27fb22800c3808"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5f994dc11d0e69515a057e4cce8e03b2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "adb0f0d29c28b0b9b6442e2c70a91761"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2eb2eca55379a228877ab68d685d2fd6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6ca0ed0887d7cb8f78a42e27b5d6f86f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "65754751f8ddcfe843acc3d0980765eb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a6f53cb86032a3c286610d5b5d4707a9"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "7475b2fee1bb37c6c60f70c8f1f17b1c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5cd994266b7e4cf3f95fe4cadb4fbe7e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ad3f91ac5aa891996ff26d4049da77f4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1028a87c313ae416d5d7d54f8755e34e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5fb412a0ca72c29e9eb2da631235d6ae"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d49333ac25273dcde6bb435686c40aff"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4838af899b6a0b05c9a99b8362d70b25"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "70e88c4fcef074777159a2d6139c087c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "dfedb3f747459ed3d3765466a7cfa7be"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3a98eab873873f1dda5475f5f4b02281"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a0704f60dbc5defd272ca1c7a2684105"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4aa8acd7f3235235b747b3bf206600d7"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a27fba705c67b2c814b876c0cfa8705"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6c28a103008fd8b9cdba654e7a3bceca"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "efcd52d9727f17e9a76191d4ed07740e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "32f13586a5af35591e65c2ae73f2d9ef"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "90903d127dfc6ce30c657a6ac694abec"
  },
  {
    "url": "生活分享/life.html",
    "revision": "90650911ae284d168c26c0ff1c489e87"
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
