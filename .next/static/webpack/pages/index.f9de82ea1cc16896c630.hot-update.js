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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: '',\n    message: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var sendForm = function sendForm(form) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: form.message.trim()\n    }));\n    dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: ''\n    }));\n  };\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) sendForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n      onClick: function onClick() {\n        return sendForm(form);\n      },\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"8dUxk9boK5u8v4aGY+HwQSytnL0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsIm1lc3NhZ2UiLCJmb3JtIiwic2V0Rm9ybSIsInNlbmRGb3JtIiwidHJpbSIsImFkZE5ld1Bvc3QiLCJjaGFuZ2VGb3JtSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjdHJsRW50ZXJIYW5kbGVyIiwia2V5Q29kZSIsImN0cmxLZXkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxTQUFhLEdBQUcsU0FBaEJBLFNBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEMEIsa0JBR0ZDLCtDQUFRLENBQUM7QUFDL0JDLFVBQU0sRUFBRSxFQUR1QjtBQUUvQkMsV0FBTyxFQUFFO0FBRnNCLEdBQUQsQ0FITjtBQUFBLE1BR25CQyxJQUhtQjtBQUFBLE1BR2JDLE9BSGE7O0FBUTFCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLElBQUQsRUFBaUI7QUFDaENDLFdBQU8saUNBQU1ELElBQU47QUFBWUQsYUFBTyxFQUFFQyxJQUFJLENBQUNELE9BQUwsQ0FBYUksSUFBYjtBQUFyQixPQUFQO0FBQ0FSLFlBQVEsQ0FBQ1MscUVBQVUsQ0FBQ0osSUFBRCxDQUFYLENBQVI7QUFDQUMsV0FBTyxpQ0FBTUQsSUFBTjtBQUFZRCxhQUFPLEVBQUU7QUFBckIsT0FBUDtBQUNELEdBSkQ7O0FBTUEsTUFBTU0saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUN4QkMsQ0FEd0IsRUFFckI7QUFDSEwsV0FBTyxpQ0FBTUQsSUFBTixzSkFBYU0sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQXRCLEVBQTZCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBdEMsR0FBUDtBQUNELEdBSkQ7O0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUN2QkosQ0FEdUIsRUFFcEI7QUFDSCxRQUFJQSxDQUFDLENBQUNLLE9BQUYsS0FBYyxFQUFkLElBQW9CTCxDQUFDLENBQUNNLE9BQTFCLEVBQW1DVixRQUFRLENBQUNGLElBQUQsQ0FBUjtBQUNwQyxHQUpEOztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFYSxtRUFBaEI7QUFBQSw0QkFDRTtBQUFNLGVBQVMsRUFBRUEseUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUEsNkVBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUUsUUFGUjtBQUdFLGFBQUssRUFBRWIsSUFBSSxDQUFDRixNQUhkO0FBSUUsZ0JBQVEsRUFBRU8saUJBSlo7QUFLRSxpQkFBUyxFQUFFSztBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVlFO0FBQUssZUFBUyxFQUFFRyw2RUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxZQUFJLEVBQUUsQ0FEUjtBQUVFLFlBQUksRUFBRSxTQUZSO0FBR0UsYUFBSyxFQUFFYixJQUFJLENBQUNELE9BSGQ7QUFJRSxnQkFBUSxFQUFFTSxpQkFKWjtBQUtFLGlCQUFTLEVBQUVLO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGLGVBc0JFO0FBQVEsZUFBUyxFQUFFRyxrRUFBbkI7QUFBK0IsYUFBTyxFQUFFO0FBQUEsZUFBTVgsUUFBUSxDQUFDRixJQUFELENBQWQ7QUFBQSxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQXRERDs7R0FBTU4sUztVQUNhRSxvRDs7O0tBRGJGLFM7QUF3RE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Hcm91cC9Gb3JtR3JvdXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEtleWJvYXJkRXZlbnQsIEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm1Hcm91cC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgYWRkTmV3UG9zdCB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IElQb3N0IH0gZnJvbSAnQC9pbnRlcmZhY2VzL1Bvc3RzJ1xuaW1wb3J0IHt2YWxpZGF0aW9ufSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1Hcm91cC92YWxpZGF0aW9uXCI7XG5cbmNvbnN0IEZvcm1Hcm91cDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICBhdXRob3I6ICcnLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9KVxuXG4gIGNvbnN0IHNlbmRGb3JtID0gKGZvcm06IElQb3N0KSA9PiB7XG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIG1lc3NhZ2U6IGZvcm0ubWVzc2FnZS50cmltKCkgfSlcbiAgICBkaXNwYXRjaChhZGROZXdQb3N0KGZvcm0pKVxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBtZXNzYWdlOiAnJyB9KVxuICB9XG5cbiAgY29uc3QgY2hhbmdlRm9ybUhhbmRsZXIgPSAoXG4gICAgZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBjdHJsRW50ZXJIYW5kbGVyID0gKFxuICAgIGU6IEtleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUuY3RybEtleSkgc2VuZEZvcm0oZm9ybSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1IZWFkZXJ9Pkd1ZXN0Ym9vayBmb3JtPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXRHcm91cH0+XG4gICAgICAgIDxzcGFuPkF1dGhvcjo8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT17J2F1dGhvcid9XG4gICAgICAgICAgdmFsdWU9e2Zvcm0uYXV0aG9yfVxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VGb3JtSGFuZGxlcn1cbiAgICAgICAgICBvbktleURvd249e2N0cmxFbnRlckhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0R3JvdXB9PlxuICAgICAgICA8c3Bhbj5NZXNzYWdlOjwvc3Bhbj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICBuYW1lPXsnbWVzc2FnZSd9XG4gICAgICAgICAgdmFsdWU9e2Zvcm0ubWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgb25LZXlEb3duPXtjdHJsRW50ZXJIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0gb25DbGljaz17KCkgPT4gc2VuZEZvcm0oZm9ybSl9PlxuICAgICAgICBTZW5kXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtR3JvdXBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});