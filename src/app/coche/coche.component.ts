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
  // Definir un array de objetos coche
  public coches:Array<Coche>;

  // Definir un constructor
  constructor(){
    this.coche = new Coche('',0,'');
    // Inicializar el array de coches
    this.coches=[
      new Coche('Totoya',25000,'#000'),
      new Coche('Subaru',15000,'#00f'),
      new Coche('BMW',28000,'#f00')
    ];
  }
  // Definir el metodo onSubmit
  onSubmit(){
    // Para probar mostrar los datos enviados
    console.log(this.coche);
    // Adicionar el objeto a al colleccion
    this.coches.push(this.coche);
    // Limpiar el formulario
    this.coche = new Coche('',0,'');
  }
}
