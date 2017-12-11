// Importar el modulo ModuleWithProviders
import  { ModuleWithProviders } from '@angular/core';
// Importar los compoentes del router
import  { Routes, RouterModule } from '@angular/router';
// Importar componentes Empleado y Fruta
import  { EmpleadoComponent } from './empleado/empleado.component';
import  { FrutaComponent } from './fruta/fruta.component';
// Importar los componentes de Home y Contacto
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

// Definir una constante que contiene un array de objetos json con las rutas asociadas a un componente
const appRoutes: Routes = [
  // Definir la ruta home/inicial
  {path: '', component: HomeComponent},
  // Definir la ruta para empleado
  {path: 'empleado', component: EmpleadoComponent},
  // Definir la ruta para fruta
  {path: 'fruta', component: FrutaComponent},
  // Definir la ruta para home y contacto
  {path: 'pagina-principal', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  // Definir la ruta para el error 404
  {path: '**', component: EmpleadoComponent},
];

// Exportar las constantes necesarias para utilizar el routing
export const appRoutingProviders: any[] = [];
// Inidicar mediante el metodo forRoot el array de rutas a cargar
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
