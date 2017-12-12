import { Component } from '@angular/core';
// Importar los modulos Router, ActivatedRoute y Params
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
})
export class ContactoComponent{

  public titulo='Pagina de Contacto';
  // Adicionar un atributo con el nombre de parametro
  public parametro;
  // Definir un constructor para iniciar los objetos de servicio
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit(){
    // Recuperar los parametros con una funcion de callback forEach
    // Una funcion flecha (=>) es similiar a una funcion anonima el cual
    // permite acceder a los atributos de una clase fuera
    // del ambito.
    this._route.params.forEach((params: Params) => {
      console.log(params);
      this.parametro=params['nombre'];
    });
  }
  // Crear el metodo redirigir
  redirigir(){
    this._router.navigate(['/contacto','Juan Perez']);
  }
  // Crear el metodo redirigir2
  redirigir2(){
    this._router.navigate(['/pagina-principal']);
  }
}
