import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Input } from '@angular/core';
>>>>>>> b1

@Component({
  moduleId: module.id,
  selector: 'curso',
  template: '{{ nomeCurso }}'
<<<<<<< HEAD
=======
  //inputs: ['nomeCurso:nome']
>>>>>>> b1
})

export class InputPropertyComponent {

<<<<<<< HEAD
=======
  @Input('nome') 
>>>>>>> b1
  nomeCurso : string = '';

  construtor() { }


}
