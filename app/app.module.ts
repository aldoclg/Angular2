import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { MyFirstComponent } from './first/my-first.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  imports:      [ BrowserModule, CursosModule ],
  declarations: [ AppComponent, MyFirstComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
