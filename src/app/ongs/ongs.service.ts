//y hay que incluirlo en ls imports:[HttpClientModule]
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ongs } from './ongs';
//import { HttpClientModule } from '@angular/common/http';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OngsService {
  http: any;
  provincia: any;
  donacion: any;
  provincias: any;
  donaciones: any;

  constructor(private httpClient:HttpClient) { }
  //dirección del back
  //private baseURL="https://donamos-back-senioritty.cleverapps.io/ongs";
   // Url= 'http://localhost:8080/ongs/listar';
    //baseUrl="http://localhost:8080/ongs/seleccionar";
   


  getListar(){
    return this.httpClient.get<Ongs[]>('https://donamos-back-senioritty.cleverapps.io/ongs/listar');
  } 
  getSeleccionar(){
   return this.httpClient.get<Ongs[]>('https://donamos-back-senioritty.cleverapps.io/ongs/seleccionar');
  }
  //obtenerOngs():Observable<Ongs[]>{
  // return this.httpClient.get<Ongs[]>(`${this.baseUrl}`);
  //}


}

 /*  

 ongs:Ongs[];

  ong = {
    id_Ong:" ",
    nombre:" ",
    direccion:" ",
    cp:"",
    id_Prov:" ",
    telefono: " ",
    id_Don: " " 
  }
*/