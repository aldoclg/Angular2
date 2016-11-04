import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-binding',
  templateUrl: 'data-binding.component.html'
})

export class DataBindingComponent {
  construtor() { }

  url = 'https://github.com/aldoclg/Angular2';
  urlImg = 'http://lorempixel.com/400/200/nature/';

  getValor() {
    return 1;
  }

}
