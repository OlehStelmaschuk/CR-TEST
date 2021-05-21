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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormGroup.module.css */ \"./components/FormGroup/FormGroup.module.css\");\n/* harmony import */ var _FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/postAction */ \"./store/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alex/_source/cr-test/components/FormGroup/FormGroup.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar FormGroup = function FormGroup() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    author: localStorage.getItem('author') || '',\n    message: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var validation = function validation(form) {\n    var err = [];\n    var reName = /^[\\w&.\\-]+$/;\n    var reHTTP = /(?:(?:https?):\\/\\/)/;\n\n    if (!form.author || !form.message) {\n      var labels = '';\n      !form.author && (labels += 'Author; ');\n      !form.message && (labels += 'Message; ');\n      err.push(\"Field are empty: \".concat(labels));\n    } else if (!form.author.match(reName)) err.push('Author: Latin, number and underscore symbols are allowed');\n\n    if (form.message.match(reHTTP)) err.push('Author: HTTP(S) links are not allowed');\n    if (err.length !== 0) err.map(function (item) {\n      return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(item);\n    });\n    return err.length === 0;\n  };\n\n  var sendForm = function sendForm(form) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      message: form.message.trim()\n    }));\n\n    if (validation(form)) {\n      dispatch((0,_store_actions_postAction__WEBPACK_IMPORTED_MODULE_3__.addNewPost)(form));\n      setForm(_objectSpread(_objectSpread({}, form), {}, {\n        message: ''\n      }));\n      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success('Message send');\n    }\n  };\n\n  var changeFormHandler = function changeFormHandler(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, (0,_home_alex_source_cr_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));\n    localStorage.setItem(e.target.name, e.target.value);\n  };\n\n  var ctrlEnterHandler = function ctrlEnterHandler(e) {\n    if (e.keyCode === 13 && e.ctrlKey) sendForm(form);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formHeader),\n      children: \"Guestbook form\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Author:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: 'author',\n        value: form.author,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().formInputGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Message:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        rows: 6,\n        name: 'message',\n        value: form.message,\n        onChange: changeFormHandler,\n        onKeyDown: ctrlEnterHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_FormGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n      onClick: function onClick() {\n        return sendForm(form);\n      },\n      children: \"Send\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {\n      hideProgressBar: true,\n      closeOnClick: true,\n      draggable: false,\n      autoClose: 3000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FormGroup, \"jYT0YC3g1r4FKHmB2os5+qKtSvQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c = FormGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormGroup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormGroup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnRzeD8yMGUxIl0sIm5hbWVzIjpbIkZvcm1Hcm91cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImF1dGhvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtZXNzYWdlIiwiZm9ybSIsInNldEZvcm0iLCJ2YWxpZGF0aW9uIiwiZXJyIiwicmVOYW1lIiwicmVIVFRQIiwibGFiZWxzIiwicHVzaCIsIm1hdGNoIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsInRvYXN0Iiwic2VuZEZvcm0iLCJ0cmltIiwiYWRkTmV3UG9zdCIsImNoYW5nZUZvcm1IYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldEl0ZW0iLCJjdHJsRW50ZXJIYW5kbGVyIiwia2V5Q29kZSIsImN0cmxLZXkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBYSxHQUFHLFNBQWhCQSxTQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRDBCLGtCQUdGQywrQ0FBUSxDQUFDO0FBQy9CQyxVQUFNLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixLQUFrQyxFQURYO0FBRS9CQyxXQUFPLEVBQUU7QUFGc0IsR0FBRCxDQUhOO0FBQUEsTUFHbkJDLElBSG1CO0FBQUEsTUFHYkMsT0FIYTs7QUFRMUIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsSUFBRCxFQUEwQjtBQUMzQyxRQUFNRyxHQUFhLEdBQUcsRUFBdEI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxxQkFBZjs7QUFDQSxRQUFJLENBQUNMLElBQUksQ0FBQ0osTUFBTixJQUFnQixDQUFDSSxJQUFJLENBQUNELE9BQTFCLEVBQW1DO0FBQ2pDLFVBQUlPLE1BQWMsR0FBRyxFQUFyQjtBQUNBLE9BQUNOLElBQUksQ0FBQ0osTUFBTixLQUFpQlUsTUFBTSxJQUFJLFVBQTNCO0FBQ0EsT0FBQ04sSUFBSSxDQUFDRCxPQUFOLEtBQWtCTyxNQUFNLElBQUksV0FBNUI7QUFDQUgsU0FBRyxDQUFDSSxJQUFKLDRCQUE2QkQsTUFBN0I7QUFDRCxLQUxELE1BS08sSUFBSSxDQUFDTixJQUFJLENBQUNKLE1BQUwsQ0FBWVksS0FBWixDQUFrQkosTUFBbEIsQ0FBTCxFQUNMRCxHQUFHLENBQUNJLElBQUosQ0FBUywwREFBVDs7QUFDRixRQUFJUCxJQUFJLENBQUNELE9BQUwsQ0FBYVMsS0FBYixDQUFtQkgsTUFBbkIsQ0FBSixFQUNFRixHQUFHLENBQUNJLElBQUosQ0FBUyx1Q0FBVDtBQUNGLFFBQUlKLEdBQUcsQ0FBQ00sTUFBSixLQUFlLENBQW5CLEVBQXNCTixHQUFHLENBQUNPLEdBQUosQ0FBUSxVQUFDQyxJQUFEO0FBQUEsYUFBVUMsdURBQUEsQ0FBWUQsSUFBWixDQUFWO0FBQUEsS0FBUjtBQUN0QixXQUFPUixHQUFHLENBQUNNLE1BQUosS0FBZSxDQUF0QjtBQUNELEdBZkQ7O0FBaUJBLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNiLElBQUQsRUFBaUI7QUFDaENDLFdBQU8saUNBQU1ELElBQU47QUFBWUQsYUFBTyxFQUFFQyxJQUFJLENBQUNELE9BQUwsQ0FBYWUsSUFBYjtBQUFyQixPQUFQOztBQUNBLFFBQUlaLFVBQVUsQ0FBQ0YsSUFBRCxDQUFkLEVBQXNCO0FBQ3BCUCxjQUFRLENBQUNzQixxRUFBVSxDQUFDZixJQUFELENBQVgsQ0FBUjtBQUNBQyxhQUFPLGlDQUFNRCxJQUFOO0FBQVlELGVBQU8sRUFBRTtBQUFyQixTQUFQO0FBQ0FhLCtEQUFBLENBQWMsY0FBZDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQ3hCQyxDQUR3QixFQUVyQjtBQUNIaEIsV0FBTyxpQ0FBTUQsSUFBTixzSkFBYWlCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUF0QixFQUE2QkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQXRDLEdBQVA7QUFDQXZCLGdCQUFZLENBQUN3QixPQUFiLENBQXFCSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBOUIsRUFBb0NGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUE3QztBQUNELEdBTEQ7O0FBT0EsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUN2QkwsQ0FEdUIsRUFFcEI7QUFDSCxRQUFJQSxDQUFDLENBQUNNLE9BQUYsS0FBYyxFQUFkLElBQW9CTixDQUFDLENBQUNPLE9BQTFCLEVBQW1DWCxRQUFRLENBQUNiLElBQUQsQ0FBUjtBQUNwQyxHQUpEOztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFeUIsbUVBQWhCO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUVBLHlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLDZFQUFoQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFFLFFBRlI7QUFHRSxhQUFLLEVBQUV6QixJQUFJLENBQUNKLE1BSGQ7QUFJRSxnQkFBUSxFQUFFb0IsaUJBSlo7QUFLRSxpQkFBUyxFQUFFTTtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVlFO0FBQUssZUFBUyxFQUFFRyw2RUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxZQUFJLEVBQUUsQ0FEUjtBQUVFLFlBQUksRUFBRSxTQUZSO0FBR0UsYUFBSyxFQUFFekIsSUFBSSxDQUFDRCxPQUhkO0FBSUUsZ0JBQVEsRUFBRWlCLGlCQUpaO0FBS0UsaUJBQVMsRUFBRU07QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFzQkU7QUFBUSxlQUFTLEVBQUVHLGtFQUFuQjtBQUErQixhQUFPLEVBQUU7QUFBQSxlQUFNWixRQUFRLENBQUNiLElBQUQsQ0FBZDtBQUFBLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGLGVBeUJFLDhEQUFDLDBEQUFEO0FBQ0UscUJBQWUsTUFEakI7QUFFRSxrQkFBWSxNQUZkO0FBR0UsZUFBUyxFQUFFLEtBSGI7QUFJRSxlQUFTLEVBQUU7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBakZEOztHQUFNUixTO1VBQ2FFLG9EOzs7S0FEYkYsUztBQW1GTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybUdyb3VwL0Zvcm1Hcm91cC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgS2V5Ym9hcmRFdmVudCwgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9ybUdyb3VwLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBhZGROZXdQb3N0IH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb24nXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgSVBvc3QgfSBmcm9tICdAL2ludGVyZmFjZXMvUG9zdHMnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcblxuY29uc3QgRm9ybUdyb3VwOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGF1dGhvcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhvcicpIHx8ICcnLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9KVxuXG4gIGNvbnN0IHZhbGlkYXRpb24gPSAoZm9ybTogSVBvc3QpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBlcnI6IHN0cmluZ1tdID0gW11cbiAgICBjb25zdCByZU5hbWUgPSAvXltcXHcmLlxcLV0rJC9cbiAgICBjb25zdCByZUhUVFAgPSAvKD86KD86aHR0cHM/KTpcXC9cXC8pL1xuICAgIGlmICghZm9ybS5hdXRob3IgfHwgIWZvcm0ubWVzc2FnZSkge1xuICAgICAgbGV0IGxhYmVsczogc3RyaW5nID0gJydcbiAgICAgICFmb3JtLmF1dGhvciAmJiAobGFiZWxzICs9ICdBdXRob3I7ICcpXG4gICAgICAhZm9ybS5tZXNzYWdlICYmIChsYWJlbHMgKz0gJ01lc3NhZ2U7ICcpXG4gICAgICBlcnIucHVzaChgRmllbGQgYXJlIGVtcHR5OiAke2xhYmVsc31gKVxuICAgIH0gZWxzZSBpZiAoIWZvcm0uYXV0aG9yLm1hdGNoKHJlTmFtZSkpXG4gICAgICBlcnIucHVzaCgnQXV0aG9yOiBMYXRpbiwgbnVtYmVyIGFuZCB1bmRlcnNjb3JlIHN5bWJvbHMgYXJlIGFsbG93ZWQnKVxuICAgIGlmIChmb3JtLm1lc3NhZ2UubWF0Y2gocmVIVFRQKSlcbiAgICAgIGVyci5wdXNoKCdBdXRob3I6IEhUVFAoUykgbGlua3MgYXJlIG5vdCBhbGxvd2VkJylcbiAgICBpZiAoZXJyLmxlbmd0aCAhPT0gMCkgZXJyLm1hcCgoaXRlbSkgPT4gdG9hc3QuZXJyb3IoaXRlbSkpXG4gICAgcmV0dXJuIGVyci5sZW5ndGggPT09IDBcbiAgfVxuXG4gIGNvbnN0IHNlbmRGb3JtID0gKGZvcm06IElQb3N0KSA9PiB7XG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIG1lc3NhZ2U6IGZvcm0ubWVzc2FnZS50cmltKCkgfSlcbiAgICBpZiAodmFsaWRhdGlvbihmb3JtKSkge1xuICAgICAgZGlzcGF0Y2goYWRkTmV3UG9zdChmb3JtKSlcbiAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCBtZXNzYWdlOiAnJyB9KVxuICAgICAgdG9hc3Quc3VjY2VzcygnTWVzc2FnZSBzZW5kJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGFuZ2VGb3JtSGFuZGxlciA9IChcbiAgICBlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGN0cmxFbnRlckhhbmRsZXIgPSAoXG4gICAgZTogS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgZS5jdHJsS2V5KSBzZW5kRm9ybShmb3JtKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUhlYWRlcn0+R3Vlc3Rib29rIGZvcm08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dEdyb3VwfT5cbiAgICAgICAgPHNwYW4+QXV0aG9yOjwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPXsnYXV0aG9yJ31cbiAgICAgICAgICB2YWx1ZT17Zm9ybS5hdXRob3J9XG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUZvcm1IYW5kbGVyfVxuICAgICAgICAgIG9uS2V5RG93bj17Y3RybEVudGVySGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXRHcm91cH0+XG4gICAgICAgIDxzcGFuPk1lc3NhZ2U6PC9zcGFuPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgIG5hbWU9eydtZXNzYWdlJ31cbiAgICAgICAgICB2YWx1ZT17Zm9ybS5tZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VGb3JtSGFuZGxlcn1cbiAgICAgICAgICBvbktleURvd249e2N0cmxFbnRlckhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXsoKSA9PiBzZW5kRm9ybShmb3JtKX0+XG4gICAgICAgIFNlbmRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhclxuICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtR3JvdXBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FormGroup/FormGroup.tsx\n");

/***/ })

});