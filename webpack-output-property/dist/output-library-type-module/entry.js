export const id = "entry";
export const ids = ["entry"];
export const modules = {

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
const sub = (value) =>
  Promise.resolve(value).then((result) => {
    console.log(result);
  });


/***/ })

};
;

// load runtime
import __webpack_require__ from "./manifest.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./entry.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/index.js");
var __webpack_exports__executor = __webpack_exports__.executor;
export { __webpack_exports__executor as executor };
