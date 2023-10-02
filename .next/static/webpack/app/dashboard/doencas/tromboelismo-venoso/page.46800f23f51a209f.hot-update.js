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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MedicationCalculator = ()=>{\n    _s();\n    const [sliderValue, setSliderValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(41);\n    const [is12HourMode, setIs12HourMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSliderChange = (event)=>{\n        setSliderValue(parseInt(event.target.value, 10));\n    };\n    const select24HourMode = ()=>{\n        setIs12HourMode(false);\n    };\n    const select12HourMode = ()=>{\n        setIs12HourMode(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const adjustedSliderValue = is12HourMode ? Math.min(sliderValue, 149) : Math.min(sliderValue, 99);\n        setSliderValue(adjustedSliderValue);\n    }, [\n        is12HourMode,\n        sliderValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        calculateHours();\n    }, [\n        sliderValue,\n        is12HourMode\n    ]);\n    const calculateHours = ()=>{\n        const multiplier = is12HourMode ? 1 : 1.5;\n        const result = Math.floor(sliderValue * multiplier);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-white rounded-xl p-5 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-center font-semibold uppercase\",\n                children: \"Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 bg-orange-500 p-6 rounded-lg text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    id: \"resultado\",\n                    children: [\n                        calculateHours(),\n                        \" mg de Enoxaparina\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"range\",\n                        className: \"accent-purple-700 w-full h-7 rounded-full bg-gray-200 p-1 appearance-none cursor-pointer dark:bg-gray-700\",\n                        min: \"41\",\n                        max: is12HourMode ? \"149\" : \"99\",\n                        step: \"1\",\n                        value: sliderValue,\n                        onChange: handleSliderChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute left-1/2 transform -translate-x-1/2 -mt-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mt-5 justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"accent-purple-500 w-full h-7 rounded-full bg-gray-200 p-1 appearance-none cursor-pointer dark:bg-gray-700\",\n                                min: \"41\",\n                                max: is12HourMode ? \"149\" : \"99\",\n                                step: \"1\",\n                                value: sliderValue,\n                                onChange: handleSliderChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute left-1/2 transform -translate-x-1/2 -mt-8\",\n                                children: \"Kg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border rounded p-2 \".concat(!is12HourMode ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select24HourMode,\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border rounded p-2 \".concat(is12HourMode ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select12HourMode,\n                        children: \"12h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\calculoDose.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MedicationCalculator, \"tr3mQqFuzOrO+Lz7dnbLo/Gp94Q=\");\n_c = MedicationCalculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MedicationCalculator);\nvar _c;\n$RefreshReg$(_c, \"MedicationCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhbGN1bG9Eb3NlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUcsdUJBQXVCOztJQUN6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7SUFFakQsTUFBTU8scUJBQXFCLENBQUNDO1FBQ3hCSixlQUFlSyxTQUFTRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssRUFBRTtJQUNoRDtJQUVBLE1BQU1DLG1CQUFtQjtRQUNyQk4sZ0JBQWdCO0lBQ3BCO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3JCUCxnQkFBZ0I7SUFDcEI7SUFFQUwsZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxzQkFBc0JULGVBQWVVLEtBQUtDLEdBQUcsQ0FBQ2IsYUFBYSxPQUFPWSxLQUFLQyxHQUFHLENBQUNiLGFBQWE7UUFDOUZDLGVBQWVVO0lBQ25CLEdBQUc7UUFBQ1Q7UUFBY0Y7S0FBWTtJQUU5QkYsZ0RBQVNBLENBQUM7UUFDTmdCO0lBQ0osR0FBRztRQUFDZDtRQUFhRTtLQUFhO0lBRTlCLE1BQU1ZLGlCQUFpQjtRQUNuQixNQUFNQyxhQUFhYixlQUFlLElBQUk7UUFDdEMsTUFBTWMsU0FBU0osS0FBS0ssS0FBSyxDQUFDakIsY0FBY2U7UUFDeEMsT0FBT0M7SUFDWDtJQUdBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQStDOzs7Ozs7MEJBRTdELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUtDLElBQUc7O3dCQUFhUjt3QkFBaUI7Ozs7Ozs7Ozs7OzswQkFHM0MsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0k7d0JBQ0dDLE1BQUs7d0JBQ0xMLFdBQVU7d0JBQ1ZOLEtBQUk7d0JBQ0pZLEtBQUt2QixlQUFlLFFBQVE7d0JBQzVCd0IsTUFBSzt3QkFDTGxCLE9BQU9SO3dCQUNQMkIsVUFBVXZCOzs7Ozs7a0NBR2QsOERBQUNpQjt3QkFBS0YsV0FBVTs7Ozs7O2tDQUdoQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTtnQ0FDR0MsTUFBSztnQ0FDTEwsV0FBVTtnQ0FDVk4sS0FBSTtnQ0FDSlksS0FBS3ZCLGVBQWUsUUFBUTtnQ0FDNUJ3QixNQUFLO2dDQUNMbEIsT0FBT1I7Z0NBQ1AyQixVQUFVdkI7Ozs7OzswQ0FFZCw4REFBQ2lCO2dDQUFLRixXQUFVOzBDQUFxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU83RSw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDUzt3QkFDR1QsV0FBVyxnQ0FDTixPQURzQyxDQUFDakIsZUFBZSw2QkFBNkI7d0JBRXhGMkIsU0FBU3BCO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNtQjt3QkFDR1QsV0FBVyxnQ0FDTixPQURzQ2pCLGVBQWUsNkJBQTZCO3dCQUV2RjJCLFNBQVNuQjtrQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBekZNWDtLQUFBQTtBQTJGTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhbGN1bG9Eb3NlLmpzeD9kMjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTWVkaWNhdGlvbkNhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlKDQxKTtcclxuICAgIGNvbnN0IFtpczEySG91ck1vZGUsIHNldElzMTJIb3VyTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGVyVmFsdWUocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3QyNEhvdXJNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzMTJIb3VyTW9kZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdDEySG91ck1vZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXMxMkhvdXJNb2RlKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkU2xpZGVyVmFsdWUgPSBpczEySG91ck1vZGUgPyBNYXRoLm1pbihzbGlkZXJWYWx1ZSwgMTQ5KSA6IE1hdGgubWluKHNsaWRlclZhbHVlLCA5OSk7XHJcbiAgICAgICAgc2V0U2xpZGVyVmFsdWUoYWRqdXN0ZWRTbGlkZXJWYWx1ZSk7XHJcbiAgICB9LCBbaXMxMkhvdXJNb2RlLCBzbGlkZXJWYWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FsY3VsYXRlSG91cnMoKTtcclxuICAgIH0sIFtzbGlkZXJWYWx1ZSwgaXMxMkhvdXJNb2RlXSk7XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlSG91cnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IGlzMTJIb3VyTW9kZSA/IDEgOiAxLjU7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcihzbGlkZXJWYWx1ZSAqIG11bHRpcGxpZXIpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC14bCBwLTUgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgc2hhZG93LVs0cHhfNHB4XzE1cHhfMHB4X3JnYmEoMTIyLDAsMjM0LDAuNTApXVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj5Eb3NlIHBhcmEgdHJhdGFtZW50byBkbyB0cm9tYm9lbWJvbGlzbW8gdmVub3NvIGNvbSBvdSBzZW0gZW1ib2xpYSBwdWxtb25hcjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNSBiZy1vcmFuZ2UtNTAwIHAtNiByb3VuZGVkLWxnIHRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZXN1bHRhZG9cIj57Y2FsY3VsYXRlSG91cnMoKX0gbWcgZGUgRW5veGFwYXJpbmE8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTUganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1wdXJwbGUtNzAwIHctZnVsbCBoLTcgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIHAtMSBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgZGFyazpiZy1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiNDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1heD17aXMxMkhvdXJNb2RlID8gJzE0OScgOiAnOTknfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLW10LThcIj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1wdXJwbGUtNTAwIHctZnVsbCBoLTcgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIHAtMSBhcHBlYXJhbmNlLW5vbmUgY3Vyc29yLXBvaW50ZXIgZGFyazpiZy1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtpczEySG91ck1vZGUgPyAnMTQ5JyA6ICc5OSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLW10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS2dcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTUgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWdyb3cgYm9yZGVyIHJvdW5kZWQgcC0yICR7IWlzMTJIb3VyTW9kZSA/ICdiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1wdXJwbGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3QyNEhvdXJNb2RlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDI0aFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1ncm93IGJvcmRlciByb3VuZGVkIHAtMiAke2lzMTJIb3VyTW9kZSA/ICdiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUnIDogJ2JvcmRlci1wdXJwbGUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3QxMkhvdXJNb2RlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDEyaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZGljYXRpb25DYWxjdWxhdG9yO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lZGljYXRpb25DYWxjdWxhdG9yIiwic2xpZGVyVmFsdWUiLCJzZXRTbGlkZXJWYWx1ZSIsImlzMTJIb3VyTW9kZSIsInNldElzMTJIb3VyTW9kZSIsImhhbmRsZVNsaWRlckNoYW5nZSIsImV2ZW50IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGVjdDI0SG91ck1vZGUiLCJzZWxlY3QxMkhvdXJNb2RlIiwiYWRqdXN0ZWRTbGlkZXJWYWx1ZSIsIk1hdGgiLCJtaW4iLCJjYWxjdWxhdGVIb3VycyIsIm11bHRpcGxpZXIiLCJyZXN1bHQiLCJmbG9vciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImlkIiwiaW5wdXQiLCJ0eXBlIiwibWF4Iiwic3RlcCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/calculoDose.jsx\n"));

/***/ })

});