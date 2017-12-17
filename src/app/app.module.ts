import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar el routing
import { routing, appRoutingProviders } from './app.routing';
// Importar modulo HttpModule
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Importar el componente FrutaComponent
import { FrutaComponent } from './fruta/fruta.component';
// Importar el componente  EmpleadoComponent
import { EmpleadoComponent } from './empleado/empleado.component';
// Importar el componente  PersonaComponent
import { PersonaComponent } from './persona/persona.component';
// Importar el modulo FormsModule
import { FormsModule } from '@angular/forms';
// Importar los componentes de Home y Contacto
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
// Importar el ConversorPipe
import { ConversorPipe } from './pipes/conversor.pipe';
// Importar el componente CocheComponent
import { CocheComponent } from './coche/coche.component';
// Importar el componente PlantillaComponent
import { PlantillaComponent } from './plantilla/plantilla.component';

// Crear un  modulo
@NgModule({
  declarations: [
    AppComponent,
    // Declarar el componente FrutaComponent
    FrutaComponent,
    // Declarar el componente EmpleadoComponent
    EmpleadoComponent,
    // Declarar el componente PersonaComponent
    PersonaComponent,
    // Cargar los componentes Home y Contacto
    HomeComponent,
    ContactoComponent,
    // Cargar el conversor Pipe
    ConversorPipe,
    // Cargar el componente CocheComponent
    CocheComponent,
    // Cargar el componente PlantillaComponent
    PlantillaComponent
  ],
  // Cargar modulos del framework y otros
  imports: [
    BrowserModule,
    // Declarar FormsModule
    FormsModule,
    // Cargar el modulo de rutas
    routing,
    // Cargar HttpModule
    HttpModule
  ],
  // Cargar servicios
  providers: [
    // Cargar el servicio para lanzar las rutas
    appRoutingProviders,
  ],
  // Indicar el componente principal/inicial
  bootstrap: [AppComponent]
})
export class AppModule { }
