import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations:[
    AppComponent,
    OngsComponent,
    ListComponent,
    SingleOngComponent
    
],
imports:[
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule
],

providers:[],
bootstrap: [AppComponent]
})

export class AppModule{}


const routes: Routes = [
  {path:'ongs', component:OngsComponent},
  {path:'', redirectTo:'ongs', pathMatch:'full'}
];