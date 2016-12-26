import { Component, 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, 
  Input, ViewChild } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'lifecycle',
  template: `            
  <p #variavelLocalP >{{ valorInicial }}</p>
  <p>{{ variavelLocalP.textContent }}</p>
` ,
})

export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  
  constructor() { }
  
  @Input()
  valorInicial : number = 10;
  
  @ViewChild('variavelLocalP')
  variavelLocalP : HTMLElement;
  
  ngOnInit() 
  { 
    this.log('ngOnInit');
    console.log(this.variavelLocalP);  
  }
  
  ngAfterContentChecked()
  {
    this.log('ngAfterContentChecked');
    console.log(this.variavelLocalP);
  }
  
  ngAfterContentInit()
  {
    this.log('ngAfterContentInit');    
  }
  
  ngAfterViewInit()
  {
    this.log('ngAfterViewInit');
  }

  ngDoCheck()
  {
    this.log('ngDoCheck');
  }

  ngOnChanges()
  {
    this.log('ngOnChanges');
  }

  ngAfterViewChecked()
  {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy()
  {
    this.log('ngOnDestroy');
  }
  
  private log(hook: String)
  {
    console.log(hook)
  }
  
  
  
  
}