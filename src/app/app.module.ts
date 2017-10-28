import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Child1Component} from "./child1-component/child1.component";
import {Child2Component} from "./child2-component/child2.component";
import { AppComponent } from './app.component';
import {MyDirective} from "./directives-components/myDirective.directive";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    MyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [
    Child1Component, Child2Component
  ]
})
export class AppModule { }
