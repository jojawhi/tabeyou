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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--background-3: hsl(0 0% 50% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tdisplay: block;\r\n\tmargin-left: 1rem;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.subnav-button {\r\n\tpadding: 0.25rem 0;\r\n\tfont-size: var(--step--1);\r\n\ttext-align: left;\r\n\tcolor: var(--font-color-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.vertical-flip {\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n\r\n.appear {\r\n\tanimation: appear 3s forward;\r\n}\r\n\r\n@keyframes appear {\r\n\t0% {\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n\r\n*/\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\ttop: 0;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\theight: min(70vh, 1000px);\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-item button {\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-item button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 76% 12% 12%;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text-container input,\r\n.recipe-ingredient-container input {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.grocery-list-amount {\r\n\twidth: 3rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tmargin-bottom: 2rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-list-container button {\r\n\tfont-size: inherit;\r\n\tfont-weight: 600;\r\n\tcolor: inherit;\r\n}\r\n\r\n.recipe-filter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-filter-container button {\r\n\tpadding: 0.125rem;\r\n\tfont-size: var(--step-0);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-filter-container button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 0 0.3125rem;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-modal-close-button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.ingredient-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 15% 20% 65%;\r\n\tfont-size: var(--step-0);\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n\r\n.ingredient-amount {\r\n\ttext-align: right;\r\n}\r\n\r\n.ingredient-unit {\r\n\ttext-align: left;\r\n}\r\n\r\n.ingredient-name {\r\n\tpadding-left: 0.25rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Coda&display=swap');\r\n\r\n:root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--background-3: hsl(0 0% 50% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(images/food2.jpg) no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tdisplay: block;\r\n\tmargin-left: 1rem;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.subnav-button {\r\n\tpadding: 0.25rem 0;\r\n\tfont-size: var(--step--1);\r\n\ttext-align: left;\r\n\tcolor: var(--font-color-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.vertical-flip {\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n\r\n.appear {\r\n\tanimation: appear 3s forward;\r\n}\r\n\r\n@keyframes appear {\r\n\t0% {\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n\r\n*/\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\ttop: 0;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\theight: min(70vh, 1000px);\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-item button {\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-item button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 76% 12% 12%;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text-container input,\r\n.recipe-ingredient-container input {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.grocery-list-amount {\r\n\twidth: 3rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tmargin-bottom: 2rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-list-container button {\r\n\tfont-size: inherit;\r\n\tfont-weight: 600;\r\n\tcolor: inherit;\r\n}\r\n\r\n.recipe-filter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-filter-container button {\r\n\tpadding: 0.125rem;\r\n\tfont-size: var(--step-0);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-filter-container button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 0 0.3125rem;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-modal-close-button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.ingredient-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 15% 20% 65%;\r\n\tfont-size: var(--step-0);\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n\r\n.ingredient-amount {\r\n\ttext-align: right;\r\n}\r\n\r\n.ingredient-unit {\r\n\ttext-align: left;\r\n}\r\n\r\n.ingredient-name {\r\n\tpadding-left: 0.25rem;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _recipeModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipeModal */ "./src/recipeModal.ts");


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
        listButton.addEventListener('click', () => {
            (0,_recipeModal__WEBPACK_IMPORTED_MODULE_1__["default"])(recipeArray[i]);
        });
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

/***/ "./src/recipeModal.ts":
/*!****************************!*\
  !*** ./src/recipeModal.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateRecipeCloseButton = () => {
    const recipeCloseButton = document.createElement('button');
    recipeCloseButton.classList.add('recipe-modal-close-button');
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    recipeCloseButton.appendChild(closeIcon);
    recipeCloseButton.addEventListener('click', () => {
        const recipeModal = document.getElementById('recipe-modal');
        if (recipeModal) {
            recipeModal.remove();
        }
    });
    return recipeCloseButton;
};
const generateRecipeImage = () => { };
const generateRecipeModalHeading = (recipe) => {
    const recipeModalHeading = document.createElement('h3');
    recipeModalHeading.classList.add('page-subheading');
    recipeModalHeading.textContent = recipe.name;
    return recipeModalHeading;
};
const generateRecipeHeader = (recipe) => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('recipe-header-container');
    headerContainer.appendChild(generateRecipeCloseButton());
    headerContainer.appendChild(generateRecipeModalHeading(recipe));
    return headerContainer;
};
const generateModalIngredientContainers = (ingredient) => {
    const modalIngredientContainer = document.createElement('div');
    modalIngredientContainer.classList.add('recipe-ingredient-container');
    const ingredientAmount = document.createElement('input');
    ingredientAmount.classList.add('ingredient-amount');
    ingredientAmount.setAttribute('type', 'number');
    ingredientAmount.valueAsNumber = ingredient.amount;
    ingredientAmount.setAttribute('readonly', 'readonly');
    const ingredientUnit = document.createElement('input');
    ingredientUnit.classList.add('ingredient-unit');
    ingredientUnit.value = ingredient.unit;
    ingredientUnit.setAttribute('readonly', 'readonly');
    const ingredientName = document.createElement('input');
    ingredientName.classList.add('ingredient-name');
    ingredientName.value = ingredient.name;
    ingredientName.setAttribute('readonly', 'readonly');
    modalIngredientContainer.appendChild(ingredientAmount);
    modalIngredientContainer.appendChild(ingredientUnit);
    modalIngredientContainer.appendChild(ingredientName);
    return modalIngredientContainer;
};
const generateModalIngredientListContainer = (recipe) => {
    const modalIngredientListContainer = document.createElement('div');
    modalIngredientListContainer.classList.add('ingredient-list-container');
    const subheading = document.createElement('h3');
    subheading.classList.add('recipe-subheading');
    subheading.textContent = `Ingredients`;
    modalIngredientListContainer.appendChild(subheading);
    for (const ingredient of recipe.ingredientList) {
        modalIngredientListContainer.appendChild(generateModalIngredientContainers(ingredient));
    }
    return modalIngredientListContainer;
};
const generateRecipeModalSection = (recipe) => {
    const recipeModalSection = document.createElement('section');
    recipeModalSection.classList.add('recipe-modal');
    recipeModalSection.setAttribute('id', 'recipe-modal');
    recipeModalSection.appendChild(generateRecipeHeader(recipe));
    recipeModalSection.appendChild(generateModalIngredientListContainer(recipe));
    return recipeModalSection;
};
const displayRecipeModal = (recipe) => {
    document.body.appendChild(generateRecipeModalSection(recipe));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayRecipeModal);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLG9CQUFvQixPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxP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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRFc7QUFDUTtBQUNGO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFjO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FB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O0FDeEVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ1M7QUFDUztBQUNIO0FBQ0E7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQVk7QUFDMUM7QUFDQSw4QkFBOEIsbURBQVk7QUFDMUMsOEJBQThCLGdEQUFTO0FBQ3ZDLG9CQUFvQixvREFBYztBQUNsQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvZm9vdGVyLnRzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvZ3JvY2VyeUxpc3QudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9uYXYudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9yZWNpcGUudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9yZWNpcGVMaXN0LnRzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvcmVjaXBlTW9kYWwudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9zZWN0aW9uLnRzIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2Zvb2QyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSw0MDAmZmFtaWx5PUNvZGEmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG5cXHQtLWZvbnQtMTogJ0NvZGEnLCBzYW5zLXNlcmlmO1xcclxcblxcdC0tZm9udC0yOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0LS1mb250LWNvbG9yLTE6IGhzbCg1MCwgMjAlLCA5NSUpO1xcclxcblxcdC0tYmFja2dyb3VuZC0xOiBoc2woMCwgMCUsIDE3JSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTI6IGhzbCgwIDAlIDE3JSAvIDAuNSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTM6IGhzbCgwIDAlIDUwJSAvIDAuNSk7XFxyXFxuXFx0LS1yZWQtMTogaHNsKDIyLCA5NSUsIDQ1JSk7XFxyXFxuXFx0LS1yZWQtMjogaHNsKDIyLCA2MCUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0xOiBoc2woMTA0LCAzNSUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0yOiBoc2woMTA0LCA3MCUsIDg1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMTogaHNsKDUwLCA4MCUsIDY1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMjogaHNsKDUwLCA3MCUsIDc1JSk7XFxyXFxuXFx0LS1zdGVwLS0yOiBjbGFtcCgwLjY5cmVtLCAwLjhyZW0gKyAtMC41N3Z3LCAwLjM4cmVtKTtcXHJcXG5cXHQtLXN0ZXAtLTE6IGNsYW1wKDAuODNyZW0sIDAuODZyZW0gKyAtMC4xNXZ3LCAwLjc1cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMDogY2xhbXAoMXJlbSwgMC44M3JlbSArIDAuODl2dywgMS41cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMTogY2xhbXAoMS4ycmVtLCAwLjZyZW0gKyAzLjJ2dywgM3JlbSk7XFxyXFxuXFx0LS1zdGVwLTI6IGNsYW1wKDEuNDRyZW0sIC0wLjA4cmVtICsgOC4xMXZ3LCA2cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMzogY2xhbXAoMS43M3JlbSwgLTEuN3JlbSArIDE4LjI2dncsIDEycmVtKTtcXHJcXG5cXHQtLXN0ZXAtNDogY2xhbXAoMi4wN3JlbSwgLTUuMjNyZW0gKyAzOC45OHZ3LCAyNHJlbSk7XFxyXFxuXFx0LS1zdGVwLTU6IGNsYW1wKDIuNDlyZW0sIC0xMi42OHJlbSArIDgwLjkxdncsIDQ4cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDFyZW0gMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IC0xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuXFx0d2lkdGg6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9ucy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b24ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qTGFuZGluZyBQYWdlKi9cXHJcXG5cXHJcXG4ubGFuZGluZy1wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0LyogcGFkZGluZzogbWF4KDEwdmgsIDFyZW0pIDEuNXJlbTsgLyogdG9wIGFuZCBib3R0b20gc2V0IHRvIGxhcmdlciBvZiAzdmggb3IgMXJlbSwgbGVmdCBhbmQgcmlnaHQgMS41cmVtICovXFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC0xKSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tc2VjdGlvbiB7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC45NXJlbSk7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMTV2aCAwO1xcclxcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDEwdmggMnJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTIpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1oZWFkaW5nIHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC0xKTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxyXFxuXFx0LyogMyBtaW4sIDUgbWF4LCAxMHZ3KzEgaWRlYWwsIHRoZSArMSBpcyBpbiBjYXNlIG9mIHpvb21pbmcgaW4vb3V0ICovXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3ViaGVhZGluZyB7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlLXNlY3Rpb24ge1xcclxcblxcdHBhZGRpbmc6IDJyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtY29udGVudCB7XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyZWVuLTIpLCB2YXIoLS15ZWxsb3ctMiksIHZhcigtLXJlZC0yKSk7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGVudCB7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qTmF2Ki9cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG5cXHRmbGV4OiAxIDEgMjglO1xcclxcblxcdHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIGEge1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogbWluKDhyZW0sIDEwMCUpO1xcclxcblxcdHBhZGRpbmc6IDAuMTI1cmVtIDAgMC4xMjVyZW0gMC4zNzVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3cge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbC1wbGFucy1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JvY2VyeS1saXN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXllbGxvdy0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXllbGxvdy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2lwZXMtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYtYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdi1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlcnRpY2FsLWZsaXAge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG4uYXBwZWFyIHtcXHJcXG5cXHRhbmltYXRpb246IGFwcGVhciAzcyBmb3J3YXJkO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdGhlaWdodDogMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4vKk1lYWwgUGxhbiBQYWdlKi9cXHJcXG5cXHJcXG4ucGFnZS1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtcGFnZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtc2VjdGlvbiB7XFxyXFxuXFx0ZmxleDogMSAxIDcyJTtcXHJcXG5cXHRoZWlnaHQ6IG1pbig3MHZoLCAxMDAwcHgpO1xcclxcblxcdHBhZGRpbmc6IDAuNjI1cmVtIDFyZW0gNDB2aCAxcmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDJweCB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAzNSUgNjUlO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxyXFxuXFx0bWFyZ2luOiAycmVtIGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyZWVuLTIpLCB2YXIoLS15ZWxsb3ctMiksIHZhcigtLXJlZC0yKSk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBsYW4taGVhZGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAwO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBsYW4tY2VsbCB7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAwLjI1cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi50b3AtbGVmdC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b3AtcmlnaHQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWxlZnQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXJpZ2h0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLypHcm9jZXJ5IExpc3QqL1xcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAycHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWl0ZW0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtaXRlbSBidXR0b24ge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1pdGVtIGJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzYlIDEyJSAxMiU7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDAgMnJlbSAwIDA7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC10ZXh0LWNvbnRhaW5lciBpbnB1dCxcXHJcXG4ucmVjaXBlLWluZ3JlZGllbnQtY29udGFpbmVyIGlucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWFtb3VudCB7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAwLjg1cmVtO1xcclxcblxcdHdpZHRoOiAwLjg1cmVtO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKkhpZGUgZGVmYXVsdCBjaGVja2JveCovXFxyXFxuLmNoZWNrYm94IGlucHV0IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNyZWF0ZSBjdXN0b20gY2hlY2tib3gqL1xcclxcbi5jaGVja21hcmsge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdGhlaWdodDogMC44NXJlbTtcXHJcXG5cXHR3aWR0aDogMC44NXJlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2ttYXJrOjphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qQ2hhbmdlIGJnIGNvbG9yIHdoZW4gY2hlY2tlZCovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlNob3cgY3VzdG9tIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQqL1xcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qQ2hlY2ttYXJrIHN0eWxlcyovXFxyXFxuLmNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xcclxcblxcdGxlZnQ6IDAuMjVyZW07XFxyXFxuXFx0aGVpZ2h0OiAwLjYyNXJlbTtcXHJcXG5cXHR3aWR0aDogMC4zcmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgdmFyKC0tZ3JlZW4tMSk7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1kZWxldGUtYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0b3BhY2l0eTogMC41O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlJlY2lwZSBMaXN0IFBhZ2UqL1xcclxcblxcclxcbi5yZWNpcGUtbGlzdC1jb250YWluZXIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWxpc3QtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtZmlsdGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWZpbHRlci1jb250YWluZXIgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjEyNXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1maWx0ZXItY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDYwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xcclxcblxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTIpO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi8qUmVjaXBlIE1vZGFsKi9cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdHRvcDogNTAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR3aWR0aDogbWluKDEwMCUsIDIwcmVtKTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWhlYWRlci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWltZyB7XFxyXFxuXFx0bWF4LXdpZHRoOiA2MCU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggLTRweCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsIC5wYWdlLXN1YmhlYWRpbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbC1jbG9zZS1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDAgMC4zMTI1cmVtO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbW9kYWwtY2xvc2UtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudC1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWluZ3JlZGllbnQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDIwJSA2NSU7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWluc3RydWN0aW9ucy1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50LWFtb3VudCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50LXVuaXQge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50LW5hbWUge1xcclxcblxcdHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLDRCQUE0QjtDQUM1QiwrQkFBK0I7Q0FDL0IsaUNBQWlDO0NBQ2pDLCtCQUErQjtDQUMvQixtQ0FBbUM7Q0FDbkMsbUNBQW1DO0NBQ25DLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG9EQUFvRDtDQUNwRCxxREFBcUQ7Q0FDckQsK0NBQStDO0NBQy9DLDZDQUE2QztDQUM3QyxpREFBaUQ7Q0FDakQsa0RBQWtEO0NBQ2xELG1EQUFtRDtDQUNuRCxvREFBb0Q7QUFDckQ7O0FBRUE7OztDQUdDLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0NBQWtDO0NBQ2xDLHdCQUF3QjtDQUN4QiwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQywwRkFBMEY7QUFDM0Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0NBQ2YsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQiw4QkFBOEI7Q0FDOUIsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixxQkFBcUI7QUFDdEI7O0FB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LDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsaURBQWlEO0FBQ2xEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sUUFBUTtDQUNSLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSw0MDAmZmFtaWx5PUNvZGEmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcblxcdC0tZm9udC0xOiAnQ29kYScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0LS1mb250LTI6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHQtLWZvbnQtY29sb3ItMTogaHNsKDUwLCAyMCUsIDk1JSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTE6IGhzbCgwLCAwJSwgMTclKTtcXHJcXG5cXHQtLWJhY2tncm91bmQtMjogaHNsKDAgMCUgMTclIC8gMC41KTtcXHJcXG5cXHQtLWJhY2tncm91bmQtMzogaHNsKDAgMCUgNTAlIC8gMC41KTtcXHJcXG5cXHQtLXJlZC0xOiBoc2woMjIsIDk1JSwgNDUlKTtcXHJcXG5cXHQtLXJlZC0yOiBoc2woMjIsIDYwJSwgNzAlKTtcXHJcXG5cXHQtLWdyZWVuLTE6IGhzbCgxMDQsIDM1JSwgNzAlKTtcXHJcXG5cXHQtLWdyZWVuLTI6IGhzbCgxMDQsIDcwJSwgODUlKTtcXHJcXG5cXHQtLXllbGxvdy0xOiBoc2woNTAsIDgwJSwgNjUlKTtcXHJcXG5cXHQtLXllbGxvdy0yOiBoc2woNTAsIDcwJSwgNzUlKTtcXHJcXG5cXHQtLXN0ZXAtLTI6IGNsYW1wKDAuNjlyZW0sIDAuOHJlbSArIC0wLjU3dncsIDAuMzhyZW0pO1xcclxcblxcdC0tc3RlcC0tMTogY2xhbXAoMC44M3JlbSwgMC44NnJlbSArIC0wLjE1dncsIDAuNzVyZW0pO1xcclxcblxcdC0tc3RlcC0wOiBjbGFtcCgxcmVtLCAwLjgzcmVtICsgMC44OXZ3LCAxLjVyZW0pO1xcclxcblxcdC0tc3RlcC0xOiBjbGFtcCgxLjJyZW0sIDAuNnJlbSArIDMuMnZ3LCAzcmVtKTtcXHJcXG5cXHQtLXN0ZXAtMjogY2xhbXAoMS40NHJlbSwgLTAuMDhyZW0gKyA4LjExdncsIDZyZW0pO1xcclxcblxcdC0tc3RlcC0zOiBjbGFtcCgxLjczcmVtLCAtMS43cmVtICsgMTguMjZ2dywgMTJyZW0pO1xcclxcblxcdC0tc3RlcC00OiBjbGFtcCgyLjA3cmVtLCAtNS4yM3JlbSArIDM4Ljk4dncsIDI0cmVtKTtcXHJcXG5cXHQtLXN0ZXAtNTogY2xhbXAoMi40OXJlbSwgLTEyLjY4cmVtICsgODAuOTF2dywgNDhyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmVlbi0yKSwgdmFyKC0teWVsbG93LTIpLCB2YXIoLS1yZWQtMikpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG5cXHR3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncy1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtYnV0dG9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLypMYW5kaW5nIFBhZ2UqL1xcclxcblxcclxcbi5sYW5kaW5nLXBhZ2UtY29udGFpbmVyIHtcXHJcXG5cXHQvKiBwYWRkaW5nOiBtYXgoMTB2aCwgMXJlbSkgMS41cmVtOyAvKiB0b3AgYW5kIGJvdHRvbSBzZXQgdG8gbGFyZ2VyIG9mIDN2aCBvciAxcmVtLCBsZWZ0IGFuZCByaWdodCAxLjVyZW0gKi9cXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLTEpIHVybChpbWFnZXMvZm9vZDIuanBnKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXNlY3Rpb24ge1xcclxcblxcdGhlaWdodDogY2FsYygxMDB2aCAtIDQuOTVyZW0pO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDE1dmggMDtcXHJcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tY29udGVudCB7XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAxMHZoIDJyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0yKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtaGVhZGluZyB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMSk7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcclxcblxcdC8qIDMgbWluLCA1IG1heCwgMTB2dysxIGlkZWFsLCB0aGUgKzEgaXMgaW4gY2FzZSBvZiB6b29taW5nIGluL291dCAqL1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN1YmhlYWRpbmcge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZS1zZWN0aW9uIHtcXHJcXG5cXHRwYWRkaW5nOiAycmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlLWNvbnRlbnQge1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0cGFkZGluZzogMnJlbSAwO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmVlbi0yKSwgdmFyKC0teWVsbG93LTIpLCB2YXIoLS1yZWQtMikpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRlbnQge1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKk5hdiovXFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuXFx0ZmxleDogMSAxIDI4JTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbnRhaW5lciBhIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IG1pbig4cmVtLCAxMDAlKTtcXHJcXG5cXHRwYWRkaW5nOiAwLjEyNXJlbSAwIDAuMTI1cmVtIDAuMzc1cmVtO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI21lYWwtcGxhbnMtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyb2NlcnktbGlzdC1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS15ZWxsb3ctMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS15ZWxsb3ctMSk7XFxyXFxufVxcclxcblxcclxcbiNyZWNpcGVzLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2LWJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZzogMC4yNXJlbSAwO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbi52ZXJ0aWNhbC1mbGlwIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuLmFwcGVhciB7XFxyXFxuXFx0YW5pbWF0aW9uOiBhcHBlYXIgM3MgZm9yd2FyZDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLypNZWFsIFBsYW4gUGFnZSovXFxyXFxuXFxyXFxuLnBhZ2UtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG5cXHR0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXBhZ2Uge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXNlY3Rpb24ge1xcclxcblxcdGZsZXg6IDEgMSA3MiU7XFxyXFxuXFx0aGVpZ2h0OiBtaW4oNzB2aCwgMTAwMHB4KTtcXHJcXG5cXHRwYWRkaW5nOiAwLjYyNXJlbSAxcmVtIDQwdmggMXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0tZ3JlZW4tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBsYW4tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMzUlIDY1JTtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcblxcdG1hcmdpbjogMnJlbSBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTIpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmVlbi0yKSwgdmFyKC0teWVsbG93LTIpLCB2YXIoLS1yZWQtMikpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDFyZW0gMDtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWNlbGwge1xcclxcblxcdHBhZGRpbmc6IDFyZW0gMC4yNXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWxlZnQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXJpZ2h0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1sZWZ0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1yaWdodC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi8qR3JvY2VyeSBMaXN0Ki9cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgMnB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1pdGVtIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWl0ZW0gYnV0dG9uIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtaXRlbSBidXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc2JSAxMiUgMTIlO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAwIDJyZW0gMCAwO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dC1jb250YWluZXIgaW5wdXQsXFxyXFxuLnJlY2lwZS1pbmdyZWRpZW50LWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC10ZXh0IHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1hbW91bnQge1xcclxcblxcdHdpZHRoOiAzcmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogMC44NXJlbTtcXHJcXG5cXHR3aWR0aDogMC44NXJlbTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypIaWRlIGRlZmF1bHQgY2hlY2tib3gqL1xcclxcbi5jaGVja2JveCBpbnB1dCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHR3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLypDcmVhdGUgY3VzdG9tIGNoZWNrYm94Ki9cXHJcXG4uY2hlY2ttYXJrIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRoZWlnaHQ6IDAuODVyZW07XFxyXFxuXFx0d2lkdGg6IDAuODVyZW07XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3g6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbWFyazo6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNoYW5nZSBiZyBjb2xvciB3aGVuIGNoZWNrZWQqL1xcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLypTaG93IGN1c3RvbSBjaGVja21hcmsgd2hlbiBjaGVja2VkKi9cXHJcXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNoZWNrbWFyayBzdHlsZXMqL1xcclxcbi5jaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG5cXHRsZWZ0OiAwLjI1cmVtO1xcclxcblxcdGhlaWdodDogMC42MjVyZW07XFxyXFxuXFx0d2lkdGg6IDAuM3JlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtZGVsZXRlLWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdG9wYWNpdHk6IDAuNTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLypSZWNpcGUgTGlzdCBQYWdlKi9cXHJcXG5cXHJcXG4ucmVjaXBlLWxpc3QtY29udGFpbmVyIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1saXN0LWNvbnRhaW5lciBidXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWZpbHRlci1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1maWx0ZXItY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZzogMC4xMjVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtZmlsdGVyLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMyk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiA2MCU7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcXHJcXG5cXHR3aWR0aDogOTAlO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlJlY2lwZSBNb2RhbCovXFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IG1pbigxMDAlLCAyMHJlbSk7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1oZWFkZXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbWcge1xcclxcblxcdG1heC13aWR0aDogNjAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IC00cHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbCAucGFnZS1zdWJoZWFkaW5nIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbW9kYWwtY2xvc2UtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwIDAuMzEyNXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZC0xKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsLWNsb3NlLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtbGlzdC1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbmdyZWRpZW50LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAyMCUgNjUlO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudC1hbW91bnQge1xcclxcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudC11bml0IHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ncmVkaWVudC1uYW1lIHtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcclxuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBKb3NoIFdoaXRlLic7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7XHJcbiIsImNvbnN0IGdyb2NlcnlMaXN0U2FtcGxlID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdhcHBsZXMnLFxyXG4gICAgICAgIGFtb3VudDogNSxcclxuICAgICAgICB1bml0OiAncGMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnYmFuYW5hcycsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIHVuaXQ6ICdwYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdvbmlvbnMnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICB1bml0OiAncGMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbWlsaycsXHJcbiAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgIHVuaXQ6ICdMJyxcclxuICAgIH0sXHJcbl07XHJcbmNvbnN0IGdlbmVyYXRlUGFnZVN1YmhlYWRpbmcgPSAoc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlU3ViaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwYWdlU3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlLXN1YmhlYWRpbmcnKTtcclxuICAgIHBhZ2VTdWJoZWFkaW5nLnRleHRDb250ZW50ID0gc3RyaW5nO1xyXG4gICAgcmV0dXJuIHBhZ2VTdWJoZWFkaW5nO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUNoZWNrYm94ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcclxuICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrYm94SW5wdXQpO1xyXG4gICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcclxuICAgIHJldHVybiBjaGVja2JveDtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVEZWxldGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtZGVsZXRlLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLW1pbnVzJywgJ2ZhLXhzJyk7XHJcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICByZXR1cm4gZGVsZXRlQnV0dG9uO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUxpc3RJdGVtVGV4dCA9IChuYW1lLCBhbW91bnQsIHVuaXQpID0+IHtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JvY2VyeUxpc3RUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC10ZXh0LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGxpc3RJdGVtVGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgbGlzdEl0ZW1UZXh0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIGxpc3RJdGVtVGV4dC5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtdGV4dCcpO1xyXG4gICAgbGlzdEl0ZW1UZXh0LnZhbHVlID0gbmFtZTtcclxuICAgIGxpc3RJdGVtVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsaXN0SXRlbVRleHQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgfSk7XHJcbiAgICBsaXN0SXRlbVRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGxpc3RJdGVtVGV4dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGxpc3RJdGVtQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGxpc3RJdGVtQW1vdW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgIGxpc3RJdGVtQW1vdW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIGxpc3RJdGVtQW1vdW50LmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC1hbW91bnQnKTtcclxuICAgIGxpc3RJdGVtQW1vdW50LnZhbHVlQXNOdW1iZXIgPSBhbW91bnQ7XHJcbiAgICBsaXN0SXRlbUFtb3VudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsaXN0SXRlbUFtb3VudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICB9KTtcclxuICAgIGxpc3RJdGVtQW1vdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBsaXN0SXRlbUFtb3VudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGxpc3RJdGVtVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsaXN0SXRlbVVuaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGxpc3RJdGVtVW5pdC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICBsaXN0SXRlbVVuaXQuY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LWFtb3VudCcpO1xyXG4gICAgbGlzdEl0ZW1Vbml0LnZhbHVlID0gdW5pdDtcclxuICAgIGxpc3RJdGVtVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsaXN0SXRlbVVuaXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgfSk7XHJcbiAgICBsaXN0SXRlbVVuaXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGxpc3RJdGVtVW5pdC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICB9KTtcclxuICAgIGdyb2NlcnlMaXN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbVRleHQpO1xyXG4gICAgZ3JvY2VyeUxpc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtQW1vdW50KTtcclxuICAgIGdyb2NlcnlMaXN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbVVuaXQpO1xyXG4gICAgcmV0dXJuIGdyb2NlcnlMaXN0VGV4dENvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVMaXN0SXRlbXMgPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm9jZXJ5TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LWl0ZW0nKTtcclxuICAgIGNvbnN0IGxpc3RJdGVtSW5mbyA9IGdlbmVyYXRlTGlzdEl0ZW1UZXh0KGl0ZW0ubmFtZSwgaXRlbS5hbW91bnQsIGl0ZW0udW5pdCk7XHJcbiAgICBncm9jZXJ5TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDaGVja2JveCgpKTtcclxuICAgIGdyb2NlcnlMaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SXRlbUluZm8pO1xyXG4gICAgZ3JvY2VyeUxpc3RJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlRGVsZXRlQnV0dG9uKCkpO1xyXG4gICAgcmV0dXJuIGdyb2NlcnlMaXN0SXRlbTtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVHcm9jZXJ5TGlzdENvbnRhaW5lciA9IChhcnJheSkgPT4ge1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyb2NlcnlMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC1jb250YWluZXInKTtcclxuICAgIGFycmF5Lm1hcCgoaXRlbSkgPT4gZ3JvY2VyeUxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVMaXN0SXRlbXMoaXRlbSkpKTtcclxuICAgIHJldHVybiBncm9jZXJ5TGlzdENvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZGlzcGxheUdyb2NlcnlMaXN0ID0gKHNlY3Rpb24pID0+IHtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQYWdlU3ViaGVhZGluZyhgVGhpcyB3ZWVrJ3MgZ3JvY2VyeSBsaXN0YCkpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZUdyb2NlcnlMaXN0Q29udGFpbmVyKGdyb2NlcnlMaXN0U2FtcGxlKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlHcm9jZXJ5TGlzdDtcclxuIiwiY29uc3QgY3JlYXRlU2V0dGluZ3NCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZXR0aW5nc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc2V0dGluZ3NJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9zZXR0aW5ncy5wbmcnKTtcclxuICAgIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzZXR0aW5nc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1idXR0b24nLCAnaGVhZGVyLWJ1dHRvbicpO1xyXG4gICAgc2V0dGluZ3NCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzZXR0aW5ncy1idXR0b24nKTtcclxuICAgIGNvbnN0IHNldHRpbmdzQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXR0aW5nc0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1idXR0b24tY29udGFpbmVyJyk7XHJcbiAgICBzZXR0aW5nc0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc0J1dHRvbik7XHJcbiAgICBzZXR0aW5nc0J1dHRvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0ltZyk7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NCdXR0b25Db250YWluZXI7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUxvZ2luQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxvZ2luQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdoZWFkZXItYnV0dG9uJyk7XHJcbiAgICBsb2dpbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ2luLWJ1dHRvbicpO1xyXG4gICAgbG9naW5CdXR0b24udGV4dENvbnRlbnQgPSAnTG9nIGluJztcclxuICAgIHJldHVybiBsb2dpbkJ1dHRvbjtcclxufTtcclxuY29uc3QgY3JlYXRlSGVhZGVyQnV0dG9uc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlckJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlckJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMtY29udGFpbmVyJyk7XHJcbiAgICBoZWFkZXJCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNldHRpbmdzQnV0dG9uKCkpO1xyXG4gICAgaGVhZGVyQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMb2dpbkJ1dHRvbigpKTtcclxuICAgIHJldHVybiBoZWFkZXJCdXR0b25zQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvdGFiZXlvdS1sb2dvMS5wbmcnKTtcclxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcclxuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICByZXR1cm4gbG9nb0NvbnRhaW5lcjtcclxufTtcclxuY29uc3QgY3JlYXRlSGVhZGVyQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlckNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlckNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRlbnQtY29udGFpbmVyJyk7XHJcbiAgICBoZWFkZXJDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ28oKSk7XHJcbiAgICBoZWFkZXJDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlckJ1dHRvbnNDb250YWluZXIoKSk7XHJcbiAgICByZXR1cm4gaGVhZGVyQ29udGVudENvbnRhaW5lcjtcclxufTtcclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyQ29udGVudENvbnRhaW5lcigpKTtcclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcclxuIiwiaW1wb3J0IHNlY3Rpb25GYWN0b3J5IGZyb20gJy4vc2VjdGlvbic7XHJcbmltcG9ydCBkaXNwbGF5R3JvY2VyeUxpc3QgZnJvbSAnLi9ncm9jZXJ5TGlzdCc7XHJcbmltcG9ydCBkaXNwbGF5UmVjaXBlTGlzdCBmcm9tICcuL3JlY2lwZUxpc3QnO1xyXG5jb25zdCBjcmVhdGVNZWFsUGxhbnNCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG1lYWxQbGFuc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XHJcbiAgICBtZWFsUGxhbnNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZWFsLXBsYW5zLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgbWVhbFBsYW5zQnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lYWxQbGFuc0J1dHRvblRleHQudGV4dENvbnRlbnQgPSAnTWVhbCBQbGFucyc7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIG1lYWxQbGFuc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFuZ2xlLWRvd24nLCAnYXJyb3cnKTtcclxuICAgIG1lYWxQbGFuc0Fycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVhbC1wbGFucy1hcnJvdycpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lYWxQbGFuc0Fycm93LmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsLWZsaXAnKTtcclxuICAgIH0pO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFwcGVuZENoaWxkKG1lYWxQbGFuc0J1dHRvblRleHQpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFwcGVuZENoaWxkKG1lYWxQbGFuc0Fycm93KTtcclxuICAgIHJldHVybiBtZWFsUGxhbnNCdXR0b247XHJcbn07XHJcbmNvbnN0IGNyZWF0ZU1lYWxQbGFuc1N1Ym5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lYWxQbGFuc1N1Ym5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVhbFBsYW5zU3VibmF2LmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdicsICdoaWRkZW4nKTtcclxuICAgIGNvbnN0IHdlZWtTdWJuYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdlZWtTdWJuYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibmF2LWJ1dHRvbicpO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb25GYWN0b3J5KCkuY2xlYXJTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGlzdG9yeVN1Ym5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgaGlzdG9yeVN1Ym5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJuYXYtYnV0dG9uJyk7XHJcbiAgICBoaXN0b3J5U3VibmF2QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpc3RvcnknO1xyXG4gICAgbWVhbFBsYW5zU3VibmF2LmFwcGVuZENoaWxkKHdlZWtTdWJuYXZCdXR0b24pO1xyXG4gICAgbWVhbFBsYW5zU3VibmF2LmFwcGVuZENoaWxkKGhpc3RvcnlTdWJuYXZCdXR0b24pO1xyXG4gICAgcmV0dXJuIG1lYWxQbGFuc1N1Ym5hdjtcclxufTtcclxuY29uc3QgY3JlYXRlTWVhbFBsYW5zTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVhbFBsYW5zTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZWFsUGxhbnNOYXYuY2xhc3NMaXN0LmFkZCgnbmF2JywgJ21lYWwtcGxhbnMtbmF2Jyk7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNCdXR0b24gPSBjcmVhdGVNZWFsUGxhbnNCdXR0b24oKTtcclxuICAgIGNvbnN0IG1lYWxQbGFuc1N1Ym5hdiA9IGNyZWF0ZU1lYWxQbGFuc1N1Ym5hdigpO1xyXG4gICAgbWVhbFBsYW5zTmF2LmFwcGVuZENoaWxkKG1lYWxQbGFuc0J1dHRvbik7XHJcbiAgICBtZWFsUGxhbnNOYXYuYXBwZW5kQ2hpbGQobWVhbFBsYW5zU3VibmF2KTtcclxuICAgIG1lYWxQbGFuc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtZWFsUGxhbnNTdWJuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtZWFsUGxhbnNOYXY7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUdyb2NlcnlMaXN0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGdyb2NlcnlMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIGdyb2NlcnlMaXN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JvY2VyeS1saXN0LWJ1dHRvbicpO1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b25UZXh0LnRleHRDb250ZW50ID0gJ0dyb2NlcnkgTGlzdCc7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgZ3JvY2VyeUxpc3RBcnJvdy5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1hbmdsZS1kb3duJywgJ2Fycm93Jyk7XHJcbiAgICBncm9jZXJ5TGlzdEFycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JvY2VyeS1saXN0LWFycm93Jyk7XHJcbiAgICBncm9jZXJ5TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBncm9jZXJ5TGlzdEFycm93LmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsLWZsaXAnKTtcclxuICAgIH0pO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RCdXR0b25UZXh0KTtcclxuICAgIGdyb2NlcnlMaXN0QnV0dG9uLmFwcGVuZENoaWxkKGdyb2NlcnlMaXN0QXJyb3cpO1xyXG4gICAgcmV0dXJuIGdyb2NlcnlMaXN0QnV0dG9uO1xyXG59O1xyXG5jb25zdCBjcmVhdGVHcm9jZXJ5TGlzdFN1Ym5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0U3VibmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm9jZXJ5TGlzdFN1Ym5hdi5jbGFzc0xpc3QuYWRkKCdzdWJuYXYnLCAnaGlkZGVuJyk7XHJcbiAgICBjb25zdCB3ZWVrU3VibmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB3ZWVrU3VibmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdi1idXR0b24nKTtcclxuICAgIHdlZWtTdWJuYXZCdXR0b24udGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcclxuICAgIHdlZWtTdWJuYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LXNlY3Rpb24nKTtcclxuICAgICAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICAgICAgICBzZWN0aW9uRmFjdG9yeSgpLmNsZWFyU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICAgICAgZGlzcGxheUdyb2NlcnlMaXN0KHNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGlzdG9yeVN1Ym5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgaGlzdG9yeVN1Ym5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJuYXYtYnV0dG9uJyk7XHJcbiAgICBoaXN0b3J5U3VibmF2QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpc3RvcnknO1xyXG4gICAgZ3JvY2VyeUxpc3RTdWJuYXYuYXBwZW5kQ2hpbGQod2Vla1N1Ym5hdkJ1dHRvbik7XHJcbiAgICBncm9jZXJ5TGlzdFN1Ym5hdi5hcHBlbmRDaGlsZChoaXN0b3J5U3VibmF2QnV0dG9uKTtcclxuICAgIHJldHVybiBncm9jZXJ5TGlzdFN1Ym5hdjtcclxufTtcclxuY29uc3QgY3JlYXRlR3JvY2VyeUxpc3ROYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JvY2VyeUxpc3ROYXYuY2xhc3NMaXN0LmFkZCgnbmF2JywgJ2dyb2NlcnktbGlzdC1uYXYnKTtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0QnV0dG9uID0gY3JlYXRlR3JvY2VyeUxpc3RCdXR0b24oKTtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0U3VibmF2ID0gY3JlYXRlR3JvY2VyeUxpc3RTdWJuYXYoKTtcclxuICAgIGdyb2NlcnlMaXN0TmF2LmFwcGVuZENoaWxkKGdyb2NlcnlMaXN0QnV0dG9uKTtcclxuICAgIGdyb2NlcnlMaXN0TmF2LmFwcGVuZENoaWxkKGdyb2NlcnlMaXN0U3VibmF2KTtcclxuICAgIGdyb2NlcnlMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGdyb2NlcnlMaXN0U3VibmF2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZ3JvY2VyeUxpc3ROYXY7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZVJlY2lwZXNCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWNpcGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZWNpcGVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIHJlY2lwZXNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZWNpcGVzLWJ1dHRvbicpO1xyXG4gICAgcmVjaXBlc0J1dHRvbi50ZXh0Q29udGVudCA9ICdSZWNpcGVzJztcclxuICAgIHJlY2lwZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LXNlY3Rpb24nKTtcclxuICAgICAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICAgICAgICBzZWN0aW9uRmFjdG9yeSgpLmNsZWFyU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICAgICAgZGlzcGxheVJlY2lwZUxpc3Qoc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjaXBlc0J1dHRvbjtcclxufTtcclxuY29uc3QgY3JlYXRlUmVjaXBlc05hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZXNOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlY2lwZXNOYXYuY2xhc3NMaXN0LmFkZCgnbmF2JywgJ3JlY2lwZXMtbmF2Jyk7XHJcbiAgICByZWNpcGVzTmF2LmFwcGVuZENoaWxkKGNyZWF0ZVJlY2lwZXNCdXR0b24oKSk7XHJcbiAgICByZXR1cm4gcmVjaXBlc05hdjtcclxufTtcclxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWNvbnRhaW5lcicpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lYWxQbGFuc05hdigpKTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVHcm9jZXJ5TGlzdE5hdigpKTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVSZWNpcGVzTmF2KCkpO1xyXG4gICAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2O1xyXG4iLCJjb25zdCBzYW1wbGVSZWNpcGUgPSB7XHJcbiAgICBuYW1lOiBgUm95IENob2kncyBBZ2xpbyBlIE9saW9gLFxyXG4gICAgaW5ncmVkaWVudExpc3Q6IFtcclxuICAgICAgICB7IG5hbWU6ICdwYXJtZXNhbiBjaGVlc2UnLCBhbW91bnQ6IDAuNSwgdW5pdDogJ0MnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbGVtb24nLCBhbW91bnQ6IDEsIHVuaXQ6ICdwYycgfSxcclxuICAgICAgICB7IG5hbWU6ICdwYXJzbGV5JywgYW1vdW50OiAxLCB1bml0OiAnYnVuY2gnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnZ2FybGljJywgYW1vdW50OiAxMCwgdW5pdDogJ2Nsb3ZlcycgfSxcclxuICAgICAgICB7IG5hbWU6ICdvbGl2ZSBvaWwnLCBhbW91bnQ6IDEsIHVuaXQ6ICdDJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3NwYWdoZXR0aScsIGFtb3VudDogNDUwLCB1bml0OiAnZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdjaGlsaSBmbGFrZXMnLCBhbW91bnQ6IDEsIHVuaXQ6ICd0YnNwJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3NhbHQnLCBhbW91bnQ6IDEsIHVuaXQ6ICd0YnNwJyB9LFxyXG4gICAgXSxcclxuICAgIGluc3RydWN0aW9uczogW1xyXG4gICAgICAgIGBCcmluZyBhIHBvdCBvZiB3YXRlciB0byBhIGJvaWwsIGFuZCBhZGQgMS0yIHRzcCBvZiBzYWx0IGFuZCAxIHRic3Agb2Ygb2xpdmUgb2lsLmAsXHJcbiAgICAgICAgYFdhc2ggYW5kIGRlLXN0ZW0gdGhlIHBhcnNsZXkuIENob3AgdGhlIHBhcnNsZXkgd2l0aCBhIHJvdWdoIGNoaWZmb25hZGUuYCxcclxuICAgICAgICBgUGVlbCBnYXJsaWMgYW5kIHNsaWNlIGludG8gdGhpbiBkaXNjcy5gLFxyXG4gICAgICAgIGBBZGQgdGhlIHNwYWdoZXR0aSB0byB0aGUgYm9pbGluZyB3YXRlciBhbmQgY29vayB1bnRpbCBhbCBkZW50ZSBvciB0byBkZXNpcmVkIGRvbmVuZXNzICh+MTAgbWludXRlcykuYCxcclxuICAgICAgICBgRHJhaW4gdGhlIHBhc3RhIGFuZCBzZXQgYXNpZGUsIHNhdmluZyBhYm91dCAxIGN1cCBvZiB0aGUgcGFzdGEgd2F0ZXIgYW5kIGFsc28gc2V0dGluZyB0aGlzIGFzaWRlLmAsXHJcbiAgICAgICAgYEluIGEgaGVhdnktYm90dG9tZWQgc2tpbGxldCBvdmVyIG1lZGl1bSBoZWF0LCBhZGQgYWJvdXQgwr0gY3VwIG9mIG9saXZlIG9pbCAob3IgZW5vdWdoIHRvIGNvYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFuIGFuZCBjb3ZlciBhbGwgdGhlIGdhcmxpYykuYCxcclxuICAgICAgICBgQWRkIGdhcmxpYyB0byB0aGUgcGFuIGFuZCBjb29rIHVudGlsIGZyYWdyYW50IGFuZCBqdXN0IGJyb3duaW5nLCBhYm91dCAzIG1pbnV0ZXMuYCxcclxuICAgICAgICBgQWRkIGNoaWxpIGZsYWtlcyBhbmQgYWxsIGJ1dCAyLTMgdGJzcHMgb2YgdGhlIGNob3BwZWQgcGFyc2xleSB0byB0aGUgcGFuIGFuZCBjb29rIGZvciBhbm90aGVyIDMwIHNlY29uZHMgb3Igc28uYCxcclxuICAgICAgICBgQWRkIHRoZSBjb29rZWQgcGFzdGEgYW5kIHN0aXIgaXQgaW50byB0aGUgb2lsIGFuZCBnYXJsaWMuIFRoZW4sIGFkZCB0aGUgc2F2ZWQgY3VwIG9mIHBhc3RhIHdhdGVyLmAsXHJcbiAgICAgICAgYEFsbG93IGV2ZXJ5dGhpbmcgdG8gaGVhdCBhbmQgaW5jb3Jwb3JhdGUsIHRoZW4gcmVtb3ZlIGZyb20gdGhlIGhlYXQuYCxcclxuICAgICAgICBgQWRkIDEtMiB0YnNwIG9mIGJ1dHRlciB0byB0aGUgcGFzdGEgYW5kIHRoZSBqdWljZSBvZiBhIGxlbW9uIGFuZCBzdGlyLmAsXHJcbiAgICAgICAgYFVzZSBhIGxhcmdlIGZvcmsgdG8gdHdpc3QgdGhlIHNwYWdoZXR0aSBvbnRvIHlvdXIgcGxhdGVzLmAsXHJcbiAgICAgICAgYFRvcCB3aXRoIHNvbWUgb2YgdGhlIGdhcmxpY2t5IG9pbCBmcm9tIHRoZSBwYW4sIGdyYXRlZCBwYXJtZXNhbiBjaGVlc2UsIGFuZCBzb21lIG9mIHRoZSBsZWZ0b3ZlciBjaG9wcGVkIHBhcnNsZXkuYCxcclxuICAgICAgICBgU2VydmUgaW1tZWRpYXRlbHkuYCxcclxuICAgIF0sXHJcbn07XHJcbmNvbnN0IHJlY2lwZUZhY3RvcnkgPSAobmFtZSkgPT4ge1xyXG4gICAgbGV0IHJlY2lwZU5hbWUgPSBuYW1lO1xyXG4gICAgbGV0IGluZ3JlZGllbnRzID0gW107XHJcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gW107XHJcbiAgICBjb25zdCBnZW5lcmF0ZUluZ3JlZGllbnRMaXN0ID0gKGluZ3JlZGllbnQpID0+IHtcclxuICAgICAgICBsZXQgaW5ncmVkaWVudHNMaXN0ID0gW107XHJcbiAgICAgICAgaW5ncmVkaWVudHNMaXN0LnB1c2goaW5ncmVkaWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnRzTGlzdDtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRJbnN0cnVjdGlvbnNGcm9tSW5wdXQgPSAoaW5zdHJ1Y3Rpb24pID0+IHtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zQXJyYXkgPSBbXTtcclxuICAgICAgICBpbnN0cnVjdGlvbnNBcnJheS5wdXNoKGluc3RydWN0aW9uKTtcclxuICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb25zQXJyYXk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgZ2V0SW5zdHJ1Y3Rpb25zRnJvbUlucHV0IH07XHJcbn07XHJcbmNvbnN0IGFkZFRvUmVjaXBlQXJyYXkgPSAocmVjaXBlKSA9PiB7XHJcbiAgICBsZXQgcmVjaXBlQXJyYXkgPSBbXTtcclxuICAgIHJlY2lwZUFycmF5LnB1c2gocmVjaXBlKTtcclxuICAgIGNvbnNvbGUubG9nKHJlY2lwZUFycmF5KTtcclxuICAgIHJldHVybiByZWNpcGVBcnJheTtcclxufTtcclxuY29uc3QgZ2V0UmVjaXBlQXJyYXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWRkVG9SZWNpcGVBcnJheShzYW1wbGVSZWNpcGUpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBnZXRSZWNpcGVBcnJheTtcclxuIiwiaW1wb3J0IGdldFJlY2lwZUFycmF5IGZyb20gJy4vcmVjaXBlJztcclxuaW1wb3J0IGRpc3BsYXlSZWNpcGVNb2RhbCBmcm9tICcuL3JlY2lwZU1vZGFsJztcclxuY29uc3QgcmVjaXBlQXJyYXkgPSBnZXRSZWNpcGVBcnJheSgpO1xyXG5jb25zdCBnZW5lcmF0ZVBhZ2VTdWJoZWFkaW5nID0gKHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcGFnZVN1YmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgcGFnZVN1YmhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFnZS1zdWJoZWFkaW5nJyk7XHJcbiAgICBwYWdlU3ViaGVhZGluZy50ZXh0Q29udGVudCA9IHN0cmluZztcclxuICAgIHJldHVybiBwYWdlU3ViaGVhZGluZztcclxufTtcclxuY29uc3QgZ2VuZXJhdGVGaWx0ZXJDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpbHRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtZmlsdGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbWFnbmlmeWluZy1nbGFzcycpO1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgY29uc3Qgc29ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3Qgc29ydEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBzb3J0SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1hcnJvdy1kb3duLWEteicpO1xyXG4gICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xyXG4gICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XHJcbiAgICBzb3J0QnV0dG9uLmFwcGVuZENoaWxkKHNvcnRJY29uKTtcclxuICAgIGZpbHRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xyXG4gICAgZmlsdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRCdXR0b24pO1xyXG4gICAgcmV0dXJuIGZpbHRlckNvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVMaXN0ID0gKHJlY2lwZUFycmF5KSA9PiB7XHJcbiAgICBjb25zdCByZWNpcGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHJlY2lwZUxpc3QuY2xhc3NMaXN0LmFkZCgncmVjaXBlLWxpc3QnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjaXBlQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LWl0ZW0nKTtcclxuICAgICAgICBjb25zdCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheVJlY2lwZU1vZGFsKHJlY2lwZUFycmF5W2ldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcclxuICAgICAgICBsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gcmVjaXBlQXJyYXlbaV0ubmFtZTtcclxuICAgICAgICByZWNpcGVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZWNpcGVMaXN0O1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZVJlY2lwZUxpc3RDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWNpcGVMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZWNpcGVMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC1jb250YWluZXInLCAncmVjaXBlLWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICByZWNpcGVMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlRmlsdGVyQ29udGFpbmVyKCkpO1xyXG4gICAgcmVjaXBlTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZUxpc3QocmVjaXBlQXJyYXkpKTtcclxuICAgIHJldHVybiByZWNpcGVMaXN0Q29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZU5ld1JlY2lwZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1JlY2lwZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmV3UmVjaXBlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gICAgbmV3UmVjaXBlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXJlY2lwZS1idXR0b24nKTtcclxuICAgIG5ld1JlY2lwZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBOZXcgUmVjaXBlYDtcclxuICAgIHJldHVybiBuZXdSZWNpcGVCdXR0b247XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlSZWNpcGVMaXN0ID0gKHNlY3Rpb24pID0+IHtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQYWdlU3ViaGVhZGluZyhgTXkgUmVjaXBlc2ApKTtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVSZWNpcGVMaXN0Q29udGFpbmVyKCkpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZU5ld1JlY2lwZUJ1dHRvbigpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVJlY2lwZUxpc3Q7XHJcbiIsImNvbnN0IGdlbmVyYXRlUmVjaXBlQ2xvc2VCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWNpcGVDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmVjaXBlQ2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVjaXBlLW1vZGFsLWNsb3NlLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXhtYXJrJyk7XHJcbiAgICByZWNpcGVDbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xyXG4gICAgcmVjaXBlQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjaXBlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlLW1vZGFsJyk7XHJcbiAgICAgICAgaWYgKHJlY2lwZU1vZGFsKSB7XHJcbiAgICAgICAgICAgIHJlY2lwZU1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlY2lwZUNsb3NlQnV0dG9uO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZVJlY2lwZUltYWdlID0gKCkgPT4geyB9O1xyXG5jb25zdCBnZW5lcmF0ZVJlY2lwZU1vZGFsSGVhZGluZyA9IChyZWNpcGUpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZU1vZGFsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICByZWNpcGVNb2RhbEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFnZS1zdWJoZWFkaW5nJyk7XHJcbiAgICByZWNpcGVNb2RhbEhlYWRpbmcudGV4dENvbnRlbnQgPSByZWNpcGUubmFtZTtcclxuICAgIHJldHVybiByZWNpcGVNb2RhbEhlYWRpbmc7XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlUmVjaXBlSGVhZGVyID0gKHJlY2lwZSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVjaXBlLWhlYWRlci1jb250YWluZXInKTtcclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVJlY2lwZUNsb3NlQnV0dG9uKCkpO1xyXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUmVjaXBlTW9kYWxIZWFkaW5nKHJlY2lwZSkpO1xyXG4gICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVNb2RhbEluZ3JlZGllbnRDb250YWluZXJzID0gKGluZ3JlZGllbnQpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsSW5ncmVkaWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxJbmdyZWRpZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZS1pbmdyZWRpZW50LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaW5ncmVkaWVudEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbmdyZWRpZW50QW1vdW50LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnQtYW1vdW50Jyk7XHJcbiAgICBpbmdyZWRpZW50QW1vdW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgIGluZ3JlZGllbnRBbW91bnQudmFsdWVBc051bWJlciA9IGluZ3JlZGllbnQuYW1vdW50O1xyXG4gICAgaW5ncmVkaWVudEFtb3VudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICBjb25zdCBpbmdyZWRpZW50VW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbmdyZWRpZW50VW5pdC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50LXVuaXQnKTtcclxuICAgIGluZ3JlZGllbnRVbml0LnZhbHVlID0gaW5ncmVkaWVudC51bml0O1xyXG4gICAgaW5ncmVkaWVudFVuaXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgY29uc3QgaW5ncmVkaWVudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5ncmVkaWVudE5hbWUuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudC1uYW1lJyk7XHJcbiAgICBpbmdyZWRpZW50TmFtZS52YWx1ZSA9IGluZ3JlZGllbnQubmFtZTtcclxuICAgIGluZ3JlZGllbnROYW1lLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIG1vZGFsSW5ncmVkaWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyZWRpZW50QW1vdW50KTtcclxuICAgIG1vZGFsSW5ncmVkaWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyZWRpZW50VW5pdCk7XHJcbiAgICBtb2RhbEluZ3JlZGllbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudE5hbWUpO1xyXG4gICAgcmV0dXJuIG1vZGFsSW5ncmVkaWVudENvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVNb2RhbEluZ3JlZGllbnRMaXN0Q29udGFpbmVyID0gKHJlY2lwZSkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWxJbmdyZWRpZW50TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxJbmdyZWRpZW50TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50LWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzdWJoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHN1YmhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncmVjaXBlLXN1YmhlYWRpbmcnKTtcclxuICAgIHN1YmhlYWRpbmcudGV4dENvbnRlbnQgPSBgSW5ncmVkaWVudHNgO1xyXG4gICAgbW9kYWxJbmdyZWRpZW50TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJoZWFkaW5nKTtcclxuICAgIGZvciAoY29uc3QgaW5ncmVkaWVudCBvZiByZWNpcGUuaW5ncmVkaWVudExpc3QpIHtcclxuICAgICAgICBtb2RhbEluZ3JlZGllbnRMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTW9kYWxJbmdyZWRpZW50Q29udGFpbmVycyhpbmdyZWRpZW50KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kYWxJbmdyZWRpZW50TGlzdENvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVSZWNpcGVNb2RhbFNlY3Rpb24gPSAocmVjaXBlKSA9PiB7XHJcbiAgICBjb25zdCByZWNpcGVNb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICByZWNpcGVNb2RhbFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncmVjaXBlLW1vZGFsJyk7XHJcbiAgICByZWNpcGVNb2RhbFNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdyZWNpcGUtbW9kYWwnKTtcclxuICAgIHJlY2lwZU1vZGFsU2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZVJlY2lwZUhlYWRlcihyZWNpcGUpKTtcclxuICAgIHJlY2lwZU1vZGFsU2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZU1vZGFsSW5ncmVkaWVudExpc3RDb250YWluZXIocmVjaXBlKSk7XHJcbiAgICByZXR1cm4gcmVjaXBlTW9kYWxTZWN0aW9uO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5UmVjaXBlTW9kYWwgPSAocmVjaXBlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdlbmVyYXRlUmVjaXBlTW9kYWxTZWN0aW9uKHJlY2lwZSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UmVjaXBlTW9kYWw7XHJcbiIsImNvbnN0IHNlY3Rpb25GYWN0b3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFyU2VjdGlvbiA9IChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBjcmVhdGVTZWN0aW9uLCBjbGVhclNlY3Rpb24gfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbkZhY3Rvcnk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgc2VjdGlvbkZhY3RvcnkgZnJvbSAnLi9zZWN0aW9uJztcclxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5jb25zdCBjcmVhdGVQYWdlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgcGFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhZ2UtY29udGFpbmVyJyk7XHJcbiAgICByZXR1cm4gcGFnZUNvbnRhaW5lcjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVQYWdlRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VDb250YWluZXIoKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25GYWN0b3J5KCkuY3JlYXRlU2VjdGlvbigpO1xyXG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufTtcclxuZ2VuZXJhdGVQYWdlRWxlbWVudHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9