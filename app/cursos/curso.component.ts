import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

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
