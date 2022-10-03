import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngsComponent } from '../../ongs/ongs.component';



const routes: Routes = [
  {path:'ongs', component:OngsComponent},
  {path:'', redirectTo:'ongs', pathMatch:'full'}
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
