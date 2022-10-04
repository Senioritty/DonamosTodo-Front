import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ongs } from 'src/app/ongs/ongs';
import { OngsService } from 'src/app/ongs/ongs.service';


@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent implements OnInit {
 
 ongs!: Ongs[];
 
  //Ongs: any[] = [];
  provincias: any[] = [];
  donaciones: any[] = [];
  /*provinciaElegida: any = null;
  donacionElegida: any =null; */

   ong: Ongs = {
    id_Ong:'',
    nombre:'',
    direccion:'',
    cp:'',
    provincia:'',
    telefono:'',
    donacion:'',
  };
  
  
  

  constructor(private ongservice: OngsService, private router:Router ) { }

  ngOnInit() {
    this.ongservice.getListar()
    .subscribe(data=>{
    this.ongs=data;
    });

    /* this.listaDonacion();
    this.listaProvincia();  */

  }

  Listar(){
    this.router.navigate(["listar"]);
  }

  /* listaProvincia():void{
  this.ongservice.provincias(this.ongs).subscribe((data: any[]) =>{
    this.provincias=data;
  },
    (    err: any) => {
      console.log(err);
    }
  );
  }

  listaDonacion() : void{
  this.ongservice.donaciones(this.ongs).subscribe((data: any[])=>{
    this.donaciones=data;
  },
    (err: any) => {
  console.log(err);
    }
  );
  }
 */
 /* onChangeDonacion(): void {
if(this.donacionElegida){
  this.donaciones = this.donacionElegida.ongs;
}else{
  this.donaciones = '' ;
}
this.listaDonacion();
}

onChangeProvincia(): void {
  if(this.provinciaElegida){
    this.provincias = this.provinciaElegida;
  }else{
    this.provincias = '';
  }
  this.listaProvincia();
  }
  */
  

}
