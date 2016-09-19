import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';


import { DataResolver } from './app.resolver';
import {HomeComponent} from "./home/home.component";


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: '**',    component: NoContent },
];

// from TOH
export const routedComponents = [
  NoContent
];
