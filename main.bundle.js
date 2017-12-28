webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-primary\">\r\n    <div class=\"container about-container\">\r\n        <p class=\"under-construction\"> To be added soon! </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-container {\n  min-height: 80vh;\n  padding-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.less")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-primary navbar-fixed\">\r\n    <nav class=\"container navbar\">\r\n      <a class=\"navbar-logo\" routerLink=\"landing\">\r\n        <img src=\"./assets/logo1.png\"/>\r\n      </a>\r\n      <i class=\"fa fa-bars navbar-toggle-btn\" aria-hidden=\"true\" *ngIf=\"!this.navVisible\" (click)=\"this.toggleNavbar()\"></i>\r\n      <i class=\"fa fa-times navbar-toggle-btn\" aria-hidden=\"true\" *ngIf=\"this.navVisible\" (click)=\"this.toggleNavbar()\"></i> \r\n      <ul class=\"navbar-list\">\r\n        <li class=\"navbar-list__item\">\r\n          <a routerLink=\"favourite\">favourites</a>\r\n        </li>\r\n        <li class=\"navbar-list__item\">\r\n          <a routerLink=\"journeys\">journeys</a>\r\n        </li>\r\n        <li class=\"navbar-list__item\">\r\n          <a routerLink=\"profile\">profile</a>\r\n        </li>\r\n        <li class=\"navbar-list__item\">\r\n          <a routerLink=\"about\">about</a>\r\n        </li>\r\n        <button class=\"navbar-button\" (click)='this.logout()' *ngIf=\"this.isLogged\">Sign out</button>\r\n      </ul>\r\n  </nav>\r\n</div>\r\n<div class=\"navbar-clearfix\"></div>\r\n<div class=\"navbar-mobile\"\r\nstyle=\"display: none; transition: all 0.7s\"\r\n[style.display]=\"this.navVisible ? 'flex' : 'none'\">\r\n  <ul class=\"navbar-list-mobile\">\r\n    <li class=\"navbar-list__item\">\r\n      <a routerLink=\"favourite\" (click)=\"this.toggleNavbar()\">favourites</a>\r\n    </li>\r\n    <li class=\"navbar-list__item\">\r\n      <a routerLink=\"journeys\" (click)=\"this.toggleNavbar()\">journeys</a>\r\n    </li>\r\n    <li class=\"navbar-list__item\">\r\n      <a routerLink=\"profile\" (click)=\"this.toggleNavbar()\">profile</a>\r\n    </li>\r\n    <li class=\"navbar-list__item\">\r\n      <a routerLink=\"about\" (click)=\"this.toggleNavbar()\">about</a>\r\n    </li>\r\n    <li class=\"navbar-list__item\">\r\n      <button class=\"navbar-button\" (click)='this.logout()' *ngIf=\"this.isLogged\">Sign out</button>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".navbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100px;\n  font-size: 16px;\n}\n.navbar-fixed {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  overflow: hidden;\n  z-index: 3;\n}\n.navbar-clearfix {\n  width: 100%;\n  height: 100px;\n  background: #0f131d;\n}\n.navbar-logo {\n  font-size: 18px;\n  color: #d82b52;\n  text-shadow: 0px 5px 25px #000000;\n  height: 100%;\n}\n.navbar-logo img {\n  height: 100%;\n}\n.navbar-button {\n  border: 2px solid #ebebeb;\n  border-radius: 3px;\n  background: #0f131d;\n  color: #ebebeb;\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.navbar-button:hover {\n  background: #ebebeb;\n  color: #0f131d;\n}\n.navbar-toggle-btn {\n  display: none;\n  color: #ebebeb;\n  padding: 20px;\n  font-size: 30px;\n}\n@media screen and (max-width: 768px) {\n  .navbar-toggle-btn {\n    display: block;\n  }\n}\n.navbar-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  list-style: none;\n}\n@media screen and (max-width: 768px) {\n  .navbar-list {\n    display: none;\n  }\n}\n.navbar-list-mobile {\n  list-style: none;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  box-shadow: 0px 25px 33px -19px rgba(0, 0, 0, 0.75);\n}\n.navbar-list__item {\n  padding: 10px;\n  color: #ebebeb;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.navbar-list__item:hover {\n  color: #ebebeb;\n}\n.navbar-mobile {\n  width: 100vw;\n  background: #0f131d;\n  position: fixed;\n  z-index: 3;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, storageService) {
        this.authService = authService;
        this.storageService = storageService;
        this.isLogged = false;
        this.navVisible = false;
        this.isLogged = !!this.storageService.get('user_id');
    }
    AppComponent.prototype.ngOnChanges = function () {
        this.isLogged = !!this.storageService.get('user_id');
    };
    AppComponent.prototype.toggleNavbar = function () {
        if (this.navVisible) {
            this.navVisible = false;
        }
        else {
            this.navVisible = true;
        }
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary_core__ = __webpack_require__("../../../../cloudinary-core/cloudinary-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cloudinary_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_4_x__ = __webpack_require__("../../../../@cloudinary/angular-4.x/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_4_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_4_x__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__journeys_journeys_component__ = __webpack_require__("../../../../../src/app/journeys/journeys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__journey_journey_component__ = __webpack_require__("../../../../../src/app/journey/journey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_journeys_service__ = __webpack_require__("../../../../../src/app/shared/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_global_isLogged__ = __webpack_require__("../../../../../src/app/shared/global/isLogged.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__polaroid_polaroid_component__ = __webpack_require__("../../../../../src/app/polaroid/polaroid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__journey_card_journey_card_component__ = __webpack_require__("../../../../../src/app/journey-card/journey-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_image_service__ = __webpack_require__("../../../../../src/app/shared/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_services_journey_resolve__ = __webpack_require__("../../../../../src/app/shared/services/journey.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modal_polaroid_modal_polaroid_component__ = __webpack_require__("../../../../../src/app/modal-polaroid/modal-polaroid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_services_images_resolve__ = __webpack_require__("../../../../../src/app/shared/services/images.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_services_fb_service__ = __webpack_require__("../../../../../src/app/shared/services/fb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_services_favouriteImages_resolve__ = __webpack_require__("../../../../../src/app/shared/services/favouriteImages.resolve.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var cloudConfig = {
    cloud_name: 'dzgtgeotp'
};
var cloudinaryLib = {
    Cloudinary: __WEBPACK_IMPORTED_MODULE_4_cloudinary_core__["Cloudinary"]
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__journeys_journeys_component__["a" /* JourneysComponent */],
            __WEBPACK_IMPORTED_MODULE_12__journey_journey_component__["a" /* JourneyComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_23__polaroid_polaroid_component__["a" /* PolaroidComponent */],
            __WEBPACK_IMPORTED_MODULE_24__journey_card_journey_card_component__["a" /* JourneyCardComponent */],
            __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_27__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_28__modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_29__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_31__modal_polaroid_modal_polaroid_component__["a" /* ModalPolaroidComponent */],
            __WEBPACK_IMPORTED_MODULE_32__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_35__map_map_component__["a" /* MapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__cloudinary_angular_4_x__["CloudinaryModule"].forRoot(cloudinaryLib, cloudConfig),
            __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAhZGyLlNuhBWwniCdhzckmou_2hRFkcpI'
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["a" /* ToastrModule */].forRoot({
                timeOut: 2000,
                positionClass: 'toast-bottom-center'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_18__shared_services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_services_journeys_service__["a" /* JourneysService */],
            __WEBPACK_IMPORTED_MODULE_25__shared_services_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_34__shared_services_fb_service__["a" /* FbService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_global_isLogged__["a" /* IsLogged */],
            __WEBPACK_IMPORTED_MODULE_30__shared_services_journey_resolve__["a" /* JourneyResolver */],
            __WEBPACK_IMPORTED_MODULE_33__shared_services_images_resolve__["a" /* ImagesResolver */],
            __WEBPACK_IMPORTED_MODULE_36__shared_services_favouriteImages_resolve__["a" /* FavouriteImagesResolver */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__journeys_journeys_component__ = __webpack_require__("../../../../../src/app/journeys/journeys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__journey_journey_component__ = __webpack_require__("../../../../../src/app/journey/journey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_global_isLogged__ = __webpack_require__("../../../../../src/app/shared/global/isLogged.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_journey_resolve__ = __webpack_require__("../../../../../src/app/shared/services/journey.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_images_resolve__ = __webpack_require__("../../../../../src/app/shared/services/images.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_favouriteImages_resolve__ = __webpack_require__("../../../../../src/app/shared/services/favouriteImages.resolve.ts");













var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot([
    { path: '', redirectTo: 'journeys', pathMatch: 'full' },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'authorize', component: __WEBPACK_IMPORTED_MODULE_6__auth_auth_component__["a" /* AuthComponent */] },
    {
        path: 'favourite',
        component: __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_global_isLogged__["a" /* IsLogged */]],
        resolve: { images: __WEBPACK_IMPORTED_MODULE_12__shared_services_favouriteImages_resolve__["a" /* FavouriteImagesResolver */] }
    },
    { path: 'journeys', component: __WEBPACK_IMPORTED_MODULE_4__journeys_journeys_component__["a" /* JourneysComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_global_isLogged__["a" /* IsLogged */]] },
    {
        path: 'journeys/:id', component: __WEBPACK_IMPORTED_MODULE_5__journey_journey_component__["a" /* JourneyComponent */],
        resolve: { journey: __WEBPACK_IMPORTED_MODULE_9__shared_services_journey_resolve__["a" /* JourneyResolver */], images: __WEBPACK_IMPORTED_MODULE_10__shared_services_images_resolve__["a" /* ImagesResolver */] },
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_global_isLogged__["a" /* IsLogged */]]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_global_isLogged__["a" /* IsLogged */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_global_isLogged__["a" /* IsLogged */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] },
    { path: '**', redirectTo: 'journeys' }
]);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper-primary\">\r\n  <div class=\"container flex-container auth-container\">\r\n    <h2>Please, sign in.</h2>\r\n    <app-login></app-login>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".auth-container {\n  min-height: 80vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.auth-container h2 {\n  color: #ebebeb;\n  font-size: 40px;\n  padding: 50px 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.less")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-secondary\">\r\n  <div class=\"container footer\">\r\n    <p>\r\n      Journey Journal. All rights reserved.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".footer {\n  min-height: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #ebebeb;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.less")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper-primary\">\r\n  <div class=\"container flex-container gallery-container\">\r\n    <div class=\"gallery-images-thumbnail\" *ngFor=\"let image of images\" (click)='showPolaroid(image)'>\r\n        <cl-image \r\n        [public-id]=image._id\r\n        class=\"thumbnail inline\" \r\n        format=\"jpg\">\r\n        <cl-transformation height=\"150\" width=\"150\" crop=\"fill\">\r\n        </cl-transformation>\r\n      </cl-image>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section>\r\n  <app-map\r\n  [images]=\"images\"\r\n  (openImageModal)=\"showPolaroid($event)\">    \r\n  </app-map>\r\n</section>\r\n<app-modal-polaroid\r\n[selectedImage]=\"this.selectedImage\"\r\n[images]=\"this.images\"\r\n[show]=\"this.showPolaroidModal\"\r\n(hide)=\"this.togglePolaroidModal()\"\r\n(imageDeletion)=\"this.removeImage($event)\">\r\n</app-modal-polaroid>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".gallery-container {\n  padding: 50px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.gallery-images-thumbnail {\n  margin: 6px;\n  border: 2px solid #ebebeb;\n  transition: all 0.5s ease-out;\n}\n.gallery-images-thumbnail:hover {\n  box-shadow: 0px 0px 130px -17px #000000;\n  transition: all .5s ease;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__ = __webpack_require__("../../../../../src/app/shared/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = (function () {
    function GalleryComponent(imageService, activatedRoute) {
        this.imageService = imageService;
        this.activatedRoute = activatedRoute;
        this.images = [];
        this.showPolaroidModal = false;
        this.images = this.activatedRoute.snapshot.data['images'];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.removeImage = function (image) {
        this.images.splice(this.images.indexOf(image), 1);
    };
    GalleryComponent.prototype.togglePolaroidModal = function () {
        this.showPolaroidModal = !this.showPolaroidModal;
    };
    GalleryComponent.prototype.showPolaroid = function (image) {
        this.selectedImage = image;
        this.togglePolaroidModal();
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], GalleryComponent);

var _a, _b;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper-primary\">\r\n  <div class=\"container home home__landing\">\r\n    <div class=\"home__landing-content\">\r\n      <h1>JOURNAL OF YOUR JOURNEY</h1>\r\n      <p>\r\n        How many times did you plan to organize all of photos from vacations, trips and journey? \r\n        How many of great photos have you deleted to free up space on hard drive?\r\n        How many of them have you lost due to missing pendrives or DVDs?\r\n        How much time did you spend on coping photos from your camera?\r\n        This is Journey Journal, your personal tool for managing, storing and sharing photos from vacations.\r\n         No more lost memories.\r\n      </p>\r\n      <app-login></app-login>\r\n    </div>\r\n    <div class=\"home__landing-image\">\r\n      <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"wrapper-white\">\r\n  <div class=\"container home home__offer\">\r\n    <h1>WHAT EXACTLY OUR JOURNAL OFFERS?</h1>\r\n    <div class=\"home__offer-list\">\r\n      <div class=\"home__offer-list__item\">\r\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\r\n        <h1>Storing Photos ...</h1>\r\n        <p>\r\n         You can store photos from all of yours small and big trips without fear of losing any data. \r\n         We use Cloudinary to provide You with a quick photos uploading and downloading service.\r\n        </p>\r\n      </div>\r\n      <div class=\"home__offer-list__item\">\r\n        <i class=\"fa fa-map-o\" aria-hidden=\"true\"></i>\r\n        <h1>... Places ...</h1>\r\n        <p>\r\n          We remember exact places where Your photos where taken so You can go back to those wonderful \r\n          places and see where have You been!\r\n        </p>\r\n      </div>\r\n      <div class=\"home__offer-list__item\">\r\n        <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i>\r\n        <h1>... and more!</h1>\r\n        <p>\r\n          As well as storing photos and places we have bunch of other staff like journey date, \r\n          social sharing or gallery with favourite photos from all Your journeys!\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"wrapper-white\">\r\n  <div class=\"container home home__about\">\r\n    <h1>HOW DOES IT WORKS?</h1>\r\n    <div class=\"home__about-list\">\r\n      <div class=\"home__about-list__item\">\r\n        <i class=\"fa fa-calendar-plus-o\" aria-hidden=\"true\"></i>\r\n        <div class=\"home__about-list__item-content\">\r\n          <h1>Create Journey</h1>\r\n          <p>\r\n            Get Our FREE Android App and create an account. You can sign in using your Facebook as well.\r\n             Then create a new Journey, give it a title, description, start and end date. \r\n          </p>\r\n        </div>\r\n      </div>\r\n      <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n      <div class=\"home__about-list__item\">\r\n        <i class=\"fa fa-camera-retro\" aria-hidden=\"true\"></i>\r\n        <div class=\"home__about-list__item-content\">\r\n          <h1>Take photos</h1>\r\n          <p>\r\n            Take photos using Our App while having your trip. \r\n            You can also use your phone camera and upload images from gallery.\r\n            You can as well create trips from the past and upload old photos.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n      <div class=\"home__about-list__item\">\r\n        <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\r\n        <div class=\"home__about-list__item-content\">\r\n          <h1>Manage, edit, share!</h1>\r\n          <p>\r\n            You can view, edit and share all of your images from almost any device.\r\n             Forget about fulled micro-SD or lost data. We take care of your photos.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".home {\n  min-height: 700px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n@media screen and (max-width: 768px) {\n  .home {\n    padding-top: 30px;\n    padding-bottom: 30px;\n  }\n}\n.home__landing {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n@media screen and (max-width: 768px) {\n  .home__landing {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n}\n@media screen and (max-width: 1170px) {\n  .home__landing {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n}\n.home__landing-content {\n  max-width: 683px;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n@media screen and (max-width: 1170px) {\n  .home__landing-content {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n  }\n  .home__landing-content > * {\n    text-align: center;\n    padding: 20px 0px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .home__landing-content > * {\n    padding: 20px;\n  }\n}\n.home__landing-content > h1 {\n  color: #d82b52;\n  font-size: 76px;\n  text-shadow: 0px 5px 25px #000000;\n}\n@media screen and (max-width: 768px) {\n  .home__landing-content > h1 {\n    font-size: 30px;\n  }\n}\n.home__landing-content > p {\n  font-size: 24px;\n  line-height: 1.5;\n  color: #ebebeb;\n  padding-right: 30px;\n}\n@media screen and (max-width: 1170px) {\n  .home__landing-content > p {\n    padding: 0 50px;\n  }\n}\n.home__landing-image > i {\n  font-size: 600px;\n  color: #ebebeb;\n}\n@media screen and (max-width: 1170px) {\n  .home__landing-image > i {\n    font-size: 450px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .home__landing-image > i {\n    font-size: 300px;\n  }\n}\n.home__offer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #0f131d;\n  border-bottom: 10px dotted #ebebeb;\n}\n.home__offer > h1 {\n  font-size: 50px;\n  text-align: center;\n}\n@media screen and (max-width: 1170px) {\n  .home__offer > h1 {\n    font-size: 40px;\n    padding: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .home__offer > h1 {\n    font-size: 30px;\n  }\n}\n.home__offer-list {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.home__offer-list__item {\n  max-width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.home__offer-list__item > * {\n  padding: 10px;\n}\n.home__offer-list__item > i {\n  color: #d82b52;\n  font-size: 100px;\n}\n.home__offer-list__item > p {\n  text-align: center;\n}\n.home__about {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #0f131d;\n}\n.home__about > h1 {\n  color: #d82b52;\n  font-size: 50px;\n  padding: 30px 20px;\n  text-align: center;\n}\n@media screen and (max-width: 1170px) {\n  .home__about > h1 {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .home__about > h1 {\n    font-size: 30px;\n  }\n}\n.home__about-list {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0;\n}\n.home__about-list > i {\n  color: #ebebeb;\n  font-size: 100px;\n}\n.home__about-list__item {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 60px;\n}\n.home__about-list__item-content {\n  max-width: 1100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.home__about-list__item-content > * {\n  padding: 10px 0;\n}\n.home__about-list__item-content > h1 {\n  color: #d82b52;\n}\n@media screen and (max-width: 1170px) {\n  .home__about-list__item-content > p {\n    text-align: center;\n  }\n}\n@media screen and (max-width: 1170px) {\n  .home__about-list__item-content {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n}\n.home__about-list__item > i {\n  color: #0f131d;\n  font-size: 100px;\n  padding: 10px;\n}\n@media screen and (max-width: 1170px) {\n  .home__about-list__item > i {\n    display: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.less")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/journey-card/journey-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"journey-card-container\">\r\n  <div class=\"journey-card-content\" (click)=\"navigateToJourney()\">\r\n    <div class=\"journey-card-content-background\" *ngIf=\"journey.background_image_id !== ''\">\r\n      <cl-image \r\n      [public-id]=\"journey.background_image_id\"\r\n      class=\"thumbnail inline\" \r\n      format=\"jpg\">\r\n        <cl-transformation height=\"400\" width=\"400\" crop=\"fill\">\r\n        </cl-transformation>\r\n      </cl-image>\r\n    </div>\r\n    <div class=\"journey-card-content-text\">\r\n        <p>{{ journey.title }}</p>\r\n        <p>{{ journey.date_start | date:'shortDate' }} - {{ journey.date_end | date:'shortDate' }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/journey-card/journey-card.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".journey-card-container {\n  padding: 5px;\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.journey-card-background {\n  position: relative;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.journey-card-content {\n  position: relative;\n  border: 15px solid #ebebeb;\n  box-shadow: 0px 0px 39px -5px rgba(0, 0, 0, 0.75);\n  transition: all 0.1s ease-in;\n  color: #ebebeb;\n  background: linear-gradient(#0f131d, #d82b52);\n}\n.journey-card-content:hover {\n  box-shadow: 0px 0px 96px 3px rgba(0, 0, 0, 0.75);\n}\n.journey-card-content:hover > p:first-of-type {\n  font-size: 42px;\n}\n.journey-card-content-background {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.journey-card-content-text {\n  z-index: 2;\n  position: relative;\n  width: 400px;\n  height: 400px;\n  background: rgba(0, 0, 0, 0.2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all 0.3s ease-in;\n}\n.journey-card-content-text:hover {\n  background: rgba(0, 0, 0, 0.6);\n  transition: all 0.1s ease-in;\n}\n.journey-card-content-text > p {\n  font-family: 'Pacifico', cursive;\n  text-align: center;\n}\n.journey-card-content-text > p:first-of-type {\n  font-size: 40px;\n  transition: all 0.2s ease;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/journey-card/journey-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_Journey__ = __webpack_require__("../../../../../src/app/shared/models/Journey.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JourneyCardComponent = (function () {
    function JourneyCardComponent(router) {
        this.router = router;
    }
    JourneyCardComponent.prototype.ngOnInit = function () {
    };
    JourneyCardComponent.prototype.navigateToJourney = function () {
        this.router.navigateByUrl('journeys/' + this.journey._id);
    };
    return JourneyCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_Journey__["a" /* Journey */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_Journey__["a" /* Journey */]) === "function" && _a || Object)
], JourneyCardComponent.prototype, "journey", void 0);
JourneyCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-journey-card',
        template: __webpack_require__("../../../../../src/app/journey-card/journey-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/journey-card/journey-card.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], JourneyCardComponent);

var _a, _b;
//# sourceMappingURL=journey-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/journey/journey.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"wrapper-primary\">\r\n  <div class=\"container journey-info\">\r\n    <p>{{ journey.title }}</p>\r\n    <p>{{ journey.date_start | date:'shortDate' }} - {{ journey.date_end | date:'shortDate' }}</p>\r\n    <p>{{ images.length }} images</p>\r\n    <div class=\"journey-info-tools\">\r\n      <i class=\"fa fa-pencil\" title=\"Edit Journey\" aria-hidden=\"true\" (click)=\"toggleEditModal()\"></i>\r\n      <i class=\"fa fa-trash-o\" title=\"Delete Journey\" aria-hidden=\"true\" (click)=\"toggleDeleteModal()\"></i>\r\n      <i class=\"fa fa-download\" title=\"Download Images\" aria-hidden=\"true\" (click)=\"getDownloadUrl()\"></i>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"wrapper-primary\">\r\n  <div class=\"container journey-description\">\r\n    <p>Description\r\n      <i class=\"fa fa-chevron-down\" \r\n      aria-hidden=\"true\" *ngIf=\"!this.descriptionVisible\" (click)=\"toggleDescription()\"></i>\r\n      <i class=\"fa fa-chevron-up\" \r\n      aria-hidden=\"true\" *ngIf=\"this.descriptionVisible\" (click)=\"toggleDescription()\"></i>\r\n    </p>\r\n    <p class=\"journey-description-content\" *ngIf=\"this.descriptionVisible\">\r\n      \"{{ journey.description }}\"\r\n    </p>\r\n  </div>\r\n</section> -->\r\n<section class=\"wrapper-primary\">\r\n  <div class=\"container journey-postcard\">\r\n    <div class=\"journey-postcard-content\">\r\n      <p>{{ journey.title }}</p>\r\n      <p>{{ images.length }} images</p>\r\n      <p>{{ journey.date_start | date:'shortDate' }} - {{ journey.date_end | date:'shortDate' }}</p>\r\n      <p class=\"journey-postcard-content-description\">{{ this.description }}</p>\r\n      <div class=\"journey-postcard-content-tools\">\r\n        <i class=\"fa fa-pencil\" title=\"Edit Journey\" aria-hidden=\"true\" (click)=\"toggleEditModal()\"></i>\r\n        <i class=\"fa fa-trash-o\" title=\"Delete Journey\" aria-hidden=\"true\" (click)=\"toggleDeleteModal()\"></i>\r\n        <i class=\"fa fa-download\" title=\"Download Images\" aria-hidden=\"true\" (click)=\"getDownloadUrl()\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"journey-postcard-image\">\r\n      <cl-image\r\n      *ngIf=\"journey.background_image_id !== ''\"\r\n      [public-id]=\"journey.background_image_id\"\r\n      class=\"thumbnail inline\" \r\n      format=\"jpg\">\r\n        <cl-transformation height=\"400\" width=\"400\" crop=\"fill\">\r\n        </cl-transformation>\r\n      </cl-image>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"wrapper-primary\">\r\n  <div class=\"container flex-container journey-images\">\r\n    <div class=\"journey-images-thumbnail\" *ngFor=\"let image of images\" (click)='showPolaroid(image)'>\r\n        <cl-image \r\n        [public-id]=image._id\r\n        class=\"thumbnail inline\" \r\n        format=\"jpg\">\r\n        <cl-transformation height=\"150\" width=\"150\" crop=\"fill\">\r\n        </cl-transformation>\r\n      </cl-image>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section>\r\n  <app-map\r\n  [images]=\"this.images\"\r\n  (openImageModal)=\"showPolaroid($event)\">    \r\n  </app-map>\r\n</section>\r\n<app-modal [show]=\"this.showEditModal\" (hide)=\"this.toggleEditModal()\">\r\n  <h2 header>Edit Journey</h2>\r\n  <form class=\"modal-form\" #journeyForm=\"ngForm\" (ngSubmit)=\"editJourney(journeyForm)\" content>\r\n    <label class=\"modal-form-input-label\" for=\"title\">Title</label>\r\n    <input class=\"modal-form-input\" type=\"text\" id=\"title\" name=\"title\" maxlength=30 ngModel>\r\n    <label class=\"modal-form-input-label\" for=\"date_start\">Start date</label>\r\n    <input class=\"modal-form-input\" type=\"date\" id=\"date_start\" name=\"date_start\" ngModel>\r\n    <label class=\"modal-form-input-label\" for=\"date_end\">End date</label>\r\n    <input class=\"modal-form-input\" type=\"date\" id=\"date_end\" name=\"date_end\" ngModel>\r\n    <label class=\"modal-form-input-label\" for=\"description\">Description</label>\r\n    <textarea class=\"modal-form-input\" id=\"description\" name=\"description\" ngModel rows=\"6\" cols=\"50\">\r\n    </textarea>    \r\n    <button type=\"submit\" class=\"button modal-form-button\">\r\n      Submit changes\r\n    </button>\r\n  </form>\r\n</app-modal>\r\n<app-modal [show]=\"this.showDeleteModal\" (hide)=\"this.toggleDeleteModal()\">\r\n  <h2 header>Delete Journey</h2>\r\n  <div content>\r\n    <p>Are you sure you want to delete this journey? All related images will be removed permanently.</p>\r\n    <div class=\"modal-form-button-group\">\r\n      <button class=\"button modal-form-button button-cancel\" (click)=\"this.toggleDeleteModal()\">\r\n        Cancel\r\n      </button>\r\n      <button class=\"button modal-form-button\" (click)=\"deleteJourney()\">\r\n        Delete\r\n      </button>\r\n    </div>\r\n  </div>\r\n</app-modal>\r\n<app-modal-polaroid\r\n[selectedImage]=\"this.selectedImage\"\r\n[images]=\"this.images\"\r\n[show]=\"this.showPolaroidModal\"\r\n(hide)=\"this.togglePolaroidModal()\"\r\n(imageDeletion)=\"this.removeImage($event)\">\r\n</app-modal-polaroid>\r\n"

/***/ }),

/***/ "../../../../../src/app/journey/journey.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".journey-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  border-top: 1px solid #474F5A;\n  border-bottom: 1px solid #474F5A;\n}\n.journey-info > p {\n  padding: 20px 40px;\n  color: #ebebeb;\n  text-transform: uppercase;\n  font-size: 20px;\n}\n.journey-info > p:nth-child(even) {\n  border-left: 1px solid #474F5A;\n  border-right: 1px solid #474F5A;\n}\n.journey-info-tools i {\n  border-left: 1px solid #474F5A;\n  font-size: 20px;\n  padding: 20px 40px;\n  color: #ebebeb;\n}\n.journey-info-tools i:hover {\n  color: #d82b52;\n}\n.journey-postcard {\n  background: #ebebeb;\n  color: #0f131d;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  box-shadow: inset 0px 0px 52px -5px rgba(0, 0, 0, 0.75);\n  height: 404px;\n  border: 2px solid white;\n}\n.journey-postcard-content {\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 28px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.journey-postcard-content > p {\n  font-family: 'Pacifico', cursive;\n  font-size: 20px;\n  width: 100%;\n  border-bottom: 1px solid #d4d4d4;\n}\n.journey-postcard-content-description {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: scroll;\n}\n.journey-postcard-content-tools {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  font-size: 20px;\n}\n.journey-postcard-content-tools > i {\n  margin: 10px;\n}\n.journey-description {\n  color: #ebebeb;\n  text-transform: uppercase;\n  padding: 20px;\n  font-family: 'Lato', sans-serif;\n  border-bottom: 1px solid #474F5A;\n}\n.journey-description p {\n  padding-top: 10px;\n}\n.journey-description p:first-of-type {\n  font-size: 20px;\n  padding-top: 0px;\n}\n.journey-description p i {\n  padding: 10px;\n  font-size: 20px;\n}\n.journey-description-content {\n  overflow: hidden;\n  text-transform: none;\n  font-size: 25px;\n}\n.journey-images {\n  padding: 50px 0;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.journey-images-thumbnail {\n  margin: 6px;\n  border: 2px solid #ebebeb;\n  transition: all 0.5s ease-out;\n}\n.journey-images-thumbnail:hover {\n  box-shadow: 0px 0px 130px -17px #000000;\n  transition: all .5s ease;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/journey/journey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__ = __webpack_require__("../../../../../src/app/shared/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_journeys_service__ = __webpack_require__("../../../../../src/app/shared/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_Journey__ = __webpack_require__("../../../../../src/app/shared/models/Journey.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JourneyComponent = (function () {
    function JourneyComponent(activatedRoute, imageService, journeysService, router) {
        this.activatedRoute = activatedRoute;
        this.imageService = imageService;
        this.journeysService = journeysService;
        this.router = router;
        this.journey = new __WEBPACK_IMPORTED_MODULE_4__shared_models_Journey__["a" /* Journey */]();
        this.images = [];
        this.description = '';
        this.staticDescription = '*Add description by clicking on edit button below...*';
        this.descriptionVisible = false;
        this.showEditModal = false;
        this.showDeleteModal = false;
        this.showPolaroidModal = false;
        this.images = this.activatedRoute.snapshot.data['images'];
        this.journey = this.activatedRoute.snapshot.data['journey'];
        this.description = this.setDescription(this.journey.description);
    }
    JourneyComponent.prototype.ngOnInit = function () { };
    JourneyComponent.prototype.toggleDescription = function () {
        this.descriptionVisible = !this.descriptionVisible;
    };
    JourneyComponent.prototype.toggleEditModal = function () {
        this.showEditModal = !this.showEditModal;
    };
    JourneyComponent.prototype.toggleDeleteModal = function () {
        this.showDeleteModal = !this.showDeleteModal;
    };
    JourneyComponent.prototype.togglePolaroidModal = function () {
        this.showPolaroidModal = !this.showPolaroidModal;
    };
    JourneyComponent.prototype.showPolaroid = function (image) {
        this.selectedImage = image;
        this.togglePolaroidModal();
    };
    JourneyComponent.prototype.selectNextPolaroid = function () {
        var position = this.images.indexOf(this.selectedImage);
        if (position === this.images.length - 1) {
            this.selectedImage = this.images[0];
        }
        else {
            this.selectedImage = this.images[position + 1];
        }
    };
    JourneyComponent.prototype.selectPreviousPolaroid = function () {
        var position = this.images.indexOf(this.selectedImage);
        if (position === 0) {
            this.selectedImage = this.images[this.images.length - 1];
        }
        else {
            this.selectedImage = this.images[position - 1];
        }
    };
    JourneyComponent.prototype.removeImage = function (image) {
        this.images.splice(this.images.indexOf(image), 1);
    };
    JourneyComponent.prototype.deleteJourney = function () {
        var _this = this;
        this.journeysService.deleteJourney(this.journey._id)
            .subscribe(function (success) { return _this.router.navigateByUrl('/journeys'); });
        this.toggleDeleteModal();
    };
    JourneyComponent.prototype.editJourney = function (form) {
        var _this = this;
        var payload = __assign({ _id: this.journey._id }, form.value);
        this.journeysService.editJourney(payload)
            .subscribe(function (success) {
            _this.journey = success.journey;
            _this.description = _this.setDescription(_this.journey.description);
        });
        this.toggleEditModal();
    };
    JourneyComponent.prototype.getDownloadUrl = function () {
        var _this = this;
        this.journeysService.getJourneyImagesZipUrl(this.journey._id)
            .subscribe(function (data) {
            _this.downloadURI(data.url, _this.journey.title);
        });
    };
    JourneyComponent.prototype.setDescription = function (description) {
        return (description !== '') ? description : this.staticDescription;
    };
    JourneyComponent.prototype.downloadURI = function (uri, name) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return JourneyComponent;
}());
JourneyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-journey',
        template: __webpack_require__("../../../../../src/app/journey/journey.component.html"),
        styles: [__webpack_require__("../../../../../src/app/journey/journey.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__["a" /* ImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_journeys_service__["a" /* JourneysService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], JourneyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=journey.component.js.map

/***/ }),

/***/ "../../../../../src/app/journeys/journeys.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper-primary\">\r\n  <div class=\"container journeys-filters\">\r\n    <div class=\"journeys-filters__list\">\r\n      <div class=\"journeys-filters__list-element\">\r\n        <p>Sort by:</p>\r\n      </div>\r\n      <div class=\"journeys-filters__list-element\">\r\n        <p>Date</p>\r\n        <i class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"journeys-filters__list-element\">\r\n        <p>Title</p>\r\n        <i class=\"fa fa-sort-numeric-asc\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n    <input placeholder=\"SEARCH\"(keyup)=\"onSearch($event)\"/>\r\n  </div>\r\n</section>\r\n<section class=\"wrapper-primary\">\r\n  <div class=\"container flex-container journeys-list\">\r\n    <app-journey-card *ngFor=\"let journey of journeysList\" [journey]='journey'></app-journey-card>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/journeys/journeys.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".journeys-filters {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 40px 20px;\n}\n@media screen and (max-width: 768px) {\n  .journeys-filters {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.journeys-filters__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  color: #ebebeb;\n}\n.journeys-filters__list-element {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 20px;\n}\n.journeys-filters__list-element:first-of-type {\n  color: #ebebeb;\n}\n.journeys-filters__list-element > p {\n  margin-right: 10px;\n}\n.journeys-filters > input {\n  background-color: #474F5A;\n  color: #ebebeb;\n  border-radius: 5px;\n  border-width: 0;\n  padding: 20px 30px;\n}\n.journeys-filters > input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #ebebeb;\n}\n.journeys-filters > input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #ebebeb;\n}\n.journeys-list {\n  min-height: 65vh;\n  padding: 40px 0;\n  padding-bottom: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/journeys/journeys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_journeys_service__ = __webpack_require__("../../../../../src/app/shared/services/journeys.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JourneysComponent = (function () {
    function JourneysComponent(journeysService) {
        var _this = this;
        this.journeysService = journeysService;
        this.journeys = [];
        this.journeysList = [];
        this.journeysService
            .getJourneys()
            .subscribe(function (journeys) {
            _this.journeys = journeys;
            _this.journeysList = journeys;
        });
    }
    JourneysComponent.prototype.ngOnInit = function () {
    };
    JourneysComponent.prototype.onSearch = function ($event) {
        this.journeysList = this.journeys.filter(function (journey) { return journey.title.includes($event.target.value); });
    };
    return JourneysComponent;
}());
JourneysComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-journeys',
        template: __webpack_require__("../../../../../src/app/journeys/journeys.component.html"),
        styles: [__webpack_require__("../../../../../src/app/journeys/journeys.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_journeys_service__["a" /* JourneysService */]) === "function" && _a || Object])
], JourneysComponent);

var _a;
//# sourceMappingURL=journeys.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.showForm\">\r\n  <form class=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\r\n    <input class=\"form-input\" type=\"email\" placeholder=\"EMAIL\" name=\"email\" ngModel>\r\n    <input class=\"form-input\" type=\"password\" placeholder=\"PASSWORD\" name=\"password\" ngModel>\r\n    <div class=\"form-auth-group\">\r\n      <a><i class=\"fa fa-facebook-square\" aria-hidden=\"true\" (click)=\"facebookAuthorization()\"></i></a>\r\n      <button type=\"submit\" class=\"button\">\r\n        SIGN IN\r\n      </button>\r\n    </div>\r\n  </form>\r\n  <a class=\"link_signup\" (click)=\"navigateToRegister()\">Don't have an account? Sign up now!</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 500px;\n}\n@media screen and (max-width: 600px) {\n  .form {\n    min-width: 0;\n    width: 100%;\n  }\n}\n.form > * {\n  margin: 10px 0;\n}\n.form-input {\n  width: 100%;\n  background-color: #474F5A;\n  color: #ebebeb;\n  border-radius: 5px;\n  border-width: 0;\n  padding: 20px 30px;\n}\n.form-input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #ebebeb;\n}\n.form-input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #ebebeb;\n}\n.form-auth-group {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.link_signup {\n  margin: 0 auto;\n}\n.link_signup:hover {\n  text-shadow: 0px 5px 25px #000000;\n}\n.fa-facebook-square {\n  color: #d82b52;\n  font-size: 60px;\n}\n.fa-facebook-square:hover {\n  text-shadow: 0px 5px 25px #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__ = __webpack_require__("../../../../../src/app/shared/services/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(authService, storageService, router, toastr, fbService) {
        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
        this.toastr = toastr;
        this.fbService = fbService;
        this.showForm = true;
        if (!!this.storageService.get('user_id')) {
            this.showForm = false;
        }
        else {
            this.showForm = true;
        }
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        var payload = loginForm.form.value;
        this.authService
            .signIn(payload)
            .subscribe(function (response) {
            _this.storeUser(response);
            _this.toastr.success('Signed in!', 'Success');
            _this.navigateToHomePage();
        }, function (error) {
            console.log(error);
            _this.toastr.error('Provided wrong user or password', 'Error');
            loginForm.reset();
        });
    };
    LoginComponent.prototype.storeUser = function (response) {
        var token = response.token, _id = response.user._id;
        this.storageService.set('token', token);
        this.storageService.set('user_id', _id);
    };
    LoginComponent.prototype.navigateToHomePage = function () {
        this.router.navigateByUrl('journeys');
        window.location.reload();
    };
    LoginComponent.prototype.navigateToRegister = function () {
        this.router.navigateByUrl('register');
    };
    LoginComponent.prototype.facebookAuthorization = function () {
        var _this = this;
        this.fbService.authenticate().then(function (fb) {
            var data = {
                user_id: _this.storageService.get('user_id') || null,
                facebook_user_id: fb.facebook_user_id,
                facebook_token: fb.facebook_token
            };
            _this.authService.authFacebook(data).subscribe(function (res) {
                _this.storageService.set('fb_token', fb.facebook_token);
                _this.storageService.set('token', res.data.access_token);
                _this.storageService.set('user_id', res.data.user_id);
                _this.navigateToHomePage();
            }, function (err) { return console.log(err); });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__["a" /* FbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__["a" /* FbService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container wrapper-map\" *ngIf=\"mapImages.length > 0\">\r\n  <agm-map\r\n  [latitude]=\"latitude\"\r\n  [longitude]=\"longitude\"\r\n  [zoom]=\"this.zoom\"\r\n  [fitBounds]=\"this.fitBounds\"\r\n  [styles]=\"this.styles\"\r\n  [scrollwheel]=false>\r\n      <agm-marker *ngFor=\"let image of mapImages\"\r\n      (mouseOver)=\"mouseOver(infoWindow)\"\r\n      [longitude]=\"convertStringToNumber(image.longitude)\"\r\n      [latitude]=\"convertStringToNumber(image.latitude)\">\r\n        <agm-info-window (click)='openModal(image)' #infoWindow>\r\n          <cl-image \r\n            (click)='openModal(image)'\r\n            [public-id]=image._id\r\n            class=\"thumbnail inline\" \r\n            format=\"jpg\">\r\n            <cl-transformation height=\"150\" width=\"150\" crop=\"fit\">\r\n            </cl-transformation>\r\n          </cl-image>\r\n        </agm-info-window>\r\n      </agm-marker>\r\n  </agm-map>\r\n</div>\r\n<div class=\"container\" *ngIf=\"mapImages.length === 0\">\r\n  <p class=\"no-map\">Enable geolocalization in mobile app to display images on map.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".no-map {\n  text-align: center;\n  padding: 40px;\n  color: #ebebeb;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_global_mapStyles__ = __webpack_require__("../../../../../src/app/shared/global/mapStyles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent() {
        this.images = [];
        this.openImageModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mapImages = [];
        this.thumbnailOnMap = null;
        this.longitude = 16.9273255;
        this.latitude = 52.467540;
        this.styles = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.initMapStyles(__WEBPACK_IMPORTED_MODULE_1__shared_global_mapStyles__["a" /* mapStyles */]);
        this.initMapStart(this.images);
        this.initMapZoom(13);
        this.mapImages = this.getImagesForMap(this.images);
        this.fitBounds = this.getMapBounds(this.mapImages);
    };
    MapComponent.prototype.getImagesForMap = function (images) {
        return images.filter(function (image) { return image.latitude !== '' && image.longitude !== ''; });
    };
    MapComponent.prototype.openModal = function (image) {
        this.openImageModal.emit(image);
    };
    MapComponent.prototype.mouseOver = function (infoWindow, $event) {
        if (this.thumbnailOnMap !== null) {
            this.thumbnailOnMap.close();
        }
        this.thumbnailOnMap = infoWindow;
        infoWindow.open();
    };
    MapComponent.prototype.initMapStyles = function (styles) {
        this.styles = styles;
    };
    MapComponent.prototype.initMapStart = function (images) {
        var index = 0, found = false;
        while (images[index] && !found) {
            if (images[index].longitude && images[index].longitude !== '') {
                this.longitude = this.convertStringToNumber(this.images[index].longitude);
                this.latitude = this.convertStringToNumber(this.images[index].latitude);
                found = true;
            }
            index++;
        }
    };
    MapComponent.prototype.initMapZoom = function (zoom) {
        this.zoom = zoom;
    };
    MapComponent.prototype.getMapBounds = function (images) {
        if (images.length) {
            var minLatitude_1 = images[0].latitude, maxLatitude_1 = images[0].latitude, minLongitude_1 = images[0].longitude, maxLongitude_1 = images[0].longitude;
            images.forEach(function (image) {
                maxLongitude_1 = (image.longitude > maxLongitude_1) ? image.longitude : maxLongitude_1;
                minLongitude_1 = (image.longitude < minLongitude_1) ? image.longitude : minLongitude_1;
                minLatitude_1 = (image.latitude < minLatitude_1) ? image.latitude : minLatitude_1;
                maxLatitude_1 = (image.latitude > maxLatitude_1) ? image.latitude : maxLatitude_1;
            });
            return {
                east: this.convertStringToNumber(maxLongitude_1),
                west: this.convertStringToNumber(minLongitude_1),
                north: this.convertStringToNumber(maxLatitude_1),
                south: this.convertStringToNumber(minLatitude_1)
            };
        }
    };
    MapComponent.prototype.convertStringToNumber = function (value) {
        return +value;
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MapComponent.prototype, "images", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MapComponent.prototype, "openImageModal", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.less")]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

var _a;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal-polaroid/modal-polaroid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-polaroid-container\" *ngIf=\"show\">\r\n  <i class=\"fa fa-times modal-polaroid-container-exit\" aria-hidden=\"true\" (click)=\"closeModal()\"></i>\r\n  <div class=\"modal-polaroid-container-content\">\r\n    <i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\" (click)=\"selectPrevious()\"></i>\r\n    <div>\r\n      <div class=\"polaroid-center\" *ngFor=\"let image of images\">\r\n        <app-polaroid\r\n        *ngIf=\"this.selectedImage === image\" \r\n        [image]=\"this.image\"\r\n        (imageDeletion)=\"this.emitRemoveImage($event)\">\r\n        </app-polaroid>\r\n      </div>\r\n    </div>\r\n    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\" (click)=\"selectNext()\"></i>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal-polaroid/modal-polaroid.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".modal-polaroid-container {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  margin: 0 auto;\n  background: rgba(51, 63, 75, 0.7);\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  padding: 0 100px;\n}\n.modal-polaroid-container-content {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.modal-polaroid-container-content i {\n  font-size: 50px;\n  color: #ebebeb;\n}\n.modal-polaroid-container-content i:hover {\n  box-shadow: 0px 0px 130px -17px #000000;\n  transition: all .5s ease;\n}\n.modal-polaroid-container-content i:active {\n  color: #d82b52;\n}\n.modal-polaroid-container-exit {\n  font-size: 50px;\n  color: #ebebeb;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n.modal-polaroid-container-exit:hover {\n  box-shadow: 0px 0px 130px -17px #000000;\n  transition: all .5s ease;\n}\n.modal-polaroid-container-exit:active {\n  color: #d82b52;\n}\n.polaroid-center {\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal-polaroid/modal-polaroid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEY_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPolaroidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_Image__ = __webpack_require__("../../../../../src/app/shared/models/Image.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["ESCAPE"] = 27] = "ESCAPE";
})(KEY_CODE || (KEY_CODE = {}));
var ModalPolaroidComponent = (function () {
    function ModalPolaroidComponent() {
        this.show = false;
        this.hide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imageDeletion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalPolaroidComponent.prototype.ngOnInit = function () {
    };
    ModalPolaroidComponent.prototype.closeModal = function () {
        this.hide.emit(false);
    };
    ModalPolaroidComponent.prototype.selectPrevious = function () {
        var position = this.images.indexOf(this.selectedImage);
        if (position === 0) {
            this.selectedImage = this.images[this.images.length - 1];
        }
        else {
            this.selectedImage = this.images[position - 1];
        }
    };
    ModalPolaroidComponent.prototype.selectNext = function () {
        var position = this.images.indexOf(this.selectedImage);
        if (position === this.images.length - 1) {
            this.selectedImage = this.images[0];
        }
        else {
            this.selectedImage = this.images[position + 1];
        }
    };
    ModalPolaroidComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === KEY_CODE.RIGHT_ARROW && this.show) {
            this.selectNext();
        }
        if (event.keyCode === KEY_CODE.LEFT_ARROW && this.show) {
            this.selectPrevious();
        }
        if (event.keyCode === KEY_CODE.ESCAPE && this.show) {
            this.closeModal();
        }
    };
    ModalPolaroidComponent.prototype.emitRemoveImage = function ($event) {
        this.imageDeletion.emit($event);
        this.selectNext();
    };
    return ModalPolaroidComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_Image__["a" /* Image */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_Image__["a" /* Image */]) === "function" && _a || Object)
], ModalPolaroidComponent.prototype, "selectedImage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ModalPolaroidComponent.prototype, "images", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalPolaroidComponent.prototype, "show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ModalPolaroidComponent.prototype, "hide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ModalPolaroidComponent.prototype, "imageDeletion", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalPolaroidComponent.prototype, "keyEvent", null);
ModalPolaroidComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-polaroid',
        template: __webpack_require__("../../../../../src/app/modal-polaroid/modal-polaroid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal-polaroid/modal-polaroid.component.less")]
    }),
    __metadata("design:paramtypes", [])
], ModalPolaroidComponent);

var _a, _b, _c;
//# sourceMappingURL=modal-polaroid.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\" *ngIf=\"show\">\r\n  <div class=\"modal-container-content\">\r\n    <i class=\"fa fa-times modal-container-exit\" aria-hidden=\"true\" (click)=\"closeModal()\"></i>\r\n    <h2>\r\n        <ng-content select=\"[header]\"></ng-content>\r\n    </h2>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".modal-container {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  margin: 0 auto;\n  background: rgba(51, 63, 75, 0.7);\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n.modal-container-content {\n  width: 600px;\n  background: #ebebeb;\n  padding: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.modal-container-content h2 {\n  margin: 10px;\n  color: #0f131d;\n  font-family: 'Lato', sans-serif;\n}\n.modal-container-exit {\n  font-size: 30px;\n  color: #d82b52;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.show = false;
        this.hide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.closeModal = function () {
        this.hide.emit(false);
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ModalComponent.prototype, "hide", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.less")]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/polaroid/polaroid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"polaroid-container\">\r\n  <div class=\"polaroid-image\">\r\n    <cl-image \r\n      public-id={{image._id}}\r\n      class=\"thumbnail inline\" \r\n      format=\"jpg\">\r\n      <cl-transformation \r\n        [attr.height]=\"size\" \r\n        [attr.width]=\"size\" \r\n        crop=\"fit\">\r\n      </cl-transformation>\r\n    </cl-image>\r\n  </div>\r\n  <div class=\"polaroid-info\">\r\n    <p>{{ image.title }}</p>\r\n    <div class=\"polaroid-info-bottom-row\">\r\n      <p>{{ image.date | date:'shortDate' }}</p>\r\n      <div class=\"polaroid-info-tools\">        \r\n        <i class=\"fa fa-facebook\" title=\"Share via Facebook\" aria-hidden=\"true\" (click)=\"share()\"></i>          \r\n        <i class=\"fa fa-pencil\" title=\"Edit image\"  aria-hidden=\"true\" (click)=\"this.toggleEditModal()\"></i>\r\n        <i class=\"fa fa-picture-o\" title=\"Set as Journey background\" aria-hidden=\"true\" (click)=\"this.setAsJourneyBackground()\"></i>\r\n        <i class=\"fa fa-star-o\" aria-hidden=\"true\" title=\"Set as Favourite\" *ngIf=\"!image.isFavourite\" (click)=\"toggleIsFavourite(true)\"></i>\r\n        <i class=\"fa fa-star\"  aria-hidden=\"true\" title=\"Favourite\" *ngIf=\"image.isFavourite\" (click)=\"toggleIsFavourite(false)\"></i>\r\n        <i class=\"fa fa-trash-o\" title=\"Delete image\" aria-hidden=\"true\" (click)=\"deleteImage()\"></i>       \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-modal [show]=\"this.showEditModal\" (hide)=\"this.showEditModal = $event\">\r\n  <h2 header>Edit Photo</h2>\r\n  <form class=\"modal-form\" #imageForm=\"ngForm\" (ngSubmit)=\"editImage(imageForm)\" content>\r\n      <input class=\"modal-form-input\" type=\"text\" placeholder=\"TITLE\" name=\"title\" maxlength=30 ngModel>\r\n      <input class=\"modal-form-input\" type=\"text\" placeholder=\"TAGS\" name=\"tags\" ngModel>      \r\n      <button type=\"submit\" class=\"button modal-form-button\">\r\n        Submit changes\r\n      </button>\r\n  </form>\r\n</app-modal>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/polaroid/polaroid.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Pacifico);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".polaroid-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 14px;\n  box-shadow: 0px 0px 52px 8px rgba(0, 0, 0, 0.75);\n  background-color: #ebebeb;\n}\n.polaroid-info {\n  margin-top: 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.polaroid-info p {\n  font-family: 'Pacifico', cursive;\n}\n.polaroid-info > p {\n  width: 100%;\n  text-align: center;\n  font-size: 22px;\n}\n.polaroid-info i {\n  color: #0f131d;\n  font-size: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 6px;\n}\n.polaroid-info i:hover {\n  color: #d82b52;\n}\n.polaroid-info-bottom-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.polaroid-info-tools {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.polaroid-modal-container {\n  width: 600px;\n  background: #ebebeb;\n  border-radius: 5px;\n  padding: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.polaroid-modal-container h2 {\n  margin: 10px;\n  color: #0f131d;\n  font-family: 'Lato', sans-serif;\n}\n.polaroid-modal-exit {\n  font-size: 30px;\n  color: #d82b52;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/polaroid/polaroid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolaroidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_Image__ = __webpack_require__("../../../../../src/app/shared/models/Image.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_image_service__ = __webpack_require__("../../../../../src/app/shared/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_journeys_service__ = __webpack_require__("../../../../../src/app/shared/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PolaroidComponent = (function () {
    function PolaroidComponent(imageService, storageService, facebookService, journeysService, toastr) {
        this.imageService = imageService;
        this.storageService = storageService;
        this.facebookService = facebookService;
        this.journeysService = journeysService;
        this.toastr = toastr;
        this.imageDeletion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showEditModal = false;
        this.isFacebookLogged = false;
        this.size = 500;
        var initParams = {
            appId: '865241546949819',
            xfbml: true,
            version: 'v2.8'
        };
        this.size = Math.floor(window.innerHeight * 0.75);
        facebookService.init(initParams);
        this.isFacebookLogged = this.checkIfFacebookLogged();
    }
    PolaroidComponent.prototype.ngOnInit = function () { };
    PolaroidComponent.prototype.deleteImage = function () {
        var _this = this;
        this.imageService
            .deleteImage(this.image._id)
            .subscribe(function (success) {
            _this.toastr.success('Image successfully deleted', 'Success');
            _this.imageDeletion.emit(_this.image);
        }, function (error) {
            _this.toastr.error('Failed while deleting image', 'Error');
        });
    };
    PolaroidComponent.prototype.editImage = function (form) {
        this.image.title = form.value.title;
        this.image.tags = form.value.tags;
        this.toggleEditModal();
        this.imageService.updateImage(this.image)
            .subscribe(function (data) { return console.log(data); });
    };
    PolaroidComponent.prototype.toggleIsFavourite = function (isFavourite) {
        this.image.isFavourite = isFavourite;
        this.imageService.updateImage(this.image)
            .subscribe(function (data) { return console.log(data); });
    };
    PolaroidComponent.prototype.toggleEditModal = function () {
        this.showEditModal = !this.showEditModal;
    };
    PolaroidComponent.prototype.share = function () {
        var params = {
            href: 'http://res.cloudinary.com/dzgtgeotp/image/upload/' + this.image._id + '.jpg',
            method: 'share'
        };
        this.facebookService.ui(params)
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.error(e); });
    };
    PolaroidComponent.prototype.checkIfFacebookLogged = function () {
        return !!this.storageService.get('fb_token');
    };
    PolaroidComponent.prototype.setAsJourneyBackground = function () {
        var _this = this;
        var payload = {
            background_image_id: this.image._id,
            _id: this.image.id_journey
        };
        this.journeysService.editJourney(payload)
            .subscribe(function (success) {
            console.log(success);
            _this.toastr.success('Image set as Journey background!', 'Success');
        }, function (error) {
            console.log(error);
            _this.toastr.error('There was an error while setting background.', 'Error');
        });
    };
    return PolaroidComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_Image__["a" /* Image */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_Image__["a" /* Image */]) === "function" && _a || Object)
], PolaroidComponent.prototype, "image", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], PolaroidComponent.prototype, "imageDeletion", void 0);
PolaroidComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-polaroid',
        template: __webpack_require__("../../../../../src/app/polaroid/polaroid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/polaroid/polaroid.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_image_service__["a" /* ImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_storage_service__["a" /* StorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_journeys_service__["a" /* JourneysService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */]) === "function" && _g || Object])
], PolaroidComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=polaroid.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-primary\">\r\n  <div class=\"container profile-container\">\r\n    <div class=\"profile-stats-container\">\r\n        <p class=\"profile-stats-item\">Journeys: {{ this.stats?.journeys }}</p>\r\n        <p class=\"profile-stats-item\">Images: {{ this.stats?.images }}</p>\r\n    </div>\r\n    <div class=\"profile-manager-container\">\r\n      <h2>Manage your account</h2>\r\n      <p (click)=\"this.toggleChangePassword()\" *ngIf=\"this.hasLocal\">Change your password</p>\r\n      <p (click)=\"this.toggleChangeEmail()\" *ngIf=\"this.hasLocal\">Change your email</p>\r\n      <p (click)=\"this.addFacebook()\" *ngIf=\"!this.hasFacebook\">Connect with Facebook</p>\r\n      <p (click)=\"this.removeFacebook()\" *ngIf=\"this.hasFacebook && this.hasLocal\">Remove asociated Facebook account</p>\r\n      <p (click)=\"this.toggleAddLocalAuthentication()\" *ngIf=\"!this.hasLocal\">Add email & password authorization</p>\r\n      <p (click)=\"this.removeLocal()\" *ngIf=\"this.hasLocal && this.hasFacebook\">Remove email & password authorization</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-modal [show]=\"this.showChangeEmailModal\" (hide)=\"this.showChangeEmailModal = $event\">\r\n  <h2 header>Change email</h2>\r\n  <form class=\"modal-form\" #emailForm=\"ngForm\" (ngSubmit)=\"this.changeEmail(emailForm)\" content>\r\n      <input class=\"modal-form-input\" type=\"email\" placeholder=\"CURRENT EMAIL\" name=\"oldEmail\" ngModel>\r\n      <input class=\"modal-form-input\" type=\"email\" placeholder=\"NEW EMAIL\" name=\"newEmail\" ngModel>      \r\n      <button type=\"submit\" class=\"button modal-form-button\">\r\n        Change email\r\n      </button>\r\n  </form>\r\n</app-modal>\r\n<app-modal [show]=\"this.showChangePasswordModal\" (hide)=\"this.showChangePasswordModal = $event\">\r\n  <h2 header>Change password</h2>\r\n  <form class=\"modal-form\" #passwordForm=\"ngForm\" (ngSubmit)=\"this.changePassword(passwordForm)\" content>\r\n      <input class=\"modal-form-input\" type=\"password\" placeholder=\"CURRENT PASSWORD\" name=\"oldPassword\" ngModel>\r\n      <input class=\"modal-form-input\" type=\"password\" placeholder=\"NEW PASSWORD\" name=\"newPassword\" ngModel>      \r\n      <button type=\"submit\" class=\"button modal-form-button\">\r\n        Change password\r\n      </button>\r\n  </form>\r\n</app-modal>\r\n<app-modal [show]=\"this.showAddLocalAuthenticationModal\" (hide)=\"this.showAddLocalAuthenticationModal  = $event\">\r\n  <h2 header>Add email & password authentication</h2>\r\n  <form class=\"modal-form\" #loginForm=\"ngForm\" (ngSubmit)=\"this.addLocalAuthentication(loginForm)\" content>\r\n      <input class=\"modal-form-input\" type=\"email\" placeholder=\"EMAIL\" name=\"email\" ngModel>\r\n      <input class=\"modal-form-input\" type=\"password\" placeholder=\"PASSWORD\" name=\"password\" ngModel>      \r\n      <button type=\"submit\" class=\"button modal-form-button\">\r\n        Submit\r\n      </button>\r\n  </form>\r\n</app-modal>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".profile-container {\n  padding: 50px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.profile-stats-container {\n  width: 50%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n}\n.profile-stats-item {\n  margin: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  height: 170px;\n  width: 170px;\n  color: #ebebeb;\n  font-size: 20px;\n  border: 2px solid #474F5A;\n  border-radius: 170px;\n}\n.profile-manager-container {\n  width: 50%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  padding: 30px;\n  color: #ebebeb;\n  border-left: 1px solid #474F5A;\n}\n.profile-manager-container * {\n  padding: 10px;\n}\n.profile-manager-container p:hover {\n  color: #ebebeb;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__ = __webpack_require__("../../../../../src/app/shared/services/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, storageService, userService, toastr, fbService) {
        var _this = this;
        this.authService = authService;
        this.storageService = storageService;
        this.userService = userService;
        this.toastr = toastr;
        this.fbService = fbService;
        this.showChangeEmailModal = false;
        this.showChangePasswordModal = false;
        this.showAddLocalAuthenticationModal = false;
        this.updateProfile();
        this.userService.getStats().subscribe(function (res) { return _this.stats = res.stats; });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.toggleChangeEmail = function () {
        this.showChangeEmailModal = !this.showChangeEmailModal;
    };
    ProfileComponent.prototype.toggleChangePassword = function () {
        this.showChangePasswordModal = !this.showChangePasswordModal;
    };
    ProfileComponent.prototype.toggleAddLocalAuthentication = function () {
        this.showAddLocalAuthenticationModal = !this.showAddLocalAuthenticationModal;
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.userService.getProfile()
            .subscribe(function (res) {
            _this.user = res.user;
            console.log(_this.user);
            _this.hasFacebook = !!_this.user.facebook;
            _this.hasLocal = !!_this.user.local;
        });
    };
    ProfileComponent.prototype.changeEmail = function (form) {
        var _this = this;
        this.authService.changeEmail({ form: form.value })
            .subscribe(function (res) {
            console.log(res);
            _this.toastr.success(res.message, 'Success');
            _this.updateProfile();
        }, function (error) { return _this.toastr.error(error, 'Error'); });
        this.toggleChangeEmail();
    };
    ProfileComponent.prototype.changePassword = function (form) {
        var _this = this;
        this.authService.changePassword({ form: form.value })
            .subscribe(function (res) {
            console.log(res);
            _this.toastr.success(res.message, 'Success');
            _this.updateProfile();
        }, function (error) { return _this.toastr.error(error, 'Error'); });
        this.toggleChangePassword();
    };
    ProfileComponent.prototype.addFacebook = function () {
        var _this = this;
        this.fbService.authenticate().then(function (fb) {
            console.log('fb: ' + fb);
            var data = {
                user_id: _this.storageService.get('user_id'),
                facebook_user_id: fb.facebook_user_id,
                facebook_token: fb.facebook_token
            };
            _this.authService.addFacebookAuth(data).subscribe(function (res) {
                _this.storageService.set('fb_token', fb.facebook_token);
                console.log(res);
                _this.toastr.success(res.message, 'Success');
                _this.updateProfile();
            }, function (error) { return _this.toastr.error(error, 'Error'); });
        });
    };
    ProfileComponent.prototype.removeFacebook = function () {
        var _this = this;
        this.authService.removeFacebookAuth().subscribe(function (res) {
            console.log(res);
            _this.toastr.success(res.message, 'Success');
            _this.updateProfile();
        }, function (error) { return _this.toastr.error(error, 'Error'); });
    };
    // public addLocal(): void {
    //   this.authService.addLocalAuth({ email: 'test', password: 'test' }).subscribe(res => {
    //     console.log(res);
    //     this.toastr.success(res.message, 'Success');
    //     this.updateProfile();
    //   }, error => this.toastr.error(error, 'Error'));
    // }
    ProfileComponent.prototype.addLocalAuthentication = function (form) {
        var _this = this;
        this.authService.addLocalAuth(form.value).subscribe(function (res) {
            console.log(res);
            _this.toastr.success(res.message, 'Success');
            _this.updateProfile();
        }, function (error) { return _this.toastr.error(error, 'Error'); });
        this.toggleAddLocalAuthentication();
    };
    ProfileComponent.prototype.removeLocal = function () {
        var _this = this;
        this.authService.removeLocalAuth().subscribe(function (res) {
            console.log(res);
            _this.toastr.success(res.message, 'Success');
            _this.updateProfile();
        }, function (error) { return _this.toastr.error(error, 'Error'); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__["a" /* FbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__["a" /* FbService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper-primary\">\r\n  <div class=\"container flex-container auth-container\">\r\n    <h2>Create account.</h2>\r\n    <form class=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"register(registerForm)\">\r\n      <input class=\"form-input\" type=\"email\" placeholder=\"EMAIL\" name=\"email\" ngModel>\r\n      <input class=\"form-input\" type=\"password\" placeholder=\"PASSWORD\" name=\"password\" ngModel>\r\n      <div class=\"form-auth-group\">\r\n        <a><i class=\"fa fa-facebook-square\" aria-hidden=\"true\" (click)=\"facebookAuthorization()\"></i></a>\r\n        <button type=\"submit\" class=\"button\">\r\n          SIGN UP\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:900|Pacifico);", ""]);

// module
exports.push([module.i, ".auth-container {\n  min-height: 80vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.auth-container h2 {\n  color: #ebebeb;\n  font-size: 40px;\n  padding: 50px 0px;\n}\n.fa-facebook-square {\n  color: #d82b52;\n  font-size: 60px;\n}\n.fa-facebook-square:hover {\n  text-shadow: 0px 5px 25px #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__ = __webpack_require__("../../../../../src/app/shared/services/fb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(authService, router, toastr, storageService, fbService) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.storageService = storageService;
        this.fbService = fbService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (form) {
        var _this = this;
        console.log(form);
        var payload = form.value;
        this.authService.signUp(payload)
            .subscribe(function (success) {
            _this.router.navigateByUrl('authorize');
            _this.toastr.success('Account created!', 'Success');
        }, function (error) {
            console.log(error);
            _this.toastr.error('Username already taken.', 'Error');
        });
    };
    RegisterComponent.prototype.facebookAuthorization = function () {
        var _this = this;
        this.fbService.authenticate().then(function (fb) {
            var data = {
                user_id: _this.storageService.get('user_id') || null,
                facebook_user_id: fb.facebook_user_id,
                facebook_token: fb.facebook_token
            };
            _this.authService.authFacebook(data).subscribe(function (res) {
                _this.storageService.set('fb_token', fb.facebook_token);
                _this.storageService.set('token', res.data.access_token);
                _this.storageService.set('user_id', res.data.user_id);
                _this.navigateToHomePage();
            }, function (err) { return console.log(err); });
        });
    };
    RegisterComponent.prototype.navigateToHomePage = function () {
        this.router.navigateByUrl('journeys');
        window.location.reload();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_storage_service__["a" /* StorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__["a" /* FbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_fb_service__["a" /* FbService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    'cloudinary': {
        'api_secret': '9UO9pQ3_GqgSlTzQdiPlR5nTTGQ',
        'api_key': '992435168367718',
        'cloud_name': 'dzgtgeotp'
    },
    'facebook': {
        'appId': '865241546949819',
        'xfbml': true,
        'version': 'v2.8'
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global/errorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);


function handleError(error) {
    if (error.status === 401) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw('Unauthorized');
    }
    if (error.status === 500) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw('Server down');
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    }
}
//# sourceMappingURL=errorHandler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global/isLogged.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLogged; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsLogged = (function () {
    function IsLogged(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    IsLogged.prototype.canActivate = function () {
        if (!!this.storageService.get('user_id')) {
            return !!this.storageService.get('user_id');
        }
        else {
            this.router.navigateByUrl('authorize');
        }
    };
    return IsLogged;
}());
IsLogged = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], IsLogged);

var _a, _b;
//# sourceMappingURL=isLogged.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global/mapStyles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapStyles; });
var mapStyles = [
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#000000'
            }
        ]
    },
    {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#000000'
            }
        ]
    },
    {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#292929'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
            {
                color: '#0f131d'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
            {
                color: '#0f131d'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#3a3a3a'
            }
        ]
    },
    {
        featureType: 'poi.attraction',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#2c333b'
            }
        ]
    },
    {
        featureType: 'poi.business',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffffff'
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.government',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffffff'
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.medical',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#25313d'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#434f5c'
            }
        ]
    },
    {
        featureType: 'poi.place_of_worship',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffffff'
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.school',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffffff'
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.sports_complex',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#263849'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'all',
        stylers: [
            {
                color: '#969da5'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#303030'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
            {
                color: '#251e3a'
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'road.highway.controlled_access',
        elementType: 'labels.icon',
        stylers: [
            {
                color: '#ffffff'
            },
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'road.local',
        elementType: 'labels.icon',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'transit.station.airport',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#2e353c'
            }
        ]
    },
    {
        featureType: 'transit.station.airport',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'transit.station.airport',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#000000'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#a8afb7'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#070707'
            }
        ]
    }
];
//# sourceMappingURL=mapStyles.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global/variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
//export const api = 'http://localhost:8080';
//export const api = 'http://localhost:8080';
var api = 'https://journeyjournal.herokuapp.com';
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/Image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
var Image = (function () {
    function Image() {
    }
    return Image;
}());

//# sourceMappingURL=Image.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/Journey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Journey; });
var Journey = (function () {
    function Journey() {
    }
    return Journey;
}());

//# sourceMappingURL=Journey.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_variables__ = __webpack_require__("../../../../../src/app/shared/global/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_errorHandler__ = __webpack_require__("../../../../../src/app/shared/global/errorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(_http, storageService, router) {
        this._http = _http;
        this.storageService = storageService;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    AuthService.prototype.authFacebook = function (payload) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/facebookAuthorization', payload, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.addFacebookAuth = function (payload) {
        var access_token = this.storageService.get('token');
        return this._http.patch(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/users/' + payload.user_id
            + '/addFacebook?access_token=' + access_token, JSON.stringify(payload), this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.removeFacebookAuth = function () {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.patch(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/users/' + user_id
            + '/removeFacebook?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.addLocalAuth = function (payload) {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.patch(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/users/' + user_id
            + '/addLocal?access_token=' + access_token, JSON.stringify(payload), this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.removeLocalAuth = function () {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.patch(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/users/' + user_id
            + '/removeLocal?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.signUp = function (payload) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/signup', JSON.stringify(payload), this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.signIn = function (payload) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/login', JSON.stringify(payload), this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.changeEmail = function (payload) {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.patch(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/users/' + user_id + '/email?access_token=' + access_token, JSON.stringify(payload), this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.changePassword = function (payload) {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.patch(__WEBPACK_IMPORTED_MODULE_5__global_variables__["a" /* api */] + '/users/' + user_id + '/password?access_token=' + access_token, JSON.stringify(payload), this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_6__global_errorHandler__["a" /* handleError */]);
    };
    AuthService.prototype.logout = function () {
        this.storageService.remove('user_id');
        this.storageService.remove('token');
        this.storageService.remove('fb_token');
        this.router.navigateByUrl('');
        window.location.reload();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/favouriteImages.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteImagesResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_service__ = __webpack_require__("../../../../../src/app/shared/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouriteImagesResolver = (function () {
    function FavouriteImagesResolver(router, imageService) {
        this.router = router;
        this.imageService = imageService;
    }
    FavouriteImagesResolver.prototype.resolve = function (route, state) {
        return this.imageService.getFavouriteImages();
    };
    return FavouriteImagesResolver;
}());
FavouriteImagesResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__image_service__["a" /* ImageService */]) === "function" && _b || Object])
], FavouriteImagesResolver);

var _a, _b;
//# sourceMappingURL=favouriteImages.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/fb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_config__ = __webpack_require__("../../../../../src/app/shared/global/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FbService = (function () {
    function FbService(facebookService) {
        this.facebookService = facebookService;
        var initParams = {
            appId: __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* config */].facebook.appId,
            xfbml: __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* config */].facebook.xfbml,
            version: __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* config */].facebook.version
        };
        facebookService.init(initParams);
    }
    FbService.prototype.authenticate = function () {
        return this.facebookService.login()
            .then(function (response) {
            var facebook_token = response.authResponse.accessToken;
            var facebook_user_id = response.authResponse.userID;
            return { facebook_token: facebook_token, facebook_user_id: facebook_user_id };
        })
            .catch(function (error) { return console.error(error); });
    };
    return FbService;
}());
FbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object])
], FbService);

var _a;
//# sourceMappingURL=fb.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_variables__ = __webpack_require__("../../../../../src/app/shared/global/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_errorHandler__ = __webpack_require__("../../../../../src/app/shared/global/errorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImageService = (function () {
    function ImageService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ImageService.prototype.getImagesByJourney = function (journey_id) {
        var access_token = this.storageService.get('token');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__global_variables__["a" /* api */] + '/journeys/' + journey_id + '/images?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    ImageService.prototype.getFavouriteImages = function () {
        var access_token = this.storageService.get('token');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__global_variables__["a" /* api */] + '/images?isFavourite=true&access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    ImageService.prototype.updateImage = function (image) {
        var access_token = this.storageService.get('token');
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__global_variables__["a" /* api */] + '/images/' + image._id + '?access_token=' + access_token, image, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    ImageService.prototype.deleteImage = function (imageId) {
        var access_token = this.storageService.get('token');
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__global_variables__["a" /* api */] + '/images/' + imageId + '?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], ImageService);

var _a, _b;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/images.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_service__ = __webpack_require__("../../../../../src/app/shared/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImagesResolver = (function () {
    function ImagesResolver(router, imageService) {
        this.router = router;
        this.imageService = imageService;
    }
    ImagesResolver.prototype.resolve = function (route, state) {
        return this.imageService.getImagesByJourney(route.params.id);
    };
    return ImagesResolver;
}());
ImagesResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__image_service__["a" /* ImageService */]) === "function" && _b || Object])
], ImagesResolver);

var _a, _b;
//# sourceMappingURL=images.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/journey.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journeys_service__ = __webpack_require__("../../../../../src/app/shared/services/journeys.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JourneyResolver = (function () {
    function JourneyResolver(router, journeysService) {
        this.router = router;
        this.journeysService = journeysService;
    }
    JourneyResolver.prototype.resolve = function (route, state) {
        return this.journeysService.getJourneyById(route.params.id);
    };
    return JourneyResolver;
}());
JourneyResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__journeys_service__["a" /* JourneysService */]) === "function" && _b || Object])
], JourneyResolver);

var _a, _b;
//# sourceMappingURL=journey.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/journeys.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneysService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_errorHandler__ = __webpack_require__("../../../../../src/app/shared/global/errorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_variables__ = __webpack_require__("../../../../../src/app/shared/global/variables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JourneysService = (function () {
    function JourneysService(_http, storageService) {
        this._http = _http;
        this.storageService = storageService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    JourneysService.prototype.getJourneys = function () {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__global_variables__["a" /* api */] + '/users/' + user_id + '/journeys?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    JourneysService.prototype.getJourneyById = function (journey_id) {
        var access_token = this.storageService.get('token');
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__global_variables__["a" /* api */] + '/journeys/' + journey_id + '?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    JourneysService.prototype.deleteJourney = function (journey_id) {
        var access_token = this.storageService.get('token');
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_7__global_variables__["a" /* api */] + '/journeys/' + journey_id + '?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    JourneysService.prototype.editJourney = function (journey) {
        var access_token = this.storageService.get('token');
        return this._http.patch(__WEBPACK_IMPORTED_MODULE_7__global_variables__["a" /* api */] + '/journeys/' + journey._id + '?access_token=' + access_token, JSON.stringify(journey), this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    JourneysService.prototype.getJourneyImagesZipUrl = function (journey_id) {
        var access_token = this.storageService.get('token');
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__global_variables__["a" /* api */] + '/journeys/' + journey_id + '/download?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    return JourneysService;
}());
JourneysService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], JourneysService);

var _a, _b;
//# sourceMappingURL=journeys.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    StorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_variables__ = __webpack_require__("../../../../../src/app/shared/global/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_errorHandler__ = __webpack_require__("../../../../../src/app/shared/global/errorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/shared/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(_http, storageService) {
        this._http = _http;
        this.storageService = storageService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    UserService.prototype.getProfile = function () {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_variables__["a" /* api */] + '/users/' + user_id + '?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    UserService.prototype.getStats = function () {
        var access_token = this.storageService.get('token');
        var user_id = this.storageService.get('user_id');
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_variables__["a" /* api */] + '/users/' + user_id + '/getStats?access_token=' + access_token, this.options)
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__global_errorHandler__["a" /* handleError */]);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map