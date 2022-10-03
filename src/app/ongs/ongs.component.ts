import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Ongs } from './ongs';
import { OngsService } from './ongs.service';
=======
import { Router } from '@angular/router';
import { SingleOngComponent } from './singleOng/singleOng.component';
import { ListComponent } from './list/list.component';
//import { Ongs } from './ongs';

>>>>>>> saveMe

@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
<<<<<<< HEAD
export class OngsComponent implements OnInit {
=======

export class OngsComponent {
  title = "DonamosTodo";

  constructor(private router:Router){}
 
  List(){
    this.router.navigate(["list"]);
  }

  SingleOng(): void{
    this.router.navigate(["singleOng"]);
  }




/* 

export class OngsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
>>>>>>> saveMe

  us!: Ongs[];
  use = {
    id_Ong:" ",
<<<<<<< HEAD
    id_Prov:" ",
    nombre:" ",
    direccion:" ",
    cp:" ",
    telefono:" ",
    id_Don:" ",
    }

  constructor(private ongsServicio:OngsService) { }
=======
    nombre:" ",
    direccion:" ",
    id_Prov:" ",
    cp:" ",
    telefono:" ",
    id_Don:" ",
  };



constructor(private ongsServicio:OngsService) { }
>>>>>>> saveMe
  
  ngOnInit(): void {
     this.traerOngs();
  
  }
  
  public traerOngs(){
   this.ongsServicio.obtenerOngs().subscribe(dato =>{this.us = dato}) 
    }
<<<<<<< HEAD
=======

    public obtenerOngs(){
      this.ongsServicio.obtenerOngs().subscribe(dato =>{this.us = dato}) 
       }

>>>>>>> saveMe
    public modifOngs(us:Ongs){
      if (us.nombre != " "){
       
        this.ongsServicio.modificarOngs(us).subscribe(()=>this.traerOngs());
      }
      else{  alert("El nombre no puede estar en blanco")}
      }
    
      public delOngs(ongs:Ongs):void{
       this.ongsServicio.borrarOngs(ongs).subscribe(()=>this.traerOngs());
      
       
     }
     public altaOngs(us:Ongs){
      if (us.nombre != " "){
        
<<<<<<< HEAD
      this.ongsServicio.crearOngs(us).subscribe((dato: { id_Ong: string; id_Prov: string; nombre: string; direccion: string; cp: string; telefono: string; id_Don: string}) =>this.traerOngs());
      
      }
      else{  alert("El campo no puede estar en blanco")}
=======
      this.ongsServicio.crearOngs(us).subscribe((dato:{ id_Ong: string}) =>this.traerOngs());
      
      }
      else{  alert("El nombre no puede estar en blanco")}
>>>>>>> saveMe
    }
    recargar(): void {
      window.location.reload();
    }
  
<<<<<<< HEAD
    
    
    }
=======

    */ 
}
    
>>>>>>> saveMe
