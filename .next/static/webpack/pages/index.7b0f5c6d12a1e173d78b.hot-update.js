/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./store/actions/postAction.tsx":
/*!**************************************!*\
  !*** ./store/actions/postAction.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewPost\": function() { return /* binding */ addNewPost; },\n/* harmony export */   \"loadPosts\": function() { return /* binding */ loadPosts; }\n/* harmony export */ });\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _store_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/constants/postsConstants */ \"./store/constants/postsConstants.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar addNewPost = function addNewPost(post) {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {\n      return _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({\n                type: _store_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.START_REQUEST\n              });\n              console.log(post);\n              dispatch({\n                type: _store_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.LOADING_DATA,\n                //ADD_NEW_POST\n                payload: post\n              });\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar loadPosts = function loadPosts() {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {\n      return _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              dispatch({\n                type: _store_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.START_REQUEST\n              });\n              console.log('loading data');\n              dispatch({\n                type: _store_constants_postsConstants__WEBPACK_IMPORTED_MODULE_2__.LOADING_DATA\n              });\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLnRzeD8zMGFhIl0sIm5hbWVzIjpbImFkZE5ld1Bvc3QiLCJwb3N0IiwiZGlzcGF0Y2giLCJ0eXBlIiwiVFlQRSIsIlNUQVJUX1JFUVVFU1QiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImxvYWRQb3N0cyIsIkxPQURJTkdfREFUQSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFJTyxJQUFNQSxVQUFVLEdBQ3JCLFNBRFdBLFVBQ1gsQ0FBQ0MsSUFBRDtBQUFBO0FBQUEseVNBQ0EsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxzQkFBUSxDQUFDO0FBQ1BDLG9CQUFJLEVBQUVDLDBFQUFrQkM7QUFEakIsZUFBRCxDQUFSO0FBSUFDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUVBQyxzQkFBUSxDQUFDO0FBQ1BDLG9CQUFJLEVBQUVDLHlFQURDO0FBQ2tCO0FBQ3pCSSx1QkFBTyxFQUFFUDtBQUZGLGVBQUQsQ0FBUjs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FESztBQWVBLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUE7QUFBQSwwU0FBZ0Isa0JBQU9QLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2Q0Esc0JBQVEsQ0FBQztBQUNQQyxvQkFBSSxFQUFFQywwRUFBa0JDO0FBRGpCLGVBQUQsQ0FBUjtBQUdBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBTCxzQkFBUSxDQUFDO0FBQ1BDLG9CQUFJLEVBQUVDLHlFQUFpQk07QUFEaEIsZUFBRCxDQUFSOztBQUx1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWxCIiwiZmlsZSI6Ii4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRZUEUgZnJvbSAnQC9zdG9yZS9jb25zdGFudHMvcG9zdHNDb25zdGFudHMnXG5pbXBvcnQgeyBJUG9zdCB9IGZyb20gJ0AvaW50ZXJmYWNlcy9Qb3N0cydcbmltcG9ydCB7IEFwcFRodW5rIH0gZnJvbSAnQC9zdG9yZS9ob29rcydcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Bvc3QgPVxuICAocG9zdDogSVBvc3QpOiBBcHBUaHVuayA9PlxuICBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBUWVBFLlNUQVJUX1JFUVVFU1QsXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHBvc3QpXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBUWVBFLkxPQURJTkdfREFUQSwgLy9BRERfTkVXX1BPU1RcbiAgICAgIHBheWxvYWQ6IHBvc3QsXG4gICAgfSlcbiAgfVxuXG5leHBvcnQgY29uc3QgbG9hZFBvc3RzID0gKCk6IEFwcFRodW5rID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogVFlQRS5TVEFSVF9SRVFVRVNULFxuICB9KVxuICBjb25zb2xlLmxvZygnbG9hZGluZyBkYXRhJylcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFRZUEUuTE9BRElOR19EQVRBLFxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/postAction.tsx\n");

/***/ })

});