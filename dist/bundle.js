/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/food2.jpg */ "./src/images/food2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Coda&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: none;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n\tfont-size: var(--step--2);\r\n}\r\n\r\n.subnav-link {\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-link:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: 90%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-sort-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.ingredients-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 20% 80%;\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Coda&display=swap');\r\n\r\n:root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(images/food2.jpg) no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: none;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n\tfont-size: var(--step--2);\r\n}\r\n\r\n.subnav-link {\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-link:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: 90%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-sort-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.ingredients-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 20% 80%;\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/nav.ts":
/*!********************!*\
  !*** ./src/nav.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMealPlansButton = () => {
    const mealPlansButton = document.createElement('button');
    mealPlansButton.classList.add('nav-button');
    mealPlansButton.setAttribute('id', 'meal-plans-button');
    mealPlansButton.textContent = 'Meal Plans';
    const mealPlansArrow = document.createElement('i');
    mealPlansArrow.classList.add('fa-solid', 'fa-angle-down', 'arrow');
    mealPlansButton.appendChild(mealPlansArrow);
    return mealPlansButton;
};
const createMealPlansSubnav = () => {
    const mealPlansSubnav = document.createElement('div');
    mealPlansSubnav.classList.add('subnav');
    const weekSubnavLink = document.createElement('a');
    weekSubnavLink.classList.add('subnav-link');
    weekSubnavLink.setAttribute('href', '');
    weekSubnavLink.textContent = 'This week';
    const historySubnavLink = document.createElement('a');
    historySubnavLink.classList.add('subnav-link');
    historySubnavLink.setAttribute('href', '');
    historySubnavLink.textContent = 'History';
    mealPlansSubnav.appendChild(weekSubnavLink);
    mealPlansSubnav.appendChild(historySubnavLink);
    return mealPlansSubnav;
};
const createMealPlansNav = () => {
    const mealPlansNav = document.createElement('div');
    mealPlansNav.classList.add('nav', 'meal-plans-nav');
    mealPlansNav.appendChild(createMealPlansButton());
    mealPlansNav.appendChild(createMealPlansSubnav());
    return mealPlansNav;
};
const createGroceryListButton = () => {
    const groceryListButton = document.createElement('button');
    groceryListButton.classList.add('nav-button');
    groceryListButton.setAttribute('id', 'grocery-list-button');
    groceryListButton.textContent = 'Grocery List';
    const groceryListArrow = document.createElement('i');
    groceryListArrow.classList.add('fa-solid', 'fa-angle-down', 'arrow');
    groceryListButton.appendChild(groceryListArrow);
    return groceryListButton;
};
const createGroceryListSubnav = () => {
    const groceryListSubnav = document.createElement('div');
    groceryListSubnav.classList.add('subnav');
    const weekSubnavLink = document.createElement('a');
    weekSubnavLink.classList.add('subnav-link');
    weekSubnavLink.setAttribute('href', '');
    weekSubnavLink.textContent = 'This week';
    const historySubnavLink = document.createElement('a');
    historySubnavLink.classList.add('subnav-link');
    historySubnavLink.setAttribute('href', '');
    historySubnavLink.textContent = 'History';
    groceryListSubnav.appendChild(weekSubnavLink);
    groceryListSubnav.appendChild(historySubnavLink);
    return groceryListSubnav;
};
const createGroceryListNav = () => {
    const groceryListNav = document.createElement('div');
    groceryListNav.classList.add('nav', 'grocery-list-nav');
    groceryListNav.appendChild(createGroceryListButton());
    groceryListNav.appendChild(createGroceryListSubnav());
    return groceryListNav;
};
const createRecipesButton = () => {
    const recipesButton = document.createElement('button');
    recipesButton.classList.add('nav-button');
    recipesButton.setAttribute('id', 'recipes-button');
    recipesButton.textContent = 'Recipes';
    return recipesButton;
};
const createRecipesNav = () => {
    const recipesNav = document.createElement('div');
    recipesNav.classList.add('nav', 'recipes-nav');
    recipesNav.appendChild(createRecipesButton());
    return recipesNav;
};
const createNav = () => {
    const navContainer = document.createElement('nav');
    navContainer.classList.add('nav-container');
    navContainer.appendChild(createMealPlansNav());
    navContainer.appendChild(createGroceryListNav());
    navContainer.appendChild(createRecipesNav());
    return navContainer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);


/***/ }),

/***/ "./src/images/food2.jpg":
/*!******************************!*\
  !*** ./src/images/food2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec59be31577e72c40108.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.ts");


const createSettingsButton = () => {
    const settingsImg = document.createElement('img');
    settingsImg.setAttribute('src', '../src/images/settings.png');
    const settingsButton = document.createElement('button');
    settingsButton.classList.add('settings-button', 'header-button');
    settingsButton.setAttribute('id', 'settings-button');
    const settingsButtonContainer = document.createElement('div');
    settingsButtonContainer.classList.add('settings-button-container');
    settingsButtonContainer.appendChild(settingsButton);
    settingsButton.appendChild(settingsImg);
    return settingsButtonContainer;
};
const createLoginButton = () => {
    const loginButton = document.createElement('button');
    loginButton.classList.add('button', 'header-button');
    loginButton.setAttribute('id', 'login-button');
    loginButton.textContent = 'Log in';
    return loginButton;
};
const createHeaderButtonsContainer = () => {
    const headerButtonsContainer = document.createElement('div');
    headerButtonsContainer.classList.add('header-buttons-container');
    headerButtonsContainer.appendChild(createSettingsButton());
    headerButtonsContainer.appendChild(createLoginButton());
    return headerButtonsContainer;
};
const createLogo = () => {
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', '../src/images/tabeyou-logo1.png');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    logoContainer.appendChild(logo);
    return logoContainer;
};
const createHeaderContentContainer = () => {
    const headerContentContainer = document.createElement('div');
    headerContentContainer.classList.add('header-content-container');
    headerContentContainer.appendChild(createLogo());
    headerContentContainer.appendChild(createHeaderButtonsContainer());
    return headerContentContainer;
};
const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(createHeaderContentContainer());
    return header;
};
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Designed and developed by Josh White.';
    footer.appendChild(footerContent);
    return footer;
};
const createPageContainer = () => {
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');
    pageContainer.setAttribute('id', 'page-container');
    return pageContainer;
};
const generatePageElements = () => {
    document.body.appendChild(createHeader());
    const pageContainer = document.body.appendChild(createPageContainer());
    document.body.appendChild(createFooter());
    pageContainer.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])());
};
generatePageElements();
//# sourceMappingURL=index.js.map
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnREFBUztBQUN2QztBQUNBO0FBQ0EsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvbmF2LnRzIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2Zvb2QyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSw0MDAmZmFtaWx5PUNvZGEmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG5cXHQtLWZvbnQtMTogJ0NvZGEnLCBzYW5zLXNlcmlmO1xcclxcblxcdC0tZm9udC0yOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0LS1mb250LWNvbG9yLTE6IGhzbCg1MCwgMjAlLCA5NSUpO1xcclxcblxcdC0tYmFja2dyb3VuZC0xOiBoc2woMCwgMCUsIDE3JSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTI6IGhzbCgwIDAlIDE3JSAvIDAuNSk7XFxyXFxuXFx0LS1yZWQtMTogaHNsKDIyLCA5NSUsIDQ1JSk7XFxyXFxuXFx0LS1yZWQtMjogaHNsKDIyLCA2MCUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0xOiBoc2woMTA0LCAzNSUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0yOiBoc2woMTA0LCA3MCUsIDg1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMTogaHNsKDUwLCA4MCUsIDY1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMjogaHNsKDUwLCA3MCUsIDc1JSk7XFxyXFxuXFx0LS1zdGVwLS0yOiBjbGFtcCgwLjY5cmVtLCAwLjhyZW0gKyAtMC41N3Z3LCAwLjM4cmVtKTtcXHJcXG5cXHQtLXN0ZXAtLTE6IGNsYW1wKDAuODNyZW0sIDAuODZyZW0gKyAtMC4xNXZ3LCAwLjc1cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMDogY2xhbXAoMXJlbSwgMC44M3JlbSArIDAuODl2dywgMS41cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMTogY2xhbXAoMS4ycmVtLCAwLjZyZW0gKyAzLjJ2dywgM3JlbSk7XFxyXFxuXFx0LS1zdGVwLTI6IGNsYW1wKDEuNDRyZW0sIC0wLjA4cmVtICsgOC4xMXZ3LCA2cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMzogY2xhbXAoMS43M3JlbSwgLTEuN3JlbSArIDE4LjI2dncsIDEycmVtKTtcXHJcXG5cXHQtLXN0ZXAtNDogY2xhbXAoMi4wN3JlbSwgLTUuMjNyZW0gKyAzOC45OHZ3LCAyNHJlbSk7XFxyXFxuXFx0LS1zdGVwLTU6IGNsYW1wKDIuNDlyZW0sIC0xMi42OHJlbSArIDgwLjkxdncsIDQ4cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDFyZW0gMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IC0xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuXFx0d2lkdGg6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9ucy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b24ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qTGFuZGluZyBQYWdlKi9cXHJcXG5cXHJcXG4ubGFuZGluZy1wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0LyogcGFkZGluZzogbWF4KDEwdmgsIDFyZW0pIDEuNXJlbTsgLyogdG9wIGFuZCBib3R0b20gc2V0IHRvIGxhcmdlciBvZiAzdmggb3IgMXJlbSwgbGVmdCBhbmQgcmlnaHQgMS41cmVtICovXFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC0xKSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tc2VjdGlvbiB7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC45NXJlbSk7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMTV2aCAwO1xcclxcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDEwdmggMnJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTIpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1oZWFkaW5nIHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC0xKTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxyXFxuXFx0LyogMyBtaW4sIDUgbWF4LCAxMHZ3KzEgaWRlYWwsIHRoZSArMSBpcyBpbiBjYXNlIG9mIHpvb21pbmcgaW4vb3V0ICovXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3ViaGVhZGluZyB7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlLXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDJyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtY29udGVudCB7XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyZWVuLTIpLCB2YXIoLS15ZWxsb3ctMiksIHZhcigtLXJlZC0yKSk7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGVudCB7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qTmF2Ki9cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG5cXHRmbGV4OiAxIDEgMjglO1xcclxcblxcdHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIGEge1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogbWluKDhyZW0sIDEwMCUpO1xcclxcblxcdHBhZGRpbmc6IDAuMTI1cmVtIDAgMC4xMjVyZW0gMC4zNzVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3cge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbC1wbGFucy1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JvY2VyeS1saXN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXllbGxvdy0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXllbGxvdy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2lwZXMtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdi1saW5rIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYtbGluazpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKk1lYWwgUGxhbiBQYWdlKi9cXHJcXG5cXHJcXG4ucGFnZS1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXBhZ2Uge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXNlY3Rpb24ge1xcclxcblxcdGZsZXg6IDEgMSA3MiU7XFxyXFxuXFx0cGFkZGluZzogMC42MjVyZW0gMXJlbSA0MHZoIDFyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSA2NSU7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG5cXHRtYXJnaW46IDJyZW0gYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1jZWxsIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDAuMjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1sZWZ0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1yaWdodC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tbGVmdC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcmlnaHQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkdyb2NlcnkgTGlzdCovXFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1jb250YWluZXIge1xcclxcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgMnB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1pdGVtIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHR3aWR0aDogOTAlO1xcclxcblxcdHBhZGRpbmc6IDAgMnJlbSAwIDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC10ZXh0IHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogMC44NXJlbTtcXHJcXG5cXHR3aWR0aDogMC44NXJlbTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypIaWRlIGRlZmF1bHQgY2hlY2tib3gqL1xcclxcbi5jaGVja2JveCBpbnB1dCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHR3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLypDcmVhdGUgY3VzdG9tIGNoZWNrYm94Ki9cXHJcXG4uY2hlY2ttYXJrIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRoZWlnaHQ6IDAuODVyZW07XFxyXFxuXFx0d2lkdGg6IDAuODVyZW07XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3g6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbWFyazo6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNoYW5nZSBiZyBjb2xvciB3aGVuIGNoZWNrZWQqL1xcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLypTaG93IGN1c3RvbSBjaGVja21hcmsgd2hlbiBjaGVja2VkKi9cXHJcXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNoZWNrbWFyayBzdHlsZXMqL1xcclxcbi5jaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG5cXHRsZWZ0OiAwLjI1cmVtO1xcclxcblxcdGhlaWdodDogMC42MjVyZW07XFxyXFxuXFx0d2lkdGg6IDAuM3JlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtZGVsZXRlLWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdG9wYWNpdHk6IDAuNTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLypSZWNpcGUgTGlzdCBQYWdlKi9cXHJcXG5cXHJcXG4ucmVjaXBlLWxpc3QtY29udGFpbmVyIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtc29ydC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiA2MCU7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcXHJcXG5cXHR3aWR0aDogOTAlO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlJlY2lwZSBNb2RhbCovXFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IG1pbigxMDAlLCAyMHJlbSk7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1oZWFkZXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbWcge1xcclxcblxcdG1heC13aWR0aDogNjAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IC00cHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbCAucGFnZS1zdWJoZWFkaW5nIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbW9kYWwtY2xvc2UtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudHMtbGlzdC1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbmdyZWRpZW50LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLDRCQUE0QjtDQUM1QiwrQkFBK0I7Q0FDL0IsaUNBQWlDO0NBQ2pDLCtCQUErQjtDQUMvQixtQ0FBbUM7Q0FDbkMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0Isb0RBQW9EO0NBQ3BELHFEQUFxRDtDQUNyRCwrQ0FBK0M7Q0FDL0MsNkNBQTZDO0NBQzdDLGlEQUFpRDtDQUNqRCxrREFBa0Q7Q0FDbEQsbURBQW1EO0NBQ25ELG9EQUFvRDtBQUNy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O0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixRQUFRO0NBQ1Isd0JBQXdCO0NBQ3hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsNDAwJmZhbWlseT1Db2RhJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWZvbnQtMTogJ0NvZGEnLCBzYW5zLXNlcmlmO1xcclxcblxcdC0tZm9udC0yOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0LS1mb250LWNvbG9yLTE6IGhzbCg1MCwgMjAlLCA5NSUpO1xcclxcblxcdC0tYmFja2dyb3VuZC0xOiBoc2woMCwgMCUsIDE3JSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTI6IGhzbCgwIDAlIDE3JSAvIDAuNSk7XFxyXFxuXFx0LS1yZWQtMTogaHNsKDIyLCA5NSUsIDQ1JSk7XFxyXFxuXFx0LS1yZWQtMjogaHNsKDIyLCA2MCUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0xOiBoc2woMTA0LCAzNSUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0yOiBoc2woMTA0LCA3MCUsIDg1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMTogaHNsKDUwLCA4MCUsIDY1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMjogaHNsKDUwLCA3MCUsIDc1JSk7XFxyXFxuXFx0LS1zdGVwLS0yOiBjbGFtcCgwLjY5cmVtLCAwLjhyZW0gKyAtMC41N3Z3LCAwLjM4cmVtKTtcXHJcXG5cXHQtLXN0ZXAtLTE6IGNsYW1wKDAuODNyZW0sIDAuODZyZW0gKyAtMC4xNXZ3LCAwLjc1cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMDogY2xhbXAoMXJlbSwgMC44M3JlbSArIDAuODl2dywgMS41cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMTogY2xhbXAoMS4ycmVtLCAwLjZyZW0gKyAzLjJ2dywgM3JlbSk7XFxyXFxuXFx0LS1zdGVwLTI6IGNsYW1wKDEuNDRyZW0sIC0wLjA4cmVtICsgOC4xMXZ3LCA2cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMzogY2xhbXAoMS43M3JlbSwgLTEuN3JlbSArIDE4LjI2dncsIDEycmVtKTtcXHJcXG5cXHQtLXN0ZXAtNDogY2xhbXAoMi4wN3JlbSwgLTUuMjNyZW0gKyAzOC45OHZ3LCAyNHJlbSk7XFxyXFxuXFx0LS1zdGVwLTU6IGNsYW1wKDIuNDlyZW0sIC0xMi42OHJlbSArIDgwLjkxdncsIDQ4cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDFyZW0gMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IC0xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuXFx0d2lkdGg6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9ucy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b24ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qTGFuZGluZyBQYWdlKi9cXHJcXG5cXHJcXG4ubGFuZGluZy1wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0LyogcGFkZGluZzogbWF4KDEwdmgsIDFyZW0pIDEuNXJlbTsgLyogdG9wIGFuZCBib3R0b20gc2V0IHRvIGxhcmdlciBvZiAzdmggb3IgMXJlbSwgbGVmdCBhbmQgcmlnaHQgMS41cmVtICovXFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC0xKSB1cmwoaW1hZ2VzL2Zvb2QyLmpwZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1zZWN0aW9uIHtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljk1cmVtKTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAxNXZoIDA7XFxyXFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRlbnQge1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0cGFkZGluZzogMTB2aCAycmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMik7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWhlYWRpbmcge1xcclxcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXHJcXG5cXHQvKiAzIG1pbiwgNSBtYXgsIDEwdncrMSBpZGVhbCwgdGhlICsxIGlzIGluIGNhc2Ugb2Ygem9vbWluZyBpbi9vdXQgKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdWJoZWFkaW5nIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtc2VjdGlvbiB7XFxyXFxuXFx0cGFkZGluZzogMnJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZS1jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250ZW50IHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypOYXYqL1xcclxcblxcclxcbi5uYXYge1xcclxcblxcdGZsZXg6IDEgMSAyOCU7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb250YWluZXIgYSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHdpZHRoOiBtaW4oOHJlbSwgMTAwJSk7XFxyXFxuXFx0cGFkZGluZzogMC4xMjVyZW0gMCAwLjEyNXJlbSAwLjM3NXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdyB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNtZWFsLXBsYW5zLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbiNncm9jZXJ5LWxpc3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0teWVsbG93LTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0teWVsbG93LTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVjaXBlcy1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2LWxpbmsge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdi1saW5rOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbi8qTWVhbCBQbGFuIFBhZ2UqL1xcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtcGFnZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtc2VjdGlvbiB7XFxyXFxuXFx0ZmxleDogMSAxIDcyJTtcXHJcXG5cXHRwYWRkaW5nOiAwLjYyNXJlbSAxcmVtIDQwdmggMXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tZ3JlZW4tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBsYW4tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMzUlIDY1JTtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcblxcdG1hcmdpbjogMnJlbSBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTIpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmVlbi0yKSwgdmFyKC0teWVsbG93LTIpLCB2YXIoLS1yZWQtMikpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDFyZW0gMDtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWNlbGwge1xcclxcblxcdHBhZGRpbmc6IDFyZW0gMC4yNXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWxlZnQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXJpZ2h0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1sZWZ0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1yaWdodC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi8qR3JvY2VyeSBMaXN0Ki9cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAycHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWl0ZW0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0cGFkZGluZzogMCAycmVtIDAgMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAwLjg1cmVtO1xcclxcblxcdHdpZHRoOiAwLjg1cmVtO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKkhpZGUgZGVmYXVsdCBjaGVja2JveCovXFxyXFxuLmNoZWNrYm94IGlucHV0IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNyZWF0ZSBjdXN0b20gY2hlY2tib3gqL1xcclxcbi5jaGVja21hcmsge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdGhlaWdodDogMC44NXJlbTtcXHJcXG5cXHR3aWR0aDogMC44NXJlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrOjphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qQ2hhbmdlIGJnIGNvbG9yIHdoZW4gY2hlY2tlZCovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlNob3cgY3VzdG9tIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQqL1xcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qQ2hlY2ttYXJrIHN0eWxlcyovXFxyXFxuLmNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xcclxcblxcdGxlZnQ6IDAuMjVyZW07XFxyXFxuXFx0aGVpZ2h0OiAwLjYyNXJlbTtcXHJcXG5cXHR3aWR0aDogMC4zcmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgdmFyKC0tZ3JlZW4tMSk7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1kZWxldGUtYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0b3BhY2l0eTogMC41O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlJlY2lwZSBMaXN0IFBhZ2UqL1xcclxcblxcclxcbi5yZWNpcGUtbGlzdC1jb250YWluZXIge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1zb3J0LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDYwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xcclxcblxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTIpO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi8qUmVjaXBlIE1vZGFsKi9cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdHRvcDogNTAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR3aWR0aDogbWluKDEwMCUsIDIwcmVtKTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWhlYWRlci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWltZyB7XFxyXFxuXFx0bWF4LXdpZHRoOiA2MCU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggLTRweCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsIC5wYWdlLXN1YmhlYWRpbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbC1jbG9zZS1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cy1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWluZ3JlZGllbnQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5jb25zdCBjcmVhdGVNZWFsUGxhbnNCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWVhbFBsYW5zQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVhbFBsYW5zQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICBtZWFsUGxhbnNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZWFsLXBsYW5zLWJ1dHRvbicpO1xuICAgIG1lYWxQbGFuc0J1dHRvbi50ZXh0Q29udGVudCA9ICdNZWFsIFBsYW5zJztcblxuICAgIGNvbnN0IG1lYWxQbGFuc0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG1lYWxQbGFuc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFuZ2xlLWRvd24nLCAnYXJyb3cnKTtcblxuICAgIG1lYWxQbGFuc0J1dHRvbi5hcHBlbmRDaGlsZChtZWFsUGxhbnNBcnJvdyk7XG5cbiAgICByZXR1cm4gbWVhbFBsYW5zQnV0dG9uO1xufVxuXG5jb25zdCBjcmVhdGVNZWFsUGxhbnNTdWJuYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVhbFBsYW5zU3VibmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVhbFBsYW5zU3VibmF2LmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdicpO1xuXG4gICAgY29uc3Qgd2Vla1N1Ym5hdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgd2Vla1N1Ym5hdkxpbmsuY2xhc3NMaXN0LmFkZCgnc3VibmF2LWxpbmsnKTtcbiAgICB3ZWVrU3VibmF2TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnJyk7XG4gICAgd2Vla1N1Ym5hdkxpbmsudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcblxuICAgIGNvbnN0IGhpc3RvcnlTdWJuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGhpc3RvcnlTdWJuYXZMaW5rLmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdi1saW5rJyk7XG4gICAgaGlzdG9yeVN1Ym5hdkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgIGhpc3RvcnlTdWJuYXZMaW5rLnRleHRDb250ZW50ID0gJ0hpc3RvcnknO1xuXG4gICAgbWVhbFBsYW5zU3VibmF2LmFwcGVuZENoaWxkKHdlZWtTdWJuYXZMaW5rKTtcbiAgICBtZWFsUGxhbnNTdWJuYXYuYXBwZW5kQ2hpbGQoaGlzdG9yeVN1Ym5hdkxpbmspO1xuXG4gICAgcmV0dXJuIG1lYWxQbGFuc1N1Ym5hdjtcbn1cblxuY29uc3QgY3JlYXRlTWVhbFBsYW5zTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lYWxQbGFuc05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYWxQbGFuc05hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnbWVhbC1wbGFucy1uYXYnKTtcblxuICAgIG1lYWxQbGFuc05hdi5hcHBlbmRDaGlsZChjcmVhdGVNZWFsUGxhbnNCdXR0b24oKSk7XG4gICAgbWVhbFBsYW5zTmF2LmFwcGVuZENoaWxkKGNyZWF0ZU1lYWxQbGFuc1N1Ym5hdigpKTtcblxuICAgIHJldHVybiBtZWFsUGxhbnNOYXY7XG59XG5cbmNvbnN0IGNyZWF0ZUdyb2NlcnlMaXN0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyb2NlcnlMaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgIGdyb2NlcnlMaXN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JvY2VyeS1saXN0LWJ1dHRvbicpO1xuICAgIGdyb2NlcnlMaXN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0dyb2NlcnkgTGlzdCc7XG5cbiAgICBjb25zdCBncm9jZXJ5TGlzdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGdyb2NlcnlMaXN0QXJyb3cuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtYW5nbGUtZG93bicsICdhcnJvdycpO1xuXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RBcnJvdyk7XG5cbiAgICByZXR1cm4gZ3JvY2VyeUxpc3RCdXR0b247XG59XG5cbmNvbnN0IGNyZWF0ZUdyb2NlcnlMaXN0U3VibmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyb2NlcnlMaXN0U3VibmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JvY2VyeUxpc3RTdWJuYXYuY2xhc3NMaXN0LmFkZCgnc3VibmF2Jyk7XG5cbiAgICBjb25zdCB3ZWVrU3VibmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB3ZWVrU3VibmF2TGluay5jbGFzc0xpc3QuYWRkKCdzdWJuYXYtbGluaycpO1xuICAgIHdlZWtTdWJuYXZMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcnKTtcbiAgICB3ZWVrU3VibmF2TGluay50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xuXG4gICAgY29uc3QgaGlzdG9yeVN1Ym5hdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaGlzdG9yeVN1Ym5hdkxpbmsuY2xhc3NMaXN0LmFkZCgnc3VibmF2LWxpbmsnKTtcbiAgICBoaXN0b3J5U3VibmF2TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnJyk7XG4gICAgaGlzdG9yeVN1Ym5hdkxpbmsudGV4dENvbnRlbnQgPSAnSGlzdG9yeSc7XG5cbiAgICBncm9jZXJ5TGlzdFN1Ym5hdi5hcHBlbmRDaGlsZCh3ZWVrU3VibmF2TGluayk7XG4gICAgZ3JvY2VyeUxpc3RTdWJuYXYuYXBwZW5kQ2hpbGQoaGlzdG9yeVN1Ym5hdkxpbmspO1xuXG4gICAgcmV0dXJuIGdyb2NlcnlMaXN0U3VibmF2O1xufVxuXG5jb25zdCBjcmVhdGVHcm9jZXJ5TGlzdE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBncm9jZXJ5TGlzdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyb2NlcnlMaXN0TmF2LmNsYXNzTGlzdC5hZGQoJ25hdicsICdncm9jZXJ5LWxpc3QtbmF2Jyk7XG5cbiAgICBncm9jZXJ5TGlzdE5hdi5hcHBlbmRDaGlsZChjcmVhdGVHcm9jZXJ5TGlzdEJ1dHRvbigpKTtcbiAgICBncm9jZXJ5TGlzdE5hdi5hcHBlbmRDaGlsZChjcmVhdGVHcm9jZXJ5TGlzdFN1Ym5hdigpKTtcblxuICAgIHJldHVybiBncm9jZXJ5TGlzdE5hdjtcbn1cblxuY29uc3QgY3JlYXRlUmVjaXBlc0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZWNpcGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVjaXBlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgcmVjaXBlc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlY2lwZXMtYnV0dG9uJyk7XG4gICAgcmVjaXBlc0J1dHRvbi50ZXh0Q29udGVudCA9ICdSZWNpcGVzJztcblxuICAgIHJldHVybiByZWNpcGVzQnV0dG9uO1xufVxuXG5jb25zdCBjcmVhdGVSZWNpcGVzTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlY2lwZXNOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWNpcGVzTmF2LmNsYXNzTGlzdC5hZGQoJ25hdicsICdyZWNpcGVzLW5hdicpO1xuXG4gICAgcmVjaXBlc05hdi5hcHBlbmRDaGlsZChjcmVhdGVSZWNpcGVzQnV0dG9uKCkpO1xuXG4gICAgcmV0dXJuIHJlY2lwZXNOYXY7XG59XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWNvbnRhaW5lcicpO1xuICAgIFxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZWFsUGxhbnNOYXYoKSk7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUdyb2NlcnlMaXN0TmF2KCkpO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVSZWNpcGVzTmF2KCkpO1xuXG4gICAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlTmF2IGZyb20gJy4vbmF2JztcbmNvbnN0IGNyZWF0ZVNldHRpbmdzQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldHRpbmdzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2V0dGluZ3NJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9zZXR0aW5ncy5wbmcnKTtcbiAgICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNldHRpbmdzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWJ1dHRvbicsICdoZWFkZXItYnV0dG9uJyk7XG4gICAgc2V0dGluZ3NCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzZXR0aW5ncy1idXR0b24nKTtcbiAgICBjb25zdCBzZXR0aW5nc0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdzQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICBzZXR0aW5nc0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc0J1dHRvbik7XG4gICAgc2V0dGluZ3NCdXR0b24uYXBwZW5kQ2hpbGQoc2V0dGluZ3NJbWcpO1xuICAgIHJldHVybiBzZXR0aW5nc0J1dHRvbkNvbnRhaW5lcjtcbn07XG5jb25zdCBjcmVhdGVMb2dpbkJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxvZ2luQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdoZWFkZXItYnV0dG9uJyk7XG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi1idXR0b24nKTtcbiAgICBsb2dpbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb2cgaW4nO1xuICAgIHJldHVybiBsb2dpbkJ1dHRvbjtcbn07XG5jb25zdCBjcmVhdGVIZWFkZXJCdXR0b25zQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zLWNvbnRhaW5lcicpO1xuICAgIGhlYWRlckJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oKSk7XG4gICAgaGVhZGVyQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMb2dpbkJ1dHRvbigpKTtcbiAgICByZXR1cm4gaGVhZGVyQnV0dG9uc0NvbnRhaW5lcjtcbn07XG5jb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvdGFiZXlvdS1sb2dvMS5wbmcnKTtcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgcmV0dXJuIGxvZ29Db250YWluZXI7XG59O1xuY29uc3QgY3JlYXRlSGVhZGVyQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGVudC1jb250YWluZXInKTtcbiAgICBoZWFkZXJDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ28oKSk7XG4gICAgaGVhZGVyQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJCdXR0b25zQ29udGFpbmVyKCkpO1xuICAgIHJldHVybiBoZWFkZXJDb250ZW50Q29udGFpbmVyO1xufTtcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlckNvbnRlbnRDb250YWluZXIoKSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250ZW50Jyk7XG4gICAgZm9vdGVyQ29udGVudC50ZXh0Q29udGVudCA9ICdEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IEpvc2ggV2hpdGUuJztcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07XG5jb25zdCBjcmVhdGVQYWdlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGFpbmVyJyk7XG4gICAgcGFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhZ2UtY29udGFpbmVyJyk7XG4gICAgcmV0dXJuIHBhZ2VDb250YWluZXI7XG59O1xuY29uc3QgZ2VuZXJhdGVQYWdlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZUNvbnRhaW5lcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbn07XG5nZW5lcmF0ZVBhZ2VFbGVtZW50cygpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9