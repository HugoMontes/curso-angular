import { Component } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
})
export class PlantillaComponent{
  // Definir las propiedades/atributos
  public titulo;
  public administrador;
  // Definir el constructor
  constructor(){
      this.titulo='Componente NgTemplate';
      this.administrador=true;
  }
  // Definir metodo para cambiar de estado
  cambiar(){
    this.administrador=!this.administrador;
  }
}
