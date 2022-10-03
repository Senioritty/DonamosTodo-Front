import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngsComponent } from './ongs/ongs.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path:'ongs', component:OngsComponent},
  {path:'', redirectTo:'ongs', pathMatch:'full'}
];
=======
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngsComponent } from './ongs/ongs.component';
import { ComponentsModule } from './components/components.module';
import { OngsService } from './ongs/ongs.service';
import { ListComponent } from './ongs/list/list.component';
import { SingleOngComponent } from './ongs/singleOng/singleOng.component';

>>>>>>> saveMe
@NgModule({
  declarations:[
    AppComponent,
<<<<<<< HEAD
    OngsComponent
  ],
  imports: [
=======
    OngsComponent,
    ListComponent,
    SingleOngComponent
    
],
imports:[
>>>>>>> saveMe
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
    ComponentsModule,
    ReactiveFormsModule
],

providers:[OngsService],
bootstrap: [AppComponent]
>>>>>>> saveMe
})

export class AppModule{}


const routes: Routes = [
  {path:'ongs', component:OngsComponent},
  {path:'', redirectTo:'ongs', pathMatch:'full'}
];