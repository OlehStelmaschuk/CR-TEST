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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListGroup.module.css */ \"./components/ListGroup/ListGroup.module.css\");\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ListGroup/ListItem */ \"./components/ListGroup/ListItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/ListGroup/ListGroup.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar ListGroup = function ListGroup(_ref) {\n  var posts = _ref.posts;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default().listGroup),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default().listGroupHeader),\n      children: \"Latest posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), posts.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n        author: item.author,\n        message: item.message,\n        timestamp: item.timestamp\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ListGroup;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var posts = state.posts.posts;\n  return {\n    posts: posts\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ListGroup));\n\nvar _c;\n\n$RefreshReg$(_c, \"ListGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwLnRzeD8xMWUzIl0sIm5hbWVzIjpbIkxpc3RHcm91cCIsInBvc3RzIiwic3R5bGVzIiwibWFwIiwiaXRlbSIsImF1dGhvciIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFhLEdBQUcsU0FBaEJBLFNBQWdCLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHdFQUFoQjtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFFQSw4RUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1QsOERBQUMsbUVBQUQ7QUFDRSxjQUFNLEVBQUVBLElBQUksQ0FBQ0MsTUFEZjtBQUVFLGVBQU8sRUFBRUQsSUFBSSxDQUFDRSxPQUZoQjtBQUdFLGlCQUFTLEVBQUVGLElBQUksQ0FBQ0c7QUFIbEIsU0FJT0gsSUFBSSxDQUFDSSxFQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBZEQ7O0tBQU1SLFM7O0FBZ0JOLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUFBLE1BRTNCVCxLQUYyQixHQUdsQ1MsS0FIa0MsQ0FFcENULEtBRm9DLENBRTNCQSxLQUYyQjtBQUt0QyxTQUFPO0FBQUVBLFNBQUssRUFBTEE7QUFBRixHQUFQO0FBQ0QsQ0FORDs7QUFRQSwrREFBZVUsb0RBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCVCxTQUF6QixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdEdyb3VwLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0xpc3RHcm91cC9MaXN0SXRlbSdcbmltcG9ydCB7IElQb3N0IH0gZnJvbSAnQC9pbnRlcmZhY2VzL1Bvc3RzJ1xuXG5jb25zdCBMaXN0R3JvdXA6IEZDID0gKHsgcG9zdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEdyb3VwfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RHcm91cEhlYWRlcn0+TGF0ZXN0IHBvc3RzPC9zcGFuPlxuICAgICAge3Bvc3RzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgIG1lc3NhZ2U9e2l0ZW0ubWVzc2FnZX1cbiAgICAgICAgICB0aW1lc3RhbXA9e2l0ZW0udGltZXN0YW1wfVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogYW55KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwb3N0czogeyBwb3N0cyB9LFxuICB9ID0gc3RhdGVcblxuICByZXR1cm4geyBwb3N0cyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaXN0R3JvdXApXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ListGroup/ListGroup.tsx\n");

/***/ })

});