/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ListGroup/ListGroup.tsx":
/*!********************************************!*\
  !*** ./components/ListGroup/ListGroup.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListGroup.module.css */ \"./components/ListGroup/ListGroup.module.css\");\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ListGroup/ListItem */ \"./components/ListGroup/ListItem.tsx\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/hooks */ \"./store/hooks.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/ListGroup/ListGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ListGroup = function ListGroup() {\n  _s();\n\n  var state = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) {\n    return state.posts;\n  });\n  var data = [];\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    !state.loading && (data = state.posts);\n    console.log(data);\n  }, [state]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().listGroup),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().listGroupHeader),\n      children: \"Latest posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), console.log('data:' + data) && data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n        author: item.author,\n        message: item.message,\n        timestamp: item.timestamp\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListGroup, \"rdr3Fp5byGwGVAgDB/LWaqDLN/w=\", false, function () {\n  return [_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector];\n});\n\n_c = ListGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"ListGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwLnRzeD8xMWUzIl0sIm5hbWVzIjpbIkxpc3RHcm91cCIsInN0YXRlIiwidXNlQXBwU2VsZWN0b3IiLCJwb3N0cyIsImRhdGEiLCJ1c2VFZmZlY3QiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIm1hcCIsIml0ZW0iLCJhdXRob3IiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFhLEdBQUcsU0FBaEJBLFNBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsS0FBSyxHQUFHQyw0REFBYyxDQUFDLFVBQUNELEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNFLEtBQWpCO0FBQUEsR0FBRCxDQUE1QjtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkLEtBQUNKLEtBQUssQ0FBQ0ssT0FBUCxLQUFtQkYsSUFBSSxHQUFHSCxLQUFLLENBQUNFLEtBQWhDO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0QsR0FIUSxFQUdOLENBQUNILEtBQUQsQ0FITSxDQUFUO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVRLHdFQUFoQjtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFFQSw4RUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFVSixJQUF0QixLQUNDQSxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsMEJBQ1AsOERBQUMsbUVBQUQ7QUFDRSxjQUFNLEVBQUVBLElBQUksQ0FBQ0MsTUFEZjtBQUVFLGVBQU8sRUFBRUQsSUFBSSxDQUFDRSxPQUZoQjtBQUdFLGlCQUFTLEVBQUVGLElBQUksQ0FBQ0c7QUFIbEIsU0FJT0gsSUFBSSxDQUFDSSxFQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVQsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBckJEOztHQUFNZixTO1VBQ1VFLHdEOzs7S0FEVkYsUztBQXVCTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdEdyb3VwL0xpc3RHcm91cC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdEdyb3VwLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0xpc3RHcm91cC9MaXN0SXRlbSdcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zdG9yZS9ob29rcydcblxuY29uc3QgTGlzdEdyb3VwOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3RzKVxuICBsZXQgZGF0YSA9IFtdXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIXN0YXRlLmxvYWRpbmcgJiYgKGRhdGEgPSBzdGF0ZS5wb3N0cylcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9LCBbc3RhdGVdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEdyb3VwfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RHcm91cEhlYWRlcn0+TGF0ZXN0IHBvc3RzPC9zcGFuPlxuICAgICAge2NvbnNvbGUubG9nKCdkYXRhOicgKyBkYXRhKSAmJlxuICAgICAgICBkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgIG1lc3NhZ2U9e2l0ZW0ubWVzc2FnZX1cbiAgICAgICAgICAgIHRpbWVzdGFtcD17aXRlbS50aW1lc3RhbXB9XG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEdyb3VwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ListGroup/ListGroup.tsx\n");

/***/ })

});