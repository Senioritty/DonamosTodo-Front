//y hay que incluirlo en ls imports:[HttpClientModule]
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ongs } from './ongs';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OngsService {
  http: any;

  constructor(private httpClient:HttpClient) { }
  //dirección del back
  //private baseURL="https://donamos-back-senioritty.cleverapps.io/ongs";
   // Url= 'http://localhost:8080/ongs/list';
    //baseUrl="http://localhost:8080/ongs/singleOng";
   

  //getOngs(){
  //return this.httpClient.get<Ongs[]>(this.Url);
  //}
  getList(){
    return this.httpClient.get<Ongs[]>('http://localhost:8080/ongs/list');
  } 
  getSingleOng(){
   return this.httpClient.get<Ongs[]>('http://localhost:8080/ongs/singleOng');
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

  obtenerOngs():Observable<Ongs[]>{
   
    
    return this.httpClient.get<Ongs[]>(`${this.baseURL}`);
    
       
  }

  modificarOngs( ongs:Ongs) { 
   
   return this.httpClient.put<Ongs>(`${this.baseURL}`, ongs)

  
  }

  borrarOngs(ongs:Ongs){
   
   return this.httpClient.delete<Ongs>(this.baseURL+"/"+ ongs)



   
  }
  crearOngs(ongs:Ongs){
   
    return this.httpClient.post<Ongs>(`${this.baseURL}`, ongs)
  
  }
 */