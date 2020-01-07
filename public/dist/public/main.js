(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <title>Atmos</title>\n</head>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n<div class=\"container-fluid col-lg text-center jumbotron\">\n    <h1>Atmos</h1>\n    <button [routerLink]=\"['/music']\" class=\"btn btn-primary\">Generate Playlist</button>\n</div>\n\n<div class=\"constainer-fluid col-lg\">\n    <img src=\"https://www.zdeko-puzzle.cz/10210687-37358/ctvero-rocnich-obdobi.jpg\" alt=\"Weather conditions\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n<div class=\"container-fluid jumbotron\">\n    <div class=\"col-lg\">\n        <img class=\"icon\" src={{iconPNG}} alt=\"weather pic\" style=\"width: 120px; height: 120px;\">\n        <h2 class=\"weather\">{{weather.weather[0].main}}</h2>\n        <h3 class=\"temp\">{{temperature}} F</h3>\n        <hr class=\"my-4\">\n    </div>\n    <div class=\"col-lg\">\n        <iframe [src]=\"iframe\" width=\"700\" height=\"265\" frameborder=\"5\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music/music.component */ "./src/app/music/music.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'music', component: _music_music_component__WEBPACK_IMPORTED_MODULE_4__["MusicComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music/music.component */ "./src/app/music/music.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _music_music_component__WEBPACK_IMPORTED_MODULE_8__["MusicComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    padding: 3% 0 3% 0;\r\n    margin-bottom: 1%;\r\n}\r\n\r\nimg {\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nOiAzJSAwIDMlIDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    //CRUD functions established in case I add in model/database functionality.
    getAll() {
        return this._http.get('/api/model');
    }
    getOne(id) {
        return this._http.get(`/api/model/${id}`);
    }
    update(updateProduct) {
        return this._http.put(`api/model/update/${updateProduct._id}`, updateProduct);
    }
    create(newProduct) {
        return this._http.post('/api/model/create', newProduct);
    }
    destroy(id) {
        return this._http.delete(`api/model/destroy/${id}`);
    }
    grabWeather(lat, lon) {
        console.log("gettting weather");
        return this._http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=dfbf0fc643a7d347b07b35fbc098c285`);
    }
    grabPlaylists(playlistJSONurl) {
        return this._http.get(playlistJSONurl);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/music/music.component.css":
/*!*******************************************!*\
  !*** ./src/app/music/music.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    text-align: center;\r\n    background-image: linear-gradient(lightgrey, grey);\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvbXVzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrREFBa0Q7SUFDbEQsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL211c2ljL211c2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChsaWdodGdyZXksIGdyZXkpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/music/music.component.ts":
/*!******************************************!*\
  !*** ./src/app/music/music.component.ts ***!
  \******************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let MusicComponent = class MusicComponent {
    constructor(_httpService, sanitizer) {
        this._httpService = _httpService;
        this.day = new Date();
        this.getLocation();
        //Most required info is recieved with this function below. However, we put it on a timer to get our coordinates first. 
        setTimeout(() => {
            this.grabWeatherJSON();
        }, 500);
        //The below assignment is put on a longer delay to assure we have all info prior to giving the HTML iframe security clearance.
        setTimeout(() => {
            console.log(this.playlist);
            this.iframe = sanitizer.bypassSecurityTrustResourceUrl(this.playlist);
        }, 1500);
    }
    //Gets weather API, assigns variables according to API data, Grabs a random associated Spotify playlist according to that data.
    grabWeatherJSON() {
        let obs = this._httpService.grabWeather(this.latitude, this.longitude);
        obs.subscribe(data => {
            console.log(data);
            this.weather = data;
            this.icon = this.weather.weather[0].icon;
            this.temperature = Math.floor(this.weather.main.temp);
            this.weatherMood = this.weather.weather[0].description;
            console.log(this.weatherMood);
            this.grabWeatherIcon(this.icon);
            this.timeOfDay = this.day.getHours();
            console.log(this.timeOfDay);
            this.genPlaylist();
        });
    }
    //Checks your geolocation and assigns your coordinates to be used in the grabWeather() service function.
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.longitude = position.coords.longitude;
                console.log(this.longitude);
                this.latitude = position.coords.latitude;
                console.log(this.latitude);
            });
        }
        else {
            console.log("No support for geolocation");
        }
    }
    grabWeatherIcon(icon) {
        console.log(icon);
        this.iconPNG = `http://openweathermap.org/img/w/${icon}.png`;
    }
    genPlaylist() {
        /////////////////////PLAYLISTS ASSOICATED WITH WEATHER & DAY/NIGHT////////////////////////
        this.clearSky = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWSf2RDTDayIx?si=opH0ARoCQz-3oTJTldsKlQ",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX7cZxYLqLUJl?si=6-0vJuyAQ0yNHSECl8iiug",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWUE76cNNotSg?si=bkEqlW_RSXKrItQ5x8DgSA"
        ];
        this.fewClouds = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX9RwfGbeGQwP?si=eXbQ2cFGT_SeBR59TlzWog",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX5g856aiKiDS?si=Uqu-upW8QziE2YgC4ISLJA"
        ];
        this.scatteredClouds = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWUvZBXGjNCU4?si=nmOSBEX2RwK10R4wde3H6Q",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX32oVqaQE8BM?si=7UNZcQRiTi6erzajvfUvOw"
        ];
        this.brokenClouds = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYoYGBbGKurt?si=-ZCJ8QT2T9-k3h4A5ZXq7A",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX0x36cwEyOTG?si=Yvovc0laR0GM1VGIkrJMVg"
        ];
        this.showerRain = [
            "https://open.spotify.com/embed/playlist/3l8cJSGMaYQ56Rr2EaT6NX?si=7u54N4qtSzCQ4apoGDJ4YA",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWVvXA824aCbn?si=JvmOVxv2RK6FCqtZowC1SA",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl?si=bbkf2HLRReuaRlW2n4GQqA"
        ];
        this.rain = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?si=-RiUfQrRSjyXOHE7THMTqg",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWTcEjayzrZ4x?si=CR5rL2yjTLWzIsVXJWmYPQ"
        ];
        this.thunderstorm = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX2vYju3i0lNX?si=s2A-NSBQQbeZzxcHd2Svuw",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?si=d9xQhiIyQZmcWd06BzfFmw"
        ];
        this.snow = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX8OUvJF6ATAB?si=x6FjOv2SQBOD-8X8yHhF6g",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWViKwLyOBsJF?si=lMbdrCZZSx-HnMUj_X8jug"
        ];
        this.mist = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX3qCx5yEZkcJ?si=SBvpBEqgTRiY-0OZ-jPLuQ",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX2n5hpuulC75?si=mmBbNEJzSmSEIECdoKSC2Q"
        ];
        this.clearSkyNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXcEKFjZJYZcc?si=2FP2-H5aTVK2M-BKiT6AZw",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?si=eFeX3n28QmyMhxPE95mpNQ",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWVtzubo4lvxd?si=elOfO-znRb2lOlW9MIr5tw"
        ];
        this.fewCloudsNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZrc3lwvImLj?si=lkybh7_vTYyE4x66QCVweA",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXcG4kXwIFULb?si=JD4gciyYTVqM8j3CiSVS8g"
        ];
        this.scatteredCloudsNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZrc3lwvImLj?si=lkybh7_vTYyE4x66QCVweA",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWVFJtzvDHN4L?si=cquVN31-R7WF-pZw1VbmXQ"
        ];
        this.brokenCloudsNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZrc3lwvImLj?si=lkybh7_vTYyE4x66QCVweA",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXcY4tn4nPCV1?si=i29SbFU1QTOX-bSXo511FA"
        ];
        this.showerRainNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX2TRYkJECvfC?si=ZZ23-T5xQWG2Xu5Y_pFLPw",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXdCsscAsbRNz?si=nQOrYyWCSjqC9z_slnE70w"
        ];
        this.rainNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXdCsscAsbRNz?si=nQOrYyWCSjqC9z_slnE70w",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX4wta20PHgwo?si=Jj-b6UyXQTuELZrQDbdxBA"
        ];
        this.thunderstormNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWWtqHeytOZ8f?si=_TeeSOLbTaa3DFzG4-pfrg",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?si=4bClOh0zRoeFLF81_CLc5A"
        ];
        this.snowNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXebxttQCq0zA?si=liAaBhIaQqqWcM90rKZlTQ",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBbGCLlic3p?si=SSh17X4SQnKPRHiI36kvAw",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXdRynaRsnoZs?si=F2lKro-4QM-J89xcpZENIQ"
        ];
        this.mistNight = [
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?si=sNAw5eV6QACyGYILb5VtNg",
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZ7mSWCFIT7v?si=XyoVePB8Tx6CajUkTR_8qw"
        ];
        //This establishes which set of playlists to choose from depending on the weather and time of day.
        //NOTE: extended weather descriptions have been added via the open weather map API. App will run an error if it encounters one not listed.
        if (this.weatherMood == "clear sky" && this.timeOfDay <= 17) {
            this.playlist = this.clearSky[Math.floor(Math.random() * this.clearSky.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "few clouds" && this.timeOfDay <= 17) {
            this.playlist = this.fewClouds[Math.floor(Math.random() * this.fewClouds.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "scattered clouds" && this.timeOfDay <= 17) {
            this.playlist = this.scatteredClouds[Math.floor(Math.random() * this.scatteredClouds.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "broken clouds" && this.timeOfDay <= 17) {
            this.playlist = this.brokenClouds[Math.floor(Math.random() * this.brokenClouds.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "overcast clouds" && this.timeOfDay <= 17) {
            this.playlist = this.brokenClouds[Math.floor(Math.random() * this.brokenClouds.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "shower rain" && this.timeOfDay <= 17) {
            this.playlist = this.showerRain[Math.floor(Math.random() * this.showerRain.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "rain" && this.timeOfDay <= 17 && this.weatherMood == "light rain" && this.timeOfDay <= 17) {
            this.playlist = this.rain[Math.floor(Math.random() * this.rain.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "thunderstorm" && this.timeOfDay <= 17) {
            this.playlist = this.thunderstorm[Math.floor(Math.random() * this.thunderstorm.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "snow" && this.timeOfDay <= 17) {
            this.playlist = this.snow[Math.floor(Math.random() * this.snow.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "mist" && this.timeOfDay <= 17) {
            this.playlist = this.mist[Math.floor(Math.random() * this.mist.length)];
            console.log(this.playlist);
        }
        /////////////////NIGHT TIME//////////////////////
        else if (this.weatherMood == "clear sky" && this.timeOfDay > 17) {
            this.playlist = this.clearSkyNight[Math.floor(Math.random() * this.clearSkyNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "few clouds" && this.timeOfDay > 17) {
            this.playlist = this.fewCloudsNight[Math.floor(Math.random() * this.fewCloudsNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "scattered clouds" && this.timeOfDay > 17) {
            this.playlist = this.scatteredCloudsNight[Math.floor(Math.random() * this.scatteredCloudsNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "broken clouds" && this.timeOfDay > 17) {
            this.playlist = this.brokenCloudsNight[Math.floor(Math.random() * this.brokenCloudsNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "overcast clouds" && this.timeOfDay > 17) {
            this.playlist = this.brokenCloudsNight[Math.floor(Math.random() * this.brokenCloudsNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "shower rain" && this.timeOfDay > 17) {
            this.playlist = this.showerRainNight[Math.floor(Math.random() * this.showerRainNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "rain" && this.timeOfDay > 17) {
            this.playlist = this.rainNight[Math.floor(Math.random() * this.rainNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "thunderstorm" && this.timeOfDay > 17) {
            this.playlist = this.thunderstormNight[Math.floor(Math.random() * this.thunderstormNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "snow" && this.timeOfDay > 17) {
            this.playlist = this.snowNight[Math.floor(Math.random() * this.snowNight.length)];
            console.log(this.playlist);
        }
        else if (this.weatherMood == "mist" && this.timeOfDay > 17) {
            this.playlist = this.mistNight[Math.floor(Math.random() * this.mistNight.length)];
            console.log(this.playlist);
        }
        else {
            console.log("ERROR IN DETERMINING WEATHERMOOD OR TIMEOFDAY");
        }
    }
};
MusicComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
MusicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-music',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music.component.css */ "./src/app/music/music.component.css")).default]
    })
], MusicComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andy\Desktop\MEAN\Atmos\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map