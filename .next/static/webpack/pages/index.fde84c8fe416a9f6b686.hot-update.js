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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListGroup.module.css */ \"./components/ListGroup/ListGroup.module.css\");\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ListGroup/ListItem */ \"./components/ListGroup/ListItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/ListGroup/ListGroup.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar ListGroup = function ListGroup(_ref) {\n  var posts = _ref.posts;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default().listGroup),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default().listGroupHeader),\n      children: \"Latest posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), posts.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n        author: item.author,\n        message: item.message,\n        timestamp: item.timestamp\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ListGroup;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var posts = state.posts.posts;\n  return {\n    posts: posts\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ListGroup));\n\nvar _c;\n\n$RefreshReg$(_c, \"ListGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwLnRzeD8xMWUzIl0sIm5hbWVzIjpbIkxpc3RHcm91cCIsInBvc3RzIiwic3R5bGVzIiwibWFwIiwiaXRlbSIsImF1dGhvciIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxTQUF5QixHQUFHLFNBQTVCQSxTQUE0QixPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQy9DLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3RUFBaEI7QUFBQSw0QkFDRTtBQUFNLGVBQVMsRUFBRUEsOEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDBCQUNULDhEQUFDLG1FQUFEO0FBQ0UsY0FBTSxFQUFFQSxJQUFJLENBQUNDLE1BRGY7QUFFRSxlQUFPLEVBQUVELElBQUksQ0FBQ0UsT0FGaEI7QUFHRSxpQkFBUyxFQUFFRixJQUFJLENBQUNHO0FBSGxCLFNBSU9ILElBQUksQ0FBQ0ksRUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWREOztLQUFNUixTOztBQWdCTixJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBc0I7QUFBQSxNQUVqQ1QsS0FGaUMsR0FHeENTLEtBSHdDLENBRTFDVCxLQUYwQyxDQUVqQ0EsS0FGaUM7QUFLNUMsU0FBTztBQUFFQSxTQUFLLEVBQUxBO0FBQUYsR0FBUDtBQUNELENBTkQ7O0FBUUEsK0RBQWVVLG9EQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QlQsU0FBekIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdEdyb3VwL0xpc3RHcm91cC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3RHcm91cC5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEl0ZW0nXG5pbXBvcnQgeyBJTGlzdEdyb3VwIH0gZnJvbSAnQC9pbnRlcmZhY2VzL1Bvc3RzJ1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnQC9zdG9yZS9zdG9yZSdcblxuY29uc3QgTGlzdEdyb3VwOiBGQzxJTGlzdEdyb3VwPiA9ICh7IHBvc3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RHcm91cH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0R3JvdXBIZWFkZXJ9PkxhdGVzdCBwb3N0czwvc3Bhbj5cbiAgICAgIHtwb3N0cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICBtZXNzYWdlPXtpdGVtLm1lc3NhZ2V9XG4gICAgICAgICAgdGltZXN0YW1wPXtpdGVtLnRpbWVzdGFtcH1cbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4ge1xuICBjb25zdCB7XG4gICAgcG9zdHM6IHsgcG9zdHMgfSxcbiAgfSA9IHN0YXRlXG5cbiAgcmV0dXJuIHsgcG9zdHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlzdEdyb3VwKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ListGroup/ListGroup.tsx\n");

/***/ })

});