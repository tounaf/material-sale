import { Routes } from '@angular/router';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarComponent } from './car/car.component';


export const CarRoutes: Routes =[
  {
    path: '',
    component: CarComponent,
    pathMatch: 'full',
  }, {
    path: '/edit/:id',
    component: CarEditComponent,
  }, {
    path: '/view/:id',
    component: CarDetailComponent,
  }
];