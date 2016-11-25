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
var core_2 = require('@angular/core');
var OutputPropertyComponent = (function () {
    function OutputPropertyComponent() {
        this.valor = 0;
    }
    OutputPropertyComponent.prototype.addOp = function (value) {
        this.valor = this.valor + value;
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Number)
    ], OutputPropertyComponent.prototype, "valor", void 0);
    OutputPropertyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contador',
            template: "\n        <div>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addOp(-1)\">-</button>\n            <input type=\"text\" [value]=\"valor\" >\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addOp(1)\">+</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], OutputPropertyComponent);
    return OutputPropertyComponent;
}());
exports.OutputPropertyComponent = OutputPropertyComponent;
//# sourceMappingURL=output-property.component.js.map