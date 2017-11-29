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
  // Definir la propiedad titulo como publica
  public titulo = 'Componente de Empleado';
}
