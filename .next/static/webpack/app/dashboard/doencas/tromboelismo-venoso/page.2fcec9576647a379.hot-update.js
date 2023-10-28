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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_calcFuncaoRenal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/calcFuncaoRenal */ \"(app-pages-browser)/./src/components/calcFuncaoRenal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst MedicationCalculator = ()=>{\n    _s();\n    const [sliderValue, setSliderValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(41);\n    const [is12HourMode, setIs12HourMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isInsuficienciaRenalSelected, setIsInsuficienciaRenalSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCalcFuncaoRenal, setShowCalcFuncaoRenal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSliderChange = (event)=>{\n        setSliderValue(parseInt(event.target.value, 10));\n    };\n    const select24HourMode = ()=>{\n        setIs12HourMode(false);\n    };\n    const select12HourMode = ()=>{\n        setIs12HourMode(true);\n    };\n    const selectInsuficienciaRenal = ()=>{\n        setIsInsuficienciaRenalSelected(!isInsuficienciaRenalSelected);\n        setShowCalcFuncaoRenal(!showCalcFuncaoRenal); // Mostra ou esconde o CalcFuncaoRenal ao clicar no botão\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const adjustedSliderValue = is12HourMode ? Math.min(sliderValue, 149) : isInsuficienciaRenalSelected ? Math.min(sliderValue, 149) : Math.min(sliderValue, 99);\n        setSliderValue(adjustedSliderValue);\n    }, [\n        is12HourMode,\n        sliderValue,\n        isInsuficienciaRenalSelected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        calculateHours();\n    }, [\n        sliderValue,\n        is12HourMode,\n        isInsuficienciaRenalSelected\n    ]);\n    const calculateHours = ()=>{\n        const multiplier = is12HourMode ? 1 : isInsuficienciaRenalSelected ? 1 : 1.5;\n        const result = Math.floor(sliderValue * multiplier);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-white rounded-xl px-6 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 \".concat(isInsuficienciaRenalSelected ? \"bg-red-500\" : \"bg-orange-500\", \" rounded-lg text-white \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-lg text-center items-start font-medium px-14 mt-4\",\n                        children: \"Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-b mx-6 mt-1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center font-medium text-2xl\",\n                                children: \"Enoxaparina\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center text-3xl font-semibold mt-2\",\n                                id: \"resultado\",\n                                children: [\n                                    calculateHours(),\n                                    \" mg\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 pl-3 justify-center items-center border rounded-full border-gray-300 appearance-none dark:text-white dark-border-gray-600 dark-focus-border-purple-500 focus-outline-none focus-ring-0 focus-border-purple-600 peer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"range\",\n                        className: \"accent-purple-700 w-full rounded-full bg-gray-200 my-1 cursor-pointer dark-bg-gray-700\",\n                        min: \"41\",\n                        max: isInsuficienciaRenalSelected ? \"149\" : is12HourMode ? \"149\" : \"99\",\n                        step: \"1\",\n                        value: sliderValue,\n                        onChange: handleSliderChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative ml-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"floating_outlined\",\n                                className: \"block px-4 pb-2.5 pt-4 w-full rounded-full text-sm text-gray-900 bg-transparent appearance-none border-0 dark:text-white focus-outline-none focus-ring-0  peer\",\n                                min: \"41\",\n                                max: isInsuficienciaRenalSelected ? \"149\" : is12HourMode ? \"149\" : \"99\",\n                                step: \"1\",\n                                value: sliderValue,\n                                onChange: (event)=>setSliderValue(parseFloat(event.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"floating_outlined\",\n                                className: \"absolute text-sm text-gray-500 dark-text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark-bg-gray-900 px-2 peer-focus-px-2 peer-focus-text-purple-600 peer-focus-dark-text-purple-500 peer-placeholder-shown-scale-100 peer-placeholder-shown--translate-y-1/2 peer-placeholder-shown-top-1/2 peer-focus-top-2 peer-focus-scale-75 peer-focus--translate-y-4 left-3\",\n                                children: \"Kg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-4 gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border-2 rounded-full px-3 py-2 \".concat(!is12HourMode && !isInsuficienciaRenalSelected ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select24HourMode,\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border-2 rounded-full px-3 py-2 \".concat(is12HourMode ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select12HourMode,\n                        children: \"12h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex border-2 rounded-full px-4 py-2 mt-4 \".concat(isInsuficienciaRenalSelected ? \"bg-red-500 text-white\" : \"border-red-500\"),\n                onClick: selectInsuficienciaRenal,\n                children: \"Insuficiencia Renal Grave\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: showCalcFuncaoRenal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_calcFuncaoRenal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 41\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MedicationCalculator, \"wZB5tv/eh3EWX2FkJANW+sl6DW0=\");\n_c = MedicationCalculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MedicationCalculator);\nvar _c;\n$RefreshReg$(_c, \"MedicationCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhbGN1bG9Eb3NlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ1E7QUFHM0QsTUFBTUksdUJBQXVCOztJQUN6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUSw4QkFBOEJDLGdDQUFnQyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqRixNQUFNLENBQUNVLHFCQUFxQkMsdUJBQXVCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRS9ELE1BQU1ZLHFCQUFxQixDQUFDQztRQUN4QlIsZUFBZVMsU0FBU0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFDaEQ7SUFFQSxNQUFNQyxtQkFBbUI7UUFDckJWLGdCQUFnQjtJQUNwQjtJQUVBLE1BQU1XLG1CQUFtQjtRQUNyQlgsZ0JBQWdCO0lBQ3BCO0lBRUEsTUFBTVksMkJBQTJCO1FBQzdCVixnQ0FBZ0MsQ0FBQ0Q7UUFDakNHLHVCQUF1QixDQUFDRCxzQkFBc0IseURBQXlEO0lBQzNHO0lBRUFULGdEQUFTQSxDQUFDO1FBQ04sTUFBTW1CLHNCQUFzQmQsZUFDdEJlLEtBQUtDLEdBQUcsQ0FBQ2xCLGFBQWEsT0FDdEJJLCtCQUNJYSxLQUFLQyxHQUFHLENBQUNsQixhQUFhLE9BQ3RCaUIsS0FBS0MsR0FBRyxDQUFDbEIsYUFBYTtRQUNoQ0MsZUFBZWU7SUFDbkIsR0FBRztRQUFDZDtRQUFjRjtRQUFhSTtLQUE2QjtJQUU1RFAsZ0RBQVNBLENBQUM7UUFDTnNCO0lBQ0osR0FBRztRQUFDbkI7UUFBYUU7UUFBY0U7S0FBNkI7SUFFNUQsTUFBTWUsaUJBQWlCO1FBQ25CLE1BQU1DLGFBQWFsQixlQUFlLElBQUlFLCtCQUErQixJQUFJO1FBQ3pFLE1BQU1pQixTQUFTSixLQUFLSyxLQUFLLENBQUN0QixjQUFjb0I7UUFDeEMsT0FBT0M7SUFDWDtJQUlBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVcsUUFBc0UsT0FBOURwQiwrQkFBK0IsZUFBZSxpQkFBZ0I7O2tDQUNsRiw4REFBQ3FCO3dCQUFHRCxXQUFVO2tDQUF5RDs7Ozs7O2tDQUd2RSw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBbUM7Ozs7OzswQ0FDaEQsOERBQUNFO2dDQUFFRixXQUFVO2dDQUEwQ0csSUFBRzs7b0NBQWFSO29DQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHaEcsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0k7d0JBQ0dDLE1BQUs7d0JBQ0xMLFdBQVU7d0JBQ1ZOLEtBQUk7d0JBQ0pZLEtBQUsxQiwrQkFBK0IsUUFBUUYsZUFBZSxRQUFRO3dCQUNuRTZCLE1BQUs7d0JBQ0xuQixPQUFPWjt3QkFDUGdDLFVBQVV4Qjs7Ozs7O2tDQUVkLDhEQUFDZTt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNJO2dDQUNHQyxNQUFLO2dDQUNMRixJQUFHO2dDQUNISCxXQUFVO2dDQUNWTixLQUFJO2dDQUNKWSxLQUFLMUIsK0JBQStCLFFBQVFGLGVBQWUsUUFBUTtnQ0FDbkU2QixNQUFLO2dDQUNMbkIsT0FBT1o7Z0NBQ1BnQyxVQUFVLENBQUN2QixRQUFVUixlQUFlZ0MsV0FBV3hCLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBDQUVyRSw4REFBQ3NCO2dDQUNHQyxTQUFRO2dDQUNSWCxXQUFVOzBDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1k7d0JBQ0daLFdBQVcsNkNBRWUsT0FGOEIsQ0FBQ3RCLGdCQUFnQixDQUFDRSwrQkFDcEUsNkJBQ0E7d0JBQ05pQyxTQUFTeEI7a0NBQ1o7Ozs7OztrQ0FHRCw4REFBQ3VCO3dCQUNHWixXQUFXLDZDQUVlLE9BRjhCdEIsZUFDbEQsNkJBQ0E7d0JBQ05tQyxTQUFTdkI7a0NBQ1o7Ozs7Ozs7Ozs7OzswQkFJTCw4REFBQ3NCO2dCQUNHWixXQUFXLDZDQUVZLE9BRmlDcEIsK0JBQ2xELDBCQUNBO2dCQUNOaUMsU0FBU3RCOzBCQUNaOzs7Ozs7MEJBR0QsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUVWbEIscUNBQXVCLDhEQUFDUixtRUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQ7R0F2SE1DO0tBQUFBO0FBeUhOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FsY3Vsb0Rvc2UuanN4P2QyNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYWxjRnVuY2FvUmVuYWwgZnJvbSAnQC9jb21wb25lbnRzL2NhbGNGdW5jYW9SZW5hbCc7XHJcblxyXG5cclxuY29uc3QgTWVkaWNhdGlvbkNhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlKDQxKTtcclxuICAgIGNvbnN0IFtpczEySG91ck1vZGUsIHNldElzMTJIb3VyTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCwgc2V0SXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0NhbGNGdW5jYW9SZW5hbCwgc2V0U2hvd0NhbGNGdW5jYW9SZW5hbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGVyVmFsdWUocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3QyNEhvdXJNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzMTJIb3VyTW9kZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdDEySG91ck1vZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXMxMkhvdXJNb2RlKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RJbnN1ZmljaWVuY2lhUmVuYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCghaXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCk7XHJcbiAgICAgICAgc2V0U2hvd0NhbGNGdW5jYW9SZW5hbCghc2hvd0NhbGNGdW5jYW9SZW5hbCk7IC8vIE1vc3RyYSBvdSBlc2NvbmRlIG8gQ2FsY0Z1bmNhb1JlbmFsIGFvIGNsaWNhciBubyBib3TDo29cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFNsaWRlclZhbHVlID0gaXMxMkhvdXJNb2RlXHJcbiAgICAgICAgICAgID8gTWF0aC5taW4oc2xpZGVyVmFsdWUsIDE0OSlcclxuICAgICAgICAgICAgOiBpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKHNsaWRlclZhbHVlLCAxNDkpXHJcbiAgICAgICAgICAgICAgICA6IE1hdGgubWluKHNsaWRlclZhbHVlLCA5OSk7XHJcbiAgICAgICAgc2V0U2xpZGVyVmFsdWUoYWRqdXN0ZWRTbGlkZXJWYWx1ZSk7XHJcbiAgICB9LCBbaXMxMkhvdXJNb2RlLCBzbGlkZXJWYWx1ZSwgaXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FsY3VsYXRlSG91cnMoKTtcclxuICAgIH0sIFtzbGlkZXJWYWx1ZSwgaXMxMkhvdXJNb2RlLCBpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkXSk7XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlSG91cnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IGlzMTJIb3VyTW9kZSA/IDEgOiBpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkID8gMSA6IDEuNTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHNsaWRlclZhbHVlICogbXVsdGlwbGllcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC14bCBweC02IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIHNoYWRvdy1bNHB4XzRweF8xNXB4XzBweF9yZ2JhKDEyMiwwLDIzNCwwLjUwKV1cIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbXQtNSAke2lzSW5zdWZpY2llbmNpYVJlbmFsU2VsZWN0ZWQgPyAnYmctcmVkLTUwMCcgOiAnYmctb3JhbmdlLTUwMCd9IHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBgfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtY2VudGVyIGl0ZW1zLXN0YXJ0IGZvbnQtbWVkaXVtIHB4LTE0IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBEb3NlIHBhcmEgdHJhdGFtZW50byBkbyB0cm9tYm9lbWJvbGlzbW8gdmVub3NvIGNvbSBvdSBzZW0gZW1ib2xpYSBwdWxtb25hclxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXItYiBteC02IG10LTEnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTIwJz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtMnhsJz5Fbm94YXBhcmluYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbXQtMicgaWQ9XCJyZXN1bHRhZG9cIj57Y2FsY3VsYXRlSG91cnMoKX0gbWc8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC01IHBsLTMganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyay1ib3JkZXItZ3JheS02MDAgZGFyay1mb2N1cy1ib3JkZXItcHVycGxlLTUwMCBmb2N1cy1vdXRsaW5lLW5vbmUgZm9jdXMtcmluZy0wIGZvY3VzLWJvcmRlci1wdXJwbGUtNjAwIHBlZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjZW50LXB1cnBsZS03MDAgdy1mdWxsIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTIwMCBteS0xIGN1cnNvci1wb2ludGVyIGRhcmstYmctZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjQxXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXg9e2lzSW5zdWZpY2llbmNpYVJlbmFsU2VsZWN0ZWQgPyAnMTQ5JyA6IGlzMTJIb3VyTW9kZSA/ICcxNDknIDogJzk5J31cclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZsb2F0aW5nX291dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBwYi0yLjUgcHQtNCB3LWZ1bGwgcm91bmRlZC1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTAgZGFyazp0ZXh0LXdoaXRlIGZvY3VzLW91dGxpbmUtbm9uZSBmb2N1cy1yaW5nLTAgIHBlZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCI0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17aXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCA/ICcxNDknIDogaXMxMkhvdXJNb2RlID8gJzE0OScgOiAnOTknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2xpZGVyVmFsdWUocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmxvYXRpbmdfb3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyay10ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTQgc2NhbGUtNzUgdG9wLTIgei0xMCBvcmlnaW4tWzBdIGJnLXdoaXRlIGRhcmstYmctZ3JheS05MDAgcHgtMiBwZWVyLWZvY3VzLXB4LTIgcGVlci1mb2N1cy10ZXh0LXB1cnBsZS02MDAgcGVlci1mb2N1cy1kYXJrLXRleHQtcHVycGxlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duLXNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duLS10cmFuc2xhdGUteS0xLzIgcGVlci1wbGFjZWhvbGRlci1zaG93bi10b3AtMS8yIHBlZXItZm9jdXMtdG9wLTIgcGVlci1mb2N1cy1zY2FsZS03NSBwZWVyLWZvY3VzLS10cmFuc2xhdGUteS00IGxlZnQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBLZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1ncm93IGJvcmRlci0yIHJvdW5kZWQtZnVsbCBweC0zIHB5LTIgJHshaXMxMkhvdXJNb2RlICYmICFpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXB1cnBsZS01MDAnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VsZWN0MjRIb3VyTW9kZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAyNGhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBib3JkZXItMiByb3VuZGVkLWZ1bGwgcHgtMyBweS0yICR7aXMxMkhvdXJNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXB1cnBsZS01MDAnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VsZWN0MTJIb3VyTW9kZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAxMmhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBib3JkZXItMiByb3VuZGVkLWZ1bGwgcHgtNCBweS0yIG10LTQgJHtpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1yZWQtNTAwJ31gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2VsZWN0SW5zdWZpY2llbmNpYVJlbmFsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJbnN1ZmljaWVuY2lhIFJlbmFsIEdyYXZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvd0NhbGNGdW5jYW9SZW5hbCAmJiA8Q2FsY0Z1bmNhb1JlbmFsIC8+fVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWNhdGlvbkNhbGN1bGF0b3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FsY0Z1bmNhb1JlbmFsIiwiTWVkaWNhdGlvbkNhbGN1bGF0b3IiLCJzbGlkZXJWYWx1ZSIsInNldFNsaWRlclZhbHVlIiwiaXMxMkhvdXJNb2RlIiwic2V0SXMxMkhvdXJNb2RlIiwiaXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCIsInNldElzSW5zdWZpY2llbmNpYVJlbmFsU2VsZWN0ZWQiLCJzaG93Q2FsY0Z1bmNhb1JlbmFsIiwic2V0U2hvd0NhbGNGdW5jYW9SZW5hbCIsImhhbmRsZVNsaWRlckNoYW5nZSIsImV2ZW50IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGVjdDI0SG91ck1vZGUiLCJzZWxlY3QxMkhvdXJNb2RlIiwic2VsZWN0SW5zdWZpY2llbmNpYVJlbmFsIiwiYWRqdXN0ZWRTbGlkZXJWYWx1ZSIsIk1hdGgiLCJtaW4iLCJjYWxjdWxhdGVIb3VycyIsIm11bHRpcGxpZXIiLCJyZXN1bHQiLCJmbG9vciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImlkIiwiaW5wdXQiLCJ0eXBlIiwibWF4Iiwic3RlcCIsIm9uQ2hhbmdlIiwicGFyc2VGbG9hdCIsImxhYmVsIiwiaHRtbEZvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/calculoDose.jsx\n"));

/***/ })

});