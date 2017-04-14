import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    dataArray: string[] = ['adsfasd','dfadsfads','dafdsf'];

    insertData(data: string){
        this.dataArray.unshift(data);
    }
}
