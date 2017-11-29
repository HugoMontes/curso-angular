import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// Importar el componente FrutaComponent
import { FrutaComponent } from './fruta/fruta.component';
// Importar el componente  EmpleadoComponent
import { EmpleadoComponent } from './empleado/empleado.component';
// Importar el componente  VariableComponent
import { VariableComponent } from './variable/variable.component';
// Crear un  modulo
@NgModule({
  declarations: [
    AppComponent,
    // Declarar el componente FrutaComponent
    FrutaComponent,
    // Declarar el componente EmpleadoComponent
    EmpleadoComponent,
    // Declarar el componente VariableComponent
    VariableComponent,
  ],
  // Cargar modulos del framework y otros
  imports: [
    BrowserModule
  ],
  // Cargar servicios
  providers: [],
  // Indicar el componente principal/inicial
  bootstrap: [AppComponent]
})
export class AppModule { }
