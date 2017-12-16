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
  // Definir un metodo de prueba
  getPrueba(){
    return 'Hola mundo desde PeticionService';
  }
}
