import { Component, OnInit } from '@angular/core';

import { Ongs } from './ongs';
import { OngsService } from './ongs.service';
import { Router } from '@angular/router';
import { SeleccionarComponent } from '../seleccionar/seleccionar.component';
import { ListarComponent } from '../listar/listar.component';



@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
export class OngsComponent implements OnInit {
  title = "DT-Front";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
Listar(){
  this.router.navigate(["listar"]);
}

Seleccionar():void{
  this.router.navigate(["seleccionar"]);
}


}
