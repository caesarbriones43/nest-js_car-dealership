import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})

//Modulo root/principal => referencia a todo lo que es la aplicacion
export class AppModule {}
