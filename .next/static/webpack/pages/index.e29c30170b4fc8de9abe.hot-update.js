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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: '',\n    message: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var err = [];\n\n  var validation = function validation(form) {\n    var reName = /^[\\w&.\\-]+$/;\n    var reHTTP = /(?:(?:https?):\\/\\/)/;\n    if (!form.author || !form.message) err.push(\"Field are empty: \");\n    if (!form.author.match(reName)) err.push('Author: Latin, number and underscore symbols are allowed');\n    if (form.author.match(reHTTP)) err.push('Author: HTTP(S) links are not allowed');\n    if (err.length !== 0) err.map(function (item) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(item);\n    });\n    return err.length === 0;\n  };\n\n  var sendForm = function sendForm(form) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: form.message.trim()\n    }));\n\n    if (validation(form)) {\n      dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n      setForm(_objectSpread(_objectSpread({}, form), {}, {\n        message: ''\n      }));\n      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('Message send');\n    }\n  };\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) sendForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n      onClick: function onClick() {\n        return sendForm(form);\n      },\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {\n      hideProgressBar: true,\n      closeOnClick: true,\n      draggable: false,\n      autoClose: 3000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"8dUxk9boK5u8v4aGY+HwQSytnL0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsIm1lc3NhZ2UiLCJmb3JtIiwic2V0Rm9ybSIsImVyciIsInZhbGlkYXRpb24iLCJyZU5hbWUiLCJyZUhUVFAiLCJwdXNoIiwibWF0Y2giLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidG9hc3QiLCJzZW5kRm9ybSIsInRyaW0iLCJhZGROZXdQb3N0IiwiY2hhbmdlRm9ybUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY3RybEVudGVySGFuZGxlciIsImtleUNvZGUiLCJjdHJsS2V5Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQWEsR0FBRyxTQUFoQkEsU0FBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQUQwQixrQkFHRkMsK0NBQVEsQ0FBQztBQUMvQkMsVUFBTSxFQUFFLEVBRHVCO0FBRS9CQyxXQUFPLEVBQUU7QUFGc0IsR0FBRCxDQUhOO0FBQUEsTUFHbkJDLElBSG1CO0FBQUEsTUFHYkMsT0FIYTs7QUFRMUIsTUFBSUMsR0FBYSxHQUFHLEVBQXBCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNILElBQUQsRUFBMEI7QUFDM0MsUUFBTUksTUFBTSxHQUFHLGFBQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUcscUJBQWY7QUFDQSxRQUFJLENBQUNMLElBQUksQ0FBQ0YsTUFBTixJQUFnQixDQUFDRSxJQUFJLENBQUNELE9BQTFCLEVBQW1DRyxHQUFHLENBQUNJLElBQUo7QUFDbkMsUUFBSSxDQUFDTixJQUFJLENBQUNGLE1BQUws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O0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQTVFRDs7R0FBTU4sUztVQUNhRSxvRDs7O0tBRGJGLFM7QUE4RU4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Hcm91cC9Gb3JtR3JvdXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEtleWJvYXJkRXZlbnQsIEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm1Hcm91cC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgYWRkTmV3UG9zdCB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IElQb3N0IH0gZnJvbSAnQC9pbnRlcmZhY2VzL1Bvc3RzJ1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXG5cbmNvbnN0IEZvcm1Hcm91cDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICBhdXRob3I6ICcnLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9KVxuXG4gIGxldCBlcnI6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgdmFsaWRhdGlvbiA9IChmb3JtOiBJUG9zdCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHJlTmFtZSA9IC9eW1xcdyYuXFwtXSskL1xuICAgIGNvbnN0IHJlSFRUUCA9IC8oPzooPzpodHRwcz8pOlxcL1xcLykvXG4gICAgaWYgKCFmb3JtLmF1dGhvciB8fCAhZm9ybS5tZXNzYWdlKSBlcnIucHVzaChgRmllbGQgYXJlIGVtcHR5OiBgKVxuICAgIGlmICghZm9ybS5hdXRob3IubWF0Y2gocmVOYW1lKSlcbiAgICAgIGVyci5wdXNoKCdBdXRob3I6IExhdGluLCBudW1iZXIgYW5kIHVuZGVyc2NvcmUgc3ltYm9scyBhcmUgYWxsb3dlZCcpXG4gICAgaWYgKGZvcm0uYXV0aG9yLm1hdGNoKHJlSFRUUCkpXG4gICAgICBlcnIucHVzaCgnQXV0aG9yOiBIVFRQKFMpIGxpbmtzIGFyZSBub3QgYWxsb3dlZCcpXG4gICAgaWYgKGVyci5sZW5ndGggIT09IDApIGVyci5tYXAoKGl0ZW0pID0+IHRvYXN0LmVycm9yKGl0ZW0pKVxuICAgIHJldHVybiBlcnIubGVuZ3RoID09PSAwXG4gIH1cblxuICBjb25zdCBzZW5kRm9ybSA9IChmb3JtOiBJUG9zdCkgPT4ge1xuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBtZXNzYWdlOiBmb3JtLm1lc3NhZ2UudHJpbSgpIH0pXG4gICAgaWYgKHZhbGlkYXRpb24oZm9ybSkpIHtcbiAgICAgIGRpc3BhdGNoKGFkZE5ld1Bvc3QoZm9ybSkpXG4gICAgICBzZXRGb3JtKHsgLi4uZm9ybSwgbWVzc2FnZTogJycgfSlcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01lc3NhZ2Ugc2VuZCcpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hhbmdlRm9ybUhhbmRsZXIgPSAoXG4gICAgZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBjdHJsRW50ZXJIYW5kbGVyID0gKFxuICAgIGU6IEtleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUuY3RybEtleSkgc2VuZEZvcm0oZm9ybSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1IZWFkZXJ9Pkd1ZXN0Ym9vayBmb3JtPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXRHcm91cH0+XG4gICAgICAgIDxzcGFuPkF1dGhvcjo8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT17J2F1dGhvcid9XG4gICAgICAgICAgdmFsdWU9e2Zvcm0uYXV0aG9yfVxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VGb3JtSGFuZGxlcn1cbiAgICAgICAgICBvbktleURvd249e2N0cmxFbnRlckhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0R3JvdXB9PlxuICAgICAgICA8c3Bhbj5NZXNzYWdlOjwvc3Bhbj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICBuYW1lPXsnbWVzc2FnZSd9XG4gICAgICAgICAgdmFsdWU9e2Zvcm0ubWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgb25LZXlEb3duPXtjdHJsRW50ZXJIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0gb25DbGljaz17KCkgPT4gc2VuZEZvcm0oZm9ybSl9PlxuICAgICAgICBTZW5kXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXJcbiAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgIGF1dG9DbG9zZT17MzAwMH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUdyb3VwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});