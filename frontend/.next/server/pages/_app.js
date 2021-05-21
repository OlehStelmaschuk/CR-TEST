(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
// EXTERNAL MODULE: ./store/constants/postsConstants.tsx
var postsConstants = __webpack_require__(609);
;// CONCATENATED MODULE: ./store/reducers/postsReducer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const postsReducer = (state = {
  posts: [],
  loading: false,
  success: null
}, {
  type,
  payload
}) => {
  switch (type) {
    case postsConstants/* START_REQUEST */.OU:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        success: null
      });

    case postsConstants/* LOADING_DATA */.Vy:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          posts: payload,
          loading: false,
          success: true
        });
      }

    case postsConstants/* ADD_NEW_POST */.F9:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: [payload, ...state.posts],
        loading: false,
        success: true
      });

    case postsConstants/* POST_FAIL */.Ck:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        success: false
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./store/reducers/index.tsx


const reducer = (0,external_redux_namespaceObject.combineReducers)({
  posts: postsReducer
});
/* harmony default export */ var reducers = (reducer);
;// CONCATENATED MODULE: ./store/store.tsx




const initialState = {};
const middleware = [(external_redux_thunk_default())];
const store = (0,external_redux_namespaceObject.createStore)(reducers, initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware))); // Infer the `RootState` and `AppDispatch` types from the store itself

/* harmony default export */ var store_store = (store);
;// CONCATENATED MODULE: ./pages/_app.tsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store_store,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 609:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F9": function() { return /* binding */ ADD_NEW_POST; },
/* harmony export */   "OU": function() { return /* binding */ START_REQUEST; },
/* harmony export */   "Vy": function() { return /* binding */ LOADING_DATA; },
/* harmony export */   "Ck": function() { return /* binding */ POST_FAIL; }
/* harmony export */ });
const ADD_NEW_POST = 'ADD_NEW_POST';
const START_REQUEST = 'START_REQUEST';
const LOADING_DATA = 'LOADING_DATA';
const POST_FAIL = 'POST_FAIL';

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(461));
module.exports = __webpack_exports__;

})();