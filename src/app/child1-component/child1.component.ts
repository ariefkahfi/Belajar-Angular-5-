import {Component} from "@angular/core";
import { ComponentProps } from "../model/componentsSetup";

@Component({
    selector : 'child1',
    template : `
        <div>  
            <h3>Child 1 Component</h3>
            <input [value] = "data" (input) = "data=$event.target.value"/>
            <span >{{data}}</span>
        </div>
    `
})
export class Child1Component implements ComponentProps{
    data: any;

}