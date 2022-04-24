"use strict";
(self["webpackChunkwebpack_target_property"] = self["webpackChunkwebpack_target_property"] || []).push([["entry"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub */ "./src/sub.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var executor = /*#__PURE__*/function () {
  function executor() {
    _classCallCheck(this, executor);

    Promise.resolve("index constructor called").then(function (result) {
      console.log(result);
    });
  }

  _createClass(executor, [{
    key: "execute",
    value: function execute() {
      var map = new Map();
      map.set("key", "sub module called");
      (0,_sub__WEBPACK_IMPORTED_MODULE_0__.sub)(map.get("key"));
    }
  }]);

  return executor;
}();

new executor().execute();

/***/ }),

/***/ "./src/sub.js":
/*!********************!*\
  !*** ./src/sub.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sub": function() { return /* binding */ sub; }
/* harmony export */ });
var sub = function sub(value) {
  return Promise.resolve(value).then(function (result) {
    console.log(result);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);