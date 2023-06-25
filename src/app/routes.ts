import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SelectButtonComponent } from "./components/select-button/select-button.component";
import { DataTableComponent } from "./components/data-table/data-table.component";

export const routes: Routes = [
    {path: "home", component: HomeComponent, title: 'Home'},
    {path: "select-button", component: SelectButtonComponent, title: 'Select Button'},
    {path: "data-table", component: DataTableComponent, title: 'Data Table'}
  ]