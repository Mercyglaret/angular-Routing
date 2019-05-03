(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  about works!\n</p>\n<button><a routerLink=\"/about/location\">Location</a></button>\n<button><a routerLink=\"/about/contact\">Contact</a></button>\n\n<router-outlet></router-outlet> -->\n<div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"col-lg-5 green\">\n      <br>\n      <br>\n      <h3>Contact number & Locality of Office  <a routerLink=\"/about/location\"><button>Click to see...</button></a></h3>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <h3>Still in doubt? Come and our team will help You <a routerLink=\"/about/contact\"><button>Click to see...</button></a></h3>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n  </div>\n  <div class=\"col-lg-7 blue\">\n      <br>\n      <br>\n      <router-outlet></router-outlet>\n      <br>\n      \n  </div>\n</div></div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".green {\n  background-color: #00ac6d; }\n\n.blue {\n  background-color: #4e84c2; }\n\nh3 {\n  font-size: 40px;\n  color: white; }\n\nbutton {\n  font-size: 15px;\n  background-color: #365c9a;\n  border: #365c9a;\n  border-radius: 2px;\n  outline: none;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRzpcXGFuZ3VsYXJcXHRhc2syXFxyb3V0aW5nL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYzZkO1xyXG59XHJcbi5ibHVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlODRjMjtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY1YzlhO1xyXG4gICAgYm9yZGVyOiAjMzY1YzlhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <h2 class=\"text-white mt-3 text-center\">MercyGMG store</h2>\n        </div>\n        <div class=\"col-lg-2\">\n        </div>\n        <div class=\"col-lg-6\">\n        <br>\n                <div class=\"row\">\n                        <div class=\"col-lg-5 text-center\">\n                        </div>\n                        <div class=\"col-lg-1 text-center\">\n                          <a routerLink=\"/home\">Home</a>\n                          <br>\n                          <br>\n                        </div>\n                        <div class=\"col-lg-1 text-center\">\n                          <a routerLink=\"/about\">About</a>\n                          <br>\n                          <br>\n                        </div>\n                        <div class=\"col-lg-1 text-center\">\n                          <a routerLink=\"/service\">Collection</a>\n                          <br>  <br> \n                        </div>\n                        <div class=\"col-lg-4 text-center\">\n                           \n                                <a href=\"https://www.facebook.com/\" target=\"_blank\" class=\"fa fa-facebook ml-2\"></a>\n                                <a href=\"https://www.instagram.com/accounts/login/?hl=en\" target=\"_blank\" class=\"fa fa-instagram ml-2\"></a>\n                                <a href=\"https://twitter.com/login?lang=en\" target=\"_blank\" class=\"fa fa-twitter ml-2\"></a>\n                                \n                              </div>\n                </div>\n        </div>\n    </div>\n</div>\n</div>\n\n<router-outlet></router-outlet>\n\n<div class=\"header\">\n<br>\n<p class=\"text-center text-white\">copyrights@2019</p>\n<br>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  background-color: #365c9a;\n  height: auto; }\n\na {\n  text-decoration: none;\n  color: white; }\n\n.fa {\n  font-size: 20px;\n  width: 40px;\n  text-align: center;\n  text-decoration: none;\n  border: 1px solid white;\n  border-radius: 50%;\n  padding: 8px 0 8px 0;\n  margin-top: -10px; }\n\n.fa-facebook {\n  background: #365c9a;\n  color: white; }\n\n.fa-twitter {\n  background: #365c9a;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXGFuZ3VsYXJcXHRhc2syXFxyb3V0aW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQzFCLFlBQVksRUFBQTs7QUFHZjtFQUNDLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2I7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjVjOWE7XHJcbiAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuYXtcclxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOjhweCAwIDhweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5mYS1mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzY1YzlhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZmEtdHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzY1YzlhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC8vICAgLmhlYWRlciB7XHJcbiAgLy8gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLy8gICAuaGVhZGVyIHtcclxuICAvLyAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'routing';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'home' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                        children: [
                            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
                            { path: 'location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"] }
                        ] },
                    { path: 'service', component: _service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n        <img class=\"img-responsive\" src=\"assets/img/image3.jpg\" width=\"100%\" height=\"auto\">\n        <h6>Amanda Adams</h6>\n        <p>Sales Manager & Purchasing Officer</p>\n\n    </div>\n    <div class=\"col-lg-6\">\n        <img class=\"img-responsive\" src=\"assets/img/image2.jpg\" width=\"100%\" height=\"auto\">\n        <h6>John Smith</h6>\n        <p>Service Advisor & Business Analyst</p>\n\n    </div>\n\n  </div>\n  \n  <!-- <div class=\"row\">\n      <div class=\"col-lg-6\">\n          <img class=\"img-responsive\" src=\"assets/img/image3.jpg\" width=\"100%\" height=\"auto\">\n        <h6>Amanda Adams</h6>\n        <p>Purchasing Officer</p>\n\n      </div>\n      <div class=\"col-lg-6\">\n          <img class=\"img-responsive\" src=\"assets/img/image4.jpg\" width=\"100%\" height=\"auto\">\n          <h6>John Smith</h6>\n          <p>Business Analyst</p>\n        \n\n      </div>\n  \n    </div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6, p {\n  color: white; }\n\nh6 {\n  margin-top: 5px;\n  font-size: 25px; }\n\np {\n  margin-bottom: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9HOlxcYW5ndWxhclxcdGFzazJcXHJvdXRpbmcvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2LHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaDZ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxucHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"col-lg-3 green\">\n      <br>\n      <br>\n      <div class=\"row\">\n        \n        <div class=\"col-lg-12\">\n          <img class=\"img-responsive\" src=\"assets/img/front.jpg\" width=\"570px\" height=\"auto\">\n        </div>\n\n      </div>\n      <br>\n      <br>\n      <br>\n      <br>\n    \n  </div>\n  <div class=\"col-lg-9 blue\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n\n      </div>\n      <div class=\"col-lg-8\">\n          <br>\n          <br>\n          <br>\n          <p><b>Favourite</b> brands</p>\n        <h1><b>New sports <br>collection already<br> on sale</b></h1>\n\n      </div>\n    </div>\n\n  </div>\n  \n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".green {\n  background-color: #00ac6d; }\n\n.blue {\n  background-color: #4e84c2;\n  z-index: -1; }\n\nimg {\n  padding-left: 50px; }\n\n@media screen and (max-width: 425px) {\n  img {\n    display: none; } }\n\n@media screen and (max-width: 768px) {\n  img {\n    display: none; } }\n\np, h1 {\n  color: white; }\n\nh1 {\n  font-size: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9HOlxcYW5ndWxhclxcdGFzazJcXHJvdXRpbmcvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0k7SUFDSyxhQUFhLEVBQUEsRUFDakI7O0FBRUg7RUFDRTtJQUNLLGFBQWEsRUFBQSxFQUNqQjs7QUFFSDtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYzZkO1xyXG59XHJcbi5ibHVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlODRjMjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG5cclxufVxyXG5pbWd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgcCxoMXtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBoMXtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/location/location.component.html":
/*!**************************************************!*\
  !*** ./src/app/location/location.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <img class=\"img-responsive\" src=\"assets/img/store.jpg\" width=\"30%\">\n</div>\n<br>\n<h1 class=\"text-center\"><i class=\"fa fa-whatsapp color\" ></i> 7358310041</h1><br>\n<p class=\"text-white text-center\"> 37, 1st Main Road, Gandhi Nagar, <br>Adyar, Chennai, Tamil Nadu 600020</p>\n"

/***/ }),

/***/ "./src/app/location/location.component.scss":
/*!**************************************************!*\
  !*** ./src/app/location/location.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: white; }\n\n.color {\n  font-size: 48px;\n  color: green;\n  background-color: white;\n  border-radius: 50%;\n  padding: 0px 5px 0px 5px; }\n\np {\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vRzpcXGFuZ3VsYXJcXHRhc2syXFxyb3V0aW5nL3NyY1xcYXBwXFxsb2NhdGlvblxcbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbG9ye1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/location/location.component.ts":
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/location/location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\"> \n    <div class=\"col-lg-12\">\n    <br>\n    <h1>NEW COLLECTIONS</h1>\n    <br>\n    </div>\n    </div>\n    \n    <div class=\"row\"> \n        <div class=\"col-lg-6 text-center\">\n            <div class=\"container1\">\n                    <img class=\"img-responsive\" src=\"assets/img/front.jpg\" width=\"100%\" height=\"auto\">\n\n                         <div class=\"overlay\">\n                         <div class=\"text\">\n                             <p class=\"font\">Just Do It. Just Do It. Just Do It. Just Do It</p>\n                             <p class=\"timbu font\">NIKE</p>\n                             <hr class=\"hori\">\n                             </div>\n                         </div>\n                         </div>\n                         <br>\n        </div>\n        \n        <div class=\"col-lg-6 text-center\">\n                <div class=\"container1\">\n                        <img class=\"img-responsive\" src=\"assets/img/boot.jpg\" width=\"100%\" height=\"auto\">\n  \n                             <div class=\"overlay\">\n                             <div class=\"text\">\n                                 <p class=\"font\"> I Am What I Am.  I Am What I Am.  I Am What I Am</p>\n                                 <p class=\"timbu font\">REEBOK</p>\n                                 <hr class=\"hori\">\n                                 </div>\n                             </div>\n                             </div>\n        \n        </div>\n    </div>\n        <br>\n    <div class=\"row\"> \n            <div class=\"col-lg-6 text-center\">\n                    <div class=\"container1\">\n                            <img class=\"img-responsive\" src=\"assets/img/boot1.jpg\" width=\"100%\" height=\"auto\">\n      \n                                 <div class=\"overlay\">\n                                 <div class=\"text\">\n                                     <p class=\"font\">Adidas Is All In. Adidas Is All In. Adidas Is All In.</p>\n                                     <p class=\"timbu font\">ADIDOS</p>\n                                     <hr class=\"hori\">\n                                     </div>\n                                 </div>\n                                 </div>\n                                 <br>\n               \n            </div>\n                \n            <div class=\"col-lg-6 text-center\">\n                    <div class=\"container1\">\n                      <img class=\"img-responsive\" src=\"assets/img/boot2.jpg\" width=\"100%\" height=\"auto\">\n\n                           <div class=\"overlay\">\n                           <div class=\"text\">\n                               <p class=\"font\">Power Style. Power Style. Power Style. Power Style</p>\n                               <p class=\"timbu font\">FILA</p>\n                               <hr class=\"hori\">\n                               </div>\n                           </div>\n                           </div>\n                        \n                \n            </div>\n    </div>\n    </div>\n    <br>"

/***/ }),

/***/ "./src/app/service/service.component.scss":
/*!************************************************!*\
  !*** ./src/app/service/service.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1 {\n  position: relative; }\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: #e61b70; }\n\n.container1:hover .overlay {\n  opacity: 0.8; }\n\n.text {\n  color: #ffffff;\n  font-size: 20px;\n  position: absolute;\n  top: 5%;\n  left: 10%; }\n\n.timbu {\n  font-size: 30px; }\n\n.hori {\n  margin: 0px 150px 0px 150px;\n  border: 3px solid #365c9a; }\n\n.font {\n  font-family: \"dapifer\", Georgia, serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9HOlxcYW5ndWxhclxcdGFzazJcXHJvdXRpbmcvc3JjXFxhcHBcXHNlcnZpY2VcXHNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFLcEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxzQ0FBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIxe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYxYjcwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyMTpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDEwJTtcclxuXHJcbiAgfVxyXG4gIC50aW1idXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmhvcml7XHJcbiAgICBtYXJnaW46IDBweCAxNTBweCAwcHggMTUwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzY1YzlhO1xyXG4gIH1cclxuICAuZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiBcImRhcGlmZXJcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/service/service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\angular\task2\routing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map