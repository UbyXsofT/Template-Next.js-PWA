if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,n)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let c={};const r=s=>a(s,o),t={module:{uri:o},exports:c,require:r};e[o]=Promise.all(i.map((s=>t[s]||r(s)))).then((s=>(n(...s),c)))}}define(["./workbox-1bb06f5e"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8a43c3e943fc5554b294c79bf6ff110a"},{url:"/_next/static/chunks/0e5ce63c-91755a82561e6871.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/117-53f06d3d3caf4267.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/346-0d03905d1b09ac53.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/940-de16fda90959ccab.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/_not-found/page-e0c2c5bbd028b87a.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/dashboard/layout-dbc276c23cf69d02.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/dashboard/page-5178b6c67f567dcd.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/dashboard/stats/page-cafb4c8d3a412bed.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/info/layout-852af32889009c61.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/info/page-eb8f2d36af479095.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/layout-043043b1fdb829ef.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/app/page-9582e8cea6467742.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/fd9d1056-f9f33dc1c3f8eb7a.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/main-app-85a3c514dc303afb.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/main-be3c6f8600b90c5a.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-2675052e5229cb88.js",revision:"hShzMeP24bqOnJTfUuv24"},{url:"/_next/static/css/3c9a88fad68128fa.css",revision:"3c9a88fad68128fa"},{url:"/_next/static/hShzMeP24bqOnJTfUuv24/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/hShzMeP24bqOnJTfUuv24/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/assets/icons/192x192.png",revision:"fe970448513b18d0c37b4b671ca94a06"},{url:"/assets/icons/24x24.png",revision:"5b1c195400df0f16c3f6cb2aa4665622"},{url:"/assets/icons/48x48.png",revision:"c3f013b68eae92565e8337ee50472cdc"},{url:"/assets/icons/512x512.png",revision:"e2a009c0f6aaa11d03a8e0728869b583"},{url:"/assets/icons/android/android-launchericon-144-144.png",revision:"c6beb9cbdeee1459e5603bafe8f628f0"},{url:"/assets/icons/android/android-launchericon-192-192.png",revision:"07188dd88c09f89a81d11aede1718d96"},{url:"/assets/icons/android/android-launchericon-48-48.png",revision:"ac1f2b747e2bd6c10cea63ece754878e"},{url:"/assets/icons/android/android-launchericon-512-512.png",revision:"cda527d3aa76d30302b663ef6079a7c4"},{url:"/assets/icons/android/android-launchericon-72-72.png",revision:"4fb0708cfbeeb63f841b7b9a3a709ce7"},{url:"/assets/icons/android/android-launchericon-96-96.png",revision:"5773a056c108c9d19c715c8c8d43e8e3"},{url:"/assets/icons/favicon-16x16.png",revision:"2232bfaafe47b483362c949dcd204e92"},{url:"/assets/icons/favicon-32x32.png",revision:"8d2c98564c0eb17f6fcd5161332f8696"},{url:"/assets/icons/favicon.ico",revision:"79adb31e604a17edb59a549fccfb6833"},{url:"/assets/icons/icon_192.png",revision:"a80ffffb8d3a555b25a0f19a0a9878f1"},{url:"/assets/icons/icon_24.png",revision:"04fa5b0f5827d885b678f0d131406aab"},{url:"/assets/icons/icon_48.png",revision:"3dbd388868265c8498acfe676ef27811"},{url:"/assets/icons/icon_512.png",revision:"414aacb61ad294e75f267554db7e9368"},{url:"/assets/icons/ios/100.png",revision:"1dedfd2d6c9219d6d5323a32d4534297"},{url:"/assets/icons/ios/1024.png",revision:"d40a27dafc4cbf29c6941cfb4781613e"},{url:"/assets/icons/ios/114.png",revision:"f7eae0868a902f546ef7f0acce4c2501"},{url:"/assets/icons/ios/120.png",revision:"d1fe68f259c2fd29835c3a5930dffd25"},{url:"/assets/icons/ios/128.png",revision:"466c3f0293888c7073b76b4b32ba2a2f"},{url:"/assets/icons/ios/144.png",revision:"c6beb9cbdeee1459e5603bafe8f628f0"},{url:"/assets/icons/ios/152.png",revision:"e6f5394480cefe33c65c247a7f1f4504"},{url:"/assets/icons/ios/16.png",revision:"afd7540686ec0bf7d75f98aa913ef19e"},{url:"/assets/icons/ios/167.png",revision:"0e1a14089e2c899f69b5347039cbeae0"},{url:"/assets/icons/ios/180.png",revision:"91442fa2553af6a3965cf8613a85b98b"},{url:"/assets/icons/ios/192.png",revision:"07188dd88c09f89a81d11aede1718d96"},{url:"/assets/icons/ios/20.png",revision:"d551f2f3cecff49f5cf17cbf7ab2447d"},{url:"/assets/icons/ios/256.png",revision:"d48cd688728ebfc907253a401f16a3b9"},{url:"/assets/icons/ios/29.png",revision:"442d2e5d6ece1c1943c083f0adcc7bf0"},{url:"/assets/icons/ios/32.png",revision:"2db4c033b3054fed919c986195139ac1"},{url:"/assets/icons/ios/40.png",revision:"97fdbba20d58882d49b5ee11080018f7"},{url:"/assets/icons/ios/50.png",revision:"6cdd868add21600f50dc8dbdb1724fb3"},{url:"/assets/icons/ios/512.png",revision:"cda527d3aa76d30302b663ef6079a7c4"},{url:"/assets/icons/ios/57.png",revision:"45d608b3f610d1808f149de0540cef2b"},{url:"/assets/icons/ios/58.png",revision:"86bd502636eddefe5d6d99171cf20568"},{url:"/assets/icons/ios/60.png",revision:"05e42f40a9d31ffd9d4bf920b68bf8ff"},{url:"/assets/icons/ios/64.png",revision:"c11e8ac2e9681d12b5dca0eb3df75a69"},{url:"/assets/icons/ios/72.png",revision:"4fb0708cfbeeb63f841b7b9a3a709ce7"},{url:"/assets/icons/ios/76.png",revision:"4d2a41de632b14ad641c1df8a186ea5f"},{url:"/assets/icons/ios/80.png",revision:"5525d52ee7d2a70f33609a37aa06d6f8"},{url:"/assets/icons/ios/87.png",revision:"16d349bd230c162ea5fa328a8615673c"},{url:"/assets/icons/og-image.png",revision:"f0ce43281aa31751327a75d428e391d9"},{url:"/assets/icons/twitter-image.png",revision:"707a9ffc0c7206f1513958325ce90c77"},{url:"/assets/icons/windows11/LargeTile.scale-100.png",revision:"aa3e0310548f853558e08048a7273d00"},{url:"/assets/icons/windows11/LargeTile.scale-125.png",revision:"f048d8d71ea80745a166579356c7855e"},{url:"/assets/icons/windows11/LargeTile.scale-150.png",revision:"961e20b039b1a1a091378df77407fcee"},{url:"/assets/icons/windows11/LargeTile.scale-200.png",revision:"f016a318ff6be0d6ddb60254e6a42bcb"},{url:"/assets/icons/windows11/LargeTile.scale-400.png",revision:"53022fecd5e9a25a67ddf79047d8999f"},{url:"/assets/icons/windows11/SmallTile.scale-100.png",revision:"26f81fc1f2eb7739e56c91b57c28e9a6"},{url:"/assets/icons/windows11/SmallTile.scale-125.png",revision:"41bbacd24769a80477343144aeb7fdfb"},{url:"/assets/icons/windows11/SmallTile.scale-150.png",revision:"500cca8c66b0bcb6c121e3c6b6d9378a"},{url:"/assets/icons/windows11/SmallTile.scale-200.png",revision:"1379e61d61eb8a2a01d2c2c6fec4c230"},{url:"/assets/icons/windows11/SmallTile.scale-400.png",revision:"7c054c9770f5a8062c3a6c0e18a4f597"},{url:"/assets/icons/windows11/SplashScreen.scale-100.png",revision:"2c1a46496187f490a0bf1b7b5e3dadbb"},{url:"/assets/icons/windows11/SplashScreen.scale-125.png",revision:"73f04e980db273216ea4791480388a4b"},{url:"/assets/icons/windows11/SplashScreen.scale-150.png",revision:"b183716dd74d2cd65cbd6216f4f5b464"},{url:"/assets/icons/windows11/SplashScreen.scale-200.png",revision:"d917ba4eb4a8cf925a80edc16b66230e"},{url:"/assets/icons/windows11/SplashScreen.scale-400.png",revision:"1325e1d443c5a8ece519c1e829e8e84b"},{url:"/assets/icons/windows11/Square150x150Logo.scale-100.png",revision:"bcc257005a0deec95b95fcd5f134a73e"},{url:"/assets/icons/windows11/Square150x150Logo.scale-125.png",revision:"4dc8090632e89ac411ed2962a99791e0"},{url:"/assets/icons/windows11/Square150x150Logo.scale-150.png",revision:"065c45f5e5fadb3f3558742c4817b2b2"},{url:"/assets/icons/windows11/Square150x150Logo.scale-200.png",revision:"1dac7c5f2dbf99bd54cd98a79ff26ef9"},{url:"/assets/icons/windows11/Square150x150Logo.scale-400.png",revision:"a4958eb109556899a7df96590a3c3c87"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"5c34a3036998d1e9cb9f69f01ec99798"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"f03451df1023d02f6ed55868c579eee9"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"39bfb1b855af913bfeb81b36ae741f91"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"b58c97f392c988a268494fa1b3f56dc2"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"ac4935cd040f0c87ba0a5b43d1ce15f5"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"1e1553f2da006227aff9b10f537f4ea7"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"4121336940c78f404aaca30be6676a4d"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"da8df661ba95909fc51ad392670ccf96"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"573207a8d7b096dc11229f5afd1f6f7b"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"3d4706bbb4cb404b9fb80601b5bdd36b"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"f1dc24043c231a49644ac8efbc74e361"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"ce0aabae030547343a664e819a3eaf7d"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"e03095bf2413a8ec63f6a0f852fb0228"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"f69e7a116ea3f06f202eca3219a03915"},{url:"/assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"e7b143a5a65e07b73ae64541bff1c354"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"5c34a3036998d1e9cb9f69f01ec99798"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"f03451df1023d02f6ed55868c579eee9"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"39bfb1b855af913bfeb81b36ae741f91"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"b58c97f392c988a268494fa1b3f56dc2"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"ac4935cd040f0c87ba0a5b43d1ce15f5"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"1e1553f2da006227aff9b10f537f4ea7"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"4121336940c78f404aaca30be6676a4d"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"da8df661ba95909fc51ad392670ccf96"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"573207a8d7b096dc11229f5afd1f6f7b"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"3d4706bbb4cb404b9fb80601b5bdd36b"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"f1dc24043c231a49644ac8efbc74e361"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"ce0aabae030547343a664e819a3eaf7d"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"e03095bf2413a8ec63f6a0f852fb0228"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"f69e7a116ea3f06f202eca3219a03915"},{url:"/assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"e7b143a5a65e07b73ae64541bff1c354"},{url:"/assets/icons/windows11/Square44x44Logo.scale-100.png",revision:"573207a8d7b096dc11229f5afd1f6f7b"},{url:"/assets/icons/windows11/Square44x44Logo.scale-125.png",revision:"2351dac9284994a7b943cc0226af8cab"},{url:"/assets/icons/windows11/Square44x44Logo.scale-150.png",revision:"dd08be9a702119f1411cc0de40692c39"},{url:"/assets/icons/windows11/Square44x44Logo.scale-200.png",revision:"b544afe626965ec229b79c5e3f142e94"},{url:"/assets/icons/windows11/Square44x44Logo.scale-400.png",revision:"c486af89d55a01bc54a1864b4cf751a8"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-16.png",revision:"5c34a3036998d1e9cb9f69f01ec99798"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-20.png",revision:"f03451df1023d02f6ed55868c579eee9"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-24.png",revision:"39bfb1b855af913bfeb81b36ae741f91"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-256.png",revision:"b58c97f392c988a268494fa1b3f56dc2"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-30.png",revision:"ac4935cd040f0c87ba0a5b43d1ce15f5"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-32.png",revision:"1e1553f2da006227aff9b10f537f4ea7"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-36.png",revision:"4121336940c78f404aaca30be6676a4d"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-40.png",revision:"da8df661ba95909fc51ad392670ccf96"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-44.png",revision:"573207a8d7b096dc11229f5afd1f6f7b"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-48.png",revision:"3d4706bbb4cb404b9fb80601b5bdd36b"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-60.png",revision:"f1dc24043c231a49644ac8efbc74e361"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-64.png",revision:"ce0aabae030547343a664e819a3eaf7d"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-72.png",revision:"e03095bf2413a8ec63f6a0f852fb0228"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-80.png",revision:"f69e7a116ea3f06f202eca3219a03915"},{url:"/assets/icons/windows11/Square44x44Logo.targetsize-96.png",revision:"e7b143a5a65e07b73ae64541bff1c354"},{url:"/assets/icons/windows11/StoreLogo.scale-100.png",revision:"6cdd868add21600f50dc8dbdb1724fb3"},{url:"/assets/icons/windows11/StoreLogo.scale-125.png",revision:"c41b34d3a12018614a30f13fe3021d18"},{url:"/assets/icons/windows11/StoreLogo.scale-150.png",revision:"7711889f9424c2b0a6c0cf8d5bc8bf47"},{url:"/assets/icons/windows11/StoreLogo.scale-200.png",revision:"1dedfd2d6c9219d6d5323a32d4534297"},{url:"/assets/icons/windows11/StoreLogo.scale-400.png",revision:"e53ef40f5e850ade0c2286cadc0ff0b7"},{url:"/assets/icons/windows11/Wide310x150Logo.scale-100.png",revision:"2c33ceb5facfe1144de53cb4bc015067"},{url:"/assets/icons/windows11/Wide310x150Logo.scale-125.png",revision:"7496564cf62a46a4f6778e92b6cd34c7"},{url:"/assets/icons/windows11/Wide310x150Logo.scale-150.png",revision:"2fa8d2854a94807cacb6a3706fef082b"},{url:"/assets/icons/windows11/Wide310x150Logo.scale-200.png",revision:"2c1a46496187f490a0bf1b7b5e3dadbb"},{url:"/assets/icons/windows11/Wide310x150Logo.scale-400.png",revision:"d917ba4eb4a8cf925a80edc16b66230e"},{url:"/assets/screenshots/screen-1200x628.png",revision:"bb8cd0092fdca379dc4d2316b45ea6c0"},{url:"/assets/screenshots/screen-1617x1012.png",revision:"f78a1d615e066e5b27bfb64123fb1e79"},{url:"/assets/screenshots/screen-1920x1080.png",revision:"2ada7c19e8d94b60c45d47feddaf5d93"},{url:"/browserconfig.xml",revision:"04321fbd45734b34d96932261c5d78ae"},{url:"/manifest.json",revision:"f18d0c3be54e6984c89f921ea939468c"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));