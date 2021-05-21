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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_FormGroup_SendButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FormGroup/SendButton */ \"./components/FormGroup/SendButton.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: '',\n    message: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var validation = function validation(form) {\n    var err = [];\n    var reName = /^[\\w&.\\-]+$/;\n    var reHTTP = /(?:(?:https?):\\/\\/)/;\n\n    if (!form.author || !form.message) {\n      var labels = '';\n      !form.author && (labels += 'Author; ');\n      !form.message && (labels += 'Message; ');\n      err.push(\"Field are empty: \".concat(labels));\n    } else if (!form.author.match(reName)) err.push('Author: Latin, number and underscore symbols are allowed');\n\n    if (form.message.match(reHTTP)) err.push('Author: HTTP(S) links are not allowed');\n    if (err.length !== 0) err.map(function (item) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(item);\n    });\n    return err.length === 0;\n  };\n\n  var sendForm = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    ;\n\n    (function (form) {\n      setForm(_objectSpread(_objectSpread({}, form), {}, {\n        message: form.message.trim()\n      }));\n\n      if (validation(form)) {\n        dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n        setForm(_objectSpread(_objectSpread({}, form), {}, {\n          message: ''\n        }));\n        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success('Message send');\n      }\n    });\n  });\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) sendForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormGroup_SendButton__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {\n      hideProgressBar: true,\n      closeOnClick: true,\n      draggable: false,\n      autoClose: 3000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"n873ExB/l5qT2fLo+1A/2Jy/14A=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsIm1lc3NhZ2UiLCJmb3JtIiwic2V0Rm9ybSIsInZhbGlkYXRpb24iLCJlcnIiLCJyZU5hbWUiLCJyZUhUVFAiLCJsYWJlbHMiLCJwdXNoIiwibWF0Y2giLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidG9hc3QiLCJzZW5kRm9ybSIsInVzZUNhbGxiYWNrIiwidHJpbSIsImFkZE5ld1Bvc3QiLCJjaGFuZ2VGb3JtSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjdHJsRW50ZXJIYW5kbGVyIiwia2V5Q29kZSIsImN0cmxLZXkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBYSxHQUFHLFNBQWhCQSxTQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRDBCLGtCQUdGQywrQ0FBUSxDQUFDO0FBQy9CQyxVQUFNLEVBQUUsRUFEdUI7QUFFL0JDLFdBQU8sRUFBRTtBQUZzQixHQUFELENBSE47QUFBQSxNQUduQkMsSUFIbUI7QUFBQSxNQUdiQyxPQUhhOztBQVExQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRixJQUFELEVBQTBCO0FBQzNDLFFBQU1HLEdBQWEsR0FBRyxFQUF0QjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxhQUFmO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLHFCQUFmOztBQUNBLFFBQUksQ0FBQ0wsSUFBSSxDQUFDRixNQUFOLElBQWdCLENBQUNFLElBQUksQ0FBQ0QsT0FBMUIsRUFBbUM7QUFDakMsVUFBSU8sTUFBYyxHQUFH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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRixlQXVCRSw4REFBQywwREFBRDtBQUNFLHFCQUFlLE1BRGpCO0FBRUUsa0JBQVksTUFGZDtBQUdFLGVBQVMsRUFBRSxLQUhiO0FBSUUsZUFBUyxFQUFFO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWhGRDs7R0FBTTVCLFM7VUFDYUUsb0Q7OztLQURiRixTO0FBa0ZOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCBLZXlib2FyZEV2ZW50LCBGQywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9ybUdyb3VwLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBhZGROZXdQb3N0IH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb24nXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgSVBvc3QgfSBmcm9tICdAL2ludGVyZmFjZXMvUG9zdHMnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcbmltcG9ydCBTZW5kQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtR3JvdXAvU2VuZEJ1dHRvbidcblxuY29uc3QgRm9ybUdyb3VwOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGF1dGhvcjogJycsXG4gICAgbWVzc2FnZTogJycsXG4gIH0pXG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IChmb3JtOiBJUG9zdCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGVycjogc3RyaW5nW10gPSBbXVxuICAgIGNvbnN0IHJlTmFtZSA9IC9eW1xcdyYuXFwtXSskL1xuICAgIGNvbnN0IHJlSFRUUCA9IC8oPzooPzpodHRwcz8pOlxcL1xcLykvXG4gICAgaWYgKCFmb3JtLmF1dGhvciB8fCAhZm9ybS5tZXNzYWdlKSB7XG4gICAgICBsZXQgbGFiZWxzOiBzdHJpbmcgPSAnJ1xuICAgICAgIWZvcm0uYXV0aG9yICYmIChsYWJlbHMgKz0gJ0F1dGhvcjsgJylcbiAgICAgICFmb3JtLm1lc3NhZ2UgJiYgKGxhYmVscyArPSAnTWVzc2FnZTsgJylcbiAgICAgIGVyci5wdXNoKGBGaWVsZCBhcmUgZW1wdHk6ICR7bGFiZWxzfWApXG4gICAgfSBlbHNlIGlmICghZm9ybS5hdXRob3IubWF0Y2gocmVOYW1lKSlcbiAgICAgIGVyci5wdXNoKCdBdXRob3I6IExhdGluLCBudW1iZXIgYW5kIHVuZGVyc2NvcmUgc3ltYm9scyBhcmUgYWxsb3dlZCcpXG4gICAgaWYgKGZvcm0ubWVzc2FnZS5tYXRjaChyZUhUVFApKVxuICAgICAgZXJyLnB1c2goJ0F1dGhvcjogSFRUUChTKSBsaW5rcyBhcmUgbm90IGFsbG93ZWQnKVxuICAgIGlmIChlcnIubGVuZ3RoICE9PSAwKSBlcnIubWFwKChpdGVtKSA9PiB0b2FzdC5lcnJvcihpdGVtKSlcbiAgICByZXR1cm4gZXJyLmxlbmd0aCA9PT0gMFxuICB9XG5cbiAgY29uc3Qgc2VuZEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgOyhmb3JtOiBJUG9zdCkgPT4ge1xuICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIG1lc3NhZ2U6IGZvcm0ubWVzc2FnZS50cmltKCkgfSlcbiAgICAgIGlmICh2YWxpZGF0aW9uKGZvcm0pKSB7XG4gICAgICAgIGRpc3BhdGNoKGFkZE5ld1Bvc3QoZm9ybSkpXG4gICAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCBtZXNzYWdlOiAnJyB9KVxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdNZXNzYWdlIHNlbmQnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBjaGFuZ2VGb3JtSGFuZGxlciA9IChcbiAgICBlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGN0cmxFbnRlckhhbmRsZXIgPSAoXG4gICAgZTogS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgZS5jdHJsS2V5KSBzZW5kRm9ybShmb3JtKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUhlYWRlcn0+R3Vlc3Rib29rIGZvcm08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dEdyb3VwfT5cbiAgICAgICAgPHNwYW4+QXV0aG9yOjwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPXsnYXV0aG9yJ31cbiAgICAgICAgICB2YWx1ZT17Zm9ybS5hdXRob3J9XG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUZvcm1IYW5kbGVyfVxuICAgICAgICAgIG9uS2V5RG93bj17Y3RybEVudGVySGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXRHcm91cH0+XG4gICAgICAgIDxzcGFuPk1lc3NhZ2U6PC9zcGFuPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgIG5hbWU9eydtZXNzYWdlJ31cbiAgICAgICAgICB2YWx1ZT17Zm9ybS5tZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VGb3JtSGFuZGxlcn1cbiAgICAgICAgICBvbktleURvd249e2N0cmxFbnRlckhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTZW5kQnV0dG9uIC8+XG4gICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyXG4gICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Hcm91cFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});