import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ongs } from './ongs';
import { HttpClient } from '@angular/common/http';
//hay que importar import { HttpClientModule } from '@angular/common/http'en el app.module.ts
//y hay que incluirlo en ls imports:[HttpClientModule]
@Injectable({
  providedIn: 'root'
})
// hay que importar observable, Httpclient y el modelo (users)
export class OngsService {

  constructor(private httpClient:HttpClient) { }
  //dirección del back
  private baseURL="https://donamos-back-senioritty.cleverapps.io/orgs";
  
  org = {
    id_Org:" ",
    id_Prov:" ",
    nombre:" ",
    direccion:" ",
    cp:" ",
    telefono:" ",
    id_Don:" ",
 
  }

  obtenerOngs():Observable<Ongs[]>{
   
    
    return this.httpClient.get<Ongs[]>(`${this.baseURL}`);
    
       
  }

  modificarOngs( ongs:Ongs) { 
   
   return this.httpClient.put<Ongs>(`${this.baseURL}`, ongs)

  
  }

  borrarOngs(ongs:Ongs){
   
   return this.httpClient.delete<Ongs>(this.baseURL+"/"+ongs.id_Ong)



   
  }
  crearOngs(ongs:Ongs){
   
    return this.httpClient.post<Ongs>(`${this.baseURL}`, ongs)
  
  }

}