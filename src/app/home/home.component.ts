import { Component } from '@angular/core';
// Importar el servicio
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // Adicionar la propiedad providers que mediante la
  // inyeccion de depencias genera instancias de los servicios
  providers: [ProductoService],
})
export class HomeComponent{

  public titulo='Pagina Principal';

  // Crear una propiedad en el constructor para poder usar el servicio
  constructor(
    private _productoService: ProductoService
  ){}

  ngOnInit(){
    // Llamar a las funciones de prueba del servicio
    console.log(this._productoService.prueba());
    console.log(this._productoService.pruebaSetNombre('Refrigerador'));
  }
}
