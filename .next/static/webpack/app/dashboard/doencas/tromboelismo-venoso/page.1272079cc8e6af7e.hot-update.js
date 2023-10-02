"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/doencas/tromboelismo-venoso/page",{

/***/ "(app-pages-browser)/./src/components/calculoDose.jsx":
/*!****************************************!*\
  !*** ./src/components/calculoDose.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MedicationCalculator = ()=>{\n    _s();\n    const [sliderValue, setSliderValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(41);\n    const [is12HourMode, setIs12HourMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSliderChange = (event)=>{\n        setSliderValue(parseInt(event.target.value, 10));\n    };\n    const select24HourMode = ()=>{\n        setIs12HourMode(false);\n    };\n    const select12HourMode = ()=>{\n        setIs12HourMode(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const adjustedSliderValue = is12HourMode ? Math.min(sliderValue, 149) : Math.min(sliderValue, 99);\n        setSliderValue(adjustedSliderValue);\n    }, [\n        is12HourMode,\n        sliderValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        calculateHours();\n    }, [\n        sliderValue,\n        is12HourMode\n    ]);\n    const calculateHours = ()=>{\n        const multiplier = is12HourMode ? 1 : 1.5;\n        const result = Math.floor(sliderValue * multiplier);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-white rounded-xl p-5 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-center font-semibold uppercase\",\n                children: \"Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 bg-orange-500 p-6 rounded-lg text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    id: \"resultado\",\n                    children: [\n                        calculateHours(),\n                        \" mg de Enoxaparina\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"range\",\n                        className: \"appearance-none accent-purple-700 w-full h-7 rounded-full bg-gray-200 p-1 cursor-pointer dark:bg-gray-700\",\n                        min: \"41\",\n                        max: is12HourMode ? \"149\" : \"99\",\n                        step: \"1\",\n                        value: sliderValue,\n                        onChange: handleSliderChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"relative ml-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"floating_outlined\",\n                                class: \"block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer\",\n                                min: \"41\",\n                                max: is12HourMode ? \"149\" : \"99\",\n                                step: \"1\",\n                                value: sliderValue,\n                                onChange: (event)=>setSliderValue(parseFloat(event.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"floating_outlined\",\n                                class: \"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1\",\n                                children: \"Kg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border rounded p-2 \".concat(!is12HourMode ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select24HourMode,\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border rounded p-2 \".concat(is12HourMode ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select12HourMode,\n                        children: \"12h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MedicationCalculator, \"tr3mQqFuzOrO+Lz7dnbLo/Gp94Q=\");\n_c = MedicationCalculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MedicationCalculator);\nvar _c;\n$RefreshReg$(_c, \"MedicationCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhbGN1bG9Eb3NlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUcsdUJBQXVCOztJQUN6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7SUFFakQsTUFBTU8scUJBQXFCLENBQUNDO1FBQ3hCSixlQUFlSyxTQUFTRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssRUFBRTtJQUNoRDtJQUVBLE1BQU1DLG1CQUFtQjtRQUNyQk4sZ0JBQWdCO0lBQ3BCO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3JCUCxnQkFBZ0I7SUFDcEI7SUFFQUwsZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxzQkFBc0JULGVBQWVVLEtBQUtDLEdBQUcsQ0FBQ2IsYUFBYSxPQUFPWSxLQUFLQyxHQUFHLENBQUNiLGFBQWE7UUFDOUZDLGVBQWVVO0lBQ25CLEdBQUc7UUFBQ1Q7UUFBY0Y7S0FBWTtJQUU5QkYsZ0RBQVNBLENBQUM7UUFDTmdCO0lBQ0osR0FBRztRQUFDZDtRQUFhRTtLQUFhO0lBRTlCLE1BQU1ZLGlCQUFpQjtRQUNuQixNQUFNQyxhQUFhYixlQUFlLElBQUk7UUFDdEMsTUFBTWMsU0FBU0osS0FBS0ssS0FBSyxDQUFDakIsY0FBY2U7UUFDeEMsT0FBT0M7SUFDWDtJQUdBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQStDOzs7Ozs7MEJBRTdELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUtDLElBQUc7O3dCQUFhUjt3QkFBaUI7Ozs7Ozs7Ozs7OzswQkFHM0MsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FFWCw4REFBQ0k7d0JBQ0dDLE1BQUs7d0JBQ0xMLFdBQVU7d0JBQ1ZOLEtBQUk7d0JBQ0pZLEtBQUt2QixlQUFlLFFBQVE7d0JBQzVCd0IsTUFBSzt3QkFDTGxCLE9BQU9SO3dCQUNQMkIsVUFBVXZCOzs7Ozs7a0NBR2QsOERBQUNjO3dCQUFJVSxPQUFNOzswQ0FDUCw4REFBQ0w7Z0NBQ0dDLE1BQUs7Z0NBQ0xGLElBQUc7Z0NBQ0hNLE9BQU07Z0NBQ05mLEtBQUk7Z0NBQ0pZLEtBQUt2QixlQUFlLFFBQVE7Z0NBQzVCd0IsTUFBSztnQ0FDTGxCLE9BQU9SO2dDQUNQMkIsVUFBVSxDQUFDdEIsUUFBVUosZUFBZTRCLFdBQVd4QixNQUFNRSxNQUFNLENBQUNDLEtBQUs7Ozs7OzswQ0FFckUsOERBQUNzQjtnQ0FDR0MsS0FBSTtnQ0FDSkgsT0FBTTswQ0FBaVo7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPbmEsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2E7d0JBQ0diLFdBQVcsZ0NBQ04sT0FEc0MsQ0FBQ2pCLGVBQWUsNkJBQTZCO3dCQUV4RitCLFNBQVN4QjtrQ0FDWjs7Ozs7O2tDQUdELDhEQUFDdUI7d0JBQ0diLFdBQVcsZ0NBQ04sT0FEc0NqQixlQUFlLDZCQUE2Qjt3QkFFdkYrQixTQUFTdkI7a0NBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtHQTFGTVg7S0FBQUE7QUE0Rk4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYWxjdWxvRG9zZS5qc3g/ZDI3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1lZGljYXRpb25DYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NsaWRlclZhbHVlLCBzZXRTbGlkZXJWYWx1ZV0gPSB1c2VTdGF0ZSg0MSk7XHJcbiAgICBjb25zdCBbaXMxMkhvdXJNb2RlLCBzZXRJczEySG91ck1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNsaWRlckNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFNsaWRlclZhbHVlKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0MjRIb3VyTW9kZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJczEySG91ck1vZGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3QxMkhvdXJNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzMTJIb3VyTW9kZSh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFNsaWRlclZhbHVlID0gaXMxMkhvdXJNb2RlID8gTWF0aC5taW4oc2xpZGVyVmFsdWUsIDE0OSkgOiBNYXRoLm1pbihzbGlkZXJWYWx1ZSwgOTkpO1xyXG4gICAgICAgIHNldFNsaWRlclZhbHVlKGFkanVzdGVkU2xpZGVyVmFsdWUpO1xyXG4gICAgfSwgW2lzMTJIb3VyTW9kZSwgc2xpZGVyVmFsdWVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNhbGN1bGF0ZUhvdXJzKCk7XHJcbiAgICB9LCBbc2xpZGVyVmFsdWUsIGlzMTJIb3VyTW9kZV0pO1xyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZUhvdXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSBpczEySG91ck1vZGUgPyAxIDogMS41O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IE1hdGguZmxvb3Ioc2xpZGVyVmFsdWUgKiBtdWx0aXBsaWVyKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLXdoaXRlIHJvdW5kZWQteGwgcC01IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIHNoYWRvdy1bNHB4XzRweF8xNXB4XzBweF9yZ2JhKDEyMiwwLDIzNCwwLjUwKV1cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlXCI+RG9zZSBwYXJhIHRyYXRhbWVudG8gZG8gdHJvbWJvZW1ib2xpc21vIHZlbm9zbyBjb20gb3Ugc2VtIGVtYm9saWEgcHVsbW9uYXI8L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUgYmctb3JhbmdlLTUwMCBwLTYgcm91bmRlZC1sZyB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicmVzdWx0YWRvXCI+e2NhbGN1bGF0ZUhvdXJzKCl9IG1nIGRlIEVub3hhcGFyaW5hPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC01IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGFjY2VudC1wdXJwbGUtNzAwIHctZnVsbCBoLTcgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIHAtMSBjdXJzb3ItcG9pbnRlciBkYXJrOmJnLWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCI0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PXtpczEySG91ck1vZGUgPyAnMTQ5JyA6ICc5OSd9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlfVxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmbG9hdGluZ19vdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgcHgtMi41IHBiLTIuNSBwdC00IHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1sZyBib3JkZXItMSBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1wdXJwbGUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLXB1cnBsZS02MDAgcGVlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtpczEySG91ck1vZGUgPyAnMTQ5JyA6ICc5OSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTbGlkZXJWYWx1ZShwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cImZsb2F0aW5nX291dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTQgc2NhbGUtNzUgdG9wLTIgei0xMCBvcmlnaW4tWzBdIGJnLXdoaXRlIGRhcms6YmctZ3JheS05MDAgcHgtMiBwZWVyLWZvY3VzOnB4LTIgcGVlci1mb2N1czp0ZXh0LXB1cnBsZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtcHVycGxlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOi10cmFuc2xhdGUteS0xLzIgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0b3AtMS8yIHBlZXItZm9jdXM6dG9wLTIgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS00IGxlZnQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBLZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTUgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWdyb3cgYm9yZGVyIHJvdW5kZWQgcC0yICR7IWlzMTJIb3VyTW9kZSA/ICdiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1wdXJwbGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3QyNEhvdXJNb2RlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDI0aFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1ncm93IGJvcmRlciByb3VuZGVkIHAtMiAke2lzMTJIb3VyTW9kZSA/ICdiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1wdXJwbGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3QxMkhvdXJNb2RlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDEyaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZGljYXRpb25DYWxjdWxhdG9yO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lZGljYXRpb25DYWxjdWxhdG9yIiwic2xpZGVyVmFsdWUiLCJzZXRTbGlkZXJWYWx1ZSIsImlzMTJIb3VyTW9kZSIsInNldElzMTJIb3VyTW9kZSIsImhhbmRsZVNsaWRlckNoYW5nZSIsImV2ZW50IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGVjdDI0SG91ck1vZGUiLCJzZWxlY3QxMkhvdXJNb2RlIiwiYWRqdXN0ZWRTbGlkZXJWYWx1ZSIsIk1hdGgiLCJtaW4iLCJjYWxjdWxhdGVIb3VycyIsIm11bHRpcGxpZXIiLCJyZXN1bHQiLCJmbG9vciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImlkIiwiaW5wdXQiLCJ0eXBlIiwibWF4Iiwic3RlcCIsIm9uQ2hhbmdlIiwiY2xhc3MiLCJwYXJzZUZsb2F0IiwibGFiZWwiLCJmb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/calculoDose.jsx\n"));

/***/ })

});