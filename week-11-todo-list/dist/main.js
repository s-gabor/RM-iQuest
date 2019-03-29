/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/add-todo.js":
/*!************************************!*\
  !*** ./src/components/add-todo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n\n\nclass AddToDo {\n    constructor() {\n        const $button = document.querySelector('button');\n        $button.addEventListener('click', () => {\n            const $input = document.querySelector('input[name=\"new-todo\"]');\n            new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($input.value);\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToDo);\n\n\n//# sourceURL=webpack:///./src/components/add-todo.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo */ \"./src/components/add-todo.js\");\n\n\n\nclass App {\n  constructor() {\n    new _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    new _add_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded' , () => {\n  new App();\n});\n\n\n//# sourceURL=webpack:///./src/components/app.js?");

/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_toggle_completed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/toggle-completed */ \"./src/helpers/toggle-completed.js\");\n\n\nclass Todo {\n    constructor(todo) {\n        const $todoList = document.querySelector('.todos');\n        const $newTodo = document.createElement('li');\n\n        $newTodo.addEventListener('click', _helpers_toggle_completed__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        $newTodo.classList.add('todo');\n        $newTodo.appendChild(document.createTextNode(todo));\n        \n        $todoList.appendChild($newTodo);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n\n//# sourceURL=webpack:///./src/components/todo.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_toggle_completed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/toggle-completed */ \"./src/helpers/toggle-completed.js\");\n\n\nclass Todos {\n  constructor() {\n    // new Todo();\n    const todos = document.querySelectorAll('.todo');\n    todos.forEach(todo => {\n      todo.addEventListener('click', _helpers_toggle_completed__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\n\n//# sourceURL=webpack:///./src/components/todos.js?");

/***/ }),

/***/ "./src/helpers/toggle-completed.js":
/*!*****************************************!*\
  !*** ./src/helpers/toggle-completed.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction toggleCompleted() {\n    this.classList.toggle('completed');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleCompleted);\n\n//# sourceURL=webpack:///./src/helpers/toggle-completed.js?");

/***/ })

/******/ });