"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_apod_apod_module_ts"],{

/***/ 9708:
/*!***************************************************!*\
  !*** ./src/app/pages/apod/apod-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApodPageRoutingModule": () => (/* binding */ ApodPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _apod_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apod.page */ 1319);




const routes = [
    {
        path: '',
        component: _apod_page__WEBPACK_IMPORTED_MODULE_0__.ApodPage
    }
];
let ApodPageRoutingModule = class ApodPageRoutingModule {
};
ApodPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApodPageRoutingModule);



/***/ }),

/***/ 5778:
/*!*******************************************!*\
  !*** ./src/app/pages/apod/apod.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApodPageModule": () => (/* binding */ ApodPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _apod_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apod-routing.module */ 9708);
/* harmony import */ var _apod_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apod.page */ 1319);
/* harmony import */ var _app_components_apod_apod_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/apod/apod.component */ 3577);








let ApodPageModule = class ApodPageModule {
};
ApodPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _apod_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApodPageRoutingModule
        ],
        declarations: [_apod_page__WEBPACK_IMPORTED_MODULE_1__.ApodPage, _app_components_apod_apod_component__WEBPACK_IMPORTED_MODULE_2__.ApodComponent],
        exports: [_app_components_apod_apod_component__WEBPACK_IMPORTED_MODULE_2__.ApodComponent]
    })
], ApodPageModule);



/***/ }),

/***/ 1319:
/*!*****************************************!*\
  !*** ./src/app/pages/apod/apod.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApodPage": () => (/* binding */ ApodPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _apod_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apod.page.html?ngResource */ 3915);
/* harmony import */ var _apod_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apod.page.scss?ngResource */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ApodPage = class ApodPage {
    constructor() {
        this.name = "Apod";
    }
    ngOnInit() {
    }
};
ApodPage.ctorParameters = () => [];
ApodPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-apod-page',
        template: _apod_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_apod_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApodPage);



/***/ }),

/***/ 7292:
/*!******************************************************!*\
  !*** ./src/app/pages/apod/apod.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcG9kLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3915:
/*!******************************************************!*\
  !*** ./src/app/pages/apod/apod.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"\" >\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">{{ name }}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <div id=\"container\" >\n          <app-apod></app-apod>\n    </div>\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apod_apod_module_ts.js.map