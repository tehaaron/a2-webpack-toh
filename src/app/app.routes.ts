import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

// TOH imports
import { DashboardComponent } from './dashboard';
import { HeroesComponent } from './heroes';
import { HeroDetailComponent } from './hero-detail';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '**',    component: NoContent },
];

// from TOH
export const routedComponents = [
  Home,
  About,
  NoContent,
  DashboardComponent,
  HeroesComponent,
  HeroDetailComponent
];
