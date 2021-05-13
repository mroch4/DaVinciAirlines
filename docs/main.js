(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/cdv-planes/cdv-planes/src/main.ts */"zUnb");


/***/ }),

/***/ "3BsB":
/*!*********************************************************************!*\
  !*** ./src/app/components/seatselection/seatselection.component.ts ***!
  \*********************************************************************/
/*! exports provided: SeatselectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatselectionComponent", function() { return SeatselectionComponent; });
/* harmony import */ var _assets_data_boeingseats_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/boeingseats.json */ "xlop");
var _assets_data_boeingseats_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/boeingseats.json */ "xlop", 1);
/* harmony import */ var _assets_data_embraerseats_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/embraerseats.json */ "4rjX");
var _assets_data_embraerseats_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/embraerseats.json */ "4rjX", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_flightform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/flightform.service */ "KppR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function SeatselectionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function SeatselectionComponent_ng_template_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function SeatselectionComponent_ng_template_4_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "area", 16);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("coords", item_r8.coords);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", item_r8.col, "", item_r8.row, "");
} }
function SeatselectionComponent_ng_template_4_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "area", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeatselectionComponent_ng_template_4_div_2_ng_template_4_Template_area_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r15.chooseSeat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("coords", item_r8.coords);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", item_r8.col, "", item_r8.row, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", item_r8.index);
} }
function SeatselectionComponent_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SeatselectionComponent_ng_template_4_div_2_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SeatselectionComponent_ng_template_4_div_2_ng_template_2_Template, 1, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SeatselectionComponent_ng_template_4_div_2_ng_template_4_Template, 1, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r8.booked)("ngIfThen", _r10)("ngIfElse", _r12);
} }
function SeatselectionComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "map", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SeatselectionComponent_ng_template_4_div_2_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.eSeats);
} }
function SeatselectionComponent_ng_template_6_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function SeatselectionComponent_ng_template_6_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "area", 16);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("coords", item_r19.coords);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", item_r19.col, "", item_r19.row, "");
} }
function SeatselectionComponent_ng_template_6_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "area", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeatselectionComponent_ng_template_6_div_2_ng_template_4_Template_area_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r26.chooseSeat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("coords", item_r19.coords);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", item_r19.col, "", item_r19.row, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", item_r19.index);
} }
function SeatselectionComponent_ng_template_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SeatselectionComponent_ng_template_6_div_2_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SeatselectionComponent_ng_template_6_div_2_ng_template_2_Template, 1, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SeatselectionComponent_ng_template_6_div_2_ng_template_4_Template, 1, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r19.booked)("ngIfThen", _r21)("ngIfElse", _r23);
} }
function SeatselectionComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "map", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SeatselectionComponent_ng_template_6_div_2_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.bSeats);
} }
function SeatselectionComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Data powrotu:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 1, ctx_r5.returnTime, "d MMMM y"));
} }
function SeatselectionComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeatselectionComponent_div_33_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const index_r30 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.removeSeat(index_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const index_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Miejsce dla pasa\u017Cera nr ", index_r30 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r29);
} }
class SeatselectionComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        // seat selection
        this.eSeats = _assets_data_embraerseats_json__WEBPACK_IMPORTED_MODULE_1__["seats"];
        this.bSeats = _assets_data_boeingseats_json__WEBPACK_IMPORTED_MODULE_0__["seats"];
        this.chosenAmount = 0;
        this.chosenSeats = [];
        // receive message from flight component
        this.message = [];
        this.departureTime = new Date;
        this.returnTime = new Date;
        this.passengers = 0;
        this.originCity = '';
        this.originAlias = '';
        this.originCode = '';
        this.destinationCity = '';
        this.destinationAlias = '';
        this.destinationCode = '';
        this.isFlightDomestic = false;
    }
    chooseSeat(event) {
        if (this.chosenAmount < this.passengers) {
            this.chosenSeats.push(event.target.id);
            if (this.isFlightDomestic === true) {
                this.eSeats[event.target.alt].booked = true;
            }
            else if (this.isFlightDomestic === !true) {
                this.bSeats[event.target.alt].booked = true;
            }
            this.chosenAmount = this.chosenSeats.length;
        }
        else {
            alert('Wybrałeś już miejsca dla wszystkich pasażerów');
            return;
        }
        // console.log(this.chosenSeats, this.chosenAmount)
    }
    removeSeat(i) {
        this.chosenSeats.splice(i);
        this.chosenAmount = this.chosenSeats.length;
        // console.log(this.chosenSeats, this.chosenAmount)
    }
    // navigation
    edit() {
        this.router.navigate(['']);
    }
    submit() {
        this.router.navigate(['login']);
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message);
        this.departureTime = this.message[0];
        this.returnTime = this.message[1];
        this.passengers = this.message[2];
        this.originCity = this.message[3];
        this.originAlias = this.message[4];
        this.originCode = this.message[5];
        this.destinationCity = this.message[6];
        this.destinationAlias = this.message[7];
        this.destinationCode = this.message[8];
        this.isFlightDomestic = this.message[9];
    }
}
SeatselectionComponent.ɵfac = function SeatselectionComponent_Factory(t) { return new (t || SeatselectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_flightform_service__WEBPACK_IMPORTED_MODULE_3__["FlightformService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SeatselectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SeatselectionComponent, selectors: [["app-seatselection"]], decls: 39, vars: 18, consts: [[1, "container-fluid"], [1, "d-flex", "justify-content-center"], [1, "right"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["embraer", ""], ["boeing", ""], [1, "left"], [3, "ngIf"], [4, "ngFor", "ngForOf"], [1, "buttons"], ["type", "button", 1, "btn", "btn-success", "float-start", 3, "click"], ["type", "button", 1, "btn", "btn-success", "float-end", 3, "click"], ["src", "../../../assets/planes/embraer_erj_170.svg", "alt", "embraer_seatmap", "usemap", "#embraerseatmap"], ["id", "embraerseatmap", "name", "embraerseatmap"], ["booked", ""], ["available", ""], ["shape", "rect", "matTooltip", "Wskazane miejsce jest ju\u017C zaj\u0119te", 3, "coords", "id"], ["shape", "rect", 3, "coords", "id", "alt", "click"], ["src", "../../../assets/planes/boeing_737_800.svg", "alt", "boeing_seatmap", "usemap", "#boeingseatmap"], ["id", "boeingseatmap", "name", "boeingseatmap"], [1, "seats"], [3, "click"]], template: function SeatselectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SeatselectionComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SeatselectionComponent_ng_template_4_Template, 3, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SeatselectionComponent_ng_template_6_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Twoja rezerwacja:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Odlot z lotniska:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "W dniu:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Przylot na lotnisko:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SeatselectionComponent_ng_template_24_Template, 5, 4, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Liczba pasa\u017Cer\u00F3w:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Zarezerwowane miejsca:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, SeatselectionComponent_div_33_Template, 7, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeatselectionComponent_Template_button_click_35_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u2190 Powr\u00F3t do edycji");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeatselectionComponent_Template_button_click_37_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Dalej \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFlightDomestic === true)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.originCity, " ", ctx.originAlias, " | ", ctx.originCode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 15, ctx.departureTime, "d MMMM y"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.destinationCity, " ", ctx.destinationAlias, " | ", ctx.destinationCode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.returnTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.passengers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("(wybrano ", ctx.chosenAmount, "/", ctx.passengers, " miejsc)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chosenSeats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-image: url('seats.jpg');\n  background-position: center;\n  background-size: cover;\n}\n\n.right[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n  margin: 0 20px;\n}\n\n.left[_ngcontent-%COMP%] {\n  width: 425px;\n  background-color: white;\n  border-radius: 10px;\n  margin: 0 20px;\n  padding: 10px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  font-weight: 700;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 0px;\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.seats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n@media (max-width: 767px) {\n  .d-flex[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    width: 425px;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXRzZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBR0E7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7O0VBR0E7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNlYXRzZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZHMvc2VhdHMuanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmxlZnQge1xuICB3aWR0aDogNDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDAgMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZC1mbGV4IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAubGVmdCB7XG4gICAgd2lkdGg6IDQyNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "4rjX":
/*!*******************************************!*\
  !*** ./src/assets/data/embraerseats.json ***!
  \*******************************************/
/*! exports provided: company, model, version, url, seats, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"company\":\"embraer\",\"model\":\"ERJ-170\",\"version\":\"(E70)\",\"url\":\"https://www.seatguru.com/airlines/LOT_Polish_Airlines/LOT_Polish_Airlines_Embraer_ERJ-170.php\",\"seats\":[{\"index\":0,\"coords\":\"223,256,256,296\",\"row\":1,\"col\":\"C\",\"booked\":false},{\"index\":1,\"coords\":\"254,256,287,296\",\"row\":1,\"col\":\"D\",\"booked\":false},{\"index\":2,\"coords\":\"134,302,167,341\",\"row\":2,\"col\":\"A\",\"booked\":true},{\"index\":3,\"coords\":\"165,302,198,341\",\"row\":2,\"col\":\"B\",\"booked\":false},{\"index\":4,\"coords\":\"223,302,256,341\",\"row\":2,\"col\":\"C\",\"booked\":true},{\"index\":5,\"coords\":\"254,302,287,341\",\"row\":2,\"col\":\"D\",\"booked\":false},{\"index\":6,\"coords\":\"134,348,167,387\",\"row\":3,\"col\":\"A\",\"booked\":false},{\"index\":7,\"coords\":\"165,348,198,387\",\"row\":3,\"col\":\"B\",\"booked\":false},{\"index\":8,\"coords\":\"223,348,256,387\",\"row\":3,\"col\":\"C\",\"booked\":false},{\"index\":9,\"coords\":\"254,348,287,387\",\"row\":3,\"col\":\"D\",\"booked\":true},{\"index\":10,\"coords\":\"134,394,167,433\",\"row\":4,\"col\":\"A\",\"booked\":true},{\"index\":11,\"coords\":\"165,394,198,433\",\"row\":4,\"col\":\"B\",\"booked\":false},{\"index\":12,\"coords\":\"223,394,256,433\",\"row\":4,\"col\":\"C\",\"booked\":true},{\"index\":13,\"coords\":\"254,394,287,433\",\"row\":4,\"col\":\"D\",\"booked\":false},{\"index\":14,\"coords\":\"134,439,167,479\",\"row\":5,\"col\":\"A\",\"booked\":false},{\"index\":15,\"coords\":\"165,439,198,479\",\"row\":5,\"col\":\"B\",\"booked\":false},{\"index\":16,\"coords\":\"223,439,256,479\",\"row\":5,\"col\":\"C\",\"booked\":false},{\"index\":17,\"coords\":\"254,439,287,479\",\"row\":5,\"col\":\"D\",\"booked\":false},{\"index\":18,\"coords\":\"134,485,167,524\",\"row\":6,\"col\":\"A\",\"booked\":false},{\"index\":19,\"coords\":\"165,485,198,524\",\"row\":6,\"col\":\"B\",\"booked\":false},{\"index\":20,\"coords\":\"223,485,256,524\",\"row\":6,\"col\":\"C\",\"booked\":false},{\"index\":21,\"coords\":\"254,485,287,524\",\"row\":6,\"col\":\"D\",\"booked\":false},{\"index\":22,\"coords\":\"134,531,167,570\",\"row\":7,\"col\":\"A\",\"booked\":false},{\"index\":23,\"coords\":\"165,531,198,570\",\"row\":7,\"col\":\"B\",\"booked\":true},{\"index\":24,\"coords\":\"223,531,256,570\",\"row\":7,\"col\":\"C\",\"booked\":false},{\"index\":25,\"coords\":\"254,531,287,570\",\"row\":7,\"col\":\"D\",\"booked\":false},{\"index\":26,\"coords\":\"134,577,167,616\",\"row\":8,\"col\":\"A\",\"booked\":true},{\"index\":27,\"coords\":\"165,577,198,616\",\"row\":8,\"col\":\"B\",\"booked\":false},{\"index\":28,\"coords\":\"223,577,256,616\",\"row\":8,\"col\":\"C\",\"booked\":false},{\"index\":29,\"coords\":\"254,577,287,616\",\"row\":8,\"col\":\"D\",\"booked\":true},{\"index\":30,\"coords\":\"134,622,167,662\",\"row\":9,\"col\":\"A\",\"booked\":false},{\"index\":31,\"coords\":\"165,622,198,662\",\"row\":9,\"col\":\"B\",\"booked\":false},{\"index\":32,\"coords\":\"223,622,256,662\",\"row\":9,\"col\":\"C\",\"booked\":false},{\"index\":33,\"coords\":\"254,622,287,662\",\"row\":9,\"col\":\"D\",\"booked\":true},{\"index\":34,\"coords\":\"134,668,167,707\",\"row\":10,\"col\":\"A\",\"booked\":true},{\"index\":35,\"coords\":\"165,668,198,707\",\"row\":10,\"col\":\"B\",\"booked\":true},{\"index\":36,\"coords\":\"223,668,256,707\",\"row\":10,\"col\":\"C\",\"booked\":false},{\"index\":37,\"coords\":\"254,668,287,707\",\"row\":10,\"col\":\"D\",\"booked\":true},{\"index\":38,\"coords\":\"134,714,167,753\",\"row\":11,\"col\":\"A\",\"booked\":false},{\"index\":39,\"coords\":\"165,714,198,753\",\"row\":11,\"col\":\"B\",\"booked\":false},{\"index\":40,\"coords\":\"223,714,256,753\",\"row\":11,\"col\":\"C\",\"booked\":true},{\"index\":41,\"coords\":\"254,714,287,753\",\"row\":11,\"col\":\"D\",\"booked\":false},{\"index\":42,\"coords\":\"134,760,167,799\",\"row\":12,\"col\":\"A\",\"booked\":true},{\"index\":43,\"coords\":\"165,760,198,799\",\"row\":12,\"col\":\"B\",\"booked\":true},{\"index\":44,\"coords\":\"223,760,256,799\",\"row\":12,\"col\":\"C\",\"booked\":true},{\"index\":45,\"coords\":\"254,760,287,799\",\"row\":12,\"col\":\"D\",\"booked\":true},{\"index\":46,\"coords\":\"134,805,167,844\",\"row\":13,\"col\":\"A\",\"booked\":false},{\"index\":47,\"coords\":\"165,805,198,844\",\"row\":13,\"col\":\"B\",\"booked\":false},{\"index\":48,\"coords\":\"223,805,256,844\",\"row\":13,\"col\":\"C\",\"booked\":false},{\"index\":49,\"coords\":\"254,805,287,845\",\"row\":13,\"col\":\"D\",\"booked\":false},{\"index\":50,\"coords\":\"134,851,167,890\",\"row\":14,\"col\":\"A\",\"booked\":false},{\"index\":51,\"coords\":\"165,851,198,890\",\"row\":14,\"col\":\"B\",\"booked\":false},{\"index\":52,\"coords\":\"223,851,256,890\",\"row\":14,\"col\":\"C\",\"booked\":true},{\"index\":53,\"coords\":\"254,851,287,890\",\"row\":14,\"col\":\"D\",\"booked\":false},{\"index\":54,\"coords\":\"134,897,167,936\",\"row\":15,\"col\":\"A\",\"booked\":true},{\"index\":55,\"coords\":\"165,897,198,936\",\"row\":15,\"col\":\"B\",\"booked\":false},{\"index\":56,\"coords\":\"223,897,256,936\",\"row\":15,\"col\":\"C\",\"booked\":false},{\"index\":57,\"coords\":\"254,897,287,936\",\"row\":15,\"col\":\"D\",\"booked\":false},{\"index\":58,\"coords\":\"134,943,167,982\",\"row\":16,\"col\":\"A\",\"booked\":true},{\"index\":59,\"coords\":\"165,943,198,982\",\"row\":16,\"col\":\"B\",\"booked\":false},{\"index\":60,\"coords\":\"223,943,256,982\",\"row\":16,\"col\":\"C\",\"booked\":false},{\"index\":61,\"coords\":\"254,943,287,982\",\"row\":16,\"col\":\"D\",\"booked\":true},{\"index\":62,\"coords\":\"134,988,167,1027\",\"row\":17,\"col\":\"A\",\"booked\":false},{\"index\":63,\"coords\":\"165,988,198,1027\",\"row\":17,\"col\":\"B\",\"booked\":false},{\"index\":64,\"coords\":\"223,988,256,1027\",\"row\":17,\"col\":\"C\",\"booked\":false},{\"index\":65,\"coords\":\"254,988,287,1028\",\"row\":17,\"col\":\"D\",\"booked\":false},{\"index\":66,\"coords\":\"134,1034,167,1073\",\"row\":18,\"col\":\"A\",\"booked\":true},{\"index\":67,\"coords\":\"165,1034,198,1073\",\"row\":18,\"col\":\"B\",\"booked\":false},{\"index\":68,\"coords\":\"223,1034,256,1073\",\"row\":18,\"col\":\"C\",\"booked\":true},{\"index\":69,\"coords\":\"254,1034,287,1073\",\"row\":18,\"col\":\"D\",\"booked\":false}]}");

/***/ }),

/***/ "7cjg":
/*!*******************************************************************!*\
  !*** ./src/app/components/currexchange/currexchange.component.ts ***!
  \*******************************************************************/
/*! exports provided: CurrexchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrexchangeComponent", function() { return CurrexchangeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _currex_dialog_currex_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currex-dialog/currex-dialog.component */ "r/9C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_exchangerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/exchangerate.service */ "YjMY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_currexdialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/currexdialog.service */ "Ewkk");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function CurrexchangeComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Podaj kwot\u0119, aby kontynuowa\u0107 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CurrexchangeComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r5.currency, " ");
} }
function CurrexchangeComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wybierz walut\u0119, aby kontynuowa\u0107 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CurrexchangeComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r6.currency, " ");
} }
function CurrexchangeComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wybierz walut\u0119, aby kontynuowa\u0107 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CurrexchangeComponent {
    constructor(exchangeRate, dialog, data) {
        this.exchangeRate = exchangeRate;
        this.dialog = dialog;
        this.data = data;
        // form controls
        this.currencyCalc = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            baseCurrency: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            targetCurrency: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    // swap
    swapCurrencies() {
        let x = this.currencyCalc.value.baseCurrency;
        let y = this.currencyCalc.value.targetCurrency;
        // console.log(y, x)
    }
    openCurrexDialog() {
        let base = this.myCurrencies.find((base) => base.code == this.currencyCalc.value.baseCurrency);
        let indexOfBase = this.myCurrencies.indexOf(base);
        let rateOfBase = this.myCurrencies[indexOfBase].mid;
        let target = this.myCurrencies.find((target) => target.code == this.currencyCalc.value.targetCurrency);
        let indexOfTarget = this.myCurrencies.indexOf(target);
        let rateOfTarget = this.myCurrencies[indexOfTarget].mid;
        let rate = rateOfBase / rateOfTarget;
        let computedValue = (rate * this.currencyCalc.value.amount);
        this.toDialogArray = [
            this.currencyCalc.value.baseCurrency,
            this.currencyCalc.value.targetCurrency,
            this.currencyCalc.value.amount,
            rate,
            computedValue,
            this.exchangeArray[0].effectiveDate,
            this.exchangeArray[0].no,
        ];
        this.dialog.open(_currex_dialog_currex_dialog_component__WEBPACK_IMPORTED_MODULE_1__["CurrexDialogComponent"]);
        this.data.changeMessage(this.toDialogArray);
    }
    ngOnInit() {
        this.exchangeRate.getActualExchangeRate().subscribe((result) => {
            this.exchangeArray = result;
            this.myCurrencies = [
                { 'currency': "złoty polski", "code": "PLN", "mid": 1 },
                this.exchangeArray[0].rates[7],
                this.exchangeArray[0].rates[1],
                this.exchangeArray[0].rates[10],
                this.exchangeArray[0].rates[9],
                this.exchangeArray[0].rates[11],
                this.exchangeArray[0].rates[8],
                this.exchangeArray[0].rates[13],
                this.exchangeArray[0].rates[14],
                this.exchangeArray[0].rates[16],
                this.exchangeArray[0].rates[17],
                this.exchangeArray[0].rates[22],
            ];
            for (let i = 0; i < this.myCurrencies.length; i++) {
                this.myCurrencies[i].url = '../../../assets/currencies/' + i + '.png';
            }
        });
        this.data.currentMessage.subscribe(message => this.message = message);
    }
}
CurrexchangeComponent.ɵfac = function CurrexchangeComponent_Factory(t) { return new (t || CurrexchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_exchangerate_service__WEBPACK_IMPORTED_MODULE_3__["ExchangerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_currexdialog_service__WEBPACK_IMPORTED_MODULE_5__["CurrexdialogService"])); };
CurrexchangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CurrexchangeComponent, selectors: [["app-currexchange"]], decls: 29, vars: 7, consts: [[1, "container-fluid"], [1, "shadow"], [3, "formGroup"], ["appearance", "outline"], ["type", "number", "matInput", "", "formControlName", "amount"], [4, "ngIf"], [1, "verse"], ["formControlName", "baseCurrency"], [3, "value", 4, "ngFor", "ngForOf"], [1, "arrows", 3, "click"], ["formControlName", "targetCurrency"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [3, "value"], [3, "src"]], template: function CurrexchangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Przelicznik walut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Kwota");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CurrexchangeComponent_mat_error_10_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Przelicz z:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CurrexchangeComponent_mat_option_16_Template, 3, 3, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CurrexchangeComponent_mat_error_17_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CurrexchangeComponent_Template_mat_icon_click_18_listener() { return ctx.swapCurrencies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Przelicz na:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CurrexchangeComponent_mat_option_24_Template, 3, 3, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CurrexchangeComponent_mat_error_25_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CurrexchangeComponent_Template_button_click_27_listener() { return ctx.openCurrexDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Przelicz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_3_0 = null;
        let tmp_5_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.currencyCalc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.currencyCalc.get("amount")) == null ? null : tmp_1_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.myCurrencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.currencyCalc.get("baseCurrency")) == null ? null : tmp_3_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.myCurrencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.currencyCalc.get("targetCurrency")) == null ? null : tmp_5_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.currencyCalc.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-image: url('currency.jpg');\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n  text-shadow: -5px -5px 20px #000, 5px -5px 20px #000, -5px 5px 20px #000, 5px 5px 20px #000;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background-color: rgba(255, 255, 255, 0.97);\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.verse[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 28px;\n  margin-right: 10px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.6;\n  margin: 0 10px 18.14px 10px;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n@media (max-width: 540px) {\n  .arrows[_ngcontent-%COMP%] {\n    transform: rotate(-90deg);\n  }\n\n  .verse[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1cnJleGNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkZBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQSxnQ0FBQTs7QUFDQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQSxZQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUVFO0VBQ0UsVUFBQTtBQUFKOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSx5QkFBQTtFQURGOztFQUlBO0lBQ0Usc0JBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImN1cnJleGNoYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kcy9jdXJyZW5jeS5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LXNoYWRvdzogLTVweCAtNXB4IDIwcHggIzAwMCwgNXB4IC01cHggMjBweCAjMDAwLCAtNXB4IDVweCAyMHB4ICMwMDAsIDVweCA1cHggMjBweCAjMDAwO1xufVxuXG4uc2hhZG93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nyk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi52ZXJzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5tYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW46IDAgMTBweCAxOC4xNHB4IDEwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMS4wO1xuICB9XG59XG5cbi5idG4ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuYXJyb3dzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB9XG5cbiAgLnZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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

/***/ "Ewkk":
/*!**************************************************!*\
  !*** ./src/app/services/currexdialog.service.ts ***!
  \**************************************************/
/*! exports provided: CurrexdialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrexdialogService", function() { return CurrexdialogService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CurrexdialogService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("[1,2,3]");
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
}
CurrexdialogService.ɵfac = function CurrexdialogService_Factory(t) { return new (t || CurrexdialogService)(); };
CurrexdialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrexdialogService, factory: CurrexdialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _flight_data_flight_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flight-data/flight-data.component */ "b6gT");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");
/* harmony import */ var _currexchange_currexchange_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../currexchange/currexchange.component */ "7cjg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-flight-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-currexchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_flight_data_flight_data_component__WEBPACK_IMPORTED_MODULE_1__["FlightDataComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _currexchange_currexchange_component__WEBPACK_IMPORTED_MODULE_3__["CurrexchangeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "KppR":
/*!************************************************!*\
  !*** ./src/app/services/flightform.service.ts ***!
  \************************************************/
/*! exports provided: FlightformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightformService", function() { return FlightformService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FlightformService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("[1,2,3]");
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
}
FlightformService.ɵfac = function FlightformService_Factory(t) { return new (t || FlightformService)(); };
FlightformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FlightformService, factory: FlightformService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 40, vars: 0, consts: [[1, "container-fluid"], [1, "d-inline-flex"], [1, "social_icons"], ["href", "https://www.facebook.com/", "target", "blank"], ["src", "../../../assets/social_media_icons/facebook.png"], ["href", "https://twitter.com/", "target", "blank"], ["src", "../../../assets/social_media_icons/twitter.png"], ["href", "https://linkedin.com/", "target", "blank"], ["src", "../../../assets/social_media_icons/linkedin.png"], ["href", "https://youtube.com/", "target", "blank"], ["src", "../../../assets/social_media_icons/youtube.png"], ["href", "https://www.instagram.com/", "target", "blank"], ["src", "../../../assets/social_media_icons/instagram.png"], [1, "app_icons"], ["href", "https://play.google.com/", "target", "blank"], ["src", "../../../assets/social_media_icons/googleplay.png"], ["href", "https://www.apple.com/pl/", "target", "blank"], ["src", "../../../assets/social_media_icons/appstore.png"], [1, "note"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Og\u00F3lne warunki przewozu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Warunki u\u017Cytkowania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Polityka prywatno\u015Bci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Preferencje dotycz\u0105ce plik\u00F3w cookie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Zosta\u0144my w kontakcie!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pobierz aplikacj\u0119:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A9 2021 DaVinci Airlines by Marcin Rochowski, org. Collegium Da Vinci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  text-align: center;\n  padding-bottom: 5px;\n}\n\n.d-inline-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  margin: 10px;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.social_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  margin: 10px;\n}\n\n.app_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  margin: 10px 5px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  text-align: center;\n}\n\n.note[_ngcontent-%COMP%] {\n  margin: 12px;\n  text-align: left;\n  color: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFKRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmQtaW5saW5lLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29jaWFsX2ljb25zIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuLmFwcF9pY29ucyB7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG4gIH1cbn1cblxuXG5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90ZSB7XG4gIG1hcmdpbjogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNkZGQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "OADj":
/*!*********************************************************!*\
  !*** ./src/app/components/flights/flights.component.ts ***!
  \*********************************************************/
/*! exports provided: FlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsComponent", function() { return FlightsComponent; });
/* harmony import */ var _assets_data_myflights_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/myflights.json */ "m5BW");
var _assets_data_myflights_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/myflights.json */ "m5BW", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");




function FlightsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Numer rezerwacji:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Odlot:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Przylot:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Ilo\u015B\u0107 pasa\u017Cer\u00F3w:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "DaVinci Airlines");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 10, item_r1.nr));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r1.originCity, " ", item_r1.originAlias, " | ", item_r1.originCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r1.destinationCity, " ", item_r1.destinationAlias, " | ", item_r1.destinationCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.returnTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.passengers);
} }
class FlightsComponent {
    constructor() {
        this.flights = _assets_data_myflights_json__WEBPACK_IMPORTED_MODULE_0__["userFlights"];
    }
    ngOnInit() {
    }
}
FlightsComponent.ɵfac = function FlightsComponent_Factory(t) { return new (t || FlightsComponent)(); };
FlightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FlightsComponent, selectors: [["app-flights"]], decls: 3, vars: 1, consts: [[1, "container-fluid"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "card", "shadow"], [1, "section"], ["src", "../../../assets/dva_logo.png", "alt", "cdv_logo", 1, "logo"]], template: function FlightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FlightsComponent_div_2_Template, 32, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.flights);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-image: url('cards.jpg');\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 320px;\n  padding: 20px;\n  margin: 20px;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 32px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-align: left;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-align: right;\n  margin: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZsaWdodHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImZsaWdodHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZHMvY2FyZHMuanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDA7XG59XG5cbmg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'cdv-planes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Musisz poda\u0107 login (adres e-mail). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Podana fraza nie jest adresem e-mail! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Musisz poda\u0107 has\u0142o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor() {
        this.logInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    submit() {
        console.log(this.logInForm.value.login + '\n' + this.logInForm.value.password);
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 5, consts: [[1, "container-fluid"], [1, "container"], [1, "d-inline-flex", "flex-column", "shadow"], [3, "formGroup"], [1, "d-flex"], ["appearance", "outline"], ["type", "email", "matInput", "", "formControlName", "login"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "password"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_mat_error_9_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Has\u0142o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Zaloguj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Zapomnia\u0142e\u015B has\u0142a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.logInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.logInForm.get("login")) == null ? null : tmp_1_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.logInForm.get("login")) == null ? null : tmp_2_0.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.logInForm.get("password")) == null ? null : tmp_3_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.logInForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  height: 80vh;\n  padding: 40px;\n  background-image: url('login.jpg');\n  background-position: cover;\n  background-size: cover;\n  text-align: right;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\nh5[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n\n@media (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUVFO0lBQ0Usa0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZHMvbG9naW4uanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNoYWRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZC1mbGV4IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmg1IHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "YjMY":
/*!**************************************************!*\
  !*** ./src/app/services/exchangerate.service.ts ***!
  \**************************************************/
/*! exports provided: ExchangerateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangerateService", function() { return ExchangerateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ExchangerateService {
    constructor(http) {
        this.http = http;
        this.url = 'http://api.nbp.pl/api/exchangerates/tables/a/';
    }
    getActualExchangeRate() {
        return this.http.get(this.url);
    }
}
ExchangerateService.ɵfac = function ExchangerateService_Factory(t) { return new (t || ExchangerateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ExchangerateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExchangerateService, factory: ExchangerateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _services_exchangerate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/exchangerate.service */ "YjMY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_services_exchangerate_service__WEBPACK_IMPORTED_MODULE_6__["ExchangerateService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();


/***/ }),

/***/ "b6gT":
/*!*****************************************************************!*\
  !*** ./src/app/components/flight-data/flight-data.component.ts ***!
  \*****************************************************************/
/*! exports provided: FlightDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightDataComponent", function() { return FlightDataComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assets_data_airports_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/airports.json */ "gOke");
var _assets_data_airports_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/airports.json */ "gOke", 1);
/* harmony import */ var _assets_data_connections_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/connections.json */ "otap");
var _assets_data_connections_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/connections.json */ "otap", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_flightform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/flightform.service */ "KppR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function FlightDataComponent_mat_radio_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlightDataComponent_mat_radio_button_11_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.changeJourneyType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r10.key)("checked", item_r10.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r10.key, " ");
} }
function FlightDataComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
} }
function FlightDataComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Wybierz dat\u0119 wylotu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-datepicker-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-datepicker", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx_r3.minDate)("matDatepicker", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r13);
} }
function FlightDataComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Wybierz daty podr\u00F3\u017Cy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-date-range-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-datepicker-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-date-range-picker", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx_r5.minDate)("rangePicker", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r14);
} }
function FlightDataComponent_mat_optgroup_34_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlightDataComponent_mat_optgroup_34_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r18.createDestinationArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const airports_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", airports_r17.airportId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", airports_r17.city, " ", airports_r17.alias, " | ", airports_r17.iatacode, "");
} }
function FlightDataComponent_mat_optgroup_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-optgroup", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FlightDataComponent_mat_optgroup_34_mat_option_5_Template, 2, 4, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", group_r15.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", group_r15.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, group_r15.country));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r15.airports);
} }
function FlightDataComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Wybierz miejsce odlotu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FlightDataComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r20.airportId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", item_r20.city, " ", item_r20.alias, " | ", item_r20.iatacode, " ");
} }
function FlightDataComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Wybierz miejsce przylotu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class FlightDataComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        // form controls
        this.flighForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            journey: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            origin: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
        this.minDate = new Date;
        this.journeys = [
            {
                key: 'Podróż w jedną stronę',
                checked: true,
            }, {
                key: 'Podróż w obie strony',
                checked: false,
            }
        ];
        // passenger a'la input
        this.passengers = 1;
        // airports arrays & inputs
        this.airportsArray = _assets_data_airports_json__WEBPACK_IMPORTED_MODULE_1__["airports"];
        this.connectionsArray = _assets_data_connections_json__WEBPACK_IMPORTED_MODULE_2__["connections"];
        this.destinationsArray = [];
        this.airportsGroups = [
            {
                country: 'Polska',
                url: '/../../../assets/flags/pl.png',
                airports: [
                    this.airportsArray[0],
                    this.airportsArray[1],
                    this.airportsArray[2],
                    this.airportsArray[3],
                    this.airportsArray[4],
                    this.airportsArray[5],
                    this.airportsArray[6],
                ]
            },
            {
                country: 'Finlandia',
                url: '../../../assets/flags/fin.png',
                airports: [
                    this.airportsArray[7],
                ]
            },
            {
                country: 'Francja',
                url: '../../../assets/flags/f.png',
                airports: [
                    this.airportsArray[8],
                    this.airportsArray[9],
                ]
            },
            {
                country: 'Izrael',
                url: '../../../assets/flags/il.png',
                airports: [
                    this.airportsArray[10],
                ]
            },
            {
                country: 'Norwegia',
                url: '../../../assets/flags/n.png',
                airports: [
                    this.airportsArray[11],
                ]
            },
            {
                country: 'Szwecja',
                url: '../../../assets/flags/s.png',
                airports: [
                    this.airportsArray[12],
                    this.airportsArray[13],
                ]
            },
            {
                country: 'Węgry',
                url: '../../../assets/flags/h.png',
                airports: [
                    this.airportsArray[14],
                ]
            },
            {
                country: 'Włochy',
                url: '../../../assets/flags/i.png',
                airports: [
                    this.airportsArray[15],
                ]
            }
        ];
        // collecting flight data
        this.flightData = [];
        this.isFlightDomestic = false;
    }
    changeJourneyType() {
        for (let i = 0; i < this.journeys.length; i++) {
            this.journeys[i].checked = !this.journeys[i].checked;
        }
    }
    addPassenger() {
        if (this.passengers < 9) {
            this.passengers++;
        }
        else {
            return;
        }
    }
    removePassenger() {
        if (this.passengers > 1) {
            this.passengers--;
        }
        else {
            return;
        }
    }
    createDestinationArray() {
        this.destinationsArray = [];
        for (let i = 0; i < this.connectionsArray[this.flighForm.value.origin].destination.length; i++) {
            this.destinationsArray.push(this.airportsArray[this.connectionsArray[this.flighForm.value.origin].destination[i]]);
        }
    }
    swapLocation() {
        let x = this.airportsArray[this.flighForm.value.origin];
        let y = this.airportsArray[this.flighForm.value.destination];
        // console.log(y, x)
    }
    submit() {
        if (this.airportsArray[this.flighForm.value.origin].country === this.airportsArray[this.flighForm.value.destination].country) {
            this.isFlightDomestic = true;
        }
        else {
            this.isFlightDomestic = false;
        }
        this.flightData = [
            this.flighForm.value.start,
            this.flighForm.value.end,
            this.passengers,
            this.airportsArray[this.flighForm.value.origin].city,
            this.airportsArray[this.flighForm.value.origin].alias,
            this.airportsArray[this.flighForm.value.origin].iatacode,
            this.airportsArray[this.flighForm.value.destination].city,
            this.airportsArray[this.flighForm.value.destination].alias,
            this.airportsArray[this.flighForm.value.destination].iatacode,
            this.isFlightDomestic
        ];
        this.data.changeMessage(this.flightData);
        this.router.navigate(['seats']);
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message);
    }
}
FlightDataComponent.ɵfac = function FlightDataComponent_Factory(t) { return new (t || FlightDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_flightform_service__WEBPACK_IMPORTED_MODULE_4__["FlightformService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
FlightDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FlightDataComponent, selectors: [["app-flight-data"]], decls: 48, vars: 11, consts: [[1, "container-fluid"], [1, "container"], [1, "d-flex"], [1, "outline"], [1, "shadow"], [3, "formGroup"], ["formControlName", "journey"], [3, "value", "checked", "click", 4, "ngFor", "ngForOf"], [1, "verse"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["onewayBlock", ""], ["returnBlock", ""], [1, "d-inline-flex", "passengers"], [1, "label"], [1, "passengerButton", "leftButton", 3, "click"], [1, "passengerButton", "rightButton", 3, "click"], ["appearance", "outline", 1, "location"], ["formControlName", "origin"], [3, "disabled", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "arrows", 3, "click"], ["formControlName", "destination"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", "float-end", 3, "disabled", "click"], [3, "value", "checked", "click"], ["appearance", "outline", 1, "date"], ["matInput", "", "formControlName", "start", 3, "min", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "min", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Data wylotu"], ["matEndDate", "", "formControlName", "end", "placeholder", "Data powrotu"], [3, "disabled"], [1, "float-start", 3, "src"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [3, "value"]], template: function FlightDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u015Awiat staje przed Tob\u0105 otworem!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Wykrzycz: \"Hello, World!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FlightDataComponent_mat_radio_button_11_Template, 2, 3, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FlightDataComponent_div_13_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FlightDataComponent_ng_template_14_Template, 7, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, FlightDataComponent_ng_template_16_Template, 9, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Liczba pasa\u017Cer\u00F3w:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlightDataComponent_Template_button_click_21_listener() { return ctx.addPassenger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlightDataComponent_Template_button_click_25_listener() { return ctx.removePassenger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "flight_takeoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Wylot z: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, FlightDataComponent_mat_optgroup_34_Template, 6, 6, "mat-optgroup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, FlightDataComponent_mat_error_35_Template, 2, 0, "mat-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlightDataComponent_Template_mat_icon_click_36_listener() { return ctx.swapLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "compare_arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "flight_land");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Przylot do: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, FlightDataComponent_mat_option_44_Template, 2, 4, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, FlightDataComponent_mat_error_45_Template, 2, 0, "mat-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlightDataComponent_Template_button_click_46_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Dalej \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        let tmp_7_0 = null;
        let tmp_9_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.flighForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.journeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.journeys[0].checked == true)("ngIfThen", _r2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.passengers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.airportsGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.flighForm.get("origin")) == null ? null : tmp_7_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.destinationsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.flighForm.get("origin")) == null ? null : tmp_9_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.flighForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangePicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptgroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  height: 90vh;\n  padding: 20px;\n  background-image: url('flightform.jpg');\n  background-position: center;\n  background-size: cover;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: left;\n}\n\n.outline[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-weight: 700;\n  font-style: italic;\n  letter-spacing: 1px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  display: block;\n}\n\n.date[_ngcontent-%COMP%], .location[_ngcontent-%COMP%] {\n  width: 240px;\n}\n\n.date[_ngcontent-%COMP%] {\n  margin-right: 44px;\n}\n\n.verse[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.passengers[_ngcontent-%COMP%] {\n  width: 240px;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  padding-bottom: 18.813px;\n  margin: 3.5px 0;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6a6a6a;\n}\n\n.passengerButton[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #6a6a6a;\n  height: 54.81px;\n  width: 54.81px;\n  cursor: pointer;\n  border: 1.5px solid #e0e0e0;\n  background-color: white;\n}\n\n.passengerButton[_ngcontent-%COMP%]:hover {\n  border: 2px solid #212121;\n}\n\n.leftButton[_ngcontent-%COMP%] {\n  border-radius: 5px 0 0 5px;\n  margin-right: 16px;\n}\n\n.rightButton[_ngcontent-%COMP%] {\n  border-radius: 0 5px 5px 0;\n  margin-left: 16px;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 28px;\n  margin: 7px 8px 7px 0;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.arrows[_ngcontent-%COMP%] {\n  margin: 0 10px 18.14px 10px;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.6;\n}\n\n.arrows[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media (max-width: 767px) {\n  .d-flex[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .date[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .verse[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .arrows[_ngcontent-%COMP%] {\n    transform: rotate(-90deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZsaWdodC1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHQTtFQUNFLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTs7RUFFRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBSUU7RUFDRSx5QkFBQTtBQUZKOztBQU9BO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BLGdDQUFBOztBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUpGOztBQU9BLFlBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFKRjs7QUFNRTtFQUNFLFVBQUE7QUFKSjs7QUFRQTtFQUVFO0lBQ0Usb0JBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQU5GOztFQVNBOztJQUVFLGtCQUFBO0VBTkY7O0VBU0E7SUFDRSxlQUFBO0VBTkY7O0VBU0E7SUFDRSxzQkFBQTtFQU5GOztFQVNBO0lBQ0UseUJBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImZsaWdodC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGhlaWdodDogOTB2aDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZHMvZmxpZ2h0Zm9ybS5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4uZC1mbGV4IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2hhZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5vdXRsaW5lIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm1hdC1yYWRpby1idXR0b25+Lm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kYXRlLFxuLmxvY2F0aW9uIHtcbiAgd2lkdGg6IDI0MHB4O1xufVxuXG4uZGF0ZSB7XG4gIG1hcmdpbi1yaWdodDogNDRweDtcbn1cblxuLnZlcnNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYXNzZW5nZXJzIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxOC44MTNweDtcbiAgbWFyZ2luOiAzLjVweCAwO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMTA2LCAxMDYsIDEwNik7XG59XG5cbiRyYWRpdXM6IDVweDtcblxuLnBhc3NlbmdlckJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJnYigxMDYsIDEwNiwgMTA2KTtcbiAgaGVpZ2h0OiA1NC44MXB4O1xuICB3aWR0aDogNTQuODFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDMzLCAzMywgMzMpO1xuICB9XG5cbn1cblxuLmxlZnRCdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzIDAgMCAkcmFkaXVzO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5yaWdodEJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgJHJhZGl1cyAkcmFkaXVzIDA7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiA3cHggOHB4IDdweCAwO1xufVxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxubWF0LWljb24ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmFycm93cyB7XG4gIG1hcmdpbjogMCAxMHB4IDE4LjE0cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxLjA7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgLmQtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBoMSxcbiAgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5kYXRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAudmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYXJyb3dzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "gOke":
/*!***************************************!*\
  !*** ./src/assets/data/airports.json ***!
  \***************************************/
/*! exports provided: name, airports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"airports\",\"airports\":[{\"airportId\":0,\"country\":\"pl\",\"city\":\"Warszawa\",\"alias\":\"Okęcie\",\"iatacode\":\"WAW\"},{\"airportId\":1,\"country\":\"pl\",\"city\":\"Warszawa\",\"alias\":\"Modlin\",\"iatacode\":\"WMI\"},{\"airportId\":2,\"country\":\"pl\",\"city\":\"Gdańsk\",\"alias\":\"\",\"iatacode\":\"GDN\"},{\"airportId\":3,\"country\":\"pl\",\"city\":\"Katowice\",\"alias\":\"Pyrzowice\",\"iatacode\":\"KTW\"},{\"airportId\":4,\"country\":\"pl\",\"city\":\"Kraków\",\"alias\":\"Balice\",\"iatacode\":\"KRK\"},{\"airportId\":5,\"country\":\"pl\",\"city\":\"Poznań\",\"alias\":\"Ławica\",\"iatacode\":\"POZ\"},{\"airportId\":6,\"country\":\"pl\",\"city\":\"Wrocław\",\"alias\":\"\",\"iatacode\":\"WRO\"},{\"airportId\":7,\"country\":\"fin\",\"city\":\"Turku\",\"alias\":\"\",\"iatacode\":\"TKU\"},{\"airportId\":8,\"country\":\"f\",\"city\":\"Paryż\",\"alias\":\"Beauvais\",\"iatacode\":\"BVA\"},{\"airportId\":9,\"country\":\"f\",\"city\":\"Tuluza\",\"alias\":\"Blagnac\",\"iatacode\":\"TLS\"},{\"airportId\":10,\"country\":\"il\",\"city\":\"Ejlat\",\"alias\":\"Owda\",\"iatacode\":\"VDA\"},{\"airportId\":11,\"country\":\"n\",\"city\":\"Oslo\",\"alias\":\"Moss-Rygge\",\"iatacode\":\"RYG\"},{\"airportId\":12,\"country\":\"n\",\"city\":\"Stavanger\",\"alias\":\"\",\"iatacode\":\"SVG\"},{\"airportId\":13,\"country\":\"s\",\"city\":\"Sztokholm\",\"alias\":\"Skavsta\",\"iatacode\":\"NYO\"},{\"airportId\":14,\"country\":\"h\",\"city\":\"Budapeszt\",\"alias\":\"\",\"iatacode\":\"BUD\"},{\"airportId\":15,\"country\":\"i\",\"city\":\"Mediolan\",\"alias\":\"Bergamo\",\"iatacode\":\"BYG\"}]}");

/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














const MAT_DIALOG_GLOBAL_CONFIG = {
    width: '420px',
    hasBackdrop: true
};
const MATERIAL_MODULES = [
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"]
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: MAT_DIALOG_GLOBAL_CONFIG },
        { provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MAT_RADIO_DEFAULT_OPTIONS"], useValue: { color: 'primary' } },
    ], imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return [""]; };
const _c1 = function () { return ["myflights"]; };
const _c2 = function () { return ["login"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 6, consts: [[1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white"], [1, "container-fluid"], [1, "navbar-brand"], ["src", "../../../assets/dva_logo.png", "routerLink", "/homepage"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-link", 3, "routerLink"], ["href", "#", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Strona G\u0142\u00F3wna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Moje loty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Zaloguj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zarejestruj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSx5QkFBQTtBQURGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xuICBpbWcge1xuICAgIGhlaWdodDogMzJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuYSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iXX0= */"] });


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/material/material.module */ "hctd");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "IURz");
/* harmony import */ var _app_components_flight_data_flight_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../app/components/flight-data/flight-data.component */ "b6gT");
/* harmony import */ var _app_components_seatselection_seatselection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/components/seatselection/seatselection.component */ "3BsB");
/* harmony import */ var _app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _app_components_currexchange_currexchange_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/components/currexchange/currexchange.component */ "7cjg");
/* harmony import */ var _app_components_currexchange_currex_dialog_currex_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/components/currexchange/currex-dialog/currex-dialog.component */ "r/9C");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "W3Zi");
/* harmony import */ var _flights_flights_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flights/flights.component */ "OADj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _app_components_flight_data_flight_data_component__WEBPACK_IMPORTED_MODULE_5__["FlightDataComponent"],
        _app_components_seatselection_seatselection_component__WEBPACK_IMPORTED_MODULE_6__["SeatselectionComponent"],
        _app_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
        _app_components_currexchange_currexchange_component__WEBPACK_IMPORTED_MODULE_8__["CurrexchangeComponent"],
        _app_components_currexchange_currex_dialog_currex_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CurrexDialogComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _flights_flights_component__WEBPACK_IMPORTED_MODULE_11__["FlightsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();


/***/ }),

/***/ "m5BW":
/*!****************************************!*\
  !*** ./src/assets/data/myflights.json ***!
  \****************************************/
/*! exports provided: userFirstName, userLastName, userFlights, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"userFirstName\":\"Marcin\",\"userLastName\":\"Rochowski\",\"userFlights\":[{\"nr\":\"vdfo349wf3\",\"departureTime\":\"2012-07-31\",\"returnTime\":\"2012-08-02\",\"passengers\":2,\"originCity\":\"Warszawa\",\"originAlias\":\"Modlin\",\"originCode\":\"WMI\",\"destinationCity\":\"Stavanger\",\"destinationAlias\":\"\",\"destinationCode\":\"SVG\",\"isFlightDomestic\":false},{\"nr\":\"32rf2m3934\",\"departureTime\":\"2013-06-05\",\"returnTime\":\"2013-06-08\",\"passengers\":4,\"originCity\":\"Warszawa\",\"originAlias\":\"Okęcie\",\"originCode\":\"WAW\",\"destinationCity\":\"Sztokholm\",\"destinationAlias\":\"Skavsta\",\"destinationCode\":\"NYO\",\"isFlightDomestic\":false},{\"nr\":\"rbg09w4t46\",\"departureTime\":\"2014-04-04\",\"returnTime\":\"2014-04-06\",\"passengers\":2,\"originCity\":\"Poznań\",\"originAlias\":\"Ławica\",\"originCode\":\"POZ\",\"destinationCity\":\"Oslo\",\"destinationAlias\":\"Moss-Rygge\",\"destinationCode\":\"RYG\",\"isFlightDomestic\":false}]}");

/***/ }),

/***/ "otap":
/*!******************************************!*\
  !*** ./src/assets/data/connections.json ***!
  \******************************************/
/*! exports provided: name, connections, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"connections\",\"connections\":[{\"origin\":0,\"destination\":[14,8,5,13]},{\"origin\":1,\"destination\":[10,12,7]},{\"origin\":2,\"destination\":[12,7,6]},{\"origin\":3,\"destination\":[15,13]},{\"origin\":4,\"destination\":[10,11,9]},{\"origin\":5,\"destination\":[15,11,0]},{\"origin\":6,\"destination\":[2,8]},{\"origin\":7,\"destination\":[2,1]},{\"origin\":8,\"destination\":[13,9,0,6]},{\"origin\":9,\"destination\":[10,4,8]},{\"origin\":10,\"destination\":[4,9,1]},{\"origin\":11,\"destination\":[14,4,5]},{\"origin\":12,\"destination\":[2,15,1]},{\"origin\":13,\"destination\":[3,8,0]},{\"origin\":14,\"destination\":[11,0]},{\"origin\":15,\"destination\":[3,5,12]}]}");

/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 78, vars: 0, consts: [[1, "container-fluid"], ["id", "carousel", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "4", "aria-label", "Slide 5"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "5", "aria-label", "Slide 6"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "6", "aria-label", "Slide 7"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide-to", "7", "aria-label", "Slide 8"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/carousel/paris.jpg", "alt", "paris", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "outline"], [1, "carousel-item"], ["src", "../../../assets/carousel/budapest.jpg", "alt", "budapest", 1, "d-block", "w-100"], ["src", "../../../assets/carousel/stavanger.jpg", "alt", "stavanger", 1, "d-block", "w-100"], ["src", "../../../assets/carousel/turku.jpg", "alt", "turku", 1, "d-block", "w-100"], ["src", "../../../assets/carousel/eljat.jpg", "alt", "eljat", 1, "d-block", "w-100"], ["src", "../../../assets/carousel/stockholm.jpg", "alt", "stockholm", 1, "d-block", "w-100"], ["src", "../../../assets/carousel/praga.jpg", "alt", "praha", 1, "d-block", "w-100"], ["src", "../../../assets/carousel/toulouse.jpg", "alt", "praha", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carousel", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Poszukaj inspiracji na przygod\u0119 \u017Cycia!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pary\u017C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Odkryj stolic\u0119 Francji oraz... mody i mi\u0142o\u015Bci!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Budapeszt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Przejed\u017A si\u0119 jedn\u0105 z najstarszych linii metra na \u015Bwiecie!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Stavanger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Fiordy b\u0119d\u0105 jad\u0142y Ci z r\u0119ki!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Turku/Helsinki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Odwied\u017A najbardziej wysuni\u0119t\u0105 na p\u00F3\u0142noc stolic\u0119 Europy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Eljat/Jerozolima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Poznaj kolebk\u0119 judaizmu, chrze\u015Bcija\u0144stwa oraz islamu!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sztokholm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Bezpo\u015Brednie po\u0142\u0105czenie z Warszawy oraz Katowic ju\u017C od 39 z\u0142!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Praga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Stolica naszego po\u0142udniowego s\u0105siada na wyci\u0105gni\u0119cie r\u0119ki!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Tuluza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Odwied\u017A siedzib\u0119 podniebnego giganta - firmy AIRBUS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 2vh;\n}\n\n.outline[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: -5px -5px 20px #000, 5px -5px 20px #000, -5px 5px 20px #000, 5px 5px 20px #000;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: #ddd;\n  font-style: italic;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsMkZBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAydmg7XG59XG5cbi5vdXRsaW5lIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTVweCAtNXB4IDIwcHggIzAwMCwgNXB4IC01cHggMjBweCAjMDAwLCAtNXB4IDVweCAyMHB4ICMwMDAsIDVweCA1cHggMjBweCAjMDAwO1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiAjZGRkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmgzIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIl19 */"] });


/***/ }),

/***/ "r/9C":
/*!**********************************************************************************!*\
  !*** ./src/app/components/currexchange/currex-dialog/currex-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CurrexDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrexDialogComponent", function() { return CurrexDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_currexdialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/currexdialog.service */ "Ewkk");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class CurrexDialogComponent {
    constructor(data) {
        this.data = data;
        this.baseCurrency = '';
        this.targetCurrency = '';
        this.amount = 0;
        this.rate = 0;
        this.computedValue = 0;
        this.date = '';
        this.no = '';
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message);
        this.baseCurrency = this.message[0];
        this.targetCurrency = this.message[1];
        this.amount = this.message[2];
        this.rate = this.message[3];
        this.computedValue = this.message[4];
        this.date = this.message[5];
        this.no = this.message[6];
    }
}
CurrexDialogComponent.ɵfac = function CurrexDialogComponent_Factory(t) { return new (t || CurrexDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_currexdialog_service__WEBPACK_IMPORTED_MODULE_1__["CurrexdialogService"])); };
CurrexDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrexDialogComponent, selectors: [["app-currex-dialog"]], decls: 23, vars: 24, consts: [["mat-dialog-title", ""], [1, "row"], [1, "col"], ["align", "end"], ["mat-raised-button", "", "mat-dialog-close", ""]], template: function CurrexDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Przelicznik walut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Powr\u00F3t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 12, ctx.amount, "1.2-2"), " ", ctx.baseCurrency, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 15, ctx.computedValue, "1.2-2"), " ", ctx.targetCurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("1 ", ctx.baseCurrency, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 18, ctx.rate, "1.2-2"), " ", ctx.targetCurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("1 ", ctx.targetCurrency, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 21, 1 / ctx.rate, "1.2-2"), " ", ctx.baseCurrency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Kurs NBP Web API numer ", ctx.no, ", z dnia ", ctx.date, "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n}\n\nh5[_ngcontent-%COMP%] {\n  text-align: end;\n  font-style: italic;\n}\n\nbutton[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2N1cnJleC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJjdXJyZXgtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oNSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_flights_flights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/flights/flights.component */ "OADj");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_seatselection_seatselection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/seatselection/seatselection.component */ "3BsB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'seats', component: _components_seatselection_seatselection_component__WEBPACK_IMPORTED_MODULE_4__["SeatselectionComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'myflights', component: _components_flights_flights_component__WEBPACK_IMPORTED_MODULE_1__["FlightsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xlop":
/*!******************************************!*\
  !*** ./src/assets/data/boeingseats.json ***!
  \******************************************/
/*! exports provided: company, model, version, url, seats, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"company\":\"boeing\",\"model\":\"737-400\",\"version\":\"(734)\",\"url\":\"https://www.seatguru.com/airlines/LOT_Polish_Airlines/LOT_Polish_Airlines_Boeing_737-400.php\",\"seats\":[{\"index\":0,\"coords\":\"133,224,155,250\",\"row\":1,\"col\":\"A\",\"booked\":true},{\"index\":1,\"coords\":\"174,224,196,250\",\"row\":1,\"col\":\"C\",\"booked\":false},{\"index\":2,\"coords\":\"133,256,155,282\",\"row\":2,\"col\":\"A\",\"booked\":false},{\"index\":3,\"coords\":\"174,256,196,282\",\"row\":2,\"col\":\"C\",\"booked\":false},{\"index\":4,\"coords\":\"224,256,246,282\",\"row\":2,\"col\":\"D\",\"booked\":false},{\"index\":5,\"coords\":\"265,256,287,282\",\"row\":2,\"col\":\"F\",\"booked\":false},{\"index\":6,\"coords\":\"133,288,155,314\",\"row\":3,\"col\":\"A\",\"booked\":false},{\"index\":7,\"coords\":\"174,288,196,314\",\"row\":3,\"col\":\"C\",\"booked\":true},{\"index\":8,\"coords\":\"224,288,246,314\",\"row\":3,\"col\":\"D\",\"booked\":false},{\"index\":9,\"coords\":\"265,288,287,314\",\"row\":3,\"col\":\"F\",\"booked\":true},{\"index\":10,\"coords\":\"133,320,155,346\",\"row\":4,\"col\":\"A\",\"booked\":true},{\"index\":11,\"coords\":\"174,320,196,346\",\"row\":4,\"col\":\"C\",\"booked\":false},{\"index\":12,\"coords\":\"224,320,246,346\",\"row\":4,\"col\":\"D\",\"booked\":false},{\"index\":13,\"coords\":\"265,320,287,346\",\"row\":4,\"col\":\"F\",\"booked\":true},{\"index\":14,\"coords\":\"133,352,155,378\",\"row\":5,\"col\":\"A\",\"booked\":true},{\"index\":15,\"coords\":\"174,352,196,378\",\"row\":5,\"col\":\"C\",\"booked\":true},{\"index\":16,\"coords\":\"224,352,246,378\",\"row\":5,\"col\":\"D\",\"booked\":false},{\"index\":17,\"coords\":\"265,352,287,378\",\"row\":5,\"col\":\"F\",\"booked\":true},{\"index\":18,\"coords\":\"133,402,155,428\",\"row\":6,\"col\":\"A\",\"booked\":true},{\"index\":19,\"coords\":\"153,402,176,428\",\"row\":6,\"col\":\"B\",\"booked\":true},{\"index\":20,\"coords\":\"174,402,196,428\",\"row\":6,\"col\":\"C\",\"booked\":false},{\"index\":21,\"coords\":\"224,402,246,428\",\"row\":6,\"col\":\"D\",\"booked\":false},{\"index\":22,\"coords\":\"245,402,267,428\",\"row\":6,\"col\":\"E\",\"booked\":false},{\"index\":23,\"coords\":\"265,402,287,428\",\"row\":6,\"col\":\"F\",\"booked\":false},{\"index\":24,\"coords\":\"133,434,155,460\",\"row\":7,\"col\":\"A\",\"booked\":false},{\"index\":25,\"coords\":\"153,434,176,460\",\"row\":7,\"col\":\"B\",\"booked\":false},{\"index\":26,\"coords\":\"174,434,196,460\",\"row\":7,\"col\":\"C\",\"booked\":false},{\"index\":27,\"coords\":\"224,434,246,460\",\"row\":7,\"col\":\"D\",\"booked\":false},{\"index\":28,\"coords\":\"245,434,267,460\",\"row\":7,\"col\":\"F\",\"booked\":false},{\"index\":29,\"coords\":\"265,434,287,460\",\"row\":7,\"col\":\"E\",\"booked\":false},{\"index\":30,\"coords\":\"133,466,155,492\",\"row\":8,\"col\":\"A\",\"booked\":true},{\"index\":31,\"coords\":\"153,466,176,492\",\"row\":8,\"col\":\"B\",\"booked\":true},{\"index\":32,\"coords\":\"174,466,196,492\",\"row\":8,\"col\":\"C\",\"booked\":true},{\"index\":33,\"coords\":\"224,466,246,492\",\"row\":8,\"col\":\"D\",\"booked\":false},{\"index\":34,\"coords\":\"245,466,267,492\",\"row\":8,\"col\":\"E\",\"booked\":false},{\"index\":35,\"coords\":\"265,466,287,492\",\"row\":8,\"col\":\"F\",\"booked\":true},{\"index\":36,\"coords\":\"133,516,155,542\",\"row\":9,\"col\":\"A\",\"booked\":false},{\"index\":37,\"coords\":\"153,516,176,542\",\"row\":9,\"col\":\"B\",\"booked\":false},{\"index\":38,\"coords\":\"174,516,196,542\",\"row\":9,\"col\":\"C\",\"booked\":true},{\"index\":39,\"coords\":\"224,516,246,542\",\"row\":9,\"col\":\"D\",\"booked\":false},{\"index\":40,\"coords\":\"245,516,267,542\",\"row\":9,\"col\":\"E\",\"booked\":false},{\"index\":41,\"coords\":\"265,516,287,542\",\"row\":9,\"col\":\"F\",\"booked\":false},{\"index\":42,\"coords\":\"133,548,155,574\",\"row\":10,\"col\":\"A\",\"booked\":false},{\"index\":43,\"coords\":\"153,548,176,574\",\"row\":10,\"col\":\"B\",\"booked\":false},{\"index\":44,\"coords\":\"174,548,196,574\",\"row\":10,\"col\":\"C\",\"booked\":false},{\"index\":45,\"coords\":\"224,548,246,574\",\"row\":10,\"col\":\"D\",\"booked\":false},{\"index\":46,\"coords\":\"245,548,267,574\",\"row\":10,\"col\":\"E\",\"booked\":false},{\"index\":47,\"coords\":\"265,548,287,574\",\"row\":10,\"col\":\"F\",\"booked\":false},{\"index\":48,\"coords\":\"133,580,155,606\",\"row\":11,\"col\":\"A\",\"booked\":false},{\"index\":49,\"coords\":\"153,580,176,606\",\"row\":11,\"col\":\"B\",\"booked\":true},{\"index\":50,\"coords\":\"174,580,196,606\",\"row\":11,\"col\":\"C\",\"booked\":false},{\"index\":51,\"coords\":\"224,580,246,606\",\"row\":11,\"col\":\"D\",\"booked\":true},{\"index\":52,\"coords\":\"245,580,267,606\",\"row\":11,\"col\":\"E\",\"booked\":false},{\"index\":53,\"coords\":\"265,580,287,606\",\"row\":11,\"col\":\"F\",\"booked\":false},{\"index\":54,\"coords\":\"133,612,155,638\",\"row\":12,\"col\":\"A\",\"booked\":true},{\"index\":55,\"coords\":\"153,612,176,638\",\"row\":12,\"col\":\"B\",\"booked\":false},{\"index\":56,\"coords\":\"174,612,196,638\",\"row\":12,\"col\":\"C\",\"booked\":true},{\"index\":57,\"coords\":\"224,612,246,638\",\"row\":12,\"col\":\"D\",\"booked\":false},{\"index\":58,\"coords\":\"245,612,267,638\",\"row\":12,\"col\":\"E\",\"booked\":false},{\"index\":59,\"coords\":\"265,612,287,638\",\"row\":12,\"col\":\"F\",\"booked\":true},{\"index\":60,\"coords\":\"133,644,155,670\",\"row\":13,\"col\":\"A\",\"booked\":false},{\"index\":61,\"coords\":\"153,644,176,670\",\"row\":13,\"col\":\"B\",\"booked\":false},{\"index\":62,\"coords\":\"174,644,196,670\",\"row\":13,\"col\":\"C\",\"booked\":false},{\"index\":63,\"coords\":\"224,644,246,670\",\"row\":13,\"col\":\"D\",\"booked\":false},{\"index\":64,\"coords\":\"245,644,267,670\",\"row\":13,\"col\":\"E\",\"booked\":true},{\"index\":65,\"coords\":\"265,644,287,670\",\"row\":13,\"col\":\"F\",\"booked\":false},{\"index\":66,\"coords\":\"133,696,155,721\",\"row\":14,\"col\":\"A\",\"booked\":false},{\"index\":67,\"coords\":\"153,696,176,721\",\"row\":14,\"col\":\"B\",\"booked\":false},{\"index\":68,\"coords\":\"174,696,196,721\",\"row\":14,\"col\":\"C\",\"booked\":true},{\"index\":69,\"coords\":\"224,696,246,721\",\"row\":14,\"col\":\"D\",\"booked\":true},{\"index\":70,\"coords\":\"245,696,267,721\",\"row\":14,\"col\":\"E\",\"booked\":true},{\"index\":71,\"coords\":\"265,696,287,721\",\"row\":14,\"col\":\"F\",\"booked\":true},{\"index\":72,\"coords\":\"133,747,155,773\",\"row\":15,\"col\":\"A\",\"booked\":false},{\"index\":73,\"coords\":\"154,747,176,773\",\"row\":15,\"col\":\"B\",\"booked\":true},{\"index\":74,\"coords\":\"174,747,196,773\",\"row\":15,\"col\":\"C\",\"booked\":true},{\"index\":75,\"coords\":\"224,747,246,773\",\"row\":15,\"col\":\"D\",\"booked\":true},{\"index\":76,\"coords\":\"245,747,267,773\",\"row\":15,\"col\":\"E\",\"booked\":false},{\"index\":77,\"coords\":\"265,747,287,773\",\"row\":15,\"col\":\"F\",\"booked\":true},{\"index\":78,\"coords\":\"133,779,155,805\",\"row\":16,\"col\":\"A\",\"booked\":false},{\"index\":79,\"coords\":\"153,779,176,805\",\"row\":16,\"col\":\"B\",\"booked\":true},{\"index\":80,\"coords\":\"174,779,196,805\",\"row\":16,\"col\":\"C\",\"booked\":false},{\"index\":81,\"coords\":\"224,779,246,805\",\"row\":16,\"col\":\"D\",\"booked\":false},{\"index\":82,\"coords\":\"245,779,267,805\",\"row\":16,\"col\":\"E\",\"booked\":false},{\"index\":83,\"coords\":\"265,779,287,805\",\"row\":16,\"col\":\"F\",\"booked\":false},{\"index\":84,\"coords\":\"133,811,155,837\",\"row\":17,\"col\":\"A\",\"booked\":true},{\"index\":85,\"coords\":\"153,811,176,837\",\"row\":17,\"col\":\"B\",\"booked\":true},{\"index\":86,\"coords\":\"174,811,196,837\",\"row\":17,\"col\":\"C\",\"booked\":false},{\"index\":87,\"coords\":\"224,811,246,837\",\"row\":17,\"col\":\"D\",\"booked\":false},{\"index\":88,\"coords\":\"245,811,267,837\",\"row\":17,\"col\":\"E\",\"booked\":true},{\"index\":89,\"coords\":\"265,811,287,837\",\"row\":17,\"col\":\"F\",\"booked\":false},{\"index\":90,\"coords\":\"133,843,155,869\",\"row\":18,\"col\":\"A\",\"booked\":false},{\"index\":91,\"coords\":\"153,843,176,869\",\"row\":18,\"col\":\"B\",\"booked\":false},{\"index\":92,\"coords\":\"174,843,196,869\",\"row\":18,\"col\":\"C\",\"booked\":false},{\"index\":93,\"coords\":\"224,843,246,869\",\"row\":18,\"col\":\"D\",\"booked\":false},{\"index\":94,\"coords\":\"245,843,267,869\",\"row\":18,\"col\":\"E\",\"booked\":true},{\"index\":95,\"coords\":\"265,843,287,869\",\"row\":18,\"col\":\"F\",\"booked\":false},{\"index\":96,\"coords\":\"133,875,155,901\",\"row\":19,\"col\":\"A\",\"booked\":true},{\"index\":97,\"coords\":\"153,875,176,901\",\"row\":19,\"col\":\"B\",\"booked\":false},{\"index\":98,\"coords\":\"174,875,196,901\",\"row\":19,\"col\":\"C\",\"booked\":false},{\"index\":99,\"coords\":\"224,875,246,901\",\"row\":19,\"col\":\"D\",\"booked\":false},{\"index\":100,\"coords\":\"245,875,267,901\",\"row\":19,\"col\":\"E\",\"booked\":false},{\"index\":101,\"coords\":\"265,875,287,901\",\"row\":19,\"col\":\"F\",\"booked\":true},{\"index\":102,\"coords\":\"133,907,155,933\",\"row\":20,\"col\":\"A\",\"booked\":false},{\"index\":102,\"coords\":\"153,907,176,933\",\"row\":20,\"col\":\"B\",\"booked\":false},{\"index\":103,\"coords\":\"174,907,196,933\",\"row\":20,\"col\":\"C\",\"booked\":false},{\"index\":104,\"coords\":\"224,907,246,933\",\"row\":20,\"col\":\"D\",\"booked\":false},{\"index\":105,\"coords\":\"245,907,267,933\",\"row\":20,\"col\":\"E\",\"booked\":false},{\"index\":106,\"coords\":\"265,907,287,933\",\"row\":20,\"col\":\"F\",\"booked\":true},{\"index\":107,\"coords\":\"133,939,155,965\",\"row\":21,\"col\":\"A\",\"booked\":false},{\"index\":108,\"coords\":\"153,939,176,965\",\"row\":21,\"col\":\"B\",\"booked\":false},{\"index\":109,\"coords\":\"174,939,196,965\",\"row\":21,\"col\":\"C\",\"booked\":false},{\"index\":110,\"coords\":\"224,939,246,965\",\"row\":21,\"col\":\"D\",\"booked\":false},{\"index\":111,\"coords\":\"245,939,267,965\",\"row\":21,\"col\":\"E\",\"booked\":false},{\"index\":112,\"coords\":\"265,939,287,965\",\"row\":21,\"col\":\"F\",\"booked\":true},{\"index\":113,\"coords\":\"133,971,155,997\",\"row\":22,\"col\":\"A\",\"booked\":false},{\"index\":114,\"coords\":\"153,971,176,997\",\"row\":22,\"col\":\"B\",\"booked\":false},{\"index\":115,\"coords\":\"174,971,196,997\",\"row\":22,\"col\":\"C\",\"booked\":false},{\"index\":116,\"coords\":\"224,971,246,997\",\"row\":22,\"col\":\"D\",\"booked\":false},{\"index\":117,\"coords\":\"245,971,267,997\",\"row\":22,\"col\":\"E\",\"booked\":false},{\"index\":118,\"coords\":\"265,971,287,997\",\"row\":22,\"col\":\"F\",\"booked\":false},{\"index\":119,\"coords\":\"133,1002,155,1027\",\"row\":23,\"col\":\"A\",\"booked\":true},{\"index\":120,\"coords\":\"153,1002,176,1027\",\"row\":23,\"col\":\"B\",\"booked\":false},{\"index\":121,\"coords\":\"174,1002,196,1027\",\"row\":23,\"col\":\"C\",\"booked\":false},{\"index\":122,\"coords\":\"224,1002,246,1027\",\"row\":23,\"col\":\"D\",\"booked\":false},{\"index\":123,\"coords\":\"245,1002,267,1027\",\"row\":23,\"col\":\"E\",\"booked\":true},{\"index\":124,\"coords\":\"265,1002,287,1027\",\"row\":23,\"col\":\"F\",\"booked\":false},{\"index\":125,\"coords\":\"133,1034,155,1059\",\"row\":24,\"col\":\"A\",\"booked\":true},{\"index\":126,\"coords\":\"153,1034,176,1059\",\"row\":24,\"col\":\"B\",\"booked\":false},{\"index\":127,\"coords\":\"174,1034,196,1059\",\"row\":24,\"col\":\"C\",\"booked\":true},{\"index\":128,\"coords\":\"224,1034,246,1059\",\"row\":24,\"col\":\"D\",\"booked\":false},{\"index\":129,\"coords\":\"245,1034,267,1059\",\"row\":24,\"col\":\"E\",\"booked\":false},{\"index\":130,\"coords\":\"265,1034,287,1059\",\"row\":24,\"col\":\"F\",\"booked\":true},{\"index\":131,\"coords\":\"133,1066,155,1091\",\"row\":25,\"col\":\"A\",\"booked\":false},{\"index\":132,\"coords\":\"153,1066,176,1091\",\"row\":25,\"col\":\"B\",\"booked\":false},{\"index\":133,\"coords\":\"174,1066,196,1091\",\"row\":25,\"col\":\"C\",\"booked\":false},{\"index\":134,\"coords\":\"224,1066,246,1091\",\"row\":25,\"col\":\"D\",\"booked\":false},{\"index\":135,\"coords\":\"245,1066,267,1091\",\"row\":25,\"col\":\"E\",\"booked\":false},{\"index\":136,\"coords\":\"265,1066,287,1091\",\"row\":25,\"col\":\"F\",\"booked\":false},{\"index\":137,\"coords\":\"133,1098,155,1123\",\"row\":26,\"col\":\"A\",\"booked\":false},{\"index\":138,\"coords\":\"153,1098,176,1123\",\"row\":26,\"col\":\"B\",\"booked\":false},{\"index\":139,\"coords\":\"174,1098,196,1123\",\"row\":26,\"col\":\"C\",\"booked\":true},{\"index\":140,\"coords\":\"224,1098,246,1123\",\"row\":26,\"col\":\"D\",\"booked\":false},{\"index\":141,\"coords\":\"245,1098,267,1123\",\"row\":26,\"col\":\"E\",\"booked\":true},{\"index\":142,\"coords\":\"265,1098,287,1123\",\"row\":26,\"col\":\"F\",\"booked\":true},{\"index\":143,\"coords\":\"133,1130,155,1155\",\"row\":27,\"col\":\"A\",\"booked\":false},{\"index\":144,\"coords\":\"153,1130,176,1155\",\"row\":27,\"col\":\"B\",\"booked\":false},{\"index\":145,\"coords\":\"174,1130,196,1155\",\"row\":27,\"col\":\"C\",\"booked\":false},{\"index\":146,\"coords\":\"224,1130,246,1155\",\"row\":27,\"col\":\"D\",\"booked\":false},{\"index\":147,\"coords\":\"245,1130,267,1155\",\"row\":27,\"col\":\"E\",\"booked\":false},{\"index\":148,\"coords\":\"265,1130,287,1155\",\"row\":27,\"col\":\"F\",\"booked\":false},{\"index\":149,\"coords\":\"133,1162,155,1187\",\"row\":28,\"col\":\"A\",\"booked\":true},{\"index\":150,\"coords\":\"153,1162,176,1187\",\"row\":28,\"col\":\"B\",\"booked\":true},{\"index\":151,\"coords\":\"174,1162,196,1187\",\"row\":28,\"col\":\"C\",\"booked\":true},{\"index\":152,\"coords\":\"224,1162,246,1187\",\"row\":28,\"col\":\"D\",\"booked\":true},{\"index\":153,\"coords\":\"245,1162,267,1187\",\"row\":28,\"col\":\"E\",\"booked\":false},{\"index\":154,\"coords\":\"265,1162,287,1187\",\"row\":28,\"col\":\"F\",\"booked\":false},{\"index\":155,\"coords\":\"133,1194,155,1219\",\"row\":29,\"col\":\"A\",\"booked\":true},{\"index\":156,\"coords\":\"153,1194,176,1219\",\"row\":29,\"col\":\"B\",\"booked\":true},{\"index\":157,\"coords\":\"174,1194,196,1219\",\"row\":29,\"col\":\"C\",\"booked\":false},{\"index\":158,\"coords\":\"224,1194,246,1219\",\"row\":29,\"col\":\"D\",\"booked\":false},{\"index\":159,\"coords\":\"245,1194,267,1219\",\"row\":29,\"col\":\"E\",\"booked\":true},{\"index\":160,\"coords\":\"265,1194,287,1219\",\"row\":29,\"col\":\"F\",\"booked\":true},{\"index\":161,\"coords\":\"133,1226,155,1251\",\"row\":30,\"col\":\"A\",\"booked\":false},{\"index\":162,\"coords\":\"153,1226,176,1251\",\"row\":30,\"col\":\"B\",\"booked\":false},{\"index\":163,\"coords\":\"174,1226,196,1251\",\"row\":30,\"col\":\"C\",\"booked\":false},{\"index\":164,\"coords\":\"224,1226,246,1251\",\"row\":30,\"col\":\"D\",\"booked\":false},{\"index\":165,\"coords\":\"245,1226,267,1251\",\"row\":30,\"col\":\"E\",\"booked\":true},{\"index\":166,\"coords\":\"265,1226,287,1251\",\"row\":30,\"col\":\"F\",\"booked\":false},{\"index\":167,\"coords\":\"133,1258,155,1283\",\"row\":31,\"col\":\"A\",\"booked\":false},{\"index\":168,\"coords\":\"154,1258,176,1283\",\"row\":31,\"col\":\"B\",\"booked\":true},{\"index\":169,\"coords\":\"174,1258,196,1283\",\"row\":31,\"col\":\"C\",\"booked\":true},{\"index\":170,\"coords\":\"224,1258,246,1283\",\"row\":31,\"col\":\"D\",\"booked\":true},{\"index\":171,\"coords\":\"245,1258,267,1283\",\"row\":31,\"col\":\"E\",\"booked\":false},{\"index\":172,\"coords\":\"265,1258,287,1283\",\"row\":31,\"col\":\"F\",\"booked\":false}]}");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map