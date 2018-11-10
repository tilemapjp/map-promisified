(function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["mapPromisify"]=n():e["mapPromisify"]=n()})(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);var r={setCenter:{events:[{name:"moveend",check:function(e){return e.isMoving()}}],getter:function(e){return{center:e.getCenter()}}},panBy:{events:[{name:"moveend",check:function(e){return e.isMoving()}}],getter:function(e){return{center:e.getCenter()}}},panTo:{events:[{name:"moveend",check:function(e){return e.isMoving()}}],getter:function(e){return{center:e.getCenter()}}},setZoom:{events:[{name:"zoomend",check:function(e){return e.isZooming()}}],getter:function(e){return{zoom:e.getZoom()}}},zoomTo:{events:[{name:"zoomend",check:function(e){return e.isZooming()}}],getter:function(e){return{zoom:e.getZoom()}}},zoomIn:{events:[{name:"zoomend",check:function(e){return e.isZooming()}}],getter:function(e){return{zoom:e.getZoom()}}},zoomOut:{events:[{name:"zoomend",check:function(e){return e.isZooming()}}],getter:function(e){return{zoom:e.getZoom()}}},setBearing:{events:["rotateend"],getter:function(e){return{bearing:e.getBearing()}},check:function(e){return!0}},rotateTo:{events:["rotateend"],getter:function(e){return{bearing:e.getBearing()}},check:function(e){return!0}},resetNorth:{events:["rotateend"],getter:function(e){return{bearing:e.getBearing()}},check:function(e){return!0}},snapToNorth:{events:["rotateend"],getter:function(e){return{bearing:e.getBearing()}},check:function(e){return!0}},setPitch:{events:[],getter:function(e){return{}},check:function(e){return!0}},fitBounds:{events:[],getter:function(e){return{}},check:function(e){return!0}},fitScreenCoordinates:{events:[],getter:function(e){return{}},check:function(e){return!0}},jumpTo:{events:[],getter:function(e){return{}},check:function(e){return!0}},easeTo:{events:[],getter:function(e){return{}},check:function(e){return!0}},flyTo:{events:[],getter:function(e){return{}},check:function(e){return!0}}};function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){u(e,n,t[n])})}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return"".concat(e,"-").concat((""+Math.random()).split(".")[1])}function i(e,n,t,r){var o=function o(u){if(u.type===n&&u.eventId===t)return e.off(n,o),r(u)};return o}function f(e,n){var t=e[n],u=t.length;return function(){for(var f=[],a={eventId:c(n)},s=r[n].events.map(function(n,t){return{event:n,func:new Promise(function(r,o){f[t]={event:n,func:i(e,n.name,a.eventId,r)},e.on(n.name,f[t].func)})}}),g=[],m=0;m<u;m++)m===u-1?g.push(o({},a,(m<0||arguments.length<=m?void 0:arguments[m])||{})):g.push((m<0||arguments.length<=m?void 0:arguments[m])||null);var v=[];try{t.apply(e,g),v=s.map(function(n){var t=n.event,r=n.func;return t.check(e)?r:(e.off(t.name,r),Promise.resolve())})}catch(l){throw f.forEach(function(n){var t=n.event,r=n.func;e.off(t.name,r)}),l}return Promise.all(v).then(function(){return r[n].getter(e)})}}var a=f,s=function(e){var n=Object.keys(r),t={};return n.forEach(function(r){-1!==n.indexOf(r)&&(t[r]=a(e,r))}),t};function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n?a(e,n):s(e)}t.d(n,"default",function(){return g})}])["default"]});