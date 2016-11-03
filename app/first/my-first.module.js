"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var my_first_component_1 = require('./my-first.component');
var MyFirstModule = (function () {
    function MyFirstModule() {
    }
    MyFirstModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [my_first_component_1.MyFirstComponent],
            exports: [my_first_component_1.MyFirstComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyFirstModule);
    return MyFirstModule;
}());
exports.MyFirstModule = MyFirstModule;
//# sourceMappingURL=my-first.module.js.map