// Importar el modulo inyectable para permitir la inyeccion de dependencias y el decorador inyectable
import {Injectable} from '@angular/core';
// Importar los modulos HTTP
import {Http, Response, Headers} from '@angular/http';
// Importar libreria para mapear respuestas HTTP
import 'rxjs/add/operator/map';
// Importar el modulo Observable que permite usar rxjs
import {Observable} from 'rxjs/Observable';
// Definir la clase para el servicio
@Injectable()
export class PeticionService{

  // Definir una propiedad de tipo string que contendra la url
  public url:string;
	// Definir en el constructor la propiedad http
  constructor(private _http:Http){
    // Inicializar la propiedad con la url de prueba
    this.url='https://jsonplaceholder.typicode.com/posts';
  }

  // Definir un metodo de prueba
  getPrueba(){
    return 'Hola mundo desde PeticionService';
  }

  // Definir un metodo para realizar una peticion HTTP por GET
  getArticulos(){
    // Para hacer una peticion HTTP devolver la respuesta del metodo get
    // Para capturar y recoger la respuesta ejecutar el metodo map
    // Con una funcion flecha convertir la respuesta a objeto json
    return this._http.get(this.url).map(res => res.json());
  }

}
