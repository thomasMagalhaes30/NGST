"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_random_random_module_ts"],{

/***/ 7678:
/*!*******************************************************!*\
  !*** ./src/app/pages/random/random-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomPageRoutingModule": () => (/* binding */ RandomPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _random_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random.page */ 5349);




const routes = [
    {
        path: '',
        component: _random_page__WEBPACK_IMPORTED_MODULE_0__.RandomPage
    }
];
let RandomPageRoutingModule = class RandomPageRoutingModule {
};
RandomPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RandomPageRoutingModule);



/***/ }),

/***/ 7500:
/*!***********************************************!*\
  !*** ./src/app/pages/random/random.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomPageModule": () => (/* binding */ RandomPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _random_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random-routing.module */ 7678);
/* harmony import */ var _random_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random.page */ 5349);
/* harmony import */ var _app_components_apod_apod_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/apod/apod.component */ 3577);








let RandomPageModule = class RandomPageModule {
};
RandomPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _random_routing_module__WEBPACK_IMPORTED_MODULE_0__.RandomPageRoutingModule
        ],
        declarations: [_random_page__WEBPACK_IMPORTED_MODULE_1__.RandomPage, _app_components_apod_apod_component__WEBPACK_IMPORTED_MODULE_2__.ApodComponent],
        exports: [_app_components_apod_apod_component__WEBPACK_IMPORTED_MODULE_2__.ApodComponent]
    })
], RandomPageModule);



/***/ }),

/***/ 5349:
/*!*********************************************!*\
  !*** ./src/app/pages/random/random.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomPage": () => (/* binding */ RandomPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _random_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random.page.html?ngResource */ 920);
/* harmony import */ var _random_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random.page.scss?ngResource */ 1223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_nasaApod_nasa_apod_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/nasaApod/nasa-apod.service */ 6131);





let RandomPage = class RandomPage {
    constructor(apodService) {
        this.apodService = apodService;
        this.name = "Random Apod";
        this.apod = {};
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.injectRandomClick();
    }
    injectRandomClick() {
        this.apodService.getRandomApod().subscribe((apod) => {
            this.apod = apod;
        });
    }
};
RandomPage.ctorParameters = () => [
    { type: src_app_services_nasaApod_nasa_apod_service__WEBPACK_IMPORTED_MODULE_2__.NasaApodService }
];
RandomPage.propDecorators = {
    apod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
RandomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-random',
        template: _random_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_random_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RandomPage);



/***/ }),

/***/ 1223:
/*!**********************************************************!*\
  !*** ./src/app/pages/random/random.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5kb20ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 920:
/*!**********************************************************!*\
  !*** ./src/app/pages/random/random.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ name }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"container\">\n      <div class=\"ion-text-center\">\n        <ion-button id=\"randomAgain\" color=\"tertiary\" (click)=\"injectRandomClick()\" >Get a random Apod</ion-button>\n      </div>\n      <app-apod id=\"myApod\" loadTodayApodOnInit=\"false\" [apod]=\"apod\"></app-apod>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_random_random_module_ts.js.map