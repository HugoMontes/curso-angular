// Importar Component del paquete @angular/core
import { Component } from '@angular/core';
// Adicionar el decorador @Component
@Component({
  // Indicar la etiqueta donde cargar el componente
  selector: 'fruta',
  // Definir una plantilla
  templateUrl: './fruta.component.html',
})
// Crear la clase FrutaComponent
export class FrutaComponent {
  // Declarar las propiedades/atributos del componente
  public nombre_componente = 'Componente de fruta';
  public lista_frutas = 'Naranja, Manzana, Pera y Sandia';
}
