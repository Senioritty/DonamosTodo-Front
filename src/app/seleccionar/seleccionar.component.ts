import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';
import { Ongs } from 'src/app/ongs/ongs';
import { OngsService } from 'src/app/ongs/ongs.service';


@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent {


  provincias;
  provSeleccionada: string = '0';
  verSeleccion:String = '';


  constructor(){
    this.provincias =  ['CABA','Catamarca','Chaco','Chubut',
    'Formosa','Jujuy','La Pampa','Mendoza','Neuquen','Tucuman',
    'Rio Negro','Salta','Santa Fe','Santiago del Estero'];
  }

seleccionar(){
this.verSeleccion=this.provSeleccionada;
}

ongs!: Ongs[];

  
}
