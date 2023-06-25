import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-components';
  routes: Routes = routes;
}
