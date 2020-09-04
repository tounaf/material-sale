import { Car } from '../model/Car';
export class Cars {
    static cars: Car[] = []
    static listCars(): Car[] {
        for (let i = 0; i < 10; i++) {
            this.cars.push({id: i, numero: '123'+i}) 
        }
        return this.cars;
    }
}

