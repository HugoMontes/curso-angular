import { Component } from '@angular/core';
@Component({
  selector: 'persona-tag',
  templateUrl: './persona.component.html',
})
export class PersonaComponent {
  // Por convencion las propiedades se las inicializan en el constructor
  // Declarar las propiedades/atributos de la clase
  public titulo = 'Componente de Persona';
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

  // Constructor: Se lo usan para inicializar las propiedades
  // Se ejecuta una sola vez al instanciar un objeto
  // Definir un constructor
  constructor(){
    // Inicializar propiedades
    this.titulo='Componente de Persona';
    this.nombre='Ana Gonzales';
    this.edad=10;
    this.mayorEdad=false;
    this.comodin=100;
    this.profesiones=['Carpintero','Pintor','Fontanero'];
    this.miarray=['Azul',12,true];
    // Mostrar el contenido de una propiedad
    console.log(this.nombre);
  }
}
