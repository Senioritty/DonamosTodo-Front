import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DesplegablesComponent } from './desplegables/desplegables.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ContactoComponent } from './contacto/contacto.component';




@NgModule({
  declarations: [
    NavbarComponent,
    DesplegablesComponent,
    SocialmediaComponent,
    ContactoComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
      NavbarComponent,
      DesplegablesComponent,
      SocialmediaComponent,
      ContactoComponent
  ]

})
export class ComponentsModule { }
