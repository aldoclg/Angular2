import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'curso',
  template: '{{ nomeCurso }}'
})

export class InputPropertyComponent {

  nomeCurso : string = '';

  construtor() { }


}
