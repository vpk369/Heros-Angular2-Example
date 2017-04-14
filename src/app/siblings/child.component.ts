import {Component, OnInit} from '@angular/core';
import {SharedService} from './shared.service'

@Component({
    selector: 'child-component',
    template: `
        <h1>I am a child</h1>
        <div>
            <ul *ngFor="let data of datas">
                <li>{{data}}</li>
            </ul>
        </div>
    `
})
export class ChildComponent implements OnInit{
    datas: string[] = [];
    constructor(private _sharedService: SharedService) { }
    ngOnInit() {
        this.datas = this._sharedService.dataArray;
    }
}