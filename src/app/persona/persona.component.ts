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

  // Constructor: Se lo usan para inicializar las propiedades y se
  // ejecuta una sola vez al instanciar un objeto
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
    // Se puede ejecutar metodos dentro del constructor, aun que
    // una buena practica es ejecutar las funciones en el metodo ngOnInit
  }

  // ngOnInit: Esta funcion se ejecuta inmediatamente despues de
  // ejecutar el constructor y esta encargada de ejecutar cualquier funcion
  // Ej: Llamar servicios, ejecutar funciones ajax
  ngOnInit(){
    // Llamar a una funcion
    this.holaMundo();
    // Llamar a una funcion con parametros
    this.hola('Ariel');
    // Llamar a una funcion que cambia valor de propiedad
    this.cambiarEdad(55);
    // Variables y alcances
    var x=8;
    var y=15;
    if(x===8){
      // Alcance de un let es unicamente dentro del bloque if
      let x=3;
      var y=88;
      console.log('DENTRO DE IF: '+x+'-'+y);
    }
    console.log('FUERA DE IF: '+x+'-'+y);
  }

  // Definir una funcion
  holaMundo(){
    alert('Hola Mundo!');
  }
  // Definir una funcion con parametros
  hola(nombre){
    alert('Hola '+nombre);
  }
  // Definir una funcion que cambia valor de propiedad
  cambiarEdad(edad){
    this.edad=edad;
  }
}
