import { Component } from '@angular/core';
@Component({
  selector: 'variable-tag',
  templateUrl: './variable.component.html',
})
export class VariableComponent {
  // Declarar las propiedades/atributos de la clase
  public titulo = 'Componente de Variable';
  // Declarar un atributo de tipo string
  public nombre:string = 'Juan Perez';
  // Muestra error si no es del tipo correcto
  // public nombre:string = 10;
  // Declarar un atributo de tipo number
  public edad:number = 20;
  // Declarar un atributo de tipo boolean
  public mayorEdad:boolean = true;
  // Declarar un atributo que contiene cualquier dato
  public comodin:any = 'Azul'; // 12, true
  // Declarar un atributo de tipo array que contiene cadenas
  public profesiones:Array<string> = ['Carpintero','Pintor','Fontanero'];
  // Declarar un atributo de tipo array que contiene cualquier dato
  public miarray:Array<any> = ['Azul',12,true];
}
