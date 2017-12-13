import { Component } from '@angular/core';
// Importar el servicio
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // Adicionar la propiedad providers que mediante la
  // inyeccion de depencias genera instancias de los servicios
  providers: [ProductoService]
})
export class HomeComponent{

  public titulo='Pagina Principal';
  // Adicionar atributo listado de productos
  public listado_productos:Array<string>;
  // Adicionar atributo de producto a guardar
  public producto_nuevo:string;

  // Crear una propiedad en el constructor para poder usar el servicio
  constructor(
    private _productoService: ProductoService
  ){}
  // Funcion inicial
  ngOnInit(){
    // Llamar a las funciones de prueba del servicio
    // console.log(this._productoService.prueba());
    // console.log(this._productoService.pruebaSetNombre('Refrigerador'));
    // Cargar el listado mediante el servicios
    this.listado_productos=this._productoService.getProducto();
    console.log(this.listado_productos);
  }
  // Definir metodo guardar producto
  guardarProducto(){
    // Adicionar nuevo producto mediante el servicio
    this._productoService.addProducto(this.producto_nuevo);
    // Limpiar campo de texto
    this.producto_nuevo=null;
  }
  // Definir el metodo eliminar producto
  eliminarProducto(index:number){
    // alert(index);
    if(confirm('Esta seguro de eliminar el producto?')){
      // Eliminar producto mediante el servicio
      this._productoService.deleteProducto(index);
    }
  }
}
