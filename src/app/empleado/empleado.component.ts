// Importar Component del paquete @angular/core
import { Component } from '@angular/core';
// Importar la clase del modelo de Empleado
import { Empleado } from './empleado';
// Adicionar el decorador @Component
@Component({
  // Indicar la etiqueta donde cargar el componente
  selector: 'empleado-tag',
  // Definir una plantilla
  templateUrl: './empleado.component.html',
})
// Crear la clase EmpleadoComponent
export class EmpleadoComponent {
  // Definir la propiedad titulo como publica
  public titulo = 'Componente de Empleado';
  // Declarar una propiedad de tipo Empleado
  public empleado:Empleado;
  // Declarar una propiedad de tipo Array
  public trabajadores:Array<Empleado>;
  // Declarar una propiedad de tipo boolean
  public show_estrella:boolean;

  // Definir un constructor
  constructor(){
    // Instanciar un Empleado
    this.empleado = new Empleado('Juan Perez', 33, 'Cocinero', true);
    // Inicializar el array de trabajadores
    this.trabajadores=[
      new Empleado('Marcos Flores', 45, 'Cajero', true),
      new Empleado('Ana Lopez', 25, 'Secretaria', true),
      new Empleado('Ivan Robles', 30, 'Programador', false)
    ];
    // Inicializar en false
    this.show_estrella=false;
  }
  // Definir el metodo inicial
  ngOnInit(){
    // Mostrar por consola el empleado
    console.log(this.empleado);
    // Mostrar por consola el array de empleados
    console.log(this.trabajadores);
  }
  // Definir una funcion que cambia el estado de show_estrella
  cambiarEstado(valor){
    this.show_estrella=valor;
  }
}
