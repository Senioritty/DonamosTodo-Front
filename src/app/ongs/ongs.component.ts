import { Component, OnInit } from '@angular/core';
import { Ongs } from './ongs';
import { OngsService } from './ongs.service';

@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
export class OngsComponent implements OnInit {

  us!: Ongs[];
  use = {
    id_Ong:" ",
    nombre:" ",
    direccion:" ",
    id_Prov:" ",
    cp:" ",
    telefono:" ",
    id_Don:" ",
  }

  constructor(private ongsServicio:OngsService) { }
  
  ngOnInit(): void {
     this.traerOngs();
  
  }
  
  public traerOngs(){
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
  
    
    
    }
    