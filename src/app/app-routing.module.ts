import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngsComponent } from './ongs/ongs.component';
import { ListarComponent } from './listar/listar.component';
import { SeleccionarComponent } from './seleccionar/seleccionar.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';



const routes: Routes = [

  
  {path:'', redirectTo:'navbar', pathMatch:'full'},
  {path:'navbar', component: NavbarComponent},
  {path: 'socialmedia', component: SocialmediaComponent},
  {path:'listar', component: ListarComponent},
  {path:'seleccionar', component: SeleccionarComponent},
  {path:'equipo', component: EquipoComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'ongs', component: OngsComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
