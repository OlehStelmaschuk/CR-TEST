/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FormGroup/FormGroup.tsx":
/*!********************************************!*\
  !*** ./components/FormGroup/FormGroup.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: '',\n    message: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var sendForm = function sendForm(form) {\n    dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n  };\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) setForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n      onClick: ctrlEnterHandler,\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"8dUxk9boK5u8v4aGY+HwQSytnL0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsIm1lc3NhZ2UiLCJmb3JtIiwic2V0Rm9ybSIsInNlbmRGb3JtIiwiYWRkTmV3UG9zdCIsImNoYW5nZUZvcm1IYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN0cmxFbnRlckhhbmRsZXIiLCJrZXlDb2RlIiwiY3RybEtleSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQWEsR0FBRyxTQUFoQkEsU0FBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQUQwQixrQkFHRkMsK0NBQVEsQ0FBQztBQUMvQkMsVUFBTSxFQUFFLEVBRHVCO0FBRS9CQyxXQUFPLEVBQUU7QUFGc0IsR0FBRCxDQUhOO0FBQUEsTUFHbkJDLElBSG1CO0FBQUEsTUFHYkMsT0FIYTs7QUFPMUIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsSUFBRCxFQUFVO0FBQ3pCTCxZQUFRLENBQUNRLHFFQUFVLENBQUNILElBQUQsQ0FBWCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQ3hCQyxDQUR3QixFQUVyQjtBQUNISixXQUFPLGlDQUFNRCxJQUFOLHNKQUFhSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBdEIsRUFBNkJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUF0QyxHQUFQO0FBQ0QsR0FKRDs7QUFNQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNKLENBQUQsRUFBMkM7QUFDbEUsUUFBSUEsQ0FBQyxDQUFDSyxPQUFGLEtBQWMsRUFBZCxJQUFvQkwsQ0FBQyxDQUFDTSxPQUExQixFQUFtQ1YsT0FBTyxDQUFDRCxJQUFELENBQVA7QUFDcEMsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVksbUVBQWhCO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUVBLHlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLDZFQUFoQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFFLFFBRlI7QUFHRSxhQUFLLEVBQUVaLElBQUksQ0FBQ0YsTUFIZDtBQUlFLGdCQUFRLEVBQUVNLGlCQUpaO0FBS0UsaUJBQVMsRUFBRUs7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFZRTtBQUFLLGVBQVMsRUFBRUcsNkVBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsWUFBSSxFQUFFLENBRFI7QUFFRSxZQUFJLEVBQUUsU0FGUjtBQUdFLGFBQUssRUFBRVosSUFBSSxDQUFDRCxPQUhkO0FBSUUsZ0JBQVEsRUFBRUssaUJBSlo7QUFLRSxpQkFBUyxFQUFFSztBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQXNCRTtBQUFRLGVBQVMsRUFBRUcsa0VBQW5CO0FBQStCLGFBQU8sRUFBRUgsZ0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBakREOztHQUFNZixTO1VBQ2FFLG9EOzs7S0FEYkYsUztBQW1ETiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybUdyb3VwL0Zvcm1Hcm91cC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgS2V5Ym9hcmRFdmVudCwgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9ybUdyb3VwLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBhZGROZXdQb3N0IH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb24nXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBGb3JtR3JvdXA6IEZDID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgYXV0aG9yOiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfSlcbiAgY29uc3Qgc2VuZEZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGRpc3BhdGNoKGFkZE5ld1Bvc3QoZm9ybSkpXG4gIH1cblxuICBjb25zdCBjaGFuZ2VGb3JtSGFuZGxlciA9IChcbiAgICBlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGN0cmxFbnRlckhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUuY3RybEtleSkgc2V0Rm9ybShmb3JtKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUhlYWRlcn0+R3Vlc3Rib29rIGZvcm08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dEdyb3VwfT5cbiAgICAgICAgPHNwYW4+QXV0aG9yOjwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPXsnYXV0aG9yJ31cbiAgICAgICAgICB2YWx1ZT17Zm9ybS5hdXRob3J9XG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUZvcm1IYW5kbGVyfVxuICAgICAgICAgIG9uS2V5RG93bj17Y3RybEVudGVySGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXRHcm91cH0+XG4gICAgICAgIDxzcGFuPk1lc3NhZ2U6PC9zcGFuPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgIG5hbWU9eydtZXNzYWdlJ31cbiAgICAgICAgICB2YWx1ZT17Zm9ybS5tZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VGb3JtSGFuZGxlcn1cbiAgICAgICAgICBvbktleURvd249e2N0cmxFbnRlckhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXtjdHJsRW50ZXJIYW5kbGVyfT5cbiAgICAgICAgU2VuZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUdyb3VwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});