"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/home/page",{

/***/ "(app-pages-browser)/./src/components/darkModeButton.jsx":
/*!*******************************************!*\
  !*** ./src/components/darkModeButton.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction DarkModeToggle() {\n    _s();\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Modo Claro\");\n    // Function to toggle dark mode\n    const toggleDarkMode = ()=>{\n        setDarkMode(!darkMode);\n        localStorage.theme = darkMode ? \"light\" : \"dark\";\n        if (darkMode) {\n            document.documentElement.classList.remove(\"dark\");\n        } else {\n            document.documentElement.classList.add(\"dark\");\n        }\n        setDisplayText(darkMode ? \"Modo Claro\" : \"Modo Noturno\");\n    };\n    // Check for the user's theme preference on page load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            setDarkMode(true);\n            document.documentElement.classList.add(\"dark\");\n            setDisplayText(\"Modo Claro\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            className: \"switch-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    onChange: toggleDarkMode,\n                    checked: darkMode\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"slider\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n            lineNumber: 35,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(DarkModeToggle, \"wHUG2lPtqsdEruvDsLGfe9Y9iIY=\");\n_c = DarkModeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkModeToggle);\nvar _c;\n$RefreshReg$(_c, \"DarkModeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RhcmtNb2RlQnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFbUQ7QUFFbkQsU0FBU0c7O0lBQ0wsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQywrQkFBK0I7SUFDL0IsTUFBTU8saUJBQWlCO1FBQ25CSCxZQUFZLENBQUNEO1FBQ2JLLGFBQWFDLEtBQUssR0FBR04sV0FBVyxVQUFVO1FBQzFDLElBQUlBLFVBQVU7WUFDVk8sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUM5QyxPQUFPO1lBQ0hILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLENBQUM7UUFDM0M7UUFDQVIsZUFBZUgsV0FBVyxlQUFlO0lBQzdDO0lBRUEscURBQXFEO0lBQ3JERixnREFBU0EsQ0FBQztRQUNOLElBQUlPLGFBQWFDLEtBQUssS0FBSyxVQUFXLENBQUUsWUFBV0QsWUFBVyxLQUFNTyxPQUFPQyxVQUFVLENBQUMsZ0NBQWdDQyxPQUFPLEVBQUc7WUFDNUhiLFlBQVk7WUFDWk0sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLEdBQUcsQ0FBQztZQUN2Q1IsZUFBZTtRQUNuQjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDWTtrQkFJTyw0RUFBQ0M7WUFBTUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFNQyxNQUFLO29CQUFXQyxVQUFVaEI7b0JBQWdCaUIsU0FBU3JCOzs7Ozs7OEJBQzFELDhEQUFDc0I7b0JBQUtMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBDO0dBcENTbEI7S0FBQUE7QUFzQ1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFya01vZGVCdXR0b24uanN4P2RiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIERhcmtNb2RlVG9nZ2xlKCkge1xyXG4gICAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGlzcGxheVRleHQsIHNldERpc3BsYXlUZXh0XSA9IHVzZVN0YXRlKCdNb2RvIENsYXJvJyk7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gdG9nZ2xlIGRhcmsgbW9kZVxyXG4gICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RGFya01vZGUoIWRhcmtNb2RlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UudGhlbWUgPSBkYXJrTW9kZSA/ICdsaWdodCcgOiAnZGFyayc7XHJcbiAgICAgICAgaWYgKGRhcmtNb2RlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGlzcGxheVRleHQoZGFya01vZGUgPyAnTW9kbyBDbGFybycgOiAnTW9kbyBOb3R1cm5vJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENoZWNrIGZvciB0aGUgdXNlcidzIHRoZW1lIHByZWZlcmVuY2Ugb24gcGFnZSBsb2FkXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09ICdkYXJrJyB8fCAoISgndGhlbWUnIGluIGxvY2FsU3RvcmFnZSkgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSkge1xyXG4gICAgICAgICAgICBzZXREYXJrTW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgICAgICAgICAgc2V0RGlzcGxheVRleHQoJ01vZG8gQ2xhcm8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RvZ2dsZURhcmtNb2RlfSBjaGVja2VkPXtkYXJrTW9kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVUb2dnbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFya01vZGVUb2dnbGUiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsInRvZ2dsZURhcmtNb2RlIiwibG9jYWxTdG9yYWdlIiwidGhlbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZGl2IiwibGFiZWwiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/darkModeButton.jsx\n"));

/***/ })

});