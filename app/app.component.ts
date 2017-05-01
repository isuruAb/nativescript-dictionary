import { Component } from "@angular/core";
import { SearchService } from "./search.service"
var Sqlite = require("nativescript-sqlite");

import { Http } from '@angular/http';

@Component({
  selector: "my-app",
  providers: [SearchService],

  templateUrl: 'app.component.html',
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  // Your TypeScript logic goes here
  wordSnippet: string = '';
  resultList: Array<any>
  private _database: any;

  public _meaningArray: Array<any> = [];
  constructor(private _http: Http, private _searchService: SearchService) {

    /*DB CODE START*/
    if (!Sqlite.exists("words.sqlite")) {
      console.log("db does not exists");
      Sqlite.copyDatabase("words.sqlite");
    }

    (new Sqlite("words.sqlite")).then(db => {
      db.execSQL("CREATE TABLE IF NOT EXISTS english (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT, sinhala TEXT)").then(id => {
        this._database = db;
      }, error => {
        console.log("CREATE TABLE ERROR", error);
      });
    }, error => {
      console.log("OPEN DB ERROR", error);
    });
    /*DB CODE ENDS*/

  }


  search() {
    console.log("this.wordSnippet",this.wordSnippet);
    this._meaningArray=this._searchService.searchEnglish(this.wordSnippet,this._database);
    // alert("this is the word you searched "+this.wordSnippet);
  }
}
