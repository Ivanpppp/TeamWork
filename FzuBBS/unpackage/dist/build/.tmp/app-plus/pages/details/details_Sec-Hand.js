(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details_Sec-Hand"],{"16d1":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},3521:function(e,t,n){"use strict";n.r(t);var a=n("16d1"),u=n("3e66");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("93b7");var c=n("2877"),i=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},"3e66":function(e,t,n){"use strict";n.r(t);var a=n("b623"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=u.a},"5cf7":function(e,t,n){"use strict";(function(e){n("87eb"),n("921b");a(n("66fd"));var t=a(n("3521"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"8d79":function(e,t,n){},"93b7":function(e,t,n){"use strict";var a=n("8d79"),u=n.n(a);u.a},b623:function(e,t,n){"use strict";(function(e,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=[],o=[],c={data:function(){return{}},methods:{det:function(){e.navigateTo({url:"../det/det"})},Publish:function(){e.navigateTo({url:"../Publish_Editor/Publish_Editor.2"})}},onLoad:function(){u=[],o=[],e.getStorage({key:"PJ_ID",success:function(t){a=t.data,console.log(n(a," at pages\\details\\details_Sec-Hand.vue:99"));for(var c=1;c<=a;c++)e.getStorage({key:c+"PSec_Title",success:function(e){u.push(e.data),console.log(n(u," at pages\\details\\details_Sec-Hand.vue:105"))}}),e.getStorage({key:c+"PSec_Content",success:function(e){o.push(e.data),console.log(n(o," at pages\\details\\details_Sec-Hand.vue:112"))}})}})}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["5cf7","common/runtime","common/vendor"]]]);