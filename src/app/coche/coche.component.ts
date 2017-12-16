import { Component } from '@angular/core';
// Importar el modelo de Coche
import { Coche } from './coche';
// Importar el servicio PeticionService
import {PeticionService} from '../services/peticion.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  // Cargar el servicio el los providers del componente
  providers: [PeticionService]
})
export class CocheComponent{
  // Definir una propiedad coche
  public coche:Coche;
  // Definir un array de objetos coche
  public coches:Array<Coche>;

  // Definir un constructor
  constructor(
    // Definir una propiedad/atributo privado
    private _peticionService:PeticionService
  ){
    this.coche = new Coche('',0,'');
    // Inicializar el array de coches
    this.coches=[
      new Coche('Totoya',25000,'#000'),
      new Coche('Subaru',15000,'#00f'),
      new Coche('BMW',28000,'#f00')
    ];
  }

  // Definir el metodo ngOnInit
  ngOnInit(){
    // Mostrar el mensaje devuelto por el servicio
    console.log(this._peticionService.getPrueba());
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
