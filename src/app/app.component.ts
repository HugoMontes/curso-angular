// Importar el modulo Component del paquete @angular/core
// el cual fue descargado por npm
import { Component } from '@angular/core';
// El anterior paquete nos provee un DECORADOR @Component
// DECORADOR: Soporta una serie de metadatos y da funcionalidad
// a la clase de abajo
@Component({
  // selector es una propiedad/metadato del decorador
  // selector hace referencia a una etiqueta con el nombre app-root
  // donde se va cargar el componente, esta etiqueta esta en el
  // archivo curso-angular/src/index.html
  selector: 'app-root',
  // templateUrl: Asigna una VISTA/PLANTILLA a un archivo html el
  // cual permite imprimir informacion dentro de la clase del
  // componente
  templateUrl: './app.component.html',
  // styleUrls: Definimos archivos css que afectan UNICAMENTE
  // al componente actual
  styleUrls: ['./app.component.css']
})
// Crear la clase AppComponent
// export: Permite hacer uso de la clase en otro archivo
export class AppComponent {
  // Cambiar el valor de la propiedad/atributo del titulo
  title = 'Componente Principal';
}
