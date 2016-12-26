import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LifeCycleComponent } from './life-cycle.components';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ LifeCycleComponent ],
  exports: [ LifeCycleComponent ]
})
  

export class LifeCycleModule { }