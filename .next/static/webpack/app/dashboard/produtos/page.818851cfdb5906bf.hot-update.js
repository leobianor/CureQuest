"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/produtos/page",{

/***/ "(app-pages-browser)/./src/components/darkModeButton.jsx":
/*!*******************************************!*\
  !*** ./src/components/darkModeButton.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction DarkModeToggle() {\n    _s();\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Modo Noturno\");\n    // Function to toggle dark mode\n    const toggleDarkMode = ()=>{\n        setDarkMode(!darkMode);\n        localStorage.theme = darkMode ? \"light\" : \"dark\";\n        if (darkMode) {\n            document.documentElement.classList.remove(\"dark\");\n        } else {\n            document.documentElement.classList.add(\"dark\");\n        }\n        setDisplayText(darkMode ? \"Modo Noturno\" : \"Modo Claro\");\n    };\n    // Check for the user's theme preference on page load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            setDarkMode(true);\n            document.documentElement.classList.add(\"dark\");\n            setDisplayText(\"Modo Claro\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"fixed top-4 right-4 px-3 py-2 rounded-full bg-gray-800 text-white \".concat(darkMode ? \"text-gray-800 bg-white\" : \"\"),\n                onClick: toggleDarkMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center p-2 text-gray-900 rounded-lg \".concat(darkMode ? \"dark:text-white\" : \"\", \" hover:bg-gray-100 \").concat(darkMode ? \"dark:hover:bg-gray-700\" : \"\", \" group\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex-1 whitespace-nowrap\",\n                            children: displayText\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"switch-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    onChange: toggleDarkMode,\n                                    checked: darkMode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"slider\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\darkModeButton.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(DarkModeToggle, \"wpJ7FWOOwQZ7jmpem8fPJtb1TlQ=\");\n_c = DarkModeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkModeToggle);\nvar _c;\n$RefreshReg$(_c, \"DarkModeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RhcmtNb2RlQnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0c7O0lBQ0wsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQywrQkFBK0I7SUFDL0IsTUFBTU8saUJBQWlCO1FBQ25CSCxZQUFZLENBQUNEO1FBQ2JLLGFBQWFDLEtBQUssR0FBR04sV0FBVyxVQUFVO1FBQzFDLElBQUlBLFVBQVU7WUFDVk8sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUM5QyxPQUFPO1lBQ0hILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLENBQUM7UUFDM0M7UUFDQVIsZUFBZUgsV0FBVyxpQkFBaUI7SUFDL0M7SUFFQSxxREFBcUQ7SUFDckRGLGdEQUFTQSxDQUFDO1FBQ04sSUFBSU8sYUFBYUMsS0FBSyxLQUFLLFVBQVcsQ0FBRSxZQUFXRCxZQUFXLEtBQU1PLE9BQU9DLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU8sRUFBRztZQUM1SGIsWUFBWTtZQUNaTSxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO1lBQ3ZDUixlQUFlO1FBQ25CO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNZOzswQkFDRyw4REFBQ0M7Z0JBQ0dDLFdBQVcscUVBQThHLE9BQXpDakIsV0FBVywyQkFBMkI7Z0JBQ3RIa0IsU0FBU2Q7Ozs7OzswQkFHYiw4REFBQ2U7MEJBQ0csNEVBQUNKO29CQUFJRSxXQUFXLGlFQUF3SGpCLE9BQXZEQSxXQUFXLG9CQUFvQixJQUFHLHVCQUE4RCxPQUF6Q0EsV0FBVywyQkFBMkIsSUFBRzs7c0NBQzdLLDhEQUFDb0I7NEJBQUtILFdBQVU7c0NBQTRCZjs7Ozs7O3NDQUM1Qyw4REFBQ21COzRCQUFNSixXQUFVOzs4Q0FDYiw4REFBQ0s7b0NBQU1DLE1BQUs7b0NBQVdDLFVBQVVwQjtvQ0FBZ0JxQixTQUFTekI7Ozs7Ozs4Q0FDMUQsOERBQUNvQjtvQ0FBS0gsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0EzQ1NsQjtLQUFBQTtBQTZDVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXJrTW9kZUJ1dHRvbi5qc3g/ZGJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIERhcmtNb2RlVG9nZ2xlKCkge1xyXG4gICAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGlzcGxheVRleHQsIHNldERpc3BsYXlUZXh0XSA9IHVzZVN0YXRlKCdNb2RvIE5vdHVybm8nKTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byB0b2dnbGUgZGFyayBtb2RlXHJcbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICBzZXREYXJrTW9kZSghZGFya01vZGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS50aGVtZSA9IGRhcmtNb2RlID8gJ2xpZ2h0JyA6ICdkYXJrJztcclxuICAgICAgICBpZiAoZGFya01vZGUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREaXNwbGF5VGV4dChkYXJrTW9kZSA/ICdNb2RvIE5vdHVybm8nIDogJ01vZG8gQ2xhcm8nKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIHRoZSB1c2VyJ3MgdGhlbWUgcHJlZmVyZW5jZSBvbiBwYWdlIGxvYWRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gJ2RhcmsnIHx8ICghKCd0aGVtZScgaW4gbG9jYWxTdG9yYWdlKSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpKSB7XHJcbiAgICAgICAgICAgIHNldERhcmtNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgICAgICAgICBzZXREaXNwbGF5VGV4dCgnTW9kbyBDbGFybycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHRvcC00IHJpZ2h0LTQgcHgtMyBweS0yIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlICR7ZGFya01vZGUgPyAndGV4dC1ncmF5LTgwMCBiZy13aGl0ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgJHtkYXJrTW9kZSA/ICdkYXJrOnRleHQtd2hpdGUnIDogJyd9IGhvdmVyOmJnLWdyYXktMTAwICR7ZGFya01vZGUgPyAnZGFyazpob3ZlcjpiZy1ncmF5LTcwMCcgOiAnJ30gZ3JvdXBgfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LTEgd2hpdGVzcGFjZS1ub3dyYXBcIj57ZGlzcGxheVRleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dG9nZ2xlRGFya01vZGV9IGNoZWNrZWQ9e2RhcmtNb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVUb2dnbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFya01vZGVUb2dnbGUiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsInRvZ2dsZURhcmtNb2RlIiwibG9jYWxTdG9yYWdlIiwidGhlbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImxpIiwic3BhbiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/darkModeButton.jsx\n"));

/***/ })

});