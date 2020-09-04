import { Routes } from '@angular/router';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDetailComponent } from './car-detail/car-detail.component';


export const CarRoutes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '/edit/:id',
    component: CarEditComponent,
  }, {
    path: '/view/:id',
    component: CarDetailComponent,
  }
];