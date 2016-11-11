import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { DataBindingComponent }   from './data-binding.component';
import { InputpropertyComponent } from './input-property.component'

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ DataBindingComponent, InputPropertyComponent ],
  exports: [ DataBindingComponent, InputPropertyComponent ]

  })
export class DataBindingModule { }
