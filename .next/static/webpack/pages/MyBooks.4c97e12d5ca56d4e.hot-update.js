"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/MyBooks",{

/***/ "./pages/MyBooks.tsx":
/*!***************************!*\
  !*** ./pages/MyBooks.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyBooks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card */ \"./pages/Card.tsx\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar */ \"./pages/navbar.tsx\");\n\n\n\n\n\n\n\n\nclass MyBooks extends react__WEBPACK_IMPORTED_MODULE_4__.Component {\n    componentDidMount() {\n        const id = localStorage.getItem(\"userid\");\n        const body = {\n            userId: id\n        };\n        if (id === null) {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/auth/Login\");\n        }\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:8000/api/myBooks/\", body).then((res)=>{\n            let data = [\n                ...res.data\n            ];\n            this.setState({\n                book: data\n            });\n            this.bookFetch();\n        }).catch((e)=>{\n            console.log(e);\n        });\n    }\n    bookFetch() {\n        for(let index = 0; index < this.state.book.length; index++){\n            var element = this.state.book[index].bookId;\n            axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8000/api/books/getBook/\".concat(element)).then((res)=>{\n                console.log(res.data);\n                this.setState({\n                    fullData: [\n                        ...this.state.fullData,\n                        res.data\n                    ]\n                });\n                this.setState({\n                    cartId: [\n                        ...this.state.cartId,\n                        this.state.book[index]._id\n                    ]\n                });\n            });\n        }\n    }\n    render() {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bookkart-MyBooks\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container h-full flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-full mt-16 flex flex-col justify-start items-center px-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 mt-3 mb-1\",\n                                onClick: this.bookFetch,\n                                children: \"Get my Books\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold mt-3 mb-5\",\n                                children: \"Book-Kart\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 gap-5 md:grid-cols-3\",\n                                children: this.state.fullData.length === 0 ? this.state.fullData.map(function(book) {\n                                    let index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/Return/\".concat(_this.state.cartId[index]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            returnMode: true,\n                                            image: book.Book.image,\n                                            title: book.Book.title,\n                                            desc: book.Book.description,\n                                            author: book.Book.author,\n                                            genre: book.Book.genre\n                                        }, book.Book._id, false, {\n                                            fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 84\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 33\n                                    }, _this);\n                                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-full text-2xl font-bold flex justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Hello\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 104\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 28\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\MERN\\\\Bookkart\\\\frontend\\\\pages\\\\MyBooks.tsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            book: [],\n            fullData: [],\n            cartId: []\n        };\n        this.bookFetch = this.bookFetch.bind(this);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRyw4REFBQ0U7b0NBQUlDLFdBQVU7OENBQTZELDRFQUFDSTtrREFBRzs7Ozs7Ozs7Ozt3Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXZIO0lBeERBVSxZQUFZQyxLQUFLLENBQUM7UUFDZCxLQUFLLENBQUNBO1FBQ04sSUFBSSxDQUFDekIsS0FBSyxHQUFHO1lBQ1RQLE1BQU0sRUFBRTtZQUNSWSxVQUFVLEVBQUU7WUFDWkMsUUFBUSxFQUFFO1FBQ2Q7UUFDQSxJQUFJLENBQUNaLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQ2dDLElBQUksQ0FBQyxJQUFJO0lBQzdDO0FBaURKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlCb29rcy50c3g/Yjk2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vQ2FyZCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlCb29rcyBleHRlbmRzIENvbXBvbmVudDx7fSx7Ym9vazphbnk7ZnVsbERhdGE6YW55O2NhcnRJZDphbnl9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJvb2s6IFtdLFxyXG4gICAgICAgICAgICBmdWxsRGF0YTogW10sXHJcbiAgICAgICAgICAgIGNhcnRJZDogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ib29rRmV0Y2ggPSB0aGlzLmJvb2tGZXRjaC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmlkJyk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiBpZFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYXV0aC9Mb2dpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL215Qm9va3MvYCxib2R5KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gWy4uLnJlcy5kYXRhXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9vazpkYXRhfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9va0ZldGNoKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJvb2tGZXRjaCgpe1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0YXRlLmJvb2subGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5zdGF0ZS5ib29rW2luZGV4XS5ib29rSWQ7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ib29rcy9nZXRCb29rLyR7ZWxlbWVudH1gKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmdWxsRGF0YTpbLi4udGhpcy5zdGF0ZS5mdWxsRGF0YSxyZXMuZGF0YV19KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FydElkOlsuLi50aGlzLnN0YXRlLmNhcnRJZCx0aGlzLnN0YXRlLmJvb2tbaW5kZXhdLl9pZF19KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbic+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Qm9va2thcnQtTXlCb29rczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGgtZnVsbCBmbGV4IGZsZXgtY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIG10LTE2IGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgcHgtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtd2hpdGUgYmctZ3JheS02MDAgcm91bmRlZC1tZCBzaGFkb3cgaG92ZXI6YmctZ3JheS04MDAgbXQtMyBtYi0xXCIgb25DbGljaz17dGhpcy5ib29rRmV0Y2h9PkdldCBteSBCb29rczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWJvbGQgbXQtMyBtYi01Jz5Cb29rLUthcnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBnYXAtNSBtZDpncmlkLWNvbHMtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mdWxsRGF0YS5sZW5ndGggPT09IDAgPyB0aGlzLnN0YXRlLmZ1bGxEYXRhLm1hcCgoYm9vazphbnksaW5kZXg6bnVtYmVyID0gMCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL1JldHVybi8ke3RoaXMuc3RhdGUuY2FydElkW2luZGV4XX1gfT48Qm9va0NhcmQga2V5PXtib29rLkJvb2suX2lkfSByZXR1cm5Nb2RlPXt0cnVlfSBpbWFnZT17Ym9vay5Cb29rLmltYWdlfSB0aXRsZT17Ym9vay5Cb29rLnRpdGxlfSBkZXNjPXtib29rLkJvb2suZGVzY3JpcHRpb259IGF1dGhvcj17Ym9vay5Cb29rLmF1dGhvcn0gZ2VucmU9e2Jvb2suQm9vay5nZW5yZX0gLz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOjxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgdGV4dC0yeGwgZm9udC1ib2xkIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz48aDE+SGVsbG88L2gxPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJCb29rQ2FyZCIsIk5hdmJhciIsIk15Qm9va3MiLCJjb21wb25lbnREaWRNb3VudCIsImlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJ1c2VySWQiLCJwdXNoIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2V0U3RhdGUiLCJib29rIiwiYm9va0ZldGNoIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsImluZGV4Iiwic3RhdGUiLCJsZW5ndGgiLCJlbGVtZW50IiwiYm9va0lkIiwiZ2V0IiwiZnVsbERhdGEiLCJjYXJ0SWQiLCJfaWQiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsIm1hcCIsImhyZWYiLCJyZXR1cm5Nb2RlIiwiaW1hZ2UiLCJCb29rIiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwiZ2VucmUiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/MyBooks.tsx\n"));

/***/ })

});