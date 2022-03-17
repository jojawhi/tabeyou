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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--background-3: hsl(0 0% 50% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tdisplay: block;\r\n\tmargin-left: 1rem;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.subnav-button {\r\n\tpadding: 0.25rem 0;\r\n\tfont-size: var(--step--1);\r\n\ttext-align: left;\r\n\tcolor: var(--font-color-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.vertical-flip {\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n\r\n.appear {\r\n\tanimation: appear 3s forward;\r\n}\r\n\r\n@keyframes appear {\r\n\t0% {\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n\r\n*/\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\ttop: 0;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\theight: min(70vh, 1000px);\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.cell-button {\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.cell-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-item button {\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-item button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 76% 12% 12%;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text-container input,\r\n.recipe-ingredient-container input {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.grocery-list-amount {\r\n\twidth: 3rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tmargin-bottom: 2rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-list-container button {\r\n\tfont-size: inherit;\r\n\tfont-weight: 600;\r\n\tcolor: inherit;\r\n}\r\n\r\n.recipe-filter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-filter-container button {\r\n\tpadding: 0.125rem;\r\n\tfont-size: var(--step-0);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-filter-container button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 0 0.3125rem;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-modal-close-button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.ingredient-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 15% 20% 65%;\r\n\tfont-size: var(--step-0);\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n\r\n.ingredient-amount {\r\n\ttext-align: right;\r\n}\r\n\r\n.ingredient-unit {\r\n\ttext-align: left;\r\n}\r\n\r\n.ingredient-name {\r\n\tpadding-left: 0.25rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Coda&display=swap');\r\n\r\n:root {\r\n\t--font-1: 'Coda', sans-serif;\r\n\t--font-2: 'Poppins', sans-serif;\r\n\t--font-color-1: hsl(50, 20%, 95%);\r\n\t--background-1: hsl(0, 0%, 17%);\r\n\t--background-2: hsl(0 0% 17% / 0.5);\r\n\t--background-3: hsl(0 0% 50% / 0.5);\r\n\t--red-1: hsl(22, 95%, 45%);\r\n\t--red-2: hsl(22, 60%, 70%);\r\n\t--green-1: hsl(104, 35%, 70%);\r\n\t--green-2: hsl(104, 70%, 85%);\r\n\t--yellow-1: hsl(50, 80%, 65%);\r\n\t--yellow-2: hsl(50, 70%, 75%);\r\n\t--step--2: clamp(0.69rem, 0.8rem + -0.57vw, 0.38rem);\r\n\t--step--1: clamp(0.83rem, 0.86rem + -0.15vw, 0.75rem);\r\n\t--step-0: clamp(1rem, 0.83rem + 0.89vw, 1.5rem);\r\n\t--step-1: clamp(1.2rem, 0.6rem + 3.2vw, 3rem);\r\n\t--step-2: clamp(1.44rem, -0.08rem + 8.11vw, 6rem);\r\n\t--step-3: clamp(1.73rem, -1.7rem + 18.26vw, 12rem);\r\n\t--step-4: clamp(2.07rem, -5.23rem + 38.98vw, 24rem);\r\n\t--step-5: clamp(2.49rem, -12.68rem + 80.91vw, 48rem);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-size: var(--step-0);\r\n\tbackground: var(--background-1);\r\n}\r\n\r\n.header {\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.header-content-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 2rem 1rem 1rem 2rem;\r\n}\r\n\r\n.logo-container {\r\n\tmargin-bottom: -1rem;\r\n}\r\n\r\n.logo {\r\n\twidth: 5rem;\r\n}\r\n\r\n.header-buttons-container {\r\n\tdisplay: flex;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.button {\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--red-1);\r\n\tpadding: 0.5rem 2rem;\r\n\tborder-radius: 0.25rem;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.button:hover {\r\n\tbackground-color: var(--green-2);\r\n}\r\n\r\n.header-button {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.settings-button-container {\r\n\tdisplay: flex;\r\n}\r\n\r\n.settings-button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n/*Landing Page*/\r\n\r\n.landing-page-container {\r\n\t/* padding: max(10vh, 1rem) 1.5rem; /* top and bottom set to larger of 3vh or 1rem, left and right 1.5rem */\r\n\tbackground: var(--background-1) url(images/food2.jpg) no-repeat fixed center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.hero-section {\r\n\theight: calc(100vh - 4.95rem);\r\n\twidth: 100%;\r\n\tpadding: 15vh 0;\r\n\tbackdrop-filter: blur(8px);\r\n}\r\n\r\n.hero-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\tpadding: 10vh 2rem;\r\n\tbackground-color: var(--background-2);\r\n\tcolor: var(--font-color-1);\r\n}\r\n\r\n.page-heading {\r\n\tfont-family: var(--font-1);\r\n\tfont-size: var(--step-2);\r\n\t/* 3 min, 5 max, 10vw+1 ideal, the +1 is in case of zooming in/out */\r\n\tline-height: 1;\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.page-subheading {\r\n\tfont-size: var(--step-0);\r\n\tfont-weight: 400;\r\n}\r\n\r\n.feature-section {\r\n\tpadding: 2rem;\r\n\tbackground-color: var(--background-1);\r\n}\r\n\r\n.feature-content {\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n}\r\n\r\n.footer {\r\n\tdisplay: flex;\r\n\tpadding: 2rem 0;\r\n\tfont-size: var(--step--1);\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.footer-content {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/*Nav*/\r\n\r\n.nav {\r\n\tflex: 1 1 28%;\r\n\tpadding: 1rem 1rem 1rem 2rem;\r\n}\r\n\r\n.nav-container a {\r\n\tcolor: var(--font-color-1);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.nav {\r\n\tfont-family: var(--font-2);\r\n}\r\n\r\n.nav-button {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: min(8rem, 100%);\r\n\tpadding: 0.125rem 0 0.125rem 0.375rem;\r\n\tfont-size: var(--step--1);\r\n\tfont-weight: 600;\r\n\tcolor: var(--font-color-1);\r\n\tborder-left: 2px solid transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.arrow {\r\n\tdisplay: block;\r\n\tmargin-left: 1rem;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\n#meal-plans-button:hover {\r\n\tcolor: var(--green-1);\r\n\tborder-left: 2px solid var(--green-1);\r\n}\r\n\r\n#grocery-list-button:hover {\r\n\tcolor: var(--yellow-1);\r\n\tborder-left: 2px solid var(--yellow-1);\r\n}\r\n\r\n#recipes-button:hover {\r\n\tcolor: var(--red-1);\r\n\tborder-left: 2px solid var(--red-1);\r\n}\r\n\r\n.subnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.subnav-button {\r\n\tpadding: 0.25rem 0;\r\n\tfont-size: var(--step--1);\r\n\ttext-align: left;\r\n\tcolor: var(--font-color-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.subnav-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.vertical-flip {\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n\r\n.appear {\r\n\tanimation: appear 3s forward;\r\n}\r\n\r\n@keyframes appear {\r\n\t0% {\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n\r\n*/\r\n\r\n/*Meal Plan Page*/\r\n\r\n.page-container {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tflex-wrap: wrap;\r\n\twidth: min(90%, 1000px);\r\n\tmargin-inline: auto;\r\n\ttop: 0;\r\n}\r\n\r\n.content-page {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.content-section {\r\n\tflex: 1 1 72%;\r\n\theight: min(70vh, 1000px);\r\n\tpadding: 0.625rem 1rem 40vh 1rem;\r\n\tbackground-color: var(--background-1);\r\n\tborder-left: solid 2px var(--green-1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.meal-plan-container {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 35% 65%;\r\n\tgrid-template-columns: repeat(7, 1fr);\r\n\tmargin: 2rem auto;\r\n\ttext-align: center;\r\n\tfont-size: var(--step--2);\r\n\tborder-radius: 20px;\r\n\tbackground-image: linear-gradient(to right, var(--green-2), var(--yellow-2), var(--red-2));\r\n}\r\n\r\n.meal-plan-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0;\r\n\tborder: 1px solid var(--background-1);\r\n\tcolor: var(--background-1);\r\n}\r\n\r\n.meal-plan-cell {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 1rem 0.25rem;\r\n\tfont-weight: 600;\r\n\tborder: solid 1px var(--background-1);\r\n\tbackground-color: var(--font-color-1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.cell-button {\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.cell-button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.top-left-corner {\r\n\tborder-radius: 20px 0 0 0;\r\n}\r\n\r\n.top-right-corner {\r\n\tborder-radius: 0 20px 0 0;\r\n}\r\n\r\n.bottom-left-corner {\r\n\tborder-radius: 0 0 0 20px;\r\n}\r\n\r\n.bottom-right-corner {\r\n\tborder-radius: 0 0 20px 0;\r\n}\r\n\r\n/*Grocery List*/\r\n\r\n.grocery-list-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-top: 1.5rem;\r\n\tpadding: 1rem;\r\n\tborder: solid 2px var(--font-color-1);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.grocery-list-item {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tborder-bottom: solid 1px var(--font-color-1);\r\n}\r\n\r\n.grocery-list-item button {\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-item button:hover {\r\n\tcolor: var(--green-1);\r\n}\r\n\r\n.grocery-list-text-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 76% 12% 12%;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tpadding: 0 2rem 0 0;\r\n\tfont-size: var(--step--1);\r\n}\r\n\r\n.grocery-list-text-container input,\r\n.recipe-ingredient-container input {\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n\r\n.grocery-list-text {\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.grocery-list-amount {\r\n\twidth: 3rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.checkbox {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*Hide default checkbox*/\r\n.checkbox input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\theight: 0;\r\n\twidth: 0;\r\n}\r\n\r\n/*Create custom checkbox*/\r\n.checkmark {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 0.85rem;\r\n\twidth: 0.85rem;\r\n\tborder: 1px solid var(--font-color-1);\r\n\tborder-radius: 50%;\r\n\tbackground-color: transparent;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.checkbox:hover input ~ .checkmark {\r\n\tbackground-color: var(--green-1);\r\n}\r\n\r\n.checkmark::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n\r\n/*Change bg color when checked*/\r\n.checkbox input:checked ~ .checkmark {\r\n\tbackground-color: var(--background-2);\r\n}\r\n\r\n/*Show custom checkmark when checked*/\r\n.checkbox input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n\r\n/*Checkmark styles*/\r\n.checkbox .checkmark:after {\r\n\tleft: 0.25rem;\r\n\theight: 0.625rem;\r\n\twidth: 0.3rem;\r\n\tborder: solid var(--green-1);\r\n\tborder-width: 0 3px 3px 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.grocery-list-delete-button {\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\topacity: 0.5;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.grocery-list-delete-button:hover {\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n/*Recipe List Page*/\r\n\r\n.recipe-list-container {\r\n\tmargin-bottom: 2rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-list-container button {\r\n\tfont-size: inherit;\r\n\tfont-weight: 600;\r\n\tcolor: inherit;\r\n}\r\n\r\n.recipe-filter-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1rem;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-filter-container button {\r\n\tpadding: 0.125rem;\r\n\tfont-size: var(--step-0);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-filter-container button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.search-container {\r\n\tdisplay: flex;\r\n\twidth: 60%;\r\n\talign-items: center;\r\n\tpadding: 0.25rem 0.5rem;\r\n\tborder-radius: 1rem;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n.search-container input {\r\n\twidth: 90%;\r\n\tmargin-left: 0.5rem;\r\n\tfont-family: inherit;\r\n\tfont-size: var(--step--2);\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: var(--font-color-1);\r\n}\r\n\r\n/*Recipe Modal*/\r\n\r\n.recipe-modal {\r\n\tposition: absolute;\r\n\talign-self: center;\r\n\ttop: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: min(100%, 20rem);\r\n\tpadding: 1rem;\r\n\tfont-size: var(--step--1);\r\n\tcolor: var(--font-color-1);\r\n\tborder: 2px solid var(--font-color-1);\r\n\tborder-radius: 20px;\r\n\tbackground-color: var(--background-1);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.recipe-header-container {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tborder-radius: 20px 20px 0 0;\r\n\tborder-bottom: 2px solid var(--font-color-1);\r\n}\r\n\r\n.recipe-img {\r\n\tmax-width: 60%;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 2px 2px 10px -4px var(--font-color-1);\r\n}\r\n\r\n.recipe-modal .page-subheading {\r\n\tfont-weight: 600;\r\n\tcolor: var(--red-1);\r\n}\r\n\r\n.recipe-modal-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 0 0.3125rem;\r\n\tfont-size: var(--step-0);\r\n\tcolor: var(--red-1);\r\n\tborder-radius: 50%;\r\n\ttransition: all 300ms;\r\n}\r\n\r\n.recipe-modal-close-button:hover {\r\n\tbackground-color: var(--background-3);\r\n}\r\n\r\n.ingredient-list-container {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0 0 20px 20px;\r\n}\r\n\r\n.recipe-ingredient-container {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 15% 20% 65%;\r\n\tfont-size: var(--step-0);\r\n}\r\n\r\n.recipe-instructions-container {\r\n\tpadding: 1rem;\r\n}\r\n\r\n.ingredient-amount {\r\n\ttext-align: right;\r\n}\r\n\r\n.ingredient-unit {\r\n\ttext-align: left;\r\n}\r\n\r\n.ingredient-name {\r\n\tpadding-left: 0.25rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/mealPlan.ts":
/*!*************************!*\
  !*** ./src/mealPlan.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const daysArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const generatePageSubheading = (string) => {
    const pageSubheading = document.createElement('h3');
    pageSubheading.classList.add('page-subheading');
    pageSubheading.textContent = string;
    return pageSubheading;
};
const generateMealPlanHeader = (day) => {
    const header = document.createElement('div');
    header.classList.add('meal-plan-header');
    if (daysArray.indexOf(day) === 0) {
        header.classList.add('top-left-corner');
    }
    else if (daysArray.indexOf(day) === 6) {
        header.classList.add('top-right-corner');
    }
    const headerText = document.createElement('h2');
    headerText.classList.add('meal-plan-header-text');
    headerText.textContent = day;
    header.appendChild(headerText);
    return header;
};
const generateMealPlanCells = (day) => {
    const cell = document.createElement('div');
    cell.classList.add('meal-plan-cell');
    if (daysArray.indexOf(day) === 0) {
        cell.classList.add('bottom-left-corner');
    }
    else if (daysArray.indexOf(day) === 6) {
        cell.classList.add('bottom-right-corner');
    }
    const cellButton = document.createElement('button');
    cellButton.classList.add('cell-button');
    const cellIcon = document.createElement('i');
    cellIcon.classList.add('fa-solid', 'fa-circle-plus');
    cellButton.appendChild(cellIcon);
    cell.appendChild(cellButton);
    return cell;
};
const generateMealPlanContainer = () => {
    const mealPlanContainer = document.createElement('div');
    mealPlanContainer.classList.add('meal-plan-container');
    for (const day of daysArray) {
        mealPlanContainer.appendChild(generateMealPlanHeader(day));
    }
    for (const day of daysArray) {
        mealPlanContainer.appendChild(generateMealPlanCells(day));
    }
    return mealPlanContainer;
};
const displayMealPlan = (section) => {
    section.appendChild(generatePageSubheading(`This week's meal plan`));
    section.appendChild(generateMealPlanContainer());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMealPlan);


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
/* harmony import */ var _mealPlan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mealPlan */ "./src/mealPlan.ts");




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
            (0,_mealPlan__WEBPACK_IMPORTED_MODULE_3__["default"])(section);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxvQkFBb0IsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FB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Ozs7Ozs7Ozs7Ozs7QUNUNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoRDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REUTtBQUNRO0FBQ0Y7QUFDSjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBYztBQUMxQixZQUFZLHFEQUFlO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBYztBQUMxQixZQUFZLHdEQUFrQjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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RztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ1M7QUFDUztBQUNIO0FBQ0E7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQVk7QUFDMUM7QUFDQSw4QkFBOEIsbURBQVk7QUFDMUMsOEJBQThCLGdEQUFTO0FBQ3ZDLG9CQUFvQixvREFBYztBQUNsQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YWJleW91Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvZm9vdGVyLnRzIiwid2VicGFjazovL3RhYmV5b3UvLi9zcmMvZ3JvY2VyeUxpc3QudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9tZWFsUGxhbi50cyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL25hdi50cyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL3JlY2lwZS50cyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL3JlY2lwZUxpc3QudHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS8uL3NyYy9yZWNpcGVNb2RhbC50cyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL3NlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90YWJleW91L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RhYmV5b3Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGFiZXlvdS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90YWJleW91Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZm9vZDIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDQwMCZmYW1pbHk9Q29kYSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcblxcdC0tZm9udC0xOiAnQ29kYScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0LS1mb250LTI6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHQtLWZvbnQtY29sb3ItMTogaHNsKDUwLCAyMCUsIDk1JSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTE6IGhzbCgwLCAwJSwgMTclKTtcXHJcXG5cXHQtLWJhY2tncm91bmQtMjogaHNsKDAgMCUgMTclIC8gMC41KTtcXHJcXG5cXHQtLWJhY2tncm91bmQtMzogaHNsKDAgMCUgNTAlIC8gMC41KTtcXHJcXG5cXHQtLXJlZC0xOiBoc2woMjIsIDk1JSwgNDUlKTtcXHJcXG5cXHQtLXJlZC0yOiBoc2woMjIsIDYwJSwgNzAlKTtcXHJcXG5cXHQtLWdyZWVuLTE6IGhzbCgxMDQsIDM1JSwgNzAlKTtcXHJcXG5cXHQtLWdyZWVuLTI6IGhzbCgxMDQsIDcwJSwgODUlKTtcXHJcXG5cXHQtLXllbGxvdy0xOiBoc2woNTAsIDgwJSwgNjUlKTtcXHJcXG5cXHQtLXllbGxvdy0yOiBoc2woNTAsIDcwJSwgNzUlKTtcXHJcXG5cXHQtLXN0ZXAtLTI6IGNsYW1wKDAuNjlyZW0sIDAuOHJlbSArIC0wLjU3dncsIDAuMzhyZW0pO1xcclxcblxcdC0tc3RlcC0tMTogY2xhbXAoMC44M3JlbSwgMC44NnJlbSArIC0wLjE1dncsIDAuNzVyZW0pO1xcclxcblxcdC0tc3RlcC0wOiBjbGFtcCgxcmVtLCAwLjgzcmVtICsgMC44OXZ3LCAxLjVyZW0pO1xcclxcblxcdC0tc3RlcC0xOiBjbGFtcCgxLjJyZW0sIDAuNnJlbSArIDMuMnZ3LCAzcmVtKTtcXHJcXG5cXHQtLXN0ZXAtMjogY2xhbXAoMS40NHJlbSwgLTAuMDhyZW0gKyA4LjExdncsIDZyZW0pO1xcclxcblxcdC0tc3RlcC0zOiBjbGFtcCgxLjczcmVtLCAtMS43cmVtICsgMTguMjZ2dywgMTJyZW0pO1xcclxcblxcdC0tc3RlcC00OiBjbGFtcCgyLjA3cmVtLCAtNS4yM3JlbSArIDM4Ljk4dncsIDI0cmVtKTtcXHJcXG5cXHQtLXN0ZXAtNTogY2xhbXAoMi40OXJlbSwgLTEyLjY4cmVtICsgODAuOTF2dywgNDhyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1ncmVlbi0yKSwgdmFyKC0teWVsbG93LTIpLCB2YXIoLS1yZWQtMikpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG5cXHR3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncy1idXR0b24tY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtYnV0dG9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLypMYW5kaW5nIFBhZ2UqL1xcclxcblxcclxcbi5sYW5kaW5nLXBhZ2UtY29udGFpbmVyIHtcXHJcXG5cXHQvKiBwYWRkaW5nOiBtYXgoMTB2aCwgMXJlbSkgMS41cmVtOyAvKiB0b3AgYW5kIGJvdHRvbSBzZXQgdG8gbGFyZ2VyIG9mIDN2aCBvciAxcmVtLCBsZWZ0IGFuZCByaWdodCAxLjVyZW0gKi9cXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLTEpIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1zZWN0aW9uIHtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljk1cmVtKTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAxNXZoIDA7XFxyXFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRlbnQge1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0cGFkZGluZzogMTB2aCAycmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMik7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWhlYWRpbmcge1xcclxcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXHJcXG5cXHQvKiAzIG1pbiwgNSBtYXgsIDEwdncrMSBpZGVhbCwgdGhlICsxIGlzIGluIGNhc2Ugb2Ygem9vbWluZyBpbi9vdXQgKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdWJoZWFkaW5nIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtc2VjdGlvbiB7XFxyXFxuXFx0cGFkZGluZzogMnJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZS1jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250ZW50IHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypOYXYqL1xcclxcblxcclxcbi5uYXYge1xcclxcblxcdGZsZXg6IDEgMSAyOCU7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb250YWluZXIgYSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHdpZHRoOiBtaW4oOHJlbSwgMTAwJSk7XFxyXFxuXFx0cGFkZGluZzogMC4xMjVyZW0gMCAwLjEyNXJlbSAwLjM3NXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbiNtZWFsLXBsYW5zLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbiNncm9jZXJ5LWxpc3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0teWVsbG93LTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0teWVsbG93LTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVjaXBlcy1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdi1idXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMjVyZW0gMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwtZmxpcCB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbi5hcHBlYXIge1xcclxcblxcdGFuaW1hdGlvbjogYXBwZWFyIDNzIGZvcndhcmQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi8qTWVhbCBQbGFuIFBhZ2UqL1xcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0dG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1wYWdlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1zZWN0aW9uIHtcXHJcXG5cXHRmbGV4OiAxIDEgNzIlO1xcclxcblxcdGhlaWdodDogbWluKDcwdmgsIDEwMDBweCk7XFxyXFxuXFx0cGFkZGluZzogMC42MjVyZW0gMXJlbSA0MHZoIDFyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSA2NSU7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG5cXHRtYXJnaW46IDJyZW0gYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1jZWxsIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAwLjI1cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1sZWZ0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1yaWdodC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tbGVmdC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcmlnaHQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkdyb2NlcnkgTGlzdCovXFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtaXRlbSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1pdGVtIGJ1dHRvbiB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWl0ZW0gYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NiUgMTIlIDEyJTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMCAycmVtIDAgMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQtY29udGFpbmVyIGlucHV0LFxcclxcbi5yZWNpcGUtaW5ncmVkaWVudC1jb250YWluZXIgaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtYW1vdW50IHtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDAuODVyZW07XFxyXFxuXFx0d2lkdGg6IDAuODVyZW07XFxyXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qSGlkZSBkZWZhdWx0IGNoZWNrYm94Ki9cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0d2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi8qQ3JlYXRlIGN1c3RvbSBjaGVja2JveCovXFxyXFxuLmNoZWNrbWFyayB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAwLjg1cmVtO1xcclxcblxcdHdpZHRoOiAwLjg1cmVtO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcms6OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypDaGFuZ2UgYmcgY29sb3Igd2hlbiBjaGVja2VkKi9cXHJcXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMik7XFxyXFxufVxcclxcblxcclxcbi8qU2hvdyBjdXN0b20gY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypDaGVja21hcmsgc3R5bGVzKi9cXHJcXG4uY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XFxyXFxuXFx0bGVmdDogMC4yNXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDAuNjI1cmVtO1xcclxcblxcdHdpZHRoOiAwLjNyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWRlbGV0ZS1idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWRlbGV0ZS1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi8qUmVjaXBlIExpc3QgUGFnZSovXFxyXFxuXFxyXFxuLnJlY2lwZS1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbGlzdC1jb250YWluZXIgYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1maWx0ZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtZmlsdGVyLWNvbnRhaW5lciBidXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMTI1cmVtO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWZpbHRlci1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogNjAlO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMik7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLypSZWNpcGUgTW9kYWwqL1xcclxcblxcclxcbi5yZWNpcGUtbW9kYWwge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHdpZHRoOiBtaW4oMTAwJSwgMjByZW0pO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW1nIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAtNHB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbW9kYWwgLnBhZ2Utc3ViaGVhZGluZyB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsLWNsb3NlLWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMCAwLjMxMjVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbC1jbG9zZS1idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMyk7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50LWxpc3QtY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5ncmVkaWVudC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgMjAlIDY1JTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtYW1vdW50IHtcXHJcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtdW5pdCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtbmFtZSB7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsK0JBQStCO0NBQy9CLG1DQUFtQztDQUNuQyxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0Isb0RBQW9EO0NBQ3BELHFEQUFxRDtDQUNyRCwrQ0FBK0M7Q0FDL0MsNkNBQTZDO0NBQzdDLGlEQUFpRDtDQUNqRCxrREFBa0Q7Q0FDbEQsbURBQW1EO0NBQ25ELG9EQUFvRDtBQUNyRDs7QUFFQTs7O0NBR0Msc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7O0NBRUMsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQ0FBa0M7Q0FDbEMsd0JBQXdCO0NBQ3hCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLDBGQUEwRjtBQUMzRjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7Q0FDZiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLDhCQUE4QjtDQUM5QixvQkFBb0I7Q0FDcEIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFF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bEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLDRCQUE0QjtDQUM1Qiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGlEQUFpRDtBQUNsRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFFBQVE7Q0FDUixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsNDAwJmZhbWlseT1Db2RhJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWZvbnQtMTogJ0NvZGEnLCBzYW5zLXNlcmlmO1xcclxcblxcdC0tZm9udC0yOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0LS1mb250LWNvbG9yLTE6IGhzbCg1MCwgMjAlLCA5NSUpO1xcclxcblxcdC0tYmFja2dyb3VuZC0xOiBoc2woMCwgMCUsIDE3JSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTI6IGhzbCgwIDAlIDE3JSAvIDAuNSk7XFxyXFxuXFx0LS1iYWNrZ3JvdW5kLTM6IGhzbCgwIDAlIDUwJSAvIDAuNSk7XFxyXFxuXFx0LS1yZWQtMTogaHNsKDIyLCA5NSUsIDQ1JSk7XFxyXFxuXFx0LS1yZWQtMjogaHNsKDIyLCA2MCUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0xOiBoc2woMTA0LCAzNSUsIDcwJSk7XFxyXFxuXFx0LS1ncmVlbi0yOiBoc2woMTA0LCA3MCUsIDg1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMTogaHNsKDUwLCA4MCUsIDY1JSk7XFxyXFxuXFx0LS15ZWxsb3ctMjogaHNsKDUwLCA3MCUsIDc1JSk7XFxyXFxuXFx0LS1zdGVwLS0yOiBjbGFtcCgwLjY5cmVtLCAwLjhyZW0gKyAtMC41N3Z3LCAwLjM4cmVtKTtcXHJcXG5cXHQtLXN0ZXAtLTE6IGNsYW1wKDAuODNyZW0sIDAuODZyZW0gKyAtMC4xNXZ3LCAwLjc1cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMDogY2xhbXAoMXJlbSwgMC44M3JlbSArIDAuODl2dywgMS41cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMTogY2xhbXAoMS4ycmVtLCAwLjZyZW0gKyAzLjJ2dywgM3JlbSk7XFxyXFxuXFx0LS1zdGVwLTI6IGNsYW1wKDEuNDRyZW0sIC0wLjA4cmVtICsgOC4xMXZ3LCA2cmVtKTtcXHJcXG5cXHQtLXN0ZXAtMzogY2xhbXAoMS43M3JlbSwgLTEuN3JlbSArIDE4LjI2dncsIDEycmVtKTtcXHJcXG5cXHQtLXN0ZXAtNDogY2xhbXAoMi4wN3JlbSwgLTUuMjNyZW0gKyAzOC45OHZ3LCAyNHJlbSk7XFxyXFxuXFx0LS1zdGVwLTU6IGNsYW1wKDIuNDlyZW0sIC0xMi42OHJlbSArIDgwLjkxdncsIDQ4cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtMSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0d2lkdGg6IG1pbig5MCUsIDEwMDBweCk7XFxyXFxuXFx0bWFyZ2luLWlubGluZTogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDFyZW0gMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IC0xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuXFx0d2lkdGg6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9ucy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b24ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3MtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzLWJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qTGFuZGluZyBQYWdlKi9cXHJcXG5cXHJcXG4ubGFuZGluZy1wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0LyogcGFkZGluZzogbWF4KDEwdmgsIDFyZW0pIDEuNXJlbTsgLyogdG9wIGFuZCBib3R0b20gc2V0IHRvIGxhcmdlciBvZiAzdmggb3IgMXJlbSwgbGVmdCBhbmQgcmlnaHQgMS41cmVtICovXFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC0xKSB1cmwoaW1hZ2VzL2Zvb2QyLmpwZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1zZWN0aW9uIHtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljk1cmVtKTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAxNXZoIDA7XFxyXFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRlbnQge1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0cGFkZGluZzogMTB2aCAycmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMik7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWhlYWRpbmcge1xcclxcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTEpO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXHJcXG5cXHQvKiAzIG1pbiwgNSBtYXgsIDEwdncrMSBpZGVhbCwgdGhlICsxIGlzIGluIGNhc2Ugb2Ygem9vbWluZyBpbi9vdXQgKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdWJoZWFkaW5nIHtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtc2VjdGlvbiB7XFxyXFxuXFx0cGFkZGluZzogMnJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZS1jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWluKDkwJSwgMTAwMHB4KTtcXHJcXG5cXHRtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250ZW50IHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypOYXYqL1xcclxcblxcclxcbi5uYXYge1xcclxcblxcdGZsZXg6IDEgMSAyOCU7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb250YWluZXIgYSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHdpZHRoOiBtaW4oOHJlbSwgMTAwJSk7XFxyXFxuXFx0cGFkZGluZzogMC4xMjVyZW0gMCAwLjEyNXJlbSAwLjM3NXJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbiNtZWFsLXBsYW5zLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbiNncm9jZXJ5LWxpc3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0teWVsbG93LTEpO1xcclxcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0teWVsbG93LTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVjaXBlcy1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJuYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym5hdi1idXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMjVyZW0gMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibmF2LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwtZmxpcCB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbi5hcHBlYXIge1xcclxcblxcdGFuaW1hdGlvbjogYXBwZWFyIDNzIGZvcndhcmQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi8qTWVhbCBQbGFuIFBhZ2UqL1xcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHdpZHRoOiBtaW4oOTAlLCAxMDAwcHgpO1xcclxcblxcdG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuXFx0dG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1wYWdlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1zZWN0aW9uIHtcXHJcXG5cXHRmbGV4OiAxIDEgNzIlO1xcclxcblxcdGhlaWdodDogbWluKDcwdmgsIDEwMDBweCk7XFxyXFxuXFx0cGFkZGluZzogMC42MjVyZW0gMXJlbSA0MHZoIDFyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRib3JkZXItbGVmdDogc29saWQgMnB4IHZhcigtLWdyZWVuLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wbGFuLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSA2NSU7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG5cXHRtYXJnaW46IDJyZW0gYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tZ3JlZW4tMiksIHZhcigtLXllbGxvdy0yKSwgdmFyKC0tcmVkLTIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcGxhbi1jZWxsIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMXJlbSAwLjI1cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1sZWZ0LWNvcm5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1yaWdodC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tbGVmdC1jb3JuZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcmlnaHQtY29ybmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkdyb2NlcnkgTGlzdCovXFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtaXRlbSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyb2NlcnktbGlzdC1pdGVtIGJ1dHRvbiB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWl0ZW0gYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NiUgMTIlIDEyJTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMCAycmVtIDAgMDtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LXRleHQtY29udGFpbmVyIGlucHV0LFxcclxcbi5yZWNpcGUtaW5ncmVkaWVudC1jb250YWluZXIgaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtdGV4dCB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ncm9jZXJ5LWxpc3QtYW1vdW50IHtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDAuODVyZW07XFxyXFxuXFx0d2lkdGg6IDAuODVyZW07XFxyXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qSGlkZSBkZWZhdWx0IGNoZWNrYm94Ki9cXHJcXG4uY2hlY2tib3ggaW5wdXQge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0d2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi8qQ3JlYXRlIGN1c3RvbSBjaGVja2JveCovXFxyXFxuLmNoZWNrbWFyayB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAwLjg1cmVtO1xcclxcblxcdHdpZHRoOiAwLjg1cmVtO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcms6OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypDaGFuZ2UgYmcgY29sb3Igd2hlbiBjaGVja2VkKi9cXHJcXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMik7XFxyXFxufVxcclxcblxcclxcbi8qU2hvdyBjdXN0b20gY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypDaGVja21hcmsgc3R5bGVzKi9cXHJcXG4uY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XFxyXFxuXFx0bGVmdDogMC4yNXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDAuNjI1cmVtO1xcclxcblxcdHdpZHRoOiAwLjNyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCB2YXIoLS1ncmVlbi0xKTtcXHJcXG5cXHRib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWRlbGV0ZS1idXR0b24ge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvY2VyeS1saXN0LWRlbGV0ZS1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi8qUmVjaXBlIExpc3QgUGFnZSovXFxyXFxuXFxyXFxuLnJlY2lwZS1saXN0LWNvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbGlzdC1jb250YWluZXIgYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1maWx0ZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtZmlsdGVyLWNvbnRhaW5lciBidXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMTI1cmVtO1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWZpbHRlci1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogNjAlO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMik7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLypSZWNpcGUgTW9kYWwqL1xcclxcblxcclxcbi5yZWNpcGUtbW9kYWwge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHdpZHRoOiBtaW4oMTAwJSwgMjByZW0pO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1jb2xvci0xKTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLTEpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW1nIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAtNHB4IHZhcigtLWZvbnQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbW9kYWwgLnBhZ2Utc3ViaGVhZGluZyB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLW1vZGFsLWNsb3NlLWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMCAwLjMxMjVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQtMSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1tb2RhbC1jbG9zZS1idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMyk7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50LWxpc3QtY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5ncmVkaWVudC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgMjAlIDY1JTtcXHJcXG5cXHRmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtYW1vdW50IHtcXHJcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtdW5pdCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnQtbmFtZSB7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250ZW50Jyk7XHJcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgSm9zaCBXaGl0ZS4nO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xyXG4iLCJjb25zdCBncm9jZXJ5TGlzdFNhbXBsZSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnYXBwbGVzJyxcclxuICAgICAgICBhbW91bnQ6IDUsXHJcbiAgICAgICAgdW5pdDogJ3BjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2JhbmFuYXMnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICB1bml0OiAncGMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnb25pb25zJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgdW5pdDogJ3BjJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ21pbGsnLFxyXG4gICAgICAgIGFtb3VudDogMixcclxuICAgICAgICB1bml0OiAnTCcsXHJcbiAgICB9LFxyXG5dO1xyXG5jb25zdCBnZW5lcmF0ZVBhZ2VTdWJoZWFkaW5nID0gKHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcGFnZVN1YmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgcGFnZVN1YmhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFnZS1zdWJoZWFkaW5nJyk7XHJcbiAgICBwYWdlU3ViaGVhZGluZy50ZXh0Q29udGVudCA9IHN0cmluZztcclxuICAgIHJldHVybiBwYWdlU3ViaGVhZGluZztcclxufTtcclxuY29uc3QgZ2VuZXJhdGVDaGVja2JveCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBjaGVja2JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XHJcbiAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVja2JveElucHV0KTtcclxuICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XHJcbiAgICByZXR1cm4gY2hlY2tib3g7XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlRGVsZXRlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LWRlbGV0ZS1idXR0b24nKTtcclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNpcmNsZS1taW51cycsICdmYS14cycpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG4gICAgcmV0dXJuIGRlbGV0ZUJ1dHRvbjtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVMaXN0SXRlbVRleHQgPSAobmFtZSwgYW1vdW50LCB1bml0KSA9PiB7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyb2NlcnlMaXN0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtdGV4dC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGxpc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsaXN0SXRlbVRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGxpc3RJdGVtVGV4dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICBsaXN0SXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LXRleHQnKTtcclxuICAgIGxpc3RJdGVtVGV4dC52YWx1ZSA9IG5hbWU7XHJcbiAgICBsaXN0SXRlbVRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGlzdEl0ZW1UZXh0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcclxuICAgIH0pO1xyXG4gICAgbGlzdEl0ZW1UZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBsaXN0SXRlbVRleHQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBsaXN0SXRlbUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsaXN0SXRlbUFtb3VudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICBsaXN0SXRlbUFtb3VudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICBsaXN0SXRlbUFtb3VudC5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtYW1vdW50Jyk7XHJcbiAgICBsaXN0SXRlbUFtb3VudC52YWx1ZUFzTnVtYmVyID0gYW1vdW50O1xyXG4gICAgbGlzdEl0ZW1BbW91bnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGlzdEl0ZW1BbW91bnQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgfSk7XHJcbiAgICBsaXN0SXRlbUFtb3VudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgbGlzdEl0ZW1BbW91bnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBsaXN0SXRlbVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbGlzdEl0ZW1Vbml0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBsaXN0SXRlbVVuaXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgbGlzdEl0ZW1Vbml0LmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC1hbW91bnQnKTtcclxuICAgIGxpc3RJdGVtVW5pdC52YWx1ZSA9IHVuaXQ7XHJcbiAgICBsaXN0SXRlbVVuaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGlzdEl0ZW1Vbml0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcclxuICAgIH0pO1xyXG4gICAgbGlzdEl0ZW1Vbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBsaXN0SXRlbVVuaXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgfSk7XHJcbiAgICBncm9jZXJ5TGlzdFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UZXh0KTtcclxuICAgIGdyb2NlcnlMaXN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbUFtb3VudCk7XHJcbiAgICBncm9jZXJ5TGlzdFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1Vbml0KTtcclxuICAgIHJldHVybiBncm9jZXJ5TGlzdFRleHRDb250YWluZXI7XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlTGlzdEl0ZW1zID0gKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JvY2VyeUxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktbGlzdC1pdGVtJyk7XHJcbiAgICBjb25zdCBsaXN0SXRlbUluZm8gPSBnZW5lcmF0ZUxpc3RJdGVtVGV4dChpdGVtLm5hbWUsIGl0ZW0uYW1vdW50LCBpdGVtLnVuaXQpO1xyXG4gICAgZ3JvY2VyeUxpc3RJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlQ2hlY2tib3goKSk7XHJcbiAgICBncm9jZXJ5TGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEl0ZW1JbmZvKTtcclxuICAgIGdyb2NlcnlMaXN0SXRlbS5hcHBlbmRDaGlsZChnZW5lcmF0ZURlbGV0ZUJ1dHRvbigpKTtcclxuICAgIHJldHVybiBncm9jZXJ5TGlzdEl0ZW07XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlR3JvY2VyeUxpc3RDb250YWluZXIgPSAoYXJyYXkpID0+IHtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm9jZXJ5TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICBhcnJheS5tYXAoKGl0ZW0pID0+IGdyb2NlcnlMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTGlzdEl0ZW1zKGl0ZW0pKSk7XHJcbiAgICByZXR1cm4gZ3JvY2VyeUxpc3RDb250YWluZXI7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlHcm9jZXJ5TGlzdCA9IChzZWN0aW9uKSA9PiB7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGdlbmVyYXRlUGFnZVN1YmhlYWRpbmcoYFRoaXMgd2VlaydzIGdyb2NlcnkgbGlzdGApKTtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVHcm9jZXJ5TGlzdENvbnRhaW5lcihncm9jZXJ5TGlzdFNhbXBsZSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5R3JvY2VyeUxpc3Q7XHJcbiIsImNvbnN0IGNyZWF0ZVNldHRpbmdzQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2V0dGluZ3NJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHNldHRpbmdzSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvc2V0dGluZ3MucG5nJyk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc2V0dGluZ3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MtYnV0dG9uJywgJ2hlYWRlci1idXR0b24nKTtcclxuICAgIHNldHRpbmdzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0dGluZ3MtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2V0dGluZ3NCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MtYnV0dG9uLWNvbnRhaW5lcicpO1xyXG4gICAgc2V0dGluZ3NCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdXR0b24pO1xyXG4gICAgc2V0dGluZ3NCdXR0b24uYXBwZW5kQ2hpbGQoc2V0dGluZ3NJbWcpO1xyXG4gICAgcmV0dXJuIHNldHRpbmdzQnV0dG9uQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBjcmVhdGVMb2dpbkJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsb2dpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaGVhZGVyLWJ1dHRvbicpO1xyXG4gICAgbG9naW5CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi1idXR0b24nKTtcclxuICAgIGxvZ2luQnV0dG9uLnRleHRDb250ZW50ID0gJ0xvZyBpbic7XHJcbiAgICByZXR1cm4gbG9naW5CdXR0b247XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUhlYWRlckJ1dHRvbnNDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXJCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXJCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zLWNvbnRhaW5lcicpO1xyXG4gICAgaGVhZGVyQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTZXR0aW5nc0J1dHRvbigpKTtcclxuICAgIGhlYWRlckJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9naW5CdXR0b24oKSk7XHJcbiAgICByZXR1cm4gaGVhZGVyQnV0dG9uc0NvbnRhaW5lcjtcclxufTtcclxuY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL3RhYmV5b3UtbG9nbzEucG5nJyk7XHJcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tY29udGFpbmVyJyk7XHJcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgcmV0dXJuIGxvZ29Db250YWluZXI7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUhlYWRlckNvbnRlbnRDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXJDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXJDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250ZW50LWNvbnRhaW5lcicpO1xyXG4gICAgaGVhZGVyQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMb2dvKCkpO1xyXG4gICAgaGVhZGVyQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJCdXR0b25zQ29udGFpbmVyKCkpO1xyXG4gICAgcmV0dXJuIGhlYWRlckNvbnRlbnRDb250YWluZXI7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlckNvbnRlbnRDb250YWluZXIoKSk7XHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XHJcbiIsImNvbnN0IGRheXNBcnJheSA9IFsnU1VOJywgJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJ107XHJcbmNvbnN0IGdlbmVyYXRlUGFnZVN1YmhlYWRpbmcgPSAoc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlU3ViaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwYWdlU3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlLXN1YmhlYWRpbmcnKTtcclxuICAgIHBhZ2VTdWJoZWFkaW5nLnRleHRDb250ZW50ID0gc3RyaW5nO1xyXG4gICAgcmV0dXJuIHBhZ2VTdWJoZWFkaW5nO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZU1lYWxQbGFuSGVhZGVyID0gKGRheSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVhbC1wbGFuLWhlYWRlcicpO1xyXG4gICAgaWYgKGRheXNBcnJheS5pbmRleE9mKGRheSkgPT09IDApIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9wLWxlZnQtY29ybmVyJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkYXlzQXJyYXkuaW5kZXhPZihkYXkpID09PSA2KSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1yaWdodC1jb3JuZXInKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdtZWFsLXBsYW4taGVhZGVyLXRleHQnKTtcclxuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBkYXk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZU1lYWxQbGFuQ2VsbHMgPSAoZGF5KSA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21lYWwtcGxhbi1jZWxsJyk7XHJcbiAgICBpZiAoZGF5c0FycmF5LmluZGV4T2YoZGF5KSA9PT0gMCkge1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYm90dG9tLWxlZnQtY29ybmVyJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkYXlzQXJyYXkuaW5kZXhPZihkYXkpID09PSA2KSB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib3R0b20tcmlnaHQtY29ybmVyJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjZWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NlbGwtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjZWxsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNlbGxJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNpcmNsZS1wbHVzJyk7XHJcbiAgICBjZWxsQnV0dG9uLmFwcGVuZENoaWxkKGNlbGxJY29uKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICByZXR1cm4gY2VsbDtcclxufTtcclxuY29uc3QgZ2VuZXJhdGVNZWFsUGxhbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lYWxQbGFuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZWFsUGxhbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWFsLXBsYW4tY29udGFpbmVyJyk7XHJcbiAgICBmb3IgKGNvbnN0IGRheSBvZiBkYXlzQXJyYXkpIHtcclxuICAgICAgICBtZWFsUGxhbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZU1lYWxQbGFuSGVhZGVyKGRheSkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBkYXkgb2YgZGF5c0FycmF5KSB7XHJcbiAgICAgICAgbWVhbFBsYW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNZWFsUGxhbkNlbGxzKGRheSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lYWxQbGFuQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5TWVhbFBsYW4gPSAoc2VjdGlvbikgPT4ge1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZVBhZ2VTdWJoZWFkaW5nKGBUaGlzIHdlZWsncyBtZWFsIHBsYW5gKSk7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGdlbmVyYXRlTWVhbFBsYW5Db250YWluZXIoKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZWFsUGxhbjtcclxuIiwiaW1wb3J0IHNlY3Rpb25GYWN0b3J5IGZyb20gJy4vc2VjdGlvbic7XHJcbmltcG9ydCBkaXNwbGF5R3JvY2VyeUxpc3QgZnJvbSAnLi9ncm9jZXJ5TGlzdCc7XHJcbmltcG9ydCBkaXNwbGF5UmVjaXBlTGlzdCBmcm9tICcuL3JlY2lwZUxpc3QnO1xyXG5pbXBvcnQgZGlzcGxheU1lYWxQbGFuIGZyb20gJy4vbWVhbFBsYW4nO1xyXG5jb25zdCBjcmVhdGVNZWFsUGxhbnNCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG1lYWxQbGFuc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XHJcbiAgICBtZWFsUGxhbnNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZWFsLXBsYW5zLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgbWVhbFBsYW5zQnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lYWxQbGFuc0J1dHRvblRleHQudGV4dENvbnRlbnQgPSAnTWVhbCBQbGFucyc7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIG1lYWxQbGFuc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFuZ2xlLWRvd24nLCAnYXJyb3cnKTtcclxuICAgIG1lYWxQbGFuc0Fycm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVhbC1wbGFucy1hcnJvdycpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lYWxQbGFuc0Fycm93LmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsLWZsaXAnKTtcclxuICAgIH0pO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFwcGVuZENoaWxkKG1lYWxQbGFuc0J1dHRvblRleHQpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFwcGVuZENoaWxkKG1lYWxQbGFuc0Fycm93KTtcclxuICAgIHJldHVybiBtZWFsUGxhbnNCdXR0b247XHJcbn07XHJcbmNvbnN0IGNyZWF0ZU1lYWxQbGFuc1N1Ym5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lYWxQbGFuc1N1Ym5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVhbFBsYW5zU3VibmF2LmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdicsICdoaWRkZW4nKTtcclxuICAgIGNvbnN0IHdlZWtTdWJuYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdlZWtTdWJuYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibmF2LWJ1dHRvbicpO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb25GYWN0b3J5KCkuY2xlYXJTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBkaXNwbGF5TWVhbFBsYW4oc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoaXN0b3J5U3VibmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBoaXN0b3J5U3VibmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdi1idXR0b24nKTtcclxuICAgIGhpc3RvcnlTdWJuYXZCdXR0b24udGV4dENvbnRlbnQgPSAnSGlzdG9yeSc7XHJcbiAgICBtZWFsUGxhbnNTdWJuYXYuYXBwZW5kQ2hpbGQod2Vla1N1Ym5hdkJ1dHRvbik7XHJcbiAgICBtZWFsUGxhbnNTdWJuYXYuYXBwZW5kQ2hpbGQoaGlzdG9yeVN1Ym5hdkJ1dHRvbik7XHJcbiAgICByZXR1cm4gbWVhbFBsYW5zU3VibmF2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVNZWFsUGxhbnNOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZWFsUGxhbnNOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lYWxQbGFuc05hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnbWVhbC1wbGFucy1uYXYnKTtcclxuICAgIGNvbnN0IG1lYWxQbGFuc0J1dHRvbiA9IGNyZWF0ZU1lYWxQbGFuc0J1dHRvbigpO1xyXG4gICAgY29uc3QgbWVhbFBsYW5zU3VibmF2ID0gY3JlYXRlTWVhbFBsYW5zU3VibmF2KCk7XHJcbiAgICBtZWFsUGxhbnNOYXYuYXBwZW5kQ2hpbGQobWVhbFBsYW5zQnV0dG9uKTtcclxuICAgIG1lYWxQbGFuc05hdi5hcHBlbmRDaGlsZChtZWFsUGxhbnNTdWJuYXYpO1xyXG4gICAgbWVhbFBsYW5zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1lYWxQbGFuc1N1Ym5hdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1lYWxQbGFuc05hdjtcclxufTtcclxuY29uc3QgY3JlYXRlR3JvY2VyeUxpc3RCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdncm9jZXJ5LWxpc3QtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBncm9jZXJ5TGlzdEJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBncm9jZXJ5TGlzdEJ1dHRvblRleHQudGV4dENvbnRlbnQgPSAnR3JvY2VyeSBMaXN0JztcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBncm9jZXJ5TGlzdEFycm93LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFuZ2xlLWRvd24nLCAnYXJyb3cnKTtcclxuICAgIGdyb2NlcnlMaXN0QXJyb3cuc2V0QXR0cmlidXRlKCdpZCcsICdncm9jZXJ5LWxpc3QtYXJyb3cnKTtcclxuICAgIGdyb2NlcnlMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGdyb2NlcnlMaXN0QXJyb3cuY2xhc3NMaXN0LnRvZ2dsZSgndmVydGljYWwtZmxpcCcpO1xyXG4gICAgfSk7XHJcbiAgICBncm9jZXJ5TGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChncm9jZXJ5TGlzdEJ1dHRvblRleHQpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RBcnJvdyk7XHJcbiAgICByZXR1cm4gZ3JvY2VyeUxpc3RCdXR0b247XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUdyb2NlcnlMaXN0U3VibmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RTdWJuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyb2NlcnlMaXN0U3VibmF2LmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdicsICdoaWRkZW4nKTtcclxuICAgIGNvbnN0IHdlZWtTdWJuYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdlZWtTdWJuYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibmF2LWJ1dHRvbicpO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xyXG4gICAgd2Vla1N1Ym5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb25GYWN0b3J5KCkuY2xlYXJTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBkaXNwbGF5R3JvY2VyeUxpc3Qoc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoaXN0b3J5U3VibmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBoaXN0b3J5U3VibmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym5hdi1idXR0b24nKTtcclxuICAgIGhpc3RvcnlTdWJuYXZCdXR0b24udGV4dENvbnRlbnQgPSAnSGlzdG9yeSc7XHJcbiAgICBncm9jZXJ5TGlzdFN1Ym5hdi5hcHBlbmRDaGlsZCh3ZWVrU3VibmF2QnV0dG9uKTtcclxuICAgIGdyb2NlcnlMaXN0U3VibmF2LmFwcGVuZENoaWxkKGhpc3RvcnlTdWJuYXZCdXR0b24pO1xyXG4gICAgcmV0dXJuIGdyb2NlcnlMaXN0U3VibmF2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVHcm9jZXJ5TGlzdE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdyb2NlcnlMaXN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncm9jZXJ5TGlzdE5hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnZ3JvY2VyeS1saXN0LW5hdicpO1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RCdXR0b24gPSBjcmVhdGVHcm9jZXJ5TGlzdEJ1dHRvbigpO1xyXG4gICAgY29uc3QgZ3JvY2VyeUxpc3RTdWJuYXYgPSBjcmVhdGVHcm9jZXJ5TGlzdFN1Ym5hdigpO1xyXG4gICAgZ3JvY2VyeUxpc3ROYXYuYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RCdXR0b24pO1xyXG4gICAgZ3JvY2VyeUxpc3ROYXYuYXBwZW5kQ2hpbGQoZ3JvY2VyeUxpc3RTdWJuYXYpO1xyXG4gICAgZ3JvY2VyeUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ3JvY2VyeUxpc3RTdWJuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBncm9jZXJ5TGlzdE5hdjtcclxufTtcclxuY29uc3QgY3JlYXRlUmVjaXBlc0J1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlY2lwZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xyXG4gICAgcmVjaXBlc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlY2lwZXMtYnV0dG9uJyk7XHJcbiAgICByZWNpcGVzQnV0dG9uLnRleHRDb250ZW50ID0gJ1JlY2lwZXMnO1xyXG4gICAgcmVjaXBlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtc2VjdGlvbicpO1xyXG4gICAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb25GYWN0b3J5KCkuY2xlYXJTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBkaXNwbGF5UmVjaXBlTGlzdChzZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZWNpcGVzQnV0dG9uO1xyXG59O1xyXG5jb25zdCBjcmVhdGVSZWNpcGVzTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVjaXBlc05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVjaXBlc05hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAncmVjaXBlcy1uYXYnKTtcclxuICAgIHJlY2lwZXNOYXYuYXBwZW5kQ2hpbGQoY3JlYXRlUmVjaXBlc0J1dHRvbigpKTtcclxuICAgIHJldHVybiByZWNpcGVzTmF2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXYtY29udGFpbmVyJyk7XHJcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVhbFBsYW5zTmF2KCkpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUdyb2NlcnlMaXN0TmF2KCkpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVJlY2lwZXNOYXYoKSk7XHJcbiAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XHJcbiIsImNvbnN0IHNhbXBsZVJlY2lwZSA9IHtcclxuICAgIG5hbWU6IGBSb3kgQ2hvaSdzIEFnbGlvIGUgT2xpb2AsXHJcbiAgICBpbmdyZWRpZW50TGlzdDogW1xyXG4gICAgICAgIHsgbmFtZTogJ3Bhcm1lc2FuIGNoZWVzZScsIGFtb3VudDogMC41LCB1bml0OiAnQycgfSxcclxuICAgICAgICB7IG5hbWU6ICdsZW1vbicsIGFtb3VudDogMSwgdW5pdDogJ3BjJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3BhcnNsZXknLCBhbW91bnQ6IDEsIHVuaXQ6ICdidW5jaCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdnYXJsaWMnLCBhbW91bnQ6IDEwLCB1bml0OiAnY2xvdmVzJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ29saXZlIG9pbCcsIGFtb3VudDogMSwgdW5pdDogJ0MnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnc3BhZ2hldHRpJywgYW1vdW50OiA0NTAsIHVuaXQ6ICdnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2NoaWxpIGZsYWtlcycsIGFtb3VudDogMSwgdW5pdDogJ3Ric3AnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnc2FsdCcsIGFtb3VudDogMSwgdW5pdDogJ3Ric3AnIH0sXHJcbiAgICBdLFxyXG4gICAgaW5zdHJ1Y3Rpb25zOiBbXHJcbiAgICAgICAgYEJyaW5nIGEgcG90IG9mIHdhdGVyIHRvIGEgYm9pbCwgYW5kIGFkZCAxLTIgdHNwIG9mIHNhbHQgYW5kIDEgdGJzcCBvZiBvbGl2ZSBvaWwuYCxcclxuICAgICAgICBgV2FzaCBhbmQgZGUtc3RlbSB0aGUgcGFyc2xleS4gQ2hvcCB0aGUgcGFyc2xleSB3aXRoIGEgcm91Z2ggY2hpZmZvbmFkZS5gLFxyXG4gICAgICAgIGBQZWVsIGdhcmxpYyBhbmQgc2xpY2UgaW50byB0aGluIGRpc2NzLmAsXHJcbiAgICAgICAgYEFkZCB0aGUgc3BhZ2hldHRpIHRvIHRoZSBib2lsaW5nIHdhdGVyIGFuZCBjb29rIHVudGlsIGFsIGRlbnRlIG9yIHRvIGRlc2lyZWQgZG9uZW5lc3MgKH4xMCBtaW51dGVzKS5gLFxyXG4gICAgICAgIGBEcmFpbiB0aGUgcGFzdGEgYW5kIHNldCBhc2lkZSwgc2F2aW5nIGFib3V0IDEgY3VwIG9mIHRoZSBwYXN0YSB3YXRlciBhbmQgYWxzbyBzZXR0aW5nIHRoaXMgYXNpZGUuYCxcclxuICAgICAgICBgSW4gYSBoZWF2eS1ib3R0b21lZCBza2lsbGV0IG92ZXIgbWVkaXVtIGhlYXQsIGFkZCBhYm91dCDCvSBjdXAgb2Ygb2xpdmUgb2lsIChvciBlbm91Z2ggdG8gY29hdCB0aGUgYm90dG9tIG9mIHRoZSBwYW4gYW5kIGNvdmVyIGFsbCB0aGUgZ2FybGljKS5gLFxyXG4gICAgICAgIGBBZGQgZ2FybGljIHRvIHRoZSBwYW4gYW5kIGNvb2sgdW50aWwgZnJhZ3JhbnQgYW5kIGp1c3QgYnJvd25pbmcsIGFib3V0IDMgbWludXRlcy5gLFxyXG4gICAgICAgIGBBZGQgY2hpbGkgZmxha2VzIGFuZCBhbGwgYnV0IDItMyB0YnNwcyBvZiB0aGUgY2hvcHBlZCBwYXJzbGV5IHRvIHRoZSBwYW4gYW5kIGNvb2sgZm9yIGFub3RoZXIgMzAgc2Vjb25kcyBvciBzby5gLFxyXG4gICAgICAgIGBBZGQgdGhlIGNvb2tlZCBwYXN0YSBhbmQgc3RpciBpdCBpbnRvIHRoZSBvaWwgYW5kIGdhcmxpYy4gVGhlbiwgYWRkIHRoZSBzYXZlZCBjdXAgb2YgcGFzdGEgd2F0ZXIuYCxcclxuICAgICAgICBgQWxsb3cgZXZlcnl0aGluZyB0byBoZWF0IGFuZCBpbmNvcnBvcmF0ZSwgdGhlbiByZW1vdmUgZnJvbSB0aGUgaGVhdC5gLFxyXG4gICAgICAgIGBBZGQgMS0yIHRic3Agb2YgYnV0dGVyIHRvIHRoZSBwYXN0YSBhbmQgdGhlIGp1aWNlIG9mIGEgbGVtb24gYW5kIHN0aXIuYCxcclxuICAgICAgICBgVXNlIGEgbGFyZ2UgZm9yayB0byB0d2lzdCB0aGUgc3BhZ2hldHRpIG9udG8geW91ciBwbGF0ZXMuYCxcclxuICAgICAgICBgVG9wIHdpdGggc29tZSBvZiB0aGUgZ2FybGlja3kgb2lsIGZyb20gdGhlIHBhbiwgZ3JhdGVkIHBhcm1lc2FuIGNoZWVzZSwgYW5kIHNvbWUgb2YgdGhlIGxlZnRvdmVyIGNob3BwZWQgcGFyc2xleS5gLFxyXG4gICAgICAgIGBTZXJ2ZSBpbW1lZGlhdGVseS5gLFxyXG4gICAgXSxcclxufTtcclxuY29uc3QgcmVjaXBlRmFjdG9yeSA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgcmVjaXBlTmFtZSA9IG5hbWU7XHJcbiAgICBsZXQgaW5ncmVkaWVudHMgPSBbXTtcclxuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IGdlbmVyYXRlSW5ncmVkaWVudExpc3QgPSAoaW5ncmVkaWVudCkgPT4ge1xyXG4gICAgICAgIGxldCBpbmdyZWRpZW50c0xpc3QgPSBbXTtcclxuICAgICAgICBpbmdyZWRpZW50c0xpc3QucHVzaChpbmdyZWRpZW50KTtcclxuICAgICAgICByZXR1cm4gaW5ncmVkaWVudHNMaXN0O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEluc3RydWN0aW9uc0Zyb21JbnB1dCA9IChpbnN0cnVjdGlvbikgPT4ge1xyXG4gICAgICAgIGxldCBpbnN0cnVjdGlvbnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGluc3RydWN0aW9uc0FycmF5LnB1c2goaW5zdHJ1Y3Rpb24pO1xyXG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbnNBcnJheTtcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBnZXRJbnN0cnVjdGlvbnNGcm9tSW5wdXQgfTtcclxufTtcclxuY29uc3QgYWRkVG9SZWNpcGVBcnJheSA9IChyZWNpcGUpID0+IHtcclxuICAgIGxldCByZWNpcGVBcnJheSA9IFtdO1xyXG4gICAgcmVjaXBlQXJyYXkucHVzaChyZWNpcGUpO1xyXG4gICAgY29uc29sZS5sb2cocmVjaXBlQXJyYXkpO1xyXG4gICAgcmV0dXJuIHJlY2lwZUFycmF5O1xyXG59O1xyXG5jb25zdCBnZXRSZWNpcGVBcnJheSA9ICgpID0+IHtcclxuICAgIHJldHVybiBhZGRUb1JlY2lwZUFycmF5KHNhbXBsZVJlY2lwZSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldFJlY2lwZUFycmF5O1xyXG4iLCJpbXBvcnQgZ2V0UmVjaXBlQXJyYXkgZnJvbSAnLi9yZWNpcGUnO1xyXG5pbXBvcnQgZGlzcGxheVJlY2lwZU1vZGFsIGZyb20gJy4vcmVjaXBlTW9kYWwnO1xyXG5jb25zdCByZWNpcGVBcnJheSA9IGdldFJlY2lwZUFycmF5KCk7XHJcbmNvbnN0IGdlbmVyYXRlUGFnZVN1YmhlYWRpbmcgPSAoc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlU3ViaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwYWdlU3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlLXN1YmhlYWRpbmcnKTtcclxuICAgIHBhZ2VTdWJoZWFkaW5nLnRleHRDb250ZW50ID0gc3RyaW5nO1xyXG4gICAgcmV0dXJuIHBhZ2VTdWJoZWFkaW5nO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUZpbHRlckNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmlsdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZS1maWx0ZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tYWduaWZ5aW5nLWdsYXNzJyk7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBjb25zdCBzb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzb3J0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIHNvcnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFycm93LWRvd24tYS16Jyk7XHJcbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XHJcbiAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcclxuICAgIHNvcnRCdXR0b24uYXBwZW5kQ2hpbGQoc29ydEljb24pO1xyXG4gICAgZmlsdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcbiAgICBmaWx0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydEJ1dHRvbik7XHJcbiAgICByZXR1cm4gZmlsdGVyQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUxpc3QgPSAocmVjaXBlQXJyYXkpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgcmVjaXBlTGlzdC5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtbGlzdCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNpcGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdncm9jZXJ5LWxpc3QtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5UmVjaXBlTW9kYWwocmVjaXBlQXJyYXlbaV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xyXG4gICAgICAgIGxpc3RCdXR0b24udGV4dENvbnRlbnQgPSByZWNpcGVBcnJheVtpXS5uYW1lO1xyXG4gICAgICAgIHJlY2lwZUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlY2lwZUxpc3Q7XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlUmVjaXBlTGlzdENvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlY2lwZUxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS1saXN0LWNvbnRhaW5lcicsICdyZWNpcGUtbGlzdC1jb250YWluZXInKTtcclxuICAgIHJlY2lwZUxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVGaWx0ZXJDb250YWluZXIoKSk7XHJcbiAgICByZWNpcGVMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTGlzdChyZWNpcGVBcnJheSkpO1xyXG4gICAgcmV0dXJuIHJlY2lwZUxpc3RDb250YWluZXI7XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlTmV3UmVjaXBlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UmVjaXBlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdSZWNpcGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgICBuZXdSZWNpcGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICduZXctcmVjaXBlLWJ1dHRvbicpO1xyXG4gICAgbmV3UmVjaXBlQnV0dG9uLnRleHRDb250ZW50ID0gYE5ldyBSZWNpcGVgO1xyXG4gICAgcmV0dXJuIG5ld1JlY2lwZUJ1dHRvbjtcclxufTtcclxuY29uc3QgZGlzcGxheVJlY2lwZUxpc3QgPSAoc2VjdGlvbikgPT4ge1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZVBhZ2VTdWJoZWFkaW5nKGBNeSBSZWNpcGVzYCkpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChnZW5lcmF0ZVJlY2lwZUxpc3RDb250YWluZXIoKSk7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGdlbmVyYXRlTmV3UmVjaXBlQnV0dG9uKCkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UmVjaXBlTGlzdDtcclxuIiwiY29uc3QgZ2VuZXJhdGVSZWNpcGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZUNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZWNpcGVDbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtbW9kYWwtY2xvc2UtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEteG1hcmsnKTtcclxuICAgIHJlY2lwZUNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XHJcbiAgICByZWNpcGVDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWNpcGVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGUtbW9kYWwnKTtcclxuICAgICAgICBpZiAocmVjaXBlTW9kYWwpIHtcclxuICAgICAgICAgICAgcmVjaXBlTW9kYWwucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjaXBlQ2xvc2VCdXR0b247XHJcbn07XHJcbmNvbnN0IGdlbmVyYXRlUmVjaXBlSW1hZ2UgPSAoKSA9PiB7IH07XHJcbmNvbnN0IGdlbmVyYXRlUmVjaXBlTW9kYWxIZWFkaW5nID0gKHJlY2lwZSkgPT4ge1xyXG4gICAgY29uc3QgcmVjaXBlTW9kYWxIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHJlY2lwZU1vZGFsSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwYWdlLXN1YmhlYWRpbmcnKTtcclxuICAgIHJlY2lwZU1vZGFsSGVhZGluZy50ZXh0Q29udGVudCA9IHJlY2lwZS5uYW1lO1xyXG4gICAgcmV0dXJuIHJlY2lwZU1vZGFsSGVhZGluZztcclxufTtcclxuY29uc3QgZ2VuZXJhdGVSZWNpcGVIZWFkZXIgPSAocmVjaXBlKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUmVjaXBlQ2xvc2VCdXR0b24oKSk7XHJcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVSZWNpcGVNb2RhbEhlYWRpbmcocmVjaXBlKSk7XHJcbiAgICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZU1vZGFsSW5ncmVkaWVudENvbnRhaW5lcnMgPSAoaW5ncmVkaWVudCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWxJbmdyZWRpZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEluZ3JlZGllbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVjaXBlLWluZ3JlZGllbnQtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBpbmdyZWRpZW50QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGluZ3JlZGllbnRBbW91bnQuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudC1hbW91bnQnKTtcclxuICAgIGluZ3JlZGllbnRBbW91bnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgaW5ncmVkaWVudEFtb3VudC52YWx1ZUFzTnVtYmVyID0gaW5ncmVkaWVudC5hbW91bnQ7XHJcbiAgICBpbmdyZWRpZW50QW1vdW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgIGNvbnN0IGluZ3JlZGllbnRVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGluZ3JlZGllbnRVbml0LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnQtdW5pdCcpO1xyXG4gICAgaW5ncmVkaWVudFVuaXQudmFsdWUgPSBpbmdyZWRpZW50LnVuaXQ7XHJcbiAgICBpbmdyZWRpZW50VW5pdC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICBjb25zdCBpbmdyZWRpZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbmdyZWRpZW50TmFtZS5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50LW5hbWUnKTtcclxuICAgIGluZ3JlZGllbnROYW1lLnZhbHVlID0gaW5ncmVkaWVudC5uYW1lO1xyXG4gICAgaW5ncmVkaWVudE5hbWUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgbW9kYWxJbmdyZWRpZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JlZGllbnRBbW91bnQpO1xyXG4gICAgbW9kYWxJbmdyZWRpZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JlZGllbnRVbml0KTtcclxuICAgIG1vZGFsSW5ncmVkaWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyZWRpZW50TmFtZSk7XHJcbiAgICByZXR1cm4gbW9kYWxJbmdyZWRpZW50Q29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZU1vZGFsSW5ncmVkaWVudExpc3RDb250YWluZXIgPSAocmVjaXBlKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbEluZ3JlZGllbnRMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEluZ3JlZGllbnRMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnQtbGlzdC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHN1YmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgc3ViaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtc3ViaGVhZGluZycpO1xyXG4gICAgc3ViaGVhZGluZy50ZXh0Q29udGVudCA9IGBJbmdyZWRpZW50c2A7XHJcbiAgICBtb2RhbEluZ3JlZGllbnRMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmhlYWRpbmcpO1xyXG4gICAgZm9yIChjb25zdCBpbmdyZWRpZW50IG9mIHJlY2lwZS5pbmdyZWRpZW50TGlzdCkge1xyXG4gICAgICAgIG1vZGFsSW5ncmVkaWVudExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNb2RhbEluZ3JlZGllbnRDb250YWluZXJzKGluZ3JlZGllbnQpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb2RhbEluZ3JlZGllbnRMaXN0Q29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZVJlY2lwZU1vZGFsU2VjdGlvbiA9IChyZWNpcGUpID0+IHtcclxuICAgIGNvbnN0IHJlY2lwZU1vZGFsU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIHJlY2lwZU1vZGFsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtbW9kYWwnKTtcclxuICAgIHJlY2lwZU1vZGFsU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlY2lwZS1tb2RhbCcpO1xyXG4gICAgcmVjaXBlTW9kYWxTZWN0aW9uLmFwcGVuZENoaWxkKGdlbmVyYXRlUmVjaXBlSGVhZGVyKHJlY2lwZSkpO1xyXG4gICAgcmVjaXBlTW9kYWxTZWN0aW9uLmFwcGVuZENoaWxkKGdlbmVyYXRlTW9kYWxJbmdyZWRpZW50TGlzdENvbnRhaW5lcihyZWNpcGUpKTtcclxuICAgIHJldHVybiByZWNpcGVNb2RhbFNlY3Rpb247XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlSZWNpcGVNb2RhbCA9IChyZWNpcGUpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVSZWNpcGVNb2RhbFNlY3Rpb24ocmVjaXBlKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlSZWNpcGVNb2RhbDtcclxuIiwiY29uc3Qgc2VjdGlvbkZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXNlY3Rpb24nKTtcclxuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudC1zZWN0aW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xlYXJTZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBzZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7IGNyZWF0ZVNlY3Rpb24sIGNsZWFyU2VjdGlvbiB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzZWN0aW9uRmFjdG9yeTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tICcuL25hdic7XHJcbmltcG9ydCBzZWN0aW9uRmFjdG9yeSBmcm9tICcuL3NlY3Rpb24nO1xyXG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XHJcbmNvbnN0IGNyZWF0ZVBhZ2VDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGFpbmVyJyk7XHJcbiAgICBwYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZS1jb250YWluZXInKTtcclxuICAgIHJldHVybiBwYWdlQ29udGFpbmVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZVBhZ2VFbGVtZW50cyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZUNvbnRhaW5lcigpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbkZhY3RvcnkoKS5jcmVhdGVTZWN0aW9uKCk7XHJcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59O1xyXG5nZW5lcmF0ZVBhZ2VFbGVtZW50cygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=