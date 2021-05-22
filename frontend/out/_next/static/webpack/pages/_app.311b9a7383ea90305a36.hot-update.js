/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reduxStore/reducers/postsReducer.tsx":
/*!**********************************************!*\
  !*** ./reduxStore/reducers/postsReducer.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postsReducer\": function() { return /* binding */ postsReducer; }\n/* harmony export */ });\n/* harmony import */ var _home_alex_source_cr_test_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_alex_source_cr_test_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reduxStore_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/reduxStore/constants/postsConstants */ \"./reduxStore/constants/postsConstants.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar postsReducer = function postsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    posts: [],\n    loading: false\n  };\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case _reduxStore_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.START_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true,\n        success: null\n      });\n\n    case _reduxStore_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.LOADING_DATA:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          posts: payload,\n          loading: false,\n          success: true\n        });\n      }\n\n    case _reduxStore_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.ADD_NEW_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        posts: [payload].concat((0,_home_alex_source_cr_test_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.posts)),\n        loading: false,\n        success: true\n      });\n\n    case _reduxStore_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.POST_FAIL:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        success: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXhTdG9yZS9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIudHN4PzYyNDkiXSwibmFtZXMiOlsicG9zdHNSZWR1Y2VyIiwic3RhdGUiLCJwb3N0cyIsImxvYWRpbmciLCJ0eXBlIiwicGF5bG9hZCIsIlRZUEUiLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBR3ZCO0FBQUEsTUFGSEMsS0FFRyx1RUFGaUI7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsV0FBTyxFQUFFO0FBQXRCLEdBRWpCOztBQUFBO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQUEsTUFES0MsT0FDTCxRQURLQSxPQUNMOztBQUNILFVBQVFELElBQVI7QUFDRSxTQUFLRSwrRUFBTDtBQUNFLDZDQUFZTCxLQUFaO0FBQW1CRSxlQUFPLEVBQUUsSUFBNUI7QUFBa0NJLGVBQU8sRUFBRTtBQUEzQzs7QUFDRixTQUFLRCw4RUFBTDtBQUF3QjtBQUN0QiwrQ0FBWUwsS0FBWjtBQUFtQkMsZUFBSyxFQUFFRyxPQUExQjtBQUFtQ0YsaUJBQU8sRUFBRSxLQUE1QztBQUFtREksaUJBQU8sRUFBRTtBQUE1RDtBQUNEOztBQUNELFNBQUtELDhFQUFMO0FBQ0UsNkNBQ0tMLEtBREw7QUFFRUMsYUFBSyxHQUFHRyxPQUFILGdLQUFlSixLQUFLLENBQUNDLEtBQXJCLEVBRlA7QUFHRUMsZUFBTyxFQUFFLEtBSFg7QUFJRUksZUFBTyxFQUFFO0FBSlg7O0FBTUYsU0FBS0QsMkVBQUw7QUFDRSw2Q0FBWUwsS0FBWjtBQUFtQkUsZUFBTyxFQUFFLEtBQTVCO0FBQW1DSSxlQUFPLEVBQUU7QUFBNUM7O0FBRUY7QUFDRSxhQUFPTixLQUFQO0FBakJKO0FBbUJELENBdkJNIiwiZmlsZSI6Ii4vcmVkdXhTdG9yZS9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVFlQRSBmcm9tICdAL3JlZHV4U3RvcmUvY29uc3RhbnRzL3Bvc3RzQ29uc3RhbnRzJ1xuaW1wb3J0IHsgSVBvc3RTdGF0ZSB9IGZyb20gJ0AvaW50ZXJmYWNlcy9Qb3N0cydcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5leHBvcnQgY29uc3QgcG9zdHNSZWR1Y2VyID0gKFxuICBzdGF0ZTogSVBvc3RTdGF0ZSA9IHsgcG9zdHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LFxuICB7IHR5cGUsIHBheWxvYWQgfTogUGF5bG9hZEFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgVFlQRS5TVEFSVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIHN1Y2Nlc3M6IG51bGwgfVxuICAgIGNhc2UgVFlQRS5MT0FESU5HX0RBVEE6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogcGF5bG9hZCwgbG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IHRydWUgfVxuICAgIH1cbiAgICBjYXNlIFRZUEUuQUREX05FV19QT1NUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvc3RzOiBbcGF5bG9hZCwgLi4uc3RhdGUucG9zdHNdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIH1cbiAgICBjYXNlIFRZUEUuUE9TVF9GQUlMOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reduxStore/reducers/postsReducer.tsx\n");

/***/ })

});