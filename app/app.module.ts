import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { MyFirstModule }     from './first/my-first.module';
import { CursosModule }      from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { LifeCycleModule }   from './cycle/life-cycle.module';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  CursosModule,
                  MyFirstModule,
                  DataBindingModule,
                  LifeCycleModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
