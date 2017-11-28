// Importar Component del paquete @angular/core
import { Component } from '@angular/core';
// Adicionar el decorador @Component
@Component({
  // Indicar la etiqueta donde cargar el componente
  selector: 'empleado-tag',
  // Definir una plantilla
  templateUrl: './empleado.component.html',
})
// Crear la clase EmpleadoComponent
export class EmpleadoComponent {
  // Especificar las propiedades del componente
  public titulo = 'Componente de Empleado';
}
