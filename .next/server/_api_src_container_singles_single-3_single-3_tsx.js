"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_api_src_container_singles_single-3_single-3_tsx";
exports.ids = ["_api_src_container_singles_single-3_single-3_tsx"];
exports.modules = {

/***/ "(api)/./src/container/singles/single-3/single-3.tsx":
/*!*****************************************************!*\
  !*** ./src/container/singles/single-3/single-3.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SingleHeader */ \"(api)/./src/container/singles/SingleHeader.tsx\");\n/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/getPostDataFromPostFragment */ \"(api)/./src/utils/getPostDataFromPostFragment.ts\");\n/* harmony import */ var _components_MyImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MyImage */ \"(api)/./src/components/MyImage.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SingleHeader__WEBPACK_IMPORTED_MODULE_2__]);\n_SingleHeader__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst SingleType3 = ({ post })=>{\n    //\n    const { title, content, date, author, databaseId, excerpt, featuredImage } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_3__.getPostDataFromPostFragment)(post || {});\n    //\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark container relative z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: `max-w-screen-md ${featuredImage?.sourceUrl ? \"\" : \"mx-auto pb-6 md:pb-0\"}`,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingleHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: post,\n                        hiddenDesc: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-3\\\\single-3.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-3\\\\single-3.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-3\\\\single-3.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            featuredImage?.sourceUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 md:mt-0 md:absolute md:top-0 md:end-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"block w-full h-full object-cover\",\n                        src: featuredImage?.sourceUrl || \"\",\n                        alt: title,\n                        priority: true,\n                        sizes: \"(max-width: 1024px) 100vw, 1240px\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-3\\\\single-3.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:block absolute top-0 start-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-r rtl:bg-gradient-to-l\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-3\\\\single-3.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-3\\\\single-3.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\NCMAZ_FAUST\\\\front-end\\\\ncmaz-faust\\\\src\\\\container\\\\singles\\\\single-3\\\\single-3.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleType3);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29udGFpbmVyL3NpbmdsZXMvc2luZ2xlLTMvc2luZ2xlLTMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUdTO0FBQ3VDO0FBQ3ZDO0FBSTNDLE1BQU1JLGNBQXlCLENBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ3RDLEVBQUU7SUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRSxHQUN4RVYsK0ZBQTJCQSxDQUFDRyxRQUFRLENBQUM7SUFDdkMsRUFBRTtJQUVGLHFCQUNFLDhEQUFDUTtRQUFPQyxXQUFVOzswQkFFaEIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFDQ0QsV0FBVyxDQUFDLGdCQUFnQixFQUMxQkYsZUFBZUksWUFBWSxLQUFLLHVCQUNqQyxDQUFDOzhCQUVGLDRFQUFDZixxREFBWUE7d0JBQUNJLE1BQU1BO3dCQUFNWSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O1lBS3ZDTCxlQUFlSSwyQkFDZCw4REFBQ0Q7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDWCwyREFBT0E7d0JBQ05XLFdBQVU7d0JBQ1ZJLEtBQUtOLGVBQWVJLGFBQWE7d0JBQ2pDRyxLQUFLYjt3QkFDTGMsUUFBUTt3QkFDUkMsT0FBTTt3QkFDTkMsSUFBSTs7Ozs7O2tDQUdOLDhEQUFDUDt3QkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0FBRUEsaUVBQWVWLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3NpbmdsZXMvc2luZ2xlLTMvc2luZ2xlLTMudHN4PzhhZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFNpbmdsZVR5cGUxUHJvcHMgfSBmcm9tIFwiLi4vc2luZ2xlL3NpbmdsZVwiO1xuaW1wb3J0IFNpbmdsZUhlYWRlciBmcm9tIFwiLi4vU2luZ2xlSGVhZGVyXCI7XG5pbXBvcnQgeyBnZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnQgfSBmcm9tIFwiQC91dGlscy9nZXRQb3N0RGF0YUZyb21Qb3N0RnJhZ21lbnRcIjtcbmltcG9ydCBNeUltYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvTXlJbWFnZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTaW5nbGVUeXBlMVByb3BzIHt9XG5cbmNvbnN0IFNpbmdsZVR5cGUzOiBGQzxQcm9wcz4gPSAoeyBwb3N0IH0pID0+IHtcbiAgLy9cbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgZGF0ZSwgYXV0aG9yLCBkYXRhYmFzZUlkLCBleGNlcnB0LCBmZWF0dXJlZEltYWdlIH0gPVxuICAgIGdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudChwb3N0IHx8IHt9KTtcbiAgLy9cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHQtMTYgei0xMCBtZDpweS0yMCBsZzpweS0yOCBiZy1uZXV0cmFsLTkwMCBkYXJrOmJnLWJsYWNrXCI+XG4gICAgICB7LyogU0lOR0xFIEhFQURFUiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyayBjb250YWluZXIgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWF4LXctc2NyZWVuLW1kICR7XG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlPy5zb3VyY2VVcmwgPyBcIlwiIDogXCJteC1hdXRvIHBiLTYgbWQ6cGItMFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8U2luZ2xlSGVhZGVyIHBvc3Q9e3Bvc3R9IGhpZGRlbkRlc2MgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZFQVRVUkVEIElNQUdFICovfVxuICAgICAge2ZlYXR1cmVkSW1hZ2U/LnNvdXJjZVVybCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0wIG1kOmFic29sdXRlIG1kOnRvcC0wIG1kOmVuZC0wIG1kOmJvdHRvbS0wIG1kOnctMS8yIGxnOnctMi81IDJ4bDp3LTEvM1wiPlxuICAgICAgICAgIDxNeUltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICBzcmM9e2ZlYXR1cmVkSW1hZ2U/LnNvdXJjZVVybCB8fCBcIlwifVxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDEwMjRweCkgMTAwdncsIDEyNDBweFwiXG4gICAgICAgICAgICBmaWxsXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIGFic29sdXRlIHRvcC0wIHN0YXJ0LTAgYm90dG9tLTAgdy0xLzUgZnJvbS1uZXV0cmFsLTkwMCBkYXJrOmZyb20tYmxhY2sgYmctZ3JhZGllbnQtdG8tciBydGw6YmctZ3JhZGllbnQtdG8tbFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVUeXBlMztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpbmdsZUhlYWRlciIsImdldFBvc3REYXRhRnJvbVBvc3RGcmFnbWVudCIsIk15SW1hZ2UiLCJTaW5nbGVUeXBlMyIsInBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiYXV0aG9yIiwiZGF0YWJhc2VJZCIsImV4Y2VycHQiLCJmZWF0dXJlZEltYWdlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwic291cmNlVXJsIiwiaGlkZGVuRGVzYyIsInNyYyIsImFsdCIsInByaW9yaXR5Iiwic2l6ZXMiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/container/singles/single-3/single-3.tsx\n");

/***/ })

};
;