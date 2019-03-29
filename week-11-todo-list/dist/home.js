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
eval("__webpack_require__.r(__webpack_exports__);\nclass AddToDo {\n    // \n}\n\n// import { Todos } from './src/components/todos';\n\n// document.addEventListener('DOMContentLoaded', function() {\n//   new App();\n//   // const $li = document.querySelectorAll('.todo');\n//   // const $button = document.querySelector('button');\n\n//   // $button.addEventListener('click', handleAddTodo);\n  \n//   // $li.forEach(function($item) {\n//   //   $item.addEventListener('click', toggleCompleted);\n//   // });\n  \n//   // function handleAddTodo() {\n//   //   $todoList = document.querySelector('.todos');\n//   //   $input = document.querySelector('input[name=\"new-todo\"]');\n//   //   const newTodo = $input.value;\n\n//   //   $newTodo = document.createElement('li');\n//   //   $newTodo.addEventListener('click', toggleCompleted);\n//   //   $newTodo.classList.add('todo');\n//   //   $newTodo.appendChild(document.createTextNode(newTodo));\n//   //   $todoList.appendChild($newTodo)\n//   // }\n\n//   // function toggleCompleted() {\n//   //   this.classList.toggle('completed')\n//   // }\n// });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToDo);\n\n//# sourceURL=webpack:///./src/components/add-todo.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo */ \"./src/components/add-todo.js\");\n\n\n\nclass App {\n  constructor() {\n    new _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    new _add_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n}\n\nconsole.log('in App...');\n\n//# sourceURL=webpack:///./src/components/app.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todos; });\nclass Todos {\n  constructor() {\n    new Todo();\n  }\n}\n\n//# sourceURL=webpack:///./src/components/todos.js?");

/***/ })

/******/ });