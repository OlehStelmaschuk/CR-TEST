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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListGroup.module.css */ \"./components/ListGroup/ListGroup.module.css\");\n/* harmony import */ var _ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ListGroup/ListItem */ \"./components/ListGroup/ListItem.tsx\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/hooks */ \"./store/hooks.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/ListGroup/ListGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ListGroup = function ListGroup() {\n  _s();\n\n  var state = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) {\n    return state.posts;\n  });\n  var data = [];\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return data = state;\n  }, [state]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().listGroup),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_ListGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().listGroupHeader),\n      children: \"Latest posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListGroup_ListItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n        author: item.author,\n        message: item.message,\n        timestamp: item.timestamp\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListGroup, \"rdr3Fp5byGwGVAgDB/LWaqDLN/w=\", false, function () {\n  return [_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector];\n});\n\n_c = ListGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"ListGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwLnRzeD8xMWUzIl0sIm5hbWVzIjpbIkxpc3RHcm91cCIsInN0YXRlIiwidXNlQXBwU2VsZWN0b3IiLCJwb3N0cyIsImRhdGEiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJtYXAiLCJpdGVtIiwiYXV0aG9yIiwibWVzc2FnZSIsInRpbWVzdGFtcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBYSxHQUFHLFNBQWhCQSxTQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLEtBQUssR0FBR0MsNERBQWMsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRSxLQUFqQjtBQUFBLEdBQUQsQ0FBNUI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBQyxrREFBUyxDQUFDO0FBQUEsV0FBT0QsSUFBSSxHQUFHSCxLQUFkO0FBQUEsR0FBRCxFQUF1QixDQUFDQSxLQUFELENBQXZCLENBQVQ7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUssd0VBQWhCO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUVBLDhFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSwwQkFDUiw4REFBQyxtRUFBRDtBQUNFLGNBQU0sRUFBRUEsSUFBSSxDQUFDQyxNQURmO0FBRUUsZUFBTyxFQUFFRCxJQUFJLENBQUNFLE9BRmhCO0FBR0UsaUJBQVMsRUFBRUYsSUFBSSxDQUFDRztBQUhsQixTQUlPSCxJQUFJLENBQUNJLEVBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FqQkQ7O0dBQU1aLFM7VUFDVUUsd0Q7OztLQURWRixTO0FBbUJOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0R3JvdXAubW9kdWxlLmNzcydcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAL2NvbXBvbmVudHMvTGlzdEdyb3VwL0xpc3RJdGVtJ1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3N0b3JlL2hvb2tzJ1xuXG5jb25zdCBMaXN0R3JvdXA6IEZDID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdHMpXG4gIGxldCBkYXRhID0gW11cbiAgdXNlRWZmZWN0KCgpID0+IChkYXRhID0gc3RhdGUpLCBbc3RhdGVdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEdyb3VwfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RHcm91cEhlYWRlcn0+TGF0ZXN0IHBvc3RzPC9zcGFuPlxuICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3J9XG4gICAgICAgICAgbWVzc2FnZT17aXRlbS5tZXNzYWdlfVxuICAgICAgICAgIHRpbWVzdGFtcD17aXRlbS50aW1lc3RhbXB9XG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEdyb3VwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ListGroup/ListGroup.tsx\n");

/***/ })

});