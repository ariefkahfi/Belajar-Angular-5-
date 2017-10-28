import { Component, ComponentFactoryResolver  , ViewChild } from '@angular/core';

import {Child1Component} from "./child1-component/child1.component";
import {Child2Component} from "./child2-component/child2.component";

import {MyDirective} from "./directives-components/myDirective.directive";
import { ComponentProps } from './model/componentsSetup';

@Component({
  selector: 'app-root',
  template : `
    <div>
      <h3>{{title}}</h3>
      

      <button (click) = "componentChild1()" >Component Child1</button>
      <button (click) = "componentChild2()" >Component Child2</button>

      <ng-template my-directive></ng-template>
    </div>
    `
})
export class AppComponent {
  title = 'Belajar Dynamic component';
  
  data = "";

  set setData(value : string) {
    this.data=value;
  }
  get setData(){
    return this.data;
  }

  @ViewChild(MyDirective)
  myDirective : MyDirective;

  constructor(private componentFactoryResolver : ComponentFactoryResolver){}


  componentChild2(){
    this.data = "Child 2 Component here";
    this.setUpComponent(Child2Component);
  }

  setUpComponent(component : any){
    let componentFactory = 
      this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = 
      this.myDirective.viewContainerRef;

    
    viewContainerRef.clear();


    let currentComponent  = viewContainerRef.createComponent(componentFactory);
    let data = (<ComponentProps>currentComponent.instance).data = this.data; 
  }

  componentChild1() {
      this.data = "Child 1 Component here";
      this.setUpComponent(Child1Component);
  }
}
