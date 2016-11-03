import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstComponent } from './my-first.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ MyFirstComponent ],
  exports: [ MyFirstComponent ]
})
export class MyFirstModule { }
