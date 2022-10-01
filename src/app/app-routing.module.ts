import { NgModule } from '@angular/core';
import { ListComponent } from './ongs/list/list.component';
import { SingleOngComponent } from './ongs/singleOng/singleOng.component';
import { RouterModule, Routes } from '@angular/router';
import { OngsComponent } from './ongs/ongs.component';
//import { ComponentsModule} from './components/components.module';
//import { AppComponent } from './app.component';

//const routes:Route hay que incluirla en el app.module.ts y tambien importa RouterModule

const routes: Routes = [
{path:'list', component: ListComponent},
{path:'singleOng', component: SingleOngComponent},
{path:'ongs', component: OngsComponent},
  //dirección vacía en el navegador hace un redirect a ongs
{path:'component', redirectTo:"ongs", pathMatch:'full'},
];

@NgModule({
 imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//El hash es para que funcione la conexion a local
//una vez definidas las rutas hay que poner <router-outlet></router-outlet> en el app.component.ts y borrar todo lo que está ahí por defecto