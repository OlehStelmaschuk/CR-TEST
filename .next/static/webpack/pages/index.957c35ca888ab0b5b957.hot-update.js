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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: '',\n    message: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: String(localStorage.getItem('message')),\n      author: String(localStorage.getItem('author'))\n    }));\n  }, []);\n\n  var validation = function validation(form) {\n    var err = [];\n    var reName = /^[\\w&.\\-]+$/;\n    var reHTTP = /(?:(?:https?):\\/\\/)/;\n\n    if (!form.author || !form.message.trim()) {\n      var labels = '';\n      !form.author && (labels += 'Author; ');\n      !form.message && (labels += 'Message; ');\n      err.push(\"Field are empty: \".concat(labels));\n    } else if (!form.author.match(reName)) err.push('Author: Latin, number and underscore symbols are allowed');\n\n    if (form.message.match(reHTTP)) err.push('Author: HTTP(S) links are not allowed');\n    if (err.length !== 0) err.map(function (item) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(item);\n    });\n    return err.length === 0;\n  };\n\n  var sendForm = function sendForm(form) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: form.message.trim()\n    }));\n\n    if (validation(form)) {\n      dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n      setForm(_objectSpread(_objectSpread({}, form), {}, {\n        message: ''\n      }));\n      localStorage.setItem('message', '');\n      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('Message send');\n    }\n  };\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n    localStorage.setItem(e.target.name, e.target.value);\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) sendForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n      onClick: function onClick() {\n        return sendForm(form);\n      },\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {\n      hideProgressBar: true,\n      closeOnClick: true,\n      draggable: false,\n      autoClose: 3000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"BhjU7UpQLR8Sz9ba+Q6DHvDhKY4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsIm1lc3NhZ2UiLCJmb3JtIiwic2V0Rm9ybSIsInVzZUVmZmVjdCIsIlN0cmluZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWxpZGF0aW9uIiwiZXJyIiwicmVOYW1lIiwicmVIVFRQIiwidHJpbSIsImxhYmVscyIsInB1c2giLCJtYXRjaCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ0b2FzdCIsInNlbmRGb3JtIiwiYWRkTmV3UG9zdCIsInNldEl0ZW0iLCJjaGFuZ2VGb3JtSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjdHJsRW50ZXJIYW5kbGVyIiwia2V5Q29kZSIsImN0cmxLZXkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBYSxHQUFHLFNBQWhCQSxTQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRDBCLGtCQUdGQywrQ0FBUSxDQUFRO0FBQ3RDQyxVQUFNLEVBQUUsRUFEOEI7QUFFdENDLFdBQU8sRUFBRTtBQUY2QixHQUFSLENBSE47QUFBQSxNQUduQkMsSUFIbUI7QUFBQSxNQUdiQyxPQUhhOztBQVExQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELFdBQU8saUNBQ0ZELElBREU7QUFFTEQsYUFBTyxFQUFFSSxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFELENBRlY7QUFHTFAsWUFBTSxFQUFFSyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFEO0FBSFQsT0FBUDtB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Z0JBQVEsRUFBRXVCLGlCQUpaO0FBS0UsaUJBQVMsRUFBRUs7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFZRTtBQUFLLGVBQVMsRUFBRUcsNkVBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQ0UsWUFBSSxFQUFFLENBRFI7QUFFRSxZQUFJLEVBQUUsU0FGUjtBQUdFLGFBQUssRUFBRTdCLElBQUksQ0FBQ0QsT0FIZDtBQUlFLGdCQUFRLEVBQUVzQixpQkFKWjtBQUtFLGlCQUFTLEVBQUVLO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGLGVBc0JFO0FBQVEsZUFBUyxFQUFFRyxrRUFBbkI7QUFBK0IsYUFBTyxFQUFFO0FBQUEsZUFBTVgsUUFBUSxDQUFDbEIsSUFBRCxDQUFkO0FBQUEsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkYsZUF5QkUsOERBQUMsMERBQUQ7QUFDRSxxQkFBZSxNQURqQjtBQUVFLGtCQUFZLE1BRmQ7QUFHRSxlQUFTLEVBQUUsS0FIYjtBQUlFLGVBQVMsRUFBRTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0ExRkQ7O0dBQU1OLFM7VUFDYUUsb0Q7OztLQURiRixTO0FBNEZOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZUV2ZW50LFxuICBLZXlib2FyZEV2ZW50LFxuICBGQyxcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlQ2FsbGJhY2ssXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm1Hcm91cC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgYWRkTmV3UG9zdCB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IElQb3N0IH0gZnJvbSAnQC9pbnRlcmZhY2VzL1Bvc3RzJ1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXG5cbmNvbnN0IEZvcm1Hcm91cDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlPElQb3N0Pih7XG4gICAgYXV0aG9yOiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvcm0oe1xuICAgICAgLi4uZm9ybSxcbiAgICAgIG1lc3NhZ2U6IFN0cmluZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVzc2FnZScpKSxcbiAgICAgIGF1dGhvcjogU3RyaW5nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRob3InKSksXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IChmb3JtOiBJUG9zdCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGVycjogc3RyaW5nW10gPSBbXVxuICAgIGNvbnN0IHJlTmFtZSA9IC9eW1xcdyYuXFwtXSskL1xuICAgIGNvbnN0IHJlSFRUUCA9IC8oPzooPzpodHRwcz8pOlxcL1xcLykvXG4gICAgaWYgKCFmb3JtLmF1dGhvciB8fCAhZm9ybS5tZXNzYWdlLnRyaW0oKSkge1xuICAgICAgbGV0IGxhYmVsczogc3RyaW5nID0gJydcbiAgICAgICFmb3JtLmF1dGhvciAmJiAobGFiZWxzICs9ICdBdXRob3I7ICcpXG4gICAgICAhZm9ybS5tZXNzYWdlICYmIChsYWJlbHMgKz0gJ01lc3NhZ2U7ICcpXG4gICAgICBlcnIucHVzaChgRmllbGQgYXJlIGVtcHR5OiAke2xhYmVsc31gKVxuICAgIH0gZWxzZSBpZiAoIWZvcm0uYXV0aG9yLm1hdGNoKHJlTmFtZSkpXG4gICAgICBlcnIucHVzaCgnQXV0aG9yOiBMYXRpbiwgbnVtYmVyIGFuZCB1bmRlcnNjb3JlIHN5bWJvbHMgYXJlIGFsbG93ZWQnKVxuICAgIGlmIChmb3JtLm1lc3NhZ2UubWF0Y2gocmVIVFRQKSlcbiAgICAgIGVyci5wdXNoKCdBdXRob3I6IEhUVFAoUykgbGlua3MgYXJlIG5vdCBhbGxvd2VkJylcbiAgICBpZiAoZXJyLmxlbmd0aCAhPT0gMCkgZXJyLm1hcCgoaXRlbSkgPT4gdG9hc3QuZXJyb3IoaXRlbSkpXG4gICAgcmV0dXJuIGVyci5sZW5ndGggPT09IDBcbiAgfVxuXG4gIGNvbnN0IHNlbmRGb3JtID0gKGZvcm06IElQb3N0KSA9PiB7XG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIG1lc3NhZ2U6IGZvcm0ubWVzc2FnZS50cmltKCkgfSlcbiAgICBpZiAodmFsaWRhdGlvbihmb3JtKSkge1xuICAgICAgZGlzcGF0Y2goYWRkTmV3UG9zdChmb3JtKSlcbiAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCBtZXNzYWdlOiAnJyB9KVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lc3NhZ2UnLCAnJylcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01lc3NhZ2Ugc2VuZCcpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hhbmdlRm9ybUhhbmRsZXIgPSAoXG4gICAgZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBjdHJsRW50ZXJIYW5kbGVyID0gKFxuICAgIGU6IEtleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUuY3RybEtleSkgc2VuZEZvcm0oZm9ybSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1IZWFkZXJ9Pkd1ZXN0Ym9vayBmb3JtPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXRHcm91cH0+XG4gICAgICAgIDxzcGFuPkF1dGhvcjo8L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT17J2F1dGhvcid9XG4gICAgICAgICAgdmFsdWU9e2Zvcm0uYXV0aG9yfVxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VGb3JtSGFuZGxlcn1cbiAgICAgICAgICBvbktleURvd249e2N0cmxFbnRlckhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0R3JvdXB9PlxuICAgICAgICA8c3Bhbj5NZXNzYWdlOjwvc3Bhbj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcm93cz17Nn1cbiAgICAgICAgICBuYW1lPXsnbWVzc2FnZSd9XG4gICAgICAgICAgdmFsdWU9e2Zvcm0ubWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgb25LZXlEb3duPXtjdHJsRW50ZXJIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0gb25DbGljaz17KCkgPT4gc2VuZEZvcm0oZm9ybSl9PlxuICAgICAgICBTZW5kXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXJcbiAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgIGF1dG9DbG9zZT17MzAwMH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUdyb3VwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});