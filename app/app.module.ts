import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from './app.routing';
import { SearchComponent } from './search-component/search.component';

@NgModule({

  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
   NativeScriptHttpModule,
   NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, SearchComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
