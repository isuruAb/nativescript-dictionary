"use strict";
var core_1 = require("@angular/core");
var search_service_1 = require("./search.service");
var Sqlite = require("nativescript-sqlite");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(_http, _searchService) {
        var _this = this;
        this._http = _http;
        this._searchService = _searchService;
        // Your TypeScript logic goes here
        this.wordSnippet = '';
        this._meaningArray = [];
        /*DB CODE START*/
        if (!Sqlite.exists("words.sqlite")) {
            console.log("db does not exists");
            Sqlite.copyDatabase("words.sqlite");
        }
        (new Sqlite("words.sqlite")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS english (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT, sinhala TEXT)").then(function (id) {
                _this._database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
        /*DB CODE ENDS*/
    }
    AppComponent.prototype.search = function () {
        console.log("this.wordSnippet", this.wordSnippet);
        this._meaningArray = this._searchService.searchEnglish(this.wordSnippet, this._database);
        // alert("this is the word you searched "+this.wordSnippet);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [search_service_1.SearchService],
        templateUrl: 'app.component.html',
        styleUrls: ["app.component.css"],
    }),
    __metadata("design:paramtypes", [http_1.Http, search_service_1.SearchService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxtREFBZ0Q7QUFDaEQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFNUMsc0NBQXFDO0FBU3JDLElBQWEsWUFBWTtJQU92QixzQkFBb0IsS0FBVyxFQUFVLGNBQTZCO1FBQXRFLGlCQW1CQztRQW5CbUIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBTnRFLGtDQUFrQztRQUNsQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUlsQixrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQUdwQyxpQkFBaUI7UUFDakIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDbEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxvR0FBb0csQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQ3RILEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILGdCQUFnQjtJQUVsQixDQUFDO0lBR0QsNkJBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEYsNERBQTREO0lBQzlELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksWUFBWTtJQVB4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUUxQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ2pDLENBQUM7cUNBUTJCLFdBQUksRUFBMEIsOEJBQWE7R0FQM0QsWUFBWSxDQWtDeEI7QUFsQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCJcbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcblxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1NlYXJjaFNlcnZpY2VdLFxuXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXCJhcHAuY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICB3b3JkU25pcHBldDogc3RyaW5nID0gJyc7XG4gIHJlc3VsdExpc3Q6IEFycmF5PGFueT5cbiAgcHJpdmF0ZSBfZGF0YWJhc2U6IGFueTtcblxuICBwdWJsaWMgX21lYW5pbmdBcnJheTogQXJyYXk8YW55PiA9IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlKSB7XG5cbiAgICAvKkRCIENPREUgU1RBUlQqL1xuICAgIGlmICghU3FsaXRlLmV4aXN0cyhcIndvcmRzLnNxbGl0ZVwiKSkge1xuICAgICAgY29uc29sZS5sb2coXCJkYiBkb2VzIG5vdCBleGlzdHNcIik7XG4gICAgICBTcWxpdGUuY29weURhdGFiYXNlKFwid29yZHMuc3FsaXRlXCIpO1xuICAgIH1cblxuICAgIChuZXcgU3FsaXRlKFwid29yZHMuc3FsaXRlXCIpKS50aGVuKGRiID0+IHtcbiAgICAgIGRiLmV4ZWNTUUwoXCJDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBlbmdsaXNoIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIHdvcmQgVEVYVCwgc2luaGFsYSBURVhUKVwiKS50aGVuKGlkID0+IHtcbiAgICAgICAgdGhpcy5fZGF0YWJhc2UgPSBkYjtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJPUEVOIERCIEVSUk9SXCIsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvKkRCIENPREUgRU5EUyovXG5cbiAgfVxuXG5cbiAgc2VhcmNoKCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy53b3JkU25pcHBldFwiLHRoaXMud29yZFNuaXBwZXQpO1xuICAgIHRoaXMuX21lYW5pbmdBcnJheT10aGlzLl9zZWFyY2hTZXJ2aWNlLnNlYXJjaEVuZ2xpc2godGhpcy53b3JkU25pcHBldCx0aGlzLl9kYXRhYmFzZSk7XG4gICAgLy8gYWxlcnQoXCJ0aGlzIGlzIHRoZSB3b3JkIHlvdSBzZWFyY2hlZCBcIit0aGlzLndvcmRTbmlwcGV0KTtcbiAgfVxufVxuIl19