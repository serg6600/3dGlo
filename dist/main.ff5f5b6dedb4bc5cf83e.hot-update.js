/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/animationUp.js":
/*!************************************!*\
  !*** ./src/modules/animationUp.js ***!
  \************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://3dGlo/./src/modules/animationUp.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animationUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationUp */ \"./src/modules/animationUp.js\");\n/* harmony import */ var _animationUp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animationUp__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\n      form = document.getElementById('form1'),\n      form2 = document.getElementById('form2'),\n      form3 = document.getElementById('form3'),\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"\\n    font-size: 2rem;\\n    color: white;\";\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var submitEvent = function submitEvent(event, form) {\n    event.preventDefault(); //проверка на минимальную длину номера, имени и пустых форм\n\n    var phone = form.querySelector('.form-phone').value,\n        email = form.querySelector('.form-email').value,\n        name = form.querySelector('.form-name').value;\n\n    if (!phone || !name || !email) {\n      alert('Необходимо заполнить все поля');\n      return;\n    }\n\n    if (phone[0] === '+' && phone.length < 8) {\n      alert('Необходимо ввести корректную длину номера');\n      return;\n    }\n\n    if (phone[0] !== '+' && phone.length < 7) {\n      alert('Необходимо ввести корректную длину номера');\n      return;\n    }\n\n    if (name.length < 2) {\n      alert('Необходимо ввести корректную длину имени');\n      return;\n    } //\n\n\n    var formData = new FormData(form);\n    var body = {};\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var val = _step.value;\n        body[val[0]] = val[1];\n\n        if (val[1] === '') {\n          alert('Необходимо заполнить все поля');\n          return;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var inputs = form.querySelectorAll('input');\n    inputs.forEach(function (item) {\n      item.value = '';\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('network status is not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      setTimeout(function () {\n        statusMessage.remove();\n      }, 3000);\n      setTimeout(function () {\n        _animationUp__WEBPACK_IMPORTED_MODULE_0___default()();\n      }, 5000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      setTimeout(function () {\n        statusMessage.remove();\n      }, 3000);\n    });\n  };\n\n  form.addEventListener('submit', function (event) {\n    submitEvent(event, form);\n  });\n  form2.addEventListener('submit', function (event) {\n    submitEvent(event, form2);\n  });\n  form3.addEventListener('submit', function (event) {\n    submitEvent(event, form3);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dGlo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("01af9cabd301db1fcd14")
/******/ })();
/******/ 
/******/ }
);