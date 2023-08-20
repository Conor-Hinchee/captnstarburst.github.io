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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Tablet_Width = 768;\nvar Mobile_Width = 480;\nvar getDeviceType = function getDeviceType(screenWidth) {\n  if (screenWidth > Tablet_Width) {\n    return 'desktop';\n  } else if (screenWidth <= Tablet_Width && screenWidth > Mobile_Width) {\n    return 'tablet';\n  } else if (screenWidth <= Mobile_Width) {\n    return 'mobile';\n  }\n};\nvar changeTheme = function changeTheme() {\n  var _event$target;\n  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var _ref = (event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.dataset) || '',\n    setTheme = _ref.setTheme;\n  if (override === 'dark' || setTheme === 'dark') {\n    document.documentElement.classList.add('dark');\n    localStorage.setItem('theme', 'dark');\n\n    // set the theme to dark, reverse the icon to light\n    var lightModeItem = document.querySelector('#lightModeItem');\n    var darkModeItem = document.querySelector('#darkModeItem');\n    lightModeItem.classList.toggle('hidden');\n    lightModeItem.classList.toggle('flex');\n    darkModeItem.classList.toggle('hidden');\n    darkModeItem.classList.toggle('flex');\n  }\n  if (override === 'light' || setTheme === 'light') {\n    document.documentElement.classList.remove('dark');\n    localStorage.setItem('theme', 'light');\n\n    // set the theme to light, reverse the icon to dark\n    var _lightModeItem = document.querySelector('#lightModeItem');\n    var _darkModeItem = document.querySelector('#darkModeItem');\n    _lightModeItem.classList.toggle('hidden');\n    _lightModeItem.classList.toggle('flex');\n    _darkModeItem.classList.toggle('hidden');\n    _darkModeItem.classList.toggle('flex');\n  }\n};\nvar setLayoutIconAriaPressed = function setLayoutIconAriaPressed(layout) {\n  var desktopLayoutButton = document.querySelector('#desktopLayoutButton');\n  var tabletLayoutButton = document.querySelector('#tabletLayoutButton');\n  var mobileLayoutButton = document.querySelector('#mobileLayoutButton');\n  if (layout === 'desktop') {\n    desktopLayoutButton.setAttribute('aria-pressed', 'true');\n    tabletLayoutButton.setAttribute('aria-pressed', 'false');\n    mobileLayoutButton.setAttribute('aria-pressed', 'false');\n  }\n  if (layout === 'tablet') {\n    desktopLayoutButton.setAttribute('aria-pressed', 'false');\n    tabletLayoutButton.setAttribute('aria-pressed', 'true');\n    mobileLayoutButton.setAttribute('aria-pressed', 'false');\n  }\n  if (layout === 'mobile') {\n    desktopLayoutButton.setAttribute('aria-pressed', 'false');\n    tabletLayoutButton.setAttribute('aria-pressed', 'false');\n    mobileLayoutButton.setAttribute('aria-pressed', 'true');\n  }\n};\nvar handleDesktopIconClick = function handleDesktopIconClick() {\n  setLayoutIconAriaPressed('desktop');\n};\nvar handleTabletIconClick = function handleTabletIconClick() {\n  setLayoutIconAriaPressed('tablet');\n};\nvar handleMobileIconClick = function handleMobileIconClick() {\n  setLayoutIconAriaPressed('mobile');\n};\nvar resizeListener = function resizeListener() {\n  var resizeTimer;\n  window.addEventListener('resize', function () {\n    clearTimeout(resizeTimer);\n    resizeTimer = setTimeout(function () {\n      var screenWidth = window.innerWidth;\n      var deviceType = getDeviceType(screenWidth);\n      setLayoutIconAriaPressed(deviceType);\n    }, 250);\n  });\n};\nvar setClickListeners = function setClickListeners() {\n  var editPageButton = document.querySelector('#editPageButton');\n  editPageButton.addEventListener('click', function () {});\n  var desktopLayoutButton = document.querySelector('#desktopLayoutButton');\n  var tabletLayoutButton = document.querySelector('#tabletLayoutButton');\n  var mobileLayoutButton = document.querySelector('#mobileLayoutButton');\n  desktopLayoutButton.addEventListener('click', handleDesktopIconClick);\n  tabletLayoutButton.addEventListener('click', handleTabletIconClick);\n  mobileLayoutButton.addEventListener('click', handleMobileIconClick);\n  var darkModeItem = document.querySelector('#darkModeItem');\n  var darkModeButton = darkModeItem.firstElementChild;\n  darkModeButton.addEventListener('click', changeTheme);\n  var lightModeItem = document.querySelector('#lightModeItem');\n  var lightModeButton = lightModeItem.firstElementChild;\n  lightModeButton.addEventListener('click', changeTheme);\n};\nvar initBanner = function initBanner() {\n  var theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';\n  changeTheme(null, theme);\n  // initial screen width\n  var screenWidth = window.innerWidth;\n  var deviceType = getDeviceType(screenWidth);\n  setLayoutIconAriaPressed(deviceType);\n  resizeListener();\n  setClickListeners();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBanner);\n\n//# sourceURL=webpack://captnstarburst.github.io/./src/js/components/banner.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner.js */ \"./src/js/components/banner.js\");\n\n(0,_components_banner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://captnstarburst.github.io/./src/js/index.js?");

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