import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngsService } from '../ongs.service';
import { Ongs } from '../ongs';
import { Ong } from '../Ong';
//import { Busqueda } from './Busqueda';

@Component({
  selector: 'app-singleOng',
  templateUrl: './singleOng.component.html',
  styleUrls: ['./singleOng.component.css']
})
export class SingleOngComponent implements OnInit {
  
  ongs!: Ongs[];
  
  provincias: any[] = [];
  donaciones: any[] = [];
  provinciaElegida: any = null;
  donacionElegida: any =null;

 

  ong: Ongs = {
    id_Ong:'',
    provincia:'',
    nombre:'',
    direccion:'',
    cp:'',
    telefono:'',
    donacion:'',
  };


  constructor(private service: OngsService, private router:Router ) { }

  ngOnInit() {
    
    
    this.service.getList()
    .subscribe(data=>{
    this.ongs=data;
    })
  

    this.listaProvincia();
    this.listaDonacion();

   
  }

  List(){
    this.router.navigate(["list"]);
  }

  listaProvincia():void{
  this.service.provincia().subscribe(
    (       data: any[]) =>{
    this.provincias=data;
  },
    (    err: any) => {
      console.log(err);
    }
  );
  }

  listaDonacion() : void{
  this.service.donacion(this.ongs).subscribe((data: any[])=>{
    this.donaciones=data;
  },
    (err: any) => {
  console.log(err);
    }
  );
  }

onChangeDonacion(): void {
if(this.donacionElegida){
  this.ong.donacion = this.donacionElegida.ongs;
}else{
  this.ong.donacion = ' ' ;
}
this.listaDonacion();
}

onChangeProvincia(): void {
  if(this.provinciaElegida){
    this.ong.provincia = this.provinciaElegida.ongs;
  }else{
    this.ong.provincia = ' ';
  }
  this.listaProvincia();
  }

}
