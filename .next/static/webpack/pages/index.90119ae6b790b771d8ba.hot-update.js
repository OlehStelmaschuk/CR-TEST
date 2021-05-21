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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: '',\n    message: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      author: localStorage.getItem('author').toString()\n    }));\n    localStorage.getItem('message');\n  }, []);\n\n  var validation = function validation(form) {\n    var err = [];\n    var reName = /^[\\w&.\\-]+$/;\n    var reHTTP = /(?:(?:https?):\\/\\/)/;\n\n    if (!form.author || !form.message) {\n      var labels = '';\n      !form.author && (labels += 'Author; ');\n      !form.message && (labels += 'Message; ');\n      err.push(\"Field are empty: \".concat(labels));\n    } else if (!form.author.match(reName)) err.push('Author: Latin, number and underscore symbols are allowed');\n\n    if (form.message.match(reHTTP)) err.push('Author: HTTP(S) links are not allowed');\n    if (err.length !== 0) err.map(function (item) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(item);\n    });\n    return err.length === 0;\n  };\n\n  var sendForm = function sendForm(form) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: form.message.trim()\n    }));\n\n    if (validation(form)) {\n      dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n      setForm(_objectSpread(_objectSpread({}, form), {}, {\n        message: ''\n      }));\n      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('Message send');\n    }\n  };\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n    localStorage.setItem(e.target.name, e.target.value);\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) sendForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n      onClick: function onClick() {\n        return sendForm(form);\n      },\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {\n      hideProgressBar: true,\n      closeOnClick: true,\n      draggable: false,\n      autoClose: 3000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"BhjU7UpQLR8Sz9ba+Q6DHvDhKY4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsIm1lc3NhZ2UiLCJmb3JtIiwic2V0Rm9ybSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b1N0cmluZyIsInZhbGlkYXRpb24iLCJlcnIiLCJyZU5hbWUiLCJyZUhUVFAiLCJsYWJlbHMiLCJwdXNoIiwibWF0Y2giLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidG9hc3QiLCJzZW5kRm9ybSIsInRyaW0iLCJhZGROZXdQb3N0IiwiY2hhbmdlRm9ybUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0SXRlbSIsImN0cmxFbnRlckhhbmRsZXIiLCJrZXlDb2RlIiwiY3RybEtleSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFhLEdBQUcsU0FBaEJBLFNBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEMEIsa0JBR0ZDLCtDQUFRLENBQVE7QUFDdENDLFVBQU0sRUFBRSxFQUQ4QjtBQUV0Q0MsV0FBTyxFQUFFO0FBRjZCLEdBQVIsQ0FITjtBQUFBLE1BR25CQyxJQUhtQjtBQUFBLE1BR2JDLE9BSGE7O0FBUTFCQyxrREFBUyxDQUFDLFlBQU07QUFDZEQsV0FBTyxpQ0FDRkQsSUFERTtBQUVMRixZQUFNLEVBQUVLLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixFQUErQkMsUUFBL0I7QUFGSCxPQUFQO0FBSUFGLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckI7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1B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RixlQVlFO0FBQUssZUFBUyxFQUFFRyw2RUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxZQUFJLEVBQUUsQ0FEUjtBQUVFLFlBQUksRUFBRSxTQUZSO0FBR0UsYUFBSyxFQUFFN0IsSUFBSSxDQUFDRCxPQUhkO0FBSUUsZ0JBQVEsRUFBRXFCLGlCQUpaO0FBS0UsaUJBQVMsRUFBRU07QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFzQkU7QUFBUSxlQUFTLEVBQUVHLGtFQUFuQjtBQUErQixhQUFPLEVBQUU7QUFBQSxlQUFNWixRQUFRLENBQUNqQixJQUFELENBQWQ7QUFBQSxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRixlQXlCRSw4REFBQywwREFBRDtBQUNFLHFCQUFlLE1BRGpCO0FBRUUsa0JBQVksTUFGZDtBQUdFLGVBQVMsRUFBRSxLQUhiO0FBSUUsZUFBUyxFQUFFO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQXpGRDs7R0FBTU4sUztVQUNhRSxvRDs7O0tBRGJGLFM7QUEyRk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1Hcm91cC9Gb3JtR3JvdXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEtleWJvYXJkRXZlbnQsIEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9ybUdyb3VwLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBhZGROZXdQb3N0IH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb24nXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgSVBvc3QgfSBmcm9tICdAL2ludGVyZmFjZXMvUG9zdHMnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcblxuY29uc3QgRm9ybUdyb3VwOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGU8SVBvc3Q+KHtcbiAgICBhdXRob3I6ICcnLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9ybSh7XG4gICAgICAuLi5mb3JtLFxuICAgICAgYXV0aG9yOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aG9yJykudG9TdHJpbmcoKSxcbiAgICB9KVxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXNzYWdlJylcbiAgfSwgW10pXG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IChmb3JtOiBJUG9zdCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGVycjogc3RyaW5nW10gPSBbXVxuICAgIGNvbnN0IHJlTmFtZSA9IC9eW1xcdyYuXFwtXSskL1xuICAgIGNvbnN0IHJlSFRUUCA9IC8oPzooPzpodHRwcz8pOlxcL1xcLykvXG4gICAgaWYgKCFmb3JtLmF1dGhvciB8fCAhZm9ybS5tZXNzYWdlKSB7XG4gICAgICBsZXQgbGFiZWxzOiBzdHJpbmcgPSAnJ1xuICAgICAgIWZvcm0uYXV0aG9yICYmIChsYWJlbHMgKz0gJ0F1dGhvcjsgJylcbiAgICAgICFmb3JtLm1lc3NhZ2UgJiYgKGxhYmVscyArPSAnTWVzc2FnZTsgJylcbiAgICAgIGVyci5wdXNoKGBGaWVsZCBhcmUgZW1wdHk6ICR7bGFiZWxzfWApXG4gICAgfSBlbHNlIGlmICghZm9ybS5hdXRob3IubWF0Y2gocmVOYW1lKSlcbiAgICAgIGVyci5wdXNoKCdBdXRob3I6IExhdGluLCBudW1iZXIgYW5kIHVuZGVyc2NvcmUgc3ltYm9scyBhcmUgYWxsb3dlZCcpXG4gICAgaWYgKGZvcm0ubWVzc2FnZS5tYXRjaChyZUhUVFApKVxuICAgICAgZXJyLnB1c2goJ0F1dGhvcjogSFRUUChTKSBsaW5rcyBhcmUgbm90IGFsbG93ZWQnKVxuICAgIGlmIChlcnIubGVuZ3RoICE9PSAwKSBlcnIubWFwKChpdGVtKSA9PiB0b2FzdC5lcnJvcihpdGVtKSlcbiAgICByZXR1cm4gZXJyLmxlbmd0aCA9PT0gMFxuICB9XG5cbiAgY29uc3Qgc2VuZEZvcm0gPSAoZm9ybTogSVBvc3QpID0+IHtcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgbWVzc2FnZTogZm9ybS5tZXNzYWdlLnRyaW0oKSB9KVxuICAgIGlmICh2YWxpZGF0aW9uKGZvcm0pKSB7XG4gICAgICBkaXNwYXRjaChhZGROZXdQb3N0KGZvcm0pKVxuICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIG1lc3NhZ2U6ICcnIH0pXG4gICAgICB0b2FzdC5zdWNjZXNzKCdNZXNzYWdlIHNlbmQnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoYW5nZUZvcm1IYW5kbGVyID0gKFxuICAgIGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgY3RybEVudGVySGFuZGxlciA9IChcbiAgICBlOiBLZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBlLmN0cmxLZXkpIHNlbmRGb3JtKGZvcm0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSGVhZGVyfT5HdWVzdGJvb2sgZm9ybTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0R3JvdXB9PlxuICAgICAgICA8c3Bhbj5BdXRob3I6PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIG5hbWU9eydhdXRob3InfVxuICAgICAgICAgIHZhbHVlPXtmb3JtLmF1dGhvcn1cbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgb25LZXlEb3duPXtjdHJsRW50ZXJIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dEdyb3VwfT5cbiAgICAgICAgPHNwYW4+TWVzc2FnZTo8L3NwYW4+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJvd3M9ezZ9XG4gICAgICAgICAgbmFtZT17J21lc3NhZ2UnfVxuICAgICAgICAgIHZhbHVlPXtmb3JtLm1lc3NhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUZvcm1IYW5kbGVyfVxuICAgICAgICAgIG9uS2V5RG93bj17Y3RybEVudGVySGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9eygpID0+IHNlbmRGb3JtKGZvcm0pfT5cbiAgICAgICAgU2VuZFxuICAgICAgPC9idXR0b24+XG4gICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyXG4gICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Hcm91cFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});