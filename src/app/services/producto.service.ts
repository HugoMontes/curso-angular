import {Injectable} from '@angular/core';

@Injectable()
export class ProductoService{
  // Definir un atributo tipo string
  public nombre_producto='Mesa';
  // Definir un atributyo tipo array
  public coleccion_producto=['Televisor','Microondas'];
  // Crear el metodo prueba()
  prueba(){
    return this.nombre_producto;
  }
  // Se define el metodo que recibe como argumento un nombre de producto y devuelve dicho nombre
  // Es opcional indicar el tipo de argumentos y el tipo de retorno, simplemente puede ser:
  // pruebaSetNombre(nombre_producto){...}
  pruebaSetNombre(nombre_producto:string):string{
    this.nombre_producto=nombre_producto;
    return this.nombre_producto;
  }
  // Definir metodo para adicionar un elemento que devuelva el array de productos
  addProducto(nombre_producto:string):Array<string>{
    this.coleccion_producto.push(nombre_producto);
    return this.getProducto();
  }
  // Definir metodo que retorna la coleccion
  getProducto():Array<string>{
    return this.coleccion_producto;
  }
  // Definir metodo para eliminar un producto de la coleccion
  deleteProducto(index:number){
    // Metodo splice(indice, nro_elem_a_borrar)
    this.coleccion_producto.splice(index, 1);
    return this.getProducto();
  }
}
