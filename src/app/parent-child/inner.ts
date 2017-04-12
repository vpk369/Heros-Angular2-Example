import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
	selector: 'inner-component-db',

	//directives: [FORM_DIRECTIVES],
	template: `
	    <h3>This is nested inner</h3>
	    <input type="text" #myInput [value]="hisValue" (keyup)="onHisValueChang(myInput)" />
	    <p>Input value is : {{hisValue}}</p>
	    `
})
export class InnerComponentDataBinding {
	@Input() hisValue:any;
	@Output() hisValueChange = new EventEmitter();
	onHisValueChang(element: HTMLInputElement){
		this.hisValue = element.value;
		this.hisValueChange.next(this.hisValue)
	}
}