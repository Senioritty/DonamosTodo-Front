import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngsComponent } from './ongs/ongs.component';
//const routes:Route hay que incluirla en el app.module.ts y tambien importa RouterModule
const routes: Routes = [
  {path:'ongs', component:OngsComponent},
  //dirección vacía en el navegador hace un redirect a users
  {path:'', redirectTo:'ongs', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//una vez definidas las rutas hay que poner <router-outlet></router-outlet> en el app.component.ts y borrar todo lo que está ahí por defecto