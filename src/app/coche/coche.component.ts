import { Component } from '@angular/core';
// Importar el modelo de Coche
import { Coche } from './coche';
@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html'
})
export class CocheComponent{
  // Definir una propiedad coche
  public coche:Coche;
  // Definir un constructor
  constructor(){
    this.coche = new Coche('',0,'');
  }
  // Definir el metodo onSubmit
  onSubmit(){
    // Para probar mostrar los datos enviados
    console.log(this.coche);
  }
}
