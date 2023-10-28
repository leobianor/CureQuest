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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_calcFuncaoRenal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/calcFuncaoRenal */ \"(app-pages-browser)/./src/components/calcFuncaoRenal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst MedicationCalculator = ()=>{\n    _s();\n    const [sliderValue, setSliderValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(41);\n    const [is12HourMode, setIs12HourMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isInsuficienciaRenalSelected, setIsInsuficienciaRenalSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCalcFuncaoRenal, setShowCalcFuncaoRenal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSliderChange = (event)=>{\n        setSliderValue(parseInt(event.target.value, 10));\n    };\n    const select24HourMode = ()=>{\n        setIs12HourMode(false);\n    };\n    const select12HourMode = ()=>{\n        setIs12HourMode(true);\n    };\n    const selectInsuficienciaRenal = ()=>{\n        setIsInsuficienciaRenalSelected(!isInsuficienciaRenalSelected);\n        setShowCalcFuncaoRenal(!showCalcFuncaoRenal); // Mostra ou esconde o CalcFuncaoRenal ao clicar no botão\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const adjustedSliderValue = is12HourMode ? Math.min(sliderValue, 149) : isInsuficienciaRenalSelected ? Math.min(sliderValue, 149) : Math.min(sliderValue, 99);\n        setSliderValue(adjustedSliderValue);\n    }, [\n        is12HourMode,\n        sliderValue,\n        isInsuficienciaRenalSelected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        calculateHours();\n    }, [\n        sliderValue,\n        is12HourMode,\n        isInsuficienciaRenalSelected\n    ]);\n    const calculateHours = ()=>{\n        const multiplier = is12HourMode ? 1 : isInsuficienciaRenalSelected ? 1 : 1.5;\n        const result = Math.floor(sliderValue * multiplier);\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-white rounded-xl p-2 text-gray-900 dark:text-white shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 \".concat(isInsuficienciaRenalSelected ? \"bg-red-500\" : \"bg-orange-500\", \" rounded-lg text-white \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-lg text-center items-start font-medium px-10 mt-4\",\n                        children: \"Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-b mx-6 mt-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center font-medium text-2xl\",\n                                children: \"Enoxaparina\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center text-3xl font-semibold mt-2\",\n                                id: \"resultado\",\n                                children: [\n                                    calculateHours(),\n                                    \" mg\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5 pl-3 justify-center items-center border rounded-full border-gray-300 appearance-none dark:text-white dark-border-gray-600 dark-focus-border-purple-500 focus-outline-none focus-ring-0 focus-border-purple-600 peer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"range\",\n                        className: \"accent-purple-700 w-full rounded-full bg-gray-200 my-1 cursor-pointer dark-bg-gray-700\",\n                        min: \"41\",\n                        max: isInsuficienciaRenalSelected ? \"149\" : is12HourMode ? \"149\" : \"99\",\n                        step: \"1\",\n                        value: sliderValue,\n                        onChange: handleSliderChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative ml-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"floating_outlined\",\n                                className: \"block px-4 pb-2.5 pt-4 w-full rounded-full text-sm text-gray-900 bg-transparent appearance-none border-0 dark:text-white focus-outline-none focus-ring-0  peer\",\n                                min: \"41\",\n                                max: isInsuficienciaRenalSelected ? \"149\" : is12HourMode ? \"149\" : \"99\",\n                                step: \"1\",\n                                value: sliderValue,\n                                onChange: (event)=>setSliderValue(parseFloat(event.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"floating_outlined\",\n                                className: \"absolute text-sm text-gray-500 dark-text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark-bg-gray-900 px-2 peer-focus-px-2 peer-focus-text-purple-600 peer-focus-dark-text-purple-500 peer-placeholder-shown-scale-100 peer-placeholder-shown--translate-y-1/2 peer-placeholder-shown-top-1/2 peer-focus-top-2 peer-focus-scale-75 peer-focus--translate-y-4 left-3\",\n                                children: \"Kg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-4 gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border-2 rounded-full px-3 py-2 \".concat(!is12HourMode && !isInsuficienciaRenalSelected ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select24HourMode,\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex-grow border-2 rounded-full px-3 py-2 \".concat(is12HourMode ? \"bg-purple-500 text-white\" : \"border-purple-500\"),\n                        onClick: select12HourMode,\n                        children: \"12h\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex border-2 rounded-full px-4 py-2 mt-4 \".concat(isInsuficienciaRenalSelected ? \"bg-red-500 text-white\" : \"border-red-500\"),\n                onClick: selectInsuficienciaRenal,\n                children: \"Insuficiencia Renal Grave\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: showCalcFuncaoRenal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_calcFuncaoRenal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 41\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest\\\\src\\\\components\\\\calculoDose.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MedicationCalculator, \"wZB5tv/eh3EWX2FkJANW+sl6DW0=\");\n_c = MedicationCalculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MedicationCalculator);\nvar _c;\n$RefreshReg$(_c, \"MedicationCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhbGN1bG9Eb3NlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ1E7QUFHM0QsTUFBTUksdUJBQXVCOztJQUN6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUSw4QkFBOEJDLGdDQUFnQyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqRixNQUFNLENBQUNVLHFCQUFxQkMsdUJBQXVCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRS9ELE1BQU1ZLHFCQUFxQixDQUFDQztRQUN4QlIsZUFBZVMsU0FBU0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFDaEQ7SUFFQSxNQUFNQyxtQkFBbUI7UUFDckJWLGdCQUFnQjtJQUNwQjtJQUVBLE1BQU1XLG1CQUFtQjtRQUNyQlgsZ0JBQWdCO0lBQ3BCO0lBRUEsTUFBTVksMkJBQTJCO1FBQzdCVixnQ0FBZ0MsQ0FBQ0Q7UUFDakNHLHVCQUF1QixDQUFDRCxzQkFBc0IseURBQXlEO0lBQzNHO0lBRUFULGdEQUFTQSxDQUFDO1FBQ04sTUFBTW1CLHNCQUFzQmQsZUFDdEJlLEtBQUtDLEdBQUcsQ0FBQ2xCLGFBQWEsT0FDdEJJLCtCQUNJYSxLQUFLQyxHQUFHLENBQUNsQixhQUFhLE9BQ3RCaUIsS0FBS0MsR0FBRyxDQUFDbEIsYUFBYTtRQUNoQ0MsZUFBZWU7SUFDbkIsR0FBRztRQUFDZDtRQUFjRjtRQUFhSTtLQUE2QjtJQUU1RFAsZ0RBQVNBLENBQUM7UUFDTnNCO0lBQ0osR0FBRztRQUFDbkI7UUFBYUU7UUFBY0U7S0FBNkI7SUFFNUQsTUFBTWUsaUJBQWlCO1FBQ25CLE1BQU1DLGFBQWFsQixlQUFlLElBQUlFLCtCQUErQixJQUFJO1FBQ3pFLE1BQU1pQixTQUFTSixLQUFLSyxLQUFLLENBQUN0QixjQUFjb0I7UUFDeEMsT0FBT0M7SUFDWDtJQUlBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVcsUUFBc0UsT0FBOURwQiwrQkFBK0IsZUFBZSxpQkFBZ0I7O2tDQUNsRiw4REFBQ3FCO3dCQUFHRCxXQUFVO2tDQUF5RDs7Ozs7O2tDQUd2RSw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBbUM7Ozs7OzswQ0FDaEQsOERBQUNFO2dDQUFFRixXQUFVO2dDQUEwQ0csSUFBRzs7b0NBQWFSO29DQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHaEcsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0k7d0JBQ0dDLE1BQUs7d0JBQ0xMLFdBQVU7d0JBQ1ZOLEtBQUk7d0JBQ0pZLEtBQUsxQiwrQkFBK0IsUUFBUUYsZUFBZSxRQUFRO3dCQUNuRTZCLE1BQUs7d0JBQ0xuQixPQUFPWjt3QkFDUGdDLFVBQVV4Qjs7Ozs7O2tDQUVkLDhEQUFDZTt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNJO2dDQUNHQyxNQUFLO2dDQUNMRixJQUFHO2dDQUNISCxXQUFVO2dDQUNWTixLQUFJO2dDQUNKWSxLQUFLMUIsK0JBQStCLFFBQVFGLGVBQWUsUUFBUTtnQ0FDbkU2QixNQUFLO2dDQUNMbkIsT0FBT1o7Z0NBQ1BnQyxVQUFVLENBQUN2QixRQUFVUixlQUFlZ0MsV0FBV3hCLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBDQUVyRSw4REFBQ3NCO2dDQUNHQyxTQUFRO2dDQUNSWCxXQUFVOzBDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1k7d0JBQ0daLFdBQVcsNkNBRWUsT0FGOEIsQ0FBQ3RCLGdCQUFnQixDQUFDRSwrQkFDcEUsNkJBQ0E7d0JBQ05pQyxTQUFTeEI7a0NBQ1o7Ozs7OztrQ0FHRCw4REFBQ3VCO3dCQUNHWixXQUFXLDZDQUVlLE9BRjhCdEIsZUFDbEQsNkJBQ0E7d0JBQ05tQyxTQUFTdkI7a0NBQ1o7Ozs7Ozs7Ozs7OzswQkFJTCw4REFBQ3NCO2dCQUNHWixXQUFXLDZDQUVZLE9BRmlDcEIsK0JBQ2xELDBCQUNBO2dCQUNOaUMsU0FBU3RCOzBCQUNaOzs7Ozs7MEJBR0QsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUVWbEIscUNBQXVCLDhEQUFDUixtRUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQ7R0F2SE1DO0tBQUFBO0FBeUhOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FsY3Vsb0Rvc2UuanN4P2QyNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYWxjRnVuY2FvUmVuYWwgZnJvbSAnQC9jb21wb25lbnRzL2NhbGNGdW5jYW9SZW5hbCc7XHJcblxyXG5cclxuY29uc3QgTWVkaWNhdGlvbkNhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlKDQxKTtcclxuICAgIGNvbnN0IFtpczEySG91ck1vZGUsIHNldElzMTJIb3VyTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCwgc2V0SXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0NhbGNGdW5jYW9SZW5hbCwgc2V0U2hvd0NhbGNGdW5jYW9SZW5hbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGVyVmFsdWUocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3QyNEhvdXJNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzMTJIb3VyTW9kZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdDEySG91ck1vZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXMxMkhvdXJNb2RlKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RJbnN1ZmljaWVuY2lhUmVuYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCghaXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCk7XHJcbiAgICAgICAgc2V0U2hvd0NhbGNGdW5jYW9SZW5hbCghc2hvd0NhbGNGdW5jYW9SZW5hbCk7IC8vIE1vc3RyYSBvdSBlc2NvbmRlIG8gQ2FsY0Z1bmNhb1JlbmFsIGFvIGNsaWNhciBubyBib3TDo29cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFNsaWRlclZhbHVlID0gaXMxMkhvdXJNb2RlXHJcbiAgICAgICAgICAgID8gTWF0aC5taW4oc2xpZGVyVmFsdWUsIDE0OSlcclxuICAgICAgICAgICAgOiBpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKHNsaWRlclZhbHVlLCAxNDkpXHJcbiAgICAgICAgICAgICAgICA6IE1hdGgubWluKHNsaWRlclZhbHVlLCA5OSk7XHJcbiAgICAgICAgc2V0U2xpZGVyVmFsdWUoYWRqdXN0ZWRTbGlkZXJWYWx1ZSk7XHJcbiAgICB9LCBbaXMxMkhvdXJNb2RlLCBzbGlkZXJWYWx1ZSwgaXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FsY3VsYXRlSG91cnMoKTtcclxuICAgIH0sIFtzbGlkZXJWYWx1ZSwgaXMxMkhvdXJNb2RlLCBpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkXSk7XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlSG91cnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IGlzMTJIb3VyTW9kZSA/IDEgOiBpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkID8gMSA6IDEuNTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHNsaWRlclZhbHVlICogbXVsdGlwbGllcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC14bCBwLTIgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgc2hhZG93LVs0cHhfNHB4XzE1cHhfMHB4X3JnYmEoMTIyLDAsMjM0LDAuNTApXVwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtdC01ICR7aXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCA/ICdiZy1yZWQtNTAwJyA6ICdiZy1vcmFuZ2UtNTAwJ30gcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGB9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1jZW50ZXIgaXRlbXMtc3RhcnQgZm9udC1tZWRpdW0gcHgtMTAgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvc2UgcGFyYSB0cmF0YW1lbnRvIGRvIHRyb21ib2VtYm9saXNtbyB2ZW5vc28gY29tIG91IHNlbSBlbWJvbGlhIHB1bG1vbmFyXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvcmRlci1iIG14LTYgbXQtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMjAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC0yeGwnPkVub3hhcGFyaW5hPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtdC0yJyBpZD1cInJlc3VsdGFkb1wiPntjYWxjdWxhdGVIb3VycygpfSBtZzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTUgcGwtMyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyIHJvdW5kZWQtZnVsbCBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrLWJvcmRlci1ncmF5LTYwMCBkYXJrLWZvY3VzLWJvcmRlci1wdXJwbGUtNTAwIGZvY3VzLW91dGxpbmUtbm9uZSBmb2N1cy1yaW5nLTAgZm9jdXMtYm9yZGVyLXB1cnBsZS02MDAgcGVlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NlbnQtcHVycGxlLTcwMCB3LWZ1bGwgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIG15LTEgY3Vyc29yLXBvaW50ZXIgZGFyay1iZy1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiNDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1heD17aXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCA/ICcxNDknIDogaXMxMkhvdXJNb2RlID8gJzE0OScgOiAnOTknfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmxvYXRpbmdfb3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHBiLTIuNSBwdC00IHctZnVsbCByb3VuZGVkLWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMCBkYXJrOnRleHQtd2hpdGUgZm9jdXMtb3V0bGluZS1ub25lIGZvY3VzLXJpbmctMCAgcGVlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkID8gJzE0OScgOiBpczEySG91ck1vZGUgPyAnMTQ5JyA6ICc5OSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTbGlkZXJWYWx1ZShwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmbG9hdGluZ19vdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrLXRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNCBzY2FsZS03NSB0b3AtMiB6LTEwIG9yaWdpbi1bMF0gYmctd2hpdGUgZGFyay1iZy1ncmF5LTkwMCBweC0yIHBlZXItZm9jdXMtcHgtMiBwZWVyLWZvY3VzLXRleHQtcHVycGxlLTYwMCBwZWVyLWZvY3VzLWRhcmstdGV4dC1wdXJwbGUtNTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd24tc2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd24tLXRyYW5zbGF0ZS15LTEvMiBwZWVyLXBsYWNlaG9sZGVyLXNob3duLXRvcC0xLzIgcGVlci1mb2N1cy10b3AtMiBwZWVyLWZvY3VzLXNjYWxlLTc1IHBlZXItZm9jdXMtLXRyYW5zbGF0ZS15LTQgbGVmdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEtnXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWdyb3cgYm9yZGVyLTIgcm91bmRlZC1mdWxsIHB4LTMgcHktMiAkeyFpczEySG91ck1vZGUgJiYgIWlzSW5zdWZpY2llbmNpYVJlbmFsU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItcHVycGxlLTUwMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3QyNEhvdXJNb2RlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDI0aFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1ncm93IGJvcmRlci0yIHJvdW5kZWQtZnVsbCBweC0zIHB5LTIgJHtpczEySG91ck1vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItcHVycGxlLTUwMCd9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3QxMkhvdXJNb2RlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDEyaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGJvcmRlci0yIHJvdW5kZWQtZnVsbCBweC00IHB5LTIgbXQtNCAke2lzSW5zdWZpY2llbmNpYVJlbmFsU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXJlZC01MDAnfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3RJbnN1ZmljaWVuY2lhUmVuYWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEluc3VmaWNpZW5jaWEgUmVuYWwgR3JhdmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwnPlxyXG5cclxuICAgICAgICAgICAgICAgIHtzaG93Q2FsY0Z1bmNhb1JlbmFsICYmIDxDYWxjRnVuY2FvUmVuYWwgLz59XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWRpY2F0aW9uQ2FsY3VsYXRvcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYWxjRnVuY2FvUmVuYWwiLCJNZWRpY2F0aW9uQ2FsY3VsYXRvciIsInNsaWRlclZhbHVlIiwic2V0U2xpZGVyVmFsdWUiLCJpczEySG91ck1vZGUiLCJzZXRJczEySG91ck1vZGUiLCJpc0luc3VmaWNpZW5jaWFSZW5hbFNlbGVjdGVkIiwic2V0SXNJbnN1ZmljaWVuY2lhUmVuYWxTZWxlY3RlZCIsInNob3dDYWxjRnVuY2FvUmVuYWwiLCJzZXRTaG93Q2FsY0Z1bmNhb1JlbmFsIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0MjRIb3VyTW9kZSIsInNlbGVjdDEySG91ck1vZGUiLCJzZWxlY3RJbnN1ZmljaWVuY2lhUmVuYWwiLCJhZGp1c3RlZFNsaWRlclZhbHVlIiwiTWF0aCIsIm1pbiIsImNhbGN1bGF0ZUhvdXJzIiwibXVsdGlwbGllciIsInJlc3VsdCIsImZsb29yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaWQiLCJpbnB1dCIsInR5cGUiLCJtYXgiLCJzdGVwIiwib25DaGFuZ2UiLCJwYXJzZUZsb2F0IiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/calculoDose.jsx\n"));

/***/ })

});