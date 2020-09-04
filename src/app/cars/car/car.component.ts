import { Component, OnInit } from '@angular/core';
import { Cars } from '../../mocks/Cars';
import{ Car } from '../../model/Car';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  constructor() { }

  ngOnInit(): void {
    alert('hello');
    this.getListCar();
  }

  getListCar() {
    console.log("cars cars",this.cars);
    this.cars = Cars.listCars();
  }
}
