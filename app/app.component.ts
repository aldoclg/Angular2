import { Component } from '@angular/core';

import { MyFirstComponent } from './first/my-first.component';

import { CursoComponent } from './cursos/curso.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <my-first-component></my-first-component>
        <curso-lista></curso-lista>
    `,
    directives: [MyFirstComponent, CursoComponent]
})
export class AppComponent { }
