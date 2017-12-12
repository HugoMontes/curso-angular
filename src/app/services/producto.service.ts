import {Injectable} from '@angular/core';

@Injectable()
export class ProductoService{

  public nombre_producto='Mesa';

  // Crear el metodo prueba()
  prueba(){
    return this.nombre_producto;
  }

  pruebaSetNombre(nombre_producto){
    this.nombre_producto=nombre_producto;
    return this.nombre_producto;
  }
}
