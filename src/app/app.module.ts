import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListarComponent } from './listar/listar.component';
import { SeleccionarComponent } from './seleccionar/seleccionar.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OngsComponent } from './ongs/ongs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeleccionarComponent,
    SocialmediaComponent,
    EquipoComponent,
    ContactoComponent,
    CarrouselComponent,
    EncabezadoComponent,
    FooterComponent,
    ListarComponent,
    OngsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    FormsModule,
    HttpClientModule
    //NgbModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


const routes: Routes = [
  
  {path:'', redirectTo:'ongs', pathMatch:'full'},
  {path:'ongs', component: OngsComponent},
  {path:'listar', component: ListarComponent},
  {path:'seleccionar', component: SeleccionarComponent},
  {path:'equipo', component: EquipoComponent},
  {path:'contacto', component: ContactoComponent}
];
