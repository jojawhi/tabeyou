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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tdisplay: block;\r\n\tmargin-left: 1rem;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.subnav-button {\r\n\tpadding: 0.25rem 0;\r\n\tfont-size: var(--step--1);\r\n\ttext-align: left;\r\n\tcolor: var(--font-color-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.vertical-flip {\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n\r\n.appear {\r\n\tanimation: appear 3s forward;\r\n}\r\n\r\n@keyframes appear {\r\n\t0% {\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n\r\n*/\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\ttop: 0;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\theight: min(70vh, 1000px);\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 76% 12% 12%;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text-container input {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.grocery-list-amount {\r\n\twidth: 3rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tmargin-bottom: 2rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-list-container button {\r\n\tfont-size: inherit;\r\n\tfont-weight: 600;\r\n\tcolor: inherit;\r\n}\r\n\r\n.recipe-filter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.ingredient-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 20% 80%;\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Coda&display=swap');\r\n\r\n:root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(images/food2.jpg) no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tdisplay: block;\r\n\tmargin-left: 1rem;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.subnav-button {\r\n\tpadding: 0.25rem 0;\r\n\tfont-size: var(--step--1);\r\n\ttext-align: left;\r\n\tcolor: var(--font-color-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.vertical-flip {\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n\r\n.appear {\r\n\tanimation: appear 3s forward;\r\n}\r\n\r\n@keyframes appear {\r\n\t0% {\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n\r\n*/\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\ttop: 0;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\theight: min(70vh, 1000px);\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 76% 12% 12%;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text-container input {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.grocery-list-amount {\r\n\twidth: 3rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tmargin-bottom: 2rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-list-container button {\r\n\tfont-size: inherit;\r\n\tfont-weight: 600;\r\n\tcolor: inherit;\r\n}\r\n\r\n.recipe-filter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.ingredient-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 20% 80%;\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/footer.ts":
/*!***********************!*\
  !*** ./src/footer.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Designed and developed by Josh White.';
    footer.appendChild(footerContent);
    return footer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);


/***/ }),

/***/ "./src/groceryList.ts":
/*!****************************!*\
  !*** ./src/groceryList.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const groceryListSample = [
    {
        name: 'apples',
        amount: 5,
        unit: 'pc',
    },
    {
        name: 'bananas',
        amount: 3,
        unit: 'pc',
    },
    {
        name: 'onions',
        amount: 3,
        unit: 'pc',
    },
    {
        name: 'milk',
        amount: 2,
        unit: 'L',
    },
];
const generatePageSubheading = (string) => {
    const pageSubheading = document.createElement('h3');
    pageSubheading.classList.add('page-subheading');
    pageSubheading.textContent = string;
    return pageSubheading;
};
const generateCheckbox = () => {
    const checkbox = document.createElement('label');
    checkbox.classList.add('checkbox');
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');
    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');
    checkbox.appendChild(checkboxInput);
    checkbox.appendChild(checkmark);
    return checkbox;
};
const generateDeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('grocery-list-delete-button');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-circle-minus', 'fa-xs');
    deleteButton.appendChild(deleteIcon);
    return deleteButton;
};
const generateListItemText = (name, amount, unit) => {
    const groceryListTextContainer = document.createElement('div');
    groceryListTextContainer.classList.add('grocery-list-text-container');
    const listItemText = document.createElement('input');
    listItemText.setAttribute('type', 'text');
    listItemText.setAttribute('readonly', 'readonly');
    listItemText.classList.add('grocery-list-text');
    listItemText.value = name;
    listItemText.addEventListener('click', () => {
        listItemText.removeAttribute('readonly');
    });
    listItemText.addEventListener('change', () => {
        listItemText.setAttribute('readonly', 'readonly');
    });
    const listItemAmount = document.createElement('input');
    listItemAmount.setAttribute('type', 'number');
    listItemAmount.setAttribute('readonly', 'readonly');
    listItemAmount.classList.add('grocery-list-amount');
    listItemAmount.valueAsNumber = amount;
    listItemAmount.addEventListener('click', () => {
        listItemAmount.removeAttribute('readonly');
    });
    listItemAmount.addEventListener('change', () => {
        listItemAmount.setAttribute('readonly', 'readonly');
    });
    const listItemUnit = document.createElement('input');
    listItemUnit.setAttribute('type', 'text');
    listItemUnit.setAttribute('readonly', 'readonly');
    listItemUnit.classList.add('grocery-list-amount');
    listItemUnit.value = unit;
    listItemUnit.addEventListener('click', () => {
        listItemUnit.removeAttribute('readonly');
    });
    listItemUnit.addEventListener('change', () => {
        listItemUnit.setAttribute('readonly', 'readonly');
    });
    groceryListTextContainer.appendChild(listItemText);
    groceryListTextContainer.appendChild(listItemAmount);
    groceryListTextContainer.appendChild(listItemUnit);
    return groceryListTextContainer;
};
const generateListItems = (item) => {
    const groceryListItem = document.createElement('div');
    groceryListItem.classList.add('grocery-list-item');
    const listItemInfo = generateListItemText(item.name, item.amount, item.unit);
    groceryListItem.appendChild(generateCheckbox());
    groceryListItem.appendChild(listItemInfo);
    groceryListItem.appendChild(generateDeleteButton());
    return groceryListItem;
};
const generateGroceryListContainer = (array) => {
    const groceryListContainer = document.createElement('div');
    groceryListContainer.classList.add('grocery-list-container');
    array.map((item) => groceryListContainer.appendChild(generateListItems(item)));
    return groceryListContainer;
};
const displayGroceryList = (section) => {
    section.appendChild(generatePageSubheading(`This week's grocery list`));
    section.appendChild(generateGroceryListContainer(groceryListSample));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayGroceryList);


/***/ }),

/***/ "./src/header.ts":
/*!***********************!*\
  !*** ./src/header.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


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
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ "./src/section.ts");
/* harmony import */ var _groceryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groceryList */ "./src/groceryList.ts");
/* harmony import */ var _recipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeList */ "./src/recipeList.ts");



const createMealPlansButton = () => {
    const mealPlansButton = document.createElement('button');
    mealPlansButton.classList.add('nav-button');
    mealPlansButton.setAttribute('id', 'meal-plans-button');
    const mealPlansButtonText = document.createElement('p');
    mealPlansButtonText.textContent = 'Meal Plans';
    const mealPlansArrow = document.createElement('i');
    mealPlansArrow.classList.add('fa-solid', 'fa-angle-down', 'arrow');
    mealPlansArrow.setAttribute('id', 'meal-plans-arrow');
    mealPlansButton.addEventListener('click', () => {
        mealPlansArrow.classList.toggle('vertical-flip');
    });
    mealPlansButton.appendChild(mealPlansButtonText);
    mealPlansButton.appendChild(mealPlansArrow);
    return mealPlansButton;
};
const createMealPlansSubnav = () => {
    const mealPlansSubnav = document.createElement('div');
    mealPlansSubnav.classList.add('subnav', 'hidden');
    const weekSubnavButton = document.createElement('button');
    weekSubnavButton.classList.add('subnav-button');
    weekSubnavButton.textContent = 'This week';
    weekSubnavButton.addEventListener('click', () => {
        const section = document.getElementById('content-section');
        if (section) {
            (0,_section__WEBPACK_IMPORTED_MODULE_0__["default"])().clearSection(section);
        }
    });
    const historySubnavButton = document.createElement('button');
    historySubnavButton.classList.add('subnav-button');
    historySubnavButton.textContent = 'History';
    mealPlansSubnav.appendChild(weekSubnavButton);
    mealPlansSubnav.appendChild(historySubnavButton);
    return mealPlansSubnav;
};
const createMealPlansNav = () => {
    const mealPlansNav = document.createElement('div');
    mealPlansNav.classList.add('nav', 'meal-plans-nav');
    const mealPlansButton = createMealPlansButton();
    const mealPlansSubnav = createMealPlansSubnav();
    mealPlansNav.appendChild(mealPlansButton);
    mealPlansNav.appendChild(mealPlansSubnav);
    mealPlansButton.addEventListener('click', () => {
        mealPlansSubnav.classList.toggle('hidden');
    });
    return mealPlansNav;
};
const createGroceryListButton = () => {
    const groceryListButton = document.createElement('button');
    groceryListButton.classList.add('nav-button');
    groceryListButton.setAttribute('id', 'grocery-list-button');
    const groceryListButtonText = document.createElement('p');
    groceryListButtonText.textContent = 'Grocery List';
    const groceryListArrow = document.createElement('i');
    groceryListArrow.classList.add('fa-solid', 'fa-angle-down', 'arrow');
    groceryListArrow.setAttribute('id', 'grocery-list-arrow');
    groceryListButton.addEventListener('click', () => {
        groceryListArrow.classList.toggle('vertical-flip');
    });
    groceryListButton.appendChild(groceryListButtonText);
    groceryListButton.appendChild(groceryListArrow);
    return groceryListButton;
};
const createGroceryListSubnav = () => {
    const groceryListSubnav = document.createElement('div');
    groceryListSubnav.classList.add('subnav', 'hidden');
    const weekSubnavButton = document.createElement('button');
    weekSubnavButton.classList.add('subnav-button');
    weekSubnavButton.textContent = 'This week';
    weekSubnavButton.addEventListener('click', () => {
        const section = document.getElementById('content-section');
        if (section) {
            (0,_section__WEBPACK_IMPORTED_MODULE_0__["default"])().clearSection(section);
            (0,_groceryList__WEBPACK_IMPORTED_MODULE_1__["default"])(section);
        }
    });
    const historySubnavButton = document.createElement('button');
    historySubnavButton.classList.add('subnav-button');
    historySubnavButton.textContent = 'History';
    groceryListSubnav.appendChild(weekSubnavButton);
    groceryListSubnav.appendChild(historySubnavButton);
    return groceryListSubnav;
};
const createGroceryListNav = () => {
    const groceryListNav = document.createElement('div');
    groceryListNav.classList.add('nav', 'grocery-list-nav');
    const groceryListButton = createGroceryListButton();
    const groceryListSubnav = createGroceryListSubnav();
    groceryListNav.appendChild(groceryListButton);
    groceryListNav.appendChild(groceryListSubnav);
    groceryListButton.addEventListener('click', () => {
        groceryListSubnav.classList.toggle('hidden');
    });
    return groceryListNav;
};
const createRecipesButton = () => {
    const recipesButton = document.createElement('button');
    recipesButton.classList.add('nav-button');
    recipesButton.setAttribute('id', 'recipes-button');
    recipesButton.textContent = 'Recipes';
    recipesButton.addEventListener('click', () => {
        const section = document.getElementById('content-section');
        if (section) {
            (0,_section__WEBPACK_IMPORTED_MODULE_0__["default"])().clearSection(section);
            (0,_recipeList__WEBPACK_IMPORTED_MODULE_2__["default"])(section);
        }
    });
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

/***/ "./src/recipe.ts":
/*!***********************!*\
  !*** ./src/recipe.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sampleRecipe = {
    name: `Roy Choi's Aglio e Olio`,
    ingredientList: [
        { name: 'parmesan cheese', amount: 0.5, unit: 'C' },
        { name: 'lemon', amount: 1, unit: 'pc' },
        { name: 'parsley', amount: 1, unit: 'bunch' },
        { name: 'garlic', amount: 10, unit: 'cloves' },
        { name: 'olive oil', amount: 1, unit: 'C' },
        { name: 'spaghetti', amount: 450, unit: 'g' },
        { name: 'chili flakes', amount: 1, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'tbsp' },
    ],
    instructions: [
        `Bring a pot of water to a boil, and add 1-2 tsp of salt and 1 tbsp of olive oil.`,
        `Wash and de-stem the parsley. Chop the parsley with a rough chiffonade.`,
        `Peel garlic and slice into thin discs.`,
        `Add the spaghetti to the boiling water and cook until al dente or to desired doneness (~10 minutes).`,
        `Drain the pasta and set aside, saving about 1 cup of the pasta water and also setting this aside.`,
        `In a heavy-bottomed skillet over medium heat, add about ½ cup of olive oil (or enough to coat the bottom of the pan and cover all the garlic).`,
        `Add garlic to the pan and cook until fragrant and just browning, about 3 minutes.`,
        `Add chili flakes and all but 2-3 tbsps of the chopped parsley to the pan and cook for another 30 seconds or so.`,
        `Add the cooked pasta and stir it into the oil and garlic. Then, add the saved cup of pasta water.`,
        `Allow everything to heat and incorporate, then remove from the heat.`,
        `Add 1-2 tbsp of butter to the pasta and the juice of a lemon and stir.`,
        `Use a large fork to twist the spaghetti onto your plates.`,
        `Top with some of the garlicky oil from the pan, grated parmesan cheese, and some of the leftover chopped parsley.`,
        `Serve immediately.`,
    ],
};
const recipeFactory = (name) => {
    let recipeName = name;
    let ingredients = [];
    let instructions = [];
    const generateIngredientList = (ingredient) => {
        let ingredientsList = [];
        ingredientsList.push(ingredient);
        return ingredientsList;
    };
    const getInstructionsFromInput = (instruction) => {
        let instructionsArray = [];
        instructionsArray.push(instruction);
        return instructionsArray;
    };
    return { getInstructionsFromInput };
};
const addToRecipeArray = (recipe) => {
    let recipeArray = [];
    recipeArray.push(recipe);
    console.log(recipeArray);
    return recipeArray;
};
const getRecipeArray = () => {
    return addToRecipeArray(sampleRecipe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRecipeArray);


/***/ }),

/***/ "./src/recipeList.ts":
/*!***************************!*\
  !*** ./src/recipeList.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe */ "./src/recipe.ts");

const recipeArray = (0,_recipe__WEBPACK_IMPORTED_MODULE_0__["default"])();
const generatePageSubheading = (string) => {
    const pageSubheading = document.createElement('h3');
    pageSubheading.classList.add('page-subheading');
    pageSubheading.textContent = string;
    return pageSubheading;
};
const generateFilterContainer = () => {
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('recipe-filter-container');
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    const searchIcon = document.createElement('i');
    searchIcon.classList.add('fa-solid', 'fa-magnifying-glass');
    const searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'text');
    const sortButton = document.createElement('button');
    const sortIcon = document.createElement('i');
    sortIcon.classList.add('fa-solid', 'fa-arrow-down-a-z');
    searchContainer.appendChild(searchIcon);
    searchContainer.appendChild(searchBar);
    sortButton.appendChild(sortIcon);
    filterContainer.appendChild(searchContainer);
    filterContainer.appendChild(sortButton);
    return filterContainer;
};
const generateList = (recipeArray) => {
    const recipeList = document.createElement('ul');
    recipeList.classList.add('recipe-list');
    for (let i = 0; i < recipeArray.length; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('grocery-list-item');
        const listButton = document.createElement('button');
        listItem.appendChild(listButton);
        listButton.textContent = recipeArray[i].name;
        recipeList.appendChild(listItem);
    }
    return recipeList;
};
const generateRecipeListContainer = () => {
    const recipeListContainer = document.createElement('div');
    recipeListContainer.classList.add('grocery-list-container', 'recipe-list-container');
    recipeListContainer.appendChild(generateFilterContainer());
    recipeListContainer.appendChild(generateList(recipeArray));
    return recipeListContainer;
};
const generateNewRecipeButton = () => {
    const newRecipeButton = document.createElement('button');
    newRecipeButton.classList.add('button');
    newRecipeButton.setAttribute('id', 'new-recipe-button');
    newRecipeButton.textContent = `New Recipe`;
    return newRecipeButton;
};
const displayRecipeList = (section) => {
    section.appendChild(generatePageSubheading(`My Recipes`));
    section.appendChild(generateRecipeListContainer());
    section.appendChild(generateNewRecipeButton());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayRecipeList);


/***/ }),

/***/ "./src/section.ts":
/*!************************!*\
  !*** ./src/section.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sectionFactory = () => {
    const createSection = () => {
        const section = document.createElement('section');
        section.classList.add('content-section');
        section.setAttribute('id', 'content-section');
        return section;
    };
    const clearSection = (section) => {
        section.innerHTML = '';
    };
    return { createSection, clearSection };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionFactory);


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
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section */ "./src/section.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/header.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.ts");





const createPageContainer = () => {
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');
    pageContainer.setAttribute('id', 'page-container');
    return pageContainer;
};
const generatePageElements = () => {
    document.body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_3__["default"])());
    const pageContainer = document.body.appendChild(createPageContainer());
    document.body.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__["default"])());
    pageContainer.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])());
    const section = (0,_section__WEBPACK_IMPORTED_MODULE_2__["default"])().createSection();
    pageContainer.appendChild(section);
};
generatePageElements();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLG9CQUFvQixPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLHVHQUF1RyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0saUNB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ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNTO0FBQ1M7QUFDSDtBQUNBO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1EQUFZO0FBQzFDO0FBQ0EsOEJBQThCLG1EQUFZO0FBQzFDLDhCQUE4QixnREFBUztBQUN2QyxvQkFBb0Isb0RBQWM7QUFDbEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL2dyb2NlcnlMaXN0LnRzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvaGVhZGVyLnRzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvbmF2LnRzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvcmVjaXBlLnRzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvcmVjaXBlTGlzdC50cyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL3NlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZm9vZDIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDQwMCZmYW1pbHk9Q29kYSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcblxcdC0tZm9udC0xOiAnQ29kYScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0LS1mb250LTI6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHQtLWZvbnQtY29sb3ItMTogaHNsKDUwLCAyMCUsIDk1JSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTE6IGhzbCgwLCAwJSwgMTclKTtcXHJcXG5cXHQtLWJhY2tncm91bmQtMjogaHNsKDAgMCUgMTclIC8gMC41KTtcXHJcXG5cXHQtLXJlZC0xOiBoc2woMjIsIDk1JSwgNDUlKTtcXHJcXG5cXHQtLXJlZC0yOiBoc2woMjIsIDYwJSwgNzAlKTtcXHJcXG5cXHQtLWdyZWVuLTE6IGhzbCgxMDQsIDM1JSwgNzAlKTtcXHJcXG5cXHQtLWdyZWVuLTI6IGhzbCgxMDQsIDcwJSwgODUlKTtcXHJcXG5cXHQtLXllbGxvdy0xOiBoc2woNTAsIDgwJSwgNjUlKTtcXHJcXG5cXHQtLXllbGxvdy0yOiBoc2woNTAsIDcwJSwgNzUlKTtcXHJcXG5cXHQtLXN0ZXAtLTI6IGNsYW1wKDAuNjlyZW0sIDAuOHJlbSArIC0wLjU3dncsIDAuMzhyZW0pO1xcclxcblxcdC0tc3RlcC0tMTogY2xhbXAoMC44M3JlbSwgMC44NnJlbSArIC0wLjE1dncsIDAuNzVyZW0pO1xcclxcblxcdC0tc3RlcC0wOiBjbGFtcCgxcmVtLCAwLjgzcmVtICsgMC44OXZ3LCAxLjVyZW0pO1xcclxcblxcdC0tc3RlcC0xOiBjbGFtcCgxLjJyZW0sIDAuNnJlbSArIDMuMnZ3LCAzcmVtKTtcXHJcXG5cXHQtLXN0ZXAtMjogY2xhbXAoMS40NHJlbSwgLTAuMDhyZW0gKyA4LjExdncsIDZyZW0pO1xcclxcblxcdC0tc3RlcC0zOiBjbGFtcCgxLjczcmVtLCAtMS43cmVtICsgMTguMjZ2dywgMTJyZW0pO1xcclxcblxcdC0tc3RlcC00OiBjbGFtcCgyLjA3cmVtLCAtNS4yM3JlbSArIDM4Ljk4dncsIDI0cmVtKTtcXHJcXG5cXHQtLXN0ZXAtNTogY2xhbXAoMi40OXJlbSwgLTEyLjY4cmVtICsgODAuOTF2dywgNDhyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmVlbi0yKSwgdmFyKC0teWVsbG93LTIpLCB2YXIoLS1yZWQtMikpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG5cXHR3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncy1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtYnV0dG9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLypMYW5kaW5nIFBhZ2UqL1xcclxcblxcclxcbi5sYW5kaW5nLXBhZ2UtY29udGFpbmVyIHtcXHJcXG5cXHQvKiBwYWRkaW5nOiBtYXgoMTB2aCwgMXJlbSkgMS41cmVtOyAvKiB0b3AgYW5kIGJvdHRvbSBzZXQgdG8gbGFyZ2VyIG9mIDN2aCBvciAxcmVtLCBsZWZ0IGFuZCByaWdodCAxLjVyZW0gKi9cXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLTEpIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1zZWN0aW9uIHtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljk1cmVtKTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAxNXZoIDA7XFxyXFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRlbnQge1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0cGFkZGluZzogMTB2aCAycmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMik7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWhlYWRpbmcge1xcclxcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXHJcXG5cXHQvKiAzIG1pbiwgNSBtYXgsIDEwdncrMSBpZGVhbCwgdGhlICsxIGlzIGluIGNhc2Ugb2Ygem9vbWluZyBpbi9vdXQgKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdWJoZWFkaW5nIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtc2VjdGlvbiB7XFxyXFxuXFx0cGFkZGluZzogMnJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZS1jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250ZW50IHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypOYXYqL1xcclxcblxcclxcbi5uYXYge1xcclxcblxcdGZsZXg6IDEgMSAyOCU7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb250YWluZXIgYSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHdpZHRoOiBtaW4oOHJlbSwgMTAwJSk7XFxyXFxuXFx0cGFkZGluZzogMC4xMjVyZW0gMCAwLjEyNXJlbSAwLjM3NXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbiNtZWFsLXBsYW5zLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbiNncm9jZXJ5LWxpc3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0teWVsbG93LTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0teWVsbG93LTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVjaXBlcy1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdi1idXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMjVyZW0gMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwtZmxpcCB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbi5hcHBlYXIge1xcclxcblxcdGFuaW1hdGlvbjogYXBwZWFyIDNzIGZvcndhcmQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi8qTWVhbCBQbGFuIFBhZ2UqL1xcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0dG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1wYWdlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1zZWN0aW9uIHtcXHJcXG5cXHRmbGV4OiAxIDEgNzIlO1xcclxcblxcdGhlaWdodDogbWluKDcwdmgsIDEwMDBweCk7XFxyXFxuXFx0cGFkZGluZzogMC42MjVyZW0gMXJlbSA0MHZoIDFyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSA2NSU7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG5cXHRtYXJnaW46IDJyZW0gYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1jZWxsIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDAuMjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1sZWZ0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1yaWdodC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tbGVmdC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcmlnaHQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkdyb2NlcnkgTGlzdCovXFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtaXRlbSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc2JSAxMiUgMTIlO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAwIDJyZW0gMCAwO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dC1jb250YWluZXIgaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtYW1vdW50IHtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDAuODVyZW07XFxyXFxuXFx0d2lkdGg6IDAuODVyZW07XFxyXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qSGlkZSBkZWZhdWx0IGNoZWNrYm94Ki9cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0d2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi8qQ3JlYXRlIGN1c3RvbSBjaGVja2JveCovXFxyXFxuLmNoZWNrbWFyayB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAwLjg1cmVtO1xcclxcblxcdHdpZHRoOiAwLjg1cmVtO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcms6OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypDaGFuZ2UgYmcgY29sb3Igd2hlbiBjaGVja2VkKi9cXHJcXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMik7XFxyXFxufVxcclxcblxcclxcbi8qU2hvdyBjdXN0b20gY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypDaGVja21hcmsgc3R5bGVzKi9cXHJcXG4uY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XFxyXFxuXFx0bGVmdDogMC4yNXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDAuNjI1cmVtO1xcclxcblxcdHdpZHRoOiAwLjNyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWRlbGV0ZS1idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWRlbGV0ZS1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi8qUmVjaXBlIExpc3QgUGFnZSovXFxyXFxuXFxyXFxuLnJlY2lwZS1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbGlzdC1jb250YWluZXIgYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1maWx0ZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiA2MCU7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcXHJcXG5cXHR3aWR0aDogOTAlO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlJlY2lwZSBNb2RhbCovXFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IG1pbigxMDAlLCAyMHJlbSk7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1oZWFkZXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbWcge1xcclxcblxcdG1heC13aWR0aDogNjAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IC00cHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbCAucGFnZS1zdWJoZWFkaW5nIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbW9kYWwtY2xvc2UtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudC1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWluZ3JlZGllbnQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsK0JBQStCO0NBQy9CLG1DQUFtQztDQUNuQywwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLDZCQUE2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Q0FDbkIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGFBQWE7Q0FDYixxQ0FBcUM7QUFDdEM7O0FBRUEsZUFBZTs7QUFFZjtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHFDQUFxQztDQUNyQyxtQkFBbUI7Q0FDbkIscUNBQXFDO0NBQ3JDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsNEJBQTRCO0NBQzVCLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sUUFBUTtDQUNSLHdCQUF3QjtDQUN4QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDQwMCZmYW1pbHk9Q29kYSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuXFx0LS1mb250LTE6ICdDb2RhJywgc2Fucy1zZXJpZjtcXHJcXG5cXHQtLWZvbnQtMjogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcdC0tZm9udC1jb2xvci0xOiBoc2woNTAsIDIwJSwgOTUlKTtcXHJcXG5cXHQtLWJhY2tncm91bmQtMTogaHNsKDAsIDAlLCAxNyUpO1xcclxcblxcdC0tYmFja2dyb3VuZC0yOiBoc2woMCAwJSAxNyUgLyAwLjUpO1xcclxcblxcdC0tcmVkLTE6IGhzbCgyMiwgOTUlLCA0NSUpO1xcclxcblxcdC0tcmVkLTI6IGhzbCgyMiwgNjAlLCA3MCUpO1xcclxcblxcdC0tZ3JlZW4tMTogaHNsKDEwNCwgMzUlLCA3MCUpO1xcclxcblxcdC0tZ3JlZW4tMjogaHNsKDEwNCwgNzAlLCA4NSUpO1xcclxcblxcdC0teWVsbG93LTE6IGhzbCg1MCwgODAlLCA2NSUpO1xcclxcblxcdC0teWVsbG93LTI6IGhzbCg1MCwgNzAlLCA3NSUpO1xcclxcblxcdC0tc3RlcC0tMjogY2xhbXAoMC42OXJlbSwgMC44cmVtICsgLTAuNTd2dywgMC4zOHJlbSk7XFxyXFxuXFx0LS1zdGVwLS0xOiBjbGFtcCgwLjgzcmVtLCAwLjg2cmVtICsgLTAuMTV2dywgMC43NXJlbSk7XFxyXFxuXFx0LS1zdGVwLTA6IGNsYW1wKDFyZW0sIDAuODNyZW0gKyAwLjg5dncsIDEuNXJlbSk7XFxyXFxuXFx0LS1zdGVwLTE6IGNsYW1wKDEuMnJlbSwgMC42cmVtICsgMy4ydncsIDNyZW0pO1xcclxcblxcdC0tc3RlcC0yOiBjbGFtcCgxLjQ0cmVtLCAtMC4wOHJlbSArIDguMTF2dywgNnJlbSk7XFxyXFxuXFx0LS1zdGVwLTM6IGNsYW1wKDEuNzNyZW0sIC0xLjdyZW0gKyAxOC4yNnZ3LCAxMnJlbSk7XFxyXFxuXFx0LS1zdGVwLTQ6IGNsYW1wKDIuMDdyZW0sIC01LjIzcmVtICsgMzguOTh2dywgMjRyZW0pO1xcclxcblxcdC0tc3RlcC01OiBjbGFtcCgyLjQ5cmVtLCAtMTIuNjhyZW0gKyA4MC45MXZ3LCA0OHJlbSk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyZWVuLTIpLCB2YXIoLS15ZWxsb3ctMiksIHZhcigtLXJlZC0yKSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGVudC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0cGFkZGluZzogMnJlbSAxcmVtIDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAtMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcblxcdHdpZHRoOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tMik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9uIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWJ1dHRvbi1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncy1idXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKkxhbmRpbmcgUGFnZSovXFxyXFxuXFxyXFxuLmxhbmRpbmctcGFnZS1jb250YWluZXIge1xcclxcblxcdC8qIHBhZGRpbmc6IG1heCgxMHZoLCAxcmVtKSAxLjVyZW07IC8qIHRvcCBhbmQgYm90dG9tIHNldCB0byBsYXJnZXIgb2YgM3ZoIG9yIDFyZW0sIGxlZnQgYW5kIHJpZ2h0IDEuNXJlbSAqL1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtMSkgdXJsKGltYWdlcy9mb29kMi5qcGcpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tc2VjdGlvbiB7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC45NXJlbSk7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMTV2aCAwO1xcclxcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDEwdmggMnJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTIpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1oZWFkaW5nIHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC0xKTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxyXFxuXFx0LyogMyBtaW4sIDUgbWF4LCAxMHZ3KzEgaWRlYWwsIHRoZSArMSBpcyBpbiBjYXNlIG9mIHpvb21pbmcgaW4vb3V0ICovXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3ViaGVhZGluZyB7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlLXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDJyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtY29udGVudCB7XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyZWVuLTIpLCB2YXIoLS15ZWxsb3ctMiksIHZhcigtLXJlZC0yKSk7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGVudCB7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qTmF2Ki9cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG5cXHRmbGV4OiAxIDEgMjglO1xcclxcblxcdHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIGEge1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogbWluKDhyZW0sIDEwMCUpO1xcclxcblxcdHBhZGRpbmc6IDAuMTI1cmVtIDAgMC4xMjVyZW0gMC4zNzVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3cge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbC1wbGFucy1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JvY2VyeS1saXN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXllbGxvdy0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXllbGxvdy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2lwZXMtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYtYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdi1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlcnRpY2FsLWZsaXAge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG4uYXBwZWFyIHtcXHJcXG5cXHRhbmltYXRpb246IGFwcGVhciAzcyBmb3J3YXJkO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdGhlaWdodDogMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4vKk1lYWwgUGxhbiBQYWdlKi9cXHJcXG5cXHJcXG4ucGFnZS1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtcGFnZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtc2VjdGlvbiB7XFxyXFxuXFx0ZmxleDogMSAxIDcyJTtcXHJcXG5cXHRoZWlnaHQ6IG1pbig3MHZoLCAxMDAwcHgpO1xcclxcblxcdHBhZGRpbmc6IDAuNjI1cmVtIDFyZW0gNDB2aCAxcmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDJweCB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAzNSUgNjUlO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxyXFxuXFx0bWFyZ2luOiAycmVtIGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyZWVuLTIpLCB2YXIoLS15ZWxsb3ctMiksIHZhcigtLXJlZC0yKSk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBsYW4taGVhZGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAwO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBsYW4tY2VsbCB7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAwLjI1cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi50b3AtbGVmdC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b3AtcmlnaHQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWxlZnQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXJpZ2h0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLypHcm9jZXJ5IExpc3QqL1xcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAycHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWl0ZW0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NiUgMTIlIDEyJTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMCAycmVtIDAgMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQtY29udGFpbmVyIGlucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWFtb3VudCB7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAwLjg1cmVtO1xcclxcblxcdHdpZHRoOiAwLjg1cmVtO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKkhpZGUgZGVmYXVsdCBjaGVja2JveCovXFxyXFxuLmNoZWNrYm94IGlucHV0IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNyZWF0ZSBjdXN0b20gY2hlY2tib3gqL1xcclxcbi5jaGVja21hcmsge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdGhlaWdodDogMC44NXJlbTtcXHJcXG5cXHR3aWR0aDogMC44NXJlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrOjphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qQ2hhbmdlIGJnIGNvbG9yIHdoZW4gY2hlY2tlZCovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlNob3cgY3VzdG9tIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQqL1xcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qQ2hlY2ttYXJrIHN0eWxlcyovXFxyXFxuLmNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xcclxcblxcdGxlZnQ6IDAuMjVyZW07XFxyXFxuXFx0aGVpZ2h0OiAwLjYyNXJlbTtcXHJcXG5cXHR3aWR0aDogMC4zcmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgdmFyKC0tZ3JlZW4tMSk7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1kZWxldGUtYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0b3BhY2l0eTogMC41O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlJlY2lwZSBMaXN0IFBhZ2UqL1xcclxcblxcclxcbi5yZWNpcGUtbGlzdC1jb250YWluZXIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWxpc3QtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtZmlsdGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogNjAlO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMik7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLypSZWNpcGUgTW9kYWwqL1xcclxcblxcclxcbi5yZWNpcGUtbW9kYWwge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHdpZHRoOiBtaW4oMTAwJSwgMjByZW0pO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW1nIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAtNHB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbW9kYWwgLnBhZ2Utc3ViaGVhZGluZyB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsLWNsb3NlLWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtbGlzdC1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbmdyZWRpZW50LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xyXG4gICAgZm9vdGVyQ29udGVudC50ZXh0Q29udGVudCA9ICdEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IEpvc2ggV2hpdGUuJztcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcclxuIiwiY29uc3QgZ3JvY2VyeUxpc3RTYW1wbGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2FwcGxlcycsXHJcbiAgICAgICAgYW1vdW50OiA1LFxyXG4gICAgICAgIHVuaXQ6ICdwYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdiYW5hbmFzJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgdW5pdDogJ3BjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ29uaW9ucycsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIHVuaXQ6ICdwYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdtaWxrJyxcclxuICAgICAgICBhbW91bnQ6IDIsXHJcbiAgICAgICAgdW5pdDogJ0wnLFxyXG4gICAgfSxcclxuXTtcclxuY29uc3QgZ2VuZXJhdGVQYWdlU3ViaGVhZGluZyA9IChzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VTdWJoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHBhZ2VTdWJoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utc3ViaGVhZGluZycpO1xyXG4gICAgcGFnZVN1YmhlYWRpbmcudGV4dENvbnRlbnQgPSBzdHJpbmc7XHJcbiAgICByZXR1cm4gcGFnZVN1YmhlYWRpbmc7XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlQ2hlY2tib3ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgY2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyaycpO1xyXG4gICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2tib3hJbnB1dCk7XHJcbiAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVja21hcmspO1xyXG4gICAgcmV0dXJuIGNoZWNrYm94O1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZURlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC1kZWxldGUtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1jaXJjbGUtbWludXMnLCAnZmEteHMnKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuICAgIHJldHVybiBkZWxldGVCdXR0b247XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlTGlzdEl0ZW1UZXh0ID0gKG5hbWUsIGFtb3VudCwgdW5pdCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm9jZXJ5TGlzdFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LXRleHQtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBsaXN0SXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbGlzdEl0ZW1UZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBsaXN0SXRlbVRleHQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgbGlzdEl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC10ZXh0Jyk7XHJcbiAgICBsaXN0SXRlbVRleHQudmFsdWUgPSBuYW1lO1xyXG4gICAgbGlzdEl0ZW1UZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxpc3RJdGVtVGV4dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICB9KTtcclxuICAgIGxpc3RJdGVtVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgbGlzdEl0ZW1UZXh0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1BbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbGlzdEl0ZW1BbW91bnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgbGlzdEl0ZW1BbW91bnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgbGlzdEl0ZW1BbW91bnQuY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LWFtb3VudCcpO1xyXG4gICAgbGlzdEl0ZW1BbW91bnQudmFsdWVBc051bWJlciA9IGFtb3VudDtcclxuICAgIGxpc3RJdGVtQW1vdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxpc3RJdGVtQW1vdW50LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcclxuICAgIH0pO1xyXG4gICAgbGlzdEl0ZW1BbW91bnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGxpc3RJdGVtQW1vdW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1Vbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGxpc3RJdGVtVW5pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgbGlzdEl0ZW1Vbml0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIGxpc3RJdGVtVW5pdC5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtYW1vdW50Jyk7XHJcbiAgICBsaXN0SXRlbVVuaXQudmFsdWUgPSB1bml0O1xyXG4gICAgbGlzdEl0ZW1Vbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxpc3RJdGVtVW5pdC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICB9KTtcclxuICAgIGxpc3RJdGVtVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgbGlzdEl0ZW1Vbml0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIH0pO1xyXG4gICAgZ3JvY2VyeUxpc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtVGV4dCk7XHJcbiAgICBncm9jZXJ5TGlzdFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1BbW91bnQpO1xyXG4gICAgZ3JvY2VyeUxpc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtVW5pdCk7XHJcbiAgICByZXR1cm4gZ3JvY2VyeUxpc3RUZXh0Q29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUxpc3RJdGVtcyA9IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyb2NlcnlMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtaXRlbScpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1JbmZvID0gZ2VuZXJhdGVMaXN0SXRlbVRleHQoaXRlbS5uYW1lLCBpdGVtLmFtb3VudCwgaXRlbS51bml0KTtcclxuICAgIGdyb2NlcnlMaXN0SXRlbS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNoZWNrYm94KCkpO1xyXG4gICAgZ3JvY2VyeUxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJdGVtSW5mbyk7XHJcbiAgICBncm9jZXJ5TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEZWxldGVCdXR0b24oKSk7XHJcbiAgICByZXR1cm4gZ3JvY2VyeUxpc3RJdGVtO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUdyb2NlcnlMaXN0Q29udGFpbmVyID0gKGFycmF5KSA9PiB7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JvY2VyeUxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LWNvbnRhaW5lcicpO1xyXG4gICAgYXJyYXkubWFwKChpdGVtKSA9PiBncm9jZXJ5TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUxpc3RJdGVtcyhpdGVtKSkpO1xyXG4gICAgcmV0dXJuIGdyb2NlcnlMaXN0Q29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5R3JvY2VyeUxpc3QgPSAoc2VjdGlvbikgPT4ge1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZVBhZ2VTdWJoZWFkaW5nKGBUaGlzIHdlZWsncyBncm9jZXJ5IGxpc3RgKSk7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGdlbmVyYXRlR3JvY2VyeUxpc3RDb250YWluZXIoZ3JvY2VyeUxpc3RTYW1wbGUpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUdyb2NlcnlMaXN0O1xyXG4iLCJjb25zdCBjcmVhdGVTZXR0aW5nc0J1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNldHRpbmdzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzZXR0aW5nc0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL3NldHRpbmdzLnBuZycpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNldHRpbmdzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWJ1dHRvbicsICdoZWFkZXItYnV0dG9uJyk7XHJcbiAgICBzZXR0aW5nc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NldHRpbmdzLWJ1dHRvbicpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNldHRpbmdzQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWJ1dHRvbi1jb250YWluZXInKTtcclxuICAgIHNldHRpbmdzQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzQnV0dG9uKTtcclxuICAgIHNldHRpbmdzQnV0dG9uLmFwcGVuZENoaWxkKHNldHRpbmdzSW1nKTtcclxuICAgIHJldHVybiBzZXR0aW5nc0J1dHRvbkNvbnRhaW5lcjtcclxufTtcclxuY29uc3QgY3JlYXRlTG9naW5CdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbG9naW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2hlYWRlci1idXR0b24nKTtcclxuICAgIGxvZ2luQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9naW4tYnV0dG9uJyk7XHJcbiAgICBsb2dpbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb2cgaW4nO1xyXG4gICAgcmV0dXJuIGxvZ2luQnV0dG9uO1xyXG59O1xyXG5jb25zdCBjcmVhdGVIZWFkZXJCdXR0b25zQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucy1jb250YWluZXInKTtcclxuICAgIGhlYWRlckJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2V0dGluZ3NCdXR0b24oKSk7XHJcbiAgICBoZWFkZXJCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ2luQnV0dG9uKCkpO1xyXG4gICAgcmV0dXJuIGhlYWRlckJ1dHRvbnNDb250YWluZXI7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUxvZ28gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy90YWJleW91LWxvZ28xLnBuZycpO1xyXG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xyXG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIHJldHVybiBsb2dvQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBjcmVhdGVIZWFkZXJDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGVudC1jb250YWluZXInKTtcclxuICAgIGhlYWRlckNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9nbygpKTtcclxuICAgIGhlYWRlckNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyQnV0dG9uc0NvbnRhaW5lcigpKTtcclxuICAgIHJldHVybiBoZWFkZXJDb250ZW50Q29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJDb250ZW50Q29udGFpbmVyKCkpO1xyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xyXG4iLCJpbXBvcnQgc2VjdGlvbkZhY3RvcnkgZnJvbSAnLi9zZWN0aW9uJztcclxuaW1wb3J0IGRpc3BsYXlHcm9jZXJ5TGlzdCBmcm9tICcuL2dyb2NlcnlMaXN0JztcclxuaW1wb3J0IGRpc3BsYXlSZWNpcGVMaXN0IGZyb20gJy4vcmVjaXBlTGlzdCc7XHJcbmNvbnN0IGNyZWF0ZU1lYWxQbGFuc0J1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lYWxQbGFuc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIG1lYWxQbGFuc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lYWwtcGxhbnMtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICdNZWFsIFBsYW5zJztcclxuICAgIGNvbnN0IG1lYWxQbGFuc0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgbWVhbFBsYW5zQXJyb3cuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtYW5nbGUtZG93bicsICdhcnJvdycpO1xyXG4gICAgbWVhbFBsYW5zQXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdtZWFsLXBsYW5zLWFycm93Jyk7XHJcbiAgICBtZWFsUGxhbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWVhbFBsYW5zQXJyb3cuY2xhc3NMaXN0LnRvZ2dsZSgndmVydGljYWwtZmxpcCcpO1xyXG4gICAgfSk7XHJcbiAgICBtZWFsUGxhbnNCdXR0b24uYXBwZW5kQ2hpbGQobWVhbFBsYW5zQnV0dG9uVGV4dCk7XHJcbiAgICBtZWFsUGxhbnNCdXR0b24uYXBwZW5kQ2hpbGQobWVhbFBsYW5zQXJyb3cpO1xyXG4gICAgcmV0dXJuIG1lYWxQbGFuc0J1dHRvbjtcclxufTtcclxuY29uc3QgY3JlYXRlTWVhbFBsYW5zU3VibmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVhbFBsYW5zU3VibmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZWFsUGxhbnNTdWJuYXYuY2xhc3NMaXN0LmFkZCgnc3VibmF2JywgJ2hpZGRlbicpO1xyXG4gICAgY29uc3Qgd2Vla1N1Ym5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJuYXYtYnV0dG9uJyk7XHJcbiAgICB3ZWVrU3VibmF2QnV0dG9uLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XHJcbiAgICB3ZWVrU3VibmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1zZWN0aW9uJyk7XHJcbiAgICAgICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgICAgICAgc2VjdGlvbkZhY3RvcnkoKS5jbGVhclNlY3Rpb24oc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoaXN0b3J5U3VibmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBoaXN0b3J5U3VibmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdi1idXR0b24nKTtcclxuICAgIGhpc3RvcnlTdWJuYXZCdXR0b24udGV4dENvbnRlbnQgPSAnSGlzdG9yeSc7XHJcbiAgICBtZWFsUGxhbnNTdWJuYXYuYXBwZW5kQ2hpbGQod2Vla1N1Ym5hdkJ1dHRvbik7XHJcbiAgICBtZWFsUGxhbnNTdWJuYXYuYXBwZW5kQ2hpbGQoaGlzdG9yeVN1Ym5hdkJ1dHRvbik7XHJcbiAgICByZXR1cm4gbWVhbFBsYW5zU3VibmF2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVNZWFsUGxhbnNOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lYWxQbGFuc05hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnbWVhbC1wbGFucy1uYXYnKTtcclxuICAgIGNvbnN0IG1lYWxQbGFuc0J1dHRvbiA9IGNyZWF0ZU1lYWxQbGFuc0J1dHRvbigpO1xyXG4gICAgY29uc3QgbWVhbFBsYW5zU3VibmF2ID0gY3JlYXRlTWVhbFBsYW5zU3VibmF2KCk7XHJcbiAgICBtZWFsUGxhbnNOYXYuYXBwZW5kQ2hpbGQobWVhbFBsYW5zQnV0dG9uKTtcclxuICAgIG1lYWxQbGFuc05hdi5hcHBlbmRDaGlsZChtZWFsUGxhbnNTdWJuYXYpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lYWxQbGFuc1N1Ym5hdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1lYWxQbGFuc05hdjtcclxufTtcclxuY29uc3QgY3JlYXRlR3JvY2VyeUxpc3RCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdncm9jZXJ5LWxpc3QtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdEJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBncm9jZXJ5TGlzdEJ1dHRvblRleHQudGV4dENvbnRlbnQgPSAnR3JvY2VyeSBMaXN0JztcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBncm9jZXJ5TGlzdEFycm93LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFuZ2xlLWRvd24nLCAnYXJyb3cnKTtcclxuICAgIGdyb2NlcnlMaXN0QXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdncm9jZXJ5LWxpc3QtYXJyb3cnKTtcclxuICAgIGdyb2NlcnlMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGdyb2NlcnlMaXN0QXJyb3cuY2xhc3NMaXN0LnRvZ2dsZSgndmVydGljYWwtZmxpcCcpO1xyXG4gICAgfSk7XHJcbiAgICBncm9jZXJ5TGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChncm9jZXJ5TGlzdEJ1dHRvblRleHQpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RBcnJvdyk7XHJcbiAgICByZXR1cm4gZ3JvY2VyeUxpc3RCdXR0b247XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUdyb2NlcnlMaXN0U3VibmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RTdWJuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyb2NlcnlMaXN0U3VibmF2LmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdicsICdoaWRkZW4nKTtcclxuICAgIGNvbnN0IHdlZWtTdWJuYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdlZWtTdWJuYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibmF2LWJ1dHRvbicpO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb25GYWN0b3J5KCkuY2xlYXJTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBkaXNwbGF5R3JvY2VyeUxpc3Qoc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoaXN0b3J5U3VibmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBoaXN0b3J5U3VibmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdi1idXR0b24nKTtcclxuICAgIGhpc3RvcnlTdWJuYXZCdXR0b24udGV4dENvbnRlbnQgPSAnSGlzdG9yeSc7XHJcbiAgICBncm9jZXJ5TGlzdFN1Ym5hdi5hcHBlbmRDaGlsZCh3ZWVrU3VibmF2QnV0dG9uKTtcclxuICAgIGdyb2NlcnlMaXN0U3VibmF2LmFwcGVuZENoaWxkKGhpc3RvcnlTdWJuYXZCdXR0b24pO1xyXG4gICAgcmV0dXJuIGdyb2NlcnlMaXN0U3VibmF2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVHcm9jZXJ5TGlzdE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm9jZXJ5TGlzdE5hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnZ3JvY2VyeS1saXN0LW5hdicpO1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RCdXR0b24gPSBjcmVhdGVHcm9jZXJ5TGlzdEJ1dHRvbigpO1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RTdWJuYXYgPSBjcmVhdGVHcm9jZXJ5TGlzdFN1Ym5hdigpO1xyXG4gICAgZ3JvY2VyeUxpc3ROYXYuYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RCdXR0b24pO1xyXG4gICAgZ3JvY2VyeUxpc3ROYXYuYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RTdWJuYXYpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ3JvY2VyeUxpc3RTdWJuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBncm9jZXJ5TGlzdE5hdjtcclxufTtcclxuY29uc3QgY3JlYXRlUmVjaXBlc0J1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlY2lwZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xyXG4gICAgcmVjaXBlc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlY2lwZXMtYnV0dG9uJyk7XHJcbiAgICByZWNpcGVzQnV0dG9uLnRleHRDb250ZW50ID0gJ1JlY2lwZXMnO1xyXG4gICAgcmVjaXBlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb25GYWN0b3J5KCkuY2xlYXJTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBkaXNwbGF5UmVjaXBlTGlzdChzZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZWNpcGVzQnV0dG9uO1xyXG59O1xyXG5jb25zdCBjcmVhdGVSZWNpcGVzTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVjaXBlc05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVjaXBlc05hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAncmVjaXBlcy1uYXYnKTtcclxuICAgIHJlY2lwZXNOYXYuYXBwZW5kQ2hpbGQoY3JlYXRlUmVjaXBlc0J1dHRvbigpKTtcclxuICAgIHJldHVybiByZWNpcGVzTmF2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXYtY29udGFpbmVyJyk7XHJcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVhbFBsYW5zTmF2KCkpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUdyb2NlcnlMaXN0TmF2KCkpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVJlY2lwZXNOYXYoKSk7XHJcbiAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImNvbnN0IHNhbXBsZVJlY2lwZSA9IHtcclxuICAgIG5hbWU6IGBSb3kgQ2hvaSdzIEFnbGlvIGUgT2xpb2AsXHJcbiAgICBpbmdyZWRpZW50TGlzdDogW1xyXG4gICAgICAgIHsgbmFtZTogJ3Bhcm1lc2FuIGNoZWVzZScsIGFtb3VudDogMC41LCB1bml0OiAnQycgfSxcclxuICAgICAgICB7IG5hbWU6ICdsZW1vbicsIGFtb3VudDogMSwgdW5pdDogJ3BjJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3BhcnNsZXknLCBhbW91bnQ6IDEsIHVuaXQ6ICdidW5jaCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdnYXJsaWMnLCBhbW91bnQ6IDEwLCB1bml0OiAnY2xvdmVzJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ29saXZlIG9pbCcsIGFtb3VudDogMSwgdW5pdDogJ0MnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnc3BhZ2hldHRpJywgYW1vdW50OiA0NTAsIHVuaXQ6ICdnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2NoaWxpIGZsYWtlcycsIGFtb3VudDogMSwgdW5pdDogJ3Ric3AnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnc2FsdCcsIGFtb3VudDogMSwgdW5pdDogJ3Ric3AnIH0sXHJcbiAgICBdLFxyXG4gICAgaW5zdHJ1Y3Rpb25zOiBbXHJcbiAgICAgICAgYEJyaW5nIGEgcG90IG9mIHdhdGVyIHRvIGEgYm9pbCwgYW5kIGFkZCAxLTIgdHNwIG9mIHNhbHQgYW5kIDEgdGJzcCBvZiBvbGl2ZSBvaWwuYCxcclxuICAgICAgICBgV2FzaCBhbmQgZGUtc3RlbSB0aGUgcGFyc2xleS4gQ2hvcCB0aGUgcGFyc2xleSB3aXRoIGEgcm91Z2ggY2hpZmZvbmFkZS5gLFxyXG4gICAgICAgIGBQZWVsIGdhcmxpYyBhbmQgc2xpY2UgaW50byB0aGluIGRpc2NzLmAsXHJcbiAgICAgICAgYEFkZCB0aGUgc3BhZ2hldHRpIHRvIHRoZSBib2lsaW5nIHdhdGVyIGFuZCBjb29rIHVudGlsIGFsIGRlbnRlIG9yIHRvIGRlc2lyZWQgZG9uZW5lc3MgKH4xMCBtaW51dGVzKS5gLFxyXG4gICAgICAgIGBEcmFpbiB0aGUgcGFzdGEgYW5kIHNldCBhc2lkZSwgc2F2aW5nIGFib3V0IDEgY3VwIG9mIHRoZSBwYXN0YSB3YXRlciBhbmQgYWxzbyBzZXR0aW5nIHRoaXMgYXNpZGUuYCxcclxuICAgICAgICBgSW4gYSBoZWF2eS1ib3R0b21lZCBza2lsbGV0IG92ZXIgbWVkaXVtIGhlYXQsIGFkZCBhYm91dCDCvSBjdXAgb2Ygb2xpdmUgb2lsIChvciBlbm91Z2ggdG8gY29hdCB0aGUgYm90dG9tIG9mIHRoZSBwYW4gYW5kIGNvdmVyIGFsbCB0aGUgZ2FybGljKS5gLFxyXG4gICAgICAgIGBBZGQgZ2FybGljIHRvIHRoZSBwYW4gYW5kIGNvb2sgdW50aWwgZnJhZ3JhbnQgYW5kIGp1c3QgYnJvd25pbmcsIGFib3V0IDMgbWludXRlcy5gLFxyXG4gICAgICAgIGBBZGQgY2hpbGkgZmxha2VzIGFuZCBhbGwgYnV0IDItMyB0YnNwcyBvZiB0aGUgY2hvcHBlZCBwYXJzbGV5IHRvIHRoZSBwYW4gYW5kIGNvb2sgZm9yIGFub3RoZXIgMzAgc2Vjb25kcyBvciBzby5gLFxyXG4gICAgICAgIGBBZGQgdGhlIGNvb2tlZCBwYXN0YSBhbmQgc3RpciBpdCBpbnRvIHRoZSBvaWwgYW5kIGdhcmxpYy4gVGhlbiwgYWRkIHRoZSBzYXZlZCBjdXAgb2YgcGFzdGEgd2F0ZXIuYCxcclxuICAgICAgICBgQWxsb3cgZXZlcnl0aGluZyB0byBoZWF0IGFuZCBpbmNvcnBvcmF0ZSwgdGhlbiByZW1vdmUgZnJvbSB0aGUgaGVhdC5gLFxyXG4gICAgICAgIGBBZGQgMS0yIHRic3Agb2YgYnV0dGVyIHRvIHRoZSBwYXN0YSBhbmQgdGhlIGp1aWNlIG9mIGEgbGVtb24gYW5kIHN0aXIuYCxcclxuICAgICAgICBgVXNlIGEgbGFyZ2UgZm9yayB0byB0d2lzdCB0aGUgc3BhZ2hldHRpIG9udG8geW91ciBwbGF0ZXMuYCxcclxuICAgICAgICBgVG9wIHdpdGggc29tZSBvZiB0aGUgZ2FybGlja3kgb2lsIGZyb20gdGhlIHBhbiwgZ3JhdGVkIHBhcm1lc2FuIGNoZWVzZSwgYW5kIHNvbWUgb2YgdGhlIGxlZnRvdmVyIGNob3BwZWQgcGFyc2xleS5gLFxyXG4gICAgICAgIGBTZXJ2ZSBpbW1lZGlhdGVseS5gLFxyXG4gICAgXSxcclxufTtcclxuY29uc3QgcmVjaXBlRmFjdG9yeSA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgcmVjaXBlTmFtZSA9IG5hbWU7XHJcbiAgICBsZXQgaW5ncmVkaWVudHMgPSBbXTtcclxuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IGdlbmVyYXRlSW5ncmVkaWVudExpc3QgPSAoaW5ncmVkaWVudCkgPT4ge1xyXG4gICAgICAgIGxldCBpbmdyZWRpZW50c0xpc3QgPSBbXTtcclxuICAgICAgICBpbmdyZWRpZW50c0xpc3QucHVzaChpbmdyZWRpZW50KTtcclxuICAgICAgICByZXR1cm4gaW5ncmVkaWVudHNMaXN0O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEluc3RydWN0aW9uc0Zyb21JbnB1dCA9IChpbnN0cnVjdGlvbikgPT4ge1xyXG4gICAgICAgIGxldCBpbnN0cnVjdGlvbnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGluc3RydWN0aW9uc0FycmF5LnB1c2goaW5zdHJ1Y3Rpb24pO1xyXG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbnNBcnJheTtcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBnZXRJbnN0cnVjdGlvbnNGcm9tSW5wdXQgfTtcclxufTtcclxuY29uc3QgYWRkVG9SZWNpcGVBcnJheSA9IChyZWNpcGUpID0+IHtcclxuICAgIGxldCByZWNpcGVBcnJheSA9IFtdO1xyXG4gICAgcmVjaXBlQXJyYXkucHVzaChyZWNpcGUpO1xyXG4gICAgY29uc29sZS5sb2cocmVjaXBlQXJyYXkpO1xyXG4gICAgcmV0dXJuIHJlY2lwZUFycmF5O1xyXG59O1xyXG5jb25zdCBnZXRSZWNpcGVBcnJheSA9ICgpID0+IHtcclxuICAgIHJldHVybiBhZGRUb1JlY2lwZUFycmF5KHNhbXBsZVJlY2lwZSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldFJlY2lwZUFycmF5O1xyXG4iLCJpbXBvcnQgZ2V0UmVjaXBlQXJyYXkgZnJvbSAnLi9yZWNpcGUnO1xyXG5jb25zdCByZWNpcGVBcnJheSA9IGdldFJlY2lwZUFycmF5KCk7XHJcbmNvbnN0IGdlbmVyYXRlUGFnZVN1YmhlYWRpbmcgPSAoc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlU3ViaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwYWdlU3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlLXN1YmhlYWRpbmcnKTtcclxuICAgIHBhZ2VTdWJoZWFkaW5nLnRleHRDb250ZW50ID0gc3RyaW5nO1xyXG4gICAgcmV0dXJuIHBhZ2VTdWJoZWFkaW5nO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUZpbHRlckNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmlsdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZS1maWx0ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tYWduaWZ5aW5nLWdsYXNzJyk7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBjb25zdCBzb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzb3J0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIHNvcnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFycm93LWRvd24tYS16Jyk7XHJcbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XHJcbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcclxuICAgIHNvcnRCdXR0b24uYXBwZW5kQ2hpbGQoc29ydEljb24pO1xyXG4gICAgZmlsdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcbiAgICBmaWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydEJ1dHRvbik7XHJcbiAgICByZXR1cm4gZmlsdGVyQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUxpc3QgPSAocmVjaXBlQXJyYXkpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgcmVjaXBlTGlzdC5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtbGlzdCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNpcGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcclxuICAgICAgICBsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gcmVjaXBlQXJyYXlbaV0ubmFtZTtcclxuICAgICAgICByZWNpcGVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZWNpcGVMaXN0O1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZVJlY2lwZUxpc3RDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWNpcGVMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZWNpcGVMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC1jb250YWluZXInLCAncmVjaXBlLWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICByZWNpcGVMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRmlsdGVyQ29udGFpbmVyKCkpO1xyXG4gICAgcmVjaXBlTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUxpc3QocmVjaXBlQXJyYXkpKTtcclxuICAgIHJldHVybiByZWNpcGVMaXN0Q29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZU5ld1JlY2lwZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1JlY2lwZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmV3UmVjaXBlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gICAgbmV3UmVjaXBlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXJlY2lwZS1idXR0b24nKTtcclxuICAgIG5ld1JlY2lwZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBOZXcgUmVjaXBlYDtcclxuICAgIHJldHVybiBuZXdSZWNpcGVCdXR0b247XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlSZWNpcGVMaXN0ID0gKHNlY3Rpb24pID0+IHtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQYWdlU3ViaGVhZGluZyhgTXkgUmVjaXBlc2ApKTtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVSZWNpcGVMaXN0Q29udGFpbmVyKCkpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZU5ld1JlY2lwZUJ1dHRvbigpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVJlY2lwZUxpc3Q7XHJcbiIsImNvbnN0IHNlY3Rpb25GYWN0b3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFyU2VjdGlvbiA9IChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBjcmVhdGVTZWN0aW9uLCBjbGVhclNlY3Rpb24gfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbkZhY3Rvcnk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgc2VjdGlvbkZhY3RvcnkgZnJvbSAnLi9zZWN0aW9uJztcclxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5jb25zdCBjcmVhdGVQYWdlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgcGFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhZ2UtY29udGFpbmVyJyk7XHJcbiAgICByZXR1cm4gcGFnZUNvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVQYWdlRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VDb250YWluZXIoKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25GYWN0b3J5KCkuY3JlYXRlU2VjdGlvbigpO1xyXG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuZ2VuZXJhdGVQYWdlRWxlbWVudHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9