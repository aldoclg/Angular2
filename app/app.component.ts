import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <exemplo-data-binding></exemplo-data-binding>
        <br>
        <lifecycle [valorInicial]="valorInicial" *ngIf="!deleteContent"></lifecycle>
        <button (click)="valorInicial = 20" >Mudar Valor</button>
        <button (click)="deleteContent = true" >Deletar conteudo</button>
    `
})



export class AppComponent { 
  
  valorInicial = 15;
  
  deleteContent = false;
  
}