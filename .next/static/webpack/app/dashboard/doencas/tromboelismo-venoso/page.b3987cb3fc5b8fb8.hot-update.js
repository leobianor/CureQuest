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

/***/ "(app-pages-browser)/./src/components/escorePacCirugico.jsx":
/*!**********************************************!*\
  !*** ./src/components/escorePacCirugico.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass EscorePacCirugico extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-semibold mb-4\",\n                    children: \"Calculadora de Risco de Caprini\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2\",\n                            children: \"Tipo de Cirurgia:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"border p-2 rounded w-full\",\n                            onChange: this.handleSurgeryRiskChange,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"0\",\n                                    children: \"Cirurgia de Baixo Risco\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"1\",\n                                    children: \"Cirurgia de Alto Risco\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2\",\n                            children: \"Fatores de Risco Cl\\xednicos:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"border p-2 rounded w-full\",\n                            onChange: this.handleClinicalRiskChange,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"0\",\n                                    children: \"Nenhum\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"1\",\n                                    children: \"Idade ≥ 60 anos\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"1\",\n                                    children: \"Sexo feminino\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"1\",\n                                    children: \"Tabagismo atual\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-semibold\",\n                            children: [\n                                \"Total de Pontos: \",\n                                this.state.totalPoints\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-semibold\",\n                            children: [\n                                \"Categoria de Risco: \",\n                                this.state.riskCategory\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\escorePacCirugico.jsx\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(props){\n        super(props);\n        this.handleSurgeryRiskChange = (event)=>{\n            const { value } = event.target;\n            this.setState({\n                surgeryRiskPoints: parseInt(value)\n            }, this.calculateTotalPoints);\n        };\n        this.handleClinicalRiskChange = (event)=>{\n            const { value } = event.target;\n            this.setState({\n                clinicalRiskPoints: parseInt(value)\n            }, this.calculateTotalPoints);\n        };\n        this.calculateTotalPoints = ()=>{\n            const { surgeryRiskPoints, clinicalRiskPoints } = this.state;\n            const totalPoints = surgeryRiskPoints + clinicalRiskPoints;\n            let riskCategory = \"\";\n            if (totalPoints === 0) riskCategory = \"Muito Baixo\";\n            else if (totalPoints >= 1 && totalPoints <= 2) riskCategory = \"Baixo\";\n            else if (totalPoints >= 3 && totalPoints <= 4) riskCategory = \"Moderado\";\n            else riskCategory = \"Alto\";\n            this.setState({\n                totalPoints,\n                riskCategory\n            });\n        };\n        this.state = {\n            surgeryRiskPoints: 0,\n            clinicalRiskPoints: 0,\n            totalPoints: 0,\n            riskCategory: \"\"\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EscorePacCirugico);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2VzY29yZVBhY0NpcnVnaWNvLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUV6QyxNQUFNRSwwQkFBMEJELDRDQUFTQTtJQWtDckNFLFNBQVM7UUFDTCxxQkFDSSw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE4Qjs7Ozs7OzhCQUM1Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBTUYsV0FBVTtzQ0FBYTs7Ozs7O3NDQUM5Qiw4REFBQ0c7NEJBQU9ILFdBQVU7NEJBQTRCSSxVQUFVLElBQUksQ0FBQ0MsdUJBQXVCOzs4Q0FDaEYsOERBQUNDO29DQUFPQyxPQUFNOzhDQUFJOzs7Ozs7OENBQ2xCLDhEQUFDRDtvQ0FBT0MsT0FBTTs4Q0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUcxQiw4REFBQ1I7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBTUYsV0FBVTtzQ0FBYTs7Ozs7O3NDQUM5Qiw4REFBQ0c7NEJBQU9ILFdBQVU7NEJBQTRCSSxVQUFVLElBQUksQ0FBQ0ksd0JBQXdCOzs4Q0FDakYsOERBQUNGO29DQUFPQyxPQUFNOzhDQUFJOzs7Ozs7OENBQ2xCLDhEQUFDRDtvQ0FBT0MsT0FBTTs4Q0FBSTs7Ozs7OzhDQUNsQiw4REFBQ0Q7b0NBQU9DLE9BQU07OENBQUk7Ozs7Ozs4Q0FDbEIsOERBQUNEO29DQUFPQyxPQUFNOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTFCLDhEQUFDUjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNTOzRCQUFFVCxXQUFVOztnQ0FBd0I7Z0NBQWtCLElBQUksQ0FBQ1UsS0FBSyxDQUFDQyxXQUFXOzs7Ozs7O3NDQUM3RSw4REFBQ0Y7NEJBQUVULFdBQVU7O2dDQUF3QjtnQ0FBcUIsSUFBSSxDQUFDVSxLQUFLLENBQUNFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJakc7SUE1REFDLFlBQVlDLEtBQUssQ0FBRTtRQUNmLEtBQUssQ0FBQ0E7YUFTVlQsMEJBQTBCLENBQUNVO1lBQ3ZCLE1BQU0sRUFBRVIsS0FBSyxFQUFFLEdBQUdRLE1BQU1DLE1BQU07WUFDOUIsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQUVDLG1CQUFtQkMsU0FBU1o7WUFBTyxHQUFHLElBQUksQ0FBQ2Esb0JBQW9CO1FBQ25GO2FBRUFaLDJCQUEyQixDQUFDTztZQUN4QixNQUFNLEVBQUVSLEtBQUssRUFBRSxHQUFHUSxNQUFNQyxNQUFNO1lBQzlCLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUFFSSxvQkFBb0JGLFNBQVNaO1lBQU8sR0FBRyxJQUFJLENBQUNhLG9CQUFvQjtRQUNwRjthQUVBQSx1QkFBdUI7WUFDbkIsTUFBTSxFQUFFRixpQkFBaUIsRUFBRUcsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUNYLEtBQUs7WUFDNUQsTUFBTUMsY0FBY08sb0JBQW9CRztZQUV4QyxJQUFJVCxlQUFlO1lBQ25CLElBQUlELGdCQUFnQixHQUFHQyxlQUFlO2lCQUNqQyxJQUFJRCxlQUFlLEtBQUtBLGVBQWUsR0FBR0MsZUFBZTtpQkFDekQsSUFBSUQsZUFBZSxLQUFLQSxlQUFlLEdBQUdDLGVBQWU7aUJBQ3pEQSxlQUFlO1lBRXBCLElBQUksQ0FBQ0ssUUFBUSxDQUFDO2dCQUFFTjtnQkFBYUM7WUFBYTtRQUM5QztRQTdCSSxJQUFJLENBQUNGLEtBQUssR0FBRztZQUNUUSxtQkFBbUI7WUFDbkJHLG9CQUFvQjtZQUNwQlYsYUFBYTtZQUNiQyxjQUFjO1FBQ2xCO0lBQ0o7QUFxREo7QUFFQSwrREFBZWYsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2VzY29yZVBhY0NpcnVnaWNvLmpzeD84YjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFc2NvcmVQYWNDaXJ1Z2ljbyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdXJnZXJ5Umlza1BvaW50czogMCxcclxuICAgICAgICAgICAgY2xpbmljYWxSaXNrUG9pbnRzOiAwLFxyXG4gICAgICAgICAgICB0b3RhbFBvaW50czogMCxcclxuICAgICAgICAgICAgcmlza0NhdGVnb3J5OiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1cmdlcnlSaXNrQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdXJnZXJ5Umlza1BvaW50czogcGFyc2VJbnQodmFsdWUpIH0sIHRoaXMuY2FsY3VsYXRlVG90YWxQb2ludHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDbGluaWNhbFJpc2tDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsaW5pY2FsUmlza1BvaW50czogcGFyc2VJbnQodmFsdWUpIH0sIHRoaXMuY2FsY3VsYXRlVG90YWxQb2ludHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjYWxjdWxhdGVUb3RhbFBvaW50cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHN1cmdlcnlSaXNrUG9pbnRzLCBjbGluaWNhbFJpc2tQb2ludHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgdG90YWxQb2ludHMgPSBzdXJnZXJ5Umlza1BvaW50cyArIGNsaW5pY2FsUmlza1BvaW50cztcclxuXHJcbiAgICAgICAgbGV0IHJpc2tDYXRlZ29yeSA9ICcnO1xyXG4gICAgICAgIGlmICh0b3RhbFBvaW50cyA9PT0gMCkgcmlza0NhdGVnb3J5ID0gJ011aXRvIEJhaXhvJztcclxuICAgICAgICBlbHNlIGlmICh0b3RhbFBvaW50cyA+PSAxICYmIHRvdGFsUG9pbnRzIDw9IDIpIHJpc2tDYXRlZ29yeSA9ICdCYWl4byc7XHJcbiAgICAgICAgZWxzZSBpZiAodG90YWxQb2ludHMgPj0gMyAmJiB0b3RhbFBvaW50cyA8PSA0KSByaXNrQ2F0ZWdvcnkgPSAnTW9kZXJhZG8nO1xyXG4gICAgICAgIGVsc2Ugcmlza0NhdGVnb3J5ID0gJ0FsdG8nO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxQb2ludHMsIHJpc2tDYXRlZ29yeSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+Q2FsY3VsYWRvcmEgZGUgUmlzY28gZGUgQ2FwcmluaTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMlwiPlRpcG8gZGUgQ2lydXJnaWE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdXJnZXJ5Umlza0NoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+Q2lydXJnaWEgZGUgQmFpeG8gUmlzY288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5DaXJ1cmdpYSBkZSBBbHRvIFJpc2NvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yXCI+RmF0b3JlcyBkZSBSaXNjbyBDbMOtbmljb3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDbGluaWNhbFJpc2tDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPk5lbmh1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPklkYWRlIOKJpSA2MCBhbm9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+U2V4byBmZW1pbmlubzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlRhYmFnaXNtbyBhdHVhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogT3V0cmFzIG9ww6fDtWVzIGFxdWkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPlRvdGFsIGRlIFBvbnRvczoge3RoaXMuc3RhdGUudG90YWxQb2ludHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPkNhdGVnb3JpYSBkZSBSaXNjbzoge3RoaXMuc3RhdGUucmlza0NhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc2NvcmVQYWNDaXJ1Z2ljbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRXNjb3JlUGFjQ2lydWdpY28iLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJoYW5kbGVTdXJnZXJ5Umlza0NoYW5nZSIsIm9wdGlvbiIsInZhbHVlIiwiaGFuZGxlQ2xpbmljYWxSaXNrQ2hhbmdlIiwicCIsInN0YXRlIiwidG90YWxQb2ludHMiLCJyaXNrQ2F0ZWdvcnkiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZXZlbnQiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInN1cmdlcnlSaXNrUG9pbnRzIiwicGFyc2VJbnQiLCJjYWxjdWxhdGVUb3RhbFBvaW50cyIsImNsaW5pY2FsUmlza1BvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/escorePacCirugico.jsx\n"));

/***/ })

});