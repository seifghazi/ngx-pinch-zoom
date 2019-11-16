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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pinch-zoom (events)=\"handlePinchZoomEvents($event)\">\n  <img src=\"https://images.unsplash.com/photo-1444927714506-8492d94b4e3d\" />\n</pinch-zoom>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWlmZ2hhemkvYWsvbmd4LXBpbmNoLXpvb20vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bzsgXG59XG4iXX0= */"

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
    }
    AppComponent.prototype.handlePinchZoomEvents = function (event) {
        console.log(event);
    };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pinch_zoom_pinch_zoom_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pinch-zoom/pinch-zoom.module */ "./src/app/pinch-zoom/pinch-zoom.module.ts");





//import { PinchZoomModule } from 'ngx-pinch-zoom'; 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _pinch_zoom_pinch_zoom_module__WEBPACK_IMPORTED_MODULE_4__["PinchZoomModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pinch-zoom/pinch-zoom.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pinch-zoom/pinch-zoom.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    position: relative;\n}\n\n.pz-dragging {\n    cursor: all-scroll;\n}\n\n.pz-zoom-button {\n    position:  absolute;\n    left: 50%;\n    bottom: 16px;\n    margin-left: -22px;\n    z-index: 1000;\n    color: #fff;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==);\n    background-color: rgba(0, 0, 0, .8);\n    background-position: center, -1000px;\n    background-repeat: no-repeat, no-repeat;\n    width: 56px;\n    height: 56px;\n    border-radius: 4px;\n    opacity: 0.5;\n    cursor: pointer;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.pz-zoom-button.pz-zoom-out {\n    background-position: -1000px, center;\n}\n\n.pz-zoom-button:hover {\n    opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGluY2gtem9vbS9waW5jaC16b29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCwwckVBQTByRTtJQUMxckUsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZiwrQkFBdUI7SUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9waW5jaC16b29tL3BpbmNoLXpvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wei1kcmFnZ2luZyB7XG4gICAgY3Vyc29yOiBhbGwtc2Nyb2xsO1xufVxuLnB6LXpvb20tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogIGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBa0NBUUFBQUJMQ1ZBVEFBQUJWVWxFUVZSNEFlM1BBd3hRWFJnQTBQdmJ0bzFzVzJORHRzMHgyN2F0SWRlUXJha3BZOGkyM2NuR2U1bm44ZXBEZU8xaCtWZ2VWZFJWUkpMd3NDUTEwMW5YMmFXSmQ4T0Q4YTdPenJrZGE2VUo4WG5QVXNCWnk0M1MyV3o3cnM4VURuRVpDWmpuNSt0emI2anFDRGd1Y1loRGFrQW5iNFJiK01kbU1DUEVZU3FZZkgyY1hmUHIveW1jQmFsREZGODRpek4rdUQ3VG5IQ2RYcUI3aUNJL1dCeXV1eTFRYnJBaVJGRUw5TDNXbE9ibWMvbDd1VUhmZ24waGl2cWc0N1ZhWE1mbHVRL0E2UkJGZVREbW5xMzlEN2FFS05LQlhmY01WQlZNQ3RGc0IwWHZGc2hiVm9CU0lacUdZTDgvd2gxMEIvdThGNkw1MkU2d1U3WndFeC9vQzZnVjRwSFZPWERlSVBuOTVXT1oxYllSc0Q3RUo3OUQ3bTRubU83ZEVJK2ZUSEM3bzdwNmgrdWg0cEpKQjB2c2NNd0tRK1gxM3VYWjZSR2g0dktlZVE4YzZuV29KaUZhZENqUkZVWHpudGJlRGMvR2F4Y0FvdGY3Y2ljZmxLa0FBQUFBU1VWT1JLNUNZSUk9KSx1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FRQUFBQkxDVkFUQUFBQlMwbEVRVlI0QWUzVUE4eFdmUUNHOGFmUE5yTnQyNDBOMlRiSGJOdTJobHhEdHFhbWpDSGJkci9zNTkwNWI5WjFmTi9iZGZ5UGZPWmw4Wk1TR21pcGdnd3ZMOGxvcVpzQU9LYURiMklyK1VaL3Q3eklUamxpby9uV1JzQk5tMDNUMzNLbkhpZmx3NHVtQWxhSi96aUxvNkVMNExMMDRUVFpBZjNFZWE1SllUOVlFazYwRU15UDJtVnhFMlFQMXZ6dUptNzRQNForR0JnY0xDb04xc2ZZRndkYmdrWE53TWo3KzRWMWZucTZuLzBEVGdXTFdvTys5L2M3QXdEM3MrL0I5V0JSYlRBanhqNDFPQkFzeWdXT3hkZzNCUE1pd1RnTUtrYnR2clFGVkFzamFndE9TeEtsR3d4TytUYmMwSEVVSEZYb21meDdJd0hOSXVGUTBDMXcyemlsSmZPVC9KcmJDOWdkQ1kvU3pvbk9VYkE0OU1na25qbWU1NktCdnVheEtpenk2V09ESXk3WllxS1NEeDZ4eFVHcThNUGVxbGlyUHFzNlJLbGpxd3E2b3ZDcTdyNkp2QnMrY3dkTGlPYUVVOWVrMUFBQUFBQkpSVTVFcmtKZ2dnPT0pLCB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FRQUFBQkxDVkFUQUFBQlZVbEVRVlI0QWUzUEF3eFFYUmdBMFB2YnRvMXNXMk5EdHMweDI3YXRJZGVRcmFrcFk4aTIzY25HZTVubjhlcERlTzFoK1ZnZVZkUlZSSkx3c0NRMTAxblgyYVdKZDhPRDhhN096cmtkYTZVSjhYblBVc0JaeTQzUzJXejdyczhVRG5FWkNaam41K3R6YjZqcUNEZ3VjWWhEYWtBbmI0UmIrTWRtTUNQRVlTcVlmSDJjWGZQci95bWNCYWxERkY4NGl6Tit1RDdUbkhDZFhxQjdpQ0kvV0J5dXV5MVFickFpUkZFTDlMM1dsT2JtYy9sN3VVSGZnbjBoaXZxZzQ3VmFYTWZsdVEvQTZSQkZlVERtbnEzOUQ3YUVLTktCWGZjTVZCVk1DdEZzQjBYdkZzaGJWb0JTSVpxR1lMOC93aDEwQi91OEY2TDUyRTZ3VTdad0V4L29DNmdWNHBIVk9YRGVJUG45NVdPWjFiWVJzRDdFSjc5RDdtNG5tTzdkRUkrZlRIQzdvN3A2aCt1aDRwSkpCMHZzY013S1ErWDEzdVhaNlJHaDR2S2VlUThjNm5Xb0ppRmFkQ2pSRlVYem50YmVEYy9HYXhjQW90ZjdjaWNmbEtrQUFBQUFTVVZPUks1Q1lJST0pLHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVFBQUFCTENWQVRBQUFCUzBsRVFWUjRBZTNVQTh4V2ZRQ0c4YWZQTnJOdDI0ME4yVGJIYk51MmhseER0cWFtakNIYmRyL3M1OTA1YjlaMWZOL2JkZnlQZk9abDhaTVNHbWlwZ2d3dkw4bG9xWnNBT0thRGIySXIrVVovdDd6SVRqbGlvL25XUnNCTm0wM1QzM0tuSGlmbHc0dW1BbGFKL3ppTG82RUw0TEwwNFRUWkFmM0VlYTVKWVQ5WUVrNjBFTXlQMm1WeEUyUVAxdnp1Sm03NFA0WitHQmdjTENvTjFzZllGd2RiZ2tYTndNajcrNFYxZm5xNm4vMERUZ1dMV29PKzkvYzdBd0QzcysvQjlXQlJiVEFqeGo0MU9CQXN5Z1dPeGRnM0JQTWl3VGdNS2tidHZyUUZWQXNqYWd0T1N4S2xHd3hPK1RiYzBIRVVIRlhvbWZ4N0l3SE5JdUZRMEMxdzJ6aWxKZk9UL0pyYkM5Z2RDWS9Tem9uT1ViQTQ5TWdrbmptZTU2S0J2dWF4S2l6eTZXT0RJeTdaWXFLU0R4Nnh4VUdxOE1QZXFsaXJQcXM2UktsanF3cTZvdkNxN3I2SnZCcytjd2RMaU9hRVU5ZWsxQUFBQUFCSlJVNUVya0pnZ2c9PSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyLCAtMTAwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucHotem9vbS1idXR0b24ucHotem9vbS1vdXQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAwcHgsIGNlbnRlcjtcbn1cbi5wei16b29tLWJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pinch-zoom/pinch-zoom.component.html":
/*!******************************************************!*\
  !*** ./src/app/pinch-zoom/pinch-zoom.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #content \n\t[class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<div class=\"pz-zoom-button\"\n\t*ngIf=\"zoomButton && !isTouchScreen && !disabled\"\n\t(click)=\"toggleZoom()\"\n\t[class.pz-zoom-out]=\"scale > 1\">\n</div>"

/***/ }),

/***/ "./src/app/pinch-zoom/pinch-zoom.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pinch-zoom/pinch-zoom.component.ts ***!
  \****************************************************/
/*! exports provided: PinchZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchZoomComponent", function() { return PinchZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PinchZoomComponent = /** @class */ (function () {
    function PinchZoomComponent(elementRef) {
        this.elementRef = elementRef;
        this.i = 0;
        this.scale = 1;
        this.initialScale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.initialMoveX = 0;
        this.initialMoveY = 0;
        this.lastTap = 0;
        this.draggingMode = false;
        this.transitionDuration = 200;
        this.doubleTap = true;
        this.doubleTapScale = 2;
        this.zoomButton = true;
        this.linearHorizontalSwipe = false;
        this.linearVerticalSwipe = false;
        this.autoZoomOut = false;
        this.disabled = false;
        this.allowScroll = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PinchZoomComponent.prototype.ngOnInit = function () {
        this.element = this.contentElement.nativeElement;
        this.parentElement = this.elementRef.nativeElement;
        this.elementTarget = this.element.querySelector('*').tagName;
        this.setBasicStyles();
        this.element.ondragstart = function () { return false; };
    };
    Object.defineProperty(PinchZoomComponent.prototype, "isTouchScreen", {
        get: function () {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            var mq = function (query) {
                return window.matchMedia(query).matches;
            };
            if (('ontouchstart' in window)) {
                return true;
            }
            // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH
            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PinchZoomComponent.prototype, "isDragging", {
        get: function () {
            var imgHeight = this.getImageHeight();
            var imgWidth = this.getImageWidth();
            if (this.scale > 1) {
                return imgHeight * this.scale > this.parentElement.offsetHeight ||
                    imgWidth * this.scale > this.parentElement.offsetWidth;
            }
            if (this.scale === 1) {
                return imgHeight > this.parentElement.offsetHeight ||
                    imgWidth > this.parentElement.offsetWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Desktop listeners
     */
    PinchZoomComponent.prototype.onMouseEnter = function (event) {
        this.getElementPosition();
        if (this.isDragging) {
            this.draggingMode = true;
        }
    };
    PinchZoomComponent.prototype.onMouseMove = function (event) {
        if (this.draggingMode) {
            event.preventDefault();
            if (!this.eventType) {
                this.startX = event.clientX - this.elementPosition.left;
                this.startY = event.clientY - this.elementPosition.top;
            }
            this.eventType = 'swipe';
            this.events.emit({
                type: 'swipe',
                moveX: this.moveX,
                moveY: this.moveY
            });
            this.moveX = this.initialMoveX + ((event.clientX - this.elementPosition.left) - this.startX);
            this.moveY = this.initialMoveY + ((event.clientY - this.elementPosition.top) - this.startY);
            this.centeringImage();
            this.transformElement(0);
        }
    };
    PinchZoomComponent.prototype.onMouseUp = function (event) {
        this.draggingMode = false;
        this.updateInitialValues();
        this.eventType = undefined;
    };
    /*
     * Mobile listeners
     */
    PinchZoomComponent.prototype.onResize = function (event) {
        this.setImageWidth();
        this.transformElement(this.transitionDuration);
    };
    PinchZoomComponent.prototype.touchstartHandler = function (event) {
        if (this.disabled) {
            return;
        }
        this.getElementPosition();
        if (this.eventType === undefined) {
            this.getStartPosition(event);
        }
        this.events.emit({ type: 'touchstart' });
    };
    PinchZoomComponent.prototype.touchmoveHandler = function (event) {
        if (this.disabled) {
            return;
        }
        var touches = event.touches;
        // Swipe
        if (this.detectSwipe(touches) || this.eventType === 'swipe') {
            this.handleSwipe(event);
        }
        // Linear swipe
        if (this.detectLinearSwipe(touches) ||
            this.eventType === 'horizontal-swipe' ||
            this.eventType === 'vertical-swipe') {
            this.handleLinearSwipe(event);
        }
        // Pinch
        if ((touches.length === 2 && this.eventType === undefined) ||
            this.eventType === 'pinch') {
            this.handlePinch(event);
        }
    };
    PinchZoomComponent.prototype.touchendHandler = function (event) {
        if (this.disabled) {
            return;
        }
        this.i = 0;
        this.draggingMode = false;
        var touches = event.touches;
        // Min scale
        if (this.scale < 1) {
            this.scale = 1;
        }
        // Auto Zoom Out
        if (this.autoZoomOut && this.eventType === 'pinch') {
            this.scale = 1;
        }
        // Emit event
        this.events.emit({ type: 'touchend' });
        // Double Tap
        if (this.doubleTapDetection() && this.eventType === undefined) {
            this.toggleZoom(event);
            this.events.emit({ type: 'double-tap' });
            return;
        }
        // Limit Zoom
        if (this.limitZoom && this.eventType === 'pinch') {
            this.handleLimitZoom();
        }
        // Align image
        if (this.eventType === 'pinch' || this.eventType === 'swipe') {
            this.alignImage();
        }
        // Update initial values
        if (this.eventType === 'pinch' ||
            this.eventType === 'swipe' ||
            this.eventType === 'horizontal-swipe' ||
            this.eventType === 'vertical-swipe') {
            this.updateInitialValues();
        }
        this.eventType = 'touchend';
        if (touches && touches.length === 0) {
            this.eventType = undefined;
        }
    };
    /*
     * Handlers
     */
    PinchZoomComponent.prototype.moveLeft = function (index, touches) {
        return touches[index].clientX - this.elementPosition.left;
    };
    PinchZoomComponent.prototype.moveTop = function (index, touches) {
        return touches[index].clientY - this.elementPosition.top;
    };
    PinchZoomComponent.prototype.handleSwipe = function (event) {
        if (!this.allowScroll) {
            event.preventDefault();
        }
        if (!this.eventType) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
        }
        this.eventType = 'swipe';
        this.events.emit({
            type: 'swipe',
            moveX: this.moveX,
            moveY: this.moveY
        });
        this.moveX = this.initialMoveX + (this.moveLeft(0, event.touches) - this.startX);
        this.moveY = this.initialMoveY + (this.moveTop(0, event.touches) - this.startY);
        this.transformElement(0);
    };
    PinchZoomComponent.prototype.handlePinch = function (event) {
        event.preventDefault();
        var touches = event.touches;
        if (!this.eventType) {
            this.initialDistance = this.getDistance(touches);
            var moveLeft0 = this.moveLeft(0, touches);
            var moveLeft1 = this.moveLeft(1, touches);
            var moveTop0 = this.moveTop(0, touches);
            var moveTop1 = this.moveTop(1, touches);
            this.moveXC = ((moveLeft0 + moveLeft1) / 2) - this.initialMoveX;
            this.moveYC = ((moveTop0 + moveTop1) / 2) - this.initialMoveY;
        }
        this.eventType = 'pinch';
        this.distance = this.getDistance(touches);
        this.scale = this.initialScale * (this.distance / this.initialDistance);
        this.events.emit({
            type: 'pinch',
            scale: this.scale
        });
        this.moveX = this.initialMoveX - (((this.distance / this.initialDistance) * this.moveXC) - this.moveXC);
        this.moveY = this.initialMoveY - (((this.distance / this.initialDistance) * this.moveYC) - this.moveYC);
        this.transformElement(0);
    };
    PinchZoomComponent.prototype.handleLinearSwipe = function (event) {
        if (this.linearVerticalSwipe) {
            event.preventDefault();
        }
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.moveX = this.initialMoveX + ((event.touches[0].clientX - this.elementPosition.left) - this.startX);
            this.moveY = 0;
        }
        if (this.eventType === 'vertical-swipe') {
            this.moveX = 0;
            this.moveY = this.initialMoveY + ((event.touches[0].clientY - this.elementPosition.top) - this.startY);
        }
        if (this.eventType) {
            this.events.emit({
                type: this.eventType,
                moveX: this.moveX,
                moveY: this.moveY
            });
            this.transformElement(0);
        }
    };
    PinchZoomComponent.prototype.handleLimitZoom = function () {
        if (this.scale > this.limitZoom) {
            var imageWidth = this.getImageWidth();
            var imageHeight = this.getImageHeight();
            var enlargedImageWidth = imageWidth * this.scale;
            var enlargedImageHeight = imageHeight * this.scale;
            var moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
            var moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);
            this.scale = this.limitZoom;
            var newImageWidth = imageWidth * this.scale;
            var newImageHeight = imageHeight * this.scale;
            this.moveX = -Math.abs((moveXRatio * (newImageWidth - imageWidth)));
            this.moveY = -Math.abs((-moveYRatio * (newImageHeight - imageHeight)));
            this.centeringImage();
            this.transformElement(this.transitionDuration);
        }
    };
    PinchZoomComponent.prototype.detectSwipe = function (touches) {
        return touches.length === 1 && this.scale > 1 && !this.eventType;
    };
    PinchZoomComponent.prototype.detectLinearSwipe = function (touches) {
        return touches.length === 1 && this.scale === 1 && !this.eventType;
    };
    PinchZoomComponent.prototype.getLinearSwipeType = function (event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            var movementX = Math.abs(this.moveLeft(0, event.touches) - this.startX);
            var movementY = Math.abs(this.moveTop(0, event.touches) - this.startY);
            if ((movementY * 3) > movementX) {
                return this.linearVerticalSwipe ? 'vertical-swipe' : undefined;
            }
            else {
                return this.linearHorizontalSwipe ? 'horizontal-swipe' : undefined;
            }
        }
        else {
            return this.eventType;
        }
    };
    PinchZoomComponent.prototype.getDistance = function (touches) {
        return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
    };
    PinchZoomComponent.prototype.getImageHeight = function () {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetHeight;
    };
    PinchZoomComponent.prototype.getImageWidth = function () {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetWidth;
    };
    PinchZoomComponent.prototype.getStartPosition = function (event) {
        this.startX = event.touches[0].clientX - this.elementPosition.left;
        this.startY = event.touches[0].clientY - this.elementPosition.top;
    };
    PinchZoomComponent.prototype.setBasicStyles = function () {
        this.element.style.display = 'flex';
        this.element.style.height = '100%';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';
        this.element.style.transformOrigin = '0 0';
        this.hostDisplay = 'block';
        this.hostOverflow = 'hidden';
        this.hostHeight = this.containerHeight;
        this.setImageWidth();
    };
    PinchZoomComponent.prototype.setImageWidth = function () {
        var imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '100%';
            imgElement[0].style.maxHeight = '100%';
        }
    };
    PinchZoomComponent.prototype.transformElement = function (duration) {
        if (duration === void 0) { duration = 50; }
        this.element.style.transition = "all " + duration + "ms";
        this.element.style.transform = "\n            matrix(" + Number(this.scale) + ", 0, 0, " + Number(this.scale) + ", " + Number(this.moveX) + ", " + Number(this.moveY) + ")";
    };
    PinchZoomComponent.prototype.doubleTapDetection = function () {
        var _this = this;
        if (!this.doubleTap) {
            return false;
        }
        var currentTime = new Date().getTime();
        var tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < 300 && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout(function () {
                clearTimeout(_this.doubleTapTimeout);
            }, 300);
        }
        this.lastTap = currentTime;
    };
    PinchZoomComponent.prototype.toggleZoom = function (event) {
        if (event === void 0) { event = false; }
        if (this.initialScale === 1) {
            if (event && event.changedTouches) {
                var changedTouches = event.changedTouches;
                this.scale = this.initialScale * this.doubleTapScale;
                this.moveX = this.initialMoveX - (changedTouches[0].clientX * (this.doubleTapScale - 1) - this.elementPosition.left);
                this.moveY = this.initialMoveY - (changedTouches[0].clientY * (this.doubleTapScale - 1) - this.elementPosition.top);
            }
            else {
                this.scale = this.initialScale * 2;
                this.moveX = this.initialMoveX - this.element.offsetWidth / 2;
                this.moveY = this.initialMoveY - this.element.offsetHeight / 2;
            }
            this.centeringImage();
            this.updateInitialValues();
            this.transformElement(this.transitionDuration);
            this.events.emit({ type: 'zoom-in' });
        }
        else {
            this.resetScale();
            this.events.emit({ type: 'zoom-out' });
        }
    };
    PinchZoomComponent.prototype.resetScale = function () {
        this.scale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.updateInitialValues();
        this.transformElement(this.transitionDuration);
    };
    PinchZoomComponent.prototype.updateInitialValues = function () {
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
    };
    PinchZoomComponent.prototype.centeringImage = function () {
        var img = this.element.getElementsByTagName(this.elementTarget)[0];
        var initialMoveX = this.moveX;
        var initialMoveY = this.moveY;
        if (this.moveY > 0) {
            this.moveY = 0;
        }
        if (this.moveX > 0) {
            this.moveX = 0;
        }
        if (img) {
            this.transitionYRestriction();
            this.transitionXRestriction();
        }
        if (img && this.scale < 1) {
            if (this.moveX < this.element.offsetWidth * (1 - this.scale)) {
                this.moveX = this.element.offsetWidth * (1 - this.scale);
            }
        }
        return initialMoveX !== this.moveX || initialMoveY !== this.moveY;
    };
    PinchZoomComponent.prototype.alignImage = function () {
        var isMoveChanged = this.centeringImage();
        if (isMoveChanged) {
            this.updateInitialValues();
            this.transformElement(this.transitionDuration);
        }
    };
    PinchZoomComponent.prototype.transitionYRestriction = function () {
        var imgHeight = this.getImageHeight();
        if (imgHeight * this.scale < this.parentElement.offsetHeight) {
            this.moveY = (this.parentElement.offsetHeight - this.element.offsetHeight * this.scale) / 2;
        }
        else {
            var imgOffsetTop = ((imgHeight - this.element.offsetHeight) * this.scale) / 2;
            if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
            }
            else if ((imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight) + this.moveY < 0) {
                this.moveY = -(imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight);
            }
        }
    };
    PinchZoomComponent.prototype.transitionXRestriction = function () {
        var imgWidth = this.getImageWidth();
        if (imgWidth * this.scale < this.parentElement.offsetWidth) {
            this.moveX = (this.parentElement.offsetWidth - this.element.offsetWidth * this.scale) / 2;
        }
        else {
            var imgOffsetLeft = ((imgWidth - this.element.offsetWidth) * this.scale) / 2;
            if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
            }
            else if ((imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth) + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth);
            }
        }
    };
    PinchZoomComponent.prototype.getElementPosition = function () {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    PinchZoomComponent.prototype.setMoveX = function (value, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 200; }
        this.moveX = value;
        this.transformElement(transitionDuration);
    };
    PinchZoomComponent.prototype.setMoveY = function (value, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 200; }
        this.moveY = value;
        this.transformElement(transitionDuration);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PinchZoomComponent.prototype, "containerHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('transition-duration'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PinchZoomComponent.prototype, "transitionDuration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('double-tap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PinchZoomComponent.prototype, "doubleTap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('double-tap-scale'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PinchZoomComponent.prototype, "doubleTapScale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('zoom-button'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PinchZoomComponent.prototype, "zoomButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('linear-horizontal-swipe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PinchZoomComponent.prototype, "linearHorizontalSwipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('linear-vertical-swipe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PinchZoomComponent.prototype, "linearVerticalSwipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('auto-zoom-out'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PinchZoomComponent.prototype, "autoZoomOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('limit-zoom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PinchZoomComponent.prototype, "limitZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PinchZoomComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('allow-scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PinchZoomComponent.prototype, "allowScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PinchZoomComponent.prototype, "events", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PinchZoomComponent.prototype, "hostDisplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.overflow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PinchZoomComponent.prototype, "hostOverflow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PinchZoomComponent.prototype, "hostHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PinchZoomComponent.prototype, "contentElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PinchZoomComponent.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PinchZoomComponent.prototype, "onMouseMove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PinchZoomComponent.prototype, "onMouseUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PinchZoomComponent.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PinchZoomComponent.prototype, "touchstartHandler", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchmove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PinchZoomComponent.prototype, "touchmoveHandler", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PinchZoomComponent.prototype, "touchendHandler", null);
    PinchZoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pinch-zoom, [pinch-zoom]',
            template: __webpack_require__(/*! ./pinch-zoom.component.html */ "./src/app/pinch-zoom/pinch-zoom.component.html"),
            styles: [__webpack_require__(/*! ./pinch-zoom.component.css */ "./src/app/pinch-zoom/pinch-zoom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PinchZoomComponent);
    return PinchZoomComponent;
}());



/***/ }),

/***/ "./src/app/pinch-zoom/pinch-zoom.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pinch-zoom/pinch-zoom.module.ts ***!
  \*************************************************/
/*! exports provided: PinchZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchZoomModule", function() { return PinchZoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pinch_zoom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pinch-zoom.component */ "./src/app/pinch-zoom/pinch-zoom.component.ts");




var PinchZoomModule = /** @class */ (function () {
    function PinchZoomModule() {
    }
    PinchZoomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pinch_zoom_component__WEBPACK_IMPORTED_MODULE_3__["PinchZoomComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _pinch_zoom_component__WEBPACK_IMPORTED_MODULE_3__["PinchZoomComponent"]
            ],
            entryComponents: [
                _pinch_zoom_component__WEBPACK_IMPORTED_MODULE_3__["PinchZoomComponent"]
            ]
        })
    ], PinchZoomModule);
    return PinchZoomModule;
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

module.exports = __webpack_require__(/*! /Users/seifghazi/ak/ngx-pinch-zoom/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map