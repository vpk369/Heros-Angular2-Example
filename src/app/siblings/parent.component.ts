import {Component, ViewChild} from '@angular/core';
import {SharedService} from './shared.service';
import {ChildComponent} from './child.component';
import {ChildSiblingComponent} from './child-sibling.component';
@Component({
    selector: 'parent-component',
    template: `
        <h1>Parent</h1>
        <div>
            <child-component></child-component>
            <child-sibling-component></child-sibling-component>
        </div>
    `,
    providers: [SharedService],
    //directives: [ChildComponent, ChildSiblingComponent]
})
export class ParentComponent{
      //@ViewChild(ChildComponent) childComponent: ChildComponent
       //@ViewChild(ChildSiblingComponent) childSiblingComponent: ChildSiblingComponent

}