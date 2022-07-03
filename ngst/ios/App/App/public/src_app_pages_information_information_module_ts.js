"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_information_information_module_ts"],{

/***/ 1530:
/*!*******************************************************!*\
  !*** ./src/app/components/author/author.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorComponent": () => (/* binding */ AuthorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _author_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author.component.scss?ngResource */ 513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



let AuthorComponent = class AuthorComponent {
    constructor() { }
    ngOnInit() { }
};
AuthorComponent.ctorParameters = () => [];
AuthorComponent.propDecorators = {
    githubUsername: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    fullName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    githubAvatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
AuthorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-author',
        template: `
<div class="author ion-padding-bottom">
  <img src="{{ githubAvatar }}" class="github-avatar"/>
  <div class="text-avatar ion-padding-start">
    <span class="ion-padding-end full-name-author">{{ fullName }}</span>
    <a href="https://github.com/{{ githubUsername }}" target="_blank">
    <ion-icon name="logo-github" size="large"></ion-icon>
    </a>
  </div>
</div>
`,
        styles: [_author_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__]
    })
], AuthorComponent);



/***/ }),

/***/ 4058:
/*!*****************************************************************!*\
  !*** ./src/app/pages/information/information-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationPageRoutingModule": () => (/* binding */ InformationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information.page */ 8761);




const routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_0__.InformationPage
    }
];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformationPageRoutingModule);



/***/ }),

/***/ 6695:
/*!*********************************************************!*\
  !*** ./src/app/pages/information/information.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationPageModule": () => (/* binding */ InformationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information-routing.module */ 4058);
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.page */ 8761);
/* harmony import */ var _components_author_author_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/author/author.component */ 1530);








let InformationPageModule = class InformationPageModule {
};
InformationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _information_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformationPageRoutingModule
        ],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_1__.InformationPage, _components_author_author_component__WEBPACK_IMPORTED_MODULE_2__.AuthorComponent],
        exports: [_components_author_author_component__WEBPACK_IMPORTED_MODULE_2__.AuthorComponent]
    })
], InformationPageModule);



/***/ }),

/***/ 8761:
/*!*******************************************************!*\
  !*** ./src/app/pages/information/information.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationPage": () => (/* binding */ InformationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _information_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information.page.html?ngResource */ 7179);
/* harmony import */ var _information_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.page.scss?ngResource */ 9568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 4744);





let InformationPage = class InformationPage {
    constructor() {
        this.name = "Information";
    }
    ngOnInit() {
        _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo().then(result => {
            this.deviceName = result.name;
            this.deviceModel = result.model;
            this.devicePlatform = result.platform;
            this.deviceOperatingSystem = result.operatingSystem;
            this.deviceOsVersion = result.osVersion;
            this.deviceManufacturer = result.manufacturer;
            this.deviceWebViewVersion = result.webViewVersion;
        });
        // on set la valeur avec le theme déjà présent
        this.isDarkTheme = this.isDarkThemeFunc();
        this.handleChangePrefersColorScheme = () => {
            this.isDarkTheme = this.isDarkThemeFunc();
        };
        //this.handleChangePrefersColorScheme.bind(this);
        // on suit les changement de theme pour faire changer dynamiquement le switch
        this.mql = window.matchMedia("(prefers-color-scheme: dark)");
        this.mql.addEventListener("change", this.handleChangePrefersColorScheme);
    }
    ngOnDestroy() {
        // on arrete de suivre les changements de theme pour faire changer dynamiquement le switch
        this.mql.removeEventListener("change", this.handleChangePrefersColorScheme);
    }
    isDarkThemeFunc() {
        var _a;
        return (_a = document.body.getAttribute('data-theme')) === null || _a === void 0 ? void 0 : _a.includes('dark');
    }
    onClick(event) {
        document.body.setAttribute('data-theme', event.detail.checked ? 'dark' : 'light');
    }
};
InformationPage.ctorParameters = () => [];
InformationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-information',
        template: _information_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_information_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InformationPage);



/***/ }),

/***/ 4758:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4744:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4758);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5168)).then(m => new m.DeviceWeb()),
});




/***/ }),

/***/ 513:
/*!********************************************************************!*\
  !*** ./src/app/components/author/author.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".author {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.github-avatar {\n  width: 50px;\n  height: 50px;\n  border: 2px solid var(--ion-color-tertiary);\n  border-radius: 4px;\n}\n\n.text-avatar {\n  font-size: 18px;\n}\n\n.full-name-author {\n  vertical-align: super;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJhdXRob3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ2l0aHViLWF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRleHQtYXZhdGFyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZnVsbC1uYW1lLWF1dGhvciB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9568:
/*!********************************************************************!*\
  !*** ./src/app/pages/information/information.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7179:
/*!********************************************************************!*\
  !*** ./src/app/pages/information/information.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ name }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          <ion-icon name=\"flashlight\" color=\"secondary\" class=\"ion-padding-end\"></ion-icon> Meaning\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label>\n              NGST\n              <p>\n                National Gabriel and Space Thomas\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              APOD\n              <p>\n                Astronomy Picture of the Day\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n          <ion-card-title>\n            <ion-icon name=\"color-wand\" color=\"secondary\" class=\"ion-padding-end\"></ion-icon> Authors\n          </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <app-author githubUsername=\"thomasMagalhaes30\" fullName=\"Thomas Magalhaes\" githubAvatar=\"https://avatars.githubusercontent.com/u/74173960\"></app-author>\n        <app-author githubUsername=\"Amiralgaby\" fullName=\"Gabriel Theuws\" githubAvatar=\"https://avatars.githubusercontent.com/u/64040180\"></app-author>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          <ion-icon name=\"settings\" color=\"secondary\" class=\"ion-padding-end\"></ion-icon> Settings\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <!-- Utiliser un composant ? -->\n        <ion-list>\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n            Toggle Dark Theme\n            <ion-toggle (ionChange)=\"onClick($event)\" checked=\"{{ isDarkTheme??false }}\" slot=\"end\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          <ion-icon name=\"terminal\" color=\"secondary\" class=\"ion-padding-end\"></ion-icon> About your device\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <strong>Name:</strong>\t{{ deviceName??\"unknown\" }}<br>\n        <strong>Model:</strong>\t{{ deviceModel??\"unknown\" }}<br>\n        <strong>Platform:</strong>\t{{ devicePlatform??\"unknown\" }}<br>\n        <strong>OperatingSystem:</strong>\t{{ deviceOperatingSystem??\"unknown\" }}<br>\n        <strong>OsVersion:</strong>\t{{ deviceOsVersion??\"unknown\" }}<br>\n        <strong>Manufacturer:</strong>\t{{ deviceManufacturer??\"unknown\" }}<br>\n        <strong>WebViewVersion:</strong>\t{{ deviceWebViewVersion??\"unknown\" }}<br>\n      </ion-card-content>\n    </ion-card>\n\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_information_information_module_ts.js.map