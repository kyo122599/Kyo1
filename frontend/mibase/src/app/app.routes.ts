import { Routes } from '@angular/router';
import { UsersComponent } from '../app/components/users/users.component';
import { BienvenidoComponent } from '../app/components/bienvenido/bienvenido.component';
import { ContenidoComponent } from '../app/components/contenido/contenido.component';

import { ContactoComponent } from '../app/components/contacto/contacto.component';
import { AcercaDeComponent } from '../app/components/acerca-de/acerca-de.component';
export const routes: Routes = [
  { path: 'usuario', component: UsersComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' }
];
