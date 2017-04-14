import {Component} from '@angular/core';
import {SharedService} from './shared.service'

@Component({
    selector: 'child-sibling-component',
    template: `
        <h1>I am a child sibling</h1>
        <input type="text" [(ngModel)]="data"/>
        <button (click)="addData()"></button>
    `
})
export class ChildSiblingComponent{
    data: string = 'Testing data';
    constructor(
        private _sharedService: SharedService){}
    addData(){
        this._sharedService.insertData(this.data);
        this.data = '';
    }
}