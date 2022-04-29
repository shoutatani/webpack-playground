// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunkLibraryAssignProperties"] = self["webpackChunkLibraryAssignProperties"] || []).push([["entry"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executor": () => (/* binding */ executor)
/* harmony export */ });
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub */ "./src/sub.js");


class executor {
  constructor() {
    Promise.resolve("index constructor called").then((result) => {
      console.log(result);
    });
  }

  execute() {
    const map = new Map();
    map.set("key", "sub module called");
    (0,_sub__WEBPACK_IMPORTED_MODULE_0__.sub)(map.get("key"));
  }
}


/***/ }),

/***/ "./src/sub.js":
/*!********************!*\
  !*** ./src/sub.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
const sub = (value) =>
  Promise.resolve(value).then((result) => {
    console.log(result);
  });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ var __webpack_export_target__ = (LibraryAssignProperties = typeof LibraryAssignProperties === "undefined" ? {} : LibraryAssignProperties);
/******/ for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ }
]);