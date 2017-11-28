import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// Importar el componente
import { FrutaComponent } from './fruta/fruta.component';
// Crear un  modulo
@NgModule({
  // Declarar los componentes
  declarations: [
    AppComponent,
    FrutaComponent
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
