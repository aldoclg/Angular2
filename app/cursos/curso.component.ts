import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'curso-lista',
  templateUrl: 'curso.component.html'
})

export class CursoComponent {

  nome = 'aldo.traning';

  cursos;

  construtor(cursosService : CursosService) {
    this.cursos = cursosService.getCursos();
  }

}
