import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarRoutes } from './car.routing';



@NgModule({
  declarations: [
    CarComponent,
    CarDetailComponent,
    CarEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CarRoutes)
  ]
})
export class CarModule { }
