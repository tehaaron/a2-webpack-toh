import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';
import { HomeComponent } from "./home/home.component";
import { JobsComponent } from "./jobs/jobs.component";


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'jobs', component: JobsComponent},
  { path: '**',    component: NoContent },
];

// from TOH
export const routedComponents = [
  NoContent
];
