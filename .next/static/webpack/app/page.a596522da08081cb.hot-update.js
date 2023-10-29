"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/darkModeButton.jsx":
/*!*******************************************!*\
  !*** ./src/components/darkModeButton.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction DarkModeToggle() {\n    _s();\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Modo Claro\");\n    // Function to toggle dark mode\n    const toggleDarkMode = ()=>{\n        setDarkMode(!darkMode);\n        localStorage.theme = darkMode ? \"light\" : \"dark\";\n        if (darkMode) {\n            document.documentElement.classList.remove(\"dark\");\n        } else {\n            document.documentElement.classList.add(\"dark\");\n        }\n        setDisplayText(darkMode ? \"Modo Claro\" : \"Modo Noturno\");\n    };\n    // Check for the user's theme preference on page load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            setDarkMode(true);\n            document.documentElement.classList.add(\"dark\");\n            setDisplayText(\"Modo Claro\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"fixed top-4 right-4 px-3 py-2 rounded-full bg-gray-800 text-white \".concat(darkMode ? \"text-gray-800 bg-white\" : \"\"),\n                onClick: toggleDarkMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center p-2 text-gray-900 rounded-lg \".concat(darkMode ? \"dark:text-white\" : \"\", \" hover:bg-gray-100 \").concat(darkMode ? \"dark:hover:bg-gray-700\" : \"\", \" group\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex-1 whitespace-nowrap\",\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"switch-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                onChange: toggleDarkMode,\n                                checked: darkMode\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"slider\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(DarkModeToggle, \"wHUG2lPtqsdEruvDsLGfe9Y9iIY=\");\n_c = DarkModeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkModeToggle);\nvar _c;\n$RefreshReg$(_c, \"DarkModeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RhcmtNb2RlQnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0c7O0lBQ0wsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQywrQkFBK0I7SUFDL0IsTUFBTU8saUJBQWlCO1FBQ25CSCxZQUFZLENBQUNEO1FBQ2JLLGFBQWFDLEtBQUssR0FBR04sV0FBVyxVQUFVO1FBQzFDLElBQUlBLFVBQVU7WUFDVk8sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUM5QyxPQUFPO1lBQ0hILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLENBQUM7UUFDM0M7UUFDQVIsZUFBZUgsV0FBVyxlQUFlO0lBQzdDO0lBRUEscURBQXFEO0lBQ3JERixnREFBU0EsQ0FBQztRQUNOLElBQUlPLGFBQWFDLEtBQUssS0FBSyxVQUFXLENBQUUsWUFBV0QsWUFBVyxLQUFNTyxPQUFPQyxVQUFVLENBQUMsZ0NBQWdDQyxPQUFPLEVBQUc7WUFDNUhiLFlBQVk7WUFDWk0sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLEdBQUcsQ0FBQztZQUN2Q1IsZUFBZTtRQUNuQjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDWTs7MEJBQ0csOERBQUNDO2dCQUNHQyxXQUFXLHFFQUE4RyxPQUF6Q2pCLFdBQVcsMkJBQTJCO2dCQUN0SGtCLFNBQVNkOzs7Ozs7MEJBR2IsOERBQUNXO2dCQUFJRSxXQUFXLGlFQUF3SGpCLE9BQXZEQSxXQUFXLG9CQUFvQixJQUFHLHVCQUE4RCxPQUF6Q0EsV0FBVywyQkFBMkIsSUFBRzs7a0NBQzdLLDhEQUFDbUI7d0JBQUtGLFdBQVU7a0NBQTRCZjs7Ozs7O2tDQUM1Qyw4REFBQ2tCO3dCQUFNSCxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1DLE1BQUs7Z0NBQVdDLFVBQVVuQjtnQ0FBZ0JvQixTQUFTeEI7Ozs7OzswQ0FDMUQsOERBQUNtQjtnQ0FBS0YsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBekNTbEI7S0FBQUE7QUEyQ1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFya01vZGVCdXR0b24uanN4P2RiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBEYXJrTW9kZVRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Rpc3BsYXlUZXh0LCBzZXREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZSgnTW9kbyBDbGFybycpO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIHRvZ2dsZSBkYXJrIG1vZGVcclxuICAgIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERhcmtNb2RlKCFkYXJrTW9kZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID0gZGFya01vZGUgPyAnbGlnaHQnIDogJ2RhcmsnO1xyXG4gICAgICAgIGlmIChkYXJrTW9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERpc3BsYXlUZXh0KGRhcmtNb2RlID8gJ01vZG8gQ2xhcm8nIDogJ01vZG8gTm90dXJubycpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgdGhlIHVzZXIncyB0aGVtZSBwcmVmZXJlbmNlIG9uIHBhZ2UgbG9hZFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lID09PSAnZGFyaycgfHwgKCEoJ3RoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykpIHtcclxuICAgICAgICAgICAgc2V0RGFya01vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgICAgIHNldERpc3BsYXlUZXh0KCdNb2RvIENsYXJvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTQgcmlnaHQtNCBweC0zIHB5LTIgcm91bmRlZC1mdWxsIGJnLWdyYXktODAwIHRleHQtd2hpdGUgJHtkYXJrTW9kZSA/ICd0ZXh0LWdyYXktODAwIGJnLXdoaXRlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHRleHQtZ3JheS05MDAgcm91bmRlZC1sZyAke2RhcmtNb2RlID8gJ2Rhcms6dGV4dC13aGl0ZScgOiAnJ30gaG92ZXI6YmctZ3JheS0xMDAgJHtkYXJrTW9kZSA/ICdkYXJrOmhvdmVyOmJnLWdyYXktNzAwJyA6ICcnfSBncm91cGB9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC0xIHdoaXRlc3BhY2Utbm93cmFwXCI+e2Rpc3BsYXlUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0b2dnbGVEYXJrTW9kZX0gY2hlY2tlZD17ZGFya01vZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXJrTW9kZVRvZ2dsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEYXJrTW9kZVRvZ2dsZSIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJkaXNwbGF5VGV4dCIsInNldERpc3BsYXlUZXh0IiwidG9nZ2xlRGFya01vZGUiLCJsb2NhbFN0b3JhZ2UiLCJ0aGVtZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/darkModeButton.jsx\n"));

/***/ })

});