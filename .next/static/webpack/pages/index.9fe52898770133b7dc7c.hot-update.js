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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: '',\n    message: '',\n    timestamp: Date.now()\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var sendForm = function sendForm(form) {\n    dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: ''\n    }));\n  };\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) sendForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n      onClick: function onClick() {\n        return sendForm(form);\n      },\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"XWtRI+YKDQao3dQjo8KNnTtnZp8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiZm9ybSIsInNldEZvcm0iLCJzZW5kRm9ybSIsImFkZE5ld1Bvc3QiLCJjaGFuZ2VGb3JtSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjdHJsRW50ZXJIYW5kbGVyIiwia2V5Q29kZSIsImN0cmxLZXkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFhLEdBQUcsU0FBaEJBLFNBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEMEIsa0JBR0ZDLCtDQUFRLENBQUM7QUFDL0JDLFVBQU0sRUFBRSxFQUR1QjtBQUUvQkMsV0FBTyxFQUFFLEVBRnNCO0FBRy9CQyxhQUFTLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQUhvQixHQUFELENBSE47QUFBQSxNQUduQkMsSUFIbUI7QUFBQSxNQUdiQyxPQUhhOztBQVMxQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixJQUFELEVBQWlCO0FBQ2hDUixZQUFRLENBQUNXLHFFQUFVLENBQUNILElBQUQsQ0FBWCxDQUFSO0FBQ0FDLFdBQU8saUNBQU1ELElBQU47QUFBWUosYUFBTyxFQUFFO0FBQXJCLE9BQVA7QUFDRCxHQUhEOztBQUtBLE1BQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FDeEJDLENBRHdCLEVBRXJCO0FBQ0hKLFdBQU8saUNBQU1ELElBQU4sc0pBQWFLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUF0QixFQUE2QkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQXRDLEdBQVA7QUFDRCxHQUpEOztBQU1BLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FDdkJKLENBRHVCLEVBRXBCO0FBQ0gsUUFBSUEsQ0FBQyxDQUFDSyxPQUFGLEtBQWMsRUFBZCxJQUFvQkwsQ0FBQyxDQUFDTSxPQUExQixFQUFtQ1QsUUFBUSxDQUFDRixJQUFELENBQVI7QUFDcEMsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVksbUVBQWhCO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUVBLHlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLDZFQUFoQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFFLFFBRlI7QUFHRSxhQUFLLEVBQUVaLElBQUksQ0FBQ0wsTUFIZDtBQUlFLGdCQUFRLEVBQUVTLGlCQUpaO0FBS0UsaUJBQVMsRUFBRUs7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFZRTtBQUFLLGVBQVMsRUFBRUcsNkVBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsWUFBSSxFQUFFLENBRFI7QUFFRSxZQUFJLEVBQUUsU0FGUjtBQUdFLGFBQUssRUFBRVosSUFBSSxDQUFDSixPQUhkO0FBSUUsZ0JBQVEsRUFBRVEsaUJBSlo7QUFLRSxpQkFBUyxFQUFFSztBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQXNCRTtBQUFRLGVBQVMsRUFBRUcsa0VBQW5CO0FBQStCLGFBQU8sRUFBRTtBQUFBLGVBQU1WLFFBQVEsQ0FBQ0YsSUFBRCxDQUFkO0FBQUEsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0F0REQ7O0dBQU1ULFM7VUFDYUUsb0Q7OztLQURiRixTO0FBd0ROLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCBLZXlib2FyZEV2ZW50LCBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb3JtR3JvdXAubW9kdWxlLmNzcydcbmltcG9ydCB7IGFkZE5ld1Bvc3QgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvbidcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBJUG9zdCB9IGZyb20gJ0AvaW50ZXJmYWNlcy9Qb3N0cydcblxuY29uc3QgRm9ybUdyb3VwOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGF1dGhvcjogJycsXG4gICAgbWVzc2FnZTogJycsXG4gICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICB9KVxuXG4gIGNvbnN0IHNlbmRGb3JtID0gKGZvcm06IElQb3N0KSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkTmV3UG9zdChmb3JtKSlcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgbWVzc2FnZTogJycgfSlcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZUZvcm1IYW5kbGVyID0gKFxuICAgIGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgY3RybEVudGVySGFuZGxlciA9IChcbiAgICBlOiBLZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBlLmN0cmxLZXkpIHNlbmRGb3JtKGZvcm0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSGVhZGVyfT5HdWVzdGJvb2sgZm9ybTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0R3JvdXB9PlxuICAgICAgICA8c3Bhbj5BdXRob3I6PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9eydhdXRob3InfVxuICAgICAgICAgIHZhbHVlPXtmb3JtLmF1dGhvcn1cbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgb25LZXlEb3duPXtjdHJsRW50ZXJIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dEdyb3VwfT5cbiAgICAgICAgPHNwYW4+TWVzc2FnZTo8L3NwYW4+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJvd3M9ezZ9XG4gICAgICAgICAgbmFtZT17J21lc3NhZ2UnfVxuICAgICAgICAgIHZhbHVlPXtmb3JtLm1lc3NhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUZvcm1IYW5kbGVyfVxuICAgICAgICAgIG9uS2V5RG93bj17Y3RybEVudGVySGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9eygpID0+IHNlbmRGb3JtKGZvcm0pfT5cbiAgICAgICAgU2VuZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUdyb3VwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});