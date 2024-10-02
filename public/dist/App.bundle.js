/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/modules/dropdownMenu.js":
/*!****************************************************!*\
  !*** ./public/javascripts/modules/dropdownMenu.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function dropdownMenu() {
  var navMenu = document.querySelector(".js-nav--menu");
  var navWrapper = document.querySelector(".js-nav--wrapper");
  var navLinks = document.querySelectorAll(".js-nav--item");
  navMenu.addEventListener("click", function () {
    navWrapper.classList.toggle("js-is-open");
    navMenu.classList.toggle("js-highlight");
  });
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navWrapper.classList.remove("js-is-open");
      navMenu.classList.remove("js-highlight");
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (dropdownMenu);

/***/ }),

/***/ "./public/javascripts/modules/scrollTo.js":
/*!************************************************!*\
  !*** ./public/javascripts/modules/scrollTo.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// scrollTo.js
/*
const ScrollToSection = () => {
  // Keresd meg az összes navigációs linket
  document.querySelectorAll('.js-nav--item').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Megakadályozza az alapértelmezett link viselkedést

      const targetId = this.getAttribute('href'); // A link href attribútuma
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Számoljuk ki az elem pozícióját
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Smooth scroll az elemhez
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });

        // History API használata az URL frissítéséhez
        const sectionName = targetId.replace('#', ''); 
        window.history.pushState(null, '', sectionName); // Frissíti az URL-t
      }
    });
  });
};*/

var ScrollToSection = function ScrollToSection() {
  // Keresd meg az összes navigációs linket
  document.querySelectorAll('.js-nav--item').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Megakadályozza az alapértelmezett link viselkedést

      var targetId = this.getAttribute('href'); // A link href attribútuma
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Számoljuk ki az elem pozícióját
        // Használj offsetTop-ot a teljes dokumentumra vonatkozóan
        var elementPosition = targetElement.offsetTop;

        // A fejléc magasságát, pl. 80px, levonhatod, ha van fix fejléc
        var headerHeight = 80; // Módosítsd a saját fejléced magasságának megfelelően

        // Smooth scroll az elemhez
        window.scrollTo({
          top: elementPosition - headerHeight,
          // Levonjuk a fejléc magasságát
          behavior: 'smooth'
        });

        // History API használata az URL frissítéséhez
        var sectionName = targetId.replace('#', '');
        window.history.pushState(null, '', sectionName); // Frissíti az URL-t
      }
    });
  });
};

/*const ScrollToSection = () => {
  document.querySelectorAll('.js-nav--item').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Megakadályozza az alapértelmezett link viselkedését

      const targetId = this.getAttribute('href'); // A link href attribútuma
      const targetElement = document.querySelector(targetId); // Keresd meg a cél elemet

      if (targetElement) {
        // Számoljuk ki az elem pozícióját
        const elementPosition = targetElement.offsetTop;
        const headerHeight = 80; // Módosítsd a saját fejléced magasságának megfelelően

        // Smooth scroll az elemhez
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth'
        });

        // History API használata az URL frissítéséhez
        const sectionName = targetId.replace('#', ''); 
        window.history.pushState(null, '', `${window.location.origin}/${sectionName}`); // Frissíti az URL-t
      }
    });
  });
};
*/

/* harmony default export */ __webpack_exports__["default"] = (ScrollToSection);

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./public/javascripts/homepage-app.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./public/css/style.css");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./public/javascripts/modules/dropdownMenu.js");
/* harmony import */ var _modules_scrollTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollTo */ "./public/javascripts/modules/scrollTo.js");
 // without this import webpack doesn't generate the css file



(0,_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_scrollTo__WEBPACK_IMPORTED_MODULE_2__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=App.bundle.js.map