import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})

//Modulo root/principal => referencia a todo lo que es la aplicacion
export class AppModule {}
