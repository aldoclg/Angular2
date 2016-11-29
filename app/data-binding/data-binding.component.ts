import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css']
})

export class DataBindingComponent {
  construtor() { }

  url = 'https://github.com/aldoclg/Angular2';
  urlImg = 'http://lorempixel.com/400/200/nature/';

  conteudoaAtual : string = '';
  conteudoaSalvo : string = '';

  isMouseOver : boolean = false;

  nome : string = 'abc';

  pessoa = {nome: '', idade: 18};

  nomeCurso : string = 'Curso Angular 2';

  valorInicial : number = 1;

  getValor() {
    return 1;
  }

  onClick() {
    alert('Botão clicado!');
  }

/*  onKeyup(event:KeyboardEvent) {
    console.log(event);
    this.conteudoAtual = (<HtmlInputElement>event.target).value;
  }

  onSave(valor : string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }*/

}
