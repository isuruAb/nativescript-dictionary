"use strict";
var core_1 = require("@angular/core");
var SearchService = (function () {
    function SearchService() {
        this._meaningArray = [];
    }
    SearchService.prototype.searchEnglish = function (word, _database) {
        var _this = this;
        this._meaningArray = [];
        _database.all("SELECT * FROM 'english'  WHERE word='" + word + "';").then(function (rows) {
            for (var row in rows) {
                console.log("this one", rows[row][2]);
                _this._meaningArray.push({
                    "english": rows[row][1],
                    "sinhala": rows[row][2]
                });
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
        return this._meaningArray;
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBRTNDLElBQWEsYUFBYTtJQUV0QjtRQURRLGtCQUFhLEdBQWUsRUFBRSxDQUFDO0lBR3ZDLENBQUM7SUFDRCxxQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLFNBQWM7UUFBMUMsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXhCLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFFMUUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO29CQUNwQixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFCLENBQUMsQ0FBQztZQUNQLENBQUM7UUFFTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUU5QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTs7R0FDQSxhQUFhLENBd0J6QjtBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9tZWFuaW5nQXJyYXk6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbiAgICBzZWFyY2hFbmdsaXNoKHdvcmQ6IHN0cmluZywgX2RhdGFiYXNlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fbWVhbmluZ0FycmF5ID0gW107XG5cbiAgICAgICAgX2RhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gJ2VuZ2xpc2gnICBXSEVSRSB3b3JkPSdcIiArIHdvcmQgKyBcIic7XCIpLnRoZW4ocm93cyA9PiB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHJvdyBpbiByb3dzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIG9uZVwiLCByb3dzW3Jvd11bMl0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lYW5pbmdBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbmdsaXNoXCI6IHJvd3Nbcm93XVsxXSxcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5oYWxhXCI6IHJvd3Nbcm93XVsyXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZWFuaW5nQXJyYXk7XG5cbiAgICB9XG59Il19