import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
 
import {InnerComponentDataBinding} from './inner';
 
@Component({
	selector: 'outer-component-db-2',
	//directives: ['FormsModule'', InnerComponentDataBinding],
	template: `
		<h2>Nested Components two way</h2>
	    <h3>This is nested outer</h3>
	    <input type="text" #myInput [(ngModel)]="myValue" />
	    <p>Input value is : {{myValue}}</p>
	    <inner-component-db [(hisValue)]="myValue"></inner-component-db>
	    `
})
export class OuterComponentDataBinding2 {
	myValue = "Paul Shan";
	onHisValueChange(val: string){
		this.myValue = val;
	}
}