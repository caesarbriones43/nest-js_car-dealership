import { Car } from '../cars/interfaces/car.interface';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dto';

import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car whit id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      // id: uuid(),
      // brand: createCarDto.brand,
      // model: createCarDto.model,
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(
        `Card ${updateCarDto.id} is not a valid inside body.`,
      );
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    const car = this.findById(id);

    this.cars = this.cars.filter((car) => car.id != id);
  }
}
