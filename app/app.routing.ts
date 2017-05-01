import { SearchComponent } from './search-component/search.component';
import { SettingsComponent } from './settings-component/settings.component';

export const routes = [
  { path: "", component: SearchComponent },
/*  { path: "/settings", component: SettingsComponent }
*/];

export const navigatableComponents = [
  SearchComponent,
  SettingsComponent
];
