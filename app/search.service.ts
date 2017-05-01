import { Injectable } from '@angular/core';
@Injectable()
export class SearchService {
    private _meaningArray: Array<any> = [];
    constructor() {

    }
    searchEnglish(word: string, _database: any) {
        this._meaningArray = [];

        _database.all("SELECT * FROM 'english'  WHERE word='" + word + "';").then(rows => {

            for (var row in rows) {
                console.log("this one", rows[row][2]);
                this._meaningArray.push({
                    "english": rows[row][1],
                    "sinhala": rows[row][2]
                });
            }

        }, error => {
            console.log("SELECT ERROR", error);
        });
        return this._meaningArray;

    }
}