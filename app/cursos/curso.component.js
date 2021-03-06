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
var CursoComponent = (function () {
    function CursoComponent() {
        this.nome = 'aldo.traning';
    }
    CursoComponent.prototype.construtor = function (cursosService) {
        this.cursos = cursosService.getCursos();
    };
    CursoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'curso-lista',
            templateUrl: 'curso.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CursoComponent);
    return CursoComponent;
}());
exports.CursoComponent = CursoComponent;
//# sourceMappingURL=curso.component.js.map