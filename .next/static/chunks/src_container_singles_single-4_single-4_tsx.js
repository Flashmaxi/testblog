"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_container_singles_single-4_single-4_tsx"],{

/***/ "./src/container/singles/SingleHeader4.tsx":
/*!*************************************************!*\
  !*** ./src/container/singles/SingleHeader4.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CategoryBadgeList/CategoryBadgeList */ \"./src/components/CategoryBadgeList/CategoryBadgeList.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SingleTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SingleTitle */ \"./src/container/singles/SingleTitle.tsx\");\n/* harmony import */ var _components_PostMeta2_PostMeta2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PostMeta2/PostMeta2 */ \"./src/components/PostMeta2/PostMeta2.tsx\");\n/* harmony import */ var _SingleMetaAction2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleMetaAction2 */ \"./src/container/singles/SingleMetaAction2.tsx\");\n/* harmony import */ var _components_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/NcImage/NcImage */ \"./src/components/NcImage/NcImage.tsx\");\n/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/getPostDataFromPostFragment */ \"./src/utils/getPostDataFromPostFragment.ts\");\n\n\n\n\n\n\n\n\nconst SingleHeader4 = (param)=>{\n    let { hiddenDesc = false, className = \"\", post } = param;\n    var _featuredImage_mediaDetails, _featuredImage_mediaDetails1;\n    const { title, excerpt, ncPostMetaData, categories, commentCount, databaseId, uri, featuredImage } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_7__.getPostDataFromPostFragment)(post || {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"nc-SingleHeader4 \".concat(className),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-5xl mx-auto space-y-5 dark\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            itemClass: \"!px-3\",\n                            categories: (categories === null || categories === void 0 ? void 0 : categories.nodes) || []\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingleTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            mainClass: \"text-neutral-900 font-bold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl 2xl:text-6xl dark:text-neutral-100\",\n                            title: title || \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        !hiddenDesc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dangerouslySetInnerHTML: {\n                                __html: excerpt\n                            },\n                            className: \"block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    alt: title || \"\",\n                    containerClassName: \"my-10 relative\",\n                    className: \"w-full rounded-lg shadow-xl\",\n                    src: (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.sourceUrl) || \"\",\n                    width: (featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage_mediaDetails = featuredImage.mediaDetails) === null || _featuredImage_mediaDetails === void 0 ? void 0 : _featuredImage_mediaDetails.width) || 1000,\n                    height: (featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage_mediaDetails1 = featuredImage.mediaDetails) === null || _featuredImage_mediaDetails1 === void 0 ? void 0 : _featuredImage_mediaDetails1.height) || 750,\n                    sizes: \"(max-width: 1024px) 100vw, 1280px\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostMeta2_PostMeta2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    size: \"large\",\n                                    className: \"leading-none flex-shrink-0\",\n                                    hiddenCategories: true,\n                                    avatarRounded: \"rounded-full shadow-inner\",\n                                    post: {\n                                        ...post\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingleMetaAction2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    post: {\n                                        ...post\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full border-b border-neutral-100 dark:border-neutral-800\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\SingleHeader4.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = SingleHeader4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleHeader4);\nvar _c;\n$RefreshReg$(_c, \"SingleHeader4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL3NpbmdsZXMvU2luZ2xlSGVhZGVyNC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUY7QUFDL0M7QUFDTTtBQUNpQjtBQUNMO0FBQ0Q7QUFFK0I7QUFRbEYsTUFBTU8sZ0JBQXdDO1FBQUMsRUFDN0NDLGFBQWEsS0FBSyxFQUNsQkMsWUFBWSxFQUFFLEVBQ2RDLElBQUksRUFDTDtRQXNDZ0JDLDZCQUNDQTtJQXRDaEIsTUFBTSxFQUNKQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsY0FBYyxFQUNkQyxVQUFVLEVBQ1ZDLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxHQUFHLEVBQ0hQLGFBQWEsRUFDZCxHQUFHTCwrRkFBMkJBLENBQUNJLFFBQVEsQ0FBQztJQUV6QyxxQkFDRTtrQkFDRSw0RUFBQ1M7WUFBSVYsV0FBVyxvQkFBOEIsT0FBVkE7OzhCQUNsQyw4REFBQ1U7b0JBQUlWLFdBQVU7O3NDQUNiLDhEQUFDVCx1RkFBaUJBOzRCQUNoQm9CLFdBQVU7NEJBQ1ZMLFlBQVlBLENBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBWU0sS0FBSyxLQUFJLEVBQUU7Ozs7OztzQ0FFckMsOERBQUNuQixvREFBV0E7NEJBQ1ZvQixXQUFVOzRCQUNWVixPQUFPQSxTQUFTOzs7Ozs7d0JBRWpCLENBQUNKLDRCQUNBLDhEQUFDVzs0QkFDQ0kseUJBQXlCO2dDQUFFQyxRQUFRWDs0QkFBUTs0QkFDM0NKLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFNaEIsOERBQUNKLG1FQUFPQTtvQkFDTm9CLEtBQUtiLFNBQVM7b0JBQ2RjLG9CQUFtQjtvQkFDbkJqQixXQUFVO29CQUNWa0IsS0FBS2hCLENBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBZWlCLFNBQVMsS0FBSTtvQkFDakNDLE9BQU9sQixDQUFBQSwwQkFBQUEscUNBQUFBLDhCQUFBQSxjQUFlbUIsWUFBWSxjQUEzQm5CLGtEQUFBQSw0QkFBNkJrQixLQUFLLEtBQUk7b0JBQzdDRSxRQUFRcEIsQ0FBQUEsMEJBQUFBLHFDQUFBQSwrQkFBQUEsY0FBZW1CLFlBQVksY0FBM0JuQixtREFBQUEsNkJBQTZCb0IsTUFBTSxLQUFJO29CQUMvQ0MsT0FBTTtvQkFDTkMsUUFBUTs7Ozs7OzhCQUdWLDhEQUFDZDtvQkFBSVYsV0FBVTs7c0NBQ2IsOERBQUNVOzRCQUFJVixXQUFVOzs4Q0FDYiw4REFBQ04sdUVBQVNBO29DQUNSK0IsTUFBSztvQ0FDTHpCLFdBQVU7b0NBQ1YwQixnQkFBZ0I7b0NBQ2hCQyxlQUFjO29DQUNkMUIsTUFBTTt3Q0FBRSxHQUFHQSxJQUFJO29DQUFDOzs7Ozs7OENBRWxCLDhEQUFDTiwwREFBaUJBO29DQUFDTSxNQUFNO3dDQUFFLEdBQUdBLElBQUk7b0NBQUM7Ozs7Ozs7Ozs7OztzQ0FFckMsOERBQUNTOzRCQUFJVixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0tBaEVNRjtBQWtFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVyL3NpbmdsZXMvU2luZ2xlSGVhZGVyNC50c3g/ZTk2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0ZWdvcnlCYWRnZUxpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9DYXRlZ29yeUJhZGdlTGlzdC9DYXRlZ29yeUJhZGdlTGlzdFwiO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2luZ2xlVGl0bGUgZnJvbSBcIi4vU2luZ2xlVGl0bGVcIjtcbmltcG9ydCBQb3N0TWV0YTIgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0TWV0YTIvUG9zdE1ldGEyXCI7XG5pbXBvcnQgU2luZ2xlTWV0YUFjdGlvbjIgZnJvbSBcIi4vU2luZ2xlTWV0YUFjdGlvbjJcIjtcbmltcG9ydCBOY0ltYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvTmNJbWFnZS9OY0ltYWdlXCI7XG5pbXBvcnQgeyBHZXRQb3N0U2lnbGVQYWdlUXVlcnkgfSBmcm9tIFwiQC9fX2dlbmVyYXRlZF9fL2dyYXBocWxcIjtcbmltcG9ydCB7IGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudCB9IGZyb20gXCJAL3V0aWxzL2dldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUhlYWRlcjRQcm9wcyB7XG4gIGhpZGRlbkRlc2M/OiBib29sZWFuO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBvc3Q6IEdldFBvc3RTaWdsZVBhZ2VRdWVyeVtcInBvc3RcIl07XG59XG5cbmNvbnN0IFNpbmdsZUhlYWRlcjQ6IEZDPFNpbmdsZUhlYWRlcjRQcm9wcz4gPSAoe1xuICBoaWRkZW5EZXNjID0gZmFsc2UsXG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIHBvc3QsXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBleGNlcnB0LFxuICAgIG5jUG9zdE1ldGFEYXRhLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgY29tbWVudENvdW50LFxuICAgIGRhdGFiYXNlSWQsXG4gICAgdXJpLFxuICAgIGZlYXR1cmVkSW1hZ2UsXG4gIH0gPSBnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQocG9zdCB8fCB7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYy1TaW5nbGVIZWFkZXI0ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIHNwYWNlLXktNSBkYXJrXCI+XG4gICAgICAgICAgPENhdGVnb3J5QmFkZ2VMaXN0XG4gICAgICAgICAgICBpdGVtQ2xhc3M9XCIhcHgtM1wiXG4gICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzPy5ub2RlcyB8fCBbXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTaW5nbGVUaXRsZVxuICAgICAgICAgICAgbWFpbkNsYXNzPVwidGV4dC1uZXV0cmFsLTkwMCBmb250LWJvbGQgdGV4dC0zeGwgbWQ6dGV4dC00eGwgbWQ6IWxlYWRpbmctWzEyMCVdIGxnOnRleHQtNXhsIDJ4bDp0ZXh0LTZ4bCBkYXJrOnRleHQtbmV1dHJhbC0xMDBcIlxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlIHx8IFwiXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IWhpZGRlbkRlc2MgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGV4Y2VycHQgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1iYXNlIHRleHQtbmV1dHJhbC01MDAgbWQ6dGV4dC1sZyBkYXJrOnRleHQtbmV1dHJhbC00MDAgcGItMVwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZFQVRVUkVEIElNQUdFICovfVxuICAgICAgICA8TmNJbWFnZVxuICAgICAgICAgIGFsdD17dGl0bGUgfHwgXCJcIn1cbiAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9XCJteS0xMCByZWxhdGl2ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgc2hhZG93LXhsXCJcbiAgICAgICAgICBzcmM9e2ZlYXR1cmVkSW1hZ2U/LnNvdXJjZVVybCB8fCBcIlwifVxuICAgICAgICAgIHdpZHRoPXtmZWF0dXJlZEltYWdlPy5tZWRpYURldGFpbHM/LndpZHRoIHx8IDEwMDB9XG4gICAgICAgICAgaGVpZ2h0PXtmZWF0dXJlZEltYWdlPy5tZWRpYURldGFpbHM/LmhlaWdodCB8fCA3NTB9XG4gICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiAxMDI0cHgpIDEwMHZ3LCAxMjgwcHhcIlxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteS0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gc206aXRlbXMtZW5kIHNwYWNlLXktNSBzbTpzcGFjZS15LTAgc206c3BhY2UteC01IHJ0bDpzcGFjZS14LXJldmVyc2VcIj5cbiAgICAgICAgICAgIDxQb3N0TWV0YTJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy1ub25lIGZsZXgtc2hyaW5rLTBcIlxuICAgICAgICAgICAgICBoaWRkZW5DYXRlZ29yaWVzXG4gICAgICAgICAgICAgIGF2YXRhclJvdW5kZWQ9XCJyb3VuZGVkLWZ1bGwgc2hhZG93LWlubmVyXCJcbiAgICAgICAgICAgICAgcG9zdD17eyAuLi5wb3N0IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNpbmdsZU1ldGFBY3Rpb24yIHBvc3Q9e3sgLi4ucG9zdCB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1iIGJvcmRlci1uZXV0cmFsLTEwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTgwMFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlSGVhZGVyNDtcbiJdLCJuYW1lcyI6WyJDYXRlZ29yeUJhZGdlTGlzdCIsIlJlYWN0IiwiU2luZ2xlVGl0bGUiLCJQb3N0TWV0YTIiLCJTaW5nbGVNZXRhQWN0aW9uMiIsIk5jSW1hZ2UiLCJnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQiLCJTaW5nbGVIZWFkZXI0IiwiaGlkZGVuRGVzYyIsImNsYXNzTmFtZSIsInBvc3QiLCJmZWF0dXJlZEltYWdlIiwidGl0bGUiLCJleGNlcnB0IiwibmNQb3N0TWV0YURhdGEiLCJjYXRlZ29yaWVzIiwiY29tbWVudENvdW50IiwiZGF0YWJhc2VJZCIsInVyaSIsImRpdiIsIml0ZW1DbGFzcyIsIm5vZGVzIiwibWFpbkNsYXNzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJhbHQiLCJjb250YWluZXJDbGFzc05hbWUiLCJzcmMiLCJzb3VyY2VVcmwiLCJ3aWR0aCIsIm1lZGlhRGV0YWlscyIsImhlaWdodCIsInNpemVzIiwicHJpb3JpdHkiLCJzaXplIiwiaGlkZGVuQ2F0ZWdvcmllcyIsImF2YXRhclJvdW5kZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/container/singles/SingleHeader4.tsx\n"));

/***/ }),

/***/ "./src/container/singles/single-4/single-4.tsx":
/*!*****************************************************!*\
  !*** ./src/container/singles/single-4/single-4.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleHeader4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SingleHeader4 */ \"./src/container/singles/SingleHeader4.tsx\");\n/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/getPostDataFromPostFragment */ \"./src/utils/getPostDataFromPostFragment.ts\");\n\n\n\n\nconst SingleType4 = (param)=>{\n    let { post } = param;\n    const { title, content, date, author, databaseId, excerpt, featuredImage } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_3__.getPostDataFromPostFragment)(post || {});\n    //\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 inset-x-0 bg-neutral-900 dark:bg-black/30 h-[480px] md:h-[600px] lg:h-[700px] xl:h-[95vh]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-4\\\\single-4.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"container pt-10 lg:pt-16 rounded-xl relative z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingleHeader4__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    post: post\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-4\\\\single-4.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-4\\\\single-4.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = SingleType4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleType4);\nvar _c;\n$RefreshReg$(_c, \"SingleType4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL3NpbmdsZXMvc2luZ2xlLTQvc2luZ2xlLTQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDVztBQUVxQztBQUlsRixNQUFNRyxjQUF5QjtRQUFDLEVBQUVDLElBQUksRUFBRTtJQUN0QyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRSxHQUN4RVQsK0ZBQTJCQSxDQUFDRSxRQUFRLENBQUM7SUFDdkMsRUFBRTtJQUVGLHFCQUNFOzswQkFDRSw4REFBQ1E7Z0JBQUlDLFdBQVU7Ozs7OzswQkFFZiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDWixzREFBYUE7b0JBQUNHLE1BQU1BOzs7Ozs7Ozs7Ozs7O0FBSTdCO0tBZE1EO0FBZ0JOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YWluZXIvc2luZ2xlcy9zaW5nbGUtNC9zaW5nbGUtNC50c3g/MDE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaW5nbGVIZWFkZXI0IGZyb20gXCIuLi9TaW5nbGVIZWFkZXI0XCI7XG5pbXBvcnQgeyBTaW5nbGVUeXBlMVByb3BzIH0gZnJvbSBcIi4uL3NpbmdsZS9zaW5nbGVcIjtcbmltcG9ydCB7IGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudCB9IGZyb20gXCJAL3V0aWxzL2dldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTaW5nbGVUeXBlMVByb3BzIHt9XG5cbmNvbnN0IFNpbmdsZVR5cGU0OiBGQzxQcm9wcz4gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgZGF0ZSwgYXV0aG9yLCBkYXRhYmFzZUlkLCBleGNlcnB0LCBmZWF0dXJlZEltYWdlIH0gPVxuICAgIGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudChwb3N0IHx8IHt9KTtcbiAgLy9cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGluc2V0LXgtMCBiZy1uZXV0cmFsLTkwMCBkYXJrOmJnLWJsYWNrLzMwIGgtWzQ4MHB4XSBtZDpoLVs2MDBweF0gbGc6aC1bNzAwcHhdIHhsOmgtWzk1dmhdXCI+PC9kaXY+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTEwIGxnOnB0LTE2IHJvdW5kZWQteGwgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICA8U2luZ2xlSGVhZGVyNCBwb3N0PXtwb3N0fSAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVUeXBlNDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpbmdsZUhlYWRlcjQiLCJnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQiLCJTaW5nbGVUeXBlNCIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiYXV0aG9yIiwiZGF0YWJhc2VJZCIsImV4Y2VycHQiLCJmZWF0dXJlZEltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/container/singles/single-4/single-4.tsx\n"));

/***/ })

}]);