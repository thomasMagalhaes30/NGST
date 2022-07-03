"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_not-found_not-found_module_ts"],{

/***/ 5847:
/*!*************************************************************!*\
  !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageRoutingModule": () => (/* binding */ NotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page */ 8456);




const routes = [
    {
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_0__.NotFoundPage
    }
];
let NotFoundPageRoutingModule = class NotFoundPageRoutingModule {
};
NotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotFoundPageRoutingModule);



/***/ }),

/***/ 6470:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageModule": () => (/* binding */ NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 5847);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page */ 8456);







let NotFoundPageModule = class NotFoundPageModule {
};
NotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageRoutingModule
        ],
        declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_1__.NotFoundPage]
    })
], NotFoundPageModule);



/***/ }),

/***/ 8456:
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPage": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page.html?ngResource */ 8062);
/* harmony import */ var _not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page.scss?ngResource */ 963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NotFoundPage = class NotFoundPage {
    constructor() {
        this.name = "404 - NOT FOUND";
    }
    ngOnInit() {
    }
};
NotFoundPage.ctorParameters = () => [];
NotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-found',
        template: _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundPage);



/***/ }),

/***/ 963:
/*!****************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "@keyframes STAR-MOVE {\n  0% {\n    background-position: 5% 5%;\n  }\n  100% {\n    background-position: 1300% 600%;\n  }\n}\n#background {\n  background: black url('background.png') repeat 5% 5%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  -webkit-animation-name: STAR-MOVE;\n  -webkit-animation-duration: 200s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n}\n#midground {\n  background: url('midground.png') repeat 20% 20%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 200;\n  -webkit-animation-name: STAR-MOVE;\n  -webkit-animation-duration: 150s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n}\n#foreground {\n  background: url('foreground.png') repeat 35% 35%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 300;\n  -webkit-animation-name: STAR-MOVE;\n  -webkit-animation-duration: 100s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUU7RUFPQTtJQUNFLDBCQUFBO0VBY0Y7RUFYQTtJQUNFLCtCQUFBO0VBYUY7QUFDRjtBQVZBO0VBQ0Usb0RBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQVMsUUFBQTtFQUFVLFNBQUE7RUFDM0IsWUFBQTtFQUVBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0FBY0Y7QUFYQTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtFQUFTLFFBQUE7RUFBVSxTQUFBO0VBQzNCLFlBQUE7RUFFQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EseUNBQUE7RUFDQSwyQ0FBQTtBQWdCRjtBQWJBO0VBQ0UsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQVMsUUFBQTtFQUFVLFNBQUE7RUFDM0IsWUFBQTtFQUVBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0FBa0JGIiwiZmlsZSI6Im5vdC1mb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQGluY2x1ZGUga2V5ZnJhbWVzKCBTVEFSLU1PVkUgKVxue1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSUgNSVcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEzMDAlIDYwMCVcbiAgfVxufVxuXG4jYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGJsYWNrIHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nKSByZXBlYXQgNSUgNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDA7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogU1RBUi1NT1ZFO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjAwcztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbiNtaWRncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9taWRncm91bmQucG5nKSByZXBlYXQgMjAlIDIwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIHotaW5kZXg6IDIwMDtcblxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBTVEFSLU1PVkU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTBzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuI2ZvcmVncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mb3JlZ3JvdW5kLnBuZykgcmVwZWF0IDM1JSAzNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICB6LWluZGV4OiAzMDA7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogU1RBUi1NT1ZFO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwcztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4iXX0= */";

/***/ }),

/***/ 8062:
/*!****************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ name }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <div id=\"background\"></div>\n    <div id=\"midground\"></div>\n    <div id=\"foreground\"></div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-found_not-found_module_ts.js.map