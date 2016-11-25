import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursoComponent } from './curso.component';


@NgModule({
  imports     : [ CommonModule ],
  declarations: [ CursoComponent ],
  exports     : [ CursoComponent ],
  providers   : [ CursosService ]
})
export class CursosModule { }
