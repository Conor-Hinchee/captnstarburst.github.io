/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/banner.js":
/*!*************************************!*\
  !*** ./src/js/components/banner.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Tablet_Width = 768;\nvar Mobile_Width = 480;\nvar getDeviceType = function getDeviceType(screenWidth) {\n  if (screenWidth > Tablet_Width) {\n    return 'desktop';\n  } else if (screenWidth <= Tablet_Width && screenWidth > Mobile_Width) {\n    return 'tablet';\n  } else if (screenWidth <= Mobile_Width) {\n    return 'mobile';\n  }\n};\nvar changeTheme = function changeTheme() {\n  var _event$target;\n  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var _ref = (event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.dataset) || '',\n    setTheme = _ref.setTheme;\n  if (override === 'dark' || setTheme === 'dark') {\n    document.documentElement.classList.add('dark');\n    localStorage.setItem('theme', 'dark');\n\n    // set the theme to dark, reverse the icon to light\n    var lightModeItem = document.querySelector('#lightModeItem');\n    var darkModeItem = document.querySelector('#darkModeItem');\n    var mainElement = document.querySelector('main');\n    var allOandI = document.querySelectorAll('.OandI');\n    mainElement.classList.replace('bgGridWhite', 'bgGridDark');\n    if (lightModeItem.classList.contains('hidden')) {\n      lightModeItem.classList.toggle('hidden');\n      lightModeItem.classList.toggle('flex');\n      darkModeItem.classList.toggle('hidden');\n      darkModeItem.classList.toggle('flex');\n    }\n    if (allOandI.length) {\n      allOandI.forEach(function (oAndI) {\n        oAndI.classList.replace('OandIAnimationLightMode', 'OandIAnimationDarkMode');\n      });\n    }\n  }\n  if (override === 'light' || setTheme === 'light') {\n    document.documentElement.classList.remove('dark');\n    localStorage.setItem('theme', 'light');\n\n    // set the theme to light, reverse the icon to dark\n    var _lightModeItem = document.querySelector('#lightModeItem');\n    var _darkModeItem = document.querySelector('#darkModeItem');\n    var _mainElement = document.querySelector('main');\n    var _allOandI = document.querySelectorAll('.OandI');\n    _mainElement.classList.replace('bgGridDark', 'bgGridWhite');\n    if (_darkModeItem.classList.contains('hidden')) {\n      _lightModeItem.classList.toggle('hidden');\n      _lightModeItem.classList.toggle('flex');\n      _darkModeItem.classList.toggle('hidden');\n      _darkModeItem.classList.toggle('flex');\n    }\n    if (_allOandI.length) {\n      _allOandI.forEach(function (oAndI) {\n        oAndI.classList.replace('OandIAnimationDarkMode', 'OandIAnimationLightMode');\n      });\n    }\n  }\n};\nvar setLayoutIconAriaPressed = function setLayoutIconAriaPressed(layout) {\n  var desktopLayoutButton = document.querySelector('#desktopLayoutButton');\n  var tabletLayoutButton = document.querySelector('#tabletLayoutButton');\n  var mobileLayoutButton = document.querySelector('#mobileLayoutButton');\n  if (layout === 'desktop') {\n    desktopLayoutButton.setAttribute('aria-pressed', 'true');\n    tabletLayoutButton.setAttribute('aria-pressed', 'false');\n    mobileLayoutButton.setAttribute('aria-pressed', 'false');\n  }\n  if (layout === 'tablet') {\n    desktopLayoutButton.setAttribute('aria-pressed', 'false');\n    tabletLayoutButton.setAttribute('aria-pressed', 'true');\n    mobileLayoutButton.setAttribute('aria-pressed', 'false');\n  }\n  if (layout === 'mobile') {\n    desktopLayoutButton.setAttribute('aria-pressed', 'false');\n    tabletLayoutButton.setAttribute('aria-pressed', 'false');\n    mobileLayoutButton.setAttribute('aria-pressed', 'true');\n  }\n};\nvar handleDesktopIconClick = function handleDesktopIconClick() {\n  setLayoutIconAriaPressed('desktop');\n};\nvar handleTabletIconClick = function handleTabletIconClick() {\n  setLayoutIconAriaPressed('tablet');\n};\nvar handleMobileIconClick = function handleMobileIconClick() {\n  setLayoutIconAriaPressed('mobile');\n};\nvar resizeListener = function resizeListener() {\n  var resizeTimer;\n  window.addEventListener('resize', function () {\n    clearTimeout(resizeTimer);\n    resizeTimer = setTimeout(function () {\n      var screenWidth = window.innerWidth;\n      var deviceType = getDeviceType(screenWidth);\n      setLayoutIconAriaPressed(deviceType);\n    }, 250);\n  });\n};\nvar setClickListeners = function setClickListeners() {\n  var editPageButton = document.querySelector('#editPageButton');\n  editPageButton.addEventListener('click', function () {});\n  var desktopLayoutButton = document.querySelector('#desktopLayoutButton');\n  var tabletLayoutButton = document.querySelector('#tabletLayoutButton');\n  var mobileLayoutButton = document.querySelector('#mobileLayoutButton');\n  desktopLayoutButton.addEventListener('click', handleDesktopIconClick);\n  tabletLayoutButton.addEventListener('click', handleTabletIconClick);\n  mobileLayoutButton.addEventListener('click', handleMobileIconClick);\n  var darkModeItem = document.querySelector('#darkModeItem');\n  var darkModeButton = darkModeItem.firstElementChild;\n  darkModeButton.addEventListener('click', changeTheme);\n  var lightModeItem = document.querySelector('#lightModeItem');\n  var lightModeButton = lightModeItem.firstElementChild;\n  lightModeButton.addEventListener('click', changeTheme);\n};\nvar initBanner = function initBanner() {\n  var currentTheme = localStorage.getItem('theme');\n  changeTheme(null, currentTheme);\n  // initial screen width\n  var screenWidth = window.innerWidth;\n  var deviceType = getDeviceType(screenWidth);\n  setLayoutIconAriaPressed(deviceType);\n  setClickListeners();\n  resizeListener();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBanner);\n\n//# sourceURL=webpack://captnstarburst.github.io/./src/js/components/banner.js?");

/***/ }),

/***/ "./src/js/components/clickTheHexagon.js":
/*!**********************************************!*\
  !*** ./src/js/components/clickTheHexagon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initClickTheHexagon = function initClickTheHexagon() {\n  document.querySelector('.hex').addEventListener('click', function () {\n    document.querySelector('.hex').classList.toggle('rotateHex');\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initClickTheHexagon);\n\n//# sourceURL=webpack://captnstarburst.github.io/./src/js/components/clickTheHexagon.js?");

/***/ }),

/***/ "./src/js/components/gameOfLife.js":
/*!*****************************************!*\
  !*** ./src/js/components/gameOfLife.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar Cell_Width = 25;\nvar Cell_Height = 25;\nvar Game_Board = [];\nvar initCells = function initCells(totalCells) {\n  var array = new Uint8Array(totalCells);\n  self.crypto.getRandomValues(array);\n  array.forEach(function (rng) {\n    Game_Board.push({\n      alive: rng % 2 === 0,\n      age: 0,\n      domItem: null,\n      neighbors: []\n    });\n  });\n};\nvar initNeighbors = function initNeighbors(index, rows, columns) {\n  var cornerTopLeft = 0;\n  var cornerTopRight = columns - 1;\n  var cornerBottomLeft = columns * rows - columns;\n  var cornerBottomRight = columns * rows - 1;\n  if (index === cornerTopLeft) {\n    return [index + 1, cornerTopRight, cornerTopRight + 1, cornerTopRight + 2, cornerTopRight + columns, cornerBottomLeft, cornerBottomRight];\n  }\n  if (index === cornerTopRight) {\n    return [cornerTopLeft, index + 1, index + 1 + columns, index + 1 + columns - 1, index - 1, cornerBottomRight - 1, cornerBottomRight, cornerBottomLeft];\n  }\n  if (index === cornerBottomLeft) {\n    return [index + 1, cornerTopLeft + 1, cornerTopLeft, cornerTopRight, cornerBottomRight, index - 1, index - columns, index - columns + 1];\n  }\n  if (index === cornerBottomRight) {\n    return [cornerBottomLeft, cornerTopLeft, cornerTopRight, cornerTopRight - 1, index - 1, index - columns - 1, index - columns, index - columns - columns + 1];\n  }\n\n  // top \n  if (index > cornerTopLeft && index < cornerTopRight) {\n    return [index + 1, index + 1 + columns, index + columns, index - 1 + columns, index - 1, cornerBottomRight - (columns - (index - 1)), cornerBottomRight - (columns - index), cornerBottomRight - (columns - (index + 1))];\n  }\n\n  //left side\n  if (index % columns === 0) {\n    return [index + 1, index + 1 + columns, index + columns, index + columns + columns - 1, index + columns - 1, index - 1, index - 1 - columns + 1, index - 1 - columns + 2];\n  }\n\n  //right side\n  if ((index - cornerTopRight) % columns === 0) {\n    return [index - columns + 1, index + columns, index + columns - 1, index - 1, index - 1 - columns, index - columns, index + 1, index - columns - columns + 2];\n  }\n\n  // bottom \n  if (index > cornerBottomLeft) {\n    return [index + 1, index - (index + 1 - columns), index - 1 - (index + 1 - columns), index - 2 - (index + 1 - columns), index - 1, index - columns - 1, index - columns, index - columns + 1];\n  }\n  return [index + 1, index + columns, index + columns - 1, index + columns - 2, index - 1, index - 1 - columns, index - columns, index - columns + 1];\n};\nvar drawBoard = function drawBoard() {\n  var box = document.querySelector('#gameOfLife');\n  var boxHeight = box.clientHeight;\n  var boxWidth = box.clientWidth;\n  var rows = Math.floor(boxHeight / Cell_Height + 2);\n  var columns = Math.floor(boxWidth / Cell_Width);\n  var totalCells = rows * columns;\n  initCells(totalCells);\n  Game_Board.forEach(function (cell, index) {\n    var div = document.createElement('div');\n    div.style.width = \"\".concat(Cell_Width, \"px\");\n    div.style.height = \"\".concat(Cell_Height, \"px\");\n    div.style.backgroundColor = 'blue';\n    div.style.border = '1px solid black';\n    div.style.flexGrow = '0';\n    div.style.flexShrink = '0';\n    var cellClass = cell.alive ? 'worm' : 'skull';\n    div.classList.add(cellClass);\n    // div.innerText = index;\n\n    cell.domItem = div;\n    cell.neighbors = _toConsumableArray(initNeighbors(index, rows, columns));\n    box.appendChild(div);\n  });\n};\nvar totalAliveNeighbors = function totalAliveNeighbors(neighbors) {\n  var aliveNeighbors = 0;\n  neighbors.forEach(function (cellIndex) {\n    if (Game_Board[cellIndex].alive) {\n      aliveNeighbors++;\n    }\n  });\n  return aliveNeighbors;\n};\nvar paintBoard = function paintBoard() {\n  Game_Board.forEach(function (cell) {\n    var alive = cell.alive,\n      age = cell.age,\n      domItem = cell.domItem;\n    if (!alive && age === -1) {\n      domItem.classList.remove('worm');\n      domItem.classList.add('skull');\n    }\n    if (!alive && age !== -1) {\n      domItem.classList.remove('skull');\n    }\n    if (alive) {\n      domItem.classList.remove('skull');\n      domItem.classList.add('worm');\n    }\n  });\n};\nvar play = function play() {\n  var gameBoardCopy = _toConsumableArray(Game_Board);\n  Game_Board.forEach(function (cell, i) {\n    var alive = cell.alive,\n      age = cell.age,\n      neighbors = cell.neighbors;\n    var aliveNeighbors = totalAliveNeighbors(neighbors, i);\n    if (alive && aliveNeighbors <= 1) {\n      gameBoardCopy[i].alive = false;\n      gameBoardCopy[i].age = -1;\n    }\n    if (alive && aliveNeighbors < 1 && aliveNeighbors < 4) {\n      gameBoardCopy[i].age = age + 1;\n    }\n    if (alive && aliveNeighbors > 3) {\n      gameBoardCopy[i].alive = false;\n      gameBoardCopy[i].age = -1;\n    }\n    if (!alive && aliveNeighbors === 3) {\n      gameBoardCopy[i].alive = true;\n      gameBoardCopy[i].age = 0;\n    }\n    if (!alive && age === -1) {\n      gameBoardCopy[i].age = 0;\n    }\n  });\n  Game_Board = _toConsumableArray(gameBoardCopy);\n  paintBoard();\n};\nvar initGameOfLife = function initGameOfLife() {\n  var box = document.querySelector('#gameOfLife');\n  if (!box) return;\n  drawBoard();\n  setInterval(play, 1000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGameOfLife);\n\n//# sourceURL=webpack://captnstarburst.github.io/./src/js/components/gameOfLife.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner.js */ \"./src/js/components/banner.js\");\n/* harmony import */ var _components_clickTheHexagon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/clickTheHexagon.js */ \"./src/js/components/clickTheHexagon.js\");\n/* harmony import */ var _components_gameOfLife_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gameOfLife.js */ \"./src/js/components/gameOfLife.js\");\n\n\n\n(0,_components_banner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_components_clickTheHexagon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_components_gameOfLife_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://captnstarburst.github.io/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;