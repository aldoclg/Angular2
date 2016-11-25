import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    template: `
        <div>
            <button type="button" class="btn btn-primary" (click)="addOp(-1)">-</button>
            <input type="text" [value]="valor" >
            <button type="button" class="btn btn-primary" (click)="addOp(1)">+</button>
        </div>
    `
})
export class OutputPropertyComponent {

    @Input()
    valor : number = 0;

    constructor() { }

    addOp(value) {       
        this.valor = this.valor + value;      
    }
    
}
