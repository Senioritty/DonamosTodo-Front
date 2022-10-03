import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingleOngComponent } from './singleOng/singleOng.component';
import { ListComponent } from './list/list.component';
//import { Ongs } from './ongs';


@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})

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

  us!: Ongs[];
  use = {
    id_Ong:" ",
    nombre:" ",
    direccion:" ",
    id_Prov:" ",
    cp:" ",
    telefono:" ",
    id_Don:" ",
  };



constructor(private ongsServicio:OngsService) { }
  
  ngOnInit(): void {
     this.traerOngs();
  
  }
  
  public traerOngs(){
   this.ongsServicio.obtenerOngs().subscribe(dato =>{this.us = dato}) 
    }

    public obtenerOngs(){
      this.ongsServicio.obtenerOngs().subscribe(dato =>{this.us = dato}) 
       }

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
        
      this.ongsServicio.crearOngs(us).subscribe((dato:{ id_Ong: string}) =>this.traerOngs());
      
      }
      else{  alert("El nombre no puede estar en blanco")}
    }
    recargar(): void {
      window.location.reload();
    }
  

    */ 
}
    