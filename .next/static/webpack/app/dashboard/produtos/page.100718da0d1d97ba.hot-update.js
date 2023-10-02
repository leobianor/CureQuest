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

/***/ "(app-pages-browser)/./src/components/ProductsList.jsx":
/*!*****************************************!*\
  !*** ./src/components/ProductsList.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProductCard = (param)=>{\n    let { product } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: product.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.indications\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.dosage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.contraindications\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.side_effects\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.pregnancy_category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ProductCard;\nconst ProductsList = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://api.sanofi.com/v1/products\").then((response)=>{\n            setProducts(response.data);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 h-screen\",\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                product: product\n            }, product.id, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\CureQuest-2\\\\src\\\\components\\\\ProductsList.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductsList, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c1 = ProductsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsList);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProductCard\");\n$RefreshReg$(_c1, \"ProductsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RzTGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNrQjtBQUNsQjtBQUUxQixNQUFNSSxjQUFjO1FBQUMsRUFBRUMsT0FBTyxFQUFFO0lBQzVCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDOzhCQUFJSCxRQUFRSSxJQUFJOzs7Ozs7Ozs7OzswQkFFckIsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0c7a0NBQUdMLFFBQVFNLFdBQVc7Ozs7OztrQ0FDdkIsOERBQUNEO2tDQUFHTCxRQUFRTyxNQUFNOzs7Ozs7a0NBQ2xCLDhEQUFDRjtrQ0FBR0wsUUFBUVEsaUJBQWlCOzs7Ozs7a0NBQzdCLDhEQUFDSDtrQ0FBR0wsUUFBUVMsWUFBWTs7Ozs7O2tDQUN4Qiw4REFBQ0o7a0NBQUdMLFFBQVFVLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO0tBZk1YO0FBaUJOLE1BQU1ZLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDTkMsNkNBQUtBLENBQ0FnQixHQUFHLENBQUMsc0NBQ0pDLElBQUksQ0FBQyxDQUFDQztZQUNISCxZQUFZRyxTQUFTQyxJQUFJO1FBQzdCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNKQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2xCO0lBQ1IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNsQjtRQUFJQyxXQUFVO2tCQUNWVSxTQUFTUyxHQUFHLENBQUMsQ0FBQ3JCLHdCQUNYLDhEQUFDRDtnQkFBNkJDLFNBQVNBO2VBQXJCQSxRQUFRc0IsRUFBRTs7Ozs7Ozs7OztBQUk1QztHQXJCTVg7TUFBQUE7QUF1Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdHNMaXN0LmpzeD8yMWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5pbmRpY2F0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kb3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuY29udHJhaW5kaWNhdGlvbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3Quc2lkZV9lZmZlY3RzfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LnByZWduYW5jeV9jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByb2R1Y3RzTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcImh0dHBzOi8vYXBpLnNhbm9maS5jb20vdjEvcHJvZHVjdHNcIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc206bWwtNjQgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktOTAwIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibmFtZSIsInAiLCJpbmRpY2F0aW9ucyIsImRvc2FnZSIsImNvbnRyYWluZGljYXRpb25zIiwic2lkZV9lZmZlY3RzIiwicHJlZ25hbmN5X2NhdGVnb3J5IiwiUHJvZHVjdHNMaXN0IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductsList.jsx\n"));

/***/ })

});