import { Component } from '@angular/core';
import { SearchService } from "../search.service";
import { Http } from '@angular/http';
var Sqlite = require("nativescript-sqlite");
import { Router } from "@angular/router";

@Component({
    templateUrl:'search.compnent.html',
    styleUrls:["search.component.css"]
})
export class SearchComponent{
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