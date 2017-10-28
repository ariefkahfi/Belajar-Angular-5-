import {Component} from "@angular/core";
import { ComponentProps } from "../model/componentsSetup";

@Component({
    selector : 'child2',
    template : `
        <div>
            <h3>Component Child2</h3>
            <span>{{data}}</span>
        </div>
    `
})
export class Child2Component implements ComponentProps {
    data: any;
}