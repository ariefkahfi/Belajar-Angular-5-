import {Directive , ViewContainerRef} from "@angular/core";


@Directive({
    selector : '[my-directive]'
})
export class MyDirective{
    constructor(public viewContainerRef : ViewContainerRef){}
}