(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{9002:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return g}});var e=n(6265),o=n(5893),i=(n(7297),n(6940)),u=n(8676);function c(t){return function(r){var n=r.dispatch,e=r.getState;return function(r){return function(o){return"function"===typeof o?o(n,e,t):r(o)}}}}var f=c();f.withExtraArgument=c;var a=f,p=n(8500);function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function y(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"===typeof t)return s(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(5609);function O(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?O(Object(n),!0).forEach((function(r){(0,e.Z)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var b=(0,u.UY)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{posts:[],loading:!1,success:null},r=arguments.length>1?arguments[1]:void 0,n=r.type,e=r.payload;switch(n){case l.OU:return d(d({},t),{},{loading:!0,success:null});case l.Vy:return d(d({},t),{},{posts:e,loading:!1,success:!0});case l.F9:return d(d({},t),{},{posts:[e].concat(y(t.posts)),loading:!1,success:!0});case l.Ck:return d(d({},t),{},{loading:!1,success:!1});default:return t}}}),w=[a],h=(0,u.MT)(b,{},(0,p.Uo)(u.md.apply(void 0,w)));function v(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function E(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?v(Object(n),!0).forEach((function(r){(0,e.Z)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var g=function(t){var r=t.Component,n=t.pageProps;return(0,o.jsx)(i.zt,{store:h,children:(0,o.jsx)(r,E({},n))})}},5609:function(t,r,n){"use strict";n.d(r,{F9:function(){return e},OU:function(){return o},Vy:function(){return i},Ck:function(){return u}});var e="ADD_NEW_POST",o="START_REQUEST",i="LOADING_DATA",u="POST_FAIL"},6363:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9002)}])},7297:function(){},8500:function(t,r,n){"use strict";var e=n(8676).qC;r.Uo="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?e:e.apply(null,arguments)},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},8676:function(t,r,n){"use strict";function e(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function o(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function u(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}n.d(r,{md:function(){return O},UY:function(){return y},qC:function(){return l},MT:function(){return s}});var c="function"===typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(t){if("object"!==typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function s(t,r,n){var e;if("function"===typeof r&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(u(0));if("function"===typeof r&&"undefined"===typeof n&&(n=r,r=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(u(1));return n(s)(t,r)}if("function"!==typeof t)throw new Error(u(2));var o=t,i=r,f=[],y=f,l=!1;function O(){y===f&&(y=f.slice())}function d(){if(l)throw new Error(u(3));return i}function b(t){if("function"!==typeof t)throw new Error(u(4));if(l)throw new Error(u(5));var r=!0;return O(),y.push(t),function(){if(r){if(l)throw new Error(u(6));r=!1,O();var n=y.indexOf(t);y.splice(n,1),f=null}}}function w(t){if(!p(t))throw new Error(u(7));if("undefined"===typeof t.type)throw new Error(u(8));if(l)throw new Error(u(9));try{l=!0,i=o(i,t)}finally{l=!1}for(var r=f=y,n=0;n<r.length;n++){(0,r[n])()}return t}function h(t){if("function"!==typeof t)throw new Error(u(10));o=t,w({type:a.REPLACE})}function v(){var t,r=b;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new Error(u(11));function n(){t.next&&t.next(d())}return n(),{unsubscribe:r(n)}}})[c]=function(){return this},t}return w({type:a.INIT}),(e={dispatch:w,subscribe:b,getState:d,replaceReducer:h})[c]=v,e}function y(t){for(var r=Object.keys(t),n={},e=0;e<r.length;e++){var o=r[e];0,"function"===typeof t[o]&&(n[o]=t[o])}var i,c=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(r){var n=t[r];if("undefined"===typeof n(void 0,{type:a.INIT}))throw new Error(u(12));if("undefined"===typeof n(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(n)}catch(f){i=f}return function(t,r){if(void 0===t&&(t={}),i)throw i;for(var e=!1,o={},f=0;f<c.length;f++){var a=c[f],p=n[a],s=t[a],y=p(s,r);if("undefined"===typeof y){r&&r.type;throw new Error(u(14))}o[a]=y,e=e||y!==s}return(e=e||c.length!==Object.keys(t).length)?o:t}}function l(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return 0===r.length?function(t){return t}:1===r.length?r[0]:r.reduce((function(t,r){return function(){return t(r.apply(void 0,arguments))}}))}function O(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),e=function(){throw new Error(u(15))},o={getState:n.getState,dispatch:function(){return e.apply(void 0,arguments)}},c=r.map((function(t){return t(o)}));return e=l.apply(void 0,c)(n.dispatch),i(i({},n),{},{dispatch:e})}}}},4453:function(){}},function(t){var r=function(r){return t(t.s=r)};t.O(0,[774,351,433,494],(function(){return r(6363),r(2441)}));var n=t.O();_N_E=n}]);